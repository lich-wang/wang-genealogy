---
schema: wang-person/v1
id: p_t5YJCyLVgamk2ryvNfSQRD
status: active
merged_into: null
display_name: 陳嫻貞
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sckp_i-JOXgsPuPWPW4yU6
        subject_person_id: p_t5YJCyLVgamk2ryvNfSQRD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳嫻貞，史料所见人物。本项目依据《陳嫻貞》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y7RTQ2z8byFUJnYABzKLM_
          claim_id: c_sckp_i-JOXgsPuPWPW4yU6
          source_id: s_BgmynGx98mSb4H6RpCzBL5
          stance: supports
          locator: Q98066513
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_BgmynGx98mSb4H6RpCzBL5
            source_type: api_record
            title: 维基数据：陳嫻貞（Q98066513）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q98066513
            external_identifier: Q98066513
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:11.128Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fqF4rofD4fbLLa2eMHs5Hs
        subject_person_id: p_t5YJCyLVgamk2ryvNfSQRD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳嫻貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UNrqRjUudR8jCNCFeg2tcF
          claim_id: c_fqF4rofD4fbLLa2eMHs5Hs
          source_id: s_BgmynGx98mSb4H6RpCzBL5
          stance: supports
          locator: Q98066513
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
        id: c_f124w6XTKk1m8q8hGzUtUM
        subject_person_id: p_t5YJCyLVgamk2ryvNfSQRD
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_w6vEJmAb51YJF1UuTN4943
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jBBv2FRVUXT6bSEK88BqGe
          claim_id: c_f124w6XTKk1m8q8hGzUtUM
          source_id: s_CFM8wMEHDJDSsm7Y872D6X
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_CFM8wMEHDJDSsm7Y872D6X
            source_type: api_record
            title: 维基数据：王孝總（Q98066484）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q98066484
            external_identifier: Q98066484
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:15.904Z
            metadata_json: null
        - id: cs_cAi1NCEtW4G7cvfVXNkogw
          claim_id: c_f124w6XTKk1m8q8hGzUtUM
          source_id: s_BgmynGx98mSb4H6RpCzBL5
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_w6vEJmAb51YJF1UuTN4943
        status: active
        display_name: 王孝總
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳嫻貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陳嫻貞，史料所见人物。本项目依据《陳嫻貞》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 陳嫻貞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_w6vEJmAb51YJF1UuTN4943 | 王孝總 | accepted |

## 外部来源

- [维基数据：陳嫻貞（Q98066513）](https://www.wikidata.org/wiki/Q98066513)
- [维基数据：王孝總（Q98066484）](https://www.wikidata.org/wiki/Q98066484)
