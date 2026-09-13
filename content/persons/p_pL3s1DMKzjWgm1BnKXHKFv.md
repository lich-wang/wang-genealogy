---
schema: wang-person/v1
id: p_pL3s1DMKzjWgm1BnKXHKFv
status: active
merged_into: null
display_name: 王千
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6hdgiSakQrkC2iQ1bGsTV2
        subject_person_id: p_pL3s1DMKzjWgm1BnKXHKFv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王千（前1世紀—1世紀），新朝宗室，西汉外戚，王莽的长孙，王宇长子。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_bgDzasZF5fvZzicl63_yw2
          claim_id: c_6hdgiSakQrkC2iQ1bGsTV2
          source_id: s_6nUjRxQV2AsPHCfR3kcXM_
          stance: supports
          locator: 导言
          quotation: 王千（前1世紀—1世紀），新朝宗室，西汉外戚，王莽的长孙，王宇长
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_6nUjRxQV2AsPHCfR3kcXM_
            source_type: website
            title: 中文维基百科：王千
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%83
            external_identifier: Q26210093
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-13T09:29:27.764Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jpmpeSpNyQ4aWLr2SJj1t8
        subject_person_id: p_pL3s1DMKzjWgm1BnKXHKFv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王千
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vEkwPv8ZkVZLEGKeJFSUHZ
          claim_id: c_jpmpeSpNyQ4aWLr2SJj1t8
          source_id: s_SuBcaB56aDJBPGE28PFehy
          stance: supports
          locator: Q26210093
          quotation: null
          interpretation_note: null
          source:
            id: s_SuBcaB56aDJBPGE28PFehy
            source_type: api_record
            title: 维基数据：王千（Q26210093）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26210093
            external_identifier: Q26210093
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:57.186Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%83
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_s6wvW3ypU4QqY6RWU8MKTo
        subject_person_id: p_txEz4hCDRU7QsamZGm536K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pL3s1DMKzjWgm1BnKXHKFv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GVLk6dBC4YaVjX5hXmSKqG
          claim_id: c_s6wvW3ypU4QqY6RWU8MKTo
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
        - id: cs_cQvXo3RyMVMfndVfqcGuDB
          claim_id: c_s6wvW3ypU4QqY6RWU8MKTo
          source_id: s_SuBcaB56aDJBPGE28PFehy
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_SuBcaB56aDJBPGE28PFehy
            source_type: api_record
            title: 维基数据：王千（Q26210093）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26210093
            external_identifier: Q26210093
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:57.186Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%83
        - id: cs_PWXdNJ37kaXfDmq7oFE6Lk
          claim_id: c_s6wvW3ypU4QqY6RWU8MKTo
          source_id: s_775vNwcdjUsLGP32Ceukib
          stance: supports
          locator: 条文：之子/之女
          quotation: 王千（{{bd|前1世紀||1世紀|}}），新朝宗室，西汉外戚，王莽的长孙，王宇长子
          interpretation_note: null
          source:
            id: s_775vNwcdjUsLGP32Ceukib
            source_type: website
            title: 中文维基百科：王千
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%83
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:39.157Z
            metadata_json: null
        - id: cs_woXDPt1fcWwQ4LH2M36H2G
          claim_id: c_s6wvW3ypU4QqY6RWU8MKTo
          source_id: s_AaKXTENVxgEwN4G494Ysf2
          stance: supports
          locator: 条文：之子/之女
          quotation: 王千，新朝宗室，西汉外戚，王莽的长孙，王宇长子
          interpretation_note: null
          source:
            id: s_AaKXTENVxgEwN4G494Ysf2
            source_type: website
            title: 中文维基百科：王千
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%83
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:03.107Z
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
        id: c_vGioi1jeQDmJ685EUgzE7j
        subject_person_id: p_ftTmaf71Kwzdeaet16S991
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pL3s1DMKzjWgm1BnKXHKFv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wWvcK3tBfetMMC4cueMC7Z
          claim_id: c_vGioi1jeQDmJ685EUgzE7j
          source_id: s_775vNwcdjUsLGP32Ceukib
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 王千（），新朝宗室，西汉外戚，王莽的长孙，王宇长子。
          interpretation_note: null
          source:
            id: s_775vNwcdjUsLGP32Ceukib
            source_type: website
            title: 中文维基百科：王千
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%83
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:39.157Z
            metadata_json: null
        - id: cs_z4NUbYA1tjAbGfBdKvKYT1
          claim_id: c_vGioi1jeQDmJ685EUgzE7j
          source_id: s_AaKXTENVxgEwN4G494Ysf2
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 王莽的长孙，王宇长子。
          interpretation_note: null
          source:
            id: s_AaKXTENVxgEwN4G494Ysf2
            source_type: website
            title: 中文维基百科：王千
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%83
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:03.107Z
            metadata_json: null
      object_person:
        id: p_ftTmaf71Kwzdeaet16S991
        status: active
        display_name: 王莽
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王千

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王千（前1世紀—1世紀），新朝宗室，西汉外戚，王莽的长孙，王宇长子。 | accepted |
| name.primary | 王千 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_txEz4hCDRU7QsamZGm536K | 王宇 | accepted |
| ancestors | p_ftTmaf71Kwzdeaet16S991 | 王莽 | accepted |

## 外部来源

- [维基数据：王千（Q26210093）](https://www.wikidata.org/wiki/Q26210093)
- [維基數據：王宇（Q11573020）](https://www.wikidata.org/wiki/Q11573020)
- [中文维基百科：王千](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%83)
