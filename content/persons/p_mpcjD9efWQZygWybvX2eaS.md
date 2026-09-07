---
schema: wang-person/v1
id: p_mpcjD9efWQZygWybvX2eaS
status: active
merged_into: null
display_name: 王簡姬
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tL5wyNYyH0Lck2TXFfOtqi
        subject_person_id: p_mpcjD9efWQZygWybvX2eaS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簡姬，史料所见人物。本项目依据《王簡姬》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EUazkS8TjPhBRmQa85ybcO
          claim_id: c_tL5wyNYyH0Lck2TXFfOtqi
          source_id: s_AMHT8qnCk5YLsEdU872n4Q
          stance: supports
          locator: Q8258381
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_AMHT8qnCk5YLsEdU872n4Q
            source_type: api_record
            title: 维基数据：王簡姬（Q8258381）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q8258381
            external_identifier: Q8258381
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:39.186Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B0%A1%E5%A7%AC
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5FXAaeyENbv88Wf33LtsHY
        subject_person_id: p_mpcjD9efWQZygWybvX2eaS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簡姬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Aqu7yKpn15pd1M9uw2sCis
          claim_id: c_5FXAaeyENbv88Wf33LtsHY
          source_id: s_AMHT8qnCk5YLsEdU872n4Q
          stance: supports
          locator: Q8258381
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
        id: c_dvMLFNKHn7SFUN5K8QQuFJ
        subject_person_id: p_T49nNrvG7eN5Df4XUYh6s9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_mpcjD9efWQZygWybvX2eaS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_pDj2J7C4yiCwtvW8EFZD3W
          claim_id: c_dvMLFNKHn7SFUN5K8QQuFJ
          source_id: s_SZ2PsCCWUesdzmx2e8Qw4C
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_SZ2PsCCWUesdzmx2e8Qw4C
            source_type: api_record
            title: 维基数据：晋简文帝（Q7400）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7400
            external_identifier: Q7400
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:58.887Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E6%99%89%E7%B0%A1%E6%96%87%E5%B8%9D
        - id: cs_evPeNPhMEuiHYbLQeN3Abd
          claim_id: c_dvMLFNKHn7SFUN5K8QQuFJ
          source_id: s_AMHT8qnCk5YLsEdU872n4Q
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_AMHT8qnCk5YLsEdU872n4Q
            source_type: api_record
            title: 维基数据：王簡姬（Q8258381）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q8258381
            external_identifier: Q8258381
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:39.186Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B0%A1%E5%A7%AC
      object_person:
        id: p_T49nNrvG7eN5Df4XUYh6s9
        status: active
        display_name: 司馬昱
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王簡姬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王簡姬，史料所见人物。本项目依据《王簡姬》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王簡姬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_T49nNrvG7eN5Df4XUYh6s9 | 司馬昱 | accepted |

## 外部来源

- [维基数据：晋简文帝（Q7400）](https://www.wikidata.org/wiki/Q7400)
- [维基数据：王簡姬（Q8258381）](https://www.wikidata.org/wiki/Q8258381)
