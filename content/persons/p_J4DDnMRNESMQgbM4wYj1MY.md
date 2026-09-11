---
schema: wang-person/v1
id: p_J4DDnMRNESMQgbM4wYj1MY
status: active
merged_into: null
display_name: 姚素珪
revision: 1
cbdb_id: 100210
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YyOqGHidFR-RhTJqEHoMT6
        subject_person_id: p_J4DDnMRNESMQgbM4wYj1MY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 姚素珪
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uG5ywR2c7KtmpIWP2z8h3l
          claim_id: c_YyOqGHidFR-RhTJqEHoMT6
          source_id: s_OdFpIyDj3DpWF76jtFd0Ap
          stance: supports
          locator: CBDB:100210
          quotation: null
          interpretation_note: CBDB 明确记录的王宮桂配偶
          source: &a1
            id: s_OdFpIyDj3DpWF76jtFd0Ap
            source_type: api_record
            title: 中国历代人物传记资料库：姚素珪（CBDB 100210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100210&o=json
            external_identifier: CBDB:100210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_yGP8aM52bf4M3re5d6blBX
        subject_person_id: p_evP7FDzZ5MiNEw3bnwVwJV
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_J4DDnMRNESMQgbM4wYj1MY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i2B_ZHal2C9P9TVE38EP_b
          claim_id: c_yGP8aM52bf4M3re5d6blBX
          source_id: s_OdFpIyDj3DpWF76jtFd0Ap
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1870, HuWenKai #419：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_evP7FDzZ5MiNEw3bnwVwJV
        status: active
        display_name: 王宮桂
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 姚素珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 姚素珪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_evP7FDzZ5MiNEw3bnwVwJV | 王宮桂 | accepted |

## 外部来源

- [中国历代人物传记资料库：姚素珪（CBDB 100210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100210&o=json)
