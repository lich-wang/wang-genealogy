---
schema: wang-person/v1
id: p_KXoEHYGYGzQ1XCX8TaUgvH
status: active
merged_into: null
display_name: 王弘
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CHNTgn2rD8Sm3B5aH8J4JM
        subject_person_id: p_KXoEHYGYGzQ1XCX8TaUgvH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘（?—?），魏郡元城（今河北大名东）人，西汉政治人物。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_QVpmzcFDg8ilL4OlGELV5L
          claim_id: c_CHNTgn2rD8Sm3B5aH8J4JM
          source_id: s_etq4f81M5pUxOfzC2UyFz-
          stance: supports
          locator: 导言
          quotation: 王弘（?—?），魏郡元城（今河北大名东）人，西汉政治人物。
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_etq4f81M5pUxOfzC2UyFz-
            source_type: website
            title: 中文维基百科：王弘 (西汉)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BC%98_(%E8%A5%BF%E6%B1%89)
            external_identifier: Q2168087
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-11T10:29:31.867Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bbx8BSqX1C5D9Zi7NcSmwQ
        subject_person_id: p_KXoEHYGYGzQ1XCX8TaUgvH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mSHkMjxBYzKNcRYn3RPB8G
          claim_id: c_Bbx8BSqX1C5D9Zi7NcSmwQ
          source_id: s_t8EeUpQe1W5PXZJpHYqA6h
          stance: supports
          locator: Q2168087
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
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QipivYv94Bh5WpJPTfGV3j
        subject_person_id: p_mJcAUgUTp3XWHKDKvLh6Kt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KXoEHYGYGzQ1XCX8TaUgvH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_HXRrmrxaGzJin5M8hVBKKF
          claim_id: c_QipivYv94Bh5WpJPTfGV3j
          source_id: s_iV5PcUZhdFTU7c7u3DYruh
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_iV5PcUZhdFTU7c7u3DYruh
            source_type: api_record
            title: 维基数据：王贺（Q2360216）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2360216
            external_identifier: Q2360216
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:42.011Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B4%BA
        - id: cs_1HzXFwr7VMuGNEVYG4SGf2
          claim_id: c_QipivYv94Bh5WpJPTfGV3j
          source_id: s_t8EeUpQe1W5PXZJpHYqA6h
          stance: supports
          locator: P22（父）
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
      object_person:
        id: p_mJcAUgUTp3XWHKDKvLh6Kt
        status: active
        display_name: 王贺
        merged_into_person_id: null
  children:
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
        id: p_JJvFJswGoHNn8SwNmTW7n3
        status: active
        display_name: 王音
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王弘（?—?），魏郡元城（今河北大名东）人，西汉政治人物。 | accepted |
| name.primary | 王弘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mJcAUgUTp3XWHKDKvLh6Kt | 王贺 | accepted |
| children | p_JJvFJswGoHNn8SwNmTW7n3 | 王音 | accepted |

## 外部来源

- [维基数据：王贺（Q2360216）](https://www.wikidata.org/wiki/Q2360216)
- [维基数据：王弘（Q2168087）](https://www.wikidata.org/wiki/Q2168087)
- [维基数据：王音（Q2142877）](https://www.wikidata.org/wiki/Q2142877)
- [中文维基百科：王弘 (西汉)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BC%98_(%E8%A5%BF%E6%B1%89))
