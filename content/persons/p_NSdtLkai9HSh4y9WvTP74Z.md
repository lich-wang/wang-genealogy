---
schema: wang-person/v1
id: p_NSdtLkai9HSh4y9WvTP74Z
status: active
merged_into: null
display_name: 王育芬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hqQGfGCtyW8xDWej6Ajofq
        subject_person_id: p_NSdtLkai9HSh4y9WvTP74Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王育芬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jfB5G2XZQgBGH8JuaqDvMu
          claim_id: c_hqQGfGCtyW8xDWej6Ajofq
          source_id: s_CvpWBBTYXKSM8yV7QToCUH
          stance: supports
          locator: CBDB:639998
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639998）
          source: &a1
            id: s_CvpWBBTYXKSM8yV7QToCUH
            source_type: api_record
            title: 中国历代人物传记资料库：王育芬（CBDB 639998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639998&o=json
            external_identifier: CBDB:639998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.117Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NwVGBcqjz2NuyfELe33DNL
        subject_person_id: p_NSdtLkai9HSh4y9WvTP74Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王育芬，清人物。籍贯江蘇省，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 639998）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s-6hh5k1CVolLA_IIhoWia
          claim_id: c_NwVGBcqjz2NuyfELe33DNL
          source_id: s_CvpWBBTYXKSM8yV7QToCUH
          stance: supports
          locator: CBDB:639998
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

# 王育芬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王育芬 | accepted |
| bio.summary | 王育芬，清人物。籍贯江蘇省，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 639998） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王育芬（CBDB 639998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639998&o=json)
