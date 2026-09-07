---
schema: wang-person/v1
id: p_KtpB3o4T9jyPG43x1Z1LjQ
status: active
merged_into: null
display_name: 王世全
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cvLHjx_tCTCzbKgcK1KVB-
        subject_person_id: p_KtpB3o4T9jyPG43x1Z1LjQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世全，史料所见人物。本项目依据《王夫之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_NvD_LPkC30EXm0UYGE9apO
          claim_id: c_cvLHjx_tCTCzbKgcK1KVB-
          source_id: s_97SW7k8NBhNb8bzsxF1kJn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_97SW7k8NBhNb8bzsxF1kJn
            source_type: website
            title: 中文维基百科：王夫之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A4%AB%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:21.051Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LCEoPjhPxfZLQBG9WGUxTd
        subject_person_id: p_KtpB3o4T9jyPG43x1Z1LjQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世全
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C37KRn7tV2R1K7FUZH7d3u
          claim_id: c_LCEoPjhPxfZLQBG9WGUxTd
          source_id: s_97SW7k8NBhNb8bzsxF1kJn
          stance: supports
          locator: CBDB:null
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
  spouses: []
  ancestors:
    - claim:
        id: c_5StPQZnMS1s6BQDWE4gWJp
        subject_person_id: p_vLvDV5P2y7vDwkpQ8mjYAY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KtpB3o4T9jyPG43x1Z1LjQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4GiAvuNQpBC25k1UFRqKKN
          claim_id: c_5StPQZnMS1s6BQDWE4gWJp
          source_id: s_A9zKS9P93o3dc5TBo2HeKt
          stance: supports
          locator: 条文：条文识读（六世孙）（6世）
          quotation: 六世孙：王世全，与邓显鹤合作整理王夫之的手稿。
          interpretation_note: null
          source:
            id: s_A9zKS9P93o3dc5TBo2HeKt
            source_type: website
            title: 中文维基百科：王夫之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A4%AB%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:24.811Z
            metadata_json: null
      object_person:
        id: p_vLvDV5P2y7vDwkpQ8mjYAY
        status: active
        display_name: 王夫之
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王世全

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世全，史料所见人物。本项目依据《王夫之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王世全 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_vLvDV5P2y7vDwkpQ8mjYAY | 王夫之 | accepted |

## 外部来源

- [中文维基百科：王夫之](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A4%AB%E4%B9%8B)
