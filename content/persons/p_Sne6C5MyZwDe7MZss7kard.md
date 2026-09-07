---
schema: wang-person/v1
id: p_Sne6C5MyZwDe7MZss7kard
status: active
merged_into: null
display_name: 王松年
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t4LICiOdwISN8aRwXH6N3O
        subject_person_id: p_Sne6C5MyZwDe7MZss7kard
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松年，史料所见人物。本项目依据《太原王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_AModoJZwTCa-Vm-RwaoGwJ
          claim_id: c_t4LICiOdwISN8aRwXH6N3O
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_8v3HEWJMg8p43rd4zxNR9r
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:15.556Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JShX7oa6LXUAdJfSxJ9te8
        subject_person_id: p_Sne6C5MyZwDe7MZss7kard
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松年
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mKc1XJqUJh4fg55SVYnLnU
          claim_id: c_JShX7oa6LXUAdJfSxJ9te8
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: Q18926040
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oMw3vRW63NAZri6CdhumiM
        subject_person_id: p_ogGf8RMRHR3epSHJWTMviQ
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Sne6C5MyZwDe7MZss7kard
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1GqQra8498GRYhsapv1Rt6
          claim_id: c_oMw3vRW63NAZri6CdhumiM
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: 条文：条文识读（之子）
          quotation: 王松年，王遵业之子
          interpretation_note: null
          source:
            id: s_8v3HEWJMg8p43rd4zxNR9r
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:15.556Z
            metadata_json: null
        - id: cs_WFLP2L44YqbRTmrecvoQib
          claim_id: c_oMw3vRW63NAZri6CdhumiM
          source_id: s_JhD7vPo5vXGiRknBGxUfHD
          stance: supports
          locator: 条文：条文识读（之子）
          quotation: 王松年，王遵业之子
          interpretation_note: null
          source:
            id: s_JhD7vPo5vXGiRknBGxUfHD
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:01.555Z
            metadata_json: null
        - id: cs_F7bCguqxHPpBmaTAyCEF7w
          claim_id: c_oMw3vRW63NAZri6CdhumiM
          source_id: s_aw8xd6LrHMNCx64JpGaxGe
          stance: supports
          locator: 条文：条文识读（之子）
          quotation: 王松年，王遵业之子
          interpretation_note: null
          source:
            id: s_aw8xd6LrHMNCx64JpGaxGe
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:03.601Z
            metadata_json: null
        - id: cs_ELRY2eZ7PYwiEkGXEnmaYQ
          claim_id: c_oMw3vRW63NAZri6CdhumiM
          source_id: s_rbiyKYtLGkkwm2d3m2ne5d
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 王松年，王遵业之子
          interpretation_note: null
          source:
            id: s_rbiyKYtLGkkwm2d3m2ne5d
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:50.540Z
            metadata_json: null
      object_person:
        id: p_ogGf8RMRHR3epSHJWTMviQ
        status: active
        display_name: 王遵业
        merged_into_person_id: null
  children:
    - claim:
        id: c_tDepeCuhNwZMifBdhcdAXb
        subject_person_id: p_Sne6C5MyZwDe7MZss7kard
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_RPem3F3zCPcp4Xv8oaRPE3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_67J7s12m2F8C9D1Qe1xnEB
          claim_id: c_tDepeCuhNwZMifBdhcdAXb
          source_id: s_JhD7vPo5vXGiRknBGxUfHD
          stance: supports
          locator: 条文：世系缩进（大房）
          quotation: 王劭
          interpretation_note: null
          source:
            id: s_JhD7vPo5vXGiRknBGxUfHD
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:01.555Z
            metadata_json: null
        - id: cs_Gjv9ksCK5cq13wvY3zR9cn
          claim_id: c_tDepeCuhNwZMifBdhcdAXb
          source_id: s_rbiyKYtLGkkwm2d3m2ne5d
          stance: supports
          locator: 条文：世系缩进（大房）
          quotation: 王劭
          interpretation_note: null
          source:
            id: s_rbiyKYtLGkkwm2d3m2ne5d
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:50.540Z
            metadata_json: null
        - id: cs_cbqkGjxDg3jj8HeJH1MLJS
          claim_id: c_tDepeCuhNwZMifBdhcdAXb
          source_id: s_ia7UywJVEB9bkmTJ93pz7K
          stance: supports
          locator: 条文：世系缩进（大房）
          quotation: 王劭
          interpretation_note: null
          source:
            id: s_ia7UywJVEB9bkmTJ93pz7K
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:31.288Z
            metadata_json: null
        - id: cs_rtiWRWw2RjyUmhLzyGJSVH
          claim_id: c_tDepeCuhNwZMifBdhcdAXb
          source_id: s_aw8xd6LrHMNCx64JpGaxGe
          stance: supports
          locator: 条文：世系缩进（大房）
          quotation: 王劭
          interpretation_note: null
          source:
            id: s_aw8xd6LrHMNCx64JpGaxGe
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:03.601Z
            metadata_json: null
      object_person:
        id: p_RPem3F3zCPcp4Xv8oaRPE3
        status: active
        display_name: 王劭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王松年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王松年，史料所见人物。本项目依据《太原王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王松年 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ogGf8RMRHR3epSHJWTMviQ | 王遵业 | accepted |
| children | p_RPem3F3zCPcp4Xv8oaRPE3 | 王劭 | accepted |

## 外部来源

- [中文维基百科：太原王氏](https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F)
