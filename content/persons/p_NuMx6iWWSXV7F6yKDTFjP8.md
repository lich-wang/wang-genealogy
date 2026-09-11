---
schema: wang-person/v1
id: p_NuMx6iWWSXV7F6yKDTFjP8
status: active
merged_into: null
display_name: 王濟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bgkZQe3AQR3d2mz3YratX9
        subject_person_id: p_NuMx6iWWSXV7F6yKDTFjP8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fbqCqGapG2JXVgED7Bg64M
          claim_id: c_bgkZQe3AQR3d2mz3YratX9
          source_id: s_xovCQFfdYPj56FeMEubwgZ
          stance: supports
          locator: CBDB:1777
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1777）
          source: &a1
            id: s_xovCQFfdYPj56FeMEubwgZ
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 1777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1777&o=json
            external_identifier: CBDB:1777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.237Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QqHitkNPAWWyjxwSxCPL2d
        subject_person_id: p_NuMx6iWWSXV7F6yKDTFjP8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 952年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eebgXBhMYhHDRW2LUZo5rp
          claim_id: c_QqHitkNPAWWyjxwSxCPL2d
          source_id: s_xovCQFfdYPj56FeMEubwgZ
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
        id: c_xHgk5rABNbBSJe4uWTNRqg
        subject_person_id: p_NuMx6iWWSXV7F6yKDTFjP8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1010年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U3Sog9ydB1u3KUE4w1p693
          claim_id: c_xHgk5rABNbBSJe4uWTNRqg
          source_id: s_xovCQFfdYPj56FeMEubwgZ
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
        id: c_ub4Uw8QwGsLgBuQLkGbrdx
        subject_person_id: p_NuMx6iWWSXV7F6yKDTFjP8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟（952年—1010年），宋人物。籍贯饒陽，身份为經學家—左傳、好學，入仕制舉，曾任安撫使、縣主簿、三司鹽鐵判官。（中国历代人物传记资料库 CBDB 1777）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7LKSe_n_T8KKNOxFA6PwGo
          claim_id: c_ub4Uw8QwGsLgBuQLkGbrdx
          source_id: s_xovCQFfdYPj56FeMEubwgZ
          stance: supports
          locator: CBDB:1777
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Wnn1qen9bx-G25TsZ4US-3
        subject_person_id: p_hnLURAAZEYEb8os9n3xAxz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NuMx6iWWSXV7F6yKDTFjP8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KjU13s9N7JFr7fznux-XD0
          claim_id: c_Wnn1qen9bx-G25TsZ4US-3
          source_id: s_7FC8vLjjEAEZ58BvUEE6yg
          stance: supports
          locator: CBDB 双向互证（子 王濟 ⇄ 父 王恕）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_7FC8vLjjEAEZ58BvUEE6yg
            source_type: api_record
            title: 中国历代人物传记资料库：王恕（CBDB 21973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21973&o=json
            external_identifier: CBDB:21973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.783Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hnLURAAZEYEb8os9n3xAxz
        status: active
        display_name: 王恕
        merged_into_person_id: null
  children:
    - claim:
        id: c_O5MatSHKJPRJddeI_0nh34
        subject_person_id: p_NuMx6iWWSXV7F6yKDTFjP8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gkPpiEzsNPGEaJ8ZMcrkuN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dEQ7v-2oPNfxx2E7AU5kmQ
          claim_id: c_O5MatSHKJPRJddeI_0nh34
          source_id: s_EKMKrLvVviV2guyQPDzWMJ
          stance: supports
          locator: CBDB 双向互证（父 王濟 ⇄ 子 王孝傑）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_EKMKrLvVviV2guyQPDzWMJ
            source_type: api_record
            title: 中国历代人物传记资料库：王孝傑（CBDB 21974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21974&o=json
            external_identifier: CBDB:21974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.785Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gkPpiEzsNPGEaJ8ZMcrkuN
        status: active
        display_name: 王孝傑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟 | accepted |
| birth.date | 952年 | accepted |
| death.date | 1010年 | accepted |
| bio.summary | 王濟（952年—1010年），宋人物。籍贯饒陽，身份为經學家—左傳、好學，入仕制舉，曾任安撫使、縣主簿、三司鹽鐵判官。（中国历代人物传记资料库 CBDB 1777） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hnLURAAZEYEb8os9n3xAxz | 王恕 | accepted |
| children | p_gkPpiEzsNPGEaJ8ZMcrkuN | 王孝傑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濟（CBDB 1777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1777&o=json)
- [中国历代人物传记资料库：王恕（CBDB 21973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21973&o=json)
- [中国历代人物传记资料库：王孝傑（CBDB 21974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21974&o=json)
