---
schema: wang-person/v1
id: p_GDWRJKcKqeHFWJPRZpK9nP
status: active
merged_into: null
display_name: 王謙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8nxBeSyMZnXo9s4dfADrHR
        subject_person_id: p_GDWRJKcKqeHFWJPRZpK9nP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B2WkWXwwXnyvbnDE2vxJKv
          claim_id: c_8nxBeSyMZnXo9s4dfADrHR
          source_id: s_32oPWK5QgwA36QE3Y8tQo9
          stance: supports
          locator: CBDB:100984
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100984）
          source: &a1
            id: s_32oPWK5QgwA36QE3Y8tQo9
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 100984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100984&o=json
            external_identifier: CBDB:100984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.615Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Qj2LyfbyPjRChiBtYBdqYF
        subject_person_id: p_GDWRJKcKqeHFWJPRZpK9nP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1319年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iiXuNT7U2h2bhmApr1RZmj
          claim_id: c_Qj2LyfbyPjRChiBtYBdqYF
          source_id: s_32oPWK5QgwA36QE3Y8tQo9
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
        id: c_xrgCQKjA24p3o67GCwtLFA
        subject_person_id: p_GDWRJKcKqeHFWJPRZpK9nP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1375年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5TCnp1uu2UoUf2LTrni2fK
          claim_id: c_xrgCQKjA24p3o67GCwtLFA
          source_id: s_32oPWK5QgwA36QE3Y8tQo9
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
        id: c_9tgykJj43BkryUNX3jjdLH
        subject_person_id: p_GDWRJKcKqeHFWJPRZpK9nP
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
        - id: cs_91hEgdaeiJ3PLjD1PR2B3p
          claim_id: c_9tgykJj43BkryUNX3jjdLH
          source_id: s_32oPWK5QgwA36QE3Y8tQo9
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

# 王謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謙 | accepted |
| birth.date | 1319年 | accepted |
| death.date | 1375年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王謙（CBDB 100984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100984&o=json)
