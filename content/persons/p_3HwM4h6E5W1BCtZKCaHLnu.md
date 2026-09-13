---
schema: wang-person/v1
id: p_3HwM4h6E5W1BCtZKCaHLnu
status: active
merged_into: null
display_name: 王守兌
cbdb_id: 526902
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kEJmApLfYQa55QwfxRtVuB
        subject_person_id: p_3HwM4h6E5W1BCtZKCaHLnu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守兌，史料所见人物。本项目依据《中国历代人物传记资料库：王守兌（CBDB 526902）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_wdfaU_lZUDh9MOtHnPLSbZ
          claim_id: c_kEJmApLfYQa55QwfxRtVuB
          source_id: s_PhGBbTPNTn5zG47qUvpA47
          stance: supports
          locator: CBDB:526902
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_PhGBbTPNTn5zG47qUvpA47
            source_type: api_record
            title: 中国历代人物传记资料库：王守兌（CBDB 526902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526902&o=json
            external_identifier: CBDB:526902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:19.665Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yCATfiPxujQhrCr6XEodaE
        subject_person_id: p_3HwM4h6E5W1BCtZKCaHLnu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守兌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Uh7JLXHa6kFU2XZKMktTuT
          claim_id: c_yCATfiPxujQhrCr6XEodaE
          source_id: s_PhGBbTPNTn5zG47qUvpA47
          stance: supports
          locator: CBDB:526902
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
        id: c_cIF2qKk--OvH3mTjGPsWZj
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3HwM4h6E5W1BCtZKCaHLnu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AlYkdpUaCtb4x-8vubxASU
          claim_id: c_cIF2qKk--OvH3mTjGPsWZj
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

# 王守兌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王守兌，史料所见人物。本项目依据《中国历代人物传记资料库：王守兌（CBDB 526902）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王守兌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_C76WEam8DrJz85GjQuBEXF | 王頌蔚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守兌（CBDB 526902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526902&o=json)
- [中国历代人物传记资料库：王頌蔚（CBDB 69381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69381&o=json)
