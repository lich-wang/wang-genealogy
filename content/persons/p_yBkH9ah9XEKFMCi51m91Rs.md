---
schema: wang-person/v1
id: p_yBkH9ah9XEKFMCi51m91Rs
status: active
merged_into: null
display_name: 王慶常
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_55lSI3MMWis42IXjUrBNk4
        subject_person_id: p_yBkH9ah9XEKFMCi51m91Rs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶常，史料所见人物。本项目依据《王士騏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qxMaHnb0BnP-QqXLZ8wwEQ
          claim_id: c_55lSI3MMWis42IXjUrBNk4
          source_id: s_hGMzzyjj1vKjHWNBiNCdB2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_hGMzzyjj1vKjHWNBiNCdB2
            source_type: website
            title: 中文维基百科：王士騏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E9%A8%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:08.503Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_t8Fh8U2n4xW5cMg3NmBDuY
        subject_person_id: p_yBkH9ah9XEKFMCi51m91Rs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶常
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PvXUJ52hkwd7yLvXUA8eXN
          claim_id: c_t8Fh8U2n4xW5cMg3NmBDuY
          source_id: s_hGMzzyjj1vKjHWNBiNCdB2
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
        id: c_vyDtgLv95YomaMMLyc1aSE
        subject_person_id: p_Dh9CnuPaa166GMCnTFvEL4
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_yBkH9ah9XEKFMCi51m91Rs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MgRPg1agUREahZDQCz73Lq
          claim_id: c_vyDtgLv95YomaMMLyc1aSE
          source_id: s_hGMzzyjj1vKjHWNBiNCdB2
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 子王慶常
          interpretation_note: null
          source:
            id: s_hGMzzyjj1vKjHWNBiNCdB2
            source_type: website
            title: 中文维基百科：王士騏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E9%A8%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:08.503Z
            metadata_json: null
      object_person:
        id: p_Dh9CnuPaa166GMCnTFvEL4
        status: active
        display_name: 王士骐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慶常

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王慶常，史料所见人物。本项目依据《王士騏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王慶常 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Dh9CnuPaa166GMCnTFvEL4 | 王士骐 | accepted |

## 外部来源

- [中文维基百科：王士騏](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E9%A8%8F)
