---
schema: wang-person/v1
id: p_SSx59dvLsUEEyv9CC9o5HN
status: active
merged_into: null
display_name: 功显君
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vYV8Ge9VdIEQZqjIAVh7oz
        subject_person_id: p_SSx59dvLsUEEyv9CC9o5HN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 功显君（前1世纪—8年），姓渠氏，生卒不详，王曼之妻，王莽之母。 王曼早死，渠氏教育王莽读书。元始四年（4年）夏季，汉平帝封王莽的母亲为功显君，封王莽的两个儿子王安为褒新侯，王临为赏都侯。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GkAdZfnzP4eOvPAOdh8uv3
          claim_id: c_vYV8Ge9VdIEQZqjIAVh7oz
          source_id: s_tpUcJml7XacUsIZVdkzRgh
          stance: supports
          locator: 导言
          quotation: 功显君（前1世纪—8年），姓渠氏，生卒不详，王曼之妻，王莽之母。
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_tpUcJml7XacUsIZVdkzRgh
            source_type: website
            title: 中文维基百科：功显君
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8A%9F%E6%98%BE%E5%90%9B
            external_identifier: Q55286323
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:31:32.727Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iwQ9kutgGjt7jbcSWvpnA2
        subject_person_id: p_SSx59dvLsUEEyv9CC9o5HN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 前1世纪
            calendar_note: 維基數據 P569 結構化日期，精度：世纪
            earliest: null
            latest: null
            precision: unknown
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M8DK8B2LjGBZQruGKYvQ6L
          claim_id: c_iwQ9kutgGjt7jbcSWvpnA2
          source_id: s_RatDq1uda51eaD8dvTv9s6
          stance: supports
          locator: Q55286323
          quotation: null
          interpretation_note: null
          source:
            id: s_RatDq1uda51eaD8dvTv9s6
            source_type: api_record
            title: 維基數據：功显君（Q55286323）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q55286323
            external_identifier: Q55286323
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:37.672Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%8A%9F%E6%98%BE%E5%90%9B
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zRCyHPgDhkMmKmp2es21Wf
        subject_person_id: p_SSx59dvLsUEEyv9CC9o5HN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 功显君
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_a9jBEmobsT4fNbq3PwUZAq
          claim_id: c_zRCyHPgDhkMmKmp2es21Wf
          source_id: s_RatDq1uda51eaD8dvTv9s6
          stance: supports
          locator: Q55286323
          quotation: null
          interpretation_note: null
          source:
            id: s_RatDq1uda51eaD8dvTv9s6
            source_type: api_record
            title: 維基數據：功显君（Q55286323）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q55286323
            external_identifier: Q55286323
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:37.672Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%8A%9F%E6%98%BE%E5%90%9B
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_H1bxQqNG2bvBBPj24D5onh
        subject_person_id: p_SSx59dvLsUEEyv9CC9o5HN
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xN7tAHKk6W68mdWgNxHCZz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_C6K2VCF77avPnc2XoVbJ8X
          claim_id: c_H1bxQqNG2bvBBPj24D5onh
          source_id: s_6FVNxhGNZGZenpLdtfzxFq
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_6FVNxhGNZGZenpLdtfzxFq
            source_type: api_record
            title: 維基數據：王禁（Q2979420）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2979420
            external_identifier: Q2979420
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:27.787Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A6%81
        - id: cs_cM1d5pwaSqPQPgN8KrQbFN
          claim_id: c_H1bxQqNG2bvBBPj24D5onh
          source_id: s_RatDq1uda51eaD8dvTv9s6
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_RatDq1uda51eaD8dvTv9s6
            source_type: api_record
            title: 維基數據：功显君（Q55286323）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q55286323
            external_identifier: Q55286323
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:37.672Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%8A%9F%E6%98%BE%E5%90%9B
      object_person:
        id: p_xN7tAHKk6W68mdWgNxHCZz
        status: active
        display_name: 王禁
        merged_into_person_id: null
    - claim:
        id: c_RQeF4a94q9tzHzWqQPD5uF
        subject_person_id: p_93nrCbEef6Wj9vBChoFRH8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_SSx59dvLsUEEyv9CC9o5HN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x5GEQeDusGczZDeqxGvBJA
          claim_id: c_RQeF4a94q9tzHzWqQPD5uF
          source_id: s_CYUVY5eA5xN2LnmmyRkZ91
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 王曼之妻
          interpretation_note: null
          source:
            id: s_CYUVY5eA5xN2LnmmyRkZ91
            source_type: website
            title: 中文维基百科：功显君
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8A%9F%E6%98%BE%E5%90%9B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:20.158Z
            metadata_json: null
        - id: cs_V767xsnDoU8CYx2HwZUcxx
          claim_id: c_RQeF4a94q9tzHzWqQPD5uF
          source_id: s_cKN984PaAPjA5Ao4krPn51
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 王曼之妻
          interpretation_note: null
          source:
            id: s_cKN984PaAPjA5Ao4krPn51
            source_type: website
            title: 中文维基百科：功显君
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8A%9F%E6%98%BE%E5%90%9B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:50.048Z
            metadata_json: null
        - id: cs_LWgi5cg2cmQScbYLpZaD8E
          claim_id: c_RQeF4a94q9tzHzWqQPD5uF
          source_id: s_ni5VfJ6SrMiptCfTiE6VhG
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 王曼之妻
          interpretation_note: null
          source:
            id: s_ni5VfJ6SrMiptCfTiE6VhG
            source_type: website
            title: 中文维基百科：功显君
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8A%9F%E6%98%BE%E5%90%9B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:51.685Z
            metadata_json: null
        - id: cs_1aYZGXXRWU7eDcE9LZDAPH
          claim_id: c_RQeF4a94q9tzHzWqQPD5uF
          source_id: s_zkkHsiJTgaynPmECLxXx4J
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 王曼之妻
          interpretation_note: null
          source:
            id: s_zkkHsiJTgaynPmECLxXx4J
            source_type: website
            title: 中文维基百科：功显君
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8A%9F%E6%98%BE%E5%90%9B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:12.574Z
            metadata_json: null
      object_person:
        id: p_93nrCbEef6Wj9vBChoFRH8
        status: active
        display_name: 王曼
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 功显君

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 功显君（前1世纪—8年），姓渠氏，生卒不详，王曼之妻，王莽之母。 王曼早死，渠氏教育王莽读书。元始四年（4年）夏季，汉平帝封王莽的母亲为功显君，封王莽的两个儿子王安为褒新侯，王临为赏都侯。 | accepted |
| birth.date | 前1世纪 | accepted |
| name.primary | 功显君 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_xN7tAHKk6W68mdWgNxHCZz | 王禁 | accepted |
| spouses | p_93nrCbEef6Wj9vBChoFRH8 | 王曼 | accepted |

## 外部来源

- [維基數據：功显君（Q55286323）](https://www.wikidata.org/wiki/Q55286323)
- [維基數據：王禁（Q2979420）](https://www.wikidata.org/wiki/Q2979420)
- [中文维基百科：功显君](https://zh.wikipedia.org/wiki/%E5%8A%9F%E6%98%BE%E5%90%9B)
