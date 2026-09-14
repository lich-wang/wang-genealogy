---
schema: wang-person/v1
id: p_Pp7M9RgnjpKf6F2mKVs4Gk
status: active
merged_into: null
display_name: 王兼皇
cbdb_id: 17736
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rz9QUPexiN4LgG2a9fokan
        subject_person_id: p_Pp7M9RgnjpKf6F2mKVs4Gk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兼皇，宋人物。籍贯益都。（中国历代人物传记资料库 CBDB 17736）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_bazJyerHlArKBYi1EPFrY6
          claim_id: c_Rz9QUPexiN4LgG2a9fokan
          source_id: s_eV31B1Lg7SBXEW5dZsucwo
          stance: supports
          locator: CBDB:17736
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_eV31B1Lg7SBXEW5dZsucwo
            source_type: api_record
            title: 中国历代人物传记资料库：王兼皇（CBDB 17736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17736&o=json
            external_identifier: CBDB:17736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xawzFR6sE9apVSQ7uz3D6m
        subject_person_id: p_Pp7M9RgnjpKf6F2mKVs4Gk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兼皇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qVuAWj9ZdP22Uj3otoPJLt
          claim_id: c_xawzFR6sE9apVSQ7uz3D6m
          source_id: s_eV31B1Lg7SBXEW5dZsucwo
          stance: supports
          locator: CBDB:17736
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GsgXQgFAZtNKEI0Tii31Uu
        subject_person_id: p_ZJUopZAcjUMxN4niZZoT6P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Pp7M9RgnjpKf6F2mKVs4Gk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XTTdb-7G-cjFQT9KYbCf2G
          claim_id: c_GsgXQgFAZtNKEI0Tii31Uu
          source_id: s_6rNKuuMLEELs4BfbjNKhDz
          stance: supports
          locator: CBDB 双向互证（子 王兼皇 ⇄ 父 王繼華）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_6rNKuuMLEELs4BfbjNKhDz
            source_type: api_record
            title: 中国历代人物传记资料库：王繼華（CBDB 17735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17735&o=json
            external_identifier: CBDB:17735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.669Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZJUopZAcjUMxN4niZZoT6P
        status: active
        display_name: 王繼華
        merged_into_person_id: null
  children:
    - claim:
        id: c_jkfsPxv1Y2zUSql6GqUpkP
        subject_person_id: p_Pp7M9RgnjpKf6F2mKVs4Gk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uEBsw62GZpP7Jv5oaHffEz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xDW_uI1L7zuUS4mt8xRG9Q
          claim_id: c_jkfsPxv1Y2zUSql6GqUpkP
          source_id: s_ALMNzYXANCKK1erRJwiTib
          stance: supports
          locator: CBDB 双向互证（父 王兼皇 ⇄ 子 王曾）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_ALMNzYXANCKK1erRJwiTib
            source_type: api_record
            title: 中国历代人物传记资料库：王曾（CBDB 1901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1901&o=json
            external_identifier: CBDB:1901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.383Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uEBsw62GZpP7Jv5oaHffEz
        status: active
        display_name: 王曾
        merged_into_person_id: null
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
          source:
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
      object_person:
        id: p_urS9cC48gkGJPLgZJd585c
        status: active
        display_name: 王皞
        merged_into_person_id: null
    - claim:
        id: c_uj-qEXOXKkwiSCeVoKIHqk
        subject_person_id: p_Pp7M9RgnjpKf6F2mKVs4Gk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y4LfRJV5tRugxLWL4RY4Jm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gg5rWnyfH7gnJV5TM9Bjku
          claim_id: c_uj-qEXOXKkwiSCeVoKIHqk
          source_id: s_GRux7Uom8TlnDfW5Ytlh61
          stance: supports
          locator: CBDB：兄弟 王曾（1901）之父／母 王兼皇
          quotation: null
          interpretation_note: 由兄弟关系推断：王皡 与 王曾 为同胞（CBDB 记「兄」），王曾 之父／母即 王皡 之父／母。
          source:
            id: s_GRux7Uom8TlnDfW5Ytlh61
            source_type: api_record
            title: 中国历代人物传记资料库：王皡（CBDB 45816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45816&o=json
            external_identifier: CBDB:45816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y4LfRJV5tRugxLWL4RY4Jm
        status: active
        display_name: 王皡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王兼皇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王兼皇，宋人物。籍贯益都。（中国历代人物传记资料库 CBDB 17736） | accepted |
| name.primary | 王兼皇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZJUopZAcjUMxN4niZZoT6P | 王繼華 | accepted |
| children | p_uEBsw62GZpP7Jv5oaHffEz | 王曾 | accepted |
| children | p_urS9cC48gkGJPLgZJd585c | 王皞 | accepted |
| children | p_y4LfRJV5tRugxLWL4RY4Jm | 王皡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王曾（CBDB 1901）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1901&o=json)
- [中国历代人物传记资料库：王皞（CBDB 1911）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1911&o=json)
- [中国历代人物传记资料库：王皡（CBDB 45816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45816&o=json)
- [中国历代人物传记资料库：王繼華（CBDB 17735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17735&o=json)
- [中国历代人物传记资料库：王兼皇（CBDB 17736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17736&o=json)
