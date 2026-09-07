---
schema: wang-person/v1
id: p_hCN4NHH11HG3cmPwcyPC1j
status: active
merged_into: null
display_name: 王鸣盛
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JXH54qbkBmGnZXNj20NO56
        subject_person_id: p_hCN4NHH11HG3cmPwcyPC1j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鸣盛（1722年—1797年），史料所见人物。本项目依据《王鸣盛》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_-SAdXpg8w5BuoAQLx2Ip2B
          claim_id: c_JXH54qbkBmGnZXNj20NO56
          source_id: s_UPCADAz2HRhT6HbMVjbUEt
          stance: supports
          locator: Q11573252
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_UPCADAz2HRhT6HbMVjbUEt
            source_type: api_record
            title: 维基数据：王鸣盛（Q11573252）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573252
            external_identifier: Q11573252
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:00.477Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Z1tE4tAZweMhL8rR8rirR4
        subject_person_id: p_hCN4NHH11HG3cmPwcyPC1j
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1722年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1722-01-01
            latest: 1722-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hRWA4kCJK7rdTVG9B2cD1W
          claim_id: c_Z1tE4tAZweMhL8rR8rirR4
          source_id: s_UPCADAz2HRhT6HbMVjbUEt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_UPCADAz2HRhT6HbMVjbUEt
            source_type: api_record
            title: 维基数据：王鸣盛（Q11573252）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573252
            external_identifier: Q11573252
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:00.477Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_H36zBy3DKFkdPvpkMJFZ3w
        subject_person_id: p_hCN4NHH11HG3cmPwcyPC1j
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1797年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1797-01-01
            latest: 1797-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3dyQVccpEB8Fkabd5D791p
          claim_id: c_H36zBy3DKFkdPvpkMJFZ3w
          source_id: s_UPCADAz2HRhT6HbMVjbUEt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_UPCADAz2HRhT6HbMVjbUEt
            source_type: api_record
            title: 维基数据：王鸣盛（Q11573252）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573252
            external_identifier: Q11573252
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:00.477Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qjazjb3DDzKE2i5P9q6ZdB
        subject_person_id: p_hCN4NHH11HG3cmPwcyPC1j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鸣盛
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ebK9vRXDzJz5XKK3dqJ4C6
          claim_id: c_Qjazjb3DDzKE2i5P9q6ZdB
          source_id: s_UPCADAz2HRhT6HbMVjbUEt
          stance: supports
          locator: Q11573252
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RoPVFih9e5REKeWJ8hBEWA
        subject_person_id: p_WvKfEJB5FudMr9CF2R37Ax
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_hCN4NHH11HG3cmPwcyPC1j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7SDHcT7wxv2NA2wcyGYtYV
          claim_id: c_RoPVFih9e5REKeWJ8hBEWA
          source_id: s_UPCADAz2HRhT6HbMVjbUEt
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_UPCADAz2HRhT6HbMVjbUEt
            source_type: api_record
            title: 维基数据：王鸣盛（Q11573252）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573252
            external_identifier: Q11573252
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:00.477Z
            metadata_json: null
        - id: cs_dJuYxWAsH4n3CRsQBCBETU
          claim_id: c_RoPVFih9e5REKeWJ8hBEWA
          source_id: s_a4bD51jBpZiPTMphzDAYH2
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_a4bD51jBpZiPTMphzDAYH2
            source_type: api_record
            title: 维基数据：王尔达（Q45416836）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45416836
            external_identifier: Q45416836
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:15.427Z
            metadata_json: null
      object_person:
        id: p_WvKfEJB5FudMr9CF2R37Ax
        status: active
        display_name: 王尔达
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Nx9aAmA1ozAuETQqfaWyj4
        subject_person_id: p_G6TTy42oGuEaEe7C4FnKVc
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_hCN4NHH11HG3cmPwcyPC1j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1na91dGQr1LeEK4tmE9bBm
          claim_id: c_Nx9aAmA1ozAuETQqfaWyj4
          source_id: s_UPCADAz2HRhT6HbMVjbUEt
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_UPCADAz2HRhT6HbMVjbUEt
            source_type: api_record
            title: 维基数据：王鸣盛（Q11573252）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573252
            external_identifier: Q11573252
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:00.477Z
            metadata_json: null
        - id: cs_A8QV2j5x2vHmAswDgAyyzp
          claim_id: c_Nx9aAmA1ozAuETQqfaWyj4
          source_id: s_WiYg6V21HqmxK3FU1ZaNig
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_WiYg6V21HqmxK3FU1ZaNig
            source_type: api_record
            title: 维基数据：陈玉（Q45611291）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45611291
            external_identifier: Q45611291
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:17.691Z
            metadata_json: null
      object_person:
        id: p_G6TTy42oGuEaEe7C4FnKVc
        status: active
        display_name: 陈玉
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王鸣盛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鸣盛（1722年—1797年），史料所见人物。本项目依据《王鸣盛》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1722年 | accepted |
| death.date | 1797年 | accepted |
| name.primary | 王鸣盛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WvKfEJB5FudMr9CF2R37Ax | 王尔达 | accepted |
| spouses | p_G6TTy42oGuEaEe7C4FnKVc | 陈玉 | accepted |

## 外部来源

- [维基数据：陈玉（Q45611291）](https://www.wikidata.org/wiki/Q45611291)
- [维基数据：王尔达（Q45416836）](https://www.wikidata.org/wiki/Q45416836)
- [维基数据：王鸣盛（Q11573252）](https://www.wikidata.org/wiki/Q11573252)
