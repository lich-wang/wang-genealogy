---
schema: wang-person/v1
id: p_BeHUK3G13DBFM9gpPWiBye
status: active
merged_into: null
display_name: 王茂之
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2KIHncWGTXTMnAjsmXg4j3
        subject_person_id: p_BeHUK3G13DBFM9gpPWiBye
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂之，史料所见人物。本项目依据《王茂之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yLUebJjjhh5oE2KAQLgqsW
          claim_id: c_2KIHncWGTXTMnAjsmXg4j3
          source_id: s_VM2uZf2Kx5XN529A4HbZTS
          stance: supports
          locator: Q22814793
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_VM2uZf2Kx5XN529A4HbZTS
            source_type: api_record
            title: 维基数据：王茂之（Q22814793）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814793
            external_identifier: Q22814793
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:24.409Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vc2x79XpmcagSciQidaxk8
        subject_person_id: p_BeHUK3G13DBFM9gpPWiBye
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_RLfkiHzBAVVwhZPy6iqNfF
          claim_id: c_Vc2x79XpmcagSciQidaxk8
          source_id: s_VM2uZf2Kx5XN529A4HbZTS
          stance: supports
          locator: Q22814793
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ovrLQzmHijvkLv1FhCtCSb
        subject_person_id: p_RCHyAEEBXGnYRgeH85Q9u7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BeHUK3G13DBFM9gpPWiBye
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_xjw7t1fHQcZivg9AG78aRF
          claim_id: c_ovrLQzmHijvkLv1FhCtCSb
          source_id: s_7wixopF9tTM3FbW5c1L2ze
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7wixopF9tTM3FbW5c1L2ze
            source_type: api_record
            title: 维基数据：王胡之（Q19825735）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q19825735
            external_identifier: Q19825735
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:53.247Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%83%A1%E4%B9%8B
        - id: cs_sMrB1nf5L6ZWcy2Cxcq1PV
          claim_id: c_ovrLQzmHijvkLv1FhCtCSb
          source_id: s_VM2uZf2Kx5XN529A4HbZTS
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_VM2uZf2Kx5XN529A4HbZTS
            source_type: api_record
            title: 维基数据：王茂之（Q22814793）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814793
            external_identifier: Q22814793
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:24.409Z
            metadata_json: null
      object_person:
        id: p_RCHyAEEBXGnYRgeH85Q9u7
        status: active
        display_name: 王胡之
        merged_into_person_id: null
  children:
    - claim:
        id: c_epVphrDaxCnWyNahnEdBKN
        subject_person_id: p_BeHUK3G13DBFM9gpPWiBye
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PfgXZYxCc5dBQbZvBHkDAc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_oQRBxLVVu7J15vMxHnPyD6
          claim_id: c_epVphrDaxCnWyNahnEdBKN
          source_id: s_VM2uZf2Kx5XN529A4HbZTS
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_VM2uZf2Kx5XN529A4HbZTS
            source_type: api_record
            title: 维基数据：王茂之（Q22814793）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814793
            external_identifier: Q22814793
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:24.409Z
            metadata_json: null
        - id: cs_a8hqDG1zkxWQUFQ4ey21ic
          claim_id: c_epVphrDaxCnWyNahnEdBKN
          source_id: s_msG3gE3n1DSE5q3deppwMN
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_msG3gE3n1DSE5q3deppwMN
            source_type: api_record
            title: 维基数据：王敬弘（Q13560629）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13560629
            external_identifier: Q13560629
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:46.209Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%95%AC%E5%BC%98
      object_person:
        id: p_PfgXZYxCc5dBQbZvBHkDAc
        status: active
        display_name: 王敬弘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王茂之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王茂之，史料所见人物。本项目依据《王茂之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王茂之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RCHyAEEBXGnYRgeH85Q9u7 | 王胡之 | accepted |
| children | p_PfgXZYxCc5dBQbZvBHkDAc | 王敬弘 | accepted |

## 外部来源

- [维基数据：王胡之（Q19825735）](https://www.wikidata.org/wiki/Q19825735)
- [维基数据：王敬弘（Q13560629）](https://www.wikidata.org/wiki/Q13560629)
- [维基数据：王茂之（Q22814793）](https://www.wikidata.org/wiki/Q22814793)
