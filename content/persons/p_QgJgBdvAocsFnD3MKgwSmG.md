---
schema: wang-person/v1
id: p_QgJgBdvAocsFnD3MKgwSmG
status: active
merged_into: null
display_name: 王锡 (刘宋)
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e22SbJ9BtTlOpE0MC4PrFx
        subject_person_id: p_QgJgBdvAocsFnD3MKgwSmG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王锡 (刘宋)（生于5世纪），史料所见人物。本项目依据《王锡 (刘宋)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_H33xhQJOaAXBWI-bU3hQOD
          claim_id: c_e22SbJ9BtTlOpE0MC4PrFx
          source_id: s_f9JBRRQD4Kfyto3KMYKi4H
          stance: supports
          locator: Q15934611
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_f9JBRRQD4Kfyto3KMYKi4H
            source_type: api_record
            title: 维基数据：王锡 (刘宋)（Q15934611）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934611
            external_identifier: Q15934611
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:37.276Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1_(%E5%88%98%E5%AE%8B)
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Fy9mKfukHYwHTSBpRfohow
        subject_person_id: p_QgJgBdvAocsFnD3MKgwSmG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 5世纪
            calendar_note: 维基数据 P569 结构化日期，精度：世纪
            earliest: 0401-01-01
            latest: 0500-12-31
            precision: century
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PqGt6NvHSwc8rngAtbQVkr
          claim_id: c_Fy9mKfukHYwHTSBpRfohow
          source_id: s_f9JBRRQD4Kfyto3KMYKi4H
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_f9JBRRQD4Kfyto3KMYKi4H
            source_type: api_record
            title: 维基数据：王锡 (刘宋)（Q15934611）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934611
            external_identifier: Q15934611
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:37.276Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1_(%E5%88%98%E5%AE%8B)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_i8Xq1JXgS5QascxT8HhGhh
        subject_person_id: p_QgJgBdvAocsFnD3MKgwSmG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王锡 (刘宋)
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TgokhSzNf5rKSrVmVY11qo
          claim_id: c_i8Xq1JXgS5QascxT8HhGhh
          source_id: s_f9JBRRQD4Kfyto3KMYKi4H
          stance: supports
          locator: Q15934611
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vZ7QEiw9VF46pA61B8CwJW
        subject_person_id: p_wAdfiazuRFBS2fVaGyZDMH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QgJgBdvAocsFnD3MKgwSmG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_gfPKYWG9vAUo6bDjzjst3Q
          claim_id: c_vZ7QEiw9VF46pA61B8CwJW
          source_id: s_581foiPcqchzRod141ue3p
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_581foiPcqchzRod141ue3p
            source_type: api_record
            title: 维基数据：王弘（Q557716）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q557716
            external_identifier: Q557716
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:58.886Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BC%98_(%E5%85%AD%E6%9C%9D)
        - id: cs_T7huc2P1fvBETjH5PQr5a5
          claim_id: c_vZ7QEiw9VF46pA61B8CwJW
          source_id: s_f9JBRRQD4Kfyto3KMYKi4H
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_f9JBRRQD4Kfyto3KMYKi4H
            source_type: api_record
            title: 维基数据：王锡 (刘宋)（Q15934611）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934611
            external_identifier: Q15934611
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:37.276Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1_(%E5%88%98%E5%AE%8B)
      object_person:
        id: p_wAdfiazuRFBS2fVaGyZDMH
        status: active
        display_name: 王弘
        merged_into_person_id: null
  children:
    - claim:
        id: c_EBf8hmkUXq4HGMNTvuvU5X
        subject_person_id: p_QgJgBdvAocsFnD3MKgwSmG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w4zhChFcabvEjJD4vJgovo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_gkGGnHmf68qopNGMV75BEN
          claim_id: c_EBf8hmkUXq4HGMNTvuvU5X
          source_id: s_f9JBRRQD4Kfyto3KMYKi4H
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_f9JBRRQD4Kfyto3KMYKi4H
            source_type: api_record
            title: 维基数据：王锡 (刘宋)（Q15934611）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934611
            external_identifier: Q15934611
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:37.276Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1_(%E5%88%98%E5%AE%8B)
        - id: cs_E2WFKUmVPG1kHgKfUJjXmC
          claim_id: c_EBf8hmkUXq4HGMNTvuvU5X
          source_id: s_HDK4eHW85H89PVkViQkZE7
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_HDK4eHW85H89PVkViQkZE7
            source_type: api_record
            title: 维基数据：王僧亮（Q16905834）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16905834
            external_identifier: Q16905834
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:10.844Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E4%BA%AE
        - id: cs_fQ85iBRAa3y7ZUgqazSHgi
          claim_id: c_EBf8hmkUXq4HGMNTvuvU5X
          source_id: s_u7UCZVXMbN8eDHJaEP5XwB
          stance: supports
          locator: 条文：之子/之女
          quotation: 王僧亮（{{bd|？||？||}}），琅邪临沂人，王珣曾孙，王弘之孙，王锡之子，王僧衍的哥哥
          interpretation_note: null
          source:
            id: s_u7UCZVXMbN8eDHJaEP5XwB
            source_type: website
            title: 中文维基百科：王僧亮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E4%BA%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:07.445Z
            metadata_json: null
        - id: cs_oYLN4yFSU8b95pqtJBvpcY
          claim_id: c_EBf8hmkUXq4HGMNTvuvU5X
          source_id: s_dw5bD8sBXqs8QmqS8VkJNR
          stance: supports
          locator: 条文：之子/之女
          quotation: 王僧亮，琅邪临沂人，王珣曾孙，王弘之孙，王锡之子，王僧衍的哥哥
          interpretation_note: null
          source:
            id: s_dw5bD8sBXqs8QmqS8VkJNR
            source_type: website
            title: 中文维基百科：王僧亮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E4%BA%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:55.882Z
            metadata_json: null
      object_person:
        id: p_w4zhChFcabvEjJD4vJgovo
        status: active
        display_name: 王僧亮
        merged_into_person_id: null
    - claim:
        id: c_Cn5aJcjH8f13w361pXsJmF
        subject_person_id: p_QgJgBdvAocsFnD3MKgwSmG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MZZjMah11dpZSqww6KpUSA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_nhY1tvdxYdzTtYuzYKh3uR
          claim_id: c_Cn5aJcjH8f13w361pXsJmF
          source_id: s_f9JBRRQD4Kfyto3KMYKi4H
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_f9JBRRQD4Kfyto3KMYKi4H
            source_type: api_record
            title: 维基数据：王锡 (刘宋)（Q15934611）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15934611
            external_identifier: Q15934611
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:37.276Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1_(%E5%88%98%E5%AE%8B)
        - id: cs_ZpDd8oMA3uFU3aWSApgED5
          claim_id: c_Cn5aJcjH8f13w361pXsJmF
          source_id: s_tEUTAG2jCUWNyqv8tTJMUe
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_tEUTAG2jCUWNyqv8tTJMUe
            source_type: api_record
            title: 维基数据：王僧衍（Q16905835）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16905835
            external_identifier: Q16905835
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:12.733Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E8%A1%8D
      object_person:
        id: p_MZZjMah11dpZSqww6KpUSA
        status: active
        display_name: 王僧衍
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王锡 (刘宋)

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王锡 (刘宋)（生于5世纪），史料所见人物。本项目依据《王锡 (刘宋)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 5世纪 | accepted |
| name.primary | 王锡 (刘宋) | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wAdfiazuRFBS2fVaGyZDMH | 王弘 | accepted |
| children | p_w4zhChFcabvEjJD4vJgovo | 王僧亮 | accepted |
| children | p_MZZjMah11dpZSqww6KpUSA | 王僧衍 | accepted |

## 外部来源

- [维基数据：王弘（Q557716）](https://www.wikidata.org/wiki/Q557716)
- [维基数据：王僧亮（Q16905834）](https://www.wikidata.org/wiki/Q16905834)
- [维基数据：王僧衍（Q16905835）](https://www.wikidata.org/wiki/Q16905835)
- [维基数据：王锡 (刘宋)（Q15934611）](https://www.wikidata.org/wiki/Q15934611)
- [中文维基百科：王僧亮](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E4%BA%AE)
