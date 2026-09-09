---
schema: wang-person/v1
id: p_fvtdZEELHENMPdwBvRdppk
status: active
merged_into: null
display_name: 王維城
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gxksjq7y2QrzjoAesF5G6U
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維城
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XbQMhLNp83qyDHTsx3ESDL
          claim_id: c_Gxksjq7y2QrzjoAesF5G6U
          source_id: s_tt5HKJ24AGnwXomJ86mD6Y
          stance: supports
          locator: CBDB:235969
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（235969）
          source: &a1
            id: s_tt5HKJ24AGnwXomJ86mD6Y
            source_type: api_record
            title: 中国历代人物传记资料库：王維城（CBDB 235969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235969&o=json
            external_identifier: CBDB:235969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.766Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UuX6BPXkqYkxB8Qq57G56e
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LCuqF1q1EdNRNGSa14Vus6
          claim_id: c_UuX6BPXkqYkxB8Qq57G56e
          source_id: s_tt5HKJ24AGnwXomJ86mD6Y
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

# 王維城

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維城 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維城（CBDB 235969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235969&o=json)
