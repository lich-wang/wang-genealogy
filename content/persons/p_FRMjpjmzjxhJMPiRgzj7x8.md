---
schema: wang-person/v1
id: p_FRMjpjmzjxhJMPiRgzj7x8
status: active
merged_into: null
display_name: 王賔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZD19QpzgeEArFmq4dtwL1K
        subject_person_id: p_FRMjpjmzjxhJMPiRgzj7x8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9N5V8iNrndCPbrf6FRDx7Q
          claim_id: c_ZD19QpzgeEArFmq4dtwL1K
          source_id: s_8aTtDrgLyL9oXYL4AWSbYv
          stance: supports
          locator: CBDB:702352
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（702352）
          source: &a1
            id: s_8aTtDrgLyL9oXYL4AWSbYv
            source_type: api_record
            title: 中国历代人物传记资料库：王賔（CBDB 702352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702352&o=json
            external_identifier: CBDB:702352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.812Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sSqTBfCqgirfmJCrxg4PZv
        subject_person_id: p_FRMjpjmzjxhJMPiRgzj7x8
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
        - id: cs_rcPXMELMqQw8vxx6NSmQ8H
          claim_id: c_sSqTBfCqgirfmJCrxg4PZv
          source_id: s_8aTtDrgLyL9oXYL4AWSbYv
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

# 王賔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賔 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賔（CBDB 702352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702352&o=json)
