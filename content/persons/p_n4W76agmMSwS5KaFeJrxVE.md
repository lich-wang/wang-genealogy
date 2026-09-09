---
schema: wang-person/v1
id: p_n4W76agmMSwS5KaFeJrxVE
status: active
merged_into: null
display_name: 王光世
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_koF9tq2rspH9geB55pEW4L
        subject_person_id: p_n4W76agmMSwS5KaFeJrxVE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光世
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iJ3CS2Whvfr73veu9bgR3g
          claim_id: c_koF9tq2rspH9geB55pEW4L
          source_id: s_AGpC6GxNQeVXsbX4RUjBA9
          stance: supports
          locator: CBDB:297377
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297377）
          source: &a1
            id: s_AGpC6GxNQeVXsbX4RUjBA9
            source_type: api_record
            title: 中国历代人物传记资料库：王光世（CBDB 297377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297377&o=json
            external_identifier: CBDB:297377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.571Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_erqEKzAL7xk4zk7MG31odp
        subject_person_id: p_n4W76agmMSwS5KaFeJrxVE
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
        - id: cs_DPkrk1g9DW5yv9MHtgAku5
          claim_id: c_erqEKzAL7xk4zk7MG31odp
          source_id: s_AGpC6GxNQeVXsbX4RUjBA9
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

# 王光世

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光世 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光世（CBDB 297377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297377&o=json)
