---
schema: wang-person/v1
id: p_a55izxWr7XvDUXinjUvb7x
status: active
merged_into: null
display_name: 王汝成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N7aXs1toyef1U5yZgEcjFo
        subject_person_id: p_a55izxWr7XvDUXinjUvb7x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fMJEDGJePr6g86vKBo3GsP
          claim_id: c_N7aXs1toyef1U5yZgEcjFo
          source_id: s_JDUdA2h5BSFdUvFHx7dUBX
          stance: supports
          locator: CBDB:525982
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（525982）
          source: &a1
            id: s_JDUdA2h5BSFdUvFHx7dUBX
            source_type: api_record
            title: 中国历代人物传记资料库：王汝成（CBDB 525982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525982&o=json
            external_identifier: CBDB:525982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.328Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jkMNJn6qMbiqLDQRSrD7Au
        subject_person_id: p_a55izxWr7XvDUXinjUvb7x
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
        - id: cs_MqohcuDBtrHGnkiFVuDuW5
          claim_id: c_jkMNJn6qMbiqLDQRSrD7Au
          source_id: s_JDUdA2h5BSFdUvFHx7dUBX
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

# 王汝成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝成 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝成（CBDB 525982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525982&o=json)
