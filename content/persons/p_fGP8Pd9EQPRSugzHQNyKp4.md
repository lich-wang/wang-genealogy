---
schema: wang-person/v1
id: p_fGP8Pd9EQPRSugzHQNyKp4
status: active
merged_into: null
display_name: 王紹原
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RQwFp81ddWWjNmMhEffdYo
        subject_person_id: p_fGP8Pd9EQPRSugzHQNyKp4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹原
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dTnQ93xXjhqJdbPKed5mew
          claim_id: c_RQwFp81ddWWjNmMhEffdYo
          source_id: s_gsQT4PDJmEYNHRfC6A12jM
          stance: supports
          locator: CBDB:562658
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（562658）
          source: &a1
            id: s_gsQT4PDJmEYNHRfC6A12jM
            source_type: api_record
            title: 中国历代人物传记资料库：王紹原（CBDB 562658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562658&o=json
            external_identifier: CBDB:562658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.564Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G39Eu8sKxcCWBvjXCqvGBf
        subject_person_id: p_fGP8Pd9EQPRSugzHQNyKp4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹原，明人物。籍贯山陰。（中国历代人物传记资料库 CBDB 562658）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Fh5lGTzMt0zG2zWbIWnAD8
          claim_id: c_G39Eu8sKxcCWBvjXCqvGBf
          source_id: s_gsQT4PDJmEYNHRfC6A12jM
          stance: supports
          locator: CBDB:562658
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

# 王紹原

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹原 | accepted |
| bio.summary | 王紹原，明人物。籍贯山陰。（中国历代人物传记资料库 CBDB 562658） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹原（CBDB 562658）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562658&o=json)
