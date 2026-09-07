---
schema: wang-person/v1
id: p_knGSa4rfdwTpfcgQmxgHE1
status: active
merged_into: null
display_name: 王威
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_timdDBhwHxB8Zc7Rg4W9qA
        subject_person_id: p_knGSa4rfdwTpfcgQmxgHE1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王威，史料所见人物。本项目依据《維基數據：王威》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_cPvLFWMOfYhXCd2mOo5PtW
          claim_id: c_timdDBhwHxB8Zc7Rg4W9qA
          source_id: s_x4NgAs6C6Z4mQFdwzfxfZx
          stance: supports
          locator: Q108169716
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_x4NgAs6C6Z4mQFdwzfxfZx
            source_type: api_record
            title: 維基數據：王威（Q108169716）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q108169716
            external_identifier: Q108169716
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:47.795Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BZXVAfcWJiQy2EwHgemnS8
        subject_person_id: p_knGSa4rfdwTpfcgQmxgHE1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王威
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aKGNHCF4KLtcPK6nMVwehe
          claim_id: c_BZXVAfcWJiQy2EwHgemnS8
          source_id: s_x4NgAs6C6Z4mQFdwzfxfZx
          stance: supports
          locator: Q108169716
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gdUEcuK7DYgNJ7x6kqaKdP
        subject_person_id: p_A6G4nFDcRtxWYPSxVDPrXS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_knGSa4rfdwTpfcgQmxgHE1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_AJPyMz8aiBnmz7t5bJPnSu
          claim_id: c_gdUEcuK7DYgNJ7x6kqaKdP
          source_id: s_K9B3P6sxPrNVvCtMzMzYks
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_K9B3P6sxPrNVvCtMzMzYks
            source_type: website
            title: 中文维基百科：王离
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王離
            external_identifier: Q11573240
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_HjmjfmgnMQrbdyVrePN8Hg
          claim_id: c_gdUEcuK7DYgNJ7x6kqaKdP
          source_id: s_e4ATzMShRj7egj5nMgTMvM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_e4ATzMShRj7egj5nMgTMvM
            source_type: api_record
            title: 維基數據：王离（Q11573240）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573240
            external_identifier: Q11573240
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:32.070Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9B%A2
        - id: cs_zA6m7QD6dawf4PV1BeBXzC
          claim_id: c_gdUEcuK7DYgNJ7x6kqaKdP
          source_id: s_x4NgAs6C6Z4mQFdwzfxfZx
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_x4NgAs6C6Z4mQFdwzfxfZx
            source_type: api_record
            title: 維基數據：王威（Q108169716）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q108169716
            external_identifier: Q108169716
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:47.795Z
            metadata_json: null
        - id: cs_FCsJ632NEhvqLcobQp7xbx
          claim_id: c_gdUEcuK7DYgNJ7x6kqaKdP
          source_id: s_S61fZXdnDT87Mj2UYRLSRH
          stance: supports
          locator: 条文：条文识读（之子）
          quotation: 王离之子王元和王威
          interpretation_note: null
          source:
            id: s_S61fZXdnDT87Mj2UYRLSRH
            source_type: website
            title: 中文维基百科：王姓
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A7%93
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:13.359Z
            metadata_json: null
        - id: cs_jqtAs2sJkkHgKULKvMwcjb
          claim_id: c_gdUEcuK7DYgNJ7x6kqaKdP
          source_id: s_s64CsLR1CSKgqTfFqoXjzf
          stance: supports
          locator: 条文：条文识读（之子）
          quotation: 王离之子王元和王威
          interpretation_note: null
          source:
            id: s_s64CsLR1CSKgqTfFqoXjzf
            source_type: website
            title: 中文维基百科：王姓
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A7%93
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:42.520Z
            metadata_json: null
        - id: cs_BLMwDAU4Eu2DcGXCqRbY5Q
          claim_id: c_gdUEcuK7DYgNJ7x6kqaKdP
          source_id: s_UqGU6H6Kfd8qNfv97qs4Qb
          stance: supports
          locator: 条文：条文识读（之子）
          quotation: 王离之子王元和王威
          interpretation_note: null
          source:
            id: s_UqGU6H6Kfd8qNfv97qs4Qb
            source_type: website
            title: 中文维基百科：王姓
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A7%93
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:42.248Z
            metadata_json: null
        - id: cs_tbymc4EEpXrJ7LRPjDx9V6
          claim_id: c_gdUEcuK7DYgNJ7x6kqaKdP
          source_id: s_VLRF7n47kSh9E49Wbg56bA
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 武城侯王离之子王元和王威
          interpretation_note: null
          source:
            id: s_VLRF7n47kSh9E49Wbg56bA
            source_type: website
            title: 中文维基百科：王姓
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A7%93
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T06:46:49.616Z
            metadata_json: null
        - id: cs_iH4dFGB1zW45oGYa8nCq9M
          claim_id: c_gdUEcuK7DYgNJ7x6kqaKdP
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 二子：元、威。
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
        id: p_A6G4nFDcRtxWYPSxVDPrXS
        status: active
        display_name: 王离
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_DpULJjs7a7Ym1y8HsxCzA8
        subject_person_id: p_Zru5Kv87Ac9fELnRRbbTdQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_knGSa4rfdwTpfcgQmxgHE1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iaPJM69y8gvjMni83S9E6n
          claim_id: c_DpULJjs7a7Ym1y8HsxCzA8
          source_id: s_TozJBbAzRke4M7LNE17Yv1
          stance: supports
          locator: 条文：条文识读（曾孙）（3世）
          quotation: 曾孙：王元、王威。
          interpretation_note: null
          source:
            id: s_TozJBbAzRke4M7LNE17Yv1
            source_type: website
            title: 中文维基百科：王翦
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BF%A6
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:22:32.492Z
            metadata_json: null
        - id: cs_JWH4RqmYt7BMFx6arykZkA
          claim_id: c_DpULJjs7a7Ym1y8HsxCzA8
          source_id: s_D4tLE691zdroKBb1DBdwbd
          stance: supports
          locator: 条文：条文识读（曾孙）（3世）
          quotation: 曾孙：王元、王威。
          interpretation_note: null
          source:
            id: s_D4tLE691zdroKBb1DBdwbd
            source_type: website
            title: 中文维基百科：王翦
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BF%A6
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:52.012Z
            metadata_json: null
      object_person:
        id: p_Zru5Kv87Ac9fELnRRbbTdQ
        status: active
        display_name: 王翦
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王威

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王威，史料所见人物。本项目依据《維基數據：王威》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王威 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A6G4nFDcRtxWYPSxVDPrXS | 王离 | accepted |
| ancestors | p_Zru5Kv87Ac9fELnRRbbTdQ | 王翦 | accepted |

## 外部来源

- [維基數據：王离（Q11573240）](https://www.wikidata.org/wiki/Q11573240)
- [維基數據：王威（Q108169716）](https://www.wikidata.org/wiki/Q108169716)
- [中文维基百科：王翦](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BF%A6)
- [中文维基百科：王离](https://zh.wikipedia.org/wiki/王離)
- [中文维基百科：王姓](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A7%93)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
