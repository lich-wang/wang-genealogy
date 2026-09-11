---
schema: wang-person/v1
id: p_V91UZRWyAuB7hrJMpTkccY
status: active
merged_into: null
display_name: 王問
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WUDdQJAcK9L6Kw9ZLRp3wk
        subject_person_id: p_V91UZRWyAuB7hrJMpTkccY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_meCs4epf7MMhwKL89atTpe
          claim_id: c_WUDdQJAcK9L6Kw9ZLRp3wk
          source_id: s_DUj38tqUXSXbDSP24cnDxM
          stance: supports
          locator: CBDB:323753
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（323753）
          source: &a1
            id: s_DUj38tqUXSXbDSP24cnDxM
            source_type: api_record
            title: 中国历代人物传记资料库：王問（CBDB 323753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323753&o=json
            external_identifier: CBDB:323753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.148Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FPeKnScHfZNQK4qj95ZW9Y
        subject_person_id: p_V91UZRWyAuB7hrJMpTkccY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問，明人物。嘉靖三十八年進士，籍贯清苑。（中国历代人物传记资料库 CBDB 323753）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Vkwe2MaV_RZLi7vgas9t3Y
          claim_id: c_FPeKnScHfZNQK4qj95ZW9Y
          source_id: s_DUj38tqUXSXbDSP24cnDxM
          stance: supports
          locator: CBDB:323753
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

# 王問

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王問 | accepted |
| bio.summary | 王問，明人物。嘉靖三十八年進士，籍贯清苑。（中国历代人物传记资料库 CBDB 323753） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王問（CBDB 323753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323753&o=json)
