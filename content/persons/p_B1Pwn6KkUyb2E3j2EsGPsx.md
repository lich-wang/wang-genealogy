---
schema: wang-person/v1
id: p_B1Pwn6KkUyb2E3j2EsGPsx
status: active
merged_into: null
display_name: 王耆之
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b4d9yWhD4iagYaNwFzmN32
        subject_person_id: p_B1Pwn6KkUyb2E3j2EsGPsx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耆之，史料所见人物。本项目依据《王耆之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_vgKBmx_ACVhof5QZGIna_Q
          claim_id: c_b4d9yWhD4iagYaNwFzmN32
          source_id: s_tcNLJaKEv6BAugZsQeFAqB
          stance: supports
          locator: Q22814794
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_tcNLJaKEv6BAugZsQeFAqB
            source_type: api_record
            title: 维基数据：王耆之（Q22814794）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814794
            external_identifier: Q22814794
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:01.056Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YQnBApTwHjCNA43JQLZ6UF
        subject_person_id: p_B1Pwn6KkUyb2E3j2EsGPsx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耆之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UqKwZG6KkchF3zcW8Tmwrs
          claim_id: c_YQnBApTwHjCNA43JQLZ6UF
          source_id: s_tcNLJaKEv6BAugZsQeFAqB
          stance: supports
          locator: Q22814794
          quotation: null
          interpretation_note: null
          source:
            id: s_tcNLJaKEv6BAugZsQeFAqB
            source_type: api_record
            title: 维基数据：王耆之（Q22814794）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814794
            external_identifier: Q22814794
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:01.056Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sRm8tADcHCEp1YWLhNmdit
        subject_person_id: p_b9xZoiiuBPoW8L2RzpVVCo
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_B1Pwn6KkUyb2E3j2EsGPsx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1PL41WAvfE9Rdo9HdJAB4z
          claim_id: c_sRm8tADcHCEp1YWLhNmdit
          source_id: s_tcNLJaKEv6BAugZsQeFAqB
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_tcNLJaKEv6BAugZsQeFAqB
            source_type: api_record
            title: 维基数据：王耆之（Q22814794）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814794
            external_identifier: Q22814794
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:01.056Z
            metadata_json: null
        - id: cs_UgPaDH8N2YVrC517nbGXn6
          claim_id: c_sRm8tADcHCEp1YWLhNmdit
          source_id: s_SFuhPkjgMH7UeWM99KjEjG
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_SFuhPkjgMH7UeWM99KjEjG
            source_type: api_record
            title: 维基数据：王廙（Q15911516）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15911516
            external_identifier: Q15911516
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:50.988Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%99
      object_person:
        id: p_b9xZoiiuBPoW8L2RzpVVCo
        status: active
        display_name: 王廙
        merged_into_person_id: null
  children:
    - claim:
        id: c_sgWDcMHMrSkezNixPvgyJC
        subject_person_id: p_B1Pwn6KkUyb2E3j2EsGPsx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CF5TBeQK8jUMNAF7f5R2Qx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_52FC6E3eLFghnvKpaVy9qC
          claim_id: c_sgWDcMHMrSkezNixPvgyJC
          source_id: s_PnQSYLsNJXc2upV6EjS29M
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_PnQSYLsNJXc2upV6EjS29M
            source_type: api_record
            title: 维基数据：王随之（Q22814795）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814795
            external_identifier: Q22814795
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:24.493Z
            metadata_json: null
        - id: cs_7B5ZM3VntKmsCcbvk3bQPB
          claim_id: c_sgWDcMHMrSkezNixPvgyJC
          source_id: s_tcNLJaKEv6BAugZsQeFAqB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_CF5TBeQK8jUMNAF7f5R2Qx
        status: active
        display_name: 王随之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王耆之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王耆之，史料所见人物。本项目依据《王耆之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王耆之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_b9xZoiiuBPoW8L2RzpVVCo | 王廙 | accepted |
| children | p_CF5TBeQK8jUMNAF7f5R2Qx | 王随之 | accepted |

## 外部来源

- [维基数据：王耆之（Q22814794）](https://www.wikidata.org/wiki/Q22814794)
- [维基数据：王随之（Q22814795）](https://www.wikidata.org/wiki/Q22814795)
- [维基数据：王廙（Q15911516）](https://www.wikidata.org/wiki/Q15911516)
