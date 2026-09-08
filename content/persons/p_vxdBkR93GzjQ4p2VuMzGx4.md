---
schema: wang-person/v1
id: p_vxdBkR93GzjQ4p2VuMzGx4
status: active
merged_into: null
display_name: 林劍言
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jo-wTbR_6H-zdd0uUL_z2M
        subject_person_id: p_vxdBkR93GzjQ4p2VuMzGx4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 林劍言，史料所见人物。本项目依据《林劍言》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k0BUgNo15musun9oHDJbjM
          claim_id: c_Jo-wTbR_6H-zdd0uUL_z2M
          source_id: s_U95xyDfa75KWHEnVEX2P5P
          stance: supports
          locator: Q98066599
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_U95xyDfa75KWHEnVEX2P5P
            source_type: api_record
            title: 维基数据：林劍言（Q98066599）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q98066599
            external_identifier: Q98066599
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:11.128Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1x3bEEwtFGxo7j9Ry2oYd8
        subject_person_id: p_vxdBkR93GzjQ4p2VuMzGx4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 林劍言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UmeDqmBwvcFm2S3dTPJto5
          claim_id: c_1x3bEEwtFGxo7j9Ry2oYd8
          source_id: s_U95xyDfa75KWHEnVEX2P5P
          stance: supports
          locator: Q98066599
          quotation: null
          interpretation_note: null
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
        id: c_yV6qP9sLrPgoHgLDgV4hmW
        subject_person_id: p_vS1NSBq3ZTKMGBPQAqMJaX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_vxdBkR93GzjQ4p2VuMzGx4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x4jPG77gAv8KkX4zmd8Phz
          claim_id: c_yV6qP9sLrPgoHgLDgV4hmW
          source_id: s_EcgMZb9HcvSGSZBehn2MJ3
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_EcgMZb9HcvSGSZBehn2MJ3
            source_type: api_record
            title: 维基数据：王孝緗（Q98066569）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q98066569
            external_identifier: Q98066569
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:15.904Z
            metadata_json: null
        - id: cs_Y9PBeBRBnznKkSN6Hp6KCB
          claim_id: c_yV6qP9sLrPgoHgLDgV4hmW
          source_id: s_U95xyDfa75KWHEnVEX2P5P
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_vS1NSBq3ZTKMGBPQAqMJaX
        status: active
        display_name: 王孝緗
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 林劍言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 林劍言，史料所见人物。本项目依据《林劍言》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 林劍言 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_vS1NSBq3ZTKMGBPQAqMJaX | 王孝緗 | accepted |

## 外部来源

- [维基数据：林劍言（Q98066599）](https://www.wikidata.org/wiki/Q98066599)
- [维基数据：王孝緗（Q98066569）](https://www.wikidata.org/wiki/Q98066569)
