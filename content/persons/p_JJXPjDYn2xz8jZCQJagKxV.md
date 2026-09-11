---
schema: wang-person/v1
id: p_JJXPjDYn2xz8jZCQJagKxV
status: active
merged_into: null
display_name: 王之佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mWBrasUKJ7qJiFWUKEdrt9
        subject_person_id: p_JJXPjDYn2xz8jZCQJagKxV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gmq1R2MqvQxq6P8PCih6F1
          claim_id: c_mWBrasUKJ7qJiFWUKEdrt9
          source_id: s_w7U9uWWeB7eUWi6tUieAgU
          stance: supports
          locator: CBDB:494293
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（494293）
          source: &a1
            id: s_w7U9uWWeB7eUWi6tUieAgU
            source_type: api_record
            title: 中国历代人物传记资料库：王之佐（CBDB 494293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494293&o=json
            external_identifier: CBDB:494293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.433Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9EQay81kwpm5Pd4CkZ8gHC
        subject_person_id: p_JJXPjDYn2xz8jZCQJagKxV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之佐，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 494293）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wn8HJvUzJOk9Roo6ttszPX
          claim_id: c_9EQay81kwpm5Pd4CkZ8gHC
          source_id: s_w7U9uWWeB7eUWi6tUieAgU
          stance: supports
          locator: CBDB:494293
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王之佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之佐 | accepted |
| bio.summary | 王之佐，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 494293） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之佐（CBDB 494293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494293&o=json)
