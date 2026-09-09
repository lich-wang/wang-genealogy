---
schema: wang-person/v1
id: p_xjTH75251QfVZ5288H3BiA
status: active
merged_into: null
display_name: 王士嘉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o96P8EppBkze1CZvrrTJeV
        subject_person_id: p_xjTH75251QfVZ5288H3BiA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士嘉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_icysJYwtdk65BWbTbjWg29
          claim_id: c_o96P8EppBkze1CZvrrTJeV
          source_id: s_Ftvas7xAEhXi5Uw84soDjL
          stance: supports
          locator: CBDB:126448
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126448）
          source: &a1
            id: s_Ftvas7xAEhXi5Uw84soDjL
            source_type: api_record
            title: 中国历代人物传记资料库：王士嘉（CBDB 126448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126448&o=json
            external_identifier: CBDB:126448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.964Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NJBi85mGhgQh1rMkk8hqdH
        subject_person_id: p_xjTH75251QfVZ5288H3BiA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1369年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ULSFuJZLxNje2ZLMMsYRcM
          claim_id: c_NJBi85mGhgQh1rMkk8hqdH
          source_id: s_Ftvas7xAEhXi5Uw84soDjL
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
        id: c_GH3mHvczKd2kpBGqZJ92zq
        subject_person_id: p_xjTH75251QfVZ5288H3BiA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1455年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mt1DbEze4H13MFQxW1nzfQ
          claim_id: c_GH3mHvczKd2kpBGqZJ92zq
          source_id: s_Ftvas7xAEhXi5Uw84soDjL
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
        id: c_A8PfBHwCf3Vnr9dcwtK2FV
        subject_person_id: p_xjTH75251QfVZ5288H3BiA
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
        - id: cs_6XYPiMnmWViuWkkPxxawgs
          claim_id: c_A8PfBHwCf3Vnr9dcwtK2FV
          source_id: s_Ftvas7xAEhXi5Uw84soDjL
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

# 王士嘉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士嘉 | accepted |
| birth.date | 1369年 | accepted |
| death.date | 1455年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士嘉（CBDB 126448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126448&o=json)
