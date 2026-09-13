---
schema: wang-person/v1
id: p_9oC1DE1MzNZdp2bcQnDKHa
status: active
merged_into: null
display_name: 王可榮
cbdb_id: 101123
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aPH5Q2usiCxRZiS2h8yd7X
        subject_person_id: p_9oC1DE1MzNZdp2bcQnDKHa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可榮，史料所见人物。本项目依据《中国历代人物传记资料库：王可榮（CBDB 101123）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_4OFvupgb708W5W8ZsuEUaw
          claim_id: c_aPH5Q2usiCxRZiS2h8yd7X
          source_id: s_5zbrYg2B7L2yx3zuXy7ECL
          stance: supports
          locator: CBDB:101123
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_5zbrYg2B7L2yx3zuXy7ECL
            source_type: api_record
            title: 中国历代人物传记资料库：王可榮（CBDB 101123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101123&o=json
            external_identifier: CBDB:101123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:50.362Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QbSq5SwYCjvu3v6F9R4nMn
        subject_person_id: p_9oC1DE1MzNZdp2bcQnDKHa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hqh9imTJnfr9G4z2Fuks8v
          claim_id: c_QbSq5SwYCjvu3v6F9R4nMn
          source_id: s_5zbrYg2B7L2yx3zuXy7ECL
          stance: supports
          locator: CBDB:101123
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1701-1800）｜历史性依据：CBDB 朝代 = 元
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

# 王可榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王可榮，史料所见人物。本项目依据《中国历代人物传记资料库：王可榮（CBDB 101123）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王可榮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王可榮（CBDB 101123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101123&o=json)
