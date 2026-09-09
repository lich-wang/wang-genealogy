---
schema: wang-person/v1
id: p_zpBDmxnkNUmk6akFW8LRFz
status: active
merged_into: null
display_name: 王鍇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t43xhpmXnLzrm7kMUbs3FG
        subject_person_id: p_zpBDmxnkNUmk6akFW8LRFz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dX6RF5bsKVpQE1z8wU95LL
          claim_id: c_t43xhpmXnLzrm7kMUbs3FG
          source_id: s_776dRjcFxdBG81TBeHfx9P
          stance: supports
          locator: CBDB:201376
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201376）
          source: &a1
            id: s_776dRjcFxdBG81TBeHfx9P
            source_type: api_record
            title: 中国历代人物传记资料库：王鍇（CBDB 201376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201376&o=json
            external_identifier: CBDB:201376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.674Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LwTrunqgJG9zzjLLZ9NvJH
        subject_person_id: p_zpBDmxnkNUmk6akFW8LRFz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1468年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_exLohUa6JqkhX2KovS39Qi
          claim_id: c_LwTrunqgJG9zzjLLZ9NvJH
          source_id: s_776dRjcFxdBG81TBeHfx9P
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
        id: c_784fpUYGPN1hRc7fk2F3qf
        subject_person_id: p_zpBDmxnkNUmk6akFW8LRFz
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
        - id: cs_r9gX3E3CkN5BwDKrUg1QU7
          claim_id: c_784fpUYGPN1hRc7fk2F3qf
          source_id: s_776dRjcFxdBG81TBeHfx9P
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

# 王鍇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍇 | accepted |
| birth.date | 1468年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍇（CBDB 201376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201376&o=json)
