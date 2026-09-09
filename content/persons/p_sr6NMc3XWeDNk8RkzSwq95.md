---
schema: wang-person/v1
id: p_sr6NMc3XWeDNk8RkzSwq95
status: active
merged_into: null
display_name: 王元貞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kN8V99KW49BrJyCxnASjh3
        subject_person_id: p_sr6NMc3XWeDNk8RkzSwq95
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PgPj1EyF3WddtP3G6PWX5Z
          claim_id: c_kN8V99KW49BrJyCxnASjh3
          source_id: s_fR8qdnsSh2nPxN9mXh16T8
          stance: supports
          locator: CBDB:145444
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145444）
          source: &a1
            id: s_fR8qdnsSh2nPxN9mXh16T8
            source_type: api_record
            title: 中国历代人物传记资料库：王元貞（CBDB 145444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145444&o=json
            external_identifier: CBDB:145444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.673Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CHB95CNdHA4BYWfDAhTDfQ
        subject_person_id: p_sr6NMc3XWeDNk8RkzSwq95
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 781年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r325qsb4nF1xoh7AipUrkP
          claim_id: c_CHB95CNdHA4BYWfDAhTDfQ
          source_id: s_fR8qdnsSh2nPxN9mXh16T8
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
        id: c_757Z1h2GdsK92y8bdBRYHs
        subject_person_id: p_sr6NMc3XWeDNk8RkzSwq95
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 860年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1xr2JK54QHnyvs5tqrMQHs
          claim_id: c_757Z1h2GdsK92y8bdBRYHs
          source_id: s_fR8qdnsSh2nPxN9mXh16T8
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
        id: c_SHh3pTPwXgr1ujqsFKnV7f
        subject_person_id: p_sr6NMc3XWeDNk8RkzSwq95
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
        - id: cs_fU7Py6jpnccb7hanEN6UyX
          claim_id: c_SHh3pTPwXgr1ujqsFKnV7f
          source_id: s_fR8qdnsSh2nPxN9mXh16T8
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

# 王元貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元貞 | accepted |
| birth.date | 781年 | accepted |
| death.date | 860年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元貞（CBDB 145444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145444&o=json)
