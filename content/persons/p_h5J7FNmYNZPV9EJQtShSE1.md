---
schema: wang-person/v1
id: p_h5J7FNmYNZPV9EJQtShSE1
status: active
merged_into: null
display_name: 王迪
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RL3N7YBhMMt77YLMAkv36P
        subject_person_id: p_h5J7FNmYNZPV9EJQtShSE1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jcRTuW2dewJEMT1353Fw6v
          claim_id: c_RL3N7YBhMMt77YLMAkv36P
          source_id: s_DMvKRFRZHXze6Jr9xDSaC9
          stance: supports
          locator: CBDB:273123
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273123）
          source: &a1
            id: s_DMvKRFRZHXze6Jr9xDSaC9
            source_type: api_record
            title: 中国历代人物传记资料库：王迪（CBDB 273123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273123&o=json
            external_identifier: CBDB:273123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.895Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tsAc848ZRTmSrLjRMhyFVu
        subject_person_id: p_h5J7FNmYNZPV9EJQtShSE1
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
        - id: cs_c1cvsh4dtdJwq2B8v1ZykH
          claim_id: c_tsAc848ZRTmSrLjRMhyFVu
          source_id: s_DMvKRFRZHXze6Jr9xDSaC9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_U4nr_xRw5xtnrtZzuj4b4O
        subject_person_id: p_h5J7FNmYNZPV9EJQtShSE1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WrcoN9CL6jsGtB4NtmzaYe
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CQWRNqqRr24Kd7A_Ac3B5q
          claim_id: c_U4nr_xRw5xtnrtZzuj4b4O
          source_id: s_DMvKRFRZHXze6Jr9xDSaC9
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第四十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WrcoN9CL6jsGtB4NtmzaYe
        status: active
        display_name: 王良翰
        merged_into_person_id: null
  other: []
---

# 王迪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王迪 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_WrcoN9CL6jsGtB4NtmzaYe | 王良翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王迪（CBDB 273123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273123&o=json)
