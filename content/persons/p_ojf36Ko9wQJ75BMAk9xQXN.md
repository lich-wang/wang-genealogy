---
schema: wang-person/v1
id: p_ojf36Ko9wQJ75BMAk9xQXN
status: active
merged_into: null
display_name: 王應元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_424p3tj4yL5xrDgi4GPJGg
        subject_person_id: p_ojf36Ko9wQJ75BMAk9xQXN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4tN8Z721gNK9e1ZSAV3F7h
          claim_id: c_424p3tj4yL5xrDgi4GPJGg
          source_id: s_ng99AojkNLv2bb6Sr7ewpk
          stance: supports
          locator: CBDB:207380
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207380）
          source: &a1
            id: s_ng99AojkNLv2bb6Sr7ewpk
            source_type: api_record
            title: 中国历代人物传记资料库：王應元（CBDB 207380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207380&o=json
            external_identifier: CBDB:207380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HEiAa746tdbzHSyCy7e3qW
        subject_person_id: p_ojf36Ko9wQJ75BMAk9xQXN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1558年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oYSFn1GH4TYAkn14hegPiB
          claim_id: c_HEiAa746tdbzHSyCy7e3qW
          source_id: s_ng99AojkNLv2bb6Sr7ewpk
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
        id: c_jheMChZrmEpt9R4GHhCzGc
        subject_person_id: p_ojf36Ko9wQJ75BMAk9xQXN
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
        - id: cs_dJU8mvUxFgBbPAPBLxBZpC
          claim_id: c_jheMChZrmEpt9R4GHhCzGc
          source_id: s_ng99AojkNLv2bb6Sr7ewpk
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

# 王應元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應元 | accepted |
| birth.date | 1558年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應元（CBDB 207380）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207380&o=json)
