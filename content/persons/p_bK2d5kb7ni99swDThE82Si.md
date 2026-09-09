---
schema: wang-person/v1
id: p_bK2d5kb7ni99swDThE82Si
status: active
merged_into: null
display_name: 王浚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2szxomhCtK8S4899h6iP7o
        subject_person_id: p_bK2d5kb7ni99swDThE82Si
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DTxuWJubo3WgSoy1c1MYup
          claim_id: c_2szxomhCtK8S4899h6iP7o
          source_id: s_yrmKk65RhfGHEDmUSGQoGZ
          stance: supports
          locator: CBDB:71175
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71175）
          source: &a1
            id: s_yrmKk65RhfGHEDmUSGQoGZ
            source_type: api_record
            title: 中国历代人物传记资料库：王浚（CBDB 71175）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71175&o=json
            external_identifier: CBDB:71175
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.453Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_SGfTE3CBRMVTZTT9H1L4tK
        subject_person_id: p_bK2d5kb7ni99swDThE82Si
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1765年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NXK6s4Bm9C5BSbbYdMkghD
          claim_id: c_SGfTE3CBRMVTZTT9H1L4tK
          source_id: s_yrmKk65RhfGHEDmUSGQoGZ
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
        id: c_ESdDd2iuQoYd6mE2FgWYWQ
        subject_person_id: p_bK2d5kb7ni99swDThE82Si
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1808年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x6MnC6FvkRoLHfRFvrLjXJ
          claim_id: c_ESdDd2iuQoYd6mE2FgWYWQ
          source_id: s_yrmKk65RhfGHEDmUSGQoGZ
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
        id: c_RHYReZAJKoCr8bzkH4wH5y
        subject_person_id: p_bK2d5kb7ni99swDThE82Si
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
        - id: cs_VyJGZoRM85rqMsQJkSWhsR
          claim_id: c_RHYReZAJKoCr8bzkH4wH5y
          source_id: s_yrmKk65RhfGHEDmUSGQoGZ
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

# 王浚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浚 | accepted |
| birth.date | 1765年 | accepted |
| death.date | 1808年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王浚（CBDB 71175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71175&o=json)
