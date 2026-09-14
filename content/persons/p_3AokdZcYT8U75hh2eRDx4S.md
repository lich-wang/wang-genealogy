---
schema: wang-person/v1
id: p_3AokdZcYT8U75hh2eRDx4S
status: active
merged_into: null
display_name: 王學
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rmDzK6JXtJcYSsuhT9MpBH
        subject_person_id: p_3AokdZcYT8U75hh2eRDx4S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5rdmNnCeT6PkA9jY95R4fT
          claim_id: c_rmDzK6JXtJcYSsuhT9MpBH
          source_id: s_JxY9rkr5BvFozDmoVKxQGF
          stance: supports
          locator: CBDB:282004
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282004）
          source: &a1
            id: s_JxY9rkr5BvFozDmoVKxQGF
            source_type: api_record
            title: 中国历代人物传记资料库：王學（CBDB 282004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282004&o=json
            external_identifier: CBDB:282004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.064Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4Lszs856yiX5bfJc4NdkQi
        subject_person_id: p_3AokdZcYT8U75hh2eRDx4S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學，明人物。正德十二年進士，籍贯潞州衛。（中国历代人物传记资料库 CBDB 282004）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_v0lgqalS27ZbgvrSwrksld
          claim_id: c_4Lszs856yiX5bfJc4NdkQi
          source_id: s_JxY9rkr5BvFozDmoVKxQGF
          stance: supports
          locator: CBDB:282004
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FFPBcwpEWBd4HHRihdoUR7
        subject_person_id: p_Jk84ENYUVyTz1ayR9hKQUA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3AokdZcYT8U75hh2eRDx4S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uIde6zLMT4HZHKP3KMKl6R
          claim_id: c_FFPBcwpEWBd4HHRihdoUR7
          source_id: s_mFf__j4HRRC5VcKvYv66qw
          stance: supports
          locator: CBDB：兄弟 王泮（202013）之父／母 王鋀
          quotation: null
          interpretation_note: 由兄弟关系推断：王學 与 王泮 为同胞（CBDB 记「兄」），王泮 之父／母即 王學 之父／母。
          source:
            id: s_mFf__j4HRRC5VcKvYv66qw
            source_type: api_record
            title: 中国历代人物传记资料库：王學（CBDB 282004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282004&o=json
            external_identifier: CBDB:282004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Jk84ENYUVyTz1ayR9hKQUA
        status: active
        display_name: 王鋀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_7EvoWVD2Aw_HZ0EF4QiVUy
        subject_person_id: p_3AokdZcYT8U75hh2eRDx4S
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_STyrVbhawRK5QNwptzbque
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LrlB2IFPzUZz3pDaIfqloG
          claim_id: c_7EvoWVD2Aw_HZ0EF4QiVUy
          source_id: s_mFf__j4HRRC5VcKvYv66qw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202013 王泮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mFf__j4HRRC5VcKvYv66qw
            source_type: api_record
            title: 中国历代人物传记资料库：王學（CBDB 282004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282004&o=json
            external_identifier: CBDB:282004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_STyrVbhawRK5QNwptzbque
        status: active
        display_name: 王泮
        merged_into_person_id: null
---

# 王學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學 | accepted |
| bio.summary | 王學，明人物。正德十二年進士，籍贯潞州衛。（中国历代人物传记资料库 CBDB 282004） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Jk84ENYUVyTz1ayR9hKQUA | 王鋀 | accepted |
| other | p_STyrVbhawRK5QNwptzbque | 王泮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學（CBDB 282004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282004&o=json)
