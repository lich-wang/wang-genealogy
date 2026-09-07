---
schema: wang-person/v1
id: p_LWXUPc9JfrBeQqmiSQJ6df
status: active
merged_into: null
display_name: 王业浩
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pvIqVtSD4OBljP46X6cXfD
        subject_person_id: p_LWXUPc9JfrBeQqmiSQJ6df
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王业浩，史料所见人物。本项目依据《余姚王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_voPA5fuV1s3gVep_A2UZTv
          claim_id: c_pvIqVtSD4OBljP46X6cXfD
          source_id: s_nyzWnxJ8N3yd94sCtq4W2J
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_nyzWnxJ8N3yd94sCtq4W2J
            source_type: website
            title: 中文维基百科：余姚王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:19.469Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tUaedUyjJLYJWnsQjLe9n4
        subject_person_id: p_LWXUPc9JfrBeQqmiSQJ6df
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王业浩
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CvM49ErBCrKmKrtY41hpH9
          claim_id: c_tUaedUyjJLYJWnsQjLe9n4
          source_id: s_nyzWnxJ8N3yd94sCtq4W2J
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
        id: c_phe1BxjbaJnPBH2pLWvEaE
        subject_person_id: p_EfTsBpTgDdGmeng5EjD8V4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LWXUPc9JfrBeQqmiSQJ6df
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SbWTNCAppML4YyKo4h7y8w
          claim_id: c_phe1BxjbaJnPBH2pLWvEaE
          source_id: s_YTVUDZpBSvxpCDAgTsyM8f
          stance: supports
          locator: 条文：条文识读（玄孙）（4世）
          quotation: 王业浩，王守仁弟王守文玄孙，万历四十一年进士
          interpretation_note: null
          source:
            id: s_YTVUDZpBSvxpCDAgTsyM8f
            source_type: website
            title: 中文维基百科：余姚王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:16.946Z
            metadata_json: null
        - id: cs_v6EiuHf6dw1xRQEaNggJyd
          claim_id: c_phe1BxjbaJnPBH2pLWvEaE
          source_id: s_xL1sKif1HsCT5qfGdqajvA
          stance: supports
          locator: 条文：条文识读（玄孙）（4世）
          quotation: 王业浩，王守仁弟王守文玄孙
          interpretation_note: null
          source:
            id: s_xL1sKif1HsCT5qfGdqajvA
            source_type: website
            title: 中文维基百科：余姚王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:04.592Z
            metadata_json: null
      object_person:
        id: p_EfTsBpTgDdGmeng5EjD8V4
        status: active
        display_name: 王守文
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王业浩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王业浩，史料所见人物。本项目依据《余姚王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王业浩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_EfTsBpTgDdGmeng5EjD8V4 | 王守文 | accepted |

## 外部来源

- [中文维基百科：余姚王氏](https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F)
