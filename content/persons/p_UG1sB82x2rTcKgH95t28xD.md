---
schema: wang-person/v1
id: p_UG1sB82x2rTcKgH95t28xD
status: active
merged_into: null
display_name: 刘畅
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Do1ZlI-pIQSK_PomIdctiN
        subject_person_id: p_UG1sB82x2rTcKgH95t28xD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 刘畅：王孟姜（？—？），名不详，字孟姜，琅邪临沂人，王羲之与郗璿的独女，王玄之、王凝之、王涣之、王肃之、王徽之、王操之、王献之的同母姐妹。 王孟姜嫁给了南阳刘畅，生子刘瑾，王孟姜的女儿嫁给了谢玄的独子谢瑍，生下谢灵运。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Jh_YzXwWkPcPbQpg_i-ZHA
          claim_id: c_Do1ZlI-pIQSK_PomIdctiN
          source_id: s_obU3sWETpVMu1YP1TPQiEC
          stance: supports
          locator: 导言
          quotation: 刘畅：王孟姜（？—？），名不详，字孟姜，琅邪临沂人，王羲之与郗璿
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_obU3sWETpVMu1YP1TPQiEC
            source_type: website
            title: 中文维基百科：王孟姜
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AD%9F%E5%A7%9C
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:08.503Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UgiNcfeyGA1fnMMHCF7Pf4
        subject_person_id: p_UG1sB82x2rTcKgH95t28xD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 刘畅
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZHJQtuAoYc2MUPv87St2JQ
          claim_id: c_UgiNcfeyGA1fnMMHCF7Pf4
          source_id: s_obU3sWETpVMu1YP1TPQiEC
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
  spouses:
    - claim:
        id: c_BsDnfJ5r1JJbjxAs2T9oQb
        subject_person_id: p_DgGDrDAArgrEURaMevB7Aa
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_UG1sB82x2rTcKgH95t28xD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_73YmcSYkKigUuiJ9YgSFj6
          claim_id: c_BsDnfJ5r1JJbjxAs2T9oQb
          source_id: s_obU3sWETpVMu1YP1TPQiEC
          stance: supports
          locator: 条文：条文识读（夫）
          quotation: 王孟姜嫁给了南阳刘畅
          interpretation_note: null
          source:
            id: s_obU3sWETpVMu1YP1TPQiEC
            source_type: website
            title: 中文维基百科：王孟姜
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AD%9F%E5%A7%9C
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:08.503Z
            metadata_json: null
      object_person:
        id: p_DgGDrDAArgrEURaMevB7Aa
        status: active
        display_name: 王孟姜
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 刘畅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 刘畅：王孟姜（？—？），名不详，字孟姜，琅邪临沂人，王羲之与郗璿的独女，王玄之、王凝之、王涣之、王肃之、王徽之、王操之、王献之的同母姐妹。 王孟姜嫁给了南阳刘畅，生子刘瑾，王孟姜的女儿嫁给了谢玄的独子谢瑍，生下谢灵运。 | accepted |
| name.primary | 刘畅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_DgGDrDAArgrEURaMevB7Aa | 王孟姜 | accepted |

## 外部来源

- [中文维基百科：王孟姜](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AD%9F%E5%A7%9C)
