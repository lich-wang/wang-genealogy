---
schema: wang-person/v1
id: p_b2HpS1yMZuN469vnGZ64c2
status: active
merged_into: null
display_name: 王舜
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CpGLNAQW5tuFXDxjz2E6tP
        subject_person_id: p_b2HpS1yMZuN469vnGZ64c2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜（前1世纪—16年），史料所见人物。本项目依据《王舜》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_BW0mdqr0aksCZUTKUkvCZ-
          claim_id: c_CpGLNAQW5tuFXDxjz2E6tP
          source_id: s_nAtDQBUYFCtL1MBHzuFuWc
          stance: supports
          locator: Q10955413
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_D5tmVN2oErXGUCwD4tgbJY
        subject_person_id: p_b2HpS1yMZuN469vnGZ64c2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 前1世纪
            calendar_note: 维基数据 P569 结构化日期，精度：世纪
            earliest: -0100-01-01
            latest: -0001-12-31
            precision: century
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q2Hg3ZvLFXnJmXGSsn5qmC
          claim_id: c_D5tmVN2oErXGUCwD4tgbJY
          source_id: s_nAtDQBUYFCtL1MBHzuFuWc
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_76ZrPd8piFvDG6WQjyWvi6
        subject_person_id: p_b2HpS1yMZuN469vnGZ64c2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 16年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0016-01-01
            latest: 0016-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xWwKBft5rQDbo3PyyoEKS6
          claim_id: c_76ZrPd8piFvDG6WQjyWvi6
          source_id: s_nAtDQBUYFCtL1MBHzuFuWc
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_otgRr6Qx3L48As291A8YFJ
        subject_person_id: p_b2HpS1yMZuN469vnGZ64c2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yEH969xLHKN2iecNVaP5CV
          claim_id: c_otgRr6Qx3L48As291A8YFJ
          source_id: s_nAtDQBUYFCtL1MBHzuFuWc
          stance: supports
          locator: Q10955413
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_JJvFJswGoHNn8SwNmTW7n3
        status: active
        display_name: 王音
        merged_into_person_id: null
  children:
    - claim:
        id: c_sTY2LXJLYEntttj9AgDX2T
        subject_person_id: p_b2HpS1yMZuN469vnGZ64c2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T1KJ3yFbRSmtSmWwYJTLUi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_T3eNhx2Mwgy3zonC6bWVTE
          claim_id: c_sTY2LXJLYEntttj9AgDX2T
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
        - id: cs_DVjTeXgKRQsmWN4fpVfVq1
          claim_id: c_sTY2LXJLYEntttj9AgDX2T
          source_id: s_sRFCwvBCTdrRUa1NYUsseP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_sRFCwvBCTdrRUa1NYUsseP
            source_type: api_record
            title: 维基数据：王林（Q26209953）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209953
            external_identifier: Q26209953
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:34.297Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9E%97_(%E8%A5%BF%E6%B1%89)
        - id: cs_ENWdBpHbKzWsH8r2CL8XLh
          claim_id: c_sTY2LXJLYEntttj9AgDX2T
          source_id: s_yLwGT3pMAYXWoKF8xfBY6B
          stance: supports
          locator: 条文：之子/之女
          quotation: 王林{{BD|？||23年|}}，西汉外戚，新朝宗室，王莽的安新公王舜之子，哥哥王匡、王延
          interpretation_note: null
          source:
            id: s_yLwGT3pMAYXWoKF8xfBY6B
            source_type: website
            title: 中文维基百科：王林 (西汉)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9E%97_(%E8%A5%BF%E6%B1%89)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:11.284Z
            metadata_json: null
        - id: cs_24KAM19FPLQ3rNT5uBi2N3
          claim_id: c_sTY2LXJLYEntttj9AgDX2T
          source_id: s_4jWCSYy12Kdy6vZ2Np5t6Q
          stance: supports
          locator: 条文：之子/之女
          quotation: 王林，西汉外戚，新朝宗室，王莽的安新公王舜之子，哥哥王匡、王延
          interpretation_note: null
          source:
            id: s_4jWCSYy12Kdy6vZ2Np5t6Q
            source_type: website
            title: 中文维基百科：王林 (西汉)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9E%97_(%E8%A5%BF%E6%B1%89)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:32.943Z
            metadata_json: null
      object_person:
        id: p_T1KJ3yFbRSmtSmWwYJTLUi
        status: active
        display_name: 王林
        merged_into_person_id: null
    - claim:
        id: c_DFNyXZJ1gRBDxBMKX7AdPY
        subject_person_id: p_b2HpS1yMZuN469vnGZ64c2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eVGTGQ9FEXgH7Z3h4mnVS6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_8QtxDDgh79qmYr82xqDFEB
          claim_id: c_DFNyXZJ1gRBDxBMKX7AdPY
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
        - id: cs_LyoEjNdGGCoht5yXCqSthc
          claim_id: c_DFNyXZJ1gRBDxBMKX7AdPY
          source_id: s_pUoNec1H4MR94jBE4cd3WG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_pUoNec1H4MR94jBE4cd3WG
            source_type: api_record
            title: 维基数据：王延（Q26209960）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209960
            external_identifier: Q26209960
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:35.687Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6_(%E8%A5%BF%E6%B1%89)
        - id: cs_cXx8Z98AqGs3DQRkn5GUin
          claim_id: c_DFNyXZJ1gRBDxBMKX7AdPY
          source_id: s_dbBXHBs9inRweCAtkaKiMn
          stance: supports
          locator: 条文：之子/之女
          quotation: 王延{{BD|？||23年|}}，西汉外戚，新朝宗室，王莽的安新公王舜之子，弟弟王匡、王林
          interpretation_note: null
          source:
            id: s_dbBXHBs9inRweCAtkaKiMn
            source_type: website
            title: 中文维基百科：王延 (西汉)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6_(%E8%A5%BF%E6%B1%89)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:11.993Z
            metadata_json: null
        - id: cs_qtCmKCS1JsnAAEphnm5nUs
          claim_id: c_DFNyXZJ1gRBDxBMKX7AdPY
          source_id: s_PmcfL5zphAmmgNA1nDnrPU
          stance: supports
          locator: 条文：之子/之女
          quotation: 王延，西汉外戚，新朝宗室，王莽的安新公王舜之子，弟弟王匡、王林
          interpretation_note: null
          source:
            id: s_PmcfL5zphAmmgNA1nDnrPU
            source_type: website
            title: 中文维基百科：王延 (西汉)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6_(%E8%A5%BF%E6%B1%89)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:17.760Z
            metadata_json: null
      object_person:
        id: p_eVGTGQ9FEXgH7Z3h4mnVS6
        status: active
        display_name: 王延
        merged_into_person_id: null
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
        id: p_7DaCCx8JgDPTR1BFHdxemZ
        status: active
        display_name: 王匡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王舜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王舜（前1世纪—16年），史料所见人物。本项目依据《王舜》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 前1世纪 | accepted |
| death.date | 16年 | accepted |
| name.primary | 王舜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JJvFJswGoHNn8SwNmTW7n3 | 王音 | accepted |
| children | p_T1KJ3yFbRSmtSmWwYJTLUi | 王林 | accepted |
| children | p_eVGTGQ9FEXgH7Z3h4mnVS6 | 王延 | accepted |
| children | p_7DaCCx8JgDPTR1BFHdxemZ | 王匡 | accepted |

## 外部来源

- [维基数据：王匡（Q11572928）](https://www.wikidata.org/wiki/Q11572928)
- [维基数据：王林（Q26209953）](https://www.wikidata.org/wiki/Q26209953)
- [维基数据：王舜（Q10955413）](https://www.wikidata.org/wiki/Q10955413)
- [维基数据：王延（Q26209960）](https://www.wikidata.org/wiki/Q26209960)
- [维基数据：王音（Q2142877）](https://www.wikidata.org/wiki/Q2142877)
- [中文维基百科：王匡 (王舜之子)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8C%A1_(%E7%8E%8B%E8%88%9C%E4%B9%8B%E5%AD%90))
- [中文维基百科：王林 (西汉)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9E%97_(%E8%A5%BF%E6%B1%89))
- [中文维基百科：王延 (西汉)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6_(%E8%A5%BF%E6%B1%89))
