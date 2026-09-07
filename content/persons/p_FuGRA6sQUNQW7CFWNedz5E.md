---
schema: wang-person/v1
id: p_FuGRA6sQUNQW7CFWNedz5E
status: active
merged_into: null
display_name: 臧兒
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ISA1fnOVPa-U2aF9zX-gOq
        subject_person_id: p_FuGRA6sQUNQW7CFWNedz5E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 臧兒，史料所见人物。本项目依据《臧兒》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_LPqnFGpOnY5j0GfEA4Tnyw
          claim_id: c_ISA1fnOVPa-U2aF9zX-gOq
          source_id: s_rgciGNTZKq9PSfDB6uZUBz
          stance: supports
          locator: Q48919413
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_rgciGNTZKq9PSfDB6uZUBz
            source_type: api_record
            title: 维基数据：臧兒（Q48919413）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q48919413
            external_identifier: Q48919413
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:56.865Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E8%87%A7%E5%85%92
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8RaANG8WAnRfgg59VFt8it
        subject_person_id: p_FuGRA6sQUNQW7CFWNedz5E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 臧兒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QuaE4jzLyfvAtZYQdj1vMb
          claim_id: c_8RaANG8WAnRfgg59VFt8it
          source_id: s_rgciGNTZKq9PSfDB6uZUBz
          stance: supports
          locator: Q48919413
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_t44fra2eF5Stq9xZwzpau3
        subject_person_id: p_FuGRA6sQUNQW7CFWNedz5E
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_PrxK1oesAe8vKYM7JnTjFg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_XBiC9GEYSAwAd3jF9M7CTE
          claim_id: c_t44fra2eF5Stq9xZwzpau3
          source_id: s_nm1HkNf9z9kuk1ufYtbJ15
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_nm1HkNf9z9kuk1ufYtbJ15
            source_type: api_record
            title: 维基数据：王仲（Q10412154）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10412154
            external_identifier: Q10412154
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:52.105Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
        - id: cs_ciVroUKSXkfCPfb9oWsun1
          claim_id: c_t44fra2eF5Stq9xZwzpau3
          source_id: s_rgciGNTZKq9PSfDB6uZUBz
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_rgciGNTZKq9PSfDB6uZUBz
            source_type: api_record
            title: 维基数据：臧兒（Q48919413）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q48919413
            external_identifier: Q48919413
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:56.865Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E8%87%A7%E5%85%92
        - id: cs_VKoG5iQd2XJJ13hNw3tEiC
          claim_id: c_t44fra2eF5Stq9xZwzpau3
          source_id: s_aN7f8BPXM6LzT6583HPiHt
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 与妻子臧儿
          interpretation_note: null
          source:
            id: s_aN7f8BPXM6LzT6583HPiHt
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:11.631Z
            metadata_json: null
        - id: cs_HFjNE7jHTJwuBN3ZBdPTsL
          claim_id: c_t44fra2eF5Stq9xZwzpau3
          source_id: s_ZL9D16ncaJ4yyjDxNEpmU2
          stance: supports
          locator: 条文：条文识读（嫁）
          quotation: 嫁槐里人王仲，生二女一子
          interpretation_note: null
          source:
            id: s_ZL9D16ncaJ4yyjDxNEpmU2
            source_type: website
            title: 中文维基百科：臧兒
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E8%87%A7%E5%85%92
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:25.809Z
            metadata_json: null
        - id: cs_KiUUf4qtedThhtBXkv1ZRo
          claim_id: c_t44fra2eF5Stq9xZwzpau3
          source_id: s_mezkgFipw9NECGSAHVDcpe
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 与妻子臧儿
          interpretation_note: null
          source:
            id: s_mezkgFipw9NECGSAHVDcpe
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:40.749Z
            metadata_json: null
        - id: cs_6XiVTw89Q31XtBG1JN7a6u
          claim_id: c_t44fra2eF5Stq9xZwzpau3
          source_id: s_xYNJexi5hKBcNn7BL2xg3m
          stance: supports
          locator: 条文：条文识读（嫁）
          quotation: 嫁槐里人王仲，生二女一子
          interpretation_note: null
          source:
            id: s_xYNJexi5hKBcNn7BL2xg3m
            source_type: website
            title: 中文维基百科：臧兒
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E8%87%A7%E5%85%92
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:56.228Z
            metadata_json: null
        - id: cs_GHHhxUAW9yzc1F541HC9wB
          claim_id: c_t44fra2eF5Stq9xZwzpau3
          source_id: s_jg7eNHWtUMnC6YCLabB4vL
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 与妻子臧儿
          interpretation_note: null
          source:
            id: s_jg7eNHWtUMnC6YCLabB4vL
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:40.436Z
            metadata_json: null
        - id: cs_Q8s2DciNRSCWruNVAh4sNM
          claim_id: c_t44fra2eF5Stq9xZwzpau3
          source_id: s_a21ABfDQ8Z137Zje3j3PTv
          stance: supports
          locator: 条文：条文识读（嫁）
          quotation: 嫁槐里人王仲，生二女一子
          interpretation_note: null
          source:
            id: s_a21ABfDQ8Z137Zje3j3PTv
            source_type: website
            title: 中文维基百科：臧兒
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E8%87%A7%E5%85%92
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:57.549Z
            metadata_json: null
        - id: cs_sJMC8JiCtk8GpKRRxkaPMq
          claim_id: c_t44fra2eF5Stq9xZwzpau3
          source_id: s_JrMiEcKGPZDXpHdravKH5D
          stance: supports
          locator: 条文：条文识读（妻子）
          quotation: 与妻子臧儿
          interpretation_note: null
          source:
            id: s_JrMiEcKGPZDXpHdravKH5D
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:28.347Z
            metadata_json: null
        - id: cs_KiwnZsDcqLZLVtPZsvLCE4
          claim_id: c_t44fra2eF5Stq9xZwzpau3
          source_id: s_upgNBo8ikofjFigweJiBTW
          stance: supports
          locator: 条文：条文识读（嫁）
          quotation: 嫁槐里人王仲
          interpretation_note: null
          source:
            id: s_upgNBo8ikofjFigweJiBTW
            source_type: website
            title: 中文维基百科：臧兒
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E8%87%A7%E5%85%92
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:52.761Z
            metadata_json: null
        - id: cs_Y4MwYZAkCm4BwudSGP1Lr9
          claim_id: c_t44fra2eF5Stq9xZwzpau3
          source_id: s_5Nb12UyFLJZEFZyDiLHHsJ
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 与妻子臧儿，生有一子两女
          interpretation_note: null
          source:
            id: s_5Nb12UyFLJZEFZyDiLHHsJ
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:53.093Z
            metadata_json: null
      object_person:
        id: p_PrxK1oesAe8vKYM7JnTjFg
        status: active
        display_name: 王仲
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 臧兒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 臧兒，史料所见人物。本项目依据《臧兒》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 臧兒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_PrxK1oesAe8vKYM7JnTjFg | 王仲 | accepted |

## 外部来源

- [维基数据：王仲（Q10412154）](https://www.wikidata.org/wiki/Q10412154)
- [维基数据：臧兒（Q48919413）](https://www.wikidata.org/wiki/Q48919413)
- [中文维基百科：王仲](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2)
- [中文维基百科：臧兒](https://zh.wikipedia.org/wiki/%E8%87%A7%E5%85%92)
