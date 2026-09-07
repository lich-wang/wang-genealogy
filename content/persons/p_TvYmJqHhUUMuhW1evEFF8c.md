---
schema: wang-person/v1
id: p_TvYmJqHhUUMuhW1evEFF8c
status: active
merged_into: null
display_name: 王夫人
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_95dBe9IeD9nncKquEjJjbQ
        subject_person_id: p_TvYmJqHhUUMuhW1evEFF8c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夫人（前2世纪—前110年代），中國西漢時期皇族女性，赵国人，為漢武帝妃嬪。生齐王刘闳。 王夫人何时受到汉武帝的宠幸，记载不详。据《史记 卷六十》记载“王夫人者，赵人也，与卫夫人并幸武帝，而生子闳。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_bOAB0xoMtxab0AXkj4IEIW
          claim_id: c_95dBe9IeD9nncKquEjJjbQ
          source_id: s_0IZi1QRN_MySCPIcPzXdfP
          stance: supports
          locator: 导言
          quotation: 王夫人（前2世纪—前110年代），中國西漢時期皇族女性，赵国人，
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_0IZi1QRN_MySCPIcPzXdfP
            source_type: website
            title: 中文维基百科：王夫人 (汉武帝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A4%AB%E4%BA%BA_(%E6%B1%89%E6%AD%A6%E5%B8%9D)
            external_identifier: Q8253173
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bPCv1J7YU7ZjyCXJcp65en
        subject_person_id: p_TvYmJqHhUUMuhW1evEFF8c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夫人
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MvFNWP3wJxz4ygzbHXYX7s
          claim_id: c_bPCv1J7YU7ZjyCXJcp65en
          source_id: s_YjR6JQ4MC3jHAxJ32yKPVE
          stance: supports
          locator: Q8253173
          quotation: null
          interpretation_note: null
          source:
            id: s_YjR6JQ4MC3jHAxJ32yKPVE
            source_type: api_record
            title: 维基数据：王夫人（Q8253173）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q8253173
            external_identifier: Q8253173
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:40.921Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A4%AB%E4%BA%BA_(%E6%B1%89%E6%AD%A6%E5%B8%9D)
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_AdN4mfHDtreN1gFAUoDYUd
        subject_person_id: p_M2wUJoj3fjg23MLrQcpHh9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_TvYmJqHhUUMuhW1evEFF8c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_GPBpj9Du5Nt3Fc8JyJ1H1L
          claim_id: c_AdN4mfHDtreN1gFAUoDYUd
          source_id: s_JWomymJEpcvT2hLi58R4Ta
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_JWomymJEpcvT2hLi58R4Ta
            source_type: api_record
            title: 维基数据：汉武帝（Q7225）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7225
            external_identifier: Q7225
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:11.210Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E6%B1%89%E6%AD%A6%E5%B8%9D
        - id: cs_fCag22Gms2qXzwmiFMPxm7
          claim_id: c_AdN4mfHDtreN1gFAUoDYUd
          source_id: s_YjR6JQ4MC3jHAxJ32yKPVE
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_YjR6JQ4MC3jHAxJ32yKPVE
            source_type: api_record
            title: 维基数据：王夫人（Q8253173）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q8253173
            external_identifier: Q8253173
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:40.921Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A4%AB%E4%BA%BA_(%E6%B1%89%E6%AD%A6%E5%B8%9D)
      object_person:
        id: p_M2wUJoj3fjg23MLrQcpHh9
        status: active
        display_name: 劉徹
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王夫人

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王夫人（前2世纪—前110年代），中國西漢時期皇族女性，赵国人，為漢武帝妃嬪。生齐王刘闳。 王夫人何时受到汉武帝的宠幸，记载不详。据《史记 卷六十》记载“王夫人者，赵人也，与卫夫人并幸武帝，而生子闳。 | accepted |
| name.primary | 王夫人 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_M2wUJoj3fjg23MLrQcpHh9 | 劉徹 | accepted |

## 外部来源

- [维基数据：汉武帝（Q7225）](https://www.wikidata.org/wiki/Q7225)
- [维基数据：王夫人（Q8253173）](https://www.wikidata.org/wiki/Q8253173)
- [中文维基百科：王夫人 (汉武帝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A4%AB%E4%BA%BA_(%E6%B1%89%E6%AD%A6%E5%B8%9D))
