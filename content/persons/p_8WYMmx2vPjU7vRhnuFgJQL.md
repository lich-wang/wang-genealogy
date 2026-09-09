---
schema: wang-person/v1
id: p_8WYMmx2vPjU7vRhnuFgJQL
status: active
merged_into: null
display_name: 王存忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eK1FUU8J9fQqC47fh1Es6N
        subject_person_id: p_8WYMmx2vPjU7vRhnuFgJQL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VkK6GJoSLWmTBKDaYTB7sw
          claim_id: c_eK1FUU8J9fQqC47fh1Es6N
          source_id: s_sPgNrYPi5E6jwGNV1p4yz2
          stance: supports
          locator: CBDB:637001
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637001）
          source: &a1
            id: s_sPgNrYPi5E6jwGNV1p4yz2
            source_type: api_record
            title: 中国历代人物传记资料库：王存忠（CBDB 637001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637001&o=json
            external_identifier: CBDB:637001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.309Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j2hHLMC4BWQtmx74chrfwE
        subject_person_id: p_8WYMmx2vPjU7vRhnuFgJQL
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
        - id: cs_rzrWT34VU9wQ6SYA198M8g
          claim_id: c_j2hHLMC4BWQtmx74chrfwE
          source_id: s_sPgNrYPi5E6jwGNV1p4yz2
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

# 王存忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王存忠 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王存忠（CBDB 637001）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637001&o=json)
