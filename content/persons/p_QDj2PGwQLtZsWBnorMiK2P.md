---
schema: wang-person/v1
id: p_QDj2PGwQLtZsWBnorMiK2P
status: active
merged_into: null
display_name: 王攽
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eirRa4Vq5mBDedI4fsfe-w
        subject_person_id: p_QDj2PGwQLtZsWBnorMiK2P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王攽，史料所见人物。本项目依据《和田地区纪委监委：王夫之的齐家之教》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IpB_tpfGx-2Fw6zKfB9RxT
          claim_id: c_eirRa4Vq5mBDedI4fsfe-w
          source_id: s_JtnErgqpF52vB1FRM8Siqq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_JtnErgqpF52vB1FRM8Siqq
            source_type: website
            title: 和田地区纪委监委：王夫之的齐家之教
            creator: 刘绪义
            publisher: 和田地区纪委监委
            published_at_text: null
            canonical_url: https://www.htlz.gov.cn/liansjj40/269.jhtml
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:55.244Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aFHDXFohohvg28D8qJ3wxB
        subject_person_id: p_QDj2PGwQLtZsWBnorMiK2P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王攽
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GYbgwEXdHjZccxJRJ2TQCJ
          claim_id: c_aFHDXFohohvg28D8qJ3wxB
          source_id: s_JtnErgqpF52vB1FRM8Siqq
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yE7KNAzQY3qfaD7ECzoQ6e
        subject_person_id: p_vLvDV5P2y7vDwkpQ8mjYAY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_QDj2PGwQLtZsWBnorMiK2P
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9hDXMNeB19E5ZCMgmt5ViC
          claim_id: c_yE7KNAzQY3qfaD7ECzoQ6e
          source_id: s_JtnErgqpF52vB1FRM8Siqq
          stance: supports
          locator: 志是成人之基
          quotation: 其长子王攽，著有《诗经释略》。
          interpretation_note: null
          source:
            id: s_JtnErgqpF52vB1FRM8Siqq
            source_type: website
            title: 和田地区纪委监委：王夫之的齐家之教
            creator: 刘绪义
            publisher: 和田地区纪委监委
            published_at_text: null
            canonical_url: https://www.htlz.gov.cn/liansjj40/269.jhtml
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:55.244Z
            metadata_json: null
      object_person:
        id: p_vLvDV5P2y7vDwkpQ8mjYAY
        status: active
        display_name: 王夫之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王攽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王攽，史料所见人物。本项目依据《和田地区纪委监委：王夫之的齐家之教》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王攽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vLvDV5P2y7vDwkpQ8mjYAY | 王夫之 | accepted |

## 外部来源

- [和田地区纪委监委：王夫之的齐家之教](https://www.htlz.gov.cn/liansjj40/269.jhtml)
