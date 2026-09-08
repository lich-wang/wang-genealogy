---
schema: wang-person/v1
id: p_qN3fgVphDXzy9V4dx4M2qZ
status: active
merged_into: null
display_name: 王延丰
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K47HapoGqrfPN7D6LQoKJ3
        subject_person_id: p_qN3fgVphDXzy9V4dx4M2qZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延丰（?—?），五代十国時期光州固始（今河南固始）人。 王延丰是閩國太祖王審知兄长王潮之子，唐昭宗乾宁四年十二月初六（898年1月2日）王潮去世，被朝廷追赠为司空、秦国公。王潮有四子王延兴、王延虹、王延丰、王延休，二弟王审邽也还在世，但他选择由三弟王审知继位，王审知后称王，开创了闽国。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_MtFzFdUtW26m9MJHuXA-jI
          claim_id: c_K47HapoGqrfPN7D6LQoKJ3
          source_id: s_iSTvGFMcqESzof-BOgRcGu
          stance: supports
          locator: 导言
          quotation: 王延丰（?—?），五代十国時期光州固始（今河南固始）人。 王延丰
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_iSTvGFMcqESzof-BOgRcGu
            source_type: website
            title: 中文维基百科：王延丰
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E4%B8%B0
            external_identifier: Q15940348
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nhVRNf7V9PmiL2AYGXJr8G
        subject_person_id: p_qN3fgVphDXzy9V4dx4M2qZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延丰
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1E4oAwhorH7Dgx9hggND65
          claim_id: c_nhVRNf7V9PmiL2AYGXJr8G
          source_id: s_LK1y6MxnTKzWF9TEZ9nvPf
          stance: supports
          locator: Q15940348
          quotation: null
          interpretation_note: null
          source:
            id: s_LK1y6MxnTKzWF9TEZ9nvPf
            source_type: api_record
            title: 维基数据：王延丰（Q15940348）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15940348
            external_identifier: Q15940348
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:05.576Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E4%B8%B0
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yk63pKTAZVPri1Ks6ubE6a
        subject_person_id: p_AoyiXMcFCT7FwHgBRpLSXs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qN3fgVphDXzy9V4dx4M2qZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tfpiSk1ND8ibBbGKPd7MgJ
          claim_id: c_yk63pKTAZVPri1Ks6ubE6a
          source_id: s_iSTvGFMcqESzof-BOgRcGu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_c8xzr38YrLy6zBqhbMh8VX
          claim_id: c_yk63pKTAZVPri1Ks6ubE6a
          source_id: s_VVbFqZPBaPQYXSvkQYDfAp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_VVbFqZPBaPQYXSvkQYDfAp
            source_type: api_record
            title: 维基数据：王潮（Q517036）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q517036
            external_identifier: Q517036
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:53.402Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%BD%AE
      object_person:
        id: p_AoyiXMcFCT7FwHgBRpLSXs
        status: active
        display_name: 王潮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王延丰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王延丰（?—?），五代十国時期光州固始（今河南固始）人。 王延丰是閩國太祖王審知兄长王潮之子，唐昭宗乾宁四年十二月初六（898年1月2日）王潮去世，被朝廷追赠为司空、秦国公。王潮有四子王延兴、王延虹、王延丰、王延休，二弟王审邽也还在世，但他选择由三弟王审知继位，王审知后称王，开创了闽国。 | accepted |
| name.primary | 王延丰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AoyiXMcFCT7FwHgBRpLSXs | 王潮 | accepted |

## 外部来源

- [维基数据：王潮（Q517036）](https://www.wikidata.org/wiki/Q517036)
- [维基数据：王延丰（Q15940348）](https://www.wikidata.org/wiki/Q15940348)
- [中文维基百科：王延丰](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E4%B8%B0)
