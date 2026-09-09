---
schema: wang-person/v1
id: p_2Jkre2P7zFsNsdRFraADue
status: active
merged_into: null
display_name: 王夢龍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uyUiZAk2L7XcmLcBz2kAuD
        subject_person_id: p_2Jkre2P7zFsNsdRFraADue
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P3AZL2K3PyQcww1QnkGDBf
          claim_id: c_uyUiZAk2L7XcmLcBz2kAuD
          source_id: s_Yk374ABrHsczcnir9WxfFZ
          stance: supports
          locator: CBDB:25802
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25802）
          source: &a1
            id: s_Yk374ABrHsczcnir9WxfFZ
            source_type: api_record
            title: 中国历代人物传记资料库：王夢龍（CBDB 25802）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25802&o=json
            external_identifier: CBDB:25802
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.924Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FDbYpUPX5KyjnXRhEtmvm2
        subject_person_id: p_2Jkre2P7zFsNsdRFraADue
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1tSLLsEvoC11TPDUN45STQ
          claim_id: c_FDbYpUPX5KyjnXRhEtmvm2
          source_id: s_Yk374ABrHsczcnir9WxfFZ
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

# 王夢龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢龍 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢龍（CBDB 25802）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25802&o=json)
