---
schema: wang-person/v1
id: p_CGGwBMkDMWPcZbYsY2uxKC
status: active
merged_into: null
display_name: 王國英
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eNAcU2r2y8BFkmGkS4hpvG
        subject_person_id: p_CGGwBMkDMWPcZbYsY2uxKC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_daW9h5r4JY9fqFAYiMMo3a
          claim_id: c_eNAcU2r2y8BFkmGkS4hpvG
          source_id: s_mL931otdeByS7s5tKnroN5
          stance: supports
          locator: CBDB:101325
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101325）
          source: &a1
            id: s_mL931otdeByS7s5tKnroN5
            source_type: api_record
            title: 中国历代人物传记资料库：王國英（CBDB 101325）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101325&o=json
            external_identifier: CBDB:101325
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.799Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dch5oCkqZJzTNFXWupfABV
        subject_person_id: p_CGGwBMkDMWPcZbYsY2uxKC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國英，元人物。籍贯成都路，曾任州儒學教授。（中国历代人物传记资料库 CBDB 101325）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_48QcV2P06vBJoavTJMZLQt
          claim_id: c_dch5oCkqZJzTNFXWupfABV
          source_id: s_mL931otdeByS7s5tKnroN5
          stance: supports
          locator: CBDB:101325
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

# 王國英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國英 | accepted |
| bio.summary | 王國英，元人物。籍贯成都路，曾任州儒學教授。（中国历代人物传记资料库 CBDB 101325） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國英（CBDB 101325）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101325&o=json)
