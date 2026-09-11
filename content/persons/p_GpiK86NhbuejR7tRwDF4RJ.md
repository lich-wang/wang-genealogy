---
schema: wang-person/v1
id: p_GpiK86NhbuejR7tRwDF4RJ
status: active
merged_into: null
display_name: 王天麟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1BKvE74N8kkqYWn8EUcQ4v
        subject_person_id: p_GpiK86NhbuejR7tRwDF4RJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3Q8oDKPvVZYfUJC9hu4CcQ
          claim_id: c_1BKvE74N8kkqYWn8EUcQ4v
          source_id: s_7KH39tUhBpWUA34HNMrpTV
          stance: supports
          locator: CBDB:276001
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276001）
          source: &a1
            id: s_7KH39tUhBpWUA34HNMrpTV
            source_type: api_record
            title: 中国历代人物传记资料库：王天麟（CBDB 276001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276001&o=json
            external_identifier: CBDB:276001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.934Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_37SGkL4G71LqH2Ngu5G46i
        subject_person_id: p_GpiK86NhbuejR7tRwDF4RJ
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
        - id: cs_R8TdLz6PSJ3ZJdFU9Q93ZW
          claim_id: c_37SGkL4G71LqH2Ngu5G46i
          source_id: s_7KH39tUhBpWUA34HNMrpTV
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
  descendants:
    - claim:
        id: c_If2XTeEFYsPxeaoQKtMcWz
        subject_person_id: p_GpiK86NhbuejR7tRwDF4RJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HPi9LMn5Kw5811QG1EqGfq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gnhqriVS-cLKKUlzytIBvp
          claim_id: c_If2XTeEFYsPxeaoQKtMcWz
          source_id: s_7KH39tUhBpWUA34HNMrpTV
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第二十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HPi9LMn5Kw5811QG1EqGfq
        status: active
        display_name: 王世文
        merged_into_person_id: null
  other: []
---

# 王天麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天麟 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_HPi9LMn5Kw5811QG1EqGfq | 王世文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王天麟（CBDB 276001）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276001&o=json)
