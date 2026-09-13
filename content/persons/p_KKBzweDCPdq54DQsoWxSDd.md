---
schema: wang-person/v1
id: p_KKBzweDCPdq54DQsoWxSDd
status: active
merged_into: null
display_name: 王德和
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WYmPAdjT1YG6GwUZWxuO3O
        subject_person_id: p_KKBzweDCPdq54DQsoWxSDd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德和（？—494年），琅邪临沂人，王弘之曾孙，王普曜之孙，王晏之子，王德元的弟弟，官至南齐晋安王友。建武元年（494年），王晏被齐武帝萧赜诛杀后，王德元与王德和也一并被诛杀。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_upkmLCfiGNxEk3NS043POt
          claim_id: c_WYmPAdjT1YG6GwUZWxuO3O
          source_id: s_RjUKQv80ToXYDRpwBHCFr_
          stance: supports
          locator: 导言
          quotation: 王德和（？—494年），琅邪临沂人，王弘之曾孙，王普曜之孙，王晏
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_RjUKQv80ToXYDRpwBHCFr_
            source_type: website
            title: 中文维基百科：王德和
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BE%B7%E5%92%8C
            external_identifier: Q16906025
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-13T09:29:27.764Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ALAFXc5SXnNLXk2RkrShFt
        subject_person_id: p_KKBzweDCPdq54DQsoWxSDd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德和
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QoUcACU6JFLFJYYzy55YKN
          claim_id: c_ALAFXc5SXnNLXk2RkrShFt
          source_id: s_Qk1iy3BVMMETd9xrFgZ5qs
          stance: supports
          locator: Q16906025
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_Qk1iy3BVMMETd9xrFgZ5qs
            source_type: api_record
            title: 维基数据：王德和（Q16906025）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16906025
            external_identifier: Q16906025
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BE%B7%E5%92%8C
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QcBsZvKVmD4XaASk5z21xH
        subject_person_id: p_h9YaQ72N9yujtwjvvMC9QL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KKBzweDCPdq54DQsoWxSDd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A65BtQDCLbtLoDgFGNUMAx
          claim_id: c_QcBsZvKVmD4XaASk5z21xH
          source_id: s_z0L9OCfAiMqfMPgGi_CVrX
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_z0L9OCfAiMqfMPgGi_CVrX
            source_type: website
            title: 中文维基百科：王晏 (南朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%8F_(%E5%8D%97%E6%9C%9D)
            external_identifier: Q22814799
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
        - id: cs_7yxNHQoo83eCRCqWtBRoHK
          claim_id: c_QcBsZvKVmD4XaASk5z21xH
          source_id: s_Qk1iy3BVMMETd9xrFgZ5qs
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_h9YaQ72N9yujtwjvvMC9QL
        status: active
        display_name: 王晏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王德和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王德和（？—494年），琅邪临沂人，王弘之曾孙，王普曜之孙，王晏之子，王德元的弟弟，官至南齐晋安王友。建武元年（494年），王晏被齐武帝萧赜诛杀后，王德元与王德和也一并被诛杀。 | accepted |
| name.primary | 王德和 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_h9YaQ72N9yujtwjvvMC9QL | 王晏 | accepted |

## 外部来源

- [维基数据：王德和（Q16906025）](https://www.wikidata.org/wiki/Q16906025)
- [中文维基百科：王德和](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BE%B7%E5%92%8C)
- [中文维基百科：王晏 (南朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%99%8F_(%E5%8D%97%E6%9C%9D))
