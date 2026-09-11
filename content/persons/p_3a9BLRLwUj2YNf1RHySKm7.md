---
schema: wang-person/v1
id: p_3a9BLRLwUj2YNf1RHySKm7
status: active
merged_into: null
display_name: 王家彥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SnxcAe9WFF38x8jgRFRMqK
        subject_person_id: p_3a9BLRLwUj2YNf1RHySKm7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YzLGfwWCWMi5fZnFtFD8va
          claim_id: c_SnxcAe9WFF38x8jgRFRMqK
          source_id: s_Pia1zC7M7Vca9dybrDB6Kb
          stance: supports
          locator: CBDB:126626
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126626）
          source: &a1
            id: s_Pia1zC7M7Vca9dybrDB6Kb
            source_type: api_record
            title: 中国历代人物传记资料库：王家彥（CBDB 126626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126626&o=json
            external_identifier: CBDB:126626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.073Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RXdYvcFCb34NLJmBSM8zZh
        subject_person_id: p_3a9BLRLwUj2YNf1RHySKm7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家彥，明人物。籍贯莆田，身份为死國難，曾任知縣、太僕寺卿。（中国历代人物传记资料库 CBDB 126626）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0G2EelOk16FUROvPx7uQrZ
          claim_id: c_RXdYvcFCb34NLJmBSM8zZh
          source_id: s_Pia1zC7M7Vca9dybrDB6Kb
          stance: supports
          locator: CBDB:126626
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

# 王家彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家彥 | accepted |
| bio.summary | 王家彥，明人物。籍贯莆田，身份为死國難，曾任知縣、太僕寺卿。（中国历代人物传记资料库 CBDB 126626） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家彥（CBDB 126626）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126626&o=json)
