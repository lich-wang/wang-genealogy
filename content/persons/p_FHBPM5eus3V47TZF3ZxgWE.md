---
schema: wang-person/v1
id: p_FHBPM5eus3V47TZF3ZxgWE
status: active
merged_into: null
display_name: 王之鼎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NRHDWf3A8CtNZbywC6TW5n
        subject_person_id: p_FHBPM5eus3V47TZF3ZxgWE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BC4pFFmV1XG9VtR2KFi4PQ
          claim_id: c_NRHDWf3A8CtNZbywC6TW5n
          source_id: s_eAmaW9fp7PJLpTo8siThsP
          stance: supports
          locator: CBDB:472493
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（472493）
          source: &a1
            id: s_eAmaW9fp7PJLpTo8siThsP
            source_type: api_record
            title: 中国历代人物传记资料库：王之鼎（CBDB 472493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472493&o=json
            external_identifier: CBDB:472493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nGNs1o2nYTKT8vmcxgJ1f6
        subject_person_id: p_FHBPM5eus3V47TZF3ZxgWE
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
        - id: cs_jKXc8Wjv7G92HWhuS47g8f
          claim_id: c_nGNs1o2nYTKT8vmcxgJ1f6
          source_id: s_eAmaW9fp7PJLpTo8siThsP
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

# 王之鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之鼎 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之鼎（CBDB 472493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472493&o=json)
