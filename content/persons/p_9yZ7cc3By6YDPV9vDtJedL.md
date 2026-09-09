---
schema: wang-person/v1
id: p_9yZ7cc3By6YDPV9vDtJedL
status: active
merged_into: null
display_name: 王毓祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jUbAuGiCGB53Vmi4rsrcDJ
        subject_person_id: p_9yZ7cc3By6YDPV9vDtJedL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毓祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QkKic1uTtbKcALmSpBYpfN
          claim_id: c_jUbAuGiCGB53Vmi4rsrcDJ
          source_id: s_FHN1Kw9VhPQT1WZpaoxetb
          stance: supports
          locator: CBDB:72165
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72165）
          source: &a1
            id: s_FHN1Kw9VhPQT1WZpaoxetb
            source_type: api_record
            title: 中国历代人物传记资料库：王毓祥（CBDB 72165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72165&o=json
            external_identifier: CBDB:72165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.034Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_G2DLLNyykQK4PPrgXkAGDi
        subject_person_id: p_9yZ7cc3By6YDPV9vDtJedL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1628年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PxBcFdM6sL8VjV89ha2BY5
          claim_id: c_G2DLLNyykQK4PPrgXkAGDi
          source_id: s_FHN1Kw9VhPQT1WZpaoxetb
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
        id: c_vfgWP7rC1PHnX9K5oom2FH
        subject_person_id: p_9yZ7cc3By6YDPV9vDtJedL
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
        - id: cs_rPyEz6ZY32QLfTE2AA6sCM
          claim_id: c_vfgWP7rC1PHnX9K5oom2FH
          source_id: s_FHN1Kw9VhPQT1WZpaoxetb
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

# 王毓祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王毓祥 | accepted |
| birth.date | 1628年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王毓祥（CBDB 72165）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72165&o=json)
