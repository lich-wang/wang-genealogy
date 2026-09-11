---
schema: wang-person/v1
id: p_TCvHKSdv1TRN2MQ99QjgPm
status: active
merged_into: null
display_name: 王棫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RN4WB7pDtPQzPYTRhAxJnv
        subject_person_id: p_TCvHKSdv1TRN2MQ99QjgPm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5bpijfKq5mxt19Fkoao3tD
          claim_id: c_RN4WB7pDtPQzPYTRhAxJnv
          source_id: s_Ja9V31d2MExqPwKvLBVtnD
          stance: supports
          locator: CBDB:71209
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71209）
          source: &a1
            id: s_Ja9V31d2MExqPwKvLBVtnD
            source_type: api_record
            title: 中国历代人物传记资料库：王棫（CBDB 71209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71209&o=json
            external_identifier: CBDB:71209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.492Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_no4jicqypAGAwDFxySz7a6
        subject_person_id: p_TCvHKSdv1TRN2MQ99QjgPm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1692年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6PoEXzhrbAaGjFoHebFLt5
          claim_id: c_no4jicqypAGAwDFxySz7a6
          source_id: s_Ja9V31d2MExqPwKvLBVtnD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FTmPYQMTeUzxXBtqHkwLnM
        subject_person_id: p_TCvHKSdv1TRN2MQ99QjgPm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棫（生于1692年），清人物。籍贯深澤。（中国历代人物传记资料库 CBDB 71209）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i-ndXugPFRLBYtB16gF2OQ
          claim_id: c_FTmPYQMTeUzxXBtqHkwLnM
          source_id: s_Ja9V31d2MExqPwKvLBVtnD
          stance: supports
          locator: CBDB:71209
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

# 王棫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棫 | accepted |
| birth.date | 1692年 | accepted |
| bio.summary | 王棫（生于1692年），清人物。籍贯深澤。（中国历代人物传记资料库 CBDB 71209） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王棫（CBDB 71209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71209&o=json)
