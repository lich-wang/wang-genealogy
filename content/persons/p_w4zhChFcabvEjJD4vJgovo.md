---
schema: wang-person/v1
id: p_w4zhChFcabvEjJD4vJgovo
status: active
merged_into: null
display_name: 王僧亮
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SSXU--DKDBQHskV-4FOAwx
        subject_person_id: p_w4zhChFcabvEjJD4vJgovo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僧亮，史料所见人物。本项目依据《王僧亮》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_MFkY1yoBSico8OsA-UWCkJ
          claim_id: c_SSXU--DKDBQHskV-4FOAwx
          source_id: s_HDK4eHW85H89PVkViQkZE7
          stance: supports
          locator: Q16905834
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sUJuyb64jGXCTxT5pRDaUJ
        subject_person_id: p_w4zhChFcabvEjJD4vJgovo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僧亮
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AHQQrHgMqaqJ2aonPnwQZ7
          claim_id: c_sUJuyb64jGXCTxT5pRDaUJ
          source_id: s_HDK4eHW85H89PVkViQkZE7
          stance: supports
          locator: Q16905834
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_QgJgBdvAocsFnD3MKgwSmG
        status: active
        display_name: 王锡 (刘宋)
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_TcbBf37MZdqw8YtaAagivm
        subject_person_id: p_ojGchAZHmRHY7mAfMcQCu4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_w4zhChFcabvEjJD4vJgovo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NTqYxXQ9YiKTyTGn9KajSY
          claim_id: c_TcbBf37MZdqw8YtaAagivm
          source_id: s_u7UCZVXMbN8eDHJaEP5XwB
          stance: supports
          locator: 条文：条文识读（曾孙）（3世）
          quotation: 王珣曾孙，王弘之孙，王锡之子
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
        - id: cs_SECcbRUNSYjQA9X4qQRXDd
          claim_id: c_TcbBf37MZdqw8YtaAagivm
          source_id: s_dw5bD8sBXqs8QmqS8VkJNR
          stance: supports
          locator: 条文：条文识读（ancestor）（3世）
          quotation: 王珣曾孙，王弘之孙，王锡之子
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
        id: p_ojGchAZHmRHY7mAfMcQCu4
        status: active
        display_name: 王珣
        merged_into_person_id: null
    - claim:
        id: c_mHeanBDZAQZXxkHtLcVzDM
        subject_person_id: p_wAdfiazuRFBS2fVaGyZDMH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_w4zhChFcabvEjJD4vJgovo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9KN9CyTp57QQh6dnv197LD
          claim_id: c_mHeanBDZAQZXxkHtLcVzDM
          source_id: s_dw5bD8sBXqs8QmqS8VkJNR
          stance: supports
          locator: 条文：条文识读（ancestor）（3世）
          quotation: 王珣曾孙，王弘之孙，王锡之子
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
        id: p_wAdfiazuRFBS2fVaGyZDMH
        status: active
        display_name: 王弘
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王僧亮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王僧亮，史料所见人物。本项目依据《王僧亮》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王僧亮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QgJgBdvAocsFnD3MKgwSmG | 王锡 (刘宋) | accepted |
| ancestors | p_ojGchAZHmRHY7mAfMcQCu4 | 王珣 | accepted |
| ancestors | p_wAdfiazuRFBS2fVaGyZDMH | 王弘 | accepted |

## 外部来源

- [维基数据：王僧亮（Q16905834）](https://www.wikidata.org/wiki/Q16905834)
- [维基数据：王锡 (刘宋)（Q15934611）](https://www.wikidata.org/wiki/Q15934611)
- [中文维基百科：王僧亮](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E4%BA%AE)
