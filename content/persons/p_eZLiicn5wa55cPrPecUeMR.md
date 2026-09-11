---
schema: wang-person/v1
id: p_eZLiicn5wa55cPrPecUeMR
status: active
merged_into: null
display_name: 王聲駿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7QveRWfyGfAC6ur3N6s4hx
        subject_person_id: p_eZLiicn5wa55cPrPecUeMR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聲駿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eDKH5PBJUXuMBdYefnoN3E
          claim_id: c_7QveRWfyGfAC6ur3N6s4hx
          source_id: s_kJm76fzkxLoCYK3G2UTdkG
          stance: supports
          locator: CBDB:639963
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639963）
          source: &a1
            id: s_kJm76fzkxLoCYK3G2UTdkG
            source_type: api_record
            title: 中国历代人物传记资料库：王聲駿（CBDB 639963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639963&o=json
            external_identifier: CBDB:639963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KMULPPSHrBfi5ThLHyP6MP
        subject_person_id: p_eZLiicn5wa55cPrPecUeMR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聲駿，清人物。籍贯善化，入仕監生，曾任州判。（中国历代人物传记资料库 CBDB 639963）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k7Ska45olZfUWjfGVRwW3H
          claim_id: c_KMULPPSHrBfi5ThLHyP6MP
          source_id: s_kJm76fzkxLoCYK3G2UTdkG
          stance: supports
          locator: CBDB:639963
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

# 王聲駿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聲駿 | accepted |
| bio.summary | 王聲駿，清人物。籍贯善化，入仕監生，曾任州判。（中国历代人物传记资料库 CBDB 639963） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聲駿（CBDB 639963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639963&o=json)
