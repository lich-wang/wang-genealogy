---
schema: wang-person/v1
id: p_7BBNW636PfzcwJta8vrVg1
status: active
merged_into: null
display_name: 王吉
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rh_0fZHFw6DpeCmBDNP2VB
        subject_person_id: p_7BBNW636PfzcwJta8vrVg1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉，史料所见人物。本项目依据《琅邪王氏世系圖》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__kxHnMHfEt5yJoOUNu16u-
          claim_id: c_Rh_0fZHFw6DpeCmBDNP2VB
          source_id: s_1gDnUCV4wryb15Y9HJ7oqW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_1gDnUCV4wryb15Y9HJ7oqW
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:24.577Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7oMJ2Pc7UdoJLBUZWyyNgA
        subject_person_id: p_7BBNW636PfzcwJta8vrVg1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HoLP5WfEQLTTwDdEPsVd2B
          claim_id: c_7oMJ2Pc7UdoJLBUZWyyNgA
          source_id: s_1gDnUCV4wryb15Y9HJ7oqW
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
        id: c_J5i9k2qJjiNWCZcDwBpbMu
        subject_person_id: p_txEz4hCDRU7QsamZGm536K
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_7BBNW636PfzcwJta8vrVg1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wMfUFq66t98uPhf4eAU8n4
          claim_id: c_J5i9k2qJjiNWCZcDwBpbMu
          source_id: s_Wdk7jF7TeHXo83RGNUTSq8
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 始建国元年（公元9年），王莽建立新朝，封王宇子六人：王千为功隆公，王寿为功明公，王吉为功成公，王宗为功崇公，王世为功昭公，王利为功著公。
          interpretation_note: null
          source:
            id: s_Wdk7jF7TeHXo83RGNUTSq8
            source_type: website
            title: 中文维基百科：王宗 (新朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%97_(%E6%96%B0%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-05T01:14:54.860Z
            metadata_json: null
      object_person:
        id: p_txEz4hCDRU7QsamZGm536K
        status: active
        display_name: 王宇
        merged_into_person_id: null
  children:
    - claim:
        id: c_gmCK6vLK22ULKMXJg3igPv
        subject_person_id: p_7BBNW636PfzcwJta8vrVg1
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_N58tnUGH3svBk3ktNBzjN8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vZYaa9AkSsX8RPBrQzvtSc
          claim_id: c_gmCK6vLK22ULKMXJg3igPv
          source_id: s_E9W2xid68aCm3Q4ytRjjSD
          stance: supports
          locator: 条文：条文识读（长子）
          quotation: 长子：王崧
          interpretation_note: null
          source:
            id: s_E9W2xid68aCm3Q4ytRjjSD
            source_type: website
            title: 中文维基百科：王吉 (西汉)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%89_(%E8%A5%BF%E6%B1%89)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:12.340Z
            metadata_json: null
      object_person:
        id: p_N58tnUGH3svBk3ktNBzjN8
        status: active
        display_name: 王崧
        merged_into_person_id: null
    - claim:
        id: c_8mgGx6G4TBLdRDr1KP1LnS
        subject_person_id: p_7BBNW636PfzcwJta8vrVg1
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_LZZJjNMDiadFbtbdNFzzKG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LCKk3QSTg58L9KwqADJRb7
          claim_id: c_8mgGx6G4TBLdRDr1KP1LnS
          source_id: s_PvzWhoXSrqZGm1exKsjTq2
          stance: supports
          locator: 条文：家族（次子）
          quotation: 次子：王駿
          interpretation_note: null
          source:
            id: s_PvzWhoXSrqZGm1exKsjTq2
            source_type: website
            title: 中文维基百科：王吉 (西汉)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%89_(%E8%A5%BF%E6%B1%89)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T08:03:26.102Z
            metadata_json: null
        - id: cs_JzkUBC2NPB9Ay88MjEFULW
          claim_id: c_8mgGx6G4TBLdRDr1KP1LnS
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（生）
          quotation: 生駿，字偉山，御史大夫。
          interpretation_note: null
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
      object_person:
        id: p_LZZJjNMDiadFbtbdNFzzKG
        status: active
        display_name: 王骏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_rDLQ3EANb4dAf7QhZ13eTP
        subject_person_id: p_PQJwWpzVMj992xqAUZcjv8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7BBNW636PfzcwJta8vrVg1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D5Gf3aCUXWTAqM4vYyRML5
          claim_id: c_rDLQ3EANb4dAf7QhZ13eTP
          source_id: s_bQTF2CXZrXCnf8mQorPDPu
          stance: supports
          locator: 条文：条文识读（四世孫）（4世）
          quotation: 王元的四世孫，西漢博士、諫議大夫王吉開始在皋虞
          interpretation_note: null
          source:
            id: s_bQTF2CXZrXCnf8mQorPDPu
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:49.845Z
            metadata_json: null
        - id: cs_vVjNF6etGoyUBuuXCB6c1m
          claim_id: c_rDLQ3EANb4dAf7QhZ13eTP
          source_id: s_E9W2xid68aCm3Q4ytRjjSD
          stance: supports
          locator: 条文：条文识读（四世祖）（4世）
          quotation: 四世祖：王元
          interpretation_note: null
          source:
            id: s_E9W2xid68aCm3Q4ytRjjSD
            source_type: website
            title: 中文维基百科：王吉 (西汉)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%89_(%E8%A5%BF%E6%B1%89)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:12.340Z
            metadata_json: null
        - id: cs_BK8pi4CCAR99jgakaYTzYx
          claim_id: c_rDLQ3EANb4dAf7QhZ13eTP
          source_id: s_z4cRQ1DAtCL8VHBBeHEMN6
          stance: supports
          locator: 条文：条文识读（四世孫）（4世）
          quotation: 王元的四世孫，西漢博士、諫議大夫王吉
          interpretation_note: null
          source:
            id: s_z4cRQ1DAtCL8VHBBeHEMN6
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:27:42.315Z
            metadata_json: null
      object_person:
        id: p_PQJwWpzVMj992xqAUZcjv8
        status: active
        display_name: 王元
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_1rU43PiASFLkYz9AX42KTU
        subject_person_id: p_7BBNW636PfzcwJta8vrVg1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FHcGrr7tWenPE3iVi61oWP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NzWY6FEqwGH2LZMa1n8KtE
          claim_id: c_1rU43PiASFLkYz9AX42KTU
          source_id: s_ktMX1QyHh2pkBTaKFeZWEk
          stance: supports
          locator: 条文：孙（2世）
          quotation: 王吉之孙，御史大夫王骏之子。
          interpretation_note: null
          source:
            id: s_ktMX1QyHh2pkBTaKFeZWEk
            source_type: website
            title: 中文维基百科：王崇 (扶平侯)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B4%87_(%E6%89%B6%E5%B9%B3%E4%BE%AF)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:27:39.989Z
            metadata_json: null
      object_person:
        id: p_FHcGrr7tWenPE3iVi61oWP
        status: active
        display_name: 王崇
        merged_into_person_id: null
  other: []
---

# 王吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王吉，史料所见人物。本项目依据《琅邪王氏世系圖》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王吉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_txEz4hCDRU7QsamZGm536K | 王宇 | accepted |
| children | p_N58tnUGH3svBk3ktNBzjN8 | 王崧 | accepted |
| children | p_LZZJjNMDiadFbtbdNFzzKG | 王骏 | accepted |
| ancestors | p_PQJwWpzVMj992xqAUZcjv8 | 王元 | accepted |
| descendants | p_FHcGrr7tWenPE3iVi61oWP | 王崇 | accepted |

## 外部来源

- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王崇 (扶平侯)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B4%87_(%E6%89%B6%E5%B9%B3%E4%BE%AF))
- [中文维基百科：王吉 (西汉)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%90%89_(%E8%A5%BF%E6%B1%89))
- [中文维基百科：王宗 (新朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%97_(%E6%96%B0%E6%9C%9D))
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
