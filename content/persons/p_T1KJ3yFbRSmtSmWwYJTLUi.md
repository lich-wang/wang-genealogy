---
schema: wang-person/v1
id: p_T1KJ3yFbRSmtSmWwYJTLUi
status: active
merged_into: null
display_name: 王林
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_OFuBRzh-axl5Z3bFm-6L5W
        subject_person_id: p_T1KJ3yFbRSmtSmWwYJTLUi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王林（？—23年），西汉外戚，新朝宗室，王莽的安新公王舜之子，哥哥王匡、王延。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_3_ps75m0kP49qcop3dYAJG
          claim_id: c_OFuBRzh-axl5Z3bFm-6L5W
          source_id: s_nJ1io3yW3l2kw6462c5YsB
          stance: supports
          locator: 导言
          quotation: 王林（？—23年），西汉外戚，新朝宗室，王莽的安新公王舜之子，哥
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_nJ1io3yW3l2kw6462c5YsB
            source_type: website
            title: 中文维基百科：王林 (西汉)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9E%97_(%E8%A5%BF%E6%B1%89)
            external_identifier: Q26209953
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-11T10:29:31.867Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hQ5HUvka412ubEApPrKRvV
        subject_person_id: p_T1KJ3yFbRSmtSmWwYJTLUi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王林
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CC8arHWXVFo8uS8hLEAua6
          claim_id: c_hQ5HUvka412ubEApPrKRvV
          source_id: s_sRFCwvBCTdrRUa1NYUsseP
          stance: supports
          locator: Q26209953
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
      object_person: null
    alternatives: []
relationships:
  parents:
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

# 王林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王林（？—23年），西汉外戚，新朝宗室，王莽的安新公王舜之子，哥哥王匡、王延。 | accepted |
| name.primary | 王林 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_b2HpS1yMZuN469vnGZ64c2 | 王舜 | accepted |

## 外部来源

- [维基数据：王林（Q26209953）](https://www.wikidata.org/wiki/Q26209953)
- [维基数据：王舜（Q10955413）](https://www.wikidata.org/wiki/Q10955413)
- [中文维基百科：王林 (西汉)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%9E%97_(%E8%A5%BF%E6%B1%89))
