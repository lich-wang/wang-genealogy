---
schema: wang-person/v1
id: p_AcD8rLBCCjpZ5E8dG4nLKD
status: active
merged_into: null
display_name: 王崇惠
cbdb_id: 246485
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7C7ddwZ1QTucmAxuXkJdwr
        subject_person_id: p_AcD8rLBCCjpZ5E8dG4nLKD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇惠，明人物。成化八年進士，籍贯新喻。（中国历代人物传记资料库 CBDB 246485）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_aH7AKCDjG2eL6DtuccXt_6
          claim_id: c_7C7ddwZ1QTucmAxuXkJdwr
          source_id: s_A3LkZLTzYDrzmAfZpy4QB8
          stance: supports
          locator: CBDB:246485
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_A3LkZLTzYDrzmAfZpy4QB8
            source_type: api_record
            title: 中国历代人物传记资料库：王崇惠（CBDB 246485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246485&o=json
            external_identifier: CBDB:246485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cui6ng7ENHjZvBBb1g94DZ
        subject_person_id: p_AcD8rLBCCjpZ5E8dG4nLKD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇惠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CMRTpEWgcYWmAx2Jj8JAVQ
          claim_id: c_cui6ng7ENHjZvBBb1g94DZ
          source_id: s_A3LkZLTzYDrzmAfZpy4QB8
          stance: supports
          locator: CBDB:246485
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
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

# 王崇惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王崇惠，明人物。成化八年進士，籍贯新喻。（中国历代人物传记资料库 CBDB 246485） | accepted |
| name.primary | 王崇惠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崇惠（CBDB 246485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246485&o=json)
