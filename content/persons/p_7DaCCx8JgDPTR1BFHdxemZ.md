---
schema: wang-person/v1
id: p_7DaCCx8JgDPTR1BFHdxemZ
status: active
merged_into: null
display_name: 王匡
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TsGweVdPgRsno-xbQepOM9
        subject_person_id: p_7DaCCx8JgDPTR1BFHdxemZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王匡（？—23年），东平陵（今山东济南东）人，新朝宗室，太师，王莽的侄子，王舜的儿子。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_JWCApvqY6JjUOcnjEzV0yR
          claim_id: c_TsGweVdPgRsno-xbQepOM9
          source_id: s_DAWOAwaP7GgbxwdWSg6Cy-
          stance: supports
          locator: 导言
          quotation: 王匡（？—23年），东平陵（今山东济南东）人，新朝宗室，太师，王
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_DAWOAwaP7GgbxwdWSg6Cy-
            source_type: website
            title: 中文维基百科：王匡 (王舜之子)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8C%A1_(%E7%8E%8B%E8%88%9C%E4%B9%8B%E5%AD%90)
            external_identifier: Q11572928
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:31:32.727Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8LF8ZF1siuBidtipb2vTgG
        subject_person_id: p_7DaCCx8JgDPTR1BFHdxemZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 23年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0023-01-01
            latest: 0023-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HdD1E8A2kUUR6t4TtLNEHJ
          claim_id: c_8LF8ZF1siuBidtipb2vTgG
          source_id: s_Ggvd9WyAKjeFcjjETSJou4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Ggvd9WyAKjeFcjjETSJou4
            source_type: api_record
            title: 维基数据：王匡（Q11572928）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572928
            external_identifier: Q11572928
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:44.275Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8C%A1_(%E7%8E%8B%E8%88%9C%E4%B9%8B%E5%AD%90)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nc6VpLW2PEEG2LvXUwWpKF
        subject_person_id: p_7DaCCx8JgDPTR1BFHdxemZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王匡
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DFB5eBRKntyD3BR5pYcGRc
          claim_id: c_Nc6VpLW2PEEG2LvXUwWpKF
          source_id: s_Ggvd9WyAKjeFcjjETSJou4
          stance: supports
          locator: Q11572928
          quotation: null
          interpretation_note: null
          source:
            id: s_Ggvd9WyAKjeFcjjETSJou4
            source_type: api_record
            title: 维基数据：王匡（Q11572928）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572928
            external_identifier: Q11572928
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:44.275Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8C%A1_(%E7%8E%8B%E8%88%9C%E4%B9%8B%E5%AD%90)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GuGagqbpYQizunLfNBpP3t
        subject_person_id: p_b2HpS1yMZuN469vnGZ64c2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7DaCCx8JgDPTR1BFHdxemZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_iUtnJHKL2NYEtP1Ld96H26
          claim_id: c_GuGagqbpYQizunLfNBpP3t
          source_id: s_nAtDQBUYFCtL1MBHzuFuWc
          stance: supports
          locator: P40（子女）
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
        - id: cs_qGUgdGsbGtYJEBqXUvAc4V
          claim_id: c_GuGagqbpYQizunLfNBpP3t
          source_id: s_Ggvd9WyAKjeFcjjETSJou4
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Ggvd9WyAKjeFcjjETSJou4
            source_type: api_record
            title: 维基数据：王匡（Q11572928）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572928
            external_identifier: Q11572928
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:44.275Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8C%A1_(%E7%8E%8B%E8%88%9C%E4%B9%8B%E5%AD%90)
        - id: cs_zkJX2n3NcR1qyWNWWRyZWv
          claim_id: c_GuGagqbpYQizunLfNBpP3t
          source_id: s_GB9y9WRX8DgCn2t1B8oxrp
          stance: supports
          locator: 条文：之子/之女
          quotation: 王匡{{BD|？||23年||catIdx=W}}，东平陵（今山东济南东）人，新朝宗室，太师，王莽的侄子，王舜的儿子
          interpretation_note: null
          source:
            id: s_GB9y9WRX8DgCn2t1B8oxrp
            source_type: website
            title: 中文维基百科：王匡 (王舜之子)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8C%A1_(%E7%8E%8B%E8%88%9C%E4%B9%8B%E5%AD%90)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:12.669Z
            metadata_json: null
        - id: cs_DUv3ckySS67JwQjcBP6tnm
          claim_id: c_GuGagqbpYQizunLfNBpP3t
          source_id: s_icmPq5FuQdQFQ7LwHKvpLR
          stance: supports
          locator: 条文：之子/之女
          quotation: 王匡，东平陵（今山东济南东）人，新朝宗室，太师，王莽的侄子，王舜的儿子
          interpretation_note: null
          source:
            id: s_icmPq5FuQdQFQ7LwHKvpLR
            source_type: website
            title: 中文维基百科：王匡 (王舜之子)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8C%A1_(%E7%8E%8B%E8%88%9C%E4%B9%8B%E5%AD%90)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:02.441Z
            metadata_json: null
      object_person:
        id: p_b2HpS1yMZuN469vnGZ64c2
        status: active
        display_name: 王舜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王匡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王匡（？—23年），东平陵（今山东济南东）人，新朝宗室，太师，王莽的侄子，王舜的儿子。 | accepted |
| death.date | 23年 | accepted |
| name.primary | 王匡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_b2HpS1yMZuN469vnGZ64c2 | 王舜 | accepted |

## 外部来源

- [维基数据：王匡（Q11572928）](https://www.wikidata.org/wiki/Q11572928)
- [维基数据：王舜（Q10955413）](https://www.wikidata.org/wiki/Q10955413)
- [中文维基百科：王匡 (王舜之子)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8C%A1_(%E7%8E%8B%E8%88%9C%E4%B9%8B%E5%AD%90))
