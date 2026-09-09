---
schema: wang-person/v1
id: p_4dqEWnCHn8qdLGXjhwCDuh
status: active
merged_into: null
display_name: 王固貞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jvE4PPg5V98UCrGXyQTE2w
        subject_person_id: p_4dqEWnCHn8qdLGXjhwCDuh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王固貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iBPVfceNUBgDs25Lpy3SU6
          claim_id: c_jvE4PPg5V98UCrGXyQTE2w
          source_id: s_W2JYVnDUaqPAC7mv2gzk3i
          stance: supports
          locator: CBDB:175655
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175655）
          source: &a1
            id: s_W2JYVnDUaqPAC7mv2gzk3i
            source_type: api_record
            title: 中国历代人物传记资料库：王固貞（CBDB 175655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175655&o=json
            external_identifier: CBDB:175655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.239Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ZCkeNrkfhMsCwcn7vxPzAv
        subject_person_id: p_4dqEWnCHn8qdLGXjhwCDuh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 655年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BwEzuZxYNrfv1o1C6Mxfto
          claim_id: c_ZCkeNrkfhMsCwcn7vxPzAv
          source_id: s_W2JYVnDUaqPAC7mv2gzk3i
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
        id: c_bbA84jQPGr6X4YhNMtBYHa
        subject_person_id: p_4dqEWnCHn8qdLGXjhwCDuh
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
        - id: cs_TFVZTNhGcGsbj2GqXKNQXG
          claim_id: c_bbA84jQPGr6X4YhNMtBYHa
          source_id: s_W2JYVnDUaqPAC7mv2gzk3i
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

# 王固貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王固貞 | accepted |
| death.date | 655年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王固貞（CBDB 175655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175655&o=json)
