---
schema: wang-person/v1
id: p_h25hNz45FPtBKnrStVDu4K
status: active
merged_into: null
display_name: 王光前
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3Y7VcjPE2w4VC525tDaDoz
        subject_person_id: p_h25hNz45FPtBKnrStVDu4K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光前
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uLYAKhPcgJkkMwwzeE2mnT
          claim_id: c_3Y7VcjPE2w4VC525tDaDoz
          source_id: s_Vy8Z5ScYjawnZUkDiGKiAf
          stance: supports
          locator: CBDB:486683
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（486683）
          source: &a1
            id: s_Vy8Z5ScYjawnZUkDiGKiAf
            source_type: api_record
            title: 中国历代人物传记资料库：王光前（CBDB 486683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486683&o=json
            external_identifier: CBDB:486683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.918Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KeeYaNif8MDgxGWQo3bvJo
        subject_person_id: p_h25hNz45FPtBKnrStVDu4K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光前，明人物。曾任參將。（中国历代人物传记资料库 CBDB 486683）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nBu9bJMYGFUjwudMAM5jSk
          claim_id: c_KeeYaNif8MDgxGWQo3bvJo
          source_id: s_Vy8Z5ScYjawnZUkDiGKiAf
          stance: supports
          locator: CBDB:486683
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

# 王光前

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光前 | accepted |
| bio.summary | 王光前，明人物。曾任參將。（中国历代人物传记资料库 CBDB 486683） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光前（CBDB 486683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486683&o=json)
