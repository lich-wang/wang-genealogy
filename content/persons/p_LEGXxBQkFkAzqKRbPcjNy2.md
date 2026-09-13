---
schema: wang-person/v1
id: p_LEGXxBQkFkAzqKRbPcjNy2
status: active
merged_into: null
display_name: 王琮
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jyaMg5Rp5PjPia3W4CWgCn
        subject_person_id: p_LEGXxBQkFkAzqKRbPcjNy2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮（?—?），琅邪郡临沂县（今山东省临沂西北）人，中国南北朝时南朝梁人物。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs__DFo3bMIzhyZXQgNaw06Vq
          claim_id: c_jyaMg5Rp5PjPia3W4CWgCn
          source_id: s_wg6D2P25lPbUjOEdzxLMRD
          stance: supports
          locator: 导言
          quotation: 王琮（?—?），琅邪郡临沂县（今山东省临沂西北）人，中国南北朝时
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_wg6D2P25lPbUjOEdzxLMRD
            source_type: website
            title: 中文维基百科：王琮 (南梁)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%AE_(%E5%8D%97%E6%A2%81)
            external_identifier: Q47182733
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-11T10:29:31.867Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kZQeVrXsQbqe4Rju1ytUQL
        subject_person_id: p_LEGXxBQkFkAzqKRbPcjNy2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TWKwW2XYKhBstDR4SBARYf
          claim_id: c_kZQeVrXsQbqe4Rju1ytUQL
          source_id: s_JS6b1ao8wan8kNXGkVC2QY
          stance: supports
          locator: Q47182733
          quotation: null
          interpretation_note: null
          source:
            id: s_JS6b1ao8wan8kNXGkVC2QY
            source_type: api_record
            title: 维基数据：王琮（Q47182733）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q47182733
            external_identifier: Q47182733
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:58.103Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%AE_(%E5%8D%97%E6%A2%81)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZBZowWzfJbrSpC69G5zLSN
        subject_person_id: p_y6iJMV7fFXYJH3793FLY93
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LEGXxBQkFkAzqKRbPcjNy2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ANRGYxSrKFs6euovrdah7x
          claim_id: c_ZBZowWzfJbrSpC69G5zLSN
          source_id: s_3nr94LvvQ1uWE764s1Et3z
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_3nr94LvvQ1uWE764s1Et3z
            source_type: api_record
            title: 维基数据：王峻（Q11573046）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573046
            external_identifier: Q11573046
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:32.530Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B3%BB_(%E5%8D%97%E6%9C%9D)
        - id: cs_HHv3e6xsQYbnTej39VB4JK
          claim_id: c_ZBZowWzfJbrSpC69G5zLSN
          source_id: s_JS6b1ao8wan8kNXGkVC2QY
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_JS6b1ao8wan8kNXGkVC2QY
            source_type: api_record
            title: 维基数据：王琮（Q47182733）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q47182733
            external_identifier: Q47182733
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:58.103Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%AE_(%E5%8D%97%E6%A2%81)
        - id: cs_19R9BwN2GGUjZT5KwB81bS
          claim_id: c_ZBZowWzfJbrSpC69G5zLSN
          source_id: s_E7Di33LRE7wGzDRVySpJAW
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王琮是王敬弘玄孙，王瓒之曾孙，王秀之之孙，王峻之子
          interpretation_note: null
          source:
            id: s_E7Di33LRE7wGzDRVySpJAW
            source_type: website
            title: 中文维基百科：王琮 (南梁)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%AE_(%E5%8D%97%E6%A2%81)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:08.502Z
            metadata_json: null
      object_person:
        id: p_y6iJMV7fFXYJH3793FLY93
        status: active
        display_name: 王峻
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_VrK2ZzSBpWJc8gr6CN74FD
        subject_person_id: p_LEGXxBQkFkAzqKRbPcjNy2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_V4Ys4TNFPLz828BBMHd37Y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_d6Xbv6983yBcUNPH97DMzN
          claim_id: c_VrK2ZzSBpWJc8gr6CN74FD
          source_id: s_E7Di33LRE7wGzDRVySpJAW
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 娶始兴王萧亮的女儿繁昌公主为妻。
          interpretation_note: null
          source:
            id: s_E7Di33LRE7wGzDRVySpJAW
            source_type: website
            title: 中文维基百科：王琮 (南梁)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%AE_(%E5%8D%97%E6%A2%81)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:08.502Z
            metadata_json: null
      object_person:
        id: p_V4Ys4TNFPLz828BBMHd37Y
        status: active
        display_name: 繁昌公主
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_6ERRWG72RHrLs1SDJpZxWh
        subject_person_id: p_PfgXZYxCc5dBQbZvBHkDAc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LEGXxBQkFkAzqKRbPcjNy2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_StVBExntQG1bM2vWnm6pPr
          claim_id: c_6ERRWG72RHrLs1SDJpZxWh
          source_id: s_E7Di33LRE7wGzDRVySpJAW
          stance: supports
          locator: 条文：条文识读（祖）（4世）
          quotation: 王琮是王敬弘玄孙，王瓒之曾孙，王秀之之孙，王峻之子
          interpretation_note: null
          source:
            id: s_E7Di33LRE7wGzDRVySpJAW
            source_type: website
            title: 中文维基百科：王琮 (南梁)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%AE_(%E5%8D%97%E6%A2%81)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:08.502Z
            metadata_json: null
      object_person:
        id: p_PfgXZYxCc5dBQbZvBHkDAc
        status: active
        display_name: 王敬弘
        merged_into_person_id: null
    - claim:
        id: c_d2HLfKYNUdvoZ7jfs4PhgZ
        subject_person_id: p_dPsguGgVu58pf436VHMAKB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LEGXxBQkFkAzqKRbPcjNy2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_85Nm6ofLh3PpMg5H4EGfpj
          claim_id: c_d2HLfKYNUdvoZ7jfs4PhgZ
          source_id: s_E7Di33LRE7wGzDRVySpJAW
          stance: supports
          locator: 条文：条文识读（祖）（4世）
          quotation: 王琮是王敬弘玄孙，王瓒之曾孙，王秀之之孙
          interpretation_note: null
          source:
            id: s_E7Di33LRE7wGzDRVySpJAW
            source_type: website
            title: 中文维基百科：王琮 (南梁)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%AE_(%E5%8D%97%E6%A2%81)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:08.502Z
            metadata_json: null
      object_person:
        id: p_dPsguGgVu58pf436VHMAKB
        status: active
        display_name: 王瓒
        merged_into_person_id: null
    - claim:
        id: c_a7deWPRz8EPUxC9yBda3Hk
        subject_person_id: p_d2zCByefg1u3xYEJvrh4AD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LEGXxBQkFkAzqKRbPcjNy2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vxF2h1LLKD3S4227Aud44x
          claim_id: c_a7deWPRz8EPUxC9yBda3Hk
          source_id: s_E7Di33LRE7wGzDRVySpJAW
          stance: supports
          locator: 条文：条文识读（祖）（4世）
          quotation: 王琮是王敬弘玄孙，王瓒之曾孙，王秀之之孙，王峻之子
          interpretation_note: null
          source:
            id: s_E7Di33LRE7wGzDRVySpJAW
            source_type: website
            title: 中文维基百科：王琮 (南梁)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%AE_(%E5%8D%97%E6%A2%81)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:08.502Z
            metadata_json: null
      object_person:
        id: p_d2zCByefg1u3xYEJvrh4AD
        status: active
        display_name: 王秀之
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王琮（?—?），琅邪郡临沂县（今山东省临沂西北）人，中国南北朝时南朝梁人物。 | accepted |
| name.primary | 王琮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_y6iJMV7fFXYJH3793FLY93 | 王峻 | accepted |
| spouses | p_V4Ys4TNFPLz828BBMHd37Y | 繁昌公主 | accepted |
| ancestors | p_PfgXZYxCc5dBQbZvBHkDAc | 王敬弘 | accepted |
| ancestors | p_dPsguGgVu58pf436VHMAKB | 王瓒 | accepted |
| ancestors | p_d2zCByefg1u3xYEJvrh4AD | 王秀之 | accepted |

## 外部来源

- [维基数据：王琮（Q47182733）](https://www.wikidata.org/wiki/Q47182733)
- [维基数据：王峻（Q11573046）](https://www.wikidata.org/wiki/Q11573046)
- [中文维基百科：王琮 (南梁)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%AE_(%E5%8D%97%E6%A2%81))
