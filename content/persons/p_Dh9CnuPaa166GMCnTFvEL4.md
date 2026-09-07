---
schema: wang-person/v1
id: p_Dh9CnuPaa166GMCnTFvEL4
status: active
merged_into: null
display_name: 王士骐
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_khdMAbeWC14yFkoCgGw6ng
        subject_person_id: p_Dh9CnuPaa166GMCnTFvEL4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士骐（生于1557年），史料所见人物。本项目依据《維基數據：王士骐》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_p5c138H4xF40a5qBO68uQg
          claim_id: c_khdMAbeWC14yFkoCgGw6ng
          source_id: s_8APkX7ZYiyQzybwrZhb48W
          stance: supports
          locator: Q28413923
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_8APkX7ZYiyQzybwrZhb48W
            source_type: api_record
            title: 維基數據：王士骐（Q28413923）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q28413923
            external_identifier: Q28413923
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:24.676Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E9%A8%8F
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oPzSPvbqBe8xcmFrobafbX
        subject_person_id: p_Dh9CnuPaa166GMCnTFvEL4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1557年
            calendar_note: 維基數據 P569 結構化日期，精度：年
            earliest: 1557-01-01
            latest: 1557-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7to4cHFehKMkEHk3TYz5qK
          claim_id: c_oPzSPvbqBe8xcmFrobafbX
          source_id: s_8APkX7ZYiyQzybwrZhb48W
          stance: supports
          locator: Q28413923
          quotation: null
          interpretation_note: null
          source:
            id: s_8APkX7ZYiyQzybwrZhb48W
            source_type: api_record
            title: 維基數據：王士骐（Q28413923）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q28413923
            external_identifier: Q28413923
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:24.676Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E9%A8%8F
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cW6VpX23LLWsvvTrC7ngUf
        subject_person_id: p_Dh9CnuPaa166GMCnTFvEL4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士骐
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_eC8mJ6EeTcoe3a9a1i5wRp
          claim_id: c_cW6VpX23LLWsvvTrC7ngUf
          source_id: s_8APkX7ZYiyQzybwrZhb48W
          stance: supports
          locator: Q28413923
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_j3P5g7b93VTz4PypRjGfbY
        subject_person_id: p_g5KSSBRpZ9iAzVfbXmLaWQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Dh9CnuPaa166GMCnTFvEL4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_d6yKVFvwjzojiYMRKqAxT3
          claim_id: c_j3P5g7b93VTz4PypRjGfbY
          source_id: s_HmqFFuegxFne6fARS2kU7w
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_HmqFFuegxFne6fARS2kU7w
            source_type: website
            title: 中文维基百科：王世贞
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王世贞
            external_identifier: Q6127545
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_75UxX97gScnznzBU59zSjU
          claim_id: c_j3P5g7b93VTz4PypRjGfbY
          source_id: s_PV6LjnAVB1mi771cCJQAMq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_PV6LjnAVB1mi771cCJQAMq
            source_type: api_record
            title: 維基數據：王世贞（Q6127545）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q6127545
            external_identifier: Q6127545
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:50.038Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E8%B4%9E
        - id: cs_so4drHQ2ceJXZ6Me3sJwdd
          claim_id: c_j3P5g7b93VTz4PypRjGfbY
          source_id: s_8APkX7ZYiyQzybwrZhb48W
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8APkX7ZYiyQzybwrZhb48W
            source_type: api_record
            title: 維基數據：王士骐（Q28413923）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q28413923
            external_identifier: Q28413923
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:24.676Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E9%A8%8F
        - id: cs_a5apjBXJxMKao5BUUBjqNH
          claim_id: c_j3P5g7b93VTz4PypRjGfbY
          source_id: s_76fbCaqkpYRJdb6E1UzNap
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_76fbCaqkpYRJdb6E1UzNap
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王世貞（34717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34717&o=json
            external_identifier: CBDB:34717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:44.815Z
            metadata_json: null
        - id: cs_xj2YruJ3gmZZpCvHJu5v2N
          claim_id: c_j3P5g7b93VTz4PypRjGfbY
          source_id: s_aEvoswu8LqJDrn5koU4FVE
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_aEvoswu8LqJDrn5koU4FVE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士騏（34736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34736&o=json
            external_identifier: CBDB:34736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:59.934Z
            metadata_json: null
        - id: cs_ktBaHb5J3FrNSjFPYV7o6U
          claim_id: c_j3P5g7b93VTz4PypRjGfbY
          source_id: s_tCg66qzXdoqGow9SvgfLsC
          stance: supports
          locator: 条文：之子/之女
          quotation: 文壇領袖王世貞之子
          interpretation_note: null
          source:
            id: s_tCg66qzXdoqGow9SvgfLsC
            source_type: website
            title: 中文维基百科：王士騏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E9%A8%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:21.503Z
            metadata_json: null
        - id: cs_u7Dzrv6rb3CYwMuQSbjWxS
          claim_id: c_j3P5g7b93VTz4PypRjGfbY
          source_id: s_E6h9jdxebBKJtgq5x8chCs
          stance: supports
          locator: 条文：信息框 親屬（子）
          quotation: （子）王士騏
          interpretation_note: null
          source:
            id: s_E6h9jdxebBKJtgq5x8chCs
            source_type: website
            title: 中文维基百科：王世贞
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E8%B4%9E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:13.415Z
            metadata_json: null
        - id: cs_C9YiPn1CfjMzXZZrhQsunM
          claim_id: c_j3P5g7b93VTz4PypRjGfbY
          source_id: s_hGMzzyjj1vKjHWNBiNCdB2
          stance: supports
          locator: 条文：之子/之女
          quotation: 文壇領袖王世貞之子
          interpretation_note: null
          source:
            id: s_hGMzzyjj1vKjHWNBiNCdB2
            source_type: website
            title: 中文维基百科：王士騏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E9%A8%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:08.503Z
            metadata_json: null
      object_person:
        id: p_g5KSSBRpZ9iAzVfbXmLaWQ
        status: active
        display_name: 王世贞
        merged_into_person_id: null
  children:
    - claim:
        id: c_vyDtgLv95YomaMMLyc1aSE
        subject_person_id: p_Dh9CnuPaa166GMCnTFvEL4
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_yBkH9ah9XEKFMCi51m91Rs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MgRPg1agUREahZDQCz73Lq
          claim_id: c_vyDtgLv95YomaMMLyc1aSE
          source_id: s_hGMzzyjj1vKjHWNBiNCdB2
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 子王慶常
          interpretation_note: null
          source:
            id: s_hGMzzyjj1vKjHWNBiNCdB2
            source_type: website
            title: 中文维基百科：王士騏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E9%A8%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:08.503Z
            metadata_json: null
      object_person:
        id: p_yBkH9ah9XEKFMCi51m91Rs
        status: active
        display_name: 王慶常
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_cbeR9PBfXJiaAG36iGBPVC
        subject_person_id: p_2CY82LiLunPZpBKWzpBz3S
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Dh9CnuPaa166GMCnTFvEL4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DzfZSUNc5frS8FV88gKkR6
          claim_id: c_cbeR9PBfXJiaAG36iGBPVC
          source_id: s_hGMzzyjj1vKjHWNBiNCdB2
          stance: supports
          locator: 条文：条文识读（曾祖）（3世）
          quotation: 曾祖王倬，南京兵部右侍郎
          interpretation_note: null
          source:
            id: s_hGMzzyjj1vKjHWNBiNCdB2
            source_type: website
            title: 中文维基百科：王士騏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E9%A8%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:08.503Z
            metadata_json: null
      object_person:
        id: p_2CY82LiLunPZpBKWzpBz3S
        status: active
        display_name: 王倬
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_7QU6Z1r2Y9XiyRPQ11ZZet
        subject_person_id: p_Dh9CnuPaa166GMCnTFvEL4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bsD9DxKpV9CWWbRVgiYG3j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8xExKTVsKRwEokJKyXDGa4
          claim_id: c_7QU6Z1r2Y9XiyRPQ11ZZet
          source_id: s_hGMzzyjj1vKjHWNBiNCdB2
          stance: supports
          locator: 条文：条文识读（孫）（2世）
          quotation: 孫王鑑
          interpretation_note: null
          source:
            id: s_hGMzzyjj1vKjHWNBiNCdB2
            source_type: website
            title: 中文维基百科：王士騏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E9%A8%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:08.503Z
            metadata_json: null
      object_person:
        id: p_bsD9DxKpV9CWWbRVgiYG3j
        status: active
        display_name: 王鉴
        merged_into_person_id: null
  other: []
---

# 王士骐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士骐（生于1557年），史料所见人物。本项目依据《維基數據：王士骐》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1557年 | accepted |
| name.primary | 王士骐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g5KSSBRpZ9iAzVfbXmLaWQ | 王世贞 | accepted |
| children | p_yBkH9ah9XEKFMCi51m91Rs | 王慶常 | accepted |
| ancestors | p_2CY82LiLunPZpBKWzpBz3S | 王倬 | accepted |
| descendants | p_bsD9DxKpV9CWWbRVgiYG3j | 王鉴 | accepted |

## 外部来源

- [維基數據：王士骐（Q28413923）](https://www.wikidata.org/wiki/Q28413923)
- [維基數據：王世贞（Q6127545）](https://www.wikidata.org/wiki/Q6127545)
- [中文维基百科：王士騏](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E9%A8%8F)
- [中文维基百科：王世贞](https://zh.wikipedia.org/wiki/王世贞)
- [中文维基百科：王世贞](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E8%B4%9E)
- [CBDB 中国历代人物传记资料库：王士騏（34736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34736&o=json)
- [CBDB 中国历代人物传记资料库：王世貞（34717）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34717&o=json)
