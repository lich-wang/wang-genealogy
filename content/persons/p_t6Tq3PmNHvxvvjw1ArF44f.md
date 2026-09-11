---
schema: wang-person/v1
id: p_t6Tq3PmNHvxvvjw1ArF44f
status: active
merged_into: null
display_name: 王仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VE6eP8UNBmeKZEHMUmvfG9
        subject_person_id: p_t6Tq3PmNHvxvvjw1ArF44f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QnS5VXNP7CKn5sazvnKAZF
          claim_id: c_VE6eP8UNBmeKZEHMUmvfG9
          source_id: s_FDMVvFP7CuVQ8VHxjTqUTL
          stance: supports
          locator: CBDB:100626
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100626）
          source: &a1
            id: s_FDMVvFP7CuVQ8VHxjTqUTL
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 100626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100626&o=json
            external_identifier: CBDB:100626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.321Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_69mJLxUzAMSHScwLQmc8aJ
        subject_person_id: p_t6Tq3PmNHvxvvjw1ArF44f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁，元人物。籍贯太原路，入仕世襲(替)，曾任招討使、諸路總管府總管。（中国历代人物传记资料库 CBDB 100626）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s6uq0XEcBas20gsDajh1XF
          claim_id: c_69mJLxUzAMSHScwLQmc8aJ
          source_id: s_FDMVvFP7CuVQ8VHxjTqUTL
          stance: supports
          locator: CBDB:100626
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

# 王仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁 | accepted |
| bio.summary | 王仁，元人物。籍贯太原路，入仕世襲(替)，曾任招討使、諸路總管府總管。（中国历代人物传记资料库 CBDB 100626） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁（CBDB 100626）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100626&o=json)
