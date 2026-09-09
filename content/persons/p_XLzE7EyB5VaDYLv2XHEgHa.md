---
schema: wang-person/v1
id: p_XLzE7EyB5VaDYLv2XHEgHa
status: active
merged_into: null
display_name: 王佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B2dZdzHGfzH8mdGgrf15yj
        subject_person_id: p_XLzE7EyB5VaDYLv2XHEgHa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b1B2JT3k3zevmxcHK7Ahbu
          claim_id: c_B2dZdzHGfzH8mdGgrf15yj
          source_id: s_MxCbDf1hZJQFL5eCBkhfNa
          stance: supports
          locator: CBDB:67281
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67281）
          source: &a1
            id: s_MxCbDf1hZJQFL5eCBkhfNa
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 67281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67281&o=json
            external_identifier: CBDB:67281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.983Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_oLxaL4BvQtmvSxCksc6rGj
        subject_person_id: p_XLzE7EyB5VaDYLv2XHEgHa
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1622年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZqcojuJRCjRGXLSQn4ChJi
          claim_id: c_oLxaL4BvQtmvSxCksc6rGj
          source_id: s_MxCbDf1hZJQFL5eCBkhfNa
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
        id: c_oLHLShWETc8nK13sdVrhpH
        subject_person_id: p_XLzE7EyB5VaDYLv2XHEgHa
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
        - id: cs_rKjQGa9Q37ahpreSWJt6hd
          claim_id: c_oLHLShWETc8nK13sdVrhpH
          source_id: s_MxCbDf1hZJQFL5eCBkhfNa
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

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| death.date | 1622年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 67281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67281&o=json)
