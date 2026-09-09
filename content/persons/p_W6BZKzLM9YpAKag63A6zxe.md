---
schema: wang-person/v1
id: p_W6BZKzLM9YpAKag63A6zxe
status: active
merged_into: null
display_name: 王澄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FNHq54xwtRNKJ8AEKQ8rCT
        subject_person_id: p_W6BZKzLM9YpAKag63A6zxe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bm134Dq7Cctnqd8EUZCsrt
          claim_id: c_FNHq54xwtRNKJ8AEKQ8rCT
          source_id: s_jW8JdJKkD25V9CG1Y7dGF6
          stance: supports
          locator: CBDB:383065
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（383065）
          source: &a1
            id: s_jW8JdJKkD25V9CG1Y7dGF6
            source_type: api_record
            title: 中国历代人物传记资料库：王澄（CBDB 383065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383065&o=json
            external_identifier: CBDB:383065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.820Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tcxf5CW8rvQdeBSxY3tPtK
        subject_person_id: p_W6BZKzLM9YpAKag63A6zxe
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
        - id: cs_dB58MHa1QXBYikEqWLESN9
          claim_id: c_tcxf5CW8rvQdeBSxY3tPtK
          source_id: s_jW8JdJKkD25V9CG1Y7dGF6
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

# 王澄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澄 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澄（CBDB 383065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383065&o=json)
