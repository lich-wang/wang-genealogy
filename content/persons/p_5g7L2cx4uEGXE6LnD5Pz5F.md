---
schema: wang-person/v1
id: p_5g7L2cx4uEGXE6LnD5Pz5F
status: active
merged_into: null
display_name: 王獻
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F2grg4w7TWBiKiDSbDTNbg
        subject_person_id: p_5g7L2cx4uEGXE6LnD5Pz5F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AHvRswscJjvczz37UswZfz
          claim_id: c_F2grg4w7TWBiKiDSbDTNbg
          source_id: s_VpqdCQeZzzvdm8X8ssSNqu
          stance: supports
          locator: CBDB:313336
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313336）
          source: &a1
            id: s_VpqdCQeZzzvdm8X8ssSNqu
            source_type: api_record
            title: 中国历代人物传记资料库：王獻（CBDB 313336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313336&o=json
            external_identifier: CBDB:313336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.904Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vv42xbowVawhGHzs2d4nRA
        subject_person_id: p_5g7L2cx4uEGXE6LnD5Pz5F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kgGLR7UEGbn7kZodbeKWuW
          claim_id: c_vv42xbowVawhGHzs2d4nRA
          source_id: s_VpqdCQeZzzvdm8X8ssSNqu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_CoPF9n7WeliGRoh4fqm7D2
        subject_person_id: p_5g7L2cx4uEGXE6LnD5Pz5F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_emRFonnZuCJKKPb7oDivvy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_huOjUs1s-CVAWXguO5mMrR
          claim_id: c_CoPF9n7WeliGRoh4fqm7D2
          source_id: s_VpqdCQeZzzvdm8X8ssSNqu
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第六十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_emRFonnZuCJKKPb7oDivvy
        status: active
        display_name: 王道直
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王獻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獻 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_emRFonnZuCJKKPb7oDivvy | 王道直 | accepted |

## 外部来源

- [中国历代人物传记资料库：王獻（CBDB 313336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313336&o=json)
