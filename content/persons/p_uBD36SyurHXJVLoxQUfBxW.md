---
schema: wang-person/v1
id: p_uBD36SyurHXJVLoxQUfBxW
status: active
merged_into: null
display_name: 李靖真
revision: 1
cbdb_id: 28412
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pnkSKdw5ILhZZQcMm2-vSC
        subject_person_id: p_uBD36SyurHXJVLoxQUfBxW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李靖真（1287—1345），元人物。籍贯江陰州，入仕封贈。（中国历代人物传记资料库 CBDB 28412）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JTRCauOLgFL9yOhCU-AyWk
          claim_id: c_pnkSKdw5ILhZZQcMm2-vSC
          source_id: s_UVaZHMFylN-ic0KFXaTReX
          stance: supports
          locator: CBDB:28412
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_UVaZHMFylN-ic0KFXaTReX
            source_type: api_record
            title: 中国历代人物传记资料库：李靖真（CBDB 28412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28412&o=json
            external_identifier: CBDB:28412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LZOgPDXdv8zPNzU4ts_418
        subject_person_id: p_uBD36SyurHXJVLoxQUfBxW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李靖真
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_taeMKh7jVZTELu9ySQwGCo
          claim_id: c_LZOgPDXdv8zPNzU4ts_418
          source_id: s_UVaZHMFylN-ic0KFXaTReX
          stance: supports
          locator: CBDB:28412
          quotation: null
          interpretation_note: CBDB 明确记录的王惠配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_VK4IXGFVuzJcfBs37qjsN6
        subject_person_id: p_T7G2a6NCtSGS8FhXyMyh8G
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_uBD36SyurHXJVLoxQUfBxW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uZGAFaEs-BvBjIkhqa_jX5
          claim_id: c_VK4IXGFVuzJcfBs37qjsN6
          source_id: s_UVaZHMFylN-ic0KFXaTReX
          stance: supports
          locator: CBDB 双向互证（妻子 李靖真）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_T7G2a6NCtSGS8FhXyMyh8G
        status: active
        display_name: 王惠
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李靖真

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李靖真（1287—1345），元人物。籍贯江陰州，入仕封贈。（中国历代人物传记资料库 CBDB 28412） | accepted |
| name.primary | 李靖真 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_T7G2a6NCtSGS8FhXyMyh8G | 王惠 | accepted |

## 外部来源

- [中国历代人物传记资料库：李靖真（CBDB 28412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28412&o=json)
