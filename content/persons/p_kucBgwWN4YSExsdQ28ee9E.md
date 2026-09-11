---
schema: wang-person/v1
id: p_kucBgwWN4YSExsdQ28ee9E
status: active
merged_into: null
display_name: 王三槐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bo1HG2XS62UHWEWYyg8JfK
        subject_person_id: p_kucBgwWN4YSExsdQ28ee9E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A98bNqdABcU2F8MhYVLHmG
          claim_id: c_Bo1HG2XS62UHWEWYyg8JfK
          source_id: s_sLdTzT69RupptvrELtCM7e
          stance: supports
          locator: CBDB:509527
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（509527）
          source: &a1
            id: s_sLdTzT69RupptvrELtCM7e
            source_type: api_record
            title: 中国历代人物传记资料库：王三槐（CBDB 509527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509527&o=json
            external_identifier: CBDB:509527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.160Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zHDBLPNgC5CzjBbhYG8b7q
        subject_person_id: p_kucBgwWN4YSExsdQ28ee9E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三槐，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 509527）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xJriGbGwNUwJ7Th3Kove_T
          claim_id: c_zHDBLPNgC5CzjBbhYG8b7q
          source_id: s_sLdTzT69RupptvrELtCM7e
          stance: supports
          locator: CBDB:509527
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

# 王三槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三槐 | accepted |
| bio.summary | 王三槐，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 509527） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三槐（CBDB 509527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509527&o=json)
