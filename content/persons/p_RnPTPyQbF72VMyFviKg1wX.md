---
schema: wang-person/v1
id: p_RnPTPyQbF72VMyFviKg1wX
status: active
merged_into: null
display_name: 王光
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kq7g9q9kawFC66F1XWvf4C
        subject_person_id: p_RnPTPyQbF72VMyFviKg1wX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5EvxdAMWdgHSQSbDh9cE8K
          claim_id: c_Kq7g9q9kawFC66F1XWvf4C
          source_id: s_sdUP587sCBMUaH7NFkZxL9
          stance: supports
          locator: CBDB:454219
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（454219）
          source: &a1
            id: s_sdUP587sCBMUaH7NFkZxL9
            source_type: api_record
            title: 中国历代人物传记资料库：王光（CBDB 454219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454219&o=json
            external_identifier: CBDB:454219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.440Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QEHxAkaUfo2DFF3anRfcHs
        subject_person_id: p_RnPTPyQbF72VMyFviKg1wX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hK6C1nmgZ5YQ1JBKtjJ59b
          claim_id: c_QEHxAkaUfo2DFF3anRfcHs
          source_id: s_sdUP587sCBMUaH7NFkZxL9
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

# 王光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光（CBDB 454219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454219&o=json)
