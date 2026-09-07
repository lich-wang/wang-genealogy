---
schema: wang-person/v1
id: p_xy6Tzd1XwDTgFZ9pi7oyGP
status: active
merged_into: null
display_name: 王诚
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pBQTsJRDK1NTnl-c6akmWg
        subject_person_id: p_xy6Tzd1XwDTgFZ9pi7oyGP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王诚，史料所见人物。本项目依据《王元 (秦朝)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_cN9FpGT7yeCKIZ3_3r7cUV
          claim_id: c_pBQTsJRDK1NTnl-c6akmWg
          source_id: s_a1BkrGE2mLH8EZ23nApwDA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_a1BkrGE2mLH8EZ23nApwDA
            source_type: website
            title: 中文维基百科：王元 (秦朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%85%83_(%E7%A7%A6%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:12.340Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zszdjjQb5bDUjcahbk2b2n
        subject_person_id: p_xy6Tzd1XwDTgFZ9pi7oyGP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王诚
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Aknoqnc16aLP8potUqecYo
          claim_id: c_zszdjjQb5bDUjcahbk2b2n
          source_id: s_a1BkrGE2mLH8EZ23nApwDA
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
        id: c_j9NoqWPdaAg34u9UqriLFp
        subject_person_id: p_PQJwWpzVMj992xqAUZcjv8
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_xy6Tzd1XwDTgFZ9pi7oyGP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6Vw2rZpviixg51pVS51i9p
          claim_id: c_j9NoqWPdaAg34u9UqriLFp
          source_id: s_a1BkrGE2mLH8EZ23nApwDA
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 子：王诚
          interpretation_note: null
          source:
            id: s_a1BkrGE2mLH8EZ23nApwDA
            source_type: website
            title: 中文维基百科：王元 (秦朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%85%83_(%E7%A7%A6%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:12.340Z
            metadata_json: null
      object_person:
        id: p_PQJwWpzVMj992xqAUZcjv8
        status: active
        display_name: 王元
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王诚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王诚，史料所见人物。本项目依据《王元 (秦朝)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王诚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PQJwWpzVMj992xqAUZcjv8 | 王元 | accepted |

## 外部来源

- [中文维基百科：王元 (秦朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%85%83_(%E7%A7%A6%E6%9C%9D))
