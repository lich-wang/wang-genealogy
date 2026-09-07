---
schema: wang-person/v1
id: p_S19Wsq1aN5wyApGxSWWoLb
status: active
merged_into: null
display_name: 王寵惠
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B1PQfCpxjXYmUR841gUIaY
        subject_person_id: p_S19Wsq1aN5wyApGxSWWoLb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寵惠（1881年12月1日—1958年3月15日），字亮疇，男，廣東東莞虎門太平鎮官涌鄉人，生於香港。中華民國政治家、外交家、法学家。曾擔任中華民國外交總長、司法總長、北洋政府國務總理、國民政府行政院代理院長、首任司法院院長、中央研究院第一屆院士等政府要職。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I40AZPm1QSoN_nK13hwlRn
          claim_id: c_B1PQfCpxjXYmUR841gUIaY
          source_id: s_PsJf2my4WM4CeXcQju7yMx
          stance: supports
          locator: 导言
          quotation: 王寵惠（1881年12月1日—1958年3月15日），字亮疇，男
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
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
        id: c_nZZfzhL2W5QTMxvXdytcy9
        subject_person_id: p_S19Wsq1aN5wyApGxSWWoLb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寵惠
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PXzNfmpd9XkjvG4sFKgbAj
          claim_id: c_nZZfzhL2W5QTMxvXdytcy9
          source_id: s_PsJf2my4WM4CeXcQju7yMx
          stance: supports
          locator: Q710100
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_ZPwkrJtF5hrp5LzMAQLm66
        status: active
        display_name: 王煜初
        merged_into_person_id: null
  children:
    - claim:
        id: c_MQezk4DHwdr4AVKDTbmJXN
        subject_person_id: p_S19Wsq1aN5wyApGxSWWoLb
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_qkpfWHQKWMNH8XxUnWrHJz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RuzVYASRpusXUN2hpr4ADc
          claim_id: c_MQezk4DHwdr4AVKDTbmJXN
          source_id: s_h8BCvbyUxkhUwLJPywFL7u
          stance: supports
          locator: 王大闳
          quotation: 父亲是知名法学家王宠惠。
          interpretation_note: null
          source:
            id: s_h8BCvbyUxkhUwLJPywFL7u
            source_type: website
            title: 国立故宫博物院：建筑诗人王大闳
            creator: null
            publisher: 国立故宫博物院
            published_at_text: null
            canonical_url: https://theme.npm.edu.tw/npmArchitecture/ch/page-3.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:06:09.086Z
            metadata_json: null
      object_person:
        id: p_qkpfWHQKWMNH8XxUnWrHJz
        status: active
        display_name: 王大閎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_25Z4fL45km8XXUBTEydr9N
        subject_person_id: p_BKHxop61Y517GT7qX81mjW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_S19Wsq1aN5wyApGxSWWoLb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3Bz76gbH7Mgf1A6d3PZoiX
          claim_id: c_25Z4fL45km8XXUBTEydr9N
          source_id: s_PsJf2my4WM4CeXcQju7yMx
          stance: supports
          locator: 条文：条文识读（妻子）
          quotation: 王寵惠1913年與元配妻子杨兆良結婚
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
        id: p_BKHxop61Y517GT7qX81mjW
        status: active
        display_name: 杨兆良
        merged_into_person_id: null
    - claim:
        id: c_1H4X6LroEjFwJrV52Y4mvP
        subject_person_id: p_KdqrTMitqVQMTgLE7wG71S
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_S19Wsq1aN5wyApGxSWWoLb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Quzdd3dsvaRAAR9c28oF7u
          claim_id: c_1H4X6LroEjFwJrV52Y4mvP
          source_id: s_PsJf2my4WM4CeXcQju7yMx
          stance: supports
          locator: 条文：条文识读（妻子）
          quotation: 結識天津籍的續弦妻子朱學勤
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
        id: p_KdqrTMitqVQMTgLE7wG71S
        status: active
        display_name: 朱學勤
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_ESUf4zdgFhNSmWjMLG6Kjq
        subject_person_id: p_nuQ1qMhGi7G2bK9wDyENJm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_S19Wsq1aN5wyApGxSWWoLb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2sn6thfp17rPnkasgVfoSE
          claim_id: c_ESUf4zdgFhNSmWjMLG6Kjq
          source_id: s_PsJf2my4WM4CeXcQju7yMx
          stance: supports
          locator: 条文：条文识读（祖父）（2世）
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
        id: p_nuQ1qMhGi7G2bK9wDyENJm
        status: active
        display_name: 王元深
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王寵惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王寵惠（1881年12月1日—1958年3月15日），字亮疇，男，廣東東莞虎門太平鎮官涌鄉人，生於香港。中華民國政治家、外交家、法学家。曾擔任中華民國外交總長、司法總長、北洋政府國務總理、國民政府行政院代理院長、首任司法院院長、中央研究院第一屆院士等政府要職。 | accepted |
| name.primary | 王寵惠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZPwkrJtF5hrp5LzMAQLm66 | 王煜初 | accepted |
| children | p_qkpfWHQKWMNH8XxUnWrHJz | 王大閎 | accepted |
| spouses | p_BKHxop61Y517GT7qX81mjW | 杨兆良 | accepted |
| spouses | p_KdqrTMitqVQMTgLE7wG71S | 朱學勤 | accepted |
| ancestors | p_nuQ1qMhGi7G2bK9wDyENJm | 王元深 | accepted |

## 外部来源

- [国立故宫博物院：建筑诗人王大闳](https://theme.npm.edu.tw/npmArchitecture/ch/page-3.html)
- [中文维基百科：王寵惠](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B5%E6%83%A0)
