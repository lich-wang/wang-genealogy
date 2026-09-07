---
schema: wang-person/v1
id: p_ZP94X9ZiCDzHEcmm3AEhf7
status: active
merged_into: null
display_name: 王谭
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mAUFf2NGVoy7oBVYAhzw18
        subject_person_id: p_ZP94X9ZiCDzHEcmm3AEhf7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王谭，史料所见人物。本项目依据《王訢》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_ez2yEiMVj2ypOYkVgVQB__
          claim_id: c_mAUFf2NGVoy7oBVYAhzw18
          source_id: s_Q97wqhXZHN9TMRegXK9zif
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Q97wqhXZHN9TMRegXK9zif
            source_type: website
            title: 中文维基百科：王訢
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A8%A2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:22.684Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3be9SVzF7SyYSDQANQQJt4
        subject_person_id: p_ZP94X9ZiCDzHEcmm3AEhf7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王谭
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bhUuBFe9q8UBy1xSksUqam
          claim_id: c_3be9SVzF7SyYSDQANQQJt4
          source_id: s_Q97wqhXZHN9TMRegXK9zif
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 爵位傳給了他的兒子王谭
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cce7KvwGEuNNziwVsUC3RM
        subject_person_id: p_GbQy8jfgKbMEuvvPBZA4FY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_ZP94X9ZiCDzHEcmm3AEhf7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8jjbMNfAMYamrmoPKf1n31
          claim_id: c_cce7KvwGEuNNziwVsUC3RM
          source_id: s_DznT9DAEC7bb8kuqDw4nRf
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 爵位傳給了他的兒子王谭
          interpretation_note: null
          source:
            id: s_DznT9DAEC7bb8kuqDw4nRf
            source_type: website
            title: 中文维基百科：王訢
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A8%A2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:54.260Z
            metadata_json: null
        - id: cs_HTf1i2Lenp9pHgj1MZJ2Mn
          claim_id: c_cce7KvwGEuNNziwVsUC3RM
          source_id: s_VfmVFKwFJKiNpueJKNTZ2G
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 爵位傳給了他的兒子王谭
          interpretation_note: null
          source:
            id: s_VfmVFKwFJKiNpueJKNTZ2G
            source_type: website
            title: 中文维基百科：王訢
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A8%A2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:52.823Z
            metadata_json: null
        - id: cs_WWpHC915ENHkE7fRcN7i8x
          claim_id: c_cce7KvwGEuNNziwVsUC3RM
          source_id: s_7piLDqGhoTp1aat5CHHZso
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 爵位傳給了他的兒子王谭
          interpretation_note: null
          source:
            id: s_7piLDqGhoTp1aat5CHHZso
            source_type: website
            title: 中文维基百科：王訢
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A8%A2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:38.010Z
            metadata_json: null
        - id: cs_ma1sGUNMDGdPi9cftmdGrm
          claim_id: c_cce7KvwGEuNNziwVsUC3RM
          source_id: s_Q97wqhXZHN9TMRegXK9zif
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 爵位傳給了他的兒子王谭
          interpretation_note: null
          source:
            id: s_Q97wqhXZHN9TMRegXK9zif
            source_type: website
            title: 中文维基百科：王訢
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A8%A2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:22.684Z
            metadata_json: null
        - id: cs_yVD7Z5HXCdVazK2Fmx2b1F
          claim_id: c_cce7KvwGEuNNziwVsUC3RM
          source_id: s_E6rn6Mk7gDjK78xK6EEmqz
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 爵位傳給了他的兒子王谭
          interpretation_note: null
          source:
            id: s_E6rn6Mk7gDjK78xK6EEmqz
            source_type: website
            title: 中文维基百科：王訢
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A8%A2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:27:19.220Z
            metadata_json: null
      object_person:
        id: p_GbQy8jfgKbMEuvvPBZA4FY
        status: active
        display_name: 王訢
        merged_into_person_id: null
  children:
    - claim:
        id: c_FJyDroexUxxuXLGnh2aU6e
        subject_person_id: p_ZP94X9ZiCDzHEcmm3AEhf7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oAKHo8wPH3ABR8Zfv9PTYD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BuDEtn4jDqLxzxu8Kt4K4h
          claim_id: c_FJyDroexUxxuXLGnh2aU6e
          source_id: s_re5443GiK77DyELXXkpCRQ
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王訢之孙，王谭之子
          interpretation_note: null
          source:
            id: s_re5443GiK77DyELXXkpCRQ
            source_type: website
            title: 中文维基百科：王咸
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%92%B8
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:41.582Z
            metadata_json: null
        - id: cs_QS9ET4r8KBesCLqT8zHzgi
          claim_id: c_FJyDroexUxxuXLGnh2aU6e
          source_id: s_Fef2ZczK2quyD229J6BnWG
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王訢之孙，王谭之子。
          interpretation_note: null
          source:
            id: s_Fef2ZczK2quyD229J6BnWG
            source_type: website
            title: 中文维基百科：王咸
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%92%B8
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:06.629Z
            metadata_json: null
      object_person:
        id: p_oAKHo8wPH3ABR8Zfv9PTYD
        status: active
        display_name: 王咸
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王谭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王谭，史料所见人物。本项目依据《王訢》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王谭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GbQy8jfgKbMEuvvPBZA4FY | 王訢 | accepted |
| children | p_oAKHo8wPH3ABR8Zfv9PTYD | 王咸 | accepted |

## 外部来源

- [中文维基百科：王咸](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%92%B8)
- [中文维基百科：王訢](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A8%A2)
