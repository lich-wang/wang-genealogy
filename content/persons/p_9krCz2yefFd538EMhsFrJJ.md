---
schema: wang-person/v1
id: p_9krCz2yefFd538EMhsFrJJ
status: active
merged_into: null
display_name: 王良翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Tp6KFT582gwg74bwWizbxu
        subject_person_id: p_9krCz2yefFd538EMhsFrJJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EuBqo39rsgKuddGkGmMD8L
          claim_id: c_Tp6KFT582gwg74bwWizbxu
          source_id: s_9zoDq1SDQYFoQgU6tF3TMy
          stance: supports
          locator: CBDB:23103
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23103）
          source: &a1
            id: s_9zoDq1SDQYFoQgU6tF3TMy
            source_type: api_record
            title: 中国历代人物传记资料库：王良翰（CBDB 23103）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23103&o=json
            external_identifier: CBDB:23103
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.868Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FoHwSbpFjXBa6K9ak7tR1B
        subject_person_id: p_9krCz2yefFd538EMhsFrJJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dAttPJQoE8KvngGMNKVbER
          claim_id: c_FoHwSbpFjXBa6K9ak7tR1B
          source_id: s_9zoDq1SDQYFoQgU6tF3TMy
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

# 王良翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良翰 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王良翰（CBDB 23103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23103&o=json)
