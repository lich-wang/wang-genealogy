---
schema: wang-person/v1
id: p_3sa29C6pNo9GCVbCeTLtL3
status: active
merged_into: null
display_name: 王緫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zWdgxC1kd7MoF7HcL48JTR
        subject_person_id: p_3sa29C6pNo9GCVbCeTLtL3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sb2Pv7DE31wTEijyu1H5Ez
          claim_id: c_zWdgxC1kd7MoF7HcL48JTR
          source_id: s_XYGPoTdnFPAnViUJyDFtPU
          stance: supports
          locator: CBDB:475817
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（475817）
          source: &a1
            id: s_XYGPoTdnFPAnViUJyDFtPU
            source_type: api_record
            title: 中国历代人物传记资料库：王緫（CBDB 475817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475817&o=json
            external_identifier: CBDB:475817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XWfjH9BXutYaYRbREivyw2
        subject_person_id: p_3sa29C6pNo9GCVbCeTLtL3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DUtGhJTBRHyDv8UmkfXSPq
          claim_id: c_XWfjH9BXutYaYRbREivyw2
          source_id: s_XYGPoTdnFPAnViUJyDFtPU
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

# 王緫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王緫（CBDB 475817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=475817&o=json)
