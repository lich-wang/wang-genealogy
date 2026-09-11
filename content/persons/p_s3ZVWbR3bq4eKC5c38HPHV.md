---
schema: wang-person/v1
id: p_s3ZVWbR3bq4eKC5c38HPHV
status: active
merged_into: null
display_name: 王玉書
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7EzqsaMGhxaKANHRjDxxtz
        subject_person_id: p_s3ZVWbR3bq4eKC5c38HPHV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉書
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yoovbY3Kc5NzU7GEViy5gQ
          claim_id: c_7EzqsaMGhxaKANHRjDxxtz
          source_id: s_Cf5BnkX5eoTNz1N7wWiDXM
          stance: supports
          locator: CBDB:71449
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71449）
          source: &a1
            id: s_Cf5BnkX5eoTNz1N7wWiDXM
            source_type: api_record
            title: 中国历代人物传记资料库：王玉書（CBDB 71449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71449&o=json
            external_identifier: CBDB:71449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.682Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PP2y2Mb8JP5AkFegnKEqU3
        subject_person_id: p_s3ZVWbR3bq4eKC5c38HPHV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1819年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5iujfgBNqW5ZUuBFqs7RP1
          claim_id: c_PP2y2Mb8JP5AkFegnKEqU3
          source_id: s_Cf5BnkX5eoTNz1N7wWiDXM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iWK6QkxAfXyPWhJHYNd1E7
        subject_person_id: p_s3ZVWbR3bq4eKC5c38HPHV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉書（生于1819年），清人物。籍贯南安。（中国历代人物传记资料库 CBDB 71449）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ojtJxJUbwniykamTIdTxrb
          claim_id: c_iWK6QkxAfXyPWhJHYNd1E7
          source_id: s_Cf5BnkX5eoTNz1N7wWiDXM
          stance: supports
          locator: CBDB:71449
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

# 王玉書

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉書 | accepted |
| birth.date | 1819年 | accepted |
| bio.summary | 王玉書（生于1819年），清人物。籍贯南安。（中国历代人物传记资料库 CBDB 71449） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玉書（CBDB 71449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71449&o=json)
