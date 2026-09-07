---
schema: wang-person/v1
id: p_48wsFe4LYNQDpaxaA2d7C9
status: active
merged_into: null
display_name: 王奉光
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4ZsjFPhQcIm0St7W0WwzJb
        subject_person_id: p_48wsFe4LYNQDpaxaA2d7C9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奉光，史料所见人物。本项目依据《王奉光》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1UjwVk2Z1w0W8jZlsOrnPA
          claim_id: c_4ZsjFPhQcIm0St7W0WwzJb
          source_id: s_CRkZtiQNjrzRWKNRG3mnRb
          stance: supports
          locator: Q30942125
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_CRkZtiQNjrzRWKNRG3mnRb
            source_type: api_record
            title: 维基数据：王奉光（Q30942125）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q30942125
            external_identifier: Q30942125
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:51.250Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%89%E5%85%89
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_btMdU3GdC11yjM3yTmHJSw
        subject_person_id: p_48wsFe4LYNQDpaxaA2d7C9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奉光
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Vn7KFN4CxCgKbpjh6Rs3SB
          claim_id: c_btMdU3GdC11yjM3yTmHJSw
          source_id: s_CRkZtiQNjrzRWKNRG3mnRb
          stance: supports
          locator: Q30942125
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_F5QbaLDCj3y12S39HWwCem
        subject_person_id: p_48wsFe4LYNQDpaxaA2d7C9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2mzoj2cfydudazoDjmqtny
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_kpLhKH4hJr8n1KAtM6Yj23
          claim_id: c_F5QbaLDCj3y12S39HWwCem
          source_id: s_Ze9MNszZiUy4NBdUJDCWQP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Ze9MNszZiUy4NBdUJDCWQP
            source_type: api_record
            title: 维基数据：孝宣王皇后（Q712305）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q712305
            external_identifier: Q712305
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:22.563Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%AD%9D%E5%AE%A3%E7%8E%8B%E7%9A%87%E5%90%8E
        - id: cs_9r76JKjPX6U79mL7xoSJwV
          claim_id: c_F5QbaLDCj3y12S39HWwCem
          source_id: s_CRkZtiQNjrzRWKNRG3mnRb
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_CRkZtiQNjrzRWKNRG3mnRb
            source_type: api_record
            title: 维基数据：王奉光（Q30942125）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q30942125
            external_identifier: Q30942125
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:51.250Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%89%E5%85%89
        - id: cs_6qKZqSKXPS4MRDJ1NEqfGW
          claim_id: c_F5QbaLDCj3y12S39HWwCem
          source_id: s_KrP1B2as4scz6c8D2qjCHq
          stance: supports
          locator: 条文：之子/之女
          quotation: 邛成共侯王奉光之女
          interpretation_note: null
          source:
            id: s_KrP1B2as4scz6c8D2qjCHq
            source_type: website
            title: 中文维基百科：孝宣王皇后
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%AD%9D%E5%AE%A3%E7%8E%8B%E7%9A%87%E5%90%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:50.089Z
            metadata_json: null
        - id: cs_5N3bLxMmqf4MeMA2NJt7SK
          claim_id: c_F5QbaLDCj3y12S39HWwCem
          source_id: s_G2QUVCxmCq3pFsptPkkzQC
          stance: supports
          locator: 条文：之子/之女
          quotation: 邛成共侯王奉光之女
          interpretation_note: null
          source:
            id: s_G2QUVCxmCq3pFsptPkkzQC
            source_type: website
            title: 中文维基百科：孝宣王皇后
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%AD%9D%E5%AE%A3%E7%8E%8B%E7%9A%87%E5%90%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:47.339Z
            metadata_json: null
      object_person:
        id: p_2mzoj2cfydudazoDjmqtny
        status: active
        display_name: 孝宣王皇后
        merged_into_person_id: null
    - claim:
        id: c_5JDjNW8prH3aTuHYKoZ926
        subject_person_id: p_48wsFe4LYNQDpaxaA2d7C9
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_QuSoLfELj3JkJeGUbLPDLj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6W3K44fYZrFJYntid1RiRx
          claim_id: c_5JDjNW8prH3aTuHYKoZ926
          source_id: s_PVCe79dmv55BFf1JoLUQDo
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 子王敞袭封邛成侯
          interpretation_note: null
          source:
            id: s_PVCe79dmv55BFf1JoLUQDo
            source_type: website
            title: 中文维基百科：王奉光
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%89%E5%85%89
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:53.517Z
            metadata_json: null
        - id: cs_yGQBLWQ8Sf9YH9Fyk8ZmfN
          claim_id: c_5JDjNW8prH3aTuHYKoZ926
          source_id: s_LoutrY7y4q2cPhnfqBrtjF
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 子王敞袭封邛成侯
          interpretation_note: null
          source:
            id: s_LoutrY7y4q2cPhnfqBrtjF
            source_type: website
            title: 中文维基百科：王奉光
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%89%E5%85%89
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:54.898Z
            metadata_json: null
        - id: cs_zVQwaBtWntW8N3dnXjnFST
          claim_id: c_5JDjNW8prH3aTuHYKoZ926
          source_id: s_nZMPPA8T9g1Lsds6YH3Lht
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 子王敞袭封邛成侯
          interpretation_note: null
          source:
            id: s_nZMPPA8T9g1Lsds6YH3Lht
            source_type: website
            title: 中文维基百科：王奉光
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%89%E5%85%89
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:27:19.840Z
            metadata_json: null
        - id: cs_kJyM9R4N8P8MxrWepTTYPP
          claim_id: c_5JDjNW8prH3aTuHYKoZ926
          source_id: s_z8CFA9H8zSTg1A6Lq279nB
          stance: supports
          locator: 条文：条文识读（child）
          quotation: 子王敞袭封邛成侯，王舜另封安平侯
          interpretation_note: null
          source:
            id: s_z8CFA9H8zSTg1A6Lq279nB
            source_type: website
            title: 中文维基百科：王奉光
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%89%E5%85%89
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:38.669Z
            metadata_json: null
      object_person:
        id: p_QuSoLfELj3JkJeGUbLPDLj
        status: active
        display_name: 王敞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王奉光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王奉光，史料所见人物。本项目依据《王奉光》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王奉光 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2mzoj2cfydudazoDjmqtny | 孝宣王皇后 | accepted |
| children | p_QuSoLfELj3JkJeGUbLPDLj | 王敞 | accepted |

## 外部来源

- [维基数据：王奉光（Q30942125）](https://www.wikidata.org/wiki/Q30942125)
- [维基数据：孝宣王皇后（Q712305）](https://www.wikidata.org/wiki/Q712305)
- [中文维基百科：王奉光](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A5%89%E5%85%89)
- [中文维基百科：孝宣王皇后](https://zh.wikipedia.org/wiki/%E5%AD%9D%E5%AE%A3%E7%8E%8B%E7%9A%87%E5%90%8E)
