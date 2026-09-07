---
schema: wang-person/v1
id: p_3qAmSot22KQLa4zp2w3CL3
status: active
merged_into: null
display_name: 王韶凤
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CMTNJfhcrZQ27PJczanuJs
        subject_person_id: p_3qAmSot22KQLa4zp2w3CL3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韶凤：王简（？—？），字长仁，琅邪临沂人，王导的曾孙，王穆的长子，王智、王僧朗的哥哥。 王简官至东晋东阳太守，其女王韶凤嫁给了刘义融。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GHe43eghdAgUMywZkWpnJS
          claim_id: c_CMTNJfhcrZQ27PJczanuJs
          source_id: s_6m9AYNtf1PHQJa37bdgVnF
          stance: supports
          locator: 导言
          quotation: 王韶凤：王简（？—？），字长仁，琅邪临沂人，王导的曾孙，王穆的长
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_6m9AYNtf1PHQJa37bdgVnF
            source_type: website
            title: 中文维基百科：王简 (东晋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%AE%80_(%E4%B8%9C%E6%99%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:09.293Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cvGGBAQeyNbbsaKhWW1MoS
        subject_person_id: p_3qAmSot22KQLa4zp2w3CL3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韶凤
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6fMCxRzE41pokvyyqHoWbX
          claim_id: c_cvGGBAQeyNbbsaKhWW1MoS
          source_id: s_6m9AYNtf1PHQJa37bdgVnF
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
        id: c_EenAFvjf3sG62S9EBF2h11
        subject_person_id: p_iK3WXdBpAJ7UyPXRe1KsHJ
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_3qAmSot22KQLa4zp2w3CL3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MLmi4C3G6ERpb6KZzhDPHT
          claim_id: c_EenAFvjf3sG62S9EBF2h11
          source_id: s_6m9AYNtf1PHQJa37bdgVnF
          stance: supports
          locator: 条文：条文识读（女）
          quotation: 其女王韶凤嫁给了刘义融。
          interpretation_note: null
          source:
            id: s_6m9AYNtf1PHQJa37bdgVnF
            source_type: website
            title: 中文维基百科：王简 (东晋)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%AE%80_(%E4%B8%9C%E6%99%8B)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:09.293Z
            metadata_json: null
      object_person:
        id: p_iK3WXdBpAJ7UyPXRe1KsHJ
        status: active
        display_name: 王简
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王韶凤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王韶凤：王简（？—？），字长仁，琅邪临沂人，王导的曾孙，王穆的长子，王智、王僧朗的哥哥。 王简官至东晋东阳太守，其女王韶凤嫁给了刘义融。 | accepted |
| name.primary | 王韶凤 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iK3WXdBpAJ7UyPXRe1KsHJ | 王简 | accepted |

## 外部来源

- [中文维基百科：王简 (东晋)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%AE%80_(%E4%B8%9C%E6%99%8B))
