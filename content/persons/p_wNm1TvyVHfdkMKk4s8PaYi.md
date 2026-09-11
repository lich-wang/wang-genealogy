---
schema: wang-person/v1
id: p_wNm1TvyVHfdkMKk4s8PaYi
status: active
merged_into: null
display_name: 王萬齢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iAAPVkmmpa9EHBe8FFKK89
        subject_person_id: p_wNm1TvyVHfdkMKk4s8PaYi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬齢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JPwHtW9z51cDXNuA9irMhp
          claim_id: c_iAAPVkmmpa9EHBe8FFKK89
          source_id: s_f6s2G6kpNTGs6HN5wL2Kj6
          stance: supports
          locator: CBDB:640126
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640126）
          source: &a1
            id: s_f6s2G6kpNTGs6HN5wL2Kj6
            source_type: api_record
            title: 中国历代人物传记资料库：王萬齢（CBDB 640126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640126&o=json
            external_identifier: CBDB:640126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YTCUhp2wwTQacu3d8ye3LF
        subject_person_id: p_wNm1TvyVHfdkMKk4s8PaYi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬齢，清人物。籍贯陽曲，入仕附貢生，曾任知縣。（中国历代人物传记资料库 CBDB 640126）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V_aB7XgEzJmRuPcWR-Y4w8
          claim_id: c_YTCUhp2wwTQacu3d8ye3LF
          source_id: s_f6s2G6kpNTGs6HN5wL2Kj6
          stance: supports
          locator: CBDB:640126
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

# 王萬齢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬齢 | accepted |
| bio.summary | 王萬齢，清人物。籍贯陽曲，入仕附貢生，曾任知縣。（中国历代人物传记资料库 CBDB 640126） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬齢（CBDB 640126）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640126&o=json)
