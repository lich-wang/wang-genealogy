---
schema: wang-person/v1
id: p_JJvFJswGoHNn8SwNmTW7n3
status: active
merged_into: null
display_name: 王音
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ei2gPttYiPE5nDcP3cg0-I
        subject_person_id: p_JJvFJswGoHNn8SwNmTW7n3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王音，史料所见人物。本项目依据《王音》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aAXH_TbzrYSlsr5CXtVanG
          claim_id: c_ei2gPttYiPE5nDcP3cg0-I
          source_id: s_g45xdbCoR9CUTg7tTAyPvM
          stance: supports
          locator: Q2142877
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_g45xdbCoR9CUTg7tTAyPvM
            source_type: api_record
            title: 维基数据：王音（Q2142877）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2142877
            external_identifier: Q2142877
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:51.276Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B3
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rM8q3PkczEHTMU7f9Jqso7
        subject_person_id: p_JJvFJswGoHNn8SwNmTW7n3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王音
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dA1AzjdExGUcG9WXC1SJvS
          claim_id: c_rM8q3PkczEHTMU7f9Jqso7
          source_id: s_g45xdbCoR9CUTg7tTAyPvM
          stance: supports
          locator: Q2142877
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BzaeFL8oCD5thD4XRBj7at
        subject_person_id: p_KXoEHYGYGzQ1XCX8TaUgvH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JJvFJswGoHNn8SwNmTW7n3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_kGXCc5CTgdEQnGMTAG2kb4
          claim_id: c_BzaeFL8oCD5thD4XRBj7at
          source_id: s_t8EeUpQe1W5PXZJpHYqA6h
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_t8EeUpQe1W5PXZJpHYqA6h
            source_type: api_record
            title: 维基数据：王弘（Q2168087）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2168087
            external_identifier: Q2168087
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:17.813Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BC%98_(%E8%A5%BF%E6%B1%89)
        - id: cs_8NzVFNH6DKdi6MMqRenh9u
          claim_id: c_BzaeFL8oCD5thD4XRBj7at
          source_id: s_g45xdbCoR9CUTg7tTAyPvM
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_g45xdbCoR9CUTg7tTAyPvM
            source_type: api_record
            title: 维基数据：王音（Q2142877）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2142877
            external_identifier: Q2142877
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:51.276Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B3
      object_person:
        id: p_KXoEHYGYGzQ1XCX8TaUgvH
        status: active
        display_name: 王弘
        merged_into_person_id: null
  children:
    - claim:
        id: c_c2v9cAYoDVrHQwPaLa9h3L
        subject_person_id: p_JJvFJswGoHNn8SwNmTW7n3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b2HpS1yMZuN469vnGZ64c2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_8qvsPWGfb3cqX377oyjXSp
          claim_id: c_c2v9cAYoDVrHQwPaLa9h3L
          source_id: s_g45xdbCoR9CUTg7tTAyPvM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_g45xdbCoR9CUTg7tTAyPvM
            source_type: api_record
            title: 维基数据：王音（Q2142877）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2142877
            external_identifier: Q2142877
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:51.276Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B3
        - id: cs_CbG6rD2CU7SFEfD6CGXCzL
          claim_id: c_c2v9cAYoDVrHQwPaLa9h3L
          source_id: s_nAtDQBUYFCtL1MBHzuFuWc
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_nAtDQBUYFCtL1MBHzuFuWc
            source_type: api_record
            title: 维基数据：王舜（Q10955413）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10955413
            external_identifier: Q10955413
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:19.493Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%88%9C_(%E8%A5%BF%E6%B1%89)
      object_person:
        id: p_b2HpS1yMZuN469vnGZ64c2
        status: active
        display_name: 王舜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王音

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王音，史料所见人物。本项目依据《王音》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王音 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KXoEHYGYGzQ1XCX8TaUgvH | 王弘 | accepted |
| children | p_b2HpS1yMZuN469vnGZ64c2 | 王舜 | accepted |

## 外部来源

- [维基数据：王弘（Q2168087）](https://www.wikidata.org/wiki/Q2168087)
- [维基数据：王舜（Q10955413）](https://www.wikidata.org/wiki/Q10955413)
- [维基数据：王音（Q2142877）](https://www.wikidata.org/wiki/Q2142877)
