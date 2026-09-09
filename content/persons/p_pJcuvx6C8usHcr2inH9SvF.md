---
schema: wang-person/v1
id: p_pJcuvx6C8usHcr2inH9SvF
status: active
merged_into: null
display_name: 王梅峰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a32h9j54AymYMEdp8MT9WS
        subject_person_id: p_pJcuvx6C8usHcr2inH9SvF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梅峰
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_47ofioCnK75JsP8ksPE3iG
          claim_id: c_a32h9j54AymYMEdp8MT9WS
          source_id: s_HpwVTz9Q6Vx6EtzM6At63F
          stance: supports
          locator: CBDB:638722
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638722）
          source: &a1
            id: s_HpwVTz9Q6Vx6EtzM6At63F
            source_type: api_record
            title: 中国历代人物传记资料库：王梅峰（CBDB 638722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638722&o=json
            external_identifier: CBDB:638722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.729Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uZMiCiNtR9g9VaLzvec35x
        subject_person_id: p_pJcuvx6C8usHcr2inH9SvF
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
        - id: cs_Q49KtsyRdwzPnJGs6SvAQ7
          claim_id: c_uZMiCiNtR9g9VaLzvec35x
          source_id: s_HpwVTz9Q6Vx6EtzM6At63F
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

# 王梅峰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王梅峰 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王梅峰（CBDB 638722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638722&o=json)
