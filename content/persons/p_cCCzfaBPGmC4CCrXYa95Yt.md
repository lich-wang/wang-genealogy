---
schema: wang-person/v1
id: p_cCCzfaBPGmC4CCrXYa95Yt
status: active
merged_into: null
display_name: 王鉷
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BEsedk9YZAqgH9goPpSlMW
        subject_person_id: p_cCCzfaBPGmC4CCrXYa95Yt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉷（?—752年），太原郡祁县（今山西省祁县南）人，唐朝大臣，封太原县公，兼殿中监。祖父為唐朝西域名將王方翼。 史书未记载生年。天宝年间充京和市和籴使、户口色役使。每年搜括大量财物入内库。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4twuYrDTcQ_69WIGrMD-09
          claim_id: c_BEsedk9YZAqgH9goPpSlMW
          source_id: s_d0cSzmi0CQfj3gDEt97JRm
          stance: supports
          locator: 导言
          quotation: 王鉷（?—752年），太原郡祁县（今山西省祁县南）人，唐朝大臣，
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_d0cSzmi0CQfj3gDEt97JRm
            source_type: website
            title: 中文维基百科：王鉷
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%89%B7
            external_identifier: Q11572879
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2YScPmKsN8WbbAFFGzJko2
        subject_person_id: p_cCCzfaBPGmC4CCrXYa95Yt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 752年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0752-01-01
            latest: 0752-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tPGtKrCh94ZQdNs8i861Rq
          claim_id: c_2YScPmKsN8WbbAFFGzJko2
          source_id: s_xR4kPcS5hAGp2BvV9Zg9qj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_xR4kPcS5hAGp2BvV9Zg9qj
            source_type: api_record
            title: 维基数据：王鉷（Q11572879）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572879
            external_identifier: Q11572879
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:25.389Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%89%B7
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_b58H4qh1PDEKjgQe7Hy95d
        subject_person_id: p_cCCzfaBPGmC4CCrXYa95Yt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_st6wLG3J7HCKutjWMrmfTy
          claim_id: c_b58H4qh1PDEKjgQe7Hy95d
          source_id: s_xR4kPcS5hAGp2BvV9Zg9qj
          stance: supports
          locator: Q11572879
          quotation: null
          interpretation_note: null
          source:
            id: s_xR4kPcS5hAGp2BvV9Zg9qj
            source_type: api_record
            title: 维基数据：王鉷（Q11572879）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572879
            external_identifier: Q11572879
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:25.389Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%89%B7
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uY9z65ULPkpsS9sKLwihwa
        subject_person_id: p_SWj94NjtR8s9z11cKaR2Bx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cCCzfaBPGmC4CCrXYa95Yt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mSKL41x8rNSowB1ieHZ6TB
          claim_id: c_uY9z65ULPkpsS9sKLwihwa
          source_id: s_4FfCSxs5x4oN7PKmKxPivL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_4FfCSxs5x4oN7PKmKxPivL
            source_type: api_record
            title: 维基数据：王瑨（Q26209205）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26209205
            external_identifier: Q26209205
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:28.634Z
            metadata_json: null
        - id: cs_4pD9J4KU8BV55nEYsB9nVT
          claim_id: c_uY9z65ULPkpsS9sKLwihwa
          source_id: s_d0cSzmi0CQfj3gDEt97JRm
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_SWj94NjtR8s9z11cKaR2Bx
        status: active
        display_name: 王瑨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鉷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鉷（?—752年），太原郡祁县（今山西省祁县南）人，唐朝大臣，封太原县公，兼殿中监。祖父為唐朝西域名將王方翼。 史书未记载生年。天宝年间充京和市和籴使、户口色役使。每年搜括大量财物入内库。 | accepted |
| death.date | 752年 | accepted |
| name.primary | 王鉷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SWj94NjtR8s9z11cKaR2Bx | 王瑨 | accepted |

## 外部来源

- [维基数据：王鉷（Q11572879）](https://www.wikidata.org/wiki/Q11572879)
- [维基数据：王瑨（Q26209205）](https://www.wikidata.org/wiki/Q26209205)
- [中文维基百科：王鉷](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%89%B7)
