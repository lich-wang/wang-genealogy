---
schema: wang-person/v1
id: p_PXDbvX2u1UZFi74Zv2of9x
status: active
merged_into: null
display_name: 康氏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_I74b5F05hcFp9gKhpHF3Uk
        subject_person_id: p_PXDbvX2u1UZFi74Zv2of9x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 康氏，史料所见人物。本项目依据《康氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g_j9kGJa5IN_4AKFXmWFHU
          claim_id: c_I74b5F05hcFp9gKhpHF3Uk
          source_id: s_9QeiPeENUYyBhr4B6iZUE5
          stance: supports
          locator: Q13688841
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_9QeiPeENUYyBhr4B6iZUE5
            source_type: api_record
            title: 维基数据：康氏（Q13688841）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13688841
            external_identifier: Q13688841
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:23.616Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hLCdXfEoSSzMAKWz2R891i
        subject_person_id: p_PXDbvX2u1UZFi74Zv2of9x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 康氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vKM3T6jn4aDZhu49T429gT
          claim_id: c_hLCdXfEoSSzMAKWz2R891i
          source_id: s_9QeiPeENUYyBhr4B6iZUE5
          stance: supports
          locator: Q13688841
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
        id: c_N4k6N45GPpQBNJM97TeC5T
        subject_person_id: p_Ak21xk9bNXbqBKZKZVEpv9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_PXDbvX2u1UZFi74Zv2of9x
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QtfSfV9FkidQAeMv2L9FJY
          claim_id: c_N4k6N45GPpQBNJM97TeC5T
          source_id: s_P78NV91xt9mxFv3kJ9BH5P
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_P78NV91xt9mxFv3kJ9BH5P
            source_type: api_record
            title: 维基数据：王寿同（Q13688793）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13688793
            external_identifier: Q13688793
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:15.456Z
            metadata_json: null
        - id: cs_sYMHQuq852aBMMtvVn7MFS
          claim_id: c_N4k6N45GPpQBNJM97TeC5T
          source_id: s_9QeiPeENUYyBhr4B6iZUE5
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_9QeiPeENUYyBhr4B6iZUE5
            source_type: api_record
            title: 维基数据：康氏（Q13688841）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13688841
            external_identifier: Q13688841
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:23.616Z
            metadata_json: null
      object_person:
        id: p_Ak21xk9bNXbqBKZKZVEpv9
        status: active
        display_name: 王寿同
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 康氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 康氏，史料所见人物。本项目依据《康氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 康氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Ak21xk9bNXbqBKZKZVEpv9 | 王寿同 | accepted |

## 外部来源

- [维基数据：康氏（Q13688841）](https://www.wikidata.org/wiki/Q13688841)
- [维基数据：王寿同（Q13688793）](https://www.wikidata.org/wiki/Q13688793)
