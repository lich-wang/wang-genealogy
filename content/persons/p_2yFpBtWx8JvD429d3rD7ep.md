---
schema: wang-person/v1
id: p_2yFpBtWx8JvD429d3rD7ep
status: active
merged_into: null
display_name: 王永䨘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2WGw73WP2L4M2HitMC24Yw
        subject_person_id: p_2yFpBtWx8JvD429d3rD7ep
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永䨘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WPjj2HaihcCB2sgMNdRYKo
          claim_id: c_2WGw73WP2L4M2HitMC24Yw
          source_id: s_f6ZrNTxRHHwjfBrqNPsJNw
          stance: supports
          locator: CBDB:638968
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638968）
          source: &a1
            id: s_f6ZrNTxRHHwjfBrqNPsJNw
            source_type: api_record
            title: 中国历代人物传记资料库：王永䨘（CBDB 638968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638968&o=json
            external_identifier: CBDB:638968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.800Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gZ4N8Np9PFR65NLzom7iDW
        subject_person_id: p_2yFpBtWx8JvD429d3rD7ep
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
        - id: cs_yDtFgB36Gh1Mf1KDGyofVk
          claim_id: c_gZ4N8Np9PFR65NLzom7iDW
          source_id: s_f6ZrNTxRHHwjfBrqNPsJNw
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

# 王永䨘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永䨘 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永䨘（CBDB 638968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638968&o=json)
