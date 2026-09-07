---
schema: wang-person/v1
id: p_ZPwkrJtF5hrp5LzMAQLm66
status: active
merged_into: null
display_name: 王煜初
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pg9ma20ElyRWVKhnvpcgtD
        subject_person_id: p_ZPwkrJtF5hrp5LzMAQLm66
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煜初，史料所见人物。本项目依据《王寵惠》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_SoOZ-cDJEyLfmQ3c0rHmUA
          claim_id: c_pg9ma20ElyRWVKhnvpcgtD
          source_id: s_PsJf2my4WM4CeXcQju7yMx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_PsJf2my4WM4CeXcQju7yMx
            source_type: website
            title: 中文维基百科：王寵惠
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B5%E6%83%A0
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:03.948Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4K29chVegKey3zQDbKzm18
        subject_person_id: p_ZPwkrJtF5hrp5LzMAQLm66
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煜初
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Snt8F4G1pJHDKKMkPzg9VP
          claim_id: c_4K29chVegKey3zQDbKzm18
          source_id: s_PsJf2my4WM4CeXcQju7yMx
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
        id: c_n11MBHZKEVZaWBeFUTNdYF
        subject_person_id: p_ZPwkrJtF5hrp5LzMAQLm66
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S19Wsq1aN5wyApGxSWWoLb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Wfv2NSYBNALHGPLMmKDAhc
          claim_id: c_n11MBHZKEVZaWBeFUTNdYF
          source_id: s_PsJf2my4WM4CeXcQju7yMx
          stance: supports
          locator: 条文：条文识读（父親）
          quotation: 祖父王元深與父親王煜初皆為禮賢會傳道人
          interpretation_note: null
          source:
            id: s_PsJf2my4WM4CeXcQju7yMx
            source_type: website
            title: 中文维基百科：王寵惠
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B5%E6%83%A0
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:03.948Z
            metadata_json: null
      object_person:
        id: p_S19Wsq1aN5wyApGxSWWoLb
        status: active
        display_name: 王寵惠
        merged_into_person_id: null
    - claim:
        id: c_61ZgxE6gA5UGCUfQLUfNvq
        subject_person_id: p_ZPwkrJtF5hrp5LzMAQLm66
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_upTPS5eiePxZHtNceUPF3E
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zZ3y1DWoa6dM6wcoC9dRVL
          claim_id: c_61ZgxE6gA5UGCUfQLUfNvq
          source_id: s_iTwkgB9BdNCZoQRx9nNUHB
          stance: supports
          locator: 王煜初牧师儿子
          quotation: 王煜初有子女十人……三弟王宠佑，四弟王宠惠。
          interpretation_note: null
          source:
            id: s_iTwkgB9BdNCZoQRx9nNUHB
            source_type: website
            title: 基督教周报：王煜初牧师儿子与北洋大学
            creator: null
            publisher: 基督教周报
            published_at_text: null
            canonical_url: https://christianweekly.net/2008/ta17634.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:56.331Z
            metadata_json: null
      object_person:
        id: p_upTPS5eiePxZHtNceUPF3E
        status: active
        display_name: 王宠佑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王煜初

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王煜初，史料所见人物。本项目依据《王寵惠》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王煜初 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_S19Wsq1aN5wyApGxSWWoLb | 王寵惠 | accepted |
| children | p_upTPS5eiePxZHtNceUPF3E | 王宠佑 | accepted |

## 外部来源

- [基督教周报：王煜初牧师儿子与北洋大学](https://christianweekly.net/2008/ta17634.html)
- [中文维基百科：王寵惠](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B5%E6%83%A0)
