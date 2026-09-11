---
schema: wang-person/v1
id: p_c3kfQEGoJPL7CtMwoxHyL2
status: active
merged_into: null
display_name: 王該
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SMNhz9EhgLkib4utr2F2WQ
        subject_person_id: p_c3kfQEGoJPL7CtMwoxHyL2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王該
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E6HFjM9pPPV543QGKi3yns
          claim_id: c_SMNhz9EhgLkib4utr2F2WQ
          source_id: s_B5Hq9kCAGUeo5jw5zGySMx
          stance: supports
          locator: CBDB:12159
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12159）
          source: &a1
            id: s_B5Hq9kCAGUeo5jw5zGySMx
            source_type: api_record
            title: 中国历代人物传记资料库：王該（CBDB 12159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12159&o=json
            external_identifier: CBDB:12159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.589Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pR2nAJRnb1zzcQg7LTpnit
        subject_person_id: p_c3kfQEGoJPL7CtMwoxHyL2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王該，唐人物。籍贯廬陵。（中国历代人物传记资料库 CBDB 12159）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Vq6NjPabyP-2qsQnBsSSmw
          claim_id: c_pR2nAJRnb1zzcQg7LTpnit
          source_id: s_B5Hq9kCAGUeo5jw5zGySMx
          stance: supports
          locator: CBDB:12159
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
  descendants:
    - claim:
        id: c_mKwudffsOeeLMvqT-KVuqn
        subject_person_id: p_c3kfQEGoJPL7CtMwoxHyL2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KcKFqp4wzz7NL4rU9Bp3pT
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LxJ8gQryMAvcQqhpSXEjK6
          claim_id: c_mKwudffsOeeLMvqT-KVuqn
          source_id: s_B5Hq9kCAGUeo5jw5zGySMx
          stance: supports
          locator: CBDB 双向互证（玄孫;四世孫 王著 ⇄ 高祖;四世祖 王該）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_KcKFqp4wzz7NL4rU9Bp3pT
        status: active
        display_name: 王著
        merged_into_person_id: null
  other: []
---

# 王該

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王該 | accepted |
| bio.summary | 王該，唐人物。籍贯廬陵。（中国历代人物传记资料库 CBDB 12159） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_KcKFqp4wzz7NL4rU9Bp3pT | 王著 | accepted |

## 外部来源

- [中国历代人物传记资料库：王該（CBDB 12159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12159&o=json)
