---
schema: wang-person/v1
id: p_9ZKH9wDc4Q5akZCDGKVRPU
status: active
merged_into: null
display_name: 王守明
cbdb_id: 526915
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n16WPrJA228PjuLcG9snM1
        subject_person_id: p_9ZKH9wDc4Q5akZCDGKVRPU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守明，史料所见人物。本项目依据《中国历代人物传记资料库：王守明（CBDB 526915）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_W8Hdl3Gc0VQLw5DSrhJQ0Q
          claim_id: c_n16WPrJA228PjuLcG9snM1
          source_id: s_QFN9TN22YouNH7HfyBKmoA
          stance: supports
          locator: CBDB:526915
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_QFN9TN22YouNH7HfyBKmoA
            source_type: api_record
            title: 中国历代人物传记资料库：王守明（CBDB 526915）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526915&o=json
            external_identifier: CBDB:526915
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:19.665Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_op4RH8m33E3DPvcYE9Ccsi
        subject_person_id: p_9ZKH9wDc4Q5akZCDGKVRPU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_uyxWZSaxqLEAEmXf5y76j5
          claim_id: c_op4RH8m33E3DPvcYE9Ccsi
          source_id: s_QFN9TN22YouNH7HfyBKmoA
          stance: supports
          locator: CBDB:526915
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7201-7229）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OelR7HupjEQqSzavxGbZJ_
        subject_person_id: p_9ZKH9wDc4Q5akZCDGKVRPU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Fk69JFkThW2Z1eerxMQcHu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R4FuUpJa4hqHnCFwhDFqtm
          claim_id: c_OelR7HupjEQqSzavxGbZJ_
          source_id: s_QFN9TN22YouNH7HfyBKmoA
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13093：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QFN9TN22YouNH7HfyBKmoA
            source_type: api_record
            title: 中国历代人物传记资料库：王守明（CBDB 526915）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526915&o=json
            external_identifier: CBDB:526915
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:19.665Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Fk69JFkThW2Z1eerxMQcHu
        status: active
        display_name: 王景祚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王守明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王守明，史料所见人物。本项目依据《中国历代人物传记资料库：王守明（CBDB 526915）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王守明 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Fk69JFkThW2Z1eerxMQcHu | 王景祚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守明（CBDB 526915）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526915&o=json)
