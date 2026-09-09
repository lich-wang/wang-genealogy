---
schema: wang-person/v1
id: p_hwAgcpRjLxjLJ7tEedLAQp
status: active
merged_into: null
display_name: 王汾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4DuEgryGuyfukLL8S9BHdC
        subject_person_id: p_hwAgcpRjLxjLJ7tEedLAQp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4185KKqnWS3rTcS5wK3aXH
          claim_id: c_4DuEgryGuyfukLL8S9BHdC
          source_id: s_yNv17UCUZFMHxjhgtViHer
          stance: supports
          locator: CBDB:17917
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17917）
          source: &a1
            id: s_yNv17UCUZFMHxjhgtViHer
            source_type: api_record
            title: 中国历代人物传记资料库：王汾（CBDB 17917）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17917&o=json
            external_identifier: CBDB:17917
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.701Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4BTUon654AdAQKi3HzKWS2
        subject_person_id: p_hwAgcpRjLxjLJ7tEedLAQp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FT5hJA4KL6t8gCL5GZuhgH
          claim_id: c_4BTUon654AdAQKi3HzKWS2
          source_id: s_yNv17UCUZFMHxjhgtViHer
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

# 王汾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汾 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汾（CBDB 17917）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17917&o=json)
