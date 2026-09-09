---
schema: wang-person/v1
id: p_57DwYhFAa3pgFgGgG2C4F2
status: active
merged_into: null
display_name: 王廷幹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1NuPD1Hrms5x3J5PUQVqGH
        subject_person_id: p_57DwYhFAa3pgFgGgG2C4F2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷幹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tpGe6BsyYths16mGM9n8f1
          claim_id: c_1NuPD1Hrms5x3J5PUQVqGH
          source_id: s_WGuAbPSgnwEtB3mwC4BvWH
          stance: supports
          locator: CBDB:69219
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69219）
          source: &a1
            id: s_WGuAbPSgnwEtB3mwC4BvWH
            source_type: api_record
            title: 中国历代人物传记资料库：王廷幹（CBDB 69219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69219&o=json
            external_identifier: CBDB:69219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_JZGUPPTGMp6Dju5WrB1o5f
        subject_person_id: p_57DwYhFAa3pgFgGgG2C4F2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1853年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xcdeLQN73tgNMacESSDtob
          claim_id: c_JZGUPPTGMp6Dju5WrB1o5f
          source_id: s_WGuAbPSgnwEtB3mwC4BvWH
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
        id: c_u8LCbnK94cQuiCA1tEncJc
        subject_person_id: p_57DwYhFAa3pgFgGgG2C4F2
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
        - id: cs_wsM8G1A6Svn5yson86CZHu
          claim_id: c_u8LCbnK94cQuiCA1tEncJc
          source_id: s_WGuAbPSgnwEtB3mwC4BvWH
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

# 王廷幹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷幹 | accepted |
| death.date | 1853年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷幹（CBDB 69219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69219&o=json)
