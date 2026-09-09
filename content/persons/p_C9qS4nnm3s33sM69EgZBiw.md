---
schema: wang-person/v1
id: p_C9qS4nnm3s33sM69EgZBiw
status: active
merged_into: null
display_name: 王明物
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T7Rd6eojAGGXRgkPDmy6f1
        subject_person_id: p_C9qS4nnm3s33sM69EgZBiw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明物
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mCNefGPJd79BDfPmAww3QW
          claim_id: c_T7Rd6eojAGGXRgkPDmy6f1
          source_id: s_sSiqhK1sppNjFQJDdwidHZ
          stance: supports
          locator: CBDB:550899
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（550899）
          source: &a1
            id: s_sSiqhK1sppNjFQJDdwidHZ
            source_type: api_record
            title: 中国历代人物传记资料库：王明物（CBDB 550899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550899&o=json
            external_identifier: CBDB:550899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.503Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oAYpNUR15U1FpQ8bceTtrE
        subject_person_id: p_C9qS4nnm3s33sM69EgZBiw
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
        - id: cs_F2kNkb49Q4iva71nqBQRgS
          claim_id: c_oAYpNUR15U1FpQ8bceTtrE
          source_id: s_sSiqhK1sppNjFQJDdwidHZ
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

# 王明物

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明物 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王明物（CBDB 550899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550899&o=json)
