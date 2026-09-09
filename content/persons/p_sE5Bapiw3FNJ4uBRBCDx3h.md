---
schema: wang-person/v1
id: p_sE5Bapiw3FNJ4uBRBCDx3h
status: active
merged_into: null
display_name: 王祖光
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pTNrj7MXwNi5ZhWSEnZ9P1
        subject_person_id: p_sE5Bapiw3FNJ4uBRBCDx3h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bgr4M6XwDH13suSMvuxoDo
          claim_id: c_pTNrj7MXwNi5ZhWSEnZ9P1
          source_id: s_H6vEkvSX7jmyrFKD2KXRBb
          stance: supports
          locator: CBDB:68583
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68583）
          source: &a1
            id: s_H6vEkvSX7jmyrFKD2KXRBb
            source_type: api_record
            title: 中国历代人物传记资料库：王祖光（CBDB 68583）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68583&o=json
            external_identifier: CBDB:68583
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.090Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oCjhYo1mBfG22e8AyuUDjp
        subject_person_id: p_sE5Bapiw3FNJ4uBRBCDx3h
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1847年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tJX6nbCpDfWoq1Kr6eeM7g
          claim_id: c_oCjhYo1mBfG22e8AyuUDjp
          source_id: s_H6vEkvSX7jmyrFKD2KXRBb
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
        id: c_fQwmkFrTva4XDWQ9tUXxee
        subject_person_id: p_sE5Bapiw3FNJ4uBRBCDx3h
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
        - id: cs_MySdVz5XWUmTphxm18wwx7
          claim_id: c_fQwmkFrTva4XDWQ9tUXxee
          source_id: s_H6vEkvSX7jmyrFKD2KXRBb
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

# 王祖光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祖光 | accepted |
| birth.date | 1847年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祖光（CBDB 68583）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68583&o=json)
