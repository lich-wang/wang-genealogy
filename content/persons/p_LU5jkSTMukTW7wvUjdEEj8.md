---
schema: wang-person/v1
id: p_LU5jkSTMukTW7wvUjdEEj8
status: active
merged_into: null
display_name: 郑氏
cbdb_id: 254717
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RAc9LvgqRa6CcgFGWMLpr6
        subject_person_id: p_LU5jkSTMukTW7wvUjdEEj8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 郑氏，明人物。成化十七年進士。（中国历代人物传记资料库 CBDB 254717）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_dootK08VPAmj5HiesXPKkK
          claim_id: c_RAc9LvgqRa6CcgFGWMLpr6
          source_id: s_FStcAKfYwUBrRQjSHjruaN
          stance: supports
          locator: CBDB:254717
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_FStcAKfYwUBrRQjSHjruaN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：鄭氏（254717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254717&o=json
            external_identifier: CBDB:254717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:08.678Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ApQ3fNHQNmjJ1Zud2r2ABr
        subject_person_id: p_LU5jkSTMukTW7wvUjdEEj8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 郑氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9mk1fFDfLBmd3CMfKpcNQs
          claim_id: c_ApQ3fNHQNmjJ1Zud2r2ABr
          source_id: s_T3QA2Ljq3EdU8Zo75TmiuU
          stance: supports
          locator: Q65859933
          quotation: null
          interpretation_note: null
          source:
            id: s_T3QA2Ljq3EdU8Zo75TmiuU
            source_type: api_record
            title: 维基数据：郑氏（Q65859933）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65859933
            external_identifier: Q65859933
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:50:08.547Z
            metadata_json: null
        - id: cs_Mxq9kEWMUE6Q8FYfF6MP57
          claim_id: c_ApQ3fNHQNmjJ1Zud2r2ABr
          source_id: s_FStcAKfYwUBrRQjSHjruaN
          stance: supports
          locator: Q65859933
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_S5TKHQrC19jYrzqk5u24Dy
        subject_person_id: p_LU5jkSTMukTW7wvUjdEEj8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_NbC2Uf3vWCE2LtQoDVqumA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_FcKeJH99HUFGz4V9gTdEFo
          claim_id: c_S5TKHQrC19jYrzqk5u24Dy
          source_id: s_MS8MKyScQ3U4ija1uLMsVk
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_MS8MKyScQ3U4ija1uLMsVk
            source_type: api_record
            title: 維基數據：王华（Q15924849）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15924849
            external_identifier: Q15924849
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:10.302Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%8E_(%E6%98%8E%E6%9C%9D)
        - id: cs_a2pQr2ZCqSo7C2mAPxbufG
          claim_id: c_S5TKHQrC19jYrzqk5u24Dy
          source_id: s_T3QA2Ljq3EdU8Zo75TmiuU
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_T3QA2Ljq3EdU8Zo75TmiuU
            source_type: api_record
            title: 维基数据：郑氏（Q65859933）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65859933
            external_identifier: Q65859933
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:50:08.547Z
            metadata_json: null
      object_person:
        id: p_NbC2Uf3vWCE2LtQoDVqumA
        status: active
        display_name: 王华
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 郑氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 郑氏，明人物。成化十七年進士。（中国历代人物传记资料库 CBDB 254717） | accepted |
| name.primary | 郑氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_NbC2Uf3vWCE2LtQoDVqumA | 王华 | accepted |

## 外部来源

- [维基数据：郑氏（Q65859933）](https://www.wikidata.org/wiki/Q65859933)
- [維基數據：王华（Q15924849）](https://www.wikidata.org/wiki/Q15924849)
- [CBDB 中国历代人物传记资料库：鄭氏（254717）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254717&o=json)
