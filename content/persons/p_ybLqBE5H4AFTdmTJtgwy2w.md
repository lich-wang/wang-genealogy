---
schema: wang-person/v1
id: p_ybLqBE5H4AFTdmTJtgwy2w
status: active
merged_into: null
display_name: 王存忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3PJ8DLR7BDk8PHHEtAHFdP
        subject_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WRAab4zwUZNbzzNTz3QUAB
          claim_id: c_3PJ8DLR7BDk8PHHEtAHFdP
          source_id: s_5iN8YRqwqwNvNG7HaRVWEq
          stance: supports
          locator: CBDB:200628
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200628）
          source: &a1
            id: s_5iN8YRqwqwNvNG7HaRVWEq
            source_type: api_record
            title: 中国历代人物传记资料库：王存忠（CBDB 200628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200628&o=json
            external_identifier: CBDB:200628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.624Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_o59Dn8Nk3k4KLJGSceFhaN
        subject_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1447年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pvdWG2nD61UUotY2WhmMw5
          claim_id: c_o59Dn8Nk3k4KLJGSceFhaN
          source_id: s_5iN8YRqwqwNvNG7HaRVWEq
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
        id: c_K2WQNVW5LPmsYcnmyD4ZTB
        subject_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
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
        - id: cs_hvJQAwbT9hqawCA22V35Ks
          claim_id: c_K2WQNVW5LPmsYcnmyD4ZTB
          source_id: s_5iN8YRqwqwNvNG7HaRVWEq
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

# 王存忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王存忠 | accepted |
| birth.date | 1447年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王存忠（CBDB 200628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200628&o=json)
