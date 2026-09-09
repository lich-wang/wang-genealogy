---
schema: wang-person/v1
id: p_E8btMQqVA1o27TgqYa4da1
status: active
merged_into: null
display_name: 王立行
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2zqzizuqLnA8Ys1jmGiGNU
        subject_person_id: p_E8btMQqVA1o27TgqYa4da1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立行
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_71r3v26FJoQAHdtE6vC9Xc
          claim_id: c_2zqzizuqLnA8Ys1jmGiGNU
          source_id: s_GnWfjZVgzUpF75YcLaL754
          stance: supports
          locator: CBDB:382203
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（382203）
          source: &a1
            id: s_GnWfjZVgzUpF75YcLaL754
            source_type: api_record
            title: 中国历代人物传记资料库：王立行（CBDB 382203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382203&o=json
            external_identifier: CBDB:382203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TkGCNJ8TK4qwdJMVvKw2NN
        subject_person_id: p_E8btMQqVA1o27TgqYa4da1
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
        - id: cs_HBDKo4kGJxHYYgfkvHeNYk
          claim_id: c_TkGCNJ8TK4qwdJMVvKw2NN
          source_id: s_GnWfjZVgzUpF75YcLaL754
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

# 王立行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立行 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王立行（CBDB 382203）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382203&o=json)
