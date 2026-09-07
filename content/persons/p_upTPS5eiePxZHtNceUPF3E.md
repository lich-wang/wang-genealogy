---
schema: wang-person/v1
id: p_upTPS5eiePxZHtNceUPF3E
status: active
merged_into: null
display_name: 王宠佑
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o2Hm4X9UXrM8cM14e1MGtl
        subject_person_id: p_upTPS5eiePxZHtNceUPF3E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宠佑（卒于1958年），史料所见人物。本项目依据《基督教周报：王煜初牧师儿子与北洋大学》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_09mejBkGJZ8Zs8Rgwa5uZD
          claim_id: c_o2Hm4X9UXrM8cM14e1MGtl
          source_id: s_iTwkgB9BdNCZoQRx9nNUHB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Mj23AmitGDzrkUYCaq76x7
        subject_person_id: p_upTPS5eiePxZHtNceUPF3E
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1958年
            calendar_note: null
            earliest: 1958-01-01
            latest: 1958-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7a61nn1beKdugUvZYGmJad
          claim_id: c_Mj23AmitGDzrkUYCaq76x7
          source_id: s_eMKeXVM3LHy1Ypjr338RfA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_eMKeXVM3LHy1Ypjr338RfA
            source_type: website
            title: 北方网：天津大学（北洋大学）校庆人物王宠佑
            creator: null
            publisher: 北方网
            published_at_text: null
            canonical_url: https://news.enorth.com.cn/system/2005/09/20/001123046_05.shtml
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:56.476Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wbZdP4AnK4BFhcnqLJKefm
        subject_person_id: p_upTPS5eiePxZHtNceUPF3E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宠佑
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MYQnz2gPZKtXoVXMJzMNZV
          claim_id: c_wbZdP4AnK4BFhcnqLJKefm
          source_id: s_iTwkgB9BdNCZoQRx9nNUHB
          stance: supports
          locator: Q26769747
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_gDxzk9bGBWWH6ywgvhh39o
          claim_id: c_wbZdP4AnK4BFhcnqLJKefm
          source_id: s_eMKeXVM3LHy1Ypjr338RfA
          stance: supports
          locator: Q26769747
          quotation: null
          interpretation_note: null
          source:
            id: s_eMKeXVM3LHy1Ypjr338RfA
            source_type: website
            title: 北方网：天津大学（北洋大学）校庆人物王宠佑
            creator: null
            publisher: 北方网
            published_at_text: null
            canonical_url: https://news.enorth.com.cn/system/2005/09/20/001123046_05.shtml
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:56.476Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_ZPwkrJtF5hrp5LzMAQLm66
        status: active
        display_name: 王煜初
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宠佑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宠佑（卒于1958年），史料所见人物。本项目依据《基督教周报：王煜初牧师儿子与北洋大学》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1958年 | accepted |
| name.primary | 王宠佑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZPwkrJtF5hrp5LzMAQLm66 | 王煜初 | accepted |

## 外部来源

- [北方网：天津大学（北洋大学）校庆人物王宠佑](https://news.enorth.com.cn/system/2005/09/20/001123046_05.shtml)
- [基督教周报：王煜初牧师儿子与北洋大学](https://christianweekly.net/2008/ta17634.html)
