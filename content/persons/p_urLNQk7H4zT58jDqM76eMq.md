---
schema: wang-person/v1
id: p_urLNQk7H4zT58jDqM76eMq
status: active
merged_into: null
display_name: 陳朝宗
revision: 1
cbdb_id: 118115
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KcSrWFxebuRuQWa84RHnDT
        subject_person_id: p_urLNQk7H4zT58jDqM76eMq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳朝宗
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2Hrv9YoZOpHRJ5wYyHHOEL
          claim_id: c_KcSrWFxebuRuQWa84RHnDT
          source_id: s_hd9lcag4GB_bbw2ydzl5Lk
          stance: supports
          locator: CBDB:118115
          quotation: null
          interpretation_note: CBDB 明确记录的王韻梅配偶
          source: &a1
            id: s_hd9lcag4GB_bbw2ydzl5Lk
            source_type: api_record
            title: 中国历代人物传记资料库：陳朝宗（CBDB 118115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118115&o=json
            external_identifier: CBDB:118115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_FZeHAg8YcKkV_8VeMdEmhe
        subject_person_id: p_iL5q91CCmqVkNEMtG3vGre
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_urLNQk7H4zT58jDqM76eMq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6imTn2yJf4LKnG45e6Btp4
          claim_id: c_FZeHAg8YcKkV_8VeMdEmhe
          source_id: s_hd9lcag4GB_bbw2ydzl5Lk
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1939, HuWenKai #257：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iL5q91CCmqVkNEMtG3vGre
        status: active
        display_name: 王韻梅
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳朝宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 陳朝宗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_iL5q91CCmqVkNEMtG3vGre | 王韻梅 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳朝宗（CBDB 118115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118115&o=json)
