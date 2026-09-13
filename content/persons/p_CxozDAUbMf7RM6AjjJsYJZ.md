---
schema: wang-person/v1
id: p_CxozDAUbMf7RM6AjjJsYJZ
status: active
merged_into: null
display_name: 王涉
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_krb8ksZbFr3ehpNcpYsYZJ
        subject_person_id: p_CxozDAUbMf7RM6AjjJsYJZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王涉（？—23年），新朝宗室，王莽七叔曲阳侯王根之子。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_LzRDP9JcyoOwGMZWGd2SQh
          claim_id: c_krb8ksZbFr3ehpNcpYsYZJ
          source_id: s_rS7Ft5lV2hMTDpNsPN0u6u
          stance: supports
          locator: 导言
          quotation: 王涉（？—23年），新朝宗室，王莽七叔曲阳侯王根之子。
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_rS7Ft5lV2hMTDpNsPN0u6u
            source_type: website
            title: 中文维基百科：王涉
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B6%89
            external_identifier: Q11573158
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-11T10:29:31.867Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_TxPFhBn3YjKwQMJaiCHC9q
        subject_person_id: p_CxozDAUbMf7RM6AjjJsYJZ
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
        - id: cs_9pAy9Q33PfJF1t6oyPxBea
          claim_id: c_TxPFhBn3YjKwQMJaiCHC9q
          source_id: s_78qq1bRj68RuV8ojGzTVK5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_78qq1bRj68RuV8ojGzTVK5
            source_type: api_record
            title: 维基数据：王涉（Q11573158）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573158
            external_identifier: Q11573158
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:19.655Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B6%89
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_h3BeVfKJHLxzCf7gTB4pCw
        subject_person_id: p_CxozDAUbMf7RM6AjjJsYJZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王涉
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_C4EWmeK14XtPYeqvNM6s7N
          claim_id: c_h3BeVfKJHLxzCf7gTB4pCw
          source_id: s_78qq1bRj68RuV8ojGzTVK5
          stance: supports
          locator: Q11573158
          quotation: null
          interpretation_note: null
          source:
            id: s_78qq1bRj68RuV8ojGzTVK5
            source_type: api_record
            title: 维基数据：王涉（Q11573158）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573158
            external_identifier: Q11573158
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:19.655Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B6%89
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1j4EMzjynVjoty69EftVtX
        subject_person_id: p_M4cUFQ28ZfkPom4Qrxw6Qk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CxozDAUbMf7RM6AjjJsYJZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9kc6hLvJHHFJG9VN1VZ9tM
          claim_id: c_1j4EMzjynVjoty69EftVtX
          source_id: s_ktGwBwmjXkYNmXq9pdDrBK
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_ktGwBwmjXkYNmXq9pdDrBK
            source_type: api_record
            title: 维基数据：王根（Q2250693）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q2250693
            external_identifier: Q2250693
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:41.017Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A0%B9
        - id: cs_XqvPmFZK7w1cBBFK8z6rMp
          claim_id: c_1j4EMzjynVjoty69EftVtX
          source_id: s_78qq1bRj68RuV8ojGzTVK5
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_78qq1bRj68RuV8ojGzTVK5
            source_type: api_record
            title: 维基数据：王涉（Q11573158）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573158
            external_identifier: Q11573158
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:19.655Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B6%89
        - id: cs_J5wBakGc6amULn2JGM6zyf
          claim_id: c_1j4EMzjynVjoty69EftVtX
          source_id: s_AiEd1BByqVgtu6FNYLpd6X
          stance: supports
          locator: 条文：之子/之女
          quotation: 王涉{{BD|？||23年|}}，新朝宗室，王莽七叔曲阳侯王根之子
          interpretation_note: null
          source:
            id: s_AiEd1BByqVgtu6FNYLpd6X
            source_type: website
            title: 中文维基百科：王涉
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B6%89
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:49.291Z
            metadata_json: null
        - id: cs_2sy2pHZmnFwEeAZLM5g4V9
          claim_id: c_1j4EMzjynVjoty69EftVtX
          source_id: s_xhHe8Afrmz8SLviMVTAkHc
          stance: supports
          locator: 条文：之子/之女
          quotation: 王涉，新朝宗室，王莽七叔曲阳侯王根之子
          interpretation_note: null
          source:
            id: s_xhHe8Afrmz8SLviMVTAkHc
            source_type: website
            title: 中文维基百科：王涉
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B6%89
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:36.925Z
            metadata_json: null
      object_person:
        id: p_M4cUFQ28ZfkPom4Qrxw6Qk
        status: active
        display_name: 王根
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王涉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王涉（？—23年），新朝宗室，王莽七叔曲阳侯王根之子。 | accepted |
| death.date | 23年 | accepted |
| name.primary | 王涉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_M4cUFQ28ZfkPom4Qrxw6Qk | 王根 | accepted |

## 外部来源

- [维基数据：王根（Q2250693）](https://www.wikidata.org/wiki/Q2250693)
- [维基数据：王涉（Q11573158）](https://www.wikidata.org/wiki/Q11573158)
- [中文维基百科：王涉](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B6%89)
