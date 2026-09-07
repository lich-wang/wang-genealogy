---
schema: wang-person/v1
id: p_W5F2zhrVkWpemEv2YFcCyM
status: active
merged_into: null
display_name: 王训
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eyrorl9h4uTJuusge1Ae4S
        subject_person_id: p_W5F2zhrVkWpemEv2YFcCyM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王训（卒于768年），史料所见人物。本项目依据《《唐文拾遗》卷十二：京兆府泾阳县主簿王𨙸墓志》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ahdo2hXdnjouoTp0thXO5I
          claim_id: c_eyrorl9h4uTJuusge1Ae4S
          source_id: s_YEgFJu3CbFgpx2akuZ3rmK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_YEgFJu3CbFgpx2akuZ3rmK
            source_type: epitaph
            title: 《唐文拾遗》卷十二：京兆府泾阳县主簿王𨙸墓志
            creator: null
            publisher: 公开古籍影印
            published_at_text: null
            canonical_url: https://pdf.fengshui86.com/wzpdf/3307627.pdf
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:52.386Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_i3BaCqVQuM88tQm4zhxc38
        subject_person_id: p_W5F2zhrVkWpemEv2YFcCyM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 768年
            calendar_note: null
            earliest: 0768-01-01
            latest: 0768-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mZETZRiujbDYmM9hzBhcUq
          claim_id: c_i3BaCqVQuM88tQm4zhxc38
          source_id: s_YEgFJu3CbFgpx2akuZ3rmK
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
        id: c_V2mKv2FRiXUVAQgtRCcEsn
        subject_person_id: p_W5F2zhrVkWpemEv2YFcCyM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王训
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5zE13ZxKUCexguz21rb7Bz
          claim_id: c_V2mKv2FRiXUVAQgtRCcEsn
          source_id: s_YEgFJu3CbFgpx2akuZ3rmK
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source:
            id: s_YEgFJu3CbFgpx2akuZ3rmK
            source_type: epitaph
            title: 《唐文拾遗》卷十二：京兆府泾阳县主簿王𨙸墓志
            creator: null
            publisher: 公开古籍影印
            published_at_text: null
            canonical_url: https://pdf.fengshui86.com/wzpdf/3307627.pdf
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:52.386Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Xub3KsTEhU81QU9FFo2YyV
        subject_person_id: p_PcarY3s2HbN5X2amcQ3Lxq
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_W5F2zhrVkWpemEv2YFcCyM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nTA6BQD9P5sfmKJGzVCdj6
          claim_id: c_Xub3KsTEhU81QU9FFo2YyV
          source_id: s_YEgFJu3CbFgpx2akuZ3rmK
          stance: supports
          locator: 王𨙸墓志
          quotation: 曾祖同皎……祖繇……父訓，累授光禄卿。
          interpretation_note: 墓主之父王训为王繇之子。
          source:
            id: s_YEgFJu3CbFgpx2akuZ3rmK
            source_type: epitaph
            title: 《唐文拾遗》卷十二：京兆府泾阳县主簿王𨙸墓志
            creator: null
            publisher: 公开古籍影印
            published_at_text: null
            canonical_url: https://pdf.fengshui86.com/wzpdf/3307627.pdf
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:52.386Z
            metadata_json: null
      object_person:
        id: p_PcarY3s2HbN5X2amcQ3Lxq
        status: active
        display_name: 王繇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_gZUa6hCRRBC4i1V8UmbNW6
        subject_person_id: p_dwq9QFUznBqpuUBRDrnuss
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_W5F2zhrVkWpemEv2YFcCyM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3Q7ijosDJHPrGXxuuUQNQS
          claim_id: c_gZUa6hCRRBC4i1V8UmbNW6
          source_id: s_YEgFJu3CbFgpx2akuZ3rmK
          stance: supports
          locator: 王𨙸墓志
          quotation: 曾祖同皎……祖繇……父訓，累授光禄卿。
          interpretation_note: null
          source:
            id: s_YEgFJu3CbFgpx2akuZ3rmK
            source_type: epitaph
            title: 《唐文拾遗》卷十二：京兆府泾阳县主簿王𨙸墓志
            creator: null
            publisher: 公开古籍影印
            published_at_text: null
            canonical_url: https://pdf.fengshui86.com/wzpdf/3307627.pdf
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:52.386Z
            metadata_json: null
      object_person:
        id: p_dwq9QFUznBqpuUBRDrnuss
        status: active
        display_name: 王同皎
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王训

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王训（卒于768年），史料所见人物。本项目依据《《唐文拾遗》卷十二：京兆府泾阳县主簿王𨙸墓志》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 768年 | accepted |
| name.primary | 王训 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PcarY3s2HbN5X2amcQ3Lxq | 王繇 | accepted |
| ancestors | p_dwq9QFUznBqpuUBRDrnuss | 王同皎 | accepted |

## 外部来源

- [《唐文拾遗》卷十二：京兆府泾阳县主簿王𨙸墓志](https://pdf.fengshui86.com/wzpdf/3307627.pdf)
