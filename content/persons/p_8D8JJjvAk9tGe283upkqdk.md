---
schema: wang-person/v1
id: p_8D8JJjvAk9tGe283upkqdk
status: active
merged_into: null
display_name: 王守文
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Eqhy3ALCa479v7bySnY1c6
        subject_person_id: p_8D8JJjvAk9tGe283upkqdk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VTHwCjcQ4qvocU2w4evRo9
          claim_id: c_Eqhy3ALCa479v7bySnY1c6
          source_id: s_zbDcNK6UaeHRsYDrdL8c8Z
          stance: supports
          locator: CBDB:241883
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241883）
          source: &a1
            id: s_zbDcNK6UaeHRsYDrdL8c8Z
            source_type: api_record
            title: 中国历代人物传记资料库：王守文（CBDB 241883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241883&o=json
            external_identifier: CBDB:241883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UKVA1kkbYW4n7eKzWLzTr2
        subject_person_id: p_8D8JJjvAk9tGe283upkqdk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守文，明人物。成化二年進士，籍贯安岳，曾任知縣。（中国历代人物传记资料库 CBDB 241883）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hjmleKKKkLRoppyQW4oygl
          claim_id: c_UKVA1kkbYW4n7eKzWLzTr2
          source_id: s_zbDcNK6UaeHRsYDrdL8c8Z
          stance: supports
          locator: CBDB:241883
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_SVvoZK0xjk8g8Cg5L8JyJn
        subject_person_id: p_8D8JJjvAk9tGe283upkqdk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TxHEXLnqR7Hmrn4YZb9SRE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wVNQZtHXH1DmzuUBiFBxfp
          claim_id: c_SVvoZK0xjk8g8Cg5L8JyJn
          source_id: s_zbDcNK6UaeHRsYDrdL8c8Z
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百七十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TxHEXLnqR7Hmrn4YZb9SRE
        status: active
        display_name: 王璿
        merged_into_person_id: null
    - claim:
        id: c_86eUtUO84Gz-lmYsxIdcZ0
        subject_person_id: p_8D8JJjvAk9tGe283upkqdk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1T1Wke5ggnVnXexwtbxbDR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EdkbeY8yt4dzsEIxA0fiMr
          claim_id: c_86eUtUO84Gz-lmYsxIdcZ0
          source_id: s_UTIZ99l9eglKHydJCsUxTJ
          stance: supports
          locator: CBDB：兄弟 王璿（199220）之父／母 王守文
          quotation: null
          interpretation_note: 由兄弟关系推断：王琮 与 王璿 为同胞（CBDB 记「兄」），王璿 之父／母即 王琮 之父／母。
          source:
            id: s_UTIZ99l9eglKHydJCsUxTJ
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 241891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241891&o=json
            external_identifier: CBDB:241891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1T1Wke5ggnVnXexwtbxbDR
        status: active
        display_name: 王琮
        merged_into_person_id: null
    - claim:
        id: c_2zxZLkSWSoM1FVKjB-Dm8U
        subject_person_id: p_8D8JJjvAk9tGe283upkqdk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2MXAMeY1VrCakKx7BdFpCV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8jEayorZ8JFO7Xm8EkLgkr
          claim_id: c_2zxZLkSWSoM1FVKjB-Dm8U
          source_id: s_ghvrXuzN66ejNvuk9P6CyY
          stance: supports
          locator: CBDB：兄弟 王璿（199220）之父／母 王守文
          quotation: null
          interpretation_note: 由兄弟关系推断：王玉 与 王璿 为同胞（CBDB 记「兄」），王璿 之父／母即 王玉 之父／母。
          source:
            id: s_ghvrXuzN66ejNvuk9P6CyY
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 241888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241888&o=json
            external_identifier: CBDB:241888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2MXAMeY1VrCakKx7BdFpCV
        status: active
        display_name: 王玉
        merged_into_person_id: null
    - claim:
        id: c__WvsOoJrcIgJA4vuTJGfmQ
        subject_person_id: p_8D8JJjvAk9tGe283upkqdk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GKDH6wuGkDu29wkboCLWqr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__ikeACFF9C_pufHq-toi42
          claim_id: c__WvsOoJrcIgJA4vuTJGfmQ
          source_id: s_-UI2vXbXoLnoyMMomueoyJ
          stance: supports
          locator: CBDB：兄弟 王璿（199220）之父／母 王守文
          quotation: null
          interpretation_note: 由兄弟关系推断：王珮 与 王璿 为同胞（CBDB 记「兄」），王璿 之父／母即 王珮 之父／母。
          source:
            id: s_-UI2vXbXoLnoyMMomueoyJ
            source_type: api_record
            title: 中国历代人物传记资料库：王珮（CBDB 241890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241890&o=json
            external_identifier: CBDB:241890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GKDH6wuGkDu29wkboCLWqr
        status: active
        display_name: 王珮
        merged_into_person_id: null
    - claim:
        id: c_gbRr6LjYdH9HHi5bNvGW0b
        subject_person_id: p_8D8JJjvAk9tGe283upkqdk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KdFzQngyh6PD5UJNYTHzVv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uELUz6flG8r1sTD6MuiEK2
          claim_id: c_gbRr6LjYdH9HHi5bNvGW0b
          source_id: s_BYk6T8KSUX-IzPb6rVJ3ws
          stance: supports
          locator: CBDB：兄弟 王璿（199220）之父／母 王守文
          quotation: null
          interpretation_note: 由兄弟关系推断：王珩 与 王璿 为同胞（CBDB 记「兄」），王璿 之父／母即 王珩 之父／母。
          source:
            id: s_BYk6T8KSUX-IzPb6rVJ3ws
            source_type: api_record
            title: 中国历代人物传记资料库：王珩（CBDB 241889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241889&o=json
            external_identifier: CBDB:241889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KdFzQngyh6PD5UJNYTHzVv
        status: active
        display_name: 王珩
        merged_into_person_id: null
    - claim:
        id: c_ba-8cXfM2wM6-JFm5hbiv8
        subject_person_id: p_8D8JJjvAk9tGe283upkqdk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dCEZT1WezjPdG9Xoa6Z9bp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l3Ags3msAQfIPjgj4KOr8S
          claim_id: c_ba-8cXfM2wM6-JFm5hbiv8
          source_id: s_Z4NOYcyhQ9VRO2d-i80c0Q
          stance: supports
          locator: CBDB：兄弟 王璿（199220）之父／母 王守文
          quotation: null
          interpretation_note: 由兄弟关系推断：王璣 与 王璿 为同胞（CBDB 记「兄」），王璿 之父／母即 王璣 之父／母。
          source:
            id: s_Z4NOYcyhQ9VRO2d-i80c0Q
            source_type: api_record
            title: 中国历代人物传记资料库：王璣（CBDB 241887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241887&o=json
            external_identifier: CBDB:241887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dCEZT1WezjPdG9Xoa6Z9bp
        status: active
        display_name: 王璣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王守文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守文 | accepted |
| bio.summary | 王守文，明人物。成化二年進士，籍贯安岳，曾任知縣。（中国历代人物传记资料库 CBDB 241883） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_TxHEXLnqR7Hmrn4YZb9SRE | 王璿 | accepted |
| children | p_1T1Wke5ggnVnXexwtbxbDR | 王琮 | accepted |
| children | p_2MXAMeY1VrCakKx7BdFpCV | 王玉 | accepted |
| children | p_GKDH6wuGkDu29wkboCLWqr | 王珮 | accepted |
| children | p_KdFzQngyh6PD5UJNYTHzVv | 王珩 | accepted |
| children | p_dCEZT1WezjPdG9Xoa6Z9bp | 王璣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 241891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241891&o=json)
- [中国历代人物传记资料库：王珩（CBDB 241889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241889&o=json)
- [中国历代人物传记资料库：王璣（CBDB 241887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241887&o=json)
- [中国历代人物传记资料库：王珮（CBDB 241890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241890&o=json)
- [中国历代人物传记资料库：王守文（CBDB 241883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241883&o=json)
- [中国历代人物传记资料库：王玉（CBDB 241888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241888&o=json)
