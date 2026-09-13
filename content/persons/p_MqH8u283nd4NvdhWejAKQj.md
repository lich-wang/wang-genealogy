---
schema: wang-person/v1
id: p_MqH8u283nd4NvdhWejAKQj
status: active
merged_into: null
display_name: 王守鼎
cbdb_id: 526906
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_14PB5LnpHmuFWShcsEsD7d
        subject_person_id: p_MqH8u283nd4NvdhWejAKQj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守鼎，史料所见人物。本项目依据《中国历代人物传记资料库：王守鼎（CBDB 526906）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_-2UvEjTYfSz0hOubBaA5ES
          claim_id: c_14PB5LnpHmuFWShcsEsD7d
          source_id: s_gvVX2y6UaStyRLwKpTM9Qr
          stance: supports
          locator: CBDB:526906
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_gvVX2y6UaStyRLwKpTM9Qr
            source_type: api_record
            title: 中国历代人物传记资料库：王守鼎（CBDB 526906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526906&o=json
            external_identifier: CBDB:526906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:19.665Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7MMGB9KBFZwr4pJyu2jdVD
        subject_person_id: p_MqH8u283nd4NvdhWejAKQj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WmrKMkCKy1cc4xosBgZq66
          claim_id: c_7MMGB9KBFZwr4pJyu2jdVD
          source_id: s_gvVX2y6UaStyRLwKpTM9Qr
          stance: supports
          locator: CBDB:526906
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7201-7229）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_vj2ZTNMTcGD0DdMWOniFbJ
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MqH8u283nd4NvdhWejAKQj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YFkWwz21eCQPuabmroiY6S
          claim_id: c_vj2ZTNMTcGD0DdMWOniFbJ
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13086：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g2v8cqJ5RPSCgN3VLzp6tD
            source_type: api_record
            title: 中国历代人物传记资料库：王頌蔚（CBDB 69381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69381&o=json
            external_identifier: CBDB:69381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C76WEam8DrJz85GjQuBEXF
        status: active
        display_name: 王頌蔚
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王守鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王守鼎，史料所见人物。本项目依据《中国历代人物传记资料库：王守鼎（CBDB 526906）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王守鼎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_C76WEam8DrJz85GjQuBEXF | 王頌蔚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守鼎（CBDB 526906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526906&o=json)
- [中国历代人物传记资料库：王頌蔚（CBDB 69381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69381&o=json)
