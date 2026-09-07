---
schema: wang-person/v1
id: p_xYLfdjJyU3zf8D5ctLUyQo
status: active
merged_into: null
display_name: 博平君
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_OxYDYKbJHz32KQ6vX2taxR
        subject_person_id: p_xYLfdjJyU3zf8D5ctLUyQo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 博平君（前2世纪—前66年），即王媼，西汉涿郡蠡吾平鄉（今河北省博野县）人，汉宣帝的外祖母。 王媼说自己名叫妄人，十四岁时，嫁给同鄉王更得为妻。王更得死後，嫁给廣望（今河北省清苑县西南）王迺始，生下儿子王無故、王武，女儿王翁須。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_s18h7ObkbAnCEcFrdAlvny
          claim_id: c_OxYDYKbJHz32KQ6vX2taxR
          source_id: s_S3X_PTWjjq2IJ-n9GT71Gb
          stance: supports
          locator: 导言
          quotation: 博平君（前2世纪—前66年），即王媼，西汉涿郡蠡吾平鄉（今河北省
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_S3X_PTWjjq2IJ-n9GT71Gb
            source_type: website
            title: 中文维基百科：博平君
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8D%9A%E5%B9%B3%E5%90%9B
            external_identifier: Q85876908
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dY3KBk3xV7PZyRWxAbC1PN
        subject_person_id: p_xYLfdjJyU3zf8D5ctLUyQo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 前2世纪
            calendar_note: 维基数据 P569 结构化日期，精度：世纪
            earliest: -0200-01-01
            latest: -0101-12-31
            precision: century
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dEMrMU9Y9JP5aoYiu42J3F
          claim_id: c_dY3KBk3xV7PZyRWxAbC1PN
          source_id: s_m3BJ7LRyCAM16EoqpcwauY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_m3BJ7LRyCAM16EoqpcwauY
            source_type: api_record
            title: 维基数据：博平君（Q85876908）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q85876908
            external_identifier: Q85876908
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:51.250Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%8D%9A%E5%B9%B3%E5%90%9B
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UFrZQq152Q46NuKm5FpaG8
        subject_person_id: p_xYLfdjJyU3zf8D5ctLUyQo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 博平君
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5vydriDnZhPJs8ZUEf3Exc
          claim_id: c_UFrZQq152Q46NuKm5FpaG8
          source_id: s_m3BJ7LRyCAM16EoqpcwauY
          stance: supports
          locator: Q85876908
          quotation: null
          interpretation_note: null
          source:
            id: s_m3BJ7LRyCAM16EoqpcwauY
            source_type: api_record
            title: 维基数据：博平君（Q85876908）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q85876908
            external_identifier: Q85876908
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:51.250Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%8D%9A%E5%B9%B3%E5%90%9B
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_qEC91ghRCWVKwhgPBjV5Bg
        subject_person_id: p_cu518yUajb6WPKMAjP8xPC
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xYLfdjJyU3zf8D5ctLUyQo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_UFgcQkXRMpL8ukkF3MNF7U
          claim_id: c_qEC91ghRCWVKwhgPBjV5Bg
          source_id: s_m3BJ7LRyCAM16EoqpcwauY
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_m3BJ7LRyCAM16EoqpcwauY
            source_type: api_record
            title: 维基数据：博平君（Q85876908）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q85876908
            external_identifier: Q85876908
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:51.250Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%8D%9A%E5%B9%B3%E5%90%9B
        - id: cs_wUDLYkMmmac4zokeRfcvvq
          claim_id: c_qEC91ghRCWVKwhgPBjV5Bg
          source_id: s_3bkVPnoF9s87incRA2S8cb
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_3bkVPnoF9s87incRA2S8cb
            source_type: api_record
            title: 维基数据：王乃始（Q85882454）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q85882454
            external_identifier: Q85882454
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:52.789Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
      object_person:
        id: p_cu518yUajb6WPKMAjP8xPC
        status: active
        display_name: 王乃始
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 博平君

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 博平君（前2世纪—前66年），即王媼，西汉涿郡蠡吾平鄉（今河北省博野县）人，汉宣帝的外祖母。 王媼说自己名叫妄人，十四岁时，嫁给同鄉王更得为妻。王更得死後，嫁给廣望（今河北省清苑县西南）王迺始，生下儿子王無故、王武，女儿王翁須。 | accepted |
| birth.date | 前2世纪 | accepted |
| name.primary | 博平君 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_cu518yUajb6WPKMAjP8xPC | 王乃始 | accepted |

## 外部来源

- [维基数据：博平君（Q85876908）](https://www.wikidata.org/wiki/Q85876908)
- [维基数据：王乃始（Q85882454）](https://www.wikidata.org/wiki/Q85882454)
- [中文维基百科：博平君](https://zh.wikipedia.org/wiki/%E5%8D%9A%E5%B9%B3%E5%90%9B)
