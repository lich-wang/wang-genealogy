---
schema: wang-person/v1
id: p_Jb58ByYNBGYEJGGA54oxCa
status: active
merged_into: null
display_name: 王庭蘭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7VrPTxtE6GQns5cNMC6Vf4
        subject_person_id: p_Jb58ByYNBGYEJGGA54oxCa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fdrDygAbN3CrFaNSmtgiXY
          claim_id: c_7VrPTxtE6GQns5cNMC6Vf4
          source_id: s_JK93NJbgE8DQMhgH9vNHdV
          stance: supports
          locator: CBDB:69308
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69308）
          source: &a1
            id: s_JK93NJbgE8DQMhgH9vNHdV
            source_type: api_record
            title: 中国历代人物传记资料库：王庭蘭（CBDB 69308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69308&o=json
            external_identifier: CBDB:69308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.205Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_bVZtzSsxgXAsrGWche7TDR
        subject_person_id: p_Jb58ByYNBGYEJGGA54oxCa
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1859年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NKBoREMENtsxM5jWnAxnE7
          claim_id: c_bVZtzSsxgXAsrGWche7TDR
          source_id: s_JK93NJbgE8DQMhgH9vNHdV
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
        id: c_KGgt7mG57Ymt2CFeTtLhUD
        subject_person_id: p_Jb58ByYNBGYEJGGA54oxCa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ibRdPVkSnwed1trU2wMG4Y
          claim_id: c_KGgt7mG57Ymt2CFeTtLhUD
          source_id: s_JK93NJbgE8DQMhgH9vNHdV
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

# 王庭蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭蘭 | accepted |
| death.date | 1859年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庭蘭（CBDB 69308）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69308&o=json)
