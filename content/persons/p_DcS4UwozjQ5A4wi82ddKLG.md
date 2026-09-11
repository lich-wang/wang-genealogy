---
schema: wang-person/v1
id: p_DcS4UwozjQ5A4wi82ddKLG
status: active
merged_into: null
display_name: 王諫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cfSzVKoLv7LD4cepH5mzw7
        subject_person_id: p_DcS4UwozjQ5A4wi82ddKLG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yXPSvYNQmS4Dv7ci1khoY6
          claim_id: c_cfSzVKoLv7LD4cepH5mzw7
          source_id: s_TLKY1CAqhBHSKmzyEFxxBB
          stance: supports
          locator: CBDB:100964
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100964）
          source: &a1
            id: s_TLKY1CAqhBHSKmzyEFxxBB
            source_type: api_record
            title: 中国历代人物传记资料库：王諫（CBDB 100964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100964&o=json
            external_identifier: CBDB:100964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.603Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YGfNAyNrf2GWwJjdefnLgV
        subject_person_id: p_DcS4UwozjQ5A4wi82ddKLG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諫，元人物。籍贯汴梁路，曾任縣尹。（中国历代人物传记资料库 CBDB 100964）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O62AB_lWkAhFEP9zlBFu7W
          claim_id: c_YGfNAyNrf2GWwJjdefnLgV
          source_id: s_TLKY1CAqhBHSKmzyEFxxBB
          stance: supports
          locator: CBDB:100964
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

# 王諫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諫 | accepted |
| bio.summary | 王諫，元人物。籍贯汴梁路，曾任縣尹。（中国历代人物传记资料库 CBDB 100964） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王諫（CBDB 100964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100964&o=json)
