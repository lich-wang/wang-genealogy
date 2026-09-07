---
schema: wang-person/v1
id: p_2mzoj2cfydudazoDjmqtny
status: active
merged_into: null
display_name: 孝宣王皇后
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5HJ9nN6AbDM3jYc7ttyQPr
        subject_person_id: p_2mzoj2cfydudazoDjmqtny
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王皇后，或稱邛成太后，姓名失考，生年早於前85年，卒於前16年9月22日，是漢宣帝第三任皇后，邛成共侯王奉光之女。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EBo68HQrsc1rL7sKW8q922
          claim_id: c_5HJ9nN6AbDM3jYc7ttyQPr
          source_id: s_KrP1B2as4scz6c8D2qjCHq
          stance: supports
          locator: 导言
          quotation: 為汉宣帝第三任皇后
          interpretation_note: 据人物条目导言概括生卒、籍贯与身份。
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QQJLESd8bULAa26DDyjcxP
        subject_person_id: p_2mzoj2cfydudazoDjmqtny
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孝宣王皇后
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MqPhSPuZGRTdrsoAret38B
          claim_id: c_QQJLESd8bULAa26DDyjcxP
          source_id: s_Ze9MNszZiUy4NBdUJDCWQP
          stance: supports
          locator: Q712305
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
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_48wsFe4LYNQDpaxaA2d7C9
        status: active
        display_name: 王奉光
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_JWHXc8X1vezXMoNTjLBMPy
        subject_person_id: p_2mzoj2cfydudazoDjmqtny
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Fb2jT7FZ6TD22C1bvBnmYY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_uHc5AmtLLbBo5bBEm8LcBG
          claim_id: c_JWHXc8X1vezXMoNTjLBMPy
          source_id: s_pLqDCwJDwVvJMMwkW7RM1x
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_pLqDCwJDwVvJMMwkW7RM1x
            source_type: api_record
            title: 维基数据：汉宣帝（Q7230）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7230
            external_identifier: Q7230
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:42.315Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E6%B1%89%E5%AE%A3%E5%B8%9D
        - id: cs_pN7NTfJYfS5711rW1wBDJb
          claim_id: c_JWHXc8X1vezXMoNTjLBMPy
          source_id: s_Ze9MNszZiUy4NBdUJDCWQP
          stance: supports
          locator: P26（配偶）
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
      object_person:
        id: p_Fb2jT7FZ6TD22C1bvBnmYY
        status: active
        display_name: 劉詢
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 孝宣王皇后

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王皇后，或稱邛成太后，姓名失考，生年早於前85年，卒於前16年9月22日，是漢宣帝第三任皇后，邛成共侯王奉光之女。 | accepted |
| name.primary | 孝宣王皇后 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_48wsFe4LYNQDpaxaA2d7C9 | 王奉光 | accepted |
| spouses | p_Fb2jT7FZ6TD22C1bvBnmYY | 劉詢 | accepted |

## 外部来源

- [维基数据：汉宣帝（Q7230）](https://www.wikidata.org/wiki/Q7230)
- [维基数据：王奉光（Q30942125）](https://www.wikidata.org/wiki/Q30942125)
- [维基数据：孝宣王皇后（Q712305）](https://www.wikidata.org/wiki/Q712305)
- [中文维基百科：孝宣王皇后](https://zh.wikipedia.org/wiki/%E5%AD%9D%E5%AE%A3%E7%8E%8B%E7%9A%87%E5%90%8E)
