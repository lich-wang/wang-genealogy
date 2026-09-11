---
schema: wang-person/v1
id: p_3NLnzRFf2xx7H3sARKQ6EZ
status: active
merged_into: null
display_name: 王公政
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A5yX34BfqwRxXtHes4ai9k
        subject_person_id: p_3NLnzRFf2xx7H3sARKQ6EZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mwJM2FizctNWeFQ94vL2Hp
          claim_id: c_A5yX34BfqwRxXtHes4ai9k
          source_id: s_FwmTbgdL6XV4xhnoF4HWXo
          stance: supports
          locator: CBDB:377342
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（377342）
          source: &a1
            id: s_FwmTbgdL6XV4xhnoF4HWXo
            source_type: api_record
            title: 中国历代人物传记资料库：王公政（CBDB 377342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377342&o=json
            external_identifier: CBDB:377342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.620Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VDQdvSGtqUjE6Kh5o5Aunh
        subject_person_id: p_3NLnzRFf2xx7H3sARKQ6EZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公政，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 377342）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ULZaA2-dtjSaQ1iA3o69_h
          claim_id: c_VDQdvSGtqUjE6Kh5o5Aunh
          source_id: s_FwmTbgdL6XV4xhnoF4HWXo
          stance: supports
          locator: CBDB:377342
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王公政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公政 | accepted |
| bio.summary | 王公政，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 377342） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公政（CBDB 377342）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377342&o=json)
