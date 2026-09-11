---
schema: wang-person/v1
id: p_WC6kotdhf5Qzjt9mn9CQUe
status: active
merged_into: null
display_name: 王乘燮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qoDf9JCXp66J3kUBmQMXMK
        subject_person_id: p_WC6kotdhf5Qzjt9mn9CQUe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乘燮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RC1uuewoKEJTJ7dBSKp7K5
          claim_id: c_qoDf9JCXp66J3kUBmQMXMK
          source_id: s_G4jTEppGknqnvP17cV7abB
          stance: supports
          locator: CBDB:71958
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71958）
          source: &a1
            id: s_G4jTEppGknqnvP17cV7abB
            source_type: api_record
            title: 中国历代人物传记资料库：王乘燮（CBDB 71958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71958&o=json
            external_identifier: CBDB:71958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.938Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YKsC9P1WH6XEd8LJDBhGRH
        subject_person_id: p_WC6kotdhf5Qzjt9mn9CQUe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1839年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hdmKcFWfarHUKUa7AjwQmE
          claim_id: c_YKsC9P1WH6XEd8LJDBhGRH
          source_id: s_G4jTEppGknqnvP17cV7abB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jLk9L35pMcmoYqhkm5EPtT
        subject_person_id: p_WC6kotdhf5Qzjt9mn9CQUe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乘燮（生于1839年），清人物。籍贯福山。（中国历代人物传记资料库 CBDB 71958）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eq5a9Vuy9d-D3m1EExzTAu
          claim_id: c_jLk9L35pMcmoYqhkm5EPtT
          source_id: s_G4jTEppGknqnvP17cV7abB
          stance: supports
          locator: CBDB:71958
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

# 王乘燮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王乘燮 | accepted |
| birth.date | 1839年 | accepted |
| bio.summary | 王乘燮（生于1839年），清人物。籍贯福山。（中国历代人物传记资料库 CBDB 71958） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王乘燮（CBDB 71958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71958&o=json)
