---
schema: wang-person/v1
id: p_wDGpEjw4HUcbMBq2DGQfqE
status: active
merged_into: null
display_name: 王唐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SZXLLmhMBH75LfY7WN7B6N
        subject_person_id: p_wDGpEjw4HUcbMBq2DGQfqE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王唐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7ESEQP7JLLsnipiGwt7vb1
          claim_id: c_SZXLLmhMBH75LfY7WN7B6N
          source_id: s_ZBBtXHwrGfYwyXSk7v717k
          stance: supports
          locator: CBDB:32567
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（32567）
          source: &a1
            id: s_ZBBtXHwrGfYwyXSk7v717k
            source_type: api_record
            title: 中国历代人物传记资料库：王唐（CBDB 32567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32567&o=json
            external_identifier: CBDB:32567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.054Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D4bLX7VA5CzdFicEA2DVWr
        subject_person_id: p_wDGpEjw4HUcbMBq2DGQfqE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G7U4rQgTn1sjKiv6zuUvm6
          claim_id: c_D4bLX7VA5CzdFicEA2DVWr
          source_id: s_ZBBtXHwrGfYwyXSk7v717k
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

# 王唐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王唐 | accepted |
| bio.summary | CBDB 记载为南唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王唐（CBDB 32567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32567&o=json)
