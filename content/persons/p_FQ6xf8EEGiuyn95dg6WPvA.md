---
schema: wang-person/v1
id: p_FQ6xf8EEGiuyn95dg6WPvA
status: active
merged_into: null
display_name: 王繩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ikQ9yvHBQomBdfFkeYDKK9
        subject_person_id: p_FQ6xf8EEGiuyn95dg6WPvA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TxxPrwC6ku3CnqgpRAf67P
          claim_id: c_ikQ9yvHBQomBdfFkeYDKK9
          source_id: s_zFozdca7AaFqASjzThiCae
          stance: supports
          locator: CBDB:216222
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（216222）
          source: &a1
            id: s_zFozdca7AaFqASjzThiCae
            source_type: api_record
            title: 中国历代人物传记资料库：王繩（CBDB 216222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216222&o=json
            external_identifier: CBDB:216222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.230Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q3QFQbEJAvSREENaH7P73W
        subject_person_id: p_FQ6xf8EEGiuyn95dg6WPvA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繩，明人物。萬曆五年進士，籍贯惠安。（中国历代人物传记资料库 CBDB 216222）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BfcU7PSqf3kKcmZGYzH_a5
          claim_id: c_q3QFQbEJAvSREENaH7P73W
          source_id: s_zFozdca7AaFqASjzThiCae
          stance: supports
          locator: CBDB:216222
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

# 王繩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繩 | accepted |
| bio.summary | 王繩，明人物。萬曆五年進士，籍贯惠安。（中国历代人物传记资料库 CBDB 216222） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繩（CBDB 216222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216222&o=json)
