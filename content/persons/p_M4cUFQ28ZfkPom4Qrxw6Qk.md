---
schema: wang-person/v1
id: p_M4cUFQ28ZfkPom4Qrxw6Qk
status: active
merged_into: null
display_name: 王根
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NYYRb8vwpPvbgSKt7NZBcf
        subject_person_id: p_M4cUFQ28ZfkPom4Qrxw6Qk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王根（？—前6年），是西漢政治人物，封曲陽侯，曾任大司馬、驃騎將軍，並向漢成帝推薦王莽繼任其職。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jW4Dbfo8joyEBT9fKtb3ak
          claim_id: c_NYYRb8vwpPvbgSKt7NZBcf
          source_id: s_gW6AxHMsCb41Fdr2nXamB1
          stance: supports
          locator: 导言
          quotation: 为大司马、骠骑将军
          interpretation_note: 据人物条目导言概括生卒、籍贯与身份。
          source:
            id: s_gW6AxHMsCb41Fdr2nXamB1
            source_type: website
            title: 中文维基百科：王根
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A0%B9
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T13:35:26.936Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zi7FFZsN22JXDP7tysmytA
        subject_person_id: p_M4cUFQ28ZfkPom4Qrxw6Qk
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
        - id: cs_2z5CWV5QpWkxDFg5Kwuh2C
          claim_id: c_zi7FFZsN22JXDP7tysmytA
          source_id: s_ktGwBwmjXkYNmXq9pdDrBK
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_W6SsMDb4QWQTPSCAAC3CN3
        subject_person_id: p_M4cUFQ28ZfkPom4Qrxw6Qk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王根
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Mv91fcKjMocT7SdnuDAz5F
          claim_id: c_W6SsMDb4QWQTPSCAAC3CN3
          source_id: s_ktGwBwmjXkYNmXq9pdDrBK
          stance: supports
          locator: Q2250693
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
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ascCyPndfjySxPNsEZMMNf
        subject_person_id: p_xN7tAHKk6W68mdWgNxHCZz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M4cUFQ28ZfkPom4Qrxw6Qk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_h5ZkegC1EpGAjgEjwkvmjr
          claim_id: c_ascCyPndfjySxPNsEZMMNf
          source_id: s_6FVNxhGNZGZenpLdtfzxFq
          stance: supports
          locator: P40（子女）
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
        - id: cs_7aFsiY3t9L8AzDB3X5hDQj
          claim_id: c_ascCyPndfjySxPNsEZMMNf
          source_id: s_ktGwBwmjXkYNmXq9pdDrBK
          stance: supports
          locator: P22（父）
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
      object_person:
        id: p_xN7tAHKk6W68mdWgNxHCZz
        status: active
        display_name: 王禁
        merged_into_person_id: null
  children:
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
        id: p_CxozDAUbMf7RM6AjjJsYJZ
        status: active
        display_name: 王涉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王根

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王根（？—前6年），是西漢政治人物，封曲陽侯，曾任大司馬、驃騎將軍，並向漢成帝推薦王莽繼任其職。 | accepted |
| birth.date | 前1世纪 | accepted |
| name.primary | 王根 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xN7tAHKk6W68mdWgNxHCZz | 王禁 | accepted |
| children | p_CxozDAUbMf7RM6AjjJsYJZ | 王涉 | accepted |

## 外部来源

- [维基数据：王根（Q2250693）](https://www.wikidata.org/wiki/Q2250693)
- [维基数据：王涉（Q11573158）](https://www.wikidata.org/wiki/Q11573158)
- [維基數據：王禁（Q2979420）](https://www.wikidata.org/wiki/Q2979420)
- [中文维基百科：王根](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A0%B9)
- [中文维基百科：王涉](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B6%89)
