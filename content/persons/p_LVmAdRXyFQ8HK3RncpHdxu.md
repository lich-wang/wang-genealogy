---
schema: wang-person/v1
id: p_LVmAdRXyFQ8HK3RncpHdxu
status: active
merged_into: null
display_name: 王守忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3NjW8P3kWiHFN6F9iGLJF1
        subject_person_id: p_LVmAdRXyFQ8HK3RncpHdxu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iNLgrQUQRXbQzXeSSJYDHs
          claim_id: c_3NjW8P3kWiHFN6F9iGLJF1
          source_id: s_dLmx8wDSNwM1z8PrmkomiW
          stance: supports
          locator: CBDB:101162
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101162）
          source: &a1
            id: s_dLmx8wDSNwM1z8PrmkomiW
            source_type: api_record
            title: 中国历代人物传记资料库：王守忠（CBDB 101162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101162&o=json
            external_identifier: CBDB:101162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.712Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4DrfptQzhdZH9t5P4JzmGe
        subject_person_id: p_LVmAdRXyFQ8HK3RncpHdxu
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
        - id: cs_JvTBbez8h9MnLeBJUz7eJF
          claim_id: c_4DrfptQzhdZH9t5P4JzmGe
          source_id: s_dLmx8wDSNwM1z8PrmkomiW
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

# 王守忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守忠 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守忠（CBDB 101162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101162&o=json)
