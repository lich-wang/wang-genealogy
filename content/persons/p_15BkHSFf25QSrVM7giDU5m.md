---
schema: wang-person/v1
id: p_15BkHSFf25QSrVM7giDU5m
status: active
merged_into: null
display_name: 王思善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M1Hn8aRDmMKAaK1PbwfSRZ
        subject_person_id: p_15BkHSFf25QSrVM7giDU5m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PsXtLhG5Xapu97orbY4YP9
          claim_id: c_M1Hn8aRDmMKAaK1PbwfSRZ
          source_id: s_P5Vpy2qjv8uzitA4FGH7RC
          stance: supports
          locator: CBDB:248754
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（248754）
          source: &a1
            id: s_P5Vpy2qjv8uzitA4FGH7RC
            source_type: api_record
            title: 中国历代人物传记资料库：王思善（CBDB 248754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248754&o=json
            external_identifier: CBDB:248754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.160Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tgh6SB2ffPFQqM6c3s39uf
        subject_person_id: p_15BkHSFf25QSrVM7giDU5m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qQRE97nkodZujQro7zV1i9
          claim_id: c_tgh6SB2ffPFQqM6c3s39uf
          source_id: s_P5Vpy2qjv8uzitA4FGH7RC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王思善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思善 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思善（CBDB 248754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248754&o=json)
