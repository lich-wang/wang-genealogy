---
schema: wang-person/v1
id: p_fBfexKh6ZABHboR43XPHu7
status: active
merged_into: null
display_name: 王文通
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a93Qt35HwcB8gs1nysjNns
        subject_person_id: p_fBfexKh6ZABHboR43XPHu7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y6hm8fkM8GbB1Em4P81hKD
          claim_id: c_a93Qt35HwcB8gs1nysjNns
          source_id: s_hUxNv8dksdewg88fUC6HDi
          stance: supports
          locator: CBDB:457853
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（457853）
          source: &a1
            id: s_hUxNv8dksdewg88fUC6HDi
            source_type: api_record
            title: 中国历代人物传记资料库：王文通（CBDB 457853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457853&o=json
            external_identifier: CBDB:457853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.622Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9x1Y7M47y2Bdk9gBTPg1Bx
        subject_person_id: p_fBfexKh6ZABHboR43XPHu7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文通，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 457853）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5b1H4sbwa5ifb5bPatNI7t
          claim_id: c_9x1Y7M47y2Bdk9gBTPg1Bx
          source_id: s_hUxNv8dksdewg88fUC6HDi
          stance: supports
          locator: CBDB:457853
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

# 王文通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文通 | accepted |
| bio.summary | 王文通，明人物。曾任縣丞。（中国历代人物传记资料库 CBDB 457853） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文通（CBDB 457853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=457853&o=json)
