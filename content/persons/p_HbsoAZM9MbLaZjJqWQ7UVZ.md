---
schema: wang-person/v1
id: p_HbsoAZM9MbLaZjJqWQ7UVZ
status: active
merged_into: null
display_name: 王一導
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KDVVGH1458Zvnp6L8C6g4K
        subject_person_id: p_HbsoAZM9MbLaZjJqWQ7UVZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一導
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s5iAx48aGV1mv668bsMcZs
          claim_id: c_KDVVGH1458Zvnp6L8C6g4K
          source_id: s_9rKgj1aWP9bPUDT3bNSAP7
          stance: supports
          locator: CBDB:466382
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（466382）
          source: &a1
            id: s_9rKgj1aWP9bPUDT3bNSAP7
            source_type: api_record
            title: 中国历代人物传记资料库：王一導（CBDB 466382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466382&o=json
            external_identifier: CBDB:466382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.961Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ssV6vnfBrtxS8ENpKaSGMM
        subject_person_id: p_HbsoAZM9MbLaZjJqWQ7UVZ
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
        - id: cs_XjGNYPLhnYLkWR38hH4RFm
          claim_id: c_ssV6vnfBrtxS8ENpKaSGMM
          source_id: s_9rKgj1aWP9bPUDT3bNSAP7
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

# 王一導

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一導 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一導（CBDB 466382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466382&o=json)
