---
schema: wang-person/v1
id: p_ZnqNccZnX6v3tLbBJGKKEn
status: active
merged_into: null
display_name: 王學淵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6YP5xVjQ1BPweaADEm95qv
        subject_person_id: p_ZnqNccZnX6v3tLbBJGKKEn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學淵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BjywPdswtqBaZPeur5BVnR
          claim_id: c_6YP5xVjQ1BPweaADEm95qv
          source_id: s_19Mw33STNYMUHfVkNEh4PH
          stance: supports
          locator: CBDB:71796
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71796）
          source: &a1
            id: s_19Mw33STNYMUHfVkNEh4PH
            source_type: api_record
            title: 中国历代人物传记资料库：王學淵（CBDB 71796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71796&o=json
            external_identifier: CBDB:71796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.875Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_whFjKf2dWKRsniLFB86cQS
        subject_person_id: p_ZnqNccZnX6v3tLbBJGKKEn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1861年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FY7q8E4hKncqWi7b3gNHR4
          claim_id: c_whFjKf2dWKRsniLFB86cQS
          source_id: s_19Mw33STNYMUHfVkNEh4PH
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
        id: c_ztNpGg6Qso623S6DBP8K7k
        subject_person_id: p_ZnqNccZnX6v3tLbBJGKKEn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1928年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EMrx22t49dtoLX7ecvC5Nw
          claim_id: c_ztNpGg6Qso623S6DBP8K7k
          source_id: s_19Mw33STNYMUHfVkNEh4PH
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
        id: c_RmYtRemWZCLR1pLACGGqJh
        subject_person_id: p_ZnqNccZnX6v3tLbBJGKKEn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_69Zxi8xaiDMjk1xDFCNmgu
          claim_id: c_RmYtRemWZCLR1pLACGGqJh
          source_id: s_19Mw33STNYMUHfVkNEh4PH
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

# 王學淵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學淵 | accepted |
| birth.date | 1861年 | accepted |
| death.date | 1928年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學淵（CBDB 71796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71796&o=json)
