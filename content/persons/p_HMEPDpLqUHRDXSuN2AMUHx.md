---
schema: wang-person/v1
id: p_HMEPDpLqUHRDXSuN2AMUHx
status: active
merged_into: null
display_name: 王桂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ybfKq1FdApV7nXfje2USdK
        subject_person_id: p_HMEPDpLqUHRDXSuN2AMUHx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tQ94FC87vRQauLKmd5KoWE
          claim_id: c_ybfKq1FdApV7nXfje2USdK
          source_id: s_Ey2nSk2VjF8uvBRid2RX34
          stance: supports
          locator: CBDB:100762
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100762）
          source: &a1
            id: s_Ey2nSk2VjF8uvBRid2RX34
            source_type: api_record
            title: 中国历代人物传记资料库：王桂（CBDB 100762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100762&o=json
            external_identifier: CBDB:100762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.424Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5efXcQ2JEKRR57YKWq94yp
        subject_person_id: p_HMEPDpLqUHRDXSuN2AMUHx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bH4zVGMWnSzonF4YzkLU7G
          claim_id: c_5efXcQ2JEKRR57YKWq94yp
          source_id: s_Ey2nSk2VjF8uvBRid2RX34
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

# 王桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桂 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王桂（CBDB 100762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100762&o=json)
