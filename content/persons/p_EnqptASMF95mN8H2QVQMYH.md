---
schema: wang-person/v1
id: p_EnqptASMF95mN8H2QVQMYH
status: active
merged_into: null
display_name: 王重熙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4kar4cC6zkRDHvspngWgHe
        subject_person_id: p_EnqptASMF95mN8H2QVQMYH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vyLgZX76dsQEsiHtkPQtKL
          claim_id: c_4kar4cC6zkRDHvspngWgHe
          source_id: s_VJknz32Pzq2we8Y5Eq4Dx9
          stance: supports
          locator: CBDB:640499
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640499）
          source: &a1
            id: s_VJknz32Pzq2we8Y5Eq4Dx9
            source_type: api_record
            title: 中国历代人物传记资料库：王重熙（CBDB 640499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640499&o=json
            external_identifier: CBDB:640499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.115Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rXXDe7UtSR2EV4v1E1qZAL
        subject_person_id: p_EnqptASMF95mN8H2QVQMYH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iGjTug3JGM6sGe762WMBEk
          claim_id: c_rXXDe7UtSR2EV4v1E1qZAL
          source_id: s_VJknz32Pzq2we8Y5Eq4Dx9
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

# 王重熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王重熙 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王重熙（CBDB 640499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640499&o=json)
