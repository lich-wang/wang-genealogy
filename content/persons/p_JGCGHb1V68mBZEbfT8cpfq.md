---
schema: wang-person/v1
id: p_JGCGHb1V68mBZEbfT8cpfq
status: active
merged_into: null
display_name: 王敬先
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SBisy8uy3UKQ7sWc177Mfb
        subject_person_id: p_JGCGHb1V68mBZEbfT8cpfq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬先
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hCQ7WjifLCN3meNQ7kT3K1
          claim_id: c_SBisy8uy3UKQ7sWc177Mfb
          source_id: s_m3D4s4mwM8sbxWDiFXR3RS
          stance: supports
          locator: CBDB:286921
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（286921）
          source: &a1
            id: s_m3D4s4mwM8sbxWDiFXR3RS
            source_type: api_record
            title: 中国历代人物传记资料库：王敬先（CBDB 286921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286921&o=json
            external_identifier: CBDB:286921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.242Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hN77NfNMuT1XSZQ3MHDqZz
        subject_person_id: p_JGCGHb1V68mBZEbfT8cpfq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬先，明人物。永樂十年進士，籍贯泰和，曾任儒學訓導。（中国历代人物传记资料库 CBDB 286921）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r6uA2zR7E1U6qYkO45AoFz
          claim_id: c_hN77NfNMuT1XSZQ3MHDqZz
          source_id: s_m3D4s4mwM8sbxWDiFXR3RS
          stance: supports
          locator: CBDB:286921
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2tFfjwQ6ub3ylBYxCSOz64
        subject_person_id: p_mhv2745cG2mWonF5H2ZCdq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JGCGHb1V68mBZEbfT8cpfq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_shFEbKgOKnXP2A24bdWhro
          claim_id: c_2tFfjwQ6ub3ylBYxCSOz64
          source_id: s_QXM293cuJIxMjnT2fR14I0
          stance: supports
          locator: CBDB：兄弟 王嗣先（202354）之父／母 王古平
          quotation: null
          interpretation_note: 由兄弟关系推断：王敬先 与 王嗣先 为同胞（CBDB 记「弟」），王嗣先 之父／母即 王敬先 之父／母。
          source:
            id: s_QXM293cuJIxMjnT2fR14I0
            source_type: api_record
            title: 中国历代人物传记资料库：王敬先（CBDB 286921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286921&o=json
            external_identifier: CBDB:286921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mhv2745cG2mWonF5H2ZCdq
        status: active
        display_name: 王古平
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qvcrjRCW4t1Hjwiq3clOtc
        subject_person_id: p_51C8Kh4aNymAeDywG3epKL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JGCGHb1V68mBZEbfT8cpfq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KBticZ2BkpeT3Mp4VwPJae
          claim_id: c_qvcrjRCW4t1Hjwiq3clOtc
          source_id: s_QXM293cuJIxMjnT2fR14I0
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202354 王嗣先）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QXM293cuJIxMjnT2fR14I0
            source_type: api_record
            title: 中国历代人物传记资料库：王敬先（CBDB 286921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286921&o=json
            external_identifier: CBDB:286921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_51C8Kh4aNymAeDywG3epKL
        status: active
        display_name: 王嗣先
        merged_into_person_id: null
---

# 王敬先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬先 | accepted |
| bio.summary | 王敬先，明人物。永樂十年進士，籍贯泰和，曾任儒學訓導。（中国历代人物传记资料库 CBDB 286921） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mhv2745cG2mWonF5H2ZCdq | 王古平 | accepted |
| other | p_51C8Kh4aNymAeDywG3epKL | 王嗣先 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬先（CBDB 286921）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286921&o=json)
