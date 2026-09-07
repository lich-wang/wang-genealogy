---
schema: wang-person/v1
id: p_t3SgcCtwpNZKVtbPUY74TB
status: active
merged_into: null
display_name: 王猛
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xq3LE38esc_F7fUF_fxkFB
        subject_person_id: p_t3SgcCtwpNZKVtbPUY74TB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王猛，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vjZIonWLTsZsUNR-QxT_EI
          claim_id: c_Xq3LE38esc_F7fUF_fxkFB
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_up96BL6iTvFvqrjJpx7J3m
        subject_person_id: p_t3SgcCtwpNZKVtbPUY74TB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王猛
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fRUSwmefK7hDuJujC9XCsS
          claim_id: c_up96BL6iTvFvqrjJpx7J3m
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rCLBLETDqdyUzrbsMPcaen
        subject_person_id: p_S6urV2fQn5n7ZyxKCEjFvF
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_t3SgcCtwpNZKVtbPUY74TB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_94VkK693cHBGzkBGSNi56T
          claim_id: c_rCLBLETDqdyUzrbsMPcaen
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 清，安南將軍、中盧公。生猛。
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
        id: p_S6urV2fQn5n7ZyxKCEjFvF
        status: active
        display_name: 王清
        merged_into_person_id: null
  children:
    - claim:
        id: c_8jiFcvLASeLniLr8yvq76R
        subject_person_id: p_t3SgcCtwpNZKVtbPUY74TB
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_tR7eAtdxEMfKGk6i2V4FYr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xJ58U4Ckp189iUChBcDZdA
          claim_id: c_8jiFcvLASeLniLr8yvq76R
          source_id: s_89aX6Pd1KLfHfBKAChKuJs
          stance: supports
          locator: 前秦录七·建元十八年
          quotation: 王猛子员外散骑侍郎皮。
          interpretation_note: null
          source:
            id: s_89aX6Pd1KLfHfBKAChKuJs
            source_type: book
            title: 中文维基文库：十六国春秋/卷038
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/zh-hans/%E5%8D%81%E5%85%AD%E5%9C%8B%E6%98%A5%E7%A7%8B_(%E5%B1%A0%E5%96%AC%E5%AD%AB,_%E9%A0%85%E7%90%B3,_%E5%9B%9B%E5%BA%AB%E5%85%A8%E6%9B%B8%E6%9C%AC)/%E5%8D%B7038
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T00:05:57.899Z
            metadata_json: null
      object_person:
        id: p_tR7eAtdxEMfKGk6i2V4FYr
        status: active
        display_name: 王皮
        merged_into_person_id: null
    - claim:
        id: c_ydmHJacSZVD1gKXsNsb6KC
        subject_person_id: p_t3SgcCtwpNZKVtbPUY74TB
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_SQKN3jH4eCHLCk6imG9u4r
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UqXe9BKJvyDs38UX6GQ9sA
          claim_id: c_ydmHJacSZVD1gKXsNsb6KC
          source_id: s_n9NrqUqDgtmDifXAdiQNdj
          stance: supports
          locator: 王永条
          quotation: 永，丞相猛子也……其弟皮。
          interpretation_note: null
          source:
            id: s_n9NrqUqDgtmDifXAdiQNdj
            source_type: book
            title: 中文维基文库：《古今图书集成》王永条
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/Page:Gujin_Tushu_Jicheng,_Volume_359_(1700-1725).djvu/121
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T00:05:58.065Z
            metadata_json: null
        - id: cs_mAu9DmYENWa22bWBoybMAJ
          claim_id: c_ydmHJacSZVD1gKXsNsb6KC
          source_id: s_89aX6Pd1KLfHfBKAChKuJs
          stance: supports
          locator: 前秦录七·建元十八年
          quotation: 以王皮兄扶风太守王永为幽州刺史。
          interpretation_note: null
          source:
            id: s_89aX6Pd1KLfHfBKAChKuJs
            source_type: book
            title: 中文维基文库：十六国春秋/卷038
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/zh-hans/%E5%8D%81%E5%85%AD%E5%9C%8B%E6%98%A5%E7%A7%8B_(%E5%B1%A0%E5%96%AC%E5%AD%AB,_%E9%A0%85%E7%90%B3,_%E5%9B%9B%E5%BA%AB%E5%85%A8%E6%9B%B8%E6%9C%AC)/%E5%8D%B7038
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T00:05:57.899Z
            metadata_json: null
      object_person:
        id: p_SQKN3jH4eCHLCk6imG9u4r
        status: active
        display_name: 王永
        merged_into_person_id: null
    - claim:
        id: c_LAFmH651a4L7m7zG6MJ3Lu
        subject_person_id: p_t3SgcCtwpNZKVtbPUY74TB
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_V8PZwvyH4sBqjxXgurqbUx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3VPjqAzNHrSBFPY71GJpKN
          claim_id: c_LAFmH651a4L7m7zG6MJ3Lu
          source_id: s_4pESLznDL8PRu8m6WDANM5
          stance: supports
          locator: 人物·前秦
          quotation: 王休，猛子，前秦代郡太守。
          interpretation_note: null
          source:
            id: s_4pESLznDL8PRu8m6WDANM5
            source_type: gazetteer
            title: 中文维基文库：《山西通志》卷073
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/zh-hant/%E5%B1%B1%E8%A5%BF%E9%80%9A%E5%BF%97_(%E5%9B%9B%E5%BA%AB%E5%85%A8%E6%9B%B8%E6%9C%AC)/%E5%8D%B7073
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T00:05:57.900Z
            metadata_json: null
      object_person:
        id: p_V8PZwvyH4sBqjxXgurqbUx
        status: active
        display_name: 王休
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王猛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王猛，史料所见人物。本项目依据《中文维基文库：新唐書/卷072中》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王猛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_S6urV2fQn5n7ZyxKCEjFvF | 王清 | accepted |
| children | p_tR7eAtdxEMfKGk6i2V4FYr | 王皮 | accepted |
| children | p_SQKN3jH4eCHLCk6imG9u4r | 王永 | accepted |
| children | p_V8PZwvyH4sBqjxXgurqbUx | 王休 | accepted |

## 外部来源

- [中文维基文库：《古今图书集成》王永条](https://zh.wikisource.org/wiki/Page:Gujin_Tushu_Jicheng,_Volume_359_(1700-1725).djvu/121)
- [中文维基文库：《山西通志》卷073](https://zh.wikisource.org/zh-hant/%E5%B1%B1%E8%A5%BF%E9%80%9A%E5%BF%97_(%E5%9B%9B%E5%BA%AB%E5%85%A8%E6%9B%B8%E6%9C%AC)/%E5%8D%B7073)
- [中文维基文库：十六国春秋/卷038](https://zh.wikisource.org/zh-hans/%E5%8D%81%E5%85%AD%E5%9C%8B%E6%98%A5%E7%A7%8B_(%E5%B1%A0%E5%96%AC%E5%AD%AB,_%E9%A0%85%E7%90%B3,_%E5%9B%9B%E5%BA%AB%E5%85%A8%E6%9B%B8%E6%9C%AC)/%E5%8D%B7038)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
