---
schema: wang-person/v1
id: p_KQmzszu29hqEyLywMwFSEJ
status: active
merged_into: null
display_name: 王謩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sMXeh4gPXNm1YQLwVbRgPq
        subject_person_id: p_KQmzszu29hqEyLywMwFSEJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EuA8LhD69fXxpPw1g3AYSm
          claim_id: c_sMXeh4gPXNm1YQLwVbRgPq
          source_id: s_5GTTdyNW8QfLorCSqyNTCF
          stance: supports
          locator: CBDB:61266
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61266）
          source: &a1
            id: s_5GTTdyNW8QfLorCSqyNTCF
            source_type: api_record
            title: 中国历代人物传记资料库：王謩（CBDB 61266）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61266&o=json
            external_identifier: CBDB:61266
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_aELy6iuQtTDovnw4XYk353
        subject_person_id: p_KQmzszu29hqEyLywMwFSEJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1754年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1SFuT7QQSvg3g5ojwRJ8DC
          claim_id: c_aELy6iuQtTDovnw4XYk353
          source_id: s_5GTTdyNW8QfLorCSqyNTCF
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
        id: c_Q2CgB2zPaFAuf6YR2UEUaW
        subject_person_id: p_KQmzszu29hqEyLywMwFSEJ
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
        - id: cs_tejWmoTFEYZkHwTrNgXMh9
          claim_id: c_Q2CgB2zPaFAuf6YR2UEUaW
          source_id: s_5GTTdyNW8QfLorCSqyNTCF
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

# 王謩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謩 | accepted |
| death.date | 1754年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王謩（CBDB 61266）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61266&o=json)
