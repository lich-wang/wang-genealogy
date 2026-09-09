---
schema: wang-person/v1
id: p_81Q7anUBUQ4Mh5sPLNFQ41
status: active
merged_into: null
display_name: 王昌言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_StzcF75yf6dXcSW4v4mGfw
        subject_person_id: p_81Q7anUBUQ4Mh5sPLNFQ41
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_83z8T61TJ5jquifN7etn61
          claim_id: c_StzcF75yf6dXcSW4v4mGfw
          source_id: s_K6WB7Sknik89wPLYqRe6Q9
          stance: supports
          locator: CBDB:71758
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71758）
          source: &a1
            id: s_K6WB7Sknik89wPLYqRe6Q9
            source_type: api_record
            title: 中国历代人物传记资料库：王昌言（CBDB 71758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71758&o=json
            external_identifier: CBDB:71758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.858Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_eVmoAvqEFk6pv8WBR7sN8d
        subject_person_id: p_81Q7anUBUQ4Mh5sPLNFQ41
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1649年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ognwZhUUK2edmFR46aGM16
          claim_id: c_eVmoAvqEFk6pv8WBR7sN8d
          source_id: s_K6WB7Sknik89wPLYqRe6Q9
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
        id: c_YD73epJ1yL6h126oQpoXPB
        subject_person_id: p_81Q7anUBUQ4Mh5sPLNFQ41
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
        - id: cs_DXP8hTuhHCfJRjxHQsGuQL
          claim_id: c_YD73epJ1yL6h126oQpoXPB
          source_id: s_K6WB7Sknik89wPLYqRe6Q9
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

# 王昌言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌言 | accepted |
| death.date | 1649年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昌言（CBDB 71758）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71758&o=json)
