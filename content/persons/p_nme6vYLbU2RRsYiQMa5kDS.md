---
schema: wang-person/v1
id: p_nme6vYLbU2RRsYiQMa5kDS
status: active
merged_into: null
display_name: 王璋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7xtAECLv1NY4f8GKxQmzHP
        subject_person_id: p_nme6vYLbU2RRsYiQMa5kDS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rWNcnx4GFvPHZKGpoRFLe7
          claim_id: c_7xtAECLv1NY4f8GKxQmzHP
          source_id: s_DqBcDqvEb7WbBS8fDK3cQg
          stance: supports
          locator: CBDB:270694
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270694）
          source: &a1
            id: s_DqBcDqvEb7WbBS8fDK3cQg
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 270694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270694&o=json
            external_identifier: CBDB:270694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ADEyzpLY4A8UeDFkwA7H3E
        subject_person_id: p_nme6vYLbU2RRsYiQMa5kDS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋，明人物。景泰五年進士，籍贯松江守禦千戶所。（中国历代人物传记资料库 CBDB 270694）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pCkL8Y0ulzIDp4mkdc8l_s
          claim_id: c_ADEyzpLY4A8UeDFkwA7H3E
          source_id: s_DqBcDqvEb7WbBS8fDK3cQg
          stance: supports
          locator: CBDB:270694
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

# 王璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璋 | accepted |
| bio.summary | 王璋，明人物。景泰五年進士，籍贯松江守禦千戶所。（中国历代人物传记资料库 CBDB 270694） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璋（CBDB 270694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270694&o=json)
