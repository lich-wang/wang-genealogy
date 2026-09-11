---
schema: wang-person/v1
id: p_G6fKAKWzeChduasCK684Fr
status: active
merged_into: null
display_name: 王守誠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CNLTsHBCxAY1ZYyQa2n641
        subject_person_id: p_G6fKAKWzeChduasCK684Fr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BDS8DN3izj3aGYeGQPfH7V
          claim_id: c_CNLTsHBCxAY1ZYyQa2n641
          source_id: s_mDDFkJCaevic2299EtyVGF
          stance: supports
          locator: CBDB:29334
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（29334）
          source: &a1
            id: s_mDDFkJCaevic2299EtyVGF
            source_type: api_record
            title: 中国历代人物传记资料库：王守誠（CBDB 29334）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29334&o=json
            external_identifier: CBDB:29334
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.001Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kmWcKmv6b9V6cwh8iZVpwk
        subject_person_id: p_G6fKAKWzeChduasCK684Fr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1296年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qv3RFXws4gGaSrAYRrwyDD
          claim_id: c_kmWcKmv6b9V6cwh8iZVpwk
          source_id: s_mDDFkJCaevic2299EtyVGF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Etx2i3skNi3R3qmPekUWKC
        subject_person_id: p_G6fKAKWzeChduasCK684Fr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1349年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zakBzGz1xF2ny2f2hcv3xM
          claim_id: c_Etx2i3skNi3R3qmPekUWKC
          source_id: s_mDDFkJCaevic2299EtyVGF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xvo1KHyXt3pPbU6WDEUwAh
        subject_person_id: p_G6fKAKWzeChduasCK684Fr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守誠（1296年—1349年），元人物。籍贯陽曲，入仕進士，曾任監察御史、禮部尚書、祕書郎。（中国历代人物传记资料库 CBDB 29334）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6h0LnXPXqHjld1vmS2pYsP
          claim_id: c_xvo1KHyXt3pPbU6WDEUwAh
          source_id: s_mDDFkJCaevic2299EtyVGF
          stance: supports
          locator: CBDB:29334
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FF9t5G-mHvy9I2SB2lGrj5
        subject_person_id: p_xQwxzyMhqx25qoPHXKazKq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G6fKAKWzeChduasCK684Fr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TQJj7joZx9EtBpoDEIvQO1
          claim_id: c_FF9t5G-mHvy9I2SB2lGrj5
          source_id: s_mDDFkJCaevic2299EtyVGF
          stance: supports
          locator: CBDB 双向互证（父 王晦 ⇄ 子 王守誠）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_xQwxzyMhqx25qoPHXKazKq
        status: active
        display_name: 王晦
        merged_into_person_id: null
  children:
    - claim:
        id: c_HZD3O5s3VBVMVK3iT5mSBS
        subject_person_id: p_G6fKAKWzeChduasCK684Fr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i9z3FUD9Yo82n1QT5n5CYk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XO2GNK56x-ZW3Suq3WWll_
          claim_id: c_HZD3O5s3VBVMVK3iT5mSBS
          source_id: s_mDDFkJCaevic2299EtyVGF
          stance: supports
          locator: CBDB 双向互证（子 王射 ⇄ 父 王守誠）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_i9z3FUD9Yo82n1QT5n5CYk
        status: active
        display_name: 王射
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王守誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守誠 | accepted |
| birth.date | 1296年 | accepted |
| death.date | 1349年 | accepted |
| bio.summary | 王守誠（1296年—1349年），元人物。籍贯陽曲，入仕進士，曾任監察御史、禮部尚書、祕書郎。（中国历代人物传记资料库 CBDB 29334） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xQwxzyMhqx25qoPHXKazKq | 王晦 | accepted |
| children | p_i9z3FUD9Yo82n1QT5n5CYk | 王射 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守誠（CBDB 29334）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29334&o=json)
