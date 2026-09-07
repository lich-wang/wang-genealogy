---
schema: wang-person/v1
id: p_KaHehcHhRjLHU8c4X1dedp
status: active
merged_into: null
display_name: 夏松藩
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_lUE_5axFN-lDnmGVGuhVaC
        subject_person_id: p_KaHehcHhRjLHU8c4X1dedp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 夏松藩，史料所见人物。本项目依据《夏松藩》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zstUVLdLDW21U8LxdIODTC
          claim_id: c_lUE_5axFN-lDnmGVGuhVaC
          source_id: s_4wijKvLWk1MUQCdQpiQ8fA
          stance: supports
          locator: Q112688756
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2e4QWqNWAn6grLHmEPqVSQ
        subject_person_id: p_KaHehcHhRjLHU8c4X1dedp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 夏松藩
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_F1seJL8C7ryXiF2yUKCea9
          claim_id: c_2e4QWqNWAn6grLHmEPqVSQ
          source_id: s_4wijKvLWk1MUQCdQpiQ8fA
          stance: supports
          locator: Q112688756
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
        id: p_r3UhChqW4izbmEMDaULkFG
        status: active
        display_name: 王桂月
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 夏松藩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 夏松藩，史料所见人物。本项目依据《夏松藩》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 夏松藩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_r3UhChqW4izbmEMDaULkFG | 王桂月 | accepted |

## 外部来源

- [维基数据：王桂月（Q112688640）](https://www.wikidata.org/wiki/Q112688640)
- [维基数据：夏松藩（Q112688756）](https://www.wikidata.org/wiki/Q112688756)
