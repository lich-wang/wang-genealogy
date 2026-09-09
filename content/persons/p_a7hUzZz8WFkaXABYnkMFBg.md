---
schema: wang-person/v1
id: p_a7hUzZz8WFkaXABYnkMFBg
status: active
merged_into: null
display_name: 王保光
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g829VvRGABrgzgZC381Tjv
        subject_person_id: p_a7hUzZz8WFkaXABYnkMFBg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王保光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6GE44i4g2QA4zUPzqKqqKi
          claim_id: c_g829VvRGABrgzgZC381Tjv
          source_id: s_sE2FH38Qzc19JPMi4D6MXY
          stance: supports
          locator: CBDB:636045
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636045）
          source: &a1
            id: s_sE2FH38Qzc19JPMi4D6MXY
            source_type: api_record
            title: 中国历代人物传记资料库：王保光（CBDB 636045）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636045&o=json
            external_identifier: CBDB:636045
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.868Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PpBUebAD5Pwu884j1NFGmC
        subject_person_id: p_a7hUzZz8WFkaXABYnkMFBg
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
        - id: cs_QjJcjY6UUD4jrKqtrtgE6E
          claim_id: c_PpBUebAD5Pwu884j1NFGmC
          source_id: s_sE2FH38Qzc19JPMi4D6MXY
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

# 王保光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王保光 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王保光（CBDB 636045）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636045&o=json)
