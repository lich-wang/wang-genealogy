---
schema: wang-person/v1
id: p_GFZf4JETUszofU9J5UJWKS
status: active
merged_into: null
display_name: 王銓德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YjS4g3LqNtwkZCaDhBd7Nx
        subject_person_id: p_GFZf4JETUszofU9J5UJWKS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銓德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BE9Kb932UvNKnBMTTGD56E
          claim_id: c_YjS4g3LqNtwkZCaDhBd7Nx
          source_id: s_7Nj7kQFv4RwZyxJM3gkNEk
          stance: supports
          locator: CBDB:640557
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640557）
          source: &a1
            id: s_7Nj7kQFv4RwZyxJM3gkNEk
            source_type: api_record
            title: 中国历代人物传记资料库：王銓德（CBDB 640557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640557&o=json
            external_identifier: CBDB:640557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.296Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TpPYpB1EeB3Fhv38VJRJqj
        subject_person_id: p_GFZf4JETUszofU9J5UJWKS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銓德，清人物。籍贯衛輝府，入仕附貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640557）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uGSAfbxGPvoSJeJLkwIO54
          claim_id: c_TpPYpB1EeB3Fhv38VJRJqj
          source_id: s_7Nj7kQFv4RwZyxJM3gkNEk
          stance: supports
          locator: CBDB:640557
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

# 王銓德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銓德 | accepted |
| bio.summary | 王銓德，清人物。籍贯衛輝府，入仕附貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640557） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銓德（CBDB 640557）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640557&o=json)
