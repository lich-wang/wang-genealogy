---
schema: wang-person/v1
id: p_JqxcTf1vMYo94NYJCXaGtD
status: active
merged_into: null
display_name: 王威
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wtpHZG5MBPEHfSTBYjQB9P
        subject_person_id: p_JqxcTf1vMYo94NYJCXaGtD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王威
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T2gWGH8yBJdHCBieK4swzE
          claim_id: c_wtpHZG5MBPEHfSTBYjQB9P
          source_id: s_rYE1pfLFF5cY53GYDFov2z
          stance: supports
          locator: CBDB:438590
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（438590）
          source: &a1
            id: s_rYE1pfLFF5cY53GYDFov2z
            source_type: api_record
            title: 中国历代人物传记资料库：王威（CBDB 438590）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=438590&o=json
            external_identifier: CBDB:438590
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.074Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SDSxrVadYyj1f3eBjfu3wE
        subject_person_id: p_JqxcTf1vMYo94NYJCXaGtD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王威，明人物。籍贯綏德衛，曾任總兵。（中国历代人物传记资料库 CBDB 438590）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KbDFPE1UO6zaGYDV00kyc6
          claim_id: c_SDSxrVadYyj1f3eBjfu3wE
          source_id: s_rYE1pfLFF5cY53GYDFov2z
          stance: supports
          locator: CBDB:438590
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

# 王威

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王威 | accepted |
| bio.summary | 王威，明人物。籍贯綏德衛，曾任總兵。（中国历代人物传记资料库 CBDB 438590） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王威（CBDB 438590）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=438590&o=json)
