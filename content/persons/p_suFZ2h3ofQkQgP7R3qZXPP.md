---
schema: wang-person/v1
id: p_suFZ2h3ofQkQgP7R3qZXPP
status: active
merged_into: null
display_name: 王熙經
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s882RdpPiF5eRp7cx2bXmB
        subject_person_id: p_suFZ2h3ofQkQgP7R3qZXPP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熙經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ULLYyDJreUzKHxREzCfFrM
          claim_id: c_s882RdpPiF5eRp7cx2bXmB
          source_id: s_Vbb74a2YDGd57QB2qqvYSJ
          stance: supports
          locator: CBDB:639314
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639314）
          source: &a1
            id: s_Vbb74a2YDGd57QB2qqvYSJ
            source_type: api_record
            title: 中国历代人物传记资料库：王熙經（CBDB 639314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639314&o=json
            external_identifier: CBDB:639314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.904Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PTM1jd4x9EacpEEf7ib1EU
        subject_person_id: p_suFZ2h3ofQkQgP7R3qZXPP
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
        - id: cs_Z96X1XndLYTdsc15d8VJUm
          claim_id: c_PTM1jd4x9EacpEEf7ib1EU
          source_id: s_Vbb74a2YDGd57QB2qqvYSJ
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

# 王熙經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王熙經 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王熙經（CBDB 639314）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639314&o=json)
