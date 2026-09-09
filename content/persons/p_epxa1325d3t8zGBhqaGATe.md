---
schema: wang-person/v1
id: p_epxa1325d3t8zGBhqaGATe
status: active
merged_into: null
display_name: 王錦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A1EfDUvFaPn27RzYGcVKxu
        subject_person_id: p_epxa1325d3t8zGBhqaGATe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L5cYW5FsupS5X3b7zQxPg5
          claim_id: c_A1EfDUvFaPn27RzYGcVKxu
          source_id: s_tsLSMzErps2tPShGmMQFWS
          stance: supports
          locator: CBDB:199393
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199393）
          source: &a1
            id: s_tsLSMzErps2tPShGmMQFWS
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 199393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199393&o=json
            external_identifier: CBDB:199393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rTciztgXvufGWMErN42xMU
        subject_person_id: p_epxa1325d3t8zGBhqaGATe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1450年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BP4aneCPGgyx5vhbbGHeTg
          claim_id: c_rTciztgXvufGWMErN42xMU
          source_id: s_tsLSMzErps2tPShGmMQFWS
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
        id: c_ZYr4AuXdEw7dC4mHHHm7JN
        subject_person_id: p_epxa1325d3t8zGBhqaGATe
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
        - id: cs_ZuPuGK254UcbumhFaWAwQy
          claim_id: c_ZYr4AuXdEw7dC4mHHHm7JN
          source_id: s_tsLSMzErps2tPShGmMQFWS
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

# 王錦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錦 | accepted |
| birth.date | 1450年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錦（CBDB 199393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199393&o=json)
