---
schema: wang-person/v1
id: p_1PGxkfhdBq5H6pifon2LFg
status: active
merged_into: null
display_name: 王春楨
cbdb_id: 343353
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DV13d1ipbV3j84NVDqnf6P
        subject_person_id: p_1PGxkfhdBq5H6pifon2LFg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春楨，明人物。明清進士進士，籍贯猗氏，入仕進士。（中国历代人物传记资料库 CBDB 343353）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_CJQH5hqNEl3Tohb7beRf7h
          claim_id: c_DV13d1ipbV3j84NVDqnf6P
          source_id: s_hghbbUsBK5nf6LQs5BgnJK
          stance: supports
          locator: CBDB:343353
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_hghbbUsBK5nf6LQs5BgnJK
            source_type: api_record
            title: 中国历代人物传记资料库：王春楨（CBDB 343353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343353&o=json
            external_identifier: CBDB:343353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:15.941Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NCdYj8YAFZ4DJBiwPrYmAH
        subject_person_id: p_1PGxkfhdBq5H6pifon2LFg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ViySNtvMAbWHvnKrYRJ49P
          claim_id: c_NCdYj8YAFZ4DJBiwPrYmAH
          source_id: s_hghbbUsBK5nf6LQs5BgnJK
          stance: supports
          locator: CBDB:343353
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4501-4600）｜历史性依据：CBDB 朝代 = 明
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

# 王春楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王春楨，明人物。明清進士進士，籍贯猗氏，入仕進士。（中国历代人物传记资料库 CBDB 343353） | accepted |
| name.primary | 王春楨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王春楨（CBDB 343353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343353&o=json)
