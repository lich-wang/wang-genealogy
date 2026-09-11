---
schema: wang-person/v1
id: p_P4tRTiNaHH24iCaqBBi6RC
status: active
merged_into: null
display_name: 王約
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WHnoaNvzjB1GMMqn6kEaVi
        subject_person_id: p_P4tRTiNaHH24iCaqBBi6RC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王約
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kP6Q2GoLquLQA2pC2AGmWm
          claim_id: c_WHnoaNvzjB1GMMqn6kEaVi
          source_id: s_cv15Tx55VPJADZ5YXL1HKf
          stance: supports
          locator: CBDB:242729
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242729）
          source: &a1
            id: s_cv15Tx55VPJADZ5YXL1HKf
            source_type: api_record
            title: 中国历代人物传记资料库：王約（CBDB 242729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242729&o=json
            external_identifier: CBDB:242729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.980Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bgyp85UawT7ffysLNCyiLF
        subject_person_id: p_P4tRTiNaHH24iCaqBBi6RC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王約，明人物。成化五年進士，籍贯宜興。（中国历代人物传记资料库 CBDB 242729）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EDWme3nWzn3H3CVWXVtf0F
          claim_id: c_Bgyp85UawT7ffysLNCyiLF
          source_id: s_cv15Tx55VPJADZ5YXL1HKf
          stance: supports
          locator: CBDB:242729
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

# 王約

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王約 | accepted |
| bio.summary | 王約，明人物。成化五年進士，籍贯宜興。（中国历代人物传记资料库 CBDB 242729） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王約（CBDB 242729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242729&o=json)
