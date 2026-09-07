---
schema: wang-person/v1
id: p_K67b54WhuwxiFBPKMMJrG1
status: active
merged_into: null
display_name: 王十朋
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FR2LyE2hrz0SKE0RtXE_vn
        subject_person_id: p_K67b54WhuwxiFBPKMMJrG1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王十朋（1112年11月19日—1171年8月6日），字龜齡，號梅溪，溫州樂清縣人（今浙江省樂清市淡溪鎮梅溪村），宋朝作家。 北宋政和二年十月二十八日（1112年11月19日）生於樂清左原。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rWrDUs-k-0T7OLiA3gj0GY
          claim_id: c_FR2LyE2hrz0SKE0RtXE_vn
          source_id: s_ai3gzGHMUM5dsA9hB3FMin
          stance: supports
          locator: 导言
          quotation: 王十朋（1112年11月19日—1171年8月6日），字龜齡，號
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_ai3gzGHMUM5dsA9hB3FMin
            source_type: website
            title: 中文维基百科：王十朋
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%81%E6%9C%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:11.611Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_i22dsGcMEFKGqjBzC2Hj4y
        subject_person_id: p_K67b54WhuwxiFBPKMMJrG1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王十朋
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rNvf7Fuux2Fo6GSpZN2wwy
          claim_id: c_i22dsGcMEFKGqjBzC2Hj4y
          source_id: s_ai3gzGHMUM5dsA9hB3FMin
          stance: supports
          locator: Q15904930
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mGjhdXEgXuCnrG5bGPTkLY
        subject_person_id: p_jPSdfKRRBf5NNasuXmD5QL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K67b54WhuwxiFBPKMMJrG1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9h2GibN7dzzfwYqYUm2XHc
          claim_id: c_mGjhdXEgXuCnrG5bGPTkLY
          source_id: s_ai3gzGHMUM5dsA9hB3FMin
          stance: supports
          locator: 条文：条文识读（父亲）
          quotation: 至六世王十朋父亲王辅始业儒。
          interpretation_note: null
          source:
            id: s_ai3gzGHMUM5dsA9hB3FMin
            source_type: website
            title: 中文维基百科：王十朋
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%81%E6%9C%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:11.611Z
            metadata_json: null
      object_person:
        id: p_jPSdfKRRBf5NNasuXmD5QL
        status: active
        display_name: 王辅
        merged_into_person_id: null
  children:
    - claim:
        id: c_XuuosdxiGj6StgSaumBQJQ
        subject_person_id: p_K67b54WhuwxiFBPKMMJrG1
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_a2WrS9jBTkJpk28iRDw5eR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zmwLoRo1Jv9Zrvhgs2JQ6D
          claim_id: c_XuuosdxiGj6StgSaumBQJQ
          source_id: s_ai3gzGHMUM5dsA9hB3FMin
          stance: supports
          locator: 条文：条文识读（长子）
          quotation: 有二子，长子王聞詩，次子王聞禮。
          interpretation_note: null
          source:
            id: s_ai3gzGHMUM5dsA9hB3FMin
            source_type: website
            title: 中文维基百科：王十朋
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%81%E6%9C%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:11.611Z
            metadata_json: null
      object_person:
        id: p_a2WrS9jBTkJpk28iRDw5eR
        status: active
        display_name: 王聞詩
        merged_into_person_id: null
    - claim:
        id: c_15YLh3mGPJuGkH5Gyfm5uV
        subject_person_id: p_K67b54WhuwxiFBPKMMJrG1
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_73cH3V8WZ3fJyLwnyPAiTh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tp1hPiA7VH2nnZsCE7oLWr
          claim_id: c_15YLh3mGPJuGkH5Gyfm5uV
          source_id: s_ai3gzGHMUM5dsA9hB3FMin
          stance: supports
          locator: 条文：条文识读（次子）
          quotation: 有二子，长子王聞詩，次子王聞禮。
          interpretation_note: null
          source:
            id: s_ai3gzGHMUM5dsA9hB3FMin
            source_type: website
            title: 中文维基百科：王十朋
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%81%E6%9C%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:11.611Z
            metadata_json: null
      object_person:
        id: p_73cH3V8WZ3fJyLwnyPAiTh
        status: active
        display_name: 王聞禮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_9sTATENYKEansALkzSRiqe
        subject_person_id: p_K67b54WhuwxiFBPKMMJrG1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_v1WD6k7bxSi3wUW7ZMtDP9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qv76rbW9FEjyZVTB9MFu7M
          claim_id: c_9sTATENYKEansALkzSRiqe
          source_id: s_ai3gzGHMUM5dsA9hB3FMin
          stance: supports
          locator: 条文：条文识读（夫人）
          quotation: 十朋夫人贾氏，同邑贾岙人。
          interpretation_note: null
          source:
            id: s_ai3gzGHMUM5dsA9hB3FMin
            source_type: website
            title: 中文维基百科：王十朋
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%81%E6%9C%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:11.611Z
            metadata_json: null
      object_person:
        id: p_v1WD6k7bxSi3wUW7ZMtDP9
        status: active
        display_name: 贾氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_U3uV7ZM71NfGNoGV47f6Th
        subject_person_id: p_BQN2gTmwCf5ACQ4Wz8jGgf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_K67b54WhuwxiFBPKMMJrG1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yiz2FQ8RS5ojFiHzk2M1yR
          claim_id: c_U3uV7ZM71NfGNoGV47f6Th
          source_id: s_ai3gzGHMUM5dsA9hB3FMin
          stance: supports
          locator: 条文：条文识读（祖父）（2世）
          quotation: 至五世王十朋的祖父王格时，家业始兴。
          interpretation_note: null
          source:
            id: s_ai3gzGHMUM5dsA9hB3FMin
            source_type: website
            title: 中文维基百科：王十朋
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%81%E6%9C%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:11.611Z
            metadata_json: null
      object_person:
        id: p_BQN2gTmwCf5ACQ4Wz8jGgf
        status: active
        display_name: 王格
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王十朋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王十朋（1112年11月19日—1171年8月6日），字龜齡，號梅溪，溫州樂清縣人（今浙江省樂清市淡溪鎮梅溪村），宋朝作家。 北宋政和二年十月二十八日（1112年11月19日）生於樂清左原。 | accepted |
| name.primary | 王十朋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jPSdfKRRBf5NNasuXmD5QL | 王辅 | accepted |
| children | p_a2WrS9jBTkJpk28iRDw5eR | 王聞詩 | accepted |
| children | p_73cH3V8WZ3fJyLwnyPAiTh | 王聞禮 | accepted |
| spouses | p_v1WD6k7bxSi3wUW7ZMtDP9 | 贾氏 | accepted |
| ancestors | p_BQN2gTmwCf5ACQ4Wz8jGgf | 王格 | accepted |

## 外部来源

- [中文维基百科：王十朋](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%81%E6%9C%8B)
