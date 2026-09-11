---
schema: wang-person/v1
id: p_Ka2VJXXHm5PK7oLL84VyUD
status: active
merged_into: null
display_name: 王知徽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4i4AmtEcYLDqVSsRBLRxEu
        subject_person_id: p_Ka2VJXXHm5PK7oLL84VyUD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知徽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oPn1CwrcPQucBqVijtEutE
          claim_id: c_4i4AmtEcYLDqVSsRBLRxEu
          source_id: s_FyPCYqzSg2eVfgf8u4xr82
          stance: supports
          locator: CBDB:190027
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190027）
          source: &a1
            id: s_FyPCYqzSg2eVfgf8u4xr82
            source_type: api_record
            title: 中国历代人物传记资料库：王知徽（CBDB 190027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190027&o=json
            external_identifier: CBDB:190027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.277Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GR4GP5SE4VL75P6JseV8kT
        subject_person_id: p_Ka2VJXXHm5PK7oLL84VyUD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 817年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sTBX48WuTtZvZPYiAc61Sd
          claim_id: c_GR4GP5SE4VL75P6JseV8kT
          source_id: s_FyPCYqzSg2eVfgf8u4xr82
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
        id: c_FXKH5tCqt149J4SZASB197
        subject_person_id: p_Ka2VJXXHm5PK7oLL84VyUD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知徽（卒于817年），唐人物。籍贯幽都，曾任未詳。（中国历代人物传记资料库 CBDB 190027）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4WG-5lQESBnXs53mjGGsh4
          claim_id: c_FXKH5tCqt149J4SZASB197
          source_id: s_FyPCYqzSg2eVfgf8u4xr82
          stance: supports
          locator: CBDB:190027
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__8umbma5LDfwwoUUQva47j
        subject_person_id: p_eRGyGdFvPg7HFBQPrRQewg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ka2VJXXHm5PK7oLL84VyUD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EJVt-KpmdBqXaI1IhvMhvz
          claim_id: c__8umbma5LDfwwoUUQva47j
          source_id: s_YENVnLt7xAPoTrPBjdBq4u
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YENVnLt7xAPoTrPBjdBq4u
            source_type: api_record
            title: 中国历代人物传记资料库：王翫（CBDB 190025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190025&o=json
            external_identifier: CBDB:190025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.311Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eRGyGdFvPg7HFBQPrRQewg
        status: active
        display_name: 王翫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王知徽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王知徽 | accepted |
| death.date | 817年 | accepted |
| bio.summary | 王知徽（卒于817年），唐人物。籍贯幽都，曾任未詳。（中国历代人物传记资料库 CBDB 190027） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eRGyGdFvPg7HFBQPrRQewg | 王翫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翫（CBDB 190025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190025&o=json)
- [中国历代人物传记资料库：王知徽（CBDB 190027）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190027&o=json)
