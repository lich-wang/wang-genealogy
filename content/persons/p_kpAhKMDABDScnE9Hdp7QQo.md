---
schema: wang-person/v1
id: p_kpAhKMDABDScnE9Hdp7QQo
status: active
merged_into: null
display_name: 王閔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9mEH13295JUjM7Hy7mPvqr
        subject_person_id: p_kpAhKMDABDScnE9Hdp7QQo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6346saawdL4PrgQvQXsKG5
          claim_id: c_9mEH13295JUjM7Hy7mPvqr
          source_id: s_Z6YTMbHKMqB4ihYyqChUmE
          stance: supports
          locator: CBDB:175842
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175842）
          source: &a1
            id: s_Z6YTMbHKMqB4ihYyqChUmE
            source_type: api_record
            title: 中国历代人物传记资料库：王閔（CBDB 175842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175842&o=json
            external_identifier: CBDB:175842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.157Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9TQoCXPhtxE62LgtzJJNHY
        subject_person_id: p_kpAhKMDABDScnE9Hdp7QQo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 667年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2Q8T4rC2GvvhjVh69k2QAD
          claim_id: c_9TQoCXPhtxE62LgtzJJNHY
          source_id: s_Z6YTMbHKMqB4ihYyqChUmE
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
        id: c_2jfx3KfGdYV7ALvVZVmGX6
        subject_person_id: p_kpAhKMDABDScnE9Hdp7QQo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PkrV3fedfkew4zfCEeT7fX
          claim_id: c_2jfx3KfGdYV7ALvVZVmGX6
          source_id: s_Z6YTMbHKMqB4ihYyqChUmE
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

# 王閔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王閔 | accepted |
| death.date | 667年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王閔（CBDB 175842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175842&o=json)
