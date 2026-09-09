---
schema: wang-person/v1
id: p_MfVeb7fgPLZUX4FfJniEs9
status: active
merged_into: null
display_name: 王錫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rKEXuwYrVHvD5KEBXiyR54
        subject_person_id: p_MfVeb7fgPLZUX4FfJniEs9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7ZonormDHw58Za2wKEkjBU
          claim_id: c_rKEXuwYrVHvD5KEBXiyR54
          source_id: s_gDVxGFCkxFcG1JYveorKZf
          stance: supports
          locator: CBDB:292741
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292741）
          source: &a1
            id: s_gDVxGFCkxFcG1JYveorKZf
            source_type: api_record
            title: 中国历代人物传记资料库：王錫（CBDB 292741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292741&o=json
            external_identifier: CBDB:292741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.415Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U4ELjvP3Nz2qJ7HY8ekeHy
        subject_person_id: p_MfVeb7fgPLZUX4FfJniEs9
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
        - id: cs_Xx6QPAhNvJVh483mqWrm9x
          claim_id: c_U4ELjvP3Nz2qJ7HY8ekeHy
          source_id: s_gDVxGFCkxFcG1JYveorKZf
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

# 王錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫（CBDB 292741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292741&o=json)
