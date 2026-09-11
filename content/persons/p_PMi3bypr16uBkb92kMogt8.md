---
schema: wang-person/v1
id: p_PMi3bypr16uBkb92kMogt8
status: active
merged_into: null
display_name: 王夏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ehhe2uLSeBxQNfx7ZjmD5i
        subject_person_id: p_PMi3bypr16uBkb92kMogt8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A47MYHz9nu4iMpHtjU8Jfm
          claim_id: c_Ehhe2uLSeBxQNfx7ZjmD5i
          source_id: s_wu64AEhDFNfFmpszN1383Y
          stance: supports
          locator: CBDB:30054
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30054）
          source: &a1
            id: s_wu64AEhDFNfFmpszN1383Y
            source_type: api_record
            title: 中国历代人物传记资料库：王夏（CBDB 30054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30054&o=json
            external_identifier: CBDB:30054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.020Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gQkG9rSMfAb7Z8mXQniaMX
        subject_person_id: p_PMi3bypr16uBkb92kMogt8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夏，清人物。籍贯寶坻。（中国历代人物传记资料库 CBDB 30054）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e0p50NkzM6xEvX604r6qU9
          claim_id: c_gQkG9rSMfAb7Z8mXQniaMX
          source_id: s_wu64AEhDFNfFmpszN1383Y
          stance: supports
          locator: CBDB:30054
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

# 王夏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夏 | accepted |
| bio.summary | 王夏，清人物。籍贯寶坻。（中国历代人物传记资料库 CBDB 30054） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夏（CBDB 30054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30054&o=json)
