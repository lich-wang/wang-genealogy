---
schema: wang-person/v1
id: p_r3C7u8fpXnctvJwTH2YB5c
status: active
merged_into: null
display_name: 何澄
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9zvzTxAq_UwsTI2zyUPjR9
        subject_person_id: p_r3C7u8fpXnctvJwTH2YB5c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 何澄（1880年—1946年），原名何厚倜，號亞農。山西省灵石县人，中国企业家、政治人物。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_vcKsCmWTXoISolFouEbljw
          claim_id: c_9zvzTxAq_UwsTI2zyUPjR9
          source_id: s_FYDTHe3i7mNOKCUly0GQ8U
          stance: supports
          locator: 导言
          quotation: 何澄（1880年—1946年），原名何厚倜，號亞農。山西省灵石县
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_FYDTHe3i7mNOKCUly0GQ8U
            source_type: website
            title: 中文维基百科：何澄 (民國政治人物)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E4%BD%95%E6%BE%84_(%E6%B0%91%E5%9C%8B%E6%94%BF%E6%B2%BB%E4%BA%BA%E7%89%A9)
            external_identifier: Q10886319
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Adc5yP8zDCB58crn66RED5
        subject_person_id: p_r3C7u8fpXnctvJwTH2YB5c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 何澄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ptsddSBcnAqgmEAXGAAtGL
          claim_id: c_Adc5yP8zDCB58crn66RED5
          source_id: s_91QzV6nBkkDxNHNDYzuNa6
          stance: supports
          locator: Q10886319
          quotation: null
          interpretation_note: null
          source:
            id: s_91QzV6nBkkDxNHNDYzuNa6
            source_type: api_record
            title: 维基数据：何澄（Q10886319）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10886319
            external_identifier: Q10886319
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:46.494Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E4%BD%95%E6%BE%84_(%E6%B0%91%E5%9C%8B%E6%94%BF%E6%B2%BB%E4%BA%BA%E7%89%A9)
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_MDdmWxJHq5qBWQvyj6oJGB
        subject_person_id: p_6SVL4zVnbghtWnVRaFnJvW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_r3C7u8fpXnctvJwTH2YB5c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HpPSoP99AxNDRWKUNP7N3k
          claim_id: c_MDdmWxJHq5qBWQvyj6oJGB
          source_id: s_n6jyQysZNP86UPF3DCLMXM
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_n6jyQysZNP86UPF3DCLMXM
            source_type: api_record
            title: 维基数据：王季山（Q61306555）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q61306555
            external_identifier: Q61306555
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:42.168Z
            metadata_json: null
        - id: cs_LP9XDstiCGL8CgQuJCHANe
          claim_id: c_MDdmWxJHq5qBWQvyj6oJGB
          source_id: s_FYDTHe3i7mNOKCUly0GQ8U
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_6SVL4zVnbghtWnVRaFnJvW
        status: active
        display_name: 王季山
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 何澄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 何澄（1880年—1946年），原名何厚倜，號亞農。山西省灵石县人，中国企业家、政治人物。 | accepted |
| name.primary | 何澄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_6SVL4zVnbghtWnVRaFnJvW | 王季山 | accepted |

## 外部来源

- [维基数据：何澄（Q10886319）](https://www.wikidata.org/wiki/Q10886319)
- [维基数据：王季山（Q61306555）](https://www.wikidata.org/wiki/Q61306555)
- [中文维基百科：何澄 (民國政治人物)](https://zh.wikipedia.org/wiki/%E4%BD%95%E6%BE%84_(%E6%B0%91%E5%9C%8B%E6%94%BF%E6%B2%BB%E4%BA%BA%E7%89%A9))
