---
schema: wang-person/v1
id: p_DP6mVGy7Bg888mb3e1eb4f
status: active
merged_into: null
display_name: 王炌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XUxTB6uQ2hQ9d6i3mJMQM6
        subject_person_id: p_DP6mVGy7Bg888mb3e1eb4f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dB18W9w6Lf2FAb8JSKx6kZ
          claim_id: c_XUxTB6uQ2hQ9d6i3mJMQM6
          source_id: s_8ptfF5nUva114s6ZS71kv7
          stance: supports
          locator: CBDB:219260
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（219260）
          source: &a1
            id: s_8ptfF5nUva114s6ZS71kv7
            source_type: api_record
            title: 中国历代人物传记资料库：王炌（CBDB 219260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219260&o=json
            external_identifier: CBDB:219260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.279Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9NFRJo9nu75MFCKJHjihQp
        subject_person_id: p_DP6mVGy7Bg888mb3e1eb4f
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
        - id: cs_Q9BCnN489Q6hZKiHzBEyYH
          claim_id: c_9NFRJo9nu75MFCKJHjihQp
          source_id: s_8ptfF5nUva114s6ZS71kv7
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

# 王炌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炌 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炌（CBDB 219260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219260&o=json)
