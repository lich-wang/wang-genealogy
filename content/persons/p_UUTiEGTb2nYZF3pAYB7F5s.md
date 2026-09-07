---
schema: wang-person/v1
id: p_UUTiEGTb2nYZF3pAYB7F5s
status: active
merged_into: null
display_name: 王廷元
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p_f8PIxwjFVw5--PK1sSKW
        subject_person_id: p_UUTiEGTb2nYZF3pAYB7F5s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷元，史料所见人物。本项目依据《王翬》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_fXfTbFgUNc5abdLnp6qAzU
          claim_id: c_p_f8PIxwjFVw5--PK1sSKW
          source_id: s_MnoGmuNtvYKFRB1SUnYsyW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_MnoGmuNtvYKFRB1SUnYsyW
            source_type: website
            title: 中文维基百科：王翬
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BF%AC
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:14.441Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nGRbWrNzB6QBJLSKuMvixo
        subject_person_id: p_UUTiEGTb2nYZF3pAYB7F5s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷元
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dkGcmem7999qM29TUqjx8K
          claim_id: c_nGRbWrNzB6QBJLSKuMvixo
          source_id: s_MnoGmuNtvYKFRB1SUnYsyW
          stance: supports
          locator: Q135525183
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
        id: c_DJgQya5pKHuvp2B67vKBdU
        subject_person_id: p_HP3QPZMDF4HvkU4ZVybJ3L
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UUTiEGTb2nYZF3pAYB7F5s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6uYrpsZ93j7eEQdwscY7wU
          claim_id: c_DJgQya5pKHuvp2B67vKBdU
          source_id: s_MnoGmuNtvYKFRB1SUnYsyW
          stance: supports
          locator: 条文：条文识读（孫）
          quotation: 王玖兩子王廷元、王廷周均為"後四王"之一。
          interpretation_note: null
          source:
            id: s_MnoGmuNtvYKFRB1SUnYsyW
            source_type: website
            title: 中文维基百科：王翬
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BF%AC
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:14.441Z
            metadata_json: null
      object_person:
        id: p_HP3QPZMDF4HvkU4ZVybJ3L
        status: active
        display_name: 王翬
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王廷元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廷元，史料所见人物。本项目依据《王翬》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王廷元 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_HP3QPZMDF4HvkU4ZVybJ3L | 王翬 | accepted |

## 外部来源

- [中文维基百科：王翬](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BF%AC)
