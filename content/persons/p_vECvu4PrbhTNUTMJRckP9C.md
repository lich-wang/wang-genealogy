---
schema: wang-person/v1
id: p_vECvu4PrbhTNUTMJRckP9C
status: active
merged_into: null
display_name: 王輔運
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_19ZauWoWm24mHH46CLicMs
        subject_person_id: p_vECvu4PrbhTNUTMJRckP9C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔運
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dLeXCyUJmFExdHMFvtekkK
          claim_id: c_19ZauWoWm24mHH46CLicMs
          source_id: s_QZBkD39gw9xGNCPK1D1WBq
          stance: supports
          locator: CBDB:56877
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56877）
          source: &a1
            id: s_QZBkD39gw9xGNCPK1D1WBq
            source_type: api_record
            title: 中国历代人物传记资料库：王輔運（CBDB 56877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56877&o=json
            external_identifier: CBDB:56877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.772Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Dr3PV182PskGzvSaBadQ8Z
        subject_person_id: p_vECvu4PrbhTNUTMJRckP9C
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1607年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5V4JPnQL73xdYG8oZSvn7H
          claim_id: c_Dr3PV182PskGzvSaBadQ8Z
          source_id: s_QZBkD39gw9xGNCPK1D1WBq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Ys61FwQV1NDESBFLoa4tRN
        subject_person_id: p_vECvu4PrbhTNUTMJRckP9C
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1666年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8GphCGvSdrDarz3uQmNtjb
          claim_id: c_Ys61FwQV1NDESBFLoa4tRN
          source_id: s_QZBkD39gw9xGNCPK1D1WBq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EoihNiot3GCHnLr49raHbN
        subject_person_id: p_vECvu4PrbhTNUTMJRckP9C
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
        - id: cs_yBuGQrS3e32LtDoMEevkuH
          claim_id: c_EoihNiot3GCHnLr49raHbN
          source_id: s_QZBkD39gw9xGNCPK1D1WBq
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

# 王輔運

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輔運 | accepted |
| birth.date | 1607年 | accepted |
| death.date | 1666年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輔運（CBDB 56877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56877&o=json)
