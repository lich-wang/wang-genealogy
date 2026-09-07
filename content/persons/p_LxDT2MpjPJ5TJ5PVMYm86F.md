---
schema: wang-person/v1
id: p_LxDT2MpjPJ5TJ5PVMYm86F
status: active
merged_into: null
display_name: 王弼
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_osQJ3MTqpZCv8kDORGAj9m
        subject_person_id: p_LxDT2MpjPJ5TJ5PVMYm86F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼（卒于493年），史料所见人物。本项目依据《中文维基文库：南齊書/卷49》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2_dBEpYxGow_HS-NZWyp-F
          claim_id: c_osQJ3MTqpZCv8kDORGAj9m
          source_id: s_gcmV2ppkrnuLchvJWyEmoD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_gcmV2ppkrnuLchvJWyEmoD
            source_type: book
            title: 中文维基文库：南齊書/卷49
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E5%8D%97%E9%BD%8A%E6%9B%B8/%E5%8D%B749
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-31T16:03:21.429Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_THbBp4njH8ax5VgVYx1jPh
        subject_person_id: p_LxDT2MpjPJ5TJ5PVMYm86F
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 493年
            calendar_note: 南齐永明十一年与父王奂同案伏诛
            earliest: 0493-01-01
            latest: 0493-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_537Z4zq99K7sgN6kEsxXmC
          claim_id: c_THbBp4njH8ax5VgVYx1jPh
          source_id: s_gcmV2ppkrnuLchvJWyEmoD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1aETkkhUAXr3RshuxH43GA
        subject_person_id: p_LxDT2MpjPJ5TJ5PVMYm86F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YVKNZHzeLG44P1rPivo845
          claim_id: c_1aETkkhUAXr3RshuxH43GA
          source_id: s_gcmV2ppkrnuLchvJWyEmoD
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source:
            id: s_gcmV2ppkrnuLchvJWyEmoD
            source_type: book
            title: 中文维基文库：南齊書/卷49
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E5%8D%97%E9%BD%8A%E6%9B%B8/%E5%8D%B749
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-31T16:03:21.429Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FWrtc7tHZi7BB6SfRT52tm
        subject_person_id: p_DHbqGXMHDUDbi5qvE74UDS
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_LxDT2MpjPJ5TJ5PVMYm86F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PvNntpmQ1o9NWdzm3eNrgw
          claim_id: c_FWrtc7tHZi7BB6SfRT52tm
          source_id: s_gcmV2ppkrnuLchvJWyEmoD
          stance: supports
          locator: 卷四十九·王奂传
          quotation: 執彪及弟爽、弼……皆伏誅。
          interpretation_note: null
          source:
            id: s_gcmV2ppkrnuLchvJWyEmoD
            source_type: book
            title: 中文维基文库：南齊書/卷49
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E5%8D%97%E9%BD%8A%E6%9B%B8/%E5%8D%B749
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-31T16:03:21.429Z
            metadata_json: null
      object_person:
        id: p_DHbqGXMHDUDbi5qvE74UDS
        status: active
        display_name: 王奂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王弼（卒于493年），史料所见人物。本项目依据《中文维基文库：南齊書/卷49》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 493年 | accepted |
| name.primary | 王弼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DHbqGXMHDUDbi5qvE74UDS | 王奂 | accepted |

## 外部来源

- [中文维基文库：南齊書/卷49](https://zh.wikisource.org/wiki/%E5%8D%97%E9%BD%8A%E6%9B%B8/%E5%8D%B749)
