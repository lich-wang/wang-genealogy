---
schema: wang-person/v1
id: p_je6XLUqjL8A6Hb4DKdZMAg
status: active
merged_into: null
display_name: 王汴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ciLAnrCt4PevHbc9Siqa1y
        subject_person_id: p_je6XLUqjL8A6Hb4DKdZMAg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mDGWdEDQmvmHhwzq8FVUCK
          claim_id: c_ciLAnrCt4PevHbc9Siqa1y
          source_id: s_rnG3iT2YiMLpKGPp8gzxqs
          stance: supports
          locator: CBDB:22075
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22075）
          source: &a1
            id: s_rnG3iT2YiMLpKGPp8gzxqs
            source_type: api_record
            title: 中国历代人物传记资料库：王汴（CBDB 22075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22075&o=json
            external_identifier: CBDB:22075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.816Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6MZqqBKx9yY48XgU9XFjbw
        subject_person_id: p_je6XLUqjL8A6Hb4DKdZMAg
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
        - id: cs_4a9viQXR33eRtMnP4dyXgA
          claim_id: c_6MZqqBKx9yY48XgU9XFjbw
          source_id: s_rnG3iT2YiMLpKGPp8gzxqs
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

# 王汴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汴 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汴（CBDB 22075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22075&o=json)
