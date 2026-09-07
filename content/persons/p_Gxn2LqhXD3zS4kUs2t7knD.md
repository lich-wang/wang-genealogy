---
schema: wang-person/v1
id: p_Gxn2LqhXD3zS4kUs2t7knD
status: active
merged_into: null
display_name: 王傳燦
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hpxrWfH3ixZa6vToG7CrGB
        subject_person_id: p_Gxn2LqhXD3zS4kUs2t7knD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傳燦，史料所见人物。本项目依据《王傳燦》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Nrq_JJEhWC6j-5fdRrZwlY
          claim_id: c_hpxrWfH3ixZa6vToG7CrGB
          source_id: s_zmvPF7Ln648m64pMJqo1rR
          stance: supports
          locator: Q98060612
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_zmvPF7Ln648m64pMJqo1rR
            source_type: api_record
            title: 维基数据：王傳燦（Q98060612）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q98060612
            external_identifier: Q98060612
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:19.447Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_91ULGo74EWtwwp18APw433
        subject_person_id: p_Gxn2LqhXD3zS4kUs2t7knD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傳燦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Vzsw5FWXQZpMp1gLj2yYPC
          claim_id: c_91ULGo74EWtwwp18APw433
          source_id: s_zmvPF7Ln648m64pMJqo1rR
          stance: supports
          locator: Q98060612
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_agmNGetFebBHPRAQZeop9i
        subject_person_id: p_SCMEwkF97vu7Ucu1ndvykz
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Gxn2LqhXD3zS4kUs2t7knD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2HpCKnbX1yKB9rVh6XJ2Pz
          claim_id: c_agmNGetFebBHPRAQZeop9i
          source_id: s_zmvPF7Ln648m64pMJqo1rR
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_zmvPF7Ln648m64pMJqo1rR
            source_type: api_record
            title: 维基数据：王傳燦（Q98060612）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q98060612
            external_identifier: Q98060612
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:19.447Z
            metadata_json: null
        - id: cs_aChJinc818FYJdfqu2FNts
          claim_id: c_agmNGetFebBHPRAQZeop9i
          source_id: s_83kGNRLV9bGRxCpzweZdNP
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_83kGNRLV9bGRxCpzweZdNP
            source_type: api_record
            title: 维基数据：王庆云（Q11573079）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573079
            external_identifier: Q11573079
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:14.157Z
            metadata_json: null
      object_person:
        id: p_SCMEwkF97vu7Ucu1ndvykz
        status: active
        display_name: 王庆云
        merged_into_person_id: null
  children:
    - claim:
        id: c_wA57CGFgzPWHS2rknnEvHM
        subject_person_id: p_Gxn2LqhXD3zS4kUs2t7knD
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_ggcTrtcGE4fR6SCji22GJb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LhuSYrVb6FEFDwVptAGDJ4
          claim_id: c_wA57CGFgzPWHS2rknnEvHM
          source_id: s_iTF9Mt12vtuqehM1NuBXs5
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_iTF9Mt12vtuqehM1NuBXs5
            source_type: api_record
            title: 维基数据：王仁堪（Q15943465）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15943465
            external_identifier: Q15943465
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:45.295Z
            metadata_json: null
        - id: cs_e8x4CbP1RcQuG3KzhhAua2
          claim_id: c_wA57CGFgzPWHS2rknnEvHM
          source_id: s_zmvPF7Ln648m64pMJqo1rR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_zmvPF7Ln648m64pMJqo1rR
            source_type: api_record
            title: 维基数据：王傳燦（Q98060612）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q98060612
            external_identifier: Q98060612
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:19.447Z
            metadata_json: null
      object_person:
        id: p_ggcTrtcGE4fR6SCji22GJb
        status: active
        display_name: 王仁堪
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王傳燦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王傳燦，史料所见人物。本项目依据《王傳燦》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王傳燦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SCMEwkF97vu7Ucu1ndvykz | 王庆云 | accepted |
| children | p_ggcTrtcGE4fR6SCji22GJb | 王仁堪 | accepted |

## 外部来源

- [维基数据：王傳燦（Q98060612）](https://www.wikidata.org/wiki/Q98060612)
- [维基数据：王庆云（Q11573079）](https://www.wikidata.org/wiki/Q11573079)
- [维基数据：王仁堪（Q15943465）](https://www.wikidata.org/wiki/Q15943465)
