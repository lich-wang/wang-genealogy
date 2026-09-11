---
schema: wang-person/v1
id: p_t8BiHr683cj8g6QH4F6miQ
status: active
merged_into: null
display_name: 王文奎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sNS9yvyfY1jZN5R5myJhEs
        subject_person_id: p_t8BiHr683cj8g6QH4F6miQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wMQRyBxvM1QwMtSkaUjWcp
          claim_id: c_sNS9yvyfY1jZN5R5myJhEs
          source_id: s_X5Pr96T6e8rfGmGJKBn7nt
          stance: supports
          locator: CBDB:325986
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（325986）
          source: &a1
            id: s_X5Pr96T6e8rfGmGJKBn7nt
            source_type: api_record
            title: 中国历代人物传记资料库：王文奎（CBDB 325986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325986&o=json
            external_identifier: CBDB:325986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.204Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_88LcCrRvqJ6HhiC8aQamsQ
        subject_person_id: p_t8BiHr683cj8g6QH4F6miQ
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
        - id: cs_L5GJHwocBHYH4xaPxSxHiV
          claim_id: c_88LcCrRvqJ6HhiC8aQamsQ
          source_id: s_X5Pr96T6e8rfGmGJKBn7nt
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
        id: c_GmWfv-btavP872YGNPnZrY
        subject_person_id: p_t8BiHr683cj8g6QH4F6miQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yJdXEyhNkYGEWdnouNB9Xu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_woiZqE0BHLpYt2ysODQ4ug
          claim_id: c_GmWfv-btavP872YGNPnZrY
          source_id: s_X5Pr96T6e8rfGmGJKBn7nt
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第二百名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yJdXEyhNkYGEWdnouNB9Xu
        status: active
        display_name: 王廷瞻
        merged_into_person_id: null
  other: []
---

# 王文奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文奎 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_yJdXEyhNkYGEWdnouNB9Xu | 王廷瞻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文奎（CBDB 325986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325986&o=json)
