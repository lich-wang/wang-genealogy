---
schema: wang-person/v1
id: p_CDeHkFitHyn9G4YYa82Q3y
status: active
merged_into: null
display_name: 王佩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yxXRa1zusEpyU2LCJBhzgn
        subject_person_id: p_CDeHkFitHyn9G4YYa82Q3y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Nz8soKzsBfx1cNP38epkDd
          claim_id: c_yxXRa1zusEpyU2LCJBhzgn
          source_id: s_AbVaG85Bh6tLCeUqdPYsCv
          stance: supports
          locator: CBDB:253908
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253908）
          source: &a1
            id: s_AbVaG85Bh6tLCeUqdPYsCv
            source_type: api_record
            title: 中国历代人物传记资料库：王佩（CBDB 253908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253908&o=json
            external_identifier: CBDB:253908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.313Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LNt3L2LL5EkFBcEAB7dPfv
        subject_person_id: p_CDeHkFitHyn9G4YYa82Q3y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩，明人物。成化十四年進士，籍贯和順。（中国历代人物传记资料库 CBDB 253908）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_z0NxEAU2Ui_b7gJmzsmJW8
          claim_id: c_LNt3L2LL5EkFBcEAB7dPfv
          source_id: s_AbVaG85Bh6tLCeUqdPYsCv
          stance: supports
          locator: CBDB:253908
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

# 王佩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佩 | accepted |
| bio.summary | 王佩，明人物。成化十四年進士，籍贯和順。（中国历代人物传记资料库 CBDB 253908） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佩（CBDB 253908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253908&o=json)
