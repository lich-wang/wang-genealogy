---
schema: wang-person/v1
id: p_xHQxRq3VnZJaHDLrxFThio
status: active
merged_into: null
display_name: 王繼遠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FtwaNPSwh54ezZwfskGbck
        subject_person_id: p_xHQxRq3VnZJaHDLrxFThio
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MUJJn5vu9LjneyRjeaCxPZ
          claim_id: c_FtwaNPSwh54ezZwfskGbck
          source_id: s_oPf9kJhaQrhzFgN9qNy6JS
          stance: supports
          locator: CBDB:38449
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38449）
          source: &a1
            id: s_oPf9kJhaQrhzFgN9qNy6JS
            source_type: api_record
            title: 中国历代人物传记资料库：王繼遠（CBDB 38449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38449&o=json
            external_identifier: CBDB:38449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.479Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zBkv1SWg5cC1jnVXsd2nPF
        subject_person_id: p_xHQxRq3VnZJaHDLrxFThio
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼遠，宋人物。曾任供備庫副使。（中国历代人物传记资料库 CBDB 38449）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nNLauKiI1FxPRbyqYcKGPA
          claim_id: c_zBkv1SWg5cC1jnVXsd2nPF
          source_id: s_oPf9kJhaQrhzFgN9qNy6JS
          stance: supports
          locator: CBDB:38449
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

# 王繼遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼遠 | accepted |
| bio.summary | 王繼遠，宋人物。曾任供備庫副使。（中国历代人物传记资料库 CBDB 38449） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼遠（CBDB 38449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38449&o=json)
