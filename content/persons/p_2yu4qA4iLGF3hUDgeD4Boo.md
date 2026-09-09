---
schema: wang-person/v1
id: p_2yu4qA4iLGF3hUDgeD4Boo
status: active
merged_into: null
display_name: 王鼇永
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P3KGqEPzf2cMxh4Max993v
        subject_person_id: p_2yu4qA4iLGF3hUDgeD4Boo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼇永
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KGGPk1eRkucL4V3pBN5oWK
          claim_id: c_P3KGqEPzf2cMxh4Max993v
          source_id: s_eriLzRQ82DpwC8BXVdN1H9
          stance: supports
          locator: CBDB:497389
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（497389）
          source: &a1
            id: s_eriLzRQ82DpwC8BXVdN1H9
            source_type: api_record
            title: 中国历代人物传记资料库：王鼇永（CBDB 497389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497389&o=json
            external_identifier: CBDB:497389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.639Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yDFDSW1TeTnmu8W1iH5hBW
        subject_person_id: p_2yu4qA4iLGF3hUDgeD4Boo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EN27VnVXtMGBj4r2n46cRH
          claim_id: c_yDFDSW1TeTnmu8W1iH5hBW
          source_id: s_eriLzRQ82DpwC8BXVdN1H9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王鼇永

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼇永 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼇永（CBDB 497389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497389&o=json)
