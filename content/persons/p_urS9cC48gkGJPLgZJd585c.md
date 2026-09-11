---
schema: wang-person/v1
id: p_urS9cC48gkGJPLgZJd585c
status: active
merged_into: null
display_name: 王皞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HPenAiQwSQFBMqXjiHRJPv
        subject_person_id: p_urS9cC48gkGJPLgZJd585c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王皞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SHHS1Gw8LTq48bX5GyUk64
          claim_id: c_HPenAiQwSQFBMqXjiHRJPv
          source_id: s_71BvEPSkw95w2LNHEfbowH
          stance: supports
          locator: CBDB:1911
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1911）
          source: &a1
            id: s_71BvEPSkw95w2LNHEfbowH
            source_type: api_record
            title: 中国历代人物传记资料库：王皞（CBDB 1911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1911&o=json
            external_identifier: CBDB:1911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.391Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_92GKoT6fQBbcUvMJ97UNxN
        subject_person_id: p_urS9cC48gkGJPLgZJd585c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王皞，宋人物。籍贯開封，入仕進士，曾任太常寺丞、天章閣待制、右諫議大夫。（中国历代人物传记资料库 CBDB 1911）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OeiGqfx9FMDQNMr6FD4bdX
          claim_id: c_92GKoT6fQBbcUvMJ97UNxN
          source_id: s_71BvEPSkw95w2LNHEfbowH
          stance: supports
          locator: CBDB:1911
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_B63pwYwiJA4oL3UeIJMSZK
        subject_person_id: p_Pp7M9RgnjpKf6F2mKVs4Gk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_urS9cC48gkGJPLgZJd585c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k-tg6pfCAFA74ER3l-aFhv
          claim_id: c_B63pwYwiJA4oL3UeIJMSZK
          source_id: s_71BvEPSkw95w2LNHEfbowH
          stance: supports
          locator: CBDB 双向互证（父 王兼皇 ⇄ 子 王皞）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_Pp7M9RgnjpKf6F2mKVs4Gk
        status: active
        display_name: 王兼皇
        merged_into_person_id: null
  children:
    - claim:
        id: c_o5mvwneWeEec2EgPvd74hf
        subject_person_id: p_urS9cC48gkGJPLgZJd585c
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Gaq4YwhvZqJ5S8SQoKTRVo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vkA3gTbsHblve9w86KnBCj
          claim_id: c_o5mvwneWeEec2EgPvd74hf
          source_id: s_LtFhfXd4SG3LGJBEn7eTp8
          stance: supports
          locator: CBDB 双向互证（父 王皞 ⇄ 子 王繹）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_LtFhfXd4SG3LGJBEn7eTp8
            source_type: api_record
            title: 中国历代人物传记资料库：王繹（CBDB 1824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1824&o=json
            external_identifier: CBDB:1824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Gaq4YwhvZqJ5S8SQoKTRVo
        status: active
        display_name: 王繹
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王皞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王皞 | accepted |
| bio.summary | 王皞，宋人物。籍贯開封，入仕進士，曾任太常寺丞、天章閣待制、右諫議大夫。（中国历代人物传记资料库 CBDB 1911） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Pp7M9RgnjpKf6F2mKVs4Gk | 王兼皇 | accepted |
| children | p_Gaq4YwhvZqJ5S8SQoKTRVo | 王繹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王皞（CBDB 1911）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1911&o=json)
- [中国历代人物传记资料库：王繹（CBDB 1824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1824&o=json)
