---
schema: wang-person/v1
id: p_wAdfiazuRFBS2fVaGyZDMH
status: active
merged_into: null
display_name: 王弘
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a3g1ZUDQpNi756MnEuqtAS
        subject_person_id: p_wAdfiazuRFBS2fVaGyZDMH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘（379年—432年），史料所见人物。本项目依据《王弘》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_fLXbUdeUgZEZMNGPD5DENl
          claim_id: c_a3g1ZUDQpNi756MnEuqtAS
          source_id: s_581foiPcqchzRod141ue3p
          stance: supports
          locator: Q557716
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_bKYSPsiKT91Wc5KFw8mQsm
        subject_person_id: p_wAdfiazuRFBS2fVaGyZDMH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 379年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0379-01-01
            latest: 0379-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EdKC4bLeE3frLgGVtBb6Gm
          claim_id: c_bKYSPsiKT91Wc5KFw8mQsm
          source_id: s_581foiPcqchzRod141ue3p
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Wt34ThEVweuXX8XUBxQLKN
        subject_person_id: p_wAdfiazuRFBS2fVaGyZDMH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 432年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0432-01-01
            latest: 0432-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rFCuLk3774Qy2t6aFP85F8
          claim_id: c_Wt34ThEVweuXX8XUBxQLKN
          source_id: s_581foiPcqchzRod141ue3p
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EB1fhcFDpXM4Qgbu6sF6DN
        subject_person_id: p_wAdfiazuRFBS2fVaGyZDMH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iCKN2kuH8hkzGm3zw9KazC
          claim_id: c_EB1fhcFDpXM4Qgbu6sF6DN
          source_id: s_581foiPcqchzRod141ue3p
          stance: supports
          locator: Q557716
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6g8orhqC2Koy8A4REKJgS1
        subject_person_id: p_ojGchAZHmRHY7mAfMcQCu4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wAdfiazuRFBS2fVaGyZDMH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3PBvCM4GRDyDSCeAJw9iuf
          claim_id: c_6g8orhqC2Koy8A4REKJgS1
          source_id: s_F2EKb33rEMMM2gS8nVwxMC
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_F2EKb33rEMMM2gS8nVwxMC
            source_type: api_record
            title: 维基数据：王珣（Q15902305）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15902305
            external_identifier: Q15902305
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:46.289Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8F%A3
        - id: cs_mLWEG895Hcpz9EuXCY7KYK
          claim_id: c_6g8orhqC2Koy8A4REKJgS1
          source_id: s_581foiPcqchzRod141ue3p
          stance: supports
          locator: P22（父）
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
        - id: cs_CG4PpwtbT6dSGYXanTiYS5
          claim_id: c_6g8orhqC2Koy8A4REKJgS1
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 五子：弘、虞、柳、孺、曇首。
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
      object_person:
        id: p_ojGchAZHmRHY7mAfMcQCu4
        status: active
        display_name: 王珣
        merged_into_person_id: null
  children:
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
        id: p_QgJgBdvAocsFnD3MKgwSmG
        status: active
        display_name: 王锡 (刘宋)
        merged_into_person_id: null
    - claim:
        id: c_WbQCryMXpB6D8Wnpf1VLmS
        subject_person_id: p_wAdfiazuRFBS2fVaGyZDMH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KNRrpyLQgiSxmifNDrDvF1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_s38cW8LZ1Eok9c6gr6mwyA
          claim_id: c_WbQCryMXpB6D8Wnpf1VLmS
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
        - id: cs_23GNx6B8TKdQ4pwZ13Jjtx
          claim_id: c_WbQCryMXpB6D8Wnpf1VLmS
          source_id: s_vHqh5HoRCLCrreKhjYCLB2
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vHqh5HoRCLCrreKhjYCLB2
            source_type: api_record
            title: 维基数据：王僧达（Q13219054）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13219054
            external_identifier: Q13219054
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:41.839Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E9%81%94
      object_person:
        id: p_KNRrpyLQgiSxmifNDrDvF1
        status: active
        display_name: 王僧达
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
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
        id: p_w4zhChFcabvEjJD4vJgovo
        status: active
        display_name: 王僧亮
        merged_into_person_id: null
  other: []
---

# 王弘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王弘（379年—432年），史料所见人物。本项目依据《王弘》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 379年 | accepted |
| death.date | 432年 | accepted |
| name.primary | 王弘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ojGchAZHmRHY7mAfMcQCu4 | 王珣 | accepted |
| children | p_QgJgBdvAocsFnD3MKgwSmG | 王锡 (刘宋) | accepted |
| children | p_KNRrpyLQgiSxmifNDrDvF1 | 王僧达 | accepted |
| descendants | p_w4zhChFcabvEjJD4vJgovo | 王僧亮 | accepted |

## 外部来源

- [维基数据：王弘（Q557716）](https://www.wikidata.org/wiki/Q557716)
- [维基数据：王僧达（Q13219054）](https://www.wikidata.org/wiki/Q13219054)
- [维基数据：王锡 (刘宋)（Q15934611）](https://www.wikidata.org/wiki/Q15934611)
- [维基数据：王珣（Q15902305）](https://www.wikidata.org/wiki/Q15902305)
- [中文维基百科：王僧亮](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E4%BA%AE)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
