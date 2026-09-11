---
schema: wang-person/v1
id: p_Zj6NTPHkZD6nVXiyBGHHQ2
status: active
merged_into: null
display_name: 王佩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BvVdJ7oHoKq4pN6VKTB55H
        subject_person_id: p_Zj6NTPHkZD6nVXiyBGHHQ2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Biu5nVpPwZBCVT9QRe6yeM
          claim_id: c_BvVdJ7oHoKq4pN6VKTB55H
          source_id: s_GSd8HM82opUCvz9Qb3C9eq
          stance: supports
          locator: CBDB:465828
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（465828）
          source: &a1
            id: s_GSd8HM82opUCvz9Qb3C9eq
            source_type: api_record
            title: 中国历代人物传记资料库：王佩（CBDB 465828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465828&o=json
            external_identifier: CBDB:465828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sK4erg9bkwxhuB7aMWb1Vp
        subject_person_id: p_Zj6NTPHkZD6nVXiyBGHHQ2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩，清人物。曾任巡檢。（中国历代人物传记资料库 CBDB 465828）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qSPvypIyxEqJiiv2fe_MVd
          claim_id: c_sK4erg9bkwxhuB7aMWb1Vp
          source_id: s_GSd8HM82opUCvz9Qb3C9eq
          stance: supports
          locator: CBDB:465828
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

# 王佩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佩 | accepted |
| bio.summary | 王佩，清人物。曾任巡檢。（中国历代人物传记资料库 CBDB 465828） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佩（CBDB 465828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465828&o=json)
