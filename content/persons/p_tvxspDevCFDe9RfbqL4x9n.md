---
schema: wang-person/v1
id: p_tvxspDevCFDe9RfbqL4x9n
status: active
merged_into: null
display_name: 王羡之
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DdhJNdCh4SSae2CdE6E2xe
        subject_person_id: p_tvxspDevCFDe9RfbqL4x9n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羡之，史料所见人物。本项目依据《王羡之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_YscoPBXFAoC0xPh1sqG2Cy
          claim_id: c_DdhJNdCh4SSae2CdE6E2xe
          source_id: s_GQTkPopLBKvnLdsMHMoTGi
          stance: supports
          locator: Q22814801
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_GQTkPopLBKvnLdsMHMoTGi
            source_type: api_record
            title: 维基数据：王羡之（Q22814801）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814801
            external_identifier: Q22814801
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:01.328Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1qoBrD7iG9EwDU9iGAUCDH
        subject_person_id: p_tvxspDevCFDe9RfbqL4x9n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羡之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZZro4ViC57P9bEZD6UBHzh
          claim_id: c_1qoBrD7iG9EwDU9iGAUCDH
          source_id: s_GQTkPopLBKvnLdsMHMoTGi
          stance: supports
          locator: Q22814801
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wgzKepA9PeG6iNfAWvPNSP
        subject_person_id: p_b9xZoiiuBPoW8L2RzpVVCo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tvxspDevCFDe9RfbqL4x9n
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_KxHacEkxkMyf6az3bXo1nv
          claim_id: c_wgzKepA9PeG6iNfAWvPNSP
          source_id: s_SFuhPkjgMH7UeWM99KjEjG
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_SFuhPkjgMH7UeWM99KjEjG
            source_type: api_record
            title: 维基数据：王廙（Q15911516）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15911516
            external_identifier: Q15911516
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:50.988Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%99
        - id: cs_BaQCN3VHayaGxFAsbkd6x6
          claim_id: c_wgzKepA9PeG6iNfAWvPNSP
          source_id: s_GQTkPopLBKvnLdsMHMoTGi
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_GQTkPopLBKvnLdsMHMoTGi
            source_type: api_record
            title: 维基数据：王羡之（Q22814801）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814801
            external_identifier: Q22814801
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:01.328Z
            metadata_json: null
        - id: cs_wWQtCNH4XwfGXE2VQKJ5iE
          claim_id: c_wgzKepA9PeG6iNfAWvPNSP
          source_id: s_EuhopAKPrGRPYfhK6LWGqg
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王羡之
          interpretation_note: null
          source:
            id: s_EuhopAKPrGRPYfhK6LWGqg
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:08:06.893Z
            metadata_json: null
        - id: cs_1qH1rRDjhCLbzzJPyXBtQc
          claim_id: c_wgzKepA9PeG6iNfAWvPNSP
          source_id: s_UT2fnx3qtzoieQ2DR3uegK
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王羡之
          interpretation_note: null
          source:
            id: s_UT2fnx3qtzoieQ2DR3uegK
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:12:42.934Z
            metadata_json: null
        - id: cs_mFJrd1YmSzgGFsenKmA3Xr
          claim_id: c_wgzKepA9PeG6iNfAWvPNSP
          source_id: s_Hu48xKLWbTYqemmfCh8psU
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王羡之
          interpretation_note: null
          source:
            id: s_Hu48xKLWbTYqemmfCh8psU
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:50:46.620Z
            metadata_json: null
        - id: cs_8iaTK8Ev21jDHwcCHNga8x
          claim_id: c_wgzKepA9PeG6iNfAWvPNSP
          source_id: s_am7Fw6MoGrjn6MQaPht7Mr
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王羡之
          interpretation_note: null
          source:
            id: s_am7Fw6MoGrjn6MQaPht7Mr
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:33.641Z
            metadata_json: null
        - id: cs_cEM6ZYMB3a4s5LuBXuFMsV
          claim_id: c_wgzKepA9PeG6iNfAWvPNSP
          source_id: s_2Vkz5GQzEDauSJDkgPos6m
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王羡之
          interpretation_note: null
          source:
            id: s_2Vkz5GQzEDauSJDkgPos6m
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:13.683Z
            metadata_json: null
        - id: cs_1WE4rkGtBxsJFsooW7NQGy
          claim_id: c_wgzKepA9PeG6iNfAWvPNSP
          source_id: s_WUGDBD9YgdJyH7S1ZJAkW2
          stance: supports
          locator: 条文：世系缩进（王览家族）
          quotation: 王羡之
          interpretation_note: null
          source:
            id: s_WUGDBD9YgdJyH7S1ZJAkW2
            source_type: website
            title: 中文维基百科：琅邪王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:57.308Z
            metadata_json: null
      object_person:
        id: p_b9xZoiiuBPoW8L2RzpVVCo
        status: active
        display_name: 王廙
        merged_into_person_id: null
  children:
    - claim:
        id: c_H6DUGGG8S5c5iqprNp4Jw9
        subject_person_id: p_tvxspDevCFDe9RfbqL4x9n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jmPkyeZkLCgqyQZAUfD7mt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2cRTEyQ1Qc3kfZjn2Q2G9Z
          claim_id: c_H6DUGGG8S5c5iqprNp4Jw9
          source_id: s_GQTkPopLBKvnLdsMHMoTGi
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_GQTkPopLBKvnLdsMHMoTGi
            source_type: api_record
            title: 维基数据：王羡之（Q22814801）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814801
            external_identifier: Q22814801
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:01.328Z
            metadata_json: null
        - id: cs_QFuzQJQbsgTrEqio177cZS
          claim_id: c_H6DUGGG8S5c5iqprNp4Jw9
          source_id: s_VKa4tB4SnbfLR1kZ6e9NC6
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_VKa4tB4SnbfLR1kZ6e9NC6
            source_type: api_record
            title: 维基数据：王伟之（Q22814802）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814802
            external_identifier: Q22814802
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:41.839Z
            metadata_json: null
      object_person:
        id: p_jmPkyeZkLCgqyQZAUfD7mt
        status: active
        display_name: 王伟之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王羡之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王羡之，史料所见人物。本项目依据《王羡之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王羡之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_b9xZoiiuBPoW8L2RzpVVCo | 王廙 | accepted |
| children | p_jmPkyeZkLCgqyQZAUfD7mt | 王伟之 | accepted |

## 外部来源

- [维基数据：王伟之（Q22814802）](https://www.wikidata.org/wiki/Q22814802)
- [维基数据：王羡之（Q22814801）](https://www.wikidata.org/wiki/Q22814801)
- [维基数据：王廙（Q15911516）](https://www.wikidata.org/wiki/Q15911516)
- [中文维基百科：琅邪王氏](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F)
