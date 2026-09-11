---
schema: wang-person/v1
id: p_X9sKGftq8EMHs9pLs8dXue
status: active
merged_into: null
display_name: 王若翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MMJJfgVYFMTP26geUQbbmT
        subject_person_id: p_X9sKGftq8EMHs9pLs8dXue
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JKsHvVVrEW4n69vjkJfJ8c
          claim_id: c_MMJJfgVYFMTP26geUQbbmT
          source_id: s_EAwu2xVVteyGEUAhbU8GQM
          stance: supports
          locator: CBDB:640074
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640074）
          source: &a1
            id: s_EAwu2xVVteyGEUAhbU8GQM
            source_type: api_record
            title: 中国历代人物传记资料库：王若翰（CBDB 640074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640074&o=json
            external_identifier: CBDB:640074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.141Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NBLAhHVWQ9XTtBkwQARb4p
        subject_person_id: p_X9sKGftq8EMHs9pLs8dXue
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若翰，清人物。籍贯雲南，入仕優貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640074）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k8DsOmcZSAJnzUkFYJuLzm
          claim_id: c_NBLAhHVWQ9XTtBkwQARb4p
          source_id: s_EAwu2xVVteyGEUAhbU8GQM
          stance: supports
          locator: CBDB:640074
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

# 王若翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王若翰 | accepted |
| bio.summary | 王若翰，清人物。籍贯雲南，入仕優貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640074） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王若翰（CBDB 640074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640074&o=json)
