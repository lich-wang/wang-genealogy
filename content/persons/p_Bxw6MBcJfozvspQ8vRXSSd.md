---
schema: wang-person/v1
id: p_Bxw6MBcJfozvspQ8vRXSSd
status: active
merged_into: null
display_name: 王无故
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ihqkcbhQDzLM94b2vsFNqg
        subject_person_id: p_Bxw6MBcJfozvspQ8vRXSSd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王无故，史料所见人物。本项目依据《王无故》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6sxMLdCCy_aGOu0hregM2z
          claim_id: c_ihqkcbhQDzLM94b2vsFNqg
          source_id: s_HoKKNf8wvXE3Eqrf2eWspH
          stance: supports
          locator: Q94998288
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_HoKKNf8wvXE3Eqrf2eWspH
            source_type: api_record
            title: 维基数据：王无故（Q94998288）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q94998288
            external_identifier: Q94998288
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:57.249Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EapThvzpsDDbE74KvnAF2n
        subject_person_id: p_Bxw6MBcJfozvspQ8vRXSSd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王无故
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pti98eBn6LhP6eF2De2cQq
          claim_id: c_EapThvzpsDDbE74KvnAF2n
          source_id: s_HoKKNf8wvXE3Eqrf2eWspH
          stance: supports
          locator: Q94998288
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_s28mbu5kU2N5G4DKkcJu5N
        subject_person_id: p_cu518yUajb6WPKMAjP8xPC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Bxw6MBcJfozvspQ8vRXSSd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_LutzyTMf7A6Uzv2T9Di166
          claim_id: c_s28mbu5kU2N5G4DKkcJu5N
          source_id: s_3bkVPnoF9s87incRA2S8cb
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_3bkVPnoF9s87incRA2S8cb
            source_type: api_record
            title: 维基数据：王乃始（Q85882454）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q85882454
            external_identifier: Q85882454
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:52.789Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
        - id: cs_CLd7oTvsoSsUUqdMr66TLT
          claim_id: c_s28mbu5kU2N5G4DKkcJu5N
          source_id: s_HoKKNf8wvXE3Eqrf2eWspH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_HoKKNf8wvXE3Eqrf2eWspH
            source_type: api_record
            title: 维基数据：王无故（Q94998288）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q94998288
            external_identifier: Q94998288
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:57.249Z
            metadata_json: null
        - id: cs_36X4KCSs8tLKbiJuRBT8JC
          claim_id: c_s28mbu5kU2N5G4DKkcJu5N
          source_id: s_3V3n6FnS561BHF1iHszXCs
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_3V3n6FnS561BHF1iHszXCs
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:08:17.848Z
            metadata_json: null
        - id: cs_tK4u9iBCtYntHNA25JYjZ4
          claim_id: c_s28mbu5kU2N5G4DKkcJu5N
          source_id: s_xFEpxPkqbQhyUJoVMF2Wim
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_xFEpxPkqbQhyUJoVMF2Wim
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:33.035Z
            metadata_json: null
        - id: cs_qeqSX9GKznWmWSJMQUv1hS
          claim_id: c_s28mbu5kU2N5G4DKkcJu5N
          source_id: s_GWo94xYmoW8KFnT6uJLFen
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_GWo94xYmoW8KFnT6uJLFen
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:33.166Z
            metadata_json: null
        - id: cs_p9b1JoEti1Bh9hWdDnbGbG
          claim_id: c_s28mbu5kU2N5G4DKkcJu5N
          source_id: s_rtKyLDJ9LCRdrz1SsxmZe1
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_rtKyLDJ9LCRdrz1SsxmZe1
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:03.993Z
            metadata_json: null
        - id: cs_JqqQZehsjgKXxH1Wumwj3x
          claim_id: c_s28mbu5kU2N5G4DKkcJu5N
          source_id: s_VBxZZVPo5SwVei1WsfZcSP
          stance: supports
          locator: 条文：条文识读（child）
          quotation: 生下儿子王無故、王武，女儿王翁須
          interpretation_note: null
          source:
            id: s_VBxZZVPo5SwVei1WsfZcSP
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:59.175Z
            metadata_json: null
      object_person:
        id: p_cu518yUajb6WPKMAjP8xPC
        status: active
        display_name: 王乃始
        merged_into_person_id: null
  children:
    - claim:
        id: c_f3pBd9A8919WwoeRLPRWrE
        subject_person_id: p_Bxw6MBcJfozvspQ8vRXSSd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X2f94X4uNxnhFPWPxZo8zw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_PHt6JmagEZDKVnqEf5miLC
          claim_id: c_f3pBd9A8919WwoeRLPRWrE
          source_id: s_HoKKNf8wvXE3Eqrf2eWspH
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HoKKNf8wvXE3Eqrf2eWspH
            source_type: api_record
            title: 维基数据：王无故（Q94998288）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q94998288
            external_identifier: Q94998288
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:57.249Z
            metadata_json: null
        - id: cs_QmLmSZXmtGaBtJNyeApE6o
          claim_id: c_f3pBd9A8919WwoeRLPRWrE
          source_id: s_Qq2MHNS29J3Mh73Kbv3g3R
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Qq2MHNS29J3Mh73Kbv3g3R
            source_type: api_record
            title: 维基数据：王接（Q16260249）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260249
            external_identifier: Q16260249
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:18.798Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%8E%A5_(%E6%B1%89%E6%9C%9D)
        - id: cs_9HBGQXpDMGguuDAuEVfYix
          claim_id: c_f3pBd9A8919WwoeRLPRWrE
          source_id: s_VBxZZVPo5SwVei1WsfZcSP
          stance: supports
          locator: 条文：条文识读（child）
          quotation: 王無故子王接為大司馬車騎將軍
          interpretation_note: null
          source:
            id: s_VBxZZVPo5SwVei1WsfZcSP
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:59.175Z
            metadata_json: null
        - id: cs_u7jcN2HQ1ct6BfU12Twcrt
          claim_id: c_f3pBd9A8919WwoeRLPRWrE
          source_id: s_YFv2BhTeJcDxRD1egZBeTV
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 汉宣帝母亲王翁须的兄弟王无故的长子
          interpretation_note: null
          source:
            id: s_YFv2BhTeJcDxRD1egZBeTV
            source_type: website
            title: 中文维基百科：王接 (汉朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%8E%A5_(%E6%B1%89%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:28.051Z
            metadata_json: null
      object_person:
        id: p_X2f94X4uNxnhFPWPxZo8zw
        status: active
        display_name: 王接
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王无故

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王无故，史料所见人物。本项目依据《王无故》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王无故 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cu518yUajb6WPKMAjP8xPC | 王乃始 | accepted |
| children | p_X2f94X4uNxnhFPWPxZo8zw | 王接 | accepted |

## 外部来源

- [维基数据：王接（Q16260249）](https://www.wikidata.org/wiki/Q16260249)
- [维基数据：王乃始（Q85882454）](https://www.wikidata.org/wiki/Q85882454)
- [维基数据：王无故（Q94998288）](https://www.wikidata.org/wiki/Q94998288)
- [中文维基百科：王接 (汉朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%8E%A5_(%E6%B1%89%E6%9C%9D))
- [中文维基百科：王迺始](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B)
