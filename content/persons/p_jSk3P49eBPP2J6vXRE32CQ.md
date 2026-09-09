---
schema: wang-person/v1
id: p_jSk3P49eBPP2J6vXRE32CQ
status: active
merged_into: null
display_name: 王寶琛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PYhDjLp8Wuf7hv3djKTw8Q
        subject_person_id: p_jSk3P49eBPP2J6vXRE32CQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶琛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vLSa2uEYmZMoFGUi2nBFR2
          claim_id: c_PYhDjLp8Wuf7hv3djKTw8Q
          source_id: s_9Mum8RZnZ3f2EtpQDBHNGR
          stance: supports
          locator: CBDB:637275
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637275）
          source: &a1
            id: s_9Mum8RZnZ3f2EtpQDBHNGR
            source_type: api_record
            title: 中国历代人物传记资料库：王寶琛（CBDB 637275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637275&o=json
            external_identifier: CBDB:637275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.266Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V636mKUpmBvVLjNXEuz1ni
        subject_person_id: p_jSk3P49eBPP2J6vXRE32CQ
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
        - id: cs_yz86SKwwMeN5wY6dzSQn79
          claim_id: c_V636mKUpmBvVLjNXEuz1ni
          source_id: s_9Mum8RZnZ3f2EtpQDBHNGR
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

# 王寶琛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寶琛 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寶琛（CBDB 637275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637275&o=json)
