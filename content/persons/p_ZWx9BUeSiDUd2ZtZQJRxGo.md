---
schema: wang-person/v1
id: p_ZWx9BUeSiDUd2ZtZQJRxGo
status: active
merged_into: null
display_name: 王希文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r2k9EHRmFx1wQQAzeq9xp4
        subject_person_id: p_ZWx9BUeSiDUd2ZtZQJRxGo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XSKq6Fqmk9j2gpPtHq4L9P
          claim_id: c_r2k9EHRmFx1wQQAzeq9xp4
          source_id: s_7bD6X6QACgJ5TN9t5K7TYM
          stance: supports
          locator: CBDB:326817
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326817）
          source: &a1
            id: s_7bD6X6QACgJ5TN9t5K7TYM
            source_type: api_record
            title: 中国历代人物传记资料库：王希文（CBDB 326817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326817&o=json
            external_identifier: CBDB:326817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.230Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zrw56S3hFBPrMpt3CgFhzf
        subject_person_id: p_ZWx9BUeSiDUd2ZtZQJRxGo
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
        - id: cs_5sYJbiqxMwF96Bb2ZNNNyM
          claim_id: c_Zrw56S3hFBPrMpt3CgFhzf
          source_id: s_7bD6X6QACgJ5TN9t5K7TYM
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

# 王希文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希文 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希文（CBDB 326817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326817&o=json)
