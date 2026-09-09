---
schema: wang-person/v1
id: p_5tn9cvTosxz1Nqv6Dcd3eJ
status: active
merged_into: null
display_name: 王國
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q8XGwuooQpt3oCCBkqeD4H
        subject_person_id: p_5tn9cvTosxz1Nqv6Dcd3eJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R8ns5LwdzedSUUXY7bp56y
          claim_id: c_q8XGwuooQpt3oCCBkqeD4H
          source_id: s_WMHHoTnnJ3Maq8K1Ebc56H
          stance: supports
          locator: CBDB:498813
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（498813）
          source: &a1
            id: s_WMHHoTnnJ3Maq8K1Ebc56H
            source_type: api_record
            title: 中国历代人物传记资料库：王國（CBDB 498813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=498813&o=json
            external_identifier: CBDB:498813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.722Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d71uRjpq2LWJP7mEFQy3ii
        subject_person_id: p_5tn9cvTosxz1Nqv6Dcd3eJ
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
        - id: cs_RuGrU5SFfkCM7eP43w1HyV
          claim_id: c_d71uRjpq2LWJP7mEFQy3ii
          source_id: s_WMHHoTnnJ3Maq8K1Ebc56H
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
  descendants: []
  other: []
---

# 王國

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國（CBDB 498813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=498813&o=json)
