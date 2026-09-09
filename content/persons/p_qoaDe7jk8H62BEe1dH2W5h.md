---
schema: wang-person/v1
id: p_qoaDe7jk8H62BEe1dH2W5h
status: active
merged_into: null
display_name: 王大鼎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_57P1bppoV4jQ8pEdoaGmRy
        subject_person_id: p_qoaDe7jk8H62BEe1dH2W5h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XmhXpyhRqT8EDACtEN57KN
          claim_id: c_57P1bppoV4jQ8pEdoaGmRy
          source_id: s_NL45qFpi3XMKLA2TCk3cPM
          stance: supports
          locator: CBDB:175793
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175793）
          source: &a1
            id: s_NL45qFpi3XMKLA2TCk3cPM
            source_type: api_record
            title: 中国历代人物传记资料库：王大鼎（CBDB 175793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175793&o=json
            external_identifier: CBDB:175793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.263Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_WZ771krd378LoUGY668PCj
        subject_person_id: p_qoaDe7jk8H62BEe1dH2W5h
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 678年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FYkHv76X4omBJ2CpzmZEyd
          claim_id: c_WZ771krd378LoUGY668PCj
          source_id: s_NL45qFpi3XMKLA2TCk3cPM
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
        id: c_UtBgNmdwJsAHcB9r9Db1Co
        subject_person_id: p_qoaDe7jk8H62BEe1dH2W5h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6vPC6jQse7u4N9jMFqa6yp
          claim_id: c_UtBgNmdwJsAHcB9r9Db1Co
          source_id: s_NL45qFpi3XMKLA2TCk3cPM
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

# 王大鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大鼎 | accepted |
| death.date | 678年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大鼎（CBDB 175793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175793&o=json)
