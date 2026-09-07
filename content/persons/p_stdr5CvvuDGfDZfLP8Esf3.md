---
schema: wang-person/v1
id: p_stdr5CvvuDGfDZfLP8Esf3
status: active
merged_into: null
display_name: 王错
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PHZkF7CFq5oWqbcAB_-YFP
        subject_person_id: p_stdr5CvvuDGfDZfLP8Esf3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王错，史料所见人物。本项目依据《王姓》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_qr2nHOHcMhYmLAK47mSLK2
          claim_id: c_PHZkF7CFq5oWqbcAB_-YFP
          source_id: s_VLRF7n47kSh9E49Wbg56bA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_VLRF7n47kSh9E49Wbg56bA
            source_type: website
            title: 中文维基百科：王姓
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A7%93
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T06:46:49.616Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_L8o2Yu4apJqYW4NCjeRhJC
        subject_person_id: p_stdr5CvvuDGfDZfLP8Esf3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王错
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q3e3vGZMyYC4NP1TbFc456
          claim_id: c_L8o2Yu4apJqYW4NCjeRhJC
          source_id: s_VLRF7n47kSh9E49Wbg56bA
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_fsNfjKaYvYv8q5RDyQMqZ8
        subject_person_id: p_stdr5CvvuDGfDZfLP8Esf3
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_V8Rvq2Npkj3D7egyks7RpA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Sqt7BtY5YGnzzq3KLbTMpU
          claim_id: c_fsNfjKaYvYv8q5RDyQMqZ8
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 八世孫錯，為魏將軍。生賁，為中大夫。
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
        id: p_V8Rvq2Npkj3D7egyks7RpA
        status: active
        display_name: 王賁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_wPPSjSXPpmc7BJXBRxAMop
        subject_person_id: p_NdYoingCwg8aVdJELBN64G
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_stdr5CvvuDGfDZfLP8Esf3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uMYXhGQQXmbqkFdopVyh5n
          claim_id: c_wPPSjSXPpmc7BJXBRxAMop
          source_id: s_VLRF7n47kSh9E49Wbg56bA
          stance: supports
          locator: 条文：条文识读（孙）（8世）
          quotation: 其子宗敬仍在朝中任司徒之职，当时的人们因其是王族的后代，便称其为"王家"。从此，这支族人就以"王"为姓。传到第八代孙王错
          interpretation_note: null
          source:
            id: s_VLRF7n47kSh9E49Wbg56bA
            source_type: website
            title: 中文维基百科：王姓
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A7%93
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T06:46:49.616Z
            metadata_json: null
      object_person:
        id: p_NdYoingCwg8aVdJELBN64G
        status: active
        display_name: 宗敬
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王错

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王错，史料所见人物。本项目依据《王姓》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王错 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_V8Rvq2Npkj3D7egyks7RpA | 王賁 | accepted |
| ancestors | p_NdYoingCwg8aVdJELBN64G | 宗敬 | accepted |

## 外部来源

- [中文维基百科：王姓](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A7%93)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
