---
schema: wang-person/v1
id: p_pqEsDpo2xMjNvKYaYrfKbM
status: active
merged_into: null
display_name: 王祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PzopWDF7LxNtCsp2TpPJnr
        subject_person_id: p_pqEsDpo2xMjNvKYaYrfKbM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KAcrtD1cGvhmj26K6ALADY
          claim_id: c_PzopWDF7LxNtCsp2TpPJnr
          source_id: s_MQtJqFF65vQTs3E9MPikJH
          stance: supports
          locator: CBDB:462623
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（462623）
          source: &a1
            id: s_MQtJqFF65vQTs3E9MPikJH
            source_type: api_record
            title: 中国历代人物传记资料库：王祥（CBDB 462623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462623&o=json
            external_identifier: CBDB:462623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.858Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qm7418HMshc7M62RJFCQYa
        subject_person_id: p_pqEsDpo2xMjNvKYaYrfKbM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为三國魏人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w6Ab4sB14iZmCtxrCf7h6L
          claim_id: c_Qm7418HMshc7M62RJFCQYa
          source_id: s_MQtJqFF65vQTs3E9MPikJH
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

# 王祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祥 | accepted |
| bio.summary | CBDB 记载为三國魏人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祥（CBDB 462623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462623&o=json)
