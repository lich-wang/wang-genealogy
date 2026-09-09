---
schema: wang-person/v1
id: p_fTQ5uKysJkKCpCS1k6RZvm
status: active
merged_into: null
display_name: 王景哲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CjkkZZpG2GNqL7DLA1QQxp
        subject_person_id: p_fTQ5uKysJkKCpCS1k6RZvm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景哲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t22vSLxZkaWod8m9rAhiNP
          claim_id: c_CjkkZZpG2GNqL7DLA1QQxp
          source_id: s_DZBYrM158ejG2dhW2eY2iE
          stance: supports
          locator: CBDB:101360
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101360）
          source: &a1
            id: s_DZBYrM158ejG2dhW2eY2iE
            source_type: api_record
            title: 中国历代人物传记资料库：王景哲（CBDB 101360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101360&o=json
            external_identifier: CBDB:101360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.820Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NvC1poJV5EqgGvvsXz1Ujd
        subject_person_id: p_fTQ5uKysJkKCpCS1k6RZvm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oeMFekJ7uqpBcWwh21DHFf
          claim_id: c_NvC1poJV5EqgGvvsXz1Ujd
          source_id: s_DZBYrM158ejG2dhW2eY2iE
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

# 王景哲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景哲 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景哲（CBDB 101360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101360&o=json)
