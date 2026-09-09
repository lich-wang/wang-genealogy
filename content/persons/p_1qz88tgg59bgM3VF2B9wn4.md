---
schema: wang-person/v1
id: p_1qz88tgg59bgM3VF2B9wn4
status: active
merged_into: null
display_name: 王教
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vqAQ7nK45rGGGkCjvji5E3
        subject_person_id: p_1qz88tgg59bgM3VF2B9wn4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王教
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VrTBmkfFVQ6zAQSr2YpR7Y
          claim_id: c_vqAQ7nK45rGGGkCjvji5E3
          source_id: s_4eJimy1xfoKPny1RiTcjqo
          stance: supports
          locator: CBDB:503281
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（503281）
          source: &a1
            id: s_4eJimy1xfoKPny1RiTcjqo
            source_type: api_record
            title: 中国历代人物传记资料库：王教（CBDB 503281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503281&o=json
            external_identifier: CBDB:503281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VkBy86x9bnJBJhDfHUzHv2
        subject_person_id: p_1qz88tgg59bgM3VF2B9wn4
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
        - id: cs_aC97HxdBcEJ8M3P6GA9PFN
          claim_id: c_VkBy86x9bnJBJhDfHUzHv2
          source_id: s_4eJimy1xfoKPny1RiTcjqo
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

# 王教

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王教 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王教（CBDB 503281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503281&o=json)
