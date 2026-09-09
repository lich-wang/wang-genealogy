---
schema: wang-person/v1
id: p_W1FvnC4aHoMER9m2xmbzCp
status: active
merged_into: null
display_name: 王道清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2ZWz2tAQeG87vKon6Ne7Nf
        subject_person_id: p_W1FvnC4aHoMER9m2xmbzCp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TWXv1zxmbToR8cPjdvLPsF
          claim_id: c_2ZWz2tAQeG87vKon6Ne7Nf
          source_id: s_Mm47ojyY6sL5P1B6Fv2YtR
          stance: supports
          locator: CBDB:640455
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640455）
          source: &a1
            id: s_Mm47ojyY6sL5P1B6Fv2YtR
            source_type: api_record
            title: 中国历代人物传记资料库：王道清（CBDB 640455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640455&o=json
            external_identifier: CBDB:640455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.102Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_urxNeH8nBZEPBZ5S6XFDGB
        subject_person_id: p_W1FvnC4aHoMER9m2xmbzCp
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
        - id: cs_fM15XxZU8fdDtnBtvJTZVP
          claim_id: c_urxNeH8nBZEPBZ5S6XFDGB
          source_id: s_Mm47ojyY6sL5P1B6Fv2YtR
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

# 王道清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道清 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道清（CBDB 640455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640455&o=json)
