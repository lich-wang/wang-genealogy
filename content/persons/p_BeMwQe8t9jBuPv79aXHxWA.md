---
schema: wang-person/v1
id: p_BeMwQe8t9jBuPv79aXHxWA
status: active
merged_into: null
display_name: 王之麟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ruGt1tZtmAnhRmcPHDncsZ
        subject_person_id: p_BeMwQe8t9jBuPv79aXHxWA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RYBNYiiYApVoMgD14LvPFZ
          claim_id: c_ruGt1tZtmAnhRmcPHDncsZ
          source_id: s_x6sAGRHGEYz3Q8AhyVS4XN
          stance: supports
          locator: CBDB:66260
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（66260）
          source: &a1
            id: s_x6sAGRHGEYz3Q8AhyVS4XN
            source_type: api_record
            title: 中国历代人物传记资料库：王之麟（CBDB 66260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66260&o=json
            external_identifier: CBDB:66260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_P1nWGJ5eLn65pLSrZsKr5e
        subject_person_id: p_BeMwQe8t9jBuPv79aXHxWA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1535年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d8u6M6E56UXCJFGr5G32t1
          claim_id: c_P1nWGJ5eLn65pLSrZsKr5e
          source_id: s_x6sAGRHGEYz3Q8AhyVS4XN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_3cQ16dmWitNMFKEhx3Gtxz
        subject_person_id: p_BeMwQe8t9jBuPv79aXHxWA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1600年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pbgsfgdB7NsWgMAc98qy8x
          claim_id: c_3cQ16dmWitNMFKEhx3Gtxz
          source_id: s_x6sAGRHGEYz3Q8AhyVS4XN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i1qXCTvLA9MNqHrL8S4QNf
        subject_person_id: p_BeMwQe8t9jBuPv79aXHxWA
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
        - id: cs_ttwrumCvLVUFvCYQMGxUFF
          claim_id: c_i1qXCTvLA9MNqHrL8S4QNf
          source_id: s_x6sAGRHGEYz3Q8AhyVS4XN
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

# 王之麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之麟 | accepted |
| birth.date | 1535年 | accepted |
| death.date | 1600年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之麟（CBDB 66260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66260&o=json)
