---
schema: wang-person/v1
id: p_CF5TBeQK8jUMNAF7f5R2Qx
status: active
merged_into: null
display_name: 王随之
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fSa5eYjCcVZWXnbeT2VVus
        subject_person_id: p_CF5TBeQK8jUMNAF7f5R2Qx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王随之，史料所见人物。本项目依据《王随之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_I4lXCXlgusDAZbvj9f9OcO
          claim_id: c_fSa5eYjCcVZWXnbeT2VVus
          source_id: s_PnQSYLsNJXc2upV6EjS29M
          stance: supports
          locator: Q22814795
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_x1wQ6E8D5gtjNVWA8jp9p9
        subject_person_id: p_CF5TBeQK8jUMNAF7f5R2Qx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王随之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_t9HyJPk3GYHP273JWticvB
          claim_id: c_x1wQ6E8D5gtjNVWA8jp9p9
          source_id: s_PnQSYLsNJXc2upV6EjS29M
          stance: supports
          locator: Q22814795
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
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: *a1
        - id: cs_7B5ZM3VntKmsCcbvk3bQPB
          claim_id: c_sgWDcMHMrSkezNixPvgyJC
          source_id: s_tcNLJaKEv6BAugZsQeFAqB
          stance: supports
          locator: P40（子女）
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
      object_person:
        id: p_B1Pwn6KkUyb2E3j2EsGPsx
        status: active
        display_name: 王耆之
        merged_into_person_id: null
  children:
    - claim:
        id: c_weieAcigUKi9xGFQjRiNXS
        subject_person_id: p_CF5TBeQK8jUMNAF7f5R2Qx
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_DqZgLkLxDg6fw1Jmrcs9bW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G2twAuoU1F7g92BpPAzsX7
          claim_id: c_weieAcigUKi9xGFQjRiNXS
          source_id: s_eDNMwzgGggzMZ5ckjXDbpj
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_eDNMwzgGggzMZ5ckjXDbpj
            source_type: api_record
            title: 维基数据：王弘之（Q13618784）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13618784
            external_identifier: Q13618784
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:11.806Z
            metadata_json: null
        - id: cs_GxGtQsCnJhDwEpbXVyQ5Kk
          claim_id: c_weieAcigUKi9xGFQjRiNXS
          source_id: s_PnQSYLsNJXc2upV6EjS29M
          stance: supports
          locator: P40（子女）
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
      object_person:
        id: p_DqZgLkLxDg6fw1Jmrcs9bW
        status: active
        display_name: 王弘之
        merged_into_person_id: null
    - claim:
        id: c_kUXtA5zuAh76SfDDmuoxu1
        subject_person_id: p_CF5TBeQK8jUMNAF7f5R2Qx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JEhaoRfj5idkuzddKEqDkC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_toV9F2dVccxU7kPk9TEeiy
          claim_id: c_kUXtA5zuAh76SfDDmuoxu1
          source_id: s_PnQSYLsNJXc2upV6EjS29M
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_NGV4DKaSMrV13Apc6Y7vxr
          claim_id: c_kUXtA5zuAh76SfDDmuoxu1
          source_id: s_2tExJleEyjfEw4bxuX-s63
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_2tExJleEyjfEw4bxuX-s63
            source_type: website
            title: 中文维基百科：王鎮之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%8E%AE%E4%B9%8B
            external_identifier: Q13560622
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person:
        id: p_JEhaoRfj5idkuzddKEqDkC
        status: active
        display_name: 王鎮之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王随之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王随之，史料所见人物。本项目依据《王随之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王随之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_B1Pwn6KkUyb2E3j2EsGPsx | 王耆之 | accepted |
| children | p_DqZgLkLxDg6fw1Jmrcs9bW | 王弘之 | accepted |
| children | p_JEhaoRfj5idkuzddKEqDkC | 王鎮之 | accepted |

## 外部来源

- [维基数据：王弘之（Q13618784）](https://www.wikidata.org/wiki/Q13618784)
- [维基数据：王耆之（Q22814794）](https://www.wikidata.org/wiki/Q22814794)
- [维基数据：王随之（Q22814795）](https://www.wikidata.org/wiki/Q22814795)
- [中文维基百科：王鎮之](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%8E%AE%E4%B9%8B)
