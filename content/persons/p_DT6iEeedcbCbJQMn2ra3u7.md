---
schema: wang-person/v1
id: p_DT6iEeedcbCbJQMn2ra3u7
status: active
merged_into: null
display_name: 王寿
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dEZexj3PU8wxrWjOCtLjA_
        subject_person_id: p_DT6iEeedcbCbJQMn2ra3u7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寿（？—21年），新朝宗室，西汉外戚，王莽之孙，王宇次子。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_lgRn50oBvnPYhEeHyHUEdy
          claim_id: c_dEZexj3PU8wxrWjOCtLjA_
          source_id: s_N5D4EWeoDOFhHdXx2hIyvg
          stance: supports
          locator: 导言
          quotation: 王寿（？—21年），新朝宗室，西汉外戚，王莽之孙，王宇次子。
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_N5D4EWeoDOFhHdXx2hIyvg
            source_type: website
            title: 中文维基百科：王寿 (新朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%BF_(%E6%96%B0%E6%9C%9D)
            external_identifier: Q26210102
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-11T10:29:31.867Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_s98sqVPteHdkj4fnSVkKHQ
        subject_person_id: p_DT6iEeedcbCbJQMn2ra3u7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寿
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VGLFDn4AFCRKa8LAx2ikvg
          claim_id: c_s98sqVPteHdkj4fnSVkKHQ
          source_id: s_8v86f77ncWcEZtNKDNzq4T
          stance: supports
          locator: Q26210102
          quotation: null
          interpretation_note: null
          source:
            id: s_8v86f77ncWcEZtNKDNzq4T
            source_type: api_record
            title: 维基数据：王寿（Q26210102）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26210102
            external_identifier: Q26210102
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:58.144Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%BF_(%E6%96%B0%E6%9C%9D)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MQA89nQid6JATmQ2JV1U1T
        subject_person_id: p_txEz4hCDRU7QsamZGm536K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DT6iEeedcbCbJQMn2ra3u7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_diV9f4L1F2DjtPeSAJDSrq
          claim_id: c_MQA89nQid6JATmQ2JV1U1T
          source_id: s_kPy78YAH2rcamYu2JAoZan
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_kPy78YAH2rcamYu2JAoZan
            source_type: api_record
            title: 維基數據：王宇（Q11573020）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573020
            external_identifier: Q11573020
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:39.617Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%87_(%E6%B1%89%E6%9C%9D)
        - id: cs_UrWdNHcniXQmiQF1PaaToT
          claim_id: c_MQA89nQid6JATmQ2JV1U1T
          source_id: s_8v86f77ncWcEZtNKDNzq4T
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8v86f77ncWcEZtNKDNzq4T
            source_type: api_record
            title: 维基数据：王寿（Q26210102）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26210102
            external_identifier: Q26210102
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:58.144Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%BF_(%E6%96%B0%E6%9C%9D)
        - id: cs_Ho28g1P21z2ZbejuKZHCJh
          claim_id: c_MQA89nQid6JATmQ2JV1U1T
          source_id: s_GXTVghKd8NZDV4PhLJhpyP
          stance: supports
          locator: 条文：之子/之女
          quotation: 王寿{{BD|？||21年||}}，新朝宗室，西汉外戚，王莽之孙，王宇次子
          interpretation_note: null
          source:
            id: s_GXTVghKd8NZDV4PhLJhpyP
            source_type: website
            title: 中文维基百科：王寿 (新朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%BF_(%E6%96%B0%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:40.007Z
            metadata_json: null
        - id: cs_qWWurCCmQYjc5GXwnYZBL2
          claim_id: c_MQA89nQid6JATmQ2JV1U1T
          source_id: s_j49AMEQp47PFYSrB79EPDk
          stance: supports
          locator: 条文：之子/之女
          quotation: 王寿，新朝宗室，西汉外戚，王莽之孙，王宇次子
          interpretation_note: null
          source:
            id: s_j49AMEQp47PFYSrB79EPDk
            source_type: website
            title: 中文维基百科：王寿 (新朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%BF_(%E6%96%B0%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:14.179Z
            metadata_json: null
      object_person:
        id: p_txEz4hCDRU7QsamZGm536K
        status: active
        display_name: 王宇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_wCaCVNECozfpKwwLshEE9X
        subject_person_id: p_ftTmaf71Kwzdeaet16S991
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DT6iEeedcbCbJQMn2ra3u7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CXMccAHLH6qmyvbNmXX7Qx
          claim_id: c_wCaCVNECozfpKwwLshEE9X
          source_id: s_j49AMEQp47PFYSrB79EPDk
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 王莽之孙，王宇次子。
          interpretation_note: null
          source:
            id: s_j49AMEQp47PFYSrB79EPDk
            source_type: website
            title: 中文维基百科：王寿 (新朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%BF_(%E6%96%B0%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:14.179Z
            metadata_json: null
      object_person:
        id: p_ftTmaf71Kwzdeaet16S991
        status: active
        display_name: 王莽
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王寿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王寿（？—21年），新朝宗室，西汉外戚，王莽之孙，王宇次子。 | accepted |
| name.primary | 王寿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_txEz4hCDRU7QsamZGm536K | 王宇 | accepted |
| ancestors | p_ftTmaf71Kwzdeaet16S991 | 王莽 | accepted |

## 外部来源

- [维基数据：王寿（Q26210102）](https://www.wikidata.org/wiki/Q26210102)
- [維基數據：王宇（Q11573020）](https://www.wikidata.org/wiki/Q11573020)
- [中文维基百科：王寿 (新朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%BF_(%E6%96%B0%E6%9C%9D))
