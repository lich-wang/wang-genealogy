---
schema: wang-person/v1
id: p_khfpnHyazPC5NrQ3YJisDR
status: active
merged_into: null
display_name: 王嗣
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6wtdG6TpIniA6PD8uNGzC5
        subject_person_id: p_khfpnHyazPC5NrQ3YJisDR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣（？—？），琅邪临沂人，王导玄孙，王华的儿子。王华死后，王嗣承袭为新建县侯。王华与堂兄王昙首均为宋文帝刘义隆所任用，王嗣的能力低劣，官位待遇也不高，仅官至左卫将军，王昙首的儿子王僧绰曾对中书侍郎蔡兴宗说：“我的名位本应与新建县侯王嗣一个水准，之所以超拔到今日的高位，大概是因为姻戚所致。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_xhj1hwsehAZESWchG0WBIK
          claim_id: c_6wtdG6TpIniA6PD8uNGzC5
          source_id: s_q8iwthwAMCL2M7TkQANMaS
          stance: supports
          locator: 导言
          quotation: 王嗣（？—？），琅邪临沂人，王导玄孙，王华的儿子。王华死后，王嗣
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_q8iwthwAMCL2M7TkQANMaS
            source_type: website
            title: 中文维基百科：王嗣
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%97%A3
            external_identifier: Q15940893
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:31:32.727Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SRdmktKhpAjuQxBpfi53jc
        subject_person_id: p_khfpnHyazPC5NrQ3YJisDR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LYbmEvvQJa2Lzx7peWqb5v
          claim_id: c_SRdmktKhpAjuQxBpfi53jc
          source_id: s_83Gpmt4LRkiUQnhzYyspJz
          stance: supports
          locator: Q15940893
          quotation: null
          interpretation_note: null
          source:
            id: s_83Gpmt4LRkiUQnhzYyspJz
            source_type: api_record
            title: 维基数据：王嗣（Q15940893）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15940893
            external_identifier: Q15940893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:29.004Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%97%A3
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_v1g9Yp7jk4HdKyc3SZdD5M
        subject_person_id: p_X9FxmtvnLfHPoAs6JVdQaL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_khfpnHyazPC5NrQ3YJisDR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_JjRMEGb2s5w12nQyCk96Ro
          claim_id: c_v1g9Yp7jk4HdKyc3SZdD5M
          source_id: s_W5EAUuDH7v87rnQYeV9J4G
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_W5EAUuDH7v87rnQYeV9J4G
            source_type: api_record
            title: 维基数据：王华 (刘宋)（Q13416340）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13416340
            external_identifier: Q13416340
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:49.009Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%8E_(%E5%85%AD%E6%9C%9D)
        - id: cs_7LUcVXWTjuKiz355DjfSpH
          claim_id: c_v1g9Yp7jk4HdKyc3SZdD5M
          source_id: s_83Gpmt4LRkiUQnhzYyspJz
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_83Gpmt4LRkiUQnhzYyspJz
            source_type: api_record
            title: 维基数据：王嗣（Q15940893）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15940893
            external_identifier: Q15940893
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:29.004Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%97%A3
      object_person:
        id: p_X9FxmtvnLfHPoAs6JVdQaL
        status: active
        display_name: 王华 (刘宋)
        merged_into_person_id: null
  children:
    - claim:
        id: c_PRVwhkfZEuw84vRLf2NTfw
        subject_person_id: p_khfpnHyazPC5NrQ3YJisDR
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_u9Hse4b4wfnn4czogkVvwb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sGGdsb2fmFDRdS3A94QoLM
          claim_id: c_PRVwhkfZEuw84vRLf2NTfw
          source_id: s_CUyqBVxUiQtfjFTLAt5DEr
          stance: supports
          locator: 条文：子
          quotation: 二子王长、王终
          interpretation_note: null
          source:
            id: s_CUyqBVxUiQtfjFTLAt5DEr
            source_type: website
            title: 中文维基百科：王嗣
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%97%A3
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:30.038Z
            metadata_json: null
      object_person:
        id: p_u9Hse4b4wfnn4czogkVvwb
        status: active
        display_name: 王长
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_NwECYfhJCpUJ54wJhiY71s
        subject_person_id: p_Xbn65bXVofZnsi76cqAQCP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_khfpnHyazPC5NrQ3YJisDR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AaoxMAGo7NikovPvA2fqAi
          claim_id: c_NwECYfhJCpUJ54wJhiY71s
          source_id: s_CUyqBVxUiQtfjFTLAt5DEr
          stance: supports
          locator: 条文：条文识读（玄孙）（4世）
          quotation: 王导玄孙
          interpretation_note: null
          source:
            id: s_CUyqBVxUiQtfjFTLAt5DEr
            source_type: website
            title: 中文维基百科：王嗣
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%97%A3
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:30.038Z
            metadata_json: null
      object_person:
        id: p_Xbn65bXVofZnsi76cqAQCP
        status: active
        display_name: 王導
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王嗣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王嗣（？—？），琅邪临沂人，王导玄孙，王华的儿子。王华死后，王嗣承袭为新建县侯。王华与堂兄王昙首均为宋文帝刘义隆所任用，王嗣的能力低劣，官位待遇也不高，仅官至左卫将军，王昙首的儿子王僧绰曾对中书侍郎蔡兴宗说：“我的名位本应与新建县侯王嗣一个水准，之所以超拔到今日的高位，大概是因为姻戚所致。 | accepted |
| name.primary | 王嗣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_X9FxmtvnLfHPoAs6JVdQaL | 王华 (刘宋) | accepted |
| children | p_u9Hse4b4wfnn4czogkVvwb | 王长 | accepted |
| ancestors | p_Xbn65bXVofZnsi76cqAQCP | 王導 | accepted |

## 外部来源

- [维基数据：王华 (刘宋)（Q13416340）](https://www.wikidata.org/wiki/Q13416340)
- [维基数据：王嗣（Q15940893）](https://www.wikidata.org/wiki/Q15940893)
- [中文维基百科：王嗣](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%97%A3)
