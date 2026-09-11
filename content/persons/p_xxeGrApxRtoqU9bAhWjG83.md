---
schema: wang-person/v1
id: p_xxeGrApxRtoqU9bAhWjG83
status: active
merged_into: null
display_name: 王國賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FTy11oRviVwMGQ5SWESn3p
        subject_person_id: p_xxeGrApxRtoqU9bAhWjG83
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RFQqL3zin6fiF5rDrgHQaV
          claim_id: c_FTy11oRviVwMGQ5SWESn3p
          source_id: s_kHA7KPrxaVJ5Hm7EAogkBi
          stance: supports
          locator: CBDB:343431
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343431）
          source: &a1
            id: s_kHA7KPrxaVJ5Hm7EAogkBi
            source_type: api_record
            title: 中国历代人物传记资料库：王國賓（CBDB 343431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343431&o=json
            external_identifier: CBDB:343431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oZD1WJ8sw8kR7Zb9YmFdmp
        subject_person_id: p_xxeGrApxRtoqU9bAhWjG83
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國賓，明人物。明清進士進士，籍贯茬平，入仕進士。（中国历代人物传记资料库 CBDB 343431）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B1cv7qG4zFUGfN_XsSdJ0n
          claim_id: c_oZD1WJ8sw8kR7Zb9YmFdmp
          source_id: s_kHA7KPrxaVJ5Hm7EAogkBi
          stance: supports
          locator: CBDB:343431
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

# 王國賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國賓 | accepted |
| bio.summary | 王國賓，明人物。明清進士進士，籍贯茬平，入仕進士。（中国历代人物传记资料库 CBDB 343431） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國賓（CBDB 343431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343431&o=json)
