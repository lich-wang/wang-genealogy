---
schema: wang-person/v1
id: p_E9kT5jEzU388HxnFt4wY8k
status: active
merged_into: null
display_name: 王氏 (福國夫人)
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1paQ2zJYQRQr9H4L1Dn8HV
        subject_person_id: p_E9kT5jEzU388HxnFt4wY8k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏 (福國夫人)，北宋王安石次女，封福國夫人，嫁蔡卞。维基数据以独立条目 Q141259120 收录该人物。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_vr2MN_-N848zlMoSJsX-jR
          claim_id: c_1paQ2zJYQRQr9H4L1Dn8HV
          source_id: s_8DGrmqJ7HkaASjju5cd8mF
          stance: supports
          locator: Q141259120
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_8DGrmqJ7HkaASjju5cd8mF
            source_type: api_record
            title: 维基数据：王氏 (福國夫人)（Q141259120）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q141259120
            external_identifier: Q141259120
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:01.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_56agyo7pY9KeMJhQ3mXuPu
        subject_person_id: p_E9kT5jEzU388HxnFt4wY8k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏 (福國夫人)
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CMvSY2538cTFMujc9bW5KZ
          claim_id: c_56agyo7pY9KeMJhQ3mXuPu
          source_id: s_8DGrmqJ7HkaASjju5cd8mF
          stance: supports
          locator: Q141259120
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_T9XWupLaqmwfwMmbg17ta5
        subject_person_id: p_fuv1kE3UCBeTFNiA6c9Tuw
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_E9kT5jEzU388HxnFt4wY8k
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3YHp8EgyKjfiqfC77G7sG4
          claim_id: c_T9XWupLaqmwfwMmbg17ta5
          source_id: s_8DGrmqJ7HkaASjju5cd8mF
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8DGrmqJ7HkaASjju5cd8mF
            source_type: api_record
            title: 维基数据：王氏 (福國夫人)（Q141259120）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q141259120
            external_identifier: Q141259120
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:01.055Z
            metadata_json: null
        - id: cs_CJqXzK5n136B1xjFqtjLrX
          claim_id: c_T9XWupLaqmwfwMmbg17ta5
          source_id: s_fLAce8PGeb2eAaVFYTSBka
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fLAce8PGeb2eAaVFYTSBka
            source_type: api_record
            title: 維基數據：王安石（Q319618）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q319618
            external_identifier: Q319618
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:55.261Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%89%E7%9F%B3
      object_person:
        id: p_fuv1kE3UCBeTFNiA6c9Tuw
        status: active
        display_name: 王安石
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_F44CgtB7DdXw8WHgfgusye
        subject_person_id: p_E9kT5jEzU388HxnFt4wY8k
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_m3ZaszmXMYNEpqJBcUTT1L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PqheEhFWDn1wHDULFqLkr2
          claim_id: c_F44CgtB7DdXw8WHgfgusye
          source_id: s_H4i1budjUUBriE5uAeSH3U
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_H4i1budjUUBriE5uAeSH3U
            source_type: api_record
            title: 维基数据：蔡卞（Q4391249）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q4391249
            external_identifier: Q4391249
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:46:30.695Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E8%94%A1%E5%8D%9E
        - id: cs_ntRFWV44QPqjgjCKPiKL46
          claim_id: c_F44CgtB7DdXw8WHgfgusye
          source_id: s_8DGrmqJ7HkaASjju5cd8mF
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_8DGrmqJ7HkaASjju5cd8mF
            source_type: api_record
            title: 维基数据：王氏 (福國夫人)（Q141259120）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q141259120
            external_identifier: Q141259120
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:01.055Z
            metadata_json: null
      object_person:
        id: p_m3ZaszmXMYNEpqJBcUTT1L
        status: active
        display_name: 蔡卞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王氏 (福國夫人)

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王氏 (福國夫人)，北宋王安石次女，封福國夫人，嫁蔡卞。维基数据以独立条目 Q141259120 收录该人物。 | accepted |
| name.primary | 王氏 (福國夫人) | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fuv1kE3UCBeTFNiA6c9Tuw | 王安石 | accepted |
| spouses | p_m3ZaszmXMYNEpqJBcUTT1L | 蔡卞 | accepted |

## 外部来源

- [维基数据：蔡卞（Q4391249）](https://www.wikidata.org/wiki/Q4391249)
- [维基数据：王氏 (福國夫人)（Q141259120）](https://www.wikidata.org/wiki/Q141259120)
- [維基數據：王安石（Q319618）](https://www.wikidata.org/wiki/Q319618)
