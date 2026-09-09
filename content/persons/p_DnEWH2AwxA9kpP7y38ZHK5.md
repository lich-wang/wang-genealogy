---
schema: wang-person/v1
id: p_DnEWH2AwxA9kpP7y38ZHK5
status: active
merged_into: null
display_name: 王珝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xNnbkFvW4ftA18CXSYU8Hr
        subject_person_id: p_DnEWH2AwxA9kpP7y38ZHK5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XN1zcY6bci6HSgBAaQCmv5
          claim_id: c_xNnbkFvW4ftA18CXSYU8Hr
          source_id: s_nWGZcfdGmK1wVtLLKqHn6T
          stance: supports
          locator: CBDB:467512
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（467512）
          source: &a1
            id: s_nWGZcfdGmK1wVtLLKqHn6T
            source_type: api_record
            title: 中国历代人物传记资料库：王珝（CBDB 467512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467512&o=json
            external_identifier: CBDB:467512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.037Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kignb5M9hs8HLwWK96Xgj9
        subject_person_id: p_DnEWH2AwxA9kpP7y38ZHK5
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
        - id: cs_d21CqiLAJg8KjZR9NF7mX7
          claim_id: c_kignb5M9hs8HLwWK96Xgj9
          source_id: s_nWGZcfdGmK1wVtLLKqHn6T
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

# 王珝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珝 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珝（CBDB 467512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467512&o=json)
