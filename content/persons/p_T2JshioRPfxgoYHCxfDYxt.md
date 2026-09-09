---
schema: wang-person/v1
id: p_T2JshioRPfxgoYHCxfDYxt
status: active
merged_into: null
display_name: 王守忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hp2a3Va1v3XVEcECAC94MZ
        subject_person_id: p_T2JshioRPfxgoYHCxfDYxt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Tc188hLzhgyVzMx4YB8zs3
          claim_id: c_hp2a3Va1v3XVEcECAC94MZ
          source_id: s_Fq5R2VS8R7SH5rkUUQdJnA
          stance: supports
          locator: CBDB:175748
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175748）
          source: &a1
            id: s_Fq5R2VS8R7SH5rkUUQdJnA
            source_type: api_record
            title: 中国历代人物传记资料库：王守忠（CBDB 175748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175748&o=json
            external_identifier: CBDB:175748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.097Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_gq2srHx687byhiNaAhQGs3
        subject_person_id: p_T2JshioRPfxgoYHCxfDYxt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 706年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VtDTDmKkt6BFa2HaGs6zdR
          claim_id: c_gq2srHx687byhiNaAhQGs3
          source_id: s_Fq5R2VS8R7SH5rkUUQdJnA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5ZD29EptFEKddDHWdmgF7m
        subject_person_id: p_T2JshioRPfxgoYHCxfDYxt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CKJuVNz9b7EZMrhSacoukK
          claim_id: c_5ZD29EptFEKddDHWdmgF7m
          source_id: s_Fq5R2VS8R7SH5rkUUQdJnA
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

# 王守忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守忠 | accepted |
| death.date | 706年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守忠（CBDB 175748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175748&o=json)
