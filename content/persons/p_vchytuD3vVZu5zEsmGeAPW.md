---
schema: wang-person/v1
id: p_vchytuD3vVZu5zEsmGeAPW
status: active
merged_into: null
display_name: 王九鼎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZumyJLiEMhZhKwQUCNECBD
        subject_person_id: p_vchytuD3vVZu5zEsmGeAPW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fUAkA1ujjZvDr5b6NxVfHk
          claim_id: c_ZumyJLiEMhZhKwQUCNECBD
          source_id: s_AUmvKUvwBfpjf2Db31kjLX
          stance: supports
          locator: CBDB:71312
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71312）
          source: &a1
            id: s_AUmvKUvwBfpjf2Db31kjLX
            source_type: api_record
            title: 中国历代人物传记资料库：王九鼎（CBDB 71312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71312&o=json
            external_identifier: CBDB:71312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.587Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LHVPyG9HMbHA23U9731Uv9
        subject_person_id: p_vchytuD3vVZu5zEsmGeAPW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1626年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6U9BG6BATFdrdyrg8ynEHc
          claim_id: c_LHVPyG9HMbHA23U9731Uv9
          source_id: s_AUmvKUvwBfpjf2Db31kjLX
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
        id: c_DQBHL9Dio3S1ph7hKroEL3
        subject_person_id: p_vchytuD3vVZu5zEsmGeAPW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1682年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x6kqBHNnT6fvXVVtGwLULQ
          claim_id: c_DQBHL9Dio3S1ph7hKroEL3
          source_id: s_AUmvKUvwBfpjf2Db31kjLX
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
        id: c_aH3Vwj8mmsiioMbnVNiff3
        subject_person_id: p_vchytuD3vVZu5zEsmGeAPW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九鼎（1626年—1682年），清人物。籍贯三原。（中国历代人物传记资料库 CBDB 71312）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZRqzdbYYzjIiW4tvxA5aC-
          claim_id: c_aH3Vwj8mmsiioMbnVNiff3
          source_id: s_AUmvKUvwBfpjf2Db31kjLX
          stance: supports
          locator: CBDB:71312
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

# 王九鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九鼎 | accepted |
| birth.date | 1626年 | accepted |
| death.date | 1682年 | accepted |
| bio.summary | 王九鼎（1626年—1682年），清人物。籍贯三原。（中国历代人物传记资料库 CBDB 71312） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王九鼎（CBDB 71312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71312&o=json)
