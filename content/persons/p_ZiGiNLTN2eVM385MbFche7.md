---
schema: wang-person/v1
id: p_ZiGiNLTN2eVM385MbFche7
status: active
merged_into: null
display_name: 王衡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y8XnUGN4tU6rJiAJ4rW493
        subject_person_id: p_ZiGiNLTN2eVM385MbFche7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w5sfRC6vbDE2v7NT6a6AV6
          claim_id: c_y8XnUGN4tU6rJiAJ4rW493
          source_id: s_bv1ZNJ2y9syZP1K2RUkVWQ
          stance: supports
          locator: CBDB:483319
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（483319）
          source: &a1
            id: s_bv1ZNJ2y9syZP1K2RUkVWQ
            source_type: api_record
            title: 中国历代人物传记资料库：王衡（CBDB 483319）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483319&o=json
            external_identifier: CBDB:483319
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.789Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bq5GSwojQeZ9QNLW4MrEM7
        subject_person_id: p_ZiGiNLTN2eVM385MbFche7
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
        - id: cs_1B7CEc2qZ8mq93hWA4FCah
          claim_id: c_Bq5GSwojQeZ9QNLW4MrEM7
          source_id: s_bv1ZNJ2y9syZP1K2RUkVWQ
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

# 王衡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衡 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王衡（CBDB 483319）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=483319&o=json)
