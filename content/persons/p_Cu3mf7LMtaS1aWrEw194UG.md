---
schema: wang-person/v1
id: p_Cu3mf7LMtaS1aWrEw194UG
status: active
merged_into: null
display_name: 王邦直
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nufa4o7518r2XZ7XK6fEbJ
        subject_person_id: p_Cu3mf7LMtaS1aWrEw194UG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦直
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TbY8HQXhHq5HfQhb4WQjW1
          claim_id: c_Nufa4o7518r2XZ7XK6fEbJ
          source_id: s_XvcWaiv8U38FFGVJDgshGS
          stance: supports
          locator: CBDB:126555
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126555）
          source: &a1
            id: s_XvcWaiv8U38FFGVJDgshGS
            source_type: api_record
            title: 中国历代人物传记资料库：王邦直（CBDB 126555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126555&o=json
            external_identifier: CBDB:126555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.022Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MPMfZ94Czd4ttzH4CAyL6A
        subject_person_id: p_Cu3mf7LMtaS1aWrEw194UG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦直，明人物。籍贯武城。（中国历代人物传记资料库 CBDB 126555）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZSpf4cNszJZj6ejiIQOBV9
          claim_id: c_MPMfZ94Czd4ttzH4CAyL6A
          source_id: s_XvcWaiv8U38FFGVJDgshGS
          stance: supports
          locator: CBDB:126555
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

# 王邦直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邦直 | accepted |
| bio.summary | 王邦直，明人物。籍贯武城。（中国历代人物传记资料库 CBDB 126555） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王邦直（CBDB 126555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126555&o=json)
