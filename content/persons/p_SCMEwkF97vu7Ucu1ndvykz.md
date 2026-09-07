---
schema: wang-person/v1
id: p_SCMEwkF97vu7Ucu1ndvykz
status: active
merged_into: null
display_name: 王庆云
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jbRFSzMJnXsfKYPdsKLCg1
        subject_person_id: p_SCMEwkF97vu7Ucu1ndvykz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庆云（1798年—1862年），史料所见人物。本项目依据《王庆云》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_qABAEIdXfKY1wldiMG_7rK
          claim_id: c_jbRFSzMJnXsfKYPdsKLCg1
          source_id: s_83kGNRLV9bGRxCpzweZdNP
          stance: supports
          locator: Q11573079
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Wy978W612VRmBKP9AYe375
        subject_person_id: p_SCMEwkF97vu7Ucu1ndvykz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1798年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1798-01-01
            latest: 1798-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CPPNnH8DAxADBQps6GXS3r
          claim_id: c_Wy978W612VRmBKP9AYe375
          source_id: s_83kGNRLV9bGRxCpzweZdNP
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QdApuW9yDo7fFCDPn8Wvpe
        subject_person_id: p_SCMEwkF97vu7Ucu1ndvykz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1862年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1862-01-01
            latest: 1862-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WTJBqnpGpUiHzSPWh2nq3z
          claim_id: c_QdApuW9yDo7fFCDPn8Wvpe
          source_id: s_83kGNRLV9bGRxCpzweZdNP
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3AYhmfVY74fPrCL1QGP6LK
        subject_person_id: p_SCMEwkF97vu7Ucu1ndvykz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庆云
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_t93kruvfCb2taFGn9hCqwe
          claim_id: c_3AYhmfVY74fPrCL1QGP6LK
          source_id: s_83kGNRLV9bGRxCpzweZdNP
          stance: supports
          locator: Q11573079
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
        id: p_Gxn2LqhXD3zS4kUs2t7knD
        status: active
        display_name: 王傳燦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王庆云

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王庆云（1798年—1862年），史料所见人物。本项目依据《王庆云》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1798年 | accepted |
| death.date | 1862年 | accepted |
| name.primary | 王庆云 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Gxn2LqhXD3zS4kUs2t7knD | 王傳燦 | accepted |

## 外部来源

- [维基数据：王傳燦（Q98060612）](https://www.wikidata.org/wiki/Q98060612)
- [维基数据：王庆云（Q11573079）](https://www.wikidata.org/wiki/Q11573079)
