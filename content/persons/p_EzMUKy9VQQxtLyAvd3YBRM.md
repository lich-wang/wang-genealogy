---
schema: wang-person/v1
id: p_EzMUKy9VQQxtLyAvd3YBRM
status: active
merged_into: null
display_name: 王昇朝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_on6BjcoAkuZbHfjWS1F3jN
        subject_person_id: p_EzMUKy9VQQxtLyAvd3YBRM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇朝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u94T6mz5qKAGB4gHbGgoiB
          claim_id: c_on6BjcoAkuZbHfjWS1F3jN
          source_id: s_bJcyg5f5Za13XdP5DsLL6h
          stance: supports
          locator: CBDB:159541
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（159541）
          source: &a1
            id: s_bJcyg5f5Za13XdP5DsLL6h
            source_type: api_record
            title: 中国历代人物传记资料库：王昇朝（CBDB 159541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159541&o=json
            external_identifier: CBDB:159541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YPMvSmihQK5cVjs4iovqZR
        subject_person_id: p_EzMUKy9VQQxtLyAvd3YBRM
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
        - id: cs_S3srwXH8N4s8YSnWKSJi49
          claim_id: c_YPMvSmihQK5cVjs4iovqZR
          source_id: s_bJcyg5f5Za13XdP5DsLL6h
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

# 王昇朝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昇朝 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昇朝（CBDB 159541）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159541&o=json)
