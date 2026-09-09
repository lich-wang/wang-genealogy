---
schema: wang-person/v1
id: p_29mmmX5tPvvNn2sevuWuT7
status: active
merged_into: null
display_name: 王蘭台
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pdGjUwADeVv5Q5nNxCeirk
        subject_person_id: p_29mmmX5tPvvNn2sevuWuT7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭台
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9848eFFqKYk9Rc8ZrxFDqp
          claim_id: c_pdGjUwADeVv5Q5nNxCeirk
          source_id: s_MDgK8vNgdjiasLVoeQcgFD
          stance: supports
          locator: CBDB:640188
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640188）
          source: &a1
            id: s_MDgK8vNgdjiasLVoeQcgFD
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭台（CBDB 640188）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640188&o=json
            external_identifier: CBDB:640188
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.177Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xzG7LoZ2jjm3Enr3NiiP1Q
        subject_person_id: p_29mmmX5tPvvNn2sevuWuT7
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
        - id: cs_A78DPbKV7cwMg6ZZw16NiQ
          claim_id: c_xzG7LoZ2jjm3Enr3NiiP1Q
          source_id: s_MDgK8vNgdjiasLVoeQcgFD
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

# 王蘭台

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘭台 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘭台（CBDB 640188）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640188&o=json)
