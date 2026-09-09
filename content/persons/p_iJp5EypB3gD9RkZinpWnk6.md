---
schema: wang-person/v1
id: p_iJp5EypB3gD9RkZinpWnk6
status: active
merged_into: null
display_name: 王弘道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2YpfnBbm8HB6k2uqfkcyHd
        subject_person_id: p_iJp5EypB3gD9RkZinpWnk6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H79hUQDaYuQVEqQuYme2Sj
          claim_id: c_2YpfnBbm8HB6k2uqfkcyHd
          source_id: s_X4GHPKTMqyAsU9hD5pumG2
          stance: supports
          locator: CBDB:175659
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175659）
          source: &a1
            id: s_X4GHPKTMqyAsU9hD5pumG2
            source_type: api_record
            title: 中国历代人物传记资料库：王弘道（CBDB 175659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175659&o=json
            external_identifier: CBDB:175659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mHczjDr25FQqgs1LkGDAbu
        subject_person_id: p_iJp5EypB3gD9RkZinpWnk6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 595年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M2j82es5g13gf584ykReT7
          claim_id: c_mHczjDr25FQqgs1LkGDAbu
          source_id: s_X4GHPKTMqyAsU9hD5pumG2
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
        id: c_pxKCHwiJGnhP6kBKQ8fGZG
        subject_person_id: p_iJp5EypB3gD9RkZinpWnk6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南北朝人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uGP7iojn3Fybsegq6uN4jv
          claim_id: c_pxKCHwiJGnhP6kBKQ8fGZG
          source_id: s_X4GHPKTMqyAsU9hD5pumG2
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

# 王弘道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘道 | accepted |
| death.date | 595年 | accepted |
| bio.summary | CBDB 记载为南北朝人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弘道（CBDB 175659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175659&o=json)
