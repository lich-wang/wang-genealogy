---
schema: wang-person/v1
id: p_6SVL4zVnbghtWnVRaFnJvW
status: active
merged_into: null
display_name: 王季山
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xw4DETaM30JJIXq8ushgbY
        subject_person_id: p_6SVL4zVnbghtWnVRaFnJvW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季山，史料所见人物。本项目依据《王季山》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6qOad3MXdOQ-1oGIpRWqC9
          claim_id: c_xw4DETaM30JJIXq8ushgbY
          source_id: s_n6jyQysZNP86UPF3DCLMXM
          stance: supports
          locator: Q61306555
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_n6jyQysZNP86UPF3DCLMXM
            source_type: api_record
            title: 维基数据：王季山（Q61306555）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q61306555
            external_identifier: Q61306555
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:42.168Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z4PR9vuGR8EAA8ABFq1eWE
        subject_person_id: p_6SVL4zVnbghtWnVRaFnJvW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王季山
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_83fE1251mHnekFKq8oUk9W
          claim_id: c_Z4PR9vuGR8EAA8ABFq1eWE
          source_id: s_n6jyQysZNP86UPF3DCLMXM
          stance: supports
          locator: Q61306555
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZPFFBMHEL357688NZs3KFn
        subject_person_id: p_2HELk41pdUeS3deRz3VVLi
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_6SVL4zVnbghtWnVRaFnJvW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_APAUM8W3m5U1GDPTZyCyCd
          claim_id: c_ZPFFBMHEL357688NZs3KFn
          source_id: s_GKJA1p27bTWDghGasSHvEH
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_GKJA1p27bTWDghGasSHvEH
            source_type: api_record
            title: 维基数据：王颂蔚（Q15916782）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15916782
            external_identifier: Q15916782
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:20.057Z
            metadata_json: null
        - id: cs_KDDx4AXEomhgjeumFw1zCr
          claim_id: c_ZPFFBMHEL357688NZs3KFn
          source_id: s_n6jyQysZNP86UPF3DCLMXM
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_n6jyQysZNP86UPF3DCLMXM
            source_type: api_record
            title: 维基数据：王季山（Q61306555）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q61306555
            external_identifier: Q61306555
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:42.168Z
            metadata_json: null
      object_person:
        id: p_2HELk41pdUeS3deRz3VVLi
        status: active
        display_name: 王颂蔚
        merged_into_person_id: null
    - claim:
        id: c_qSMXbaR9iH9NCVjs2Ubi39
        subject_person_id: p_f7g3eELsAMp2Cx19FFgTS3
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_6SVL4zVnbghtWnVRaFnJvW
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2oDr2PU9Pbe8NJ5BG9m58q
          claim_id: c_qSMXbaR9iH9NCVjs2Ubi39
          source_id: s_n6jyQysZNP86UPF3DCLMXM
          stance: supports
          locator: P25（母）
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_n6jyQysZNP86UPF3DCLMXM
            source_type: api_record
            title: 维基数据：王季山（Q61306555）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q61306555
            external_identifier: Q61306555
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:42.168Z
            metadata_json: null
        - id: cs_5WiHNprvE2cKUV3DEeARxQ
          claim_id: c_qSMXbaR9iH9NCVjs2Ubi39
          source_id: s_8f2Cm1CFYq5g1N96oNqk21
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_8f2Cm1CFYq5g1N96oNqk21
            source_type: api_record
            title: 维基数据：王谢长达（Q109174396）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q109174396
            external_identifier: Q109174396
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:38.937Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B0%A2%E9%95%BF%E8%BE%BE
      object_person:
        id: p_f7g3eELsAMp2Cx19FFgTS3
        status: active
        display_name: 王谢长达
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_MDdmWxJHq5qBWQvyj6oJGB
        subject_person_id: p_6SVL4zVnbghtWnVRaFnJvW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_r3C7u8fpXnctvJwTH2YB5c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HpPSoP99AxNDRWKUNP7N3k
          claim_id: c_MDdmWxJHq5qBWQvyj6oJGB
          source_id: s_n6jyQysZNP86UPF3DCLMXM
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_LP9XDstiCGL8CgQuJCHANe
          claim_id: c_MDdmWxJHq5qBWQvyj6oJGB
          source_id: s_FYDTHe3i7mNOKCUly0GQ8U
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_FYDTHe3i7mNOKCUly0GQ8U
            source_type: website
            title: 中文维基百科：何澄 (民國政治人物)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E4%BD%95%E6%BE%84_(%E6%B0%91%E5%9C%8B%E6%94%BF%E6%B2%BB%E4%BA%BA%E7%89%A9)
            external_identifier: Q10886319
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person:
        id: p_r3C7u8fpXnctvJwTH2YB5c
        status: active
        display_name: 何澄
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王季山

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王季山，史料所见人物。本项目依据《王季山》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王季山 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2HELk41pdUeS3deRz3VVLi | 王颂蔚 | accepted |
| parents | p_f7g3eELsAMp2Cx19FFgTS3 | 王谢长达 | accepted |
| spouses | p_r3C7u8fpXnctvJwTH2YB5c | 何澄 | accepted |

## 外部来源

- [维基数据：王季山（Q61306555）](https://www.wikidata.org/wiki/Q61306555)
- [维基数据：王颂蔚（Q15916782）](https://www.wikidata.org/wiki/Q15916782)
- [维基数据：王谢长达（Q109174396）](https://www.wikidata.org/wiki/Q109174396)
- [中文维基百科：何澄 (民國政治人物)](https://zh.wikipedia.org/wiki/%E4%BD%95%E6%BE%84_(%E6%B0%91%E5%9C%8B%E6%94%BF%E6%B2%BB%E4%BA%BA%E7%89%A9))
