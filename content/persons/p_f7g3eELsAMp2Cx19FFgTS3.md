---
schema: wang-person/v1
id: p_f7g3eELsAMp2Cx19FFgTS3
status: active
merged_into: null
display_name: 王谢长达
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9Qp6E_Zk1IAha1TKqSoNEY
        subject_person_id: p_f7g3eELsAMp2Cx19FFgTS3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王谢长达（1848年—1934年），字铭才，女，祖籍安徽，生于江苏吴县，中国近代妇女运动领袖。苏州振华女校创办者。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_LJ22tV61CYn9Lln7GKL8Jm
          claim_id: c_9Qp6E_Zk1IAha1TKqSoNEY
          source_id: s_FJjY7IehwmBBrDa_NTlTSb
          stance: supports
          locator: 导言
          quotation: 王谢长达（1848年—1934年），字铭才，女，祖籍安徽，生于江
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_FJjY7IehwmBBrDa_NTlTSb
            source_type: website
            title: 中文维基百科：王谢长达
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B0%A2%E9%95%BF%E8%BE%BE
            external_identifier: Q109174396
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9Eb6rJoktDGKVvZz5iQWd6
        subject_person_id: p_f7g3eELsAMp2Cx19FFgTS3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王谢长达
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vQ7MtVnqVJ1H7yvaU6b69h
          claim_id: c_9Eb6rJoktDGKVvZz5iQWd6
          source_id: s_8f2Cm1CFYq5g1N96oNqk21
          stance: supports
          locator: Q109174396
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
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_LhoCcu5GdRKyE2FhH1obtd
        subject_person_id: p_f7g3eELsAMp2Cx19FFgTS3
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_LXKFHguzJ5DjK8ySHadw6f
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zy45pTyWZwwjiQXX4HFknR
          claim_id: c_LhoCcu5GdRKyE2FhH1obtd
          source_id: s_8f2Cm1CFYq5g1N96oNqk21
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: &a1
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
        - id: cs_ZexL3Zwq6jLb64nU33BfRe
          claim_id: c_LhoCcu5GdRKyE2FhH1obtd
          source_id: s_xmDk28iHW5carA3UyGCGoB
          stance: supports
          locator: P25（母）
          quotation: null
          interpretation_note: null
          source:
            id: s_xmDk28iHW5carA3UyGCGoB
            source_type: api_record
            title: 维基数据：王季同（Q61306471）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q61306471
            external_identifier: Q61306471
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:37.417Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AD%A3%E5%90%8C
      object_person:
        id: p_LXKFHguzJ5DjK8ySHadw6f
        status: active
        display_name: 王季同
        merged_into_person_id: null
    - claim:
        id: c_tJCDMECuNuuLC15HMuHJMS
        subject_person_id: p_f7g3eELsAMp2Cx19FFgTS3
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_8feVFJChXiuqdjuvDVpPFr
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FYrTVD27UKMQHHDF6h8GHC
          claim_id: c_tJCDMECuNuuLC15HMuHJMS
          source_id: s_PCBmd1NPULe6Bjy1LUFKSa
          stance: supports
          locator: P25（母）
          quotation: null
          interpretation_note: null
          source:
            id: s_PCBmd1NPULe6Bjy1LUFKSa
            source_type: api_record
            title: 维基数据：王季烈（Q16260246）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260246
            external_identifier: Q16260246
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:46.107Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AD%A3%E7%83%88
        - id: cs_mGB1uZqP9dYQAQWJ4KD6Dn
          claim_id: c_tJCDMECuNuuLC15HMuHJMS
          source_id: s_8f2Cm1CFYq5g1N96oNqk21
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_8feVFJChXiuqdjuvDVpPFr
        status: active
        display_name: 王季烈
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
        - id: cs_5WiHNprvE2cKUV3DEeARxQ
          claim_id: c_qSMXbaR9iH9NCVjs2Ubi39
          source_id: s_8f2Cm1CFYq5g1N96oNqk21
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_6SVL4zVnbghtWnVRaFnJvW
        status: active
        display_name: 王季山
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_DXG1BJzEfuUUQcWUJpF32x
        subject_person_id: p_2HELk41pdUeS3deRz3VVLi
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_f7g3eELsAMp2Cx19FFgTS3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eUA8Ybqy4MhryMwMFWWfGf
          claim_id: c_DXG1BJzEfuUUQcWUJpF32x
          source_id: s_8f2Cm1CFYq5g1N96oNqk21
          stance: supports
          locator: P26（配偶）
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
        - id: cs_gkN7C3GKXxuM3GCymNxdpL
          claim_id: c_DXG1BJzEfuUUQcWUJpF32x
          source_id: s_GKJA1p27bTWDghGasSHvEH
          stance: supports
          locator: P26（配偶）
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
      object_person:
        id: p_2HELk41pdUeS3deRz3VVLi
        status: active
        display_name: 王颂蔚
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王谢长达

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王谢长达（1848年—1934年），字铭才，女，祖籍安徽，生于江苏吴县，中国近代妇女运动领袖。苏州振华女校创办者。 | accepted |
| name.primary | 王谢长达 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_LXKFHguzJ5DjK8ySHadw6f | 王季同 | accepted |
| children | p_8feVFJChXiuqdjuvDVpPFr | 王季烈 | accepted |
| children | p_6SVL4zVnbghtWnVRaFnJvW | 王季山 | accepted |
| spouses | p_2HELk41pdUeS3deRz3VVLi | 王颂蔚 | accepted |

## 外部来源

- [维基数据：王季烈（Q16260246）](https://www.wikidata.org/wiki/Q16260246)
- [维基数据：王季山（Q61306555）](https://www.wikidata.org/wiki/Q61306555)
- [维基数据：王季同（Q61306471）](https://www.wikidata.org/wiki/Q61306471)
- [维基数据：王颂蔚（Q15916782）](https://www.wikidata.org/wiki/Q15916782)
- [维基数据：王谢长达（Q109174396）](https://www.wikidata.org/wiki/Q109174396)
- [中文维基百科：王谢长达](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B0%A2%E9%95%BF%E8%BE%BE)
