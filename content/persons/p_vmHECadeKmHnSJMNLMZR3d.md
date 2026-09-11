---
schema: wang-person/v1
id: p_vmHECadeKmHnSJMNLMZR3d
status: active
merged_into: null
display_name: 王顯曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_giMCjC16sneGC86R2isSeW
        subject_person_id: p_vmHECadeKmHnSJMNLMZR3d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eTFabykR54aswioLWJmJQC
          claim_id: c_giMCjC16sneGC86R2isSeW
          source_id: s_cNGA8SHc51USh4THHPyeRJ
          stance: supports
          locator: CBDB:61785
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61785）
          source: &a1
            id: s_cNGA8SHc51USh4THHPyeRJ
            source_type: api_record
            title: 中国历代人物传记资料库：王顯曾（CBDB 61785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61785&o=json
            external_identifier: CBDB:61785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ofY5i5aAHKTnLgCT6vuAEm
        subject_person_id: p_vmHECadeKmHnSJMNLMZR3d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯曾，清人物。籍贯華亭，曾任禮部主客司主事。（中国历代人物传记资料库 CBDB 61785）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wnAMJPy3nK-6Y0LILbBv6Z
          claim_id: c_ofY5i5aAHKTnLgCT6vuAEm
          source_id: s_cNGA8SHc51USh4THHPyeRJ
          stance: supports
          locator: CBDB:61785
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

# 王顯曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯曾 | accepted |
| bio.summary | 王顯曾，清人物。籍贯華亭，曾任禮部主客司主事。（中国历代人物传记资料库 CBDB 61785） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顯曾（CBDB 61785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61785&o=json)
