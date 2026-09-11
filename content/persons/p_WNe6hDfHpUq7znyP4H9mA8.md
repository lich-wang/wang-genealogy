---
schema: wang-person/v1
id: p_WNe6hDfHpUq7znyP4H9mA8
status: active
merged_into: null
display_name: 王師伋
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XtT5K5d1u2n4qHLc7L4gHp
        subject_person_id: p_WNe6hDfHpUq7znyP4H9mA8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師伋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u5DrDAzdzx6R6FkBj1FKQT
          claim_id: c_XtT5K5d1u2n4qHLc7L4gHp
          source_id: s_3thB48cK6JVgBoEkCBgPhr
          stance: supports
          locator: CBDB:17666
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17666）
          source: &a1
            id: s_3thB48cK6JVgBoEkCBgPhr
            source_type: api_record
            title: 中国历代人物传记资料库：王師伋（CBDB 17666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17666&o=json
            external_identifier: CBDB:17666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.667Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PvhWQ1CuMEGph4KEiBksnJ
        subject_person_id: p_WNe6hDfHpUq7znyP4H9mA8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DReNqijQ3w3NkDZQd81xqV
          claim_id: c_PvhWQ1CuMEGph4KEiBksnJ
          source_id: s_3thB48cK6JVgBoEkCBgPhr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_YNK17qIK6H3vnHBQu9UUa9
        subject_person_id: p_WNe6hDfHpUq7znyP4H9mA8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Ycdxbn3GZ4uAAxqbdiXaXw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YdbakLKbQ9XcZI2p-bOiPC
          claim_id: c_YNK17qIK6H3vnHBQu9UUa9
          source_id: s_4T4ZNHxxbnQUoKwCnoRAur
          stance: supports
          locator: CBDB 双向互证（妻子 宗惠真）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4T4ZNHxxbnQUoKwCnoRAur
            source_type: api_record
            title: 中国历代人物传记资料库：宗惠真（CBDB 5282）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5282&o=json
            external_identifier: CBDB:5282
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Ycdxbn3GZ4uAAxqbdiXaXw
        status: active
        display_name: 宗惠真
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_vHFvCl8NruTXp4uBPRpARi
        subject_person_id: p_WNe6hDfHpUq7znyP4H9mA8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wKfvgdvNixuHKZaA84Vuyy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rOmDgUEAeD8Grsk_ZEil8_
          claim_id: c_vHFvCl8NruTXp4uBPRpARi
          source_id: s_7h1Zwe6mg1j6B2XYn4629k
          stance: supports
          locator: CBDB 双向互证（曾祖 王師伋 ⇄ 曾孫; 重孫 王桂）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_7h1Zwe6mg1j6B2XYn4629k
            source_type: api_record
            title: 中国历代人物传记资料库：王桂（CBDB 38084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38084&o=json
            external_identifier: CBDB:38084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.353Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wKfvgdvNixuHKZaA84Vuyy
        status: active
        display_name: 王桂
        merged_into_person_id: null
  other: []
---

# 王師伋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師伋 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Ycdxbn3GZ4uAAxqbdiXaXw | 宗惠真 | accepted |
| descendants | p_wKfvgdvNixuHKZaA84Vuyy | 王桂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王桂（CBDB 38084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38084&o=json)
- [中国历代人物传记资料库：王師伋（CBDB 17666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17666&o=json)
- [中国历代人物传记资料库：宗惠真（CBDB 5282）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5282&o=json)
