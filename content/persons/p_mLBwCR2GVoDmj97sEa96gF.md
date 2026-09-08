---
schema: wang-person/v1
id: p_mLBwCR2GVoDmj97sEa96gF
status: active
merged_into: null
display_name: 王恕
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hfAoga9jLPrG31NTWmfNML
        subject_person_id: p_mLBwCR2GVoDmj97sEa96gF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕，史料所见人物。本项目依据《王恕》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_yOQhb9vlxYThHYZjuzXTgr
          claim_id: c_hfAoga9jLPrG31NTWmfNML
          source_id: s_jtfaEuPXv7uhbwkyMkx8ng
          stance: supports
          locator: Q45545428
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source:
            id: s_jtfaEuPXv7uhbwkyMkx8ng
            source_type: api_record
            title: 维基数据：王恕（Q45545428）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45545428
            external_identifier: Q45545428
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NAULhL3CsDjLutQKTwF3rW
        subject_person_id: p_mLBwCR2GVoDmj97sEa96gF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9CEnKTV1P5Fac5me1p2iMG
          claim_id: c_NAULhL3CsDjLutQKTwF3rW
          source_id: s_jtfaEuPXv7uhbwkyMkx8ng
          stance: supports
          locator: Q45545428
          quotation: null
          interpretation_note: null
          source:
            id: s_jtfaEuPXv7uhbwkyMkx8ng
            source_type: api_record
            title: 维基数据：王恕（Q45545428）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45545428
            external_identifier: Q45545428
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UHpSThAmhjAgvLTLriv9mV
        subject_person_id: p_g1bs6h5k4Pu2preBv8KZPd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mLBwCR2GVoDmj97sEa96gF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mQsH3enY4xAApmqsZ8NMKW
          claim_id: c_UHpSThAmhjAgvLTLriv9mV
          source_id: s_jtfaEuPXv7uhbwkyMkx8ng
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_jtfaEuPXv7uhbwkyMkx8ng
            source_type: api_record
            title: 维基数据：王恕（Q45545428）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45545428
            external_identifier: Q45545428
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
        - id: cs_hrw9D9J7FJcDiFqyH2H9Ls
          claim_id: c_UHpSThAmhjAgvLTLriv9mV
          source_id: s_9dkGLEpEw7GwYQHS3ahk8F
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_9dkGLEpEw7GwYQHS3ahk8F
            source_type: api_record
            title: 维基数据：王仲智（Q45545364）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45545364
            external_identifier: Q45545364
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:19.152Z
            metadata_json: null
      object_person:
        id: p_g1bs6h5k4Pu2preBv8KZPd
        status: active
        display_name: 王仲智
        merged_into_person_id: null
  children:
    - claim:
        id: c_JMhR58WmvvRzmDcQF9L5nr
        subject_person_id: p_mLBwCR2GVoDmj97sEa96gF
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Un98x3Kw7vbgE1taigN1AK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F9MgK1ndM4k5Pg9VxnQhPP
          claim_id: c_JMhR58WmvvRzmDcQF9L5nr
          source_id: s_jtfaEuPXv7uhbwkyMkx8ng
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_jtfaEuPXv7uhbwkyMkx8ng
            source_type: api_record
            title: 维基数据：王恕（Q45545428）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45545428
            external_identifier: Q45545428
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
        - id: cs_HeAGFAkh1WAZzHsUMVEcrK
          claim_id: c_JMhR58WmvvRzmDcQF9L5nr
          source_id: s_5rkXUyJcjjf1SehC3fSzKE
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_5rkXUyJcjjf1SehC3fSzKE
            source_type: api_record
            title: 维基数据：王承裕（Q15941024）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15941024
            external_identifier: Q15941024
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:40.526Z
            metadata_json: null
      object_person:
        id: p_Un98x3Kw7vbgE1taigN1AK
        status: active
        display_name: 王承裕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恕，史料所见人物。本项目依据《王恕》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王恕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g1bs6h5k4Pu2preBv8KZPd | 王仲智 | accepted |
| children | p_Un98x3Kw7vbgE1taigN1AK | 王承裕 | accepted |

## 外部来源

- [维基数据：王承裕（Q15941024）](https://www.wikidata.org/wiki/Q15941024)
- [维基数据：王恕（Q45545428）](https://www.wikidata.org/wiki/Q45545428)
- [维基数据：王仲智（Q45545364）](https://www.wikidata.org/wiki/Q45545364)
