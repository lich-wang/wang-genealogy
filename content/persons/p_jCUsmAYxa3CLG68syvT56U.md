---
schema: wang-person/v1
id: p_jCUsmAYxa3CLG68syvT56U
status: active
merged_into: null
display_name: 王錡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5QGFCkC3whygxT14TBPQ6C
        subject_person_id: p_jCUsmAYxa3CLG68syvT56U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8Y7Bh8NzNPwLdZD5DCNtF1
          claim_id: c_5QGFCkC3whygxT14TBPQ6C
          source_id: s_cxo2VXJHgEwsmK8oLK4Anu
          stance: supports
          locator: CBDB:98048
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（98048）
          source: &a1
            id: s_cxo2VXJHgEwsmK8oLK4Anu
            source_type: api_record
            title: 中国历代人物传记资料库：王錡（CBDB 98048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98048&o=json
            external_identifier: CBDB:98048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.305Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x2xxmQEUZTzwc9dnPPBphN
        subject_person_id: p_jCUsmAYxa3CLG68syvT56U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錡，宋人物。曾任武功大夫。（中国历代人物传记资料库 CBDB 98048）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eCjq8UaUbmKzwi55482PEe
          claim_id: c_x2xxmQEUZTzwc9dnPPBphN
          source_id: s_cxo2VXJHgEwsmK8oLK4Anu
          stance: supports
          locator: CBDB:98048
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

# 王錡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錡 | accepted |
| bio.summary | 王錡，宋人物。曾任武功大夫。（中国历代人物传记资料库 CBDB 98048） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錡（CBDB 98048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98048&o=json)
