---
schema: wang-person/v1
id: p_QQGzE6nGnHK5rcJCrPJj4u
status: active
merged_into: null
display_name: 王建中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9vrK5FCGckf3XDUsXvj2CA
        subject_person_id: p_QQGzE6nGnHK5rcJCrPJj4u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zb4YkCkQVUPGuy691W5Tiu
          claim_id: c_9vrK5FCGckf3XDUsXvj2CA
          source_id: s_U5BB2ZA6NrQR1XSmrhAnRB
          stance: supports
          locator: CBDB:71821
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71821）
          source: &a1
            id: s_U5BB2ZA6NrQR1XSmrhAnRB
            source_type: api_record
            title: 中国历代人物传记资料库：王建中（CBDB 71821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71821&o=json
            external_identifier: CBDB:71821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KUZZ5ZgmAA7mMn3EcPtgJy
        subject_person_id: p_QQGzE6nGnHK5rcJCrPJj4u
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1687年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Yr5a2t7qJnt7VUr5pDoyz
          claim_id: c_KUZZ5ZgmAA7mMn3EcPtgJy
          source_id: s_U5BB2ZA6NrQR1XSmrhAnRB
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
        id: c_xa8MoZ84V89mb3csz3Jyfm
        subject_person_id: p_QQGzE6nGnHK5rcJCrPJj4u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建中（生于1687年），清人物。籍贯錦州府。（中国历代人物传记资料库 CBDB 71821）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8IMWQblJbXsh9Xt640AI3-
          claim_id: c_xa8MoZ84V89mb3csz3Jyfm
          source_id: s_U5BB2ZA6NrQR1XSmrhAnRB
          stance: supports
          locator: CBDB:71821
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

# 王建中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建中 | accepted |
| birth.date | 1687年 | accepted |
| bio.summary | 王建中（生于1687年），清人物。籍贯錦州府。（中国历代人物传记资料库 CBDB 71821） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王建中（CBDB 71821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71821&o=json)
