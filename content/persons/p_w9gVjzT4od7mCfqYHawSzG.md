---
schema: wang-person/v1
id: p_w9gVjzT4od7mCfqYHawSzG
status: active
merged_into: null
display_name: 王玉汝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pveGRsRQMsNUkcNModN1dS
        subject_person_id: p_w9gVjzT4od7mCfqYHawSzG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉汝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e55xcLQBycJ9bz2PTbHboL
          claim_id: c_pveGRsRQMsNUkcNModN1dS
          source_id: s_gdd54vkAs7YWYZNbNt1kYm
          stance: supports
          locator: CBDB:232795
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（232795）
          source: &a1
            id: s_gdd54vkAs7YWYZNbNt1kYm
            source_type: api_record
            title: 中国历代人物传记资料库：王玉汝（CBDB 232795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232795&o=json
            external_identifier: CBDB:232795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.710Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gKPJFwB6Y5epGFKay3Sr13
        subject_person_id: p_w9gVjzT4od7mCfqYHawSzG
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
        - id: cs_S9f8B5gyV9tQZNyi6AHMxF
          claim_id: c_gKPJFwB6Y5epGFKay3Sr13
          source_id: s_gdd54vkAs7YWYZNbNt1kYm
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

# 王玉汝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉汝 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玉汝（CBDB 232795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232795&o=json)
