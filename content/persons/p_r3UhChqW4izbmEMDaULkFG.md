---
schema: wang-person/v1
id: p_r3UhChqW4izbmEMDaULkFG
status: active
merged_into: null
display_name: 王桂月
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9HY5Qee80ASutBwtkAmi0L
        subject_person_id: p_r3UhChqW4izbmEMDaULkFG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂月（1877年—1929年），史料所见人物。本项目依据《王桂月》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dZi2MfA4CqAGN-vRAAETkD
          claim_id: c_9HY5Qee80ASutBwtkAmi0L
          source_id: s_nVN1BocHSjSXpdqPEKGCde
          stance: supports
          locator: Q112688640
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_nVN1BocHSjSXpdqPEKGCde
            source_type: api_record
            title: 维基数据：王桂月（Q112688640）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q112688640
            external_identifier: Q112688640
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:01.128Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_XKXNDT7fLwU3fhMJ5g1LWV
        subject_person_id: p_r3UhChqW4izbmEMDaULkFG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1877年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1877-01-01
            latest: 1877-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gpxdJnDiSEMpbfN29kXZSK
          claim_id: c_XKXNDT7fLwU3fhMJ5g1LWV
          source_id: s_nVN1BocHSjSXpdqPEKGCde
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_H8qFb4YSFA8Q8H4cbcB4Am
        subject_person_id: p_r3UhChqW4izbmEMDaULkFG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1929年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1929-01-01
            latest: 1929-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hFTz9P6a2ZuoyxrJTKX1wt
          claim_id: c_H8qFb4YSFA8Q8H4cbcB4Am
          source_id: s_nVN1BocHSjSXpdqPEKGCde
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_nVN1BocHSjSXpdqPEKGCde
            source_type: api_record
            title: 维基数据：王桂月（Q112688640）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q112688640
            external_identifier: Q112688640
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:01.128Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iJT6BSd7q8RSrENZHp3PqH
        subject_person_id: p_r3UhChqW4izbmEMDaULkFG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂月
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NaqNaw9D4u7edPkm14P291
          claim_id: c_iJT6BSd7q8RSrENZHp3PqH
          source_id: s_nVN1BocHSjSXpdqPEKGCde
          stance: supports
          locator: Q112688640
          quotation: null
          interpretation_note: null
          source:
            id: s_nVN1BocHSjSXpdqPEKGCde
            source_type: api_record
            title: 维基数据：王桂月（Q112688640）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q112688640
            external_identifier: Q112688640
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:01.128Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3ZjKqNDA3MWBhHz2kLxoNJ
        subject_person_id: p_Mu15E56wyrNWUKHP8qFxt8
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_r3UhChqW4izbmEMDaULkFG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NUgy3TajuDeKmkGa11ArLp
          claim_id: c_3ZjKqNDA3MWBhHz2kLxoNJ
          source_id: s_nVN1BocHSjSXpdqPEKGCde
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_nVN1BocHSjSXpdqPEKGCde
            source_type: api_record
            title: 维基数据：王桂月（Q112688640）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q112688640
            external_identifier: Q112688640
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:01.128Z
            metadata_json: null
        - id: cs_vNoDrcryGAiJ9mMp5BGJUF
          claim_id: c_3ZjKqNDA3MWBhHz2kLxoNJ
          source_id: s_Vu8MRc3pp9WwKYcye94xWa
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Vu8MRc3pp9WwKYcye94xWa
            source_type: api_record
            title: 维基数据：王际唐（Q30949751）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q30949751
            external_identifier: Q30949751
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:09.701Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9C%89%E5%85%89_(%E8%8B%B1%E5%9C%8B%E5%82%B3%E6%95%99%E5%A3%AB)
      object_person:
        id: p_Mu15E56wyrNWUKHP8qFxt8
        status: active
        display_name: 王际唐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_BLVFPijo3EDCkQMHNnGRcQ
        subject_person_id: p_KaHehcHhRjLHU8c4X1dedp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_r3UhChqW4izbmEMDaULkFG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_25ZEcd1pEtMxaA2SqbiD87
          claim_id: c_BLVFPijo3EDCkQMHNnGRcQ
          source_id: s_nVN1BocHSjSXpdqPEKGCde
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_nVN1BocHSjSXpdqPEKGCde
            source_type: api_record
            title: 维基数据：王桂月（Q112688640）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q112688640
            external_identifier: Q112688640
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:45:01.128Z
            metadata_json: null
        - id: cs_kpK716jrC7hAejHGChv734
          claim_id: c_BLVFPijo3EDCkQMHNnGRcQ
          source_id: s_4wijKvLWk1MUQCdQpiQ8fA
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_4wijKvLWk1MUQCdQpiQ8fA
            source_type: api_record
            title: 维基数据：夏松藩（Q112688756）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q112688756
            external_identifier: Q112688756
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:07.604Z
            metadata_json: null
      object_person:
        id: p_KaHehcHhRjLHU8c4X1dedp
        status: active
        display_name: 夏松藩
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王桂月

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王桂月（1877年—1929年），史料所见人物。本项目依据《王桂月》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1877年 | accepted |
| death.date | 1929年 | accepted |
| name.primary | 王桂月 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Mu15E56wyrNWUKHP8qFxt8 | 王际唐 | accepted |
| spouses | p_KaHehcHhRjLHU8c4X1dedp | 夏松藩 | accepted |

## 外部来源

- [维基数据：王桂月（Q112688640）](https://www.wikidata.org/wiki/Q112688640)
- [维基数据：王际唐（Q30949751）](https://www.wikidata.org/wiki/Q30949751)
- [维基数据：夏松藩（Q112688756）](https://www.wikidata.org/wiki/Q112688756)
