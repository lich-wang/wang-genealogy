---
schema: wang-person/v1
id: p_ut5TAqtx7JVPFrZWDXkVbH
status: active
merged_into: null
display_name: 王炽
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5o4qOyFIDAeH5zC8uqb76N
        subject_person_id: p_ut5TAqtx7JVPFrZWDXkVbH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炽（1836年—1903年），史料所见人物。本项目依据《王炽》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_wSa57LtBXTde5zQedxKd_C
          claim_id: c_5o4qOyFIDAeH5zC8uqb76N
          source_id: s_L9pFWNQJAVC1jMVcFob5Y9
          stance: supports
          locator: Q15912586
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_L9pFWNQJAVC1jMVcFob5Y9
            source_type: api_record
            title: 维基数据：王炽（Q15912586）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15912586
            external_identifier: Q15912586
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:08.756Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pPZKjNoctT913zpPZp688J
        subject_person_id: p_ut5TAqtx7JVPFrZWDXkVbH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1836年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1836-01-01
            latest: 1836-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XPQo76Kfb3ZJhd8sf29SLX
          claim_id: c_pPZKjNoctT913zpPZp688J
          source_id: s_L9pFWNQJAVC1jMVcFob5Y9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_L9pFWNQJAVC1jMVcFob5Y9
            source_type: api_record
            title: 维基数据：王炽（Q15912586）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15912586
            external_identifier: Q15912586
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:08.756Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_v59isfGzMsEBZM5MH5L2TY
        subject_person_id: p_ut5TAqtx7JVPFrZWDXkVbH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1903年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1903-01-01
            latest: 1903-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ktiyAvcVacxLfV7gacxN83
          claim_id: c_v59isfGzMsEBZM5MH5L2TY
          source_id: s_L9pFWNQJAVC1jMVcFob5Y9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_L9pFWNQJAVC1jMVcFob5Y9
            source_type: api_record
            title: 维基数据：王炽（Q15912586）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15912586
            external_identifier: Q15912586
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:08.756Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TazGXcUEZuNWGT3UQP4VGg
        subject_person_id: p_ut5TAqtx7JVPFrZWDXkVbH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炽
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qz7umaMx96GukHdt6cZaCS
          claim_id: c_TazGXcUEZuNWGT3UQP4VGg
          source_id: s_L9pFWNQJAVC1jMVcFob5Y9
          stance: supports
          locator: Q15912586
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Ppzp1aoP5A48Dr4H2QUmwz
        subject_person_id: p_ut5TAqtx7JVPFrZWDXkVbH
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Lhn7m5fRtKT7BwcDqHHW8u
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DxwPu5v77QW9LJq5apiGmA
          claim_id: c_Ppzp1aoP5A48Dr4H2QUmwz
          source_id: s_L9pFWNQJAVC1jMVcFob5Y9
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_L9pFWNQJAVC1jMVcFob5Y9
            source_type: api_record
            title: 维基数据：王炽（Q15912586）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15912586
            external_identifier: Q15912586
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:08.756Z
            metadata_json: null
        - id: cs_aRKnsBBBhCoVPWV8hFkhLQ
          claim_id: c_Ppzp1aoP5A48Dr4H2QUmwz
          source_id: s_Xb7iN51dFG12mtADwq6t2M
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Xb7iN51dFG12mtADwq6t2M
            source_type: api_record
            title: 维基数据：王鴻圖（Q15929141）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15929141
            external_identifier: Q15929141
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:44.084Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%B4%BB%E5%9C%96
      object_person:
        id: p_Lhn7m5fRtKT7BwcDqHHW8u
        status: active
        display_name: 王鴻圖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王炽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王炽（1836年—1903年），史料所见人物。本项目依据《王炽》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1836年 | accepted |
| death.date | 1903年 | accepted |
| name.primary | 王炽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Lhn7m5fRtKT7BwcDqHHW8u | 王鴻圖 | accepted |

## 外部来源

- [维基数据：王炽（Q15912586）](https://www.wikidata.org/wiki/Q15912586)
- [维基数据：王鴻圖（Q15929141）](https://www.wikidata.org/wiki/Q15929141)
