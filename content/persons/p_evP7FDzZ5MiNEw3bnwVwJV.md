---
schema: wang-person/v1
id: p_evP7FDzZ5MiNEw3bnwVwJV
status: active
merged_into: null
display_name: 王宮桂
cbdb_id: 100211
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cSH1i1Ncve45osAiAv3Yef
        subject_person_id: p_evP7FDzZ5MiNEw3bnwVwJV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宮桂，史料所见人物。本项目依据《中国历代人物传记资料库：王宮桂（CBDB 100211）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_eoZSLhWnHH6inua9xHU5k2
          claim_id: c_cSH1i1Ncve45osAiAv3Yef
          source_id: s_A5HZkNZHDJMPJ6QMgNLXjw
          stance: supports
          locator: CBDB:100211
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_A5HZkNZHDJMPJ6QMgNLXjw
            source_type: api_record
            title: 中国历代人物传记资料库：王宮桂（CBDB 100211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100211&o=json
            external_identifier: CBDB:100211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:49.564Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_S5XFo6VUdBji8tTmc1KnPY
        subject_person_id: p_evP7FDzZ5MiNEw3bnwVwJV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宮桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BMexKRVZ9784GAb8dE6vzt
          claim_id: c_S5XFo6VUdBji8tTmc1KnPY
          source_id: s_A5HZkNZHDJMPJ6QMgNLXjw
          stance: supports
          locator: CBDB:100211
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1601-1700）｜历史性依据：CBDB 朝代 = 清
          source: *a1
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
          source:
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
      object_person:
        id: p_J4DDnMRNESMQgbM4wYj1MY
        status: active
        display_name: 姚素珪
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王宮桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宮桂，史料所见人物。本项目依据《中国历代人物传记资料库：王宮桂（CBDB 100211）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王宮桂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_J4DDnMRNESMQgbM4wYj1MY | 姚素珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宮桂（CBDB 100211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100211&o=json)
- [中国历代人物传记资料库：姚素珪（CBDB 100210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100210&o=json)
