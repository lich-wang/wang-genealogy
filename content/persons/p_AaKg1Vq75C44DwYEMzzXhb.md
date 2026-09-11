---
schema: wang-person/v1
id: p_AaKg1Vq75C44DwYEMzzXhb
status: active
merged_into: null
display_name: 王安
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h514FnQU7DzQjUWP4UVZjd
        subject_person_id: p_AaKg1Vq75C44DwYEMzzXhb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JjpNyRCN6HqGB5Ds6CAK5h
          claim_id: c_h514FnQU7DzQjUWP4UVZjd
          source_id: s_eD9UJ9dLK5DWkqhWMAH1K2
          stance: supports
          locator: CBDB:240587
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（240587）
          source: &a1
            id: s_eD9UJ9dLK5DWkqhWMAH1K2
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 240587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240587&o=json
            external_identifier: CBDB:240587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6b41yrtSNNnzBVcDTGTLAt
        subject_person_id: p_AaKg1Vq75C44DwYEMzzXhb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安，明人物。成化二年進士，籍贯閩縣。（中国历代人物传记资料库 CBDB 240587）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XX-3d3BCqQOVZ83QeKNJfl
          claim_id: c_6b41yrtSNNnzBVcDTGTLAt
          source_id: s_eD9UJ9dLK5DWkqhWMAH1K2
          stance: supports
          locator: CBDB:240587
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

# 王安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安 | accepted |
| bio.summary | 王安，明人物。成化二年進士，籍贯閩縣。（中国历代人物传记资料库 CBDB 240587） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 240587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240587&o=json)
