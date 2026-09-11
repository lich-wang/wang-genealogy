---
schema: wang-person/v1
id: p_eotfNgyp9iTc6YVn77HfsU
status: active
merged_into: null
display_name: 王祝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2G4RUPfGwAk4GdrY9hyGUh
        subject_person_id: p_eotfNgyp9iTc6YVn77HfsU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DK4Q8QorG4CM7Gda342Lkb
          claim_id: c_2G4RUPfGwAk4GdrY9hyGUh
          source_id: s_Gw3UoEh4mq8VpC4C9feU68
          stance: supports
          locator: CBDB:471293
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（471293）
          source: &a1
            id: s_Gw3UoEh4mq8VpC4C9feU68
            source_type: api_record
            title: 中国历代人物传记资料库：王祝（CBDB 471293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471293&o=json
            external_identifier: CBDB:471293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.182Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7QonUHTvRCTGuDN3SCGq9R
        subject_person_id: p_eotfNgyp9iTc6YVn77HfsU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祝，清人物。曾任知府。（中国历代人物传记资料库 CBDB 471293）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xrf1gOysMdMccB8ym-8IlY
          claim_id: c_7QonUHTvRCTGuDN3SCGq9R
          source_id: s_Gw3UoEh4mq8VpC4C9feU68
          stance: supports
          locator: CBDB:471293
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

# 王祝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祝 | accepted |
| bio.summary | 王祝，清人物。曾任知府。（中国历代人物传记资料库 CBDB 471293） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祝（CBDB 471293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=471293&o=json)
