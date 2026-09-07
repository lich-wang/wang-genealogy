---
schema: wang-person/v1
id: p_swGTfUWn8frJNKHxALMCy1
status: active
merged_into: null
display_name: 秦國太夫人
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9lah4vk2Fh5oII6ZUMYLzw
        subject_person_id: p_swGTfUWn8frJNKHxALMCy1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 秦國太夫人，史料所见人物。本项目依据《秦國太夫人》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_etk6Q8M3PAJo_QOiQX-nPp
          claim_id: c_9lah4vk2Fh5oII6ZUMYLzw
          source_id: s_sFfUA5H75d1Su6JfpBLtcx
          stance: supports
          locator: Q17066741
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_sFfUA5H75d1Su6JfpBLtcx
            source_type: api_record
            title: 维基数据：秦國太夫人（Q17066741）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q17066741
            external_identifier: Q17066741
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:55.754Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E8%91%A3%E5%A4%AA%E5%A4%AB%E4%BA%BA
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NcVUWdGeDE8N3tuMSUE3ee
        subject_person_id: p_swGTfUWn8frJNKHxALMCy1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 秦國太夫人
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oNeoFV18LVHWRhmFW5Vu2r
          claim_id: c_NcVUWdGeDE8N3tuMSUE3ee
          source_id: s_sFfUA5H75d1Su6JfpBLtcx
          stance: supports
          locator: Q17066741
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
        id: c_Pqfw9Qd63cwKE5pQC8GQTU
        subject_person_id: p_isC86MUQVFAwxLka4hAUQm
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_swGTfUWn8frJNKHxALMCy1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TLLbzrFUN5DMnhwDRXSZHi
          claim_id: c_Pqfw9Qd63cwKE5pQC8GQTU
          source_id: s_sFfUA5H75d1Su6JfpBLtcx
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_sFfUA5H75d1Su6JfpBLtcx
            source_type: api_record
            title: 维基数据：秦國太夫人（Q17066741）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q17066741
            external_identifier: Q17066741
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:55.754Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E8%91%A3%E5%A4%AA%E5%A4%AB%E4%BA%BA
        - id: cs_TiVrbHfaSV1zQRPHMLD6AX
          claim_id: c_Pqfw9Qd63cwKE5pQC8GQTU
          source_id: s_RqEZvF3HBBL9kjQtbUJk14
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_RqEZvF3HBBL9kjQtbUJk14
            source_type: api_record
            title: 维基数据：王恁（Q10414256）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10414256
            external_identifier: Q10414256
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:43.213Z
            metadata_json: null
      object_person:
        id: p_isC86MUQVFAwxLka4hAUQm
        status: active
        display_name: 王恁
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 秦國太夫人

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 秦國太夫人，史料所见人物。本项目依据《秦國太夫人》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 秦國太夫人 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_isC86MUQVFAwxLka4hAUQm | 王恁 | accepted |

## 外部来源

- [维基数据：秦國太夫人（Q17066741）](https://www.wikidata.org/wiki/Q17066741)
- [维基数据：王恁（Q10414256）](https://www.wikidata.org/wiki/Q10414256)
