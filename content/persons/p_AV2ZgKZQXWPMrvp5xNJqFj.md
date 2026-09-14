---
schema: wang-person/v1
id: p_AV2ZgKZQXWPMrvp5xNJqFj
status: active
merged_into: null
display_name: 王克復
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sWsMtorNuY3x6LjdQGDDF8
        subject_person_id: p_AV2ZgKZQXWPMrvp5xNJqFj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pFR8axM7pR2M9q7GaUYDaL
          claim_id: c_sWsMtorNuY3x6LjdQGDDF8
          source_id: s_f67YAvJ62hQ7NjsmZ31Sup
          stance: supports
          locator: CBDB:126540
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126540）
          source: &a1
            id: s_f67YAvJ62hQ7NjsmZ31Sup
            source_type: api_record
            title: 中国历代人物传记资料库：王克復（CBDB 126540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126540&o=json
            external_identifier: CBDB:126540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.011Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1iyKomhQg51VXhfKXdRdpa
        subject_person_id: p_AV2ZgKZQXWPMrvp5xNJqFj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克復，明人物。明清進士進士，籍贯福清，身份为法律專家，入仕進士。（中国历代人物传记资料库 CBDB 126540）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K_vyBQ7nyPM6bL821CjNoG
          claim_id: c_1iyKomhQg51VXhfKXdRdpa
          source_id: s_f67YAvJ62hQ7NjsmZ31Sup
          stance: supports
          locator: CBDB:126540
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mNyhBbOz34o-x2RhisoeHF
        subject_person_id: p_W9ZtR1XxvGkrodjCFZhZJj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AV2ZgKZQXWPMrvp5xNJqFj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E5WstGP1wjrrH0FpwOYmHU
          claim_id: c_mNyhBbOz34o-x2RhisoeHF
          source_id: s_f67YAvJ62hQ7NjsmZ31Sup
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第二十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_W9ZtR1XxvGkrodjCFZhZJj
        status: active
        display_name: 王朋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_NKJKreFTe0ToNq4mflWhCP
        subject_person_id: p_AV2ZgKZQXWPMrvp5xNJqFj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_6gGUL9TPP8WPBGWDKQDXir
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bVEOjzmiyMsN958uwLO_l2
          claim_id: c_NKJKreFTe0ToNq4mflWhCP
          source_id: s_b6ip0Dh3b16qq8X40em5iZ
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第二十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_b6ip0Dh3b16qq8X40em5iZ
            source_type: api_record
            title: 中国历代人物传记资料库：高氏(王克復妻)（CBDB 293440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293440&o=json
            external_identifier: CBDB:293440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6gGUL9TPP8WPBGWDKQDXir
        status: active
        display_name: 高氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_II5YSc4ITzlQBCae9Tqh1B
        subject_person_id: p_H62w62NygJ1818ULHj5N3C
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AV2ZgKZQXWPMrvp5xNJqFj
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4pdV4_jaqjubixCMQizCmt
          claim_id: c_II5YSc4ITzlQBCae9Tqh1B
          source_id: s_f67YAvJ62hQ7NjsmZ31Sup
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第二十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_H62w62NygJ1818ULHj5N3C
        status: active
        display_name: 王貴
        merged_into_person_id: null
    - claim:
        id: c_yVMVNXZdvcRbPGVRV0wjFP
        subject_person_id: p_cmh993UcaH1fhoZJBKNKT7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AV2ZgKZQXWPMrvp5xNJqFj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mMLvb0zdiJYR3kChrJaXK1
          claim_id: c_yVMVNXZdvcRbPGVRV0wjFP
          source_id: s_f67YAvJ62hQ7NjsmZ31Sup
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第二十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cmh993UcaH1fhoZJBKNKT7
        status: active
        display_name: 王仲
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_kbbVETOw8Kwzuh6BT6oE9f
        subject_person_id: p_7YZKZBichdHTL36MeU67jC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AV2ZgKZQXWPMrvp5xNJqFj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__vKTNr1KA7u9zerclxluJg
          claim_id: c_kbbVETOw8Kwzuh6BT6oE9f
          source_id: s_dhLl0qm2DRQoRFwzE1gazJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126540 王克復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dhLl0qm2DRQoRFwzE1gazJ
            source_type: api_record
            title: 中国历代人物传记资料库：王徽（CBDB 293473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293473&o=json
            external_identifier: CBDB:293473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7YZKZBichdHTL36MeU67jC
        status: active
        display_name: 王徽
        merged_into_person_id: null
    - claim:
        id: c_7uu_IWyfZ5ag_PZ3mlw962
        subject_person_id: p_AV2ZgKZQXWPMrvp5xNJqFj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PwftqoUXRDwthFpERn2N5X
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DI3ht5u8BBTrtxp0-xdKhp
          claim_id: c_7uu_IWyfZ5ag_PZ3mlw962
          source_id: s_Ti0G2gswOt-s_a3pmY6pFy
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126540 王克復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ti0G2gswOt-s_a3pmY6pFy
            source_type: api_record
            title: 中国历代人物传记资料库：王敦（CBDB 293462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293462&o=json
            external_identifier: CBDB:293462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PwftqoUXRDwthFpERn2N5X
        status: active
        display_name: 王敦
        merged_into_person_id: null
    - claim:
        id: c_Ko1xyPf53nrB0D8fQJkZ8D
        subject_person_id: p_AV2ZgKZQXWPMrvp5xNJqFj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ioFXfvCXGCdvN2b83UCpmb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q45YQVR_ymUDeMogTS9pM6
          claim_id: c_Ko1xyPf53nrB0D8fQJkZ8D
          source_id: s_0ZzVyX56w-pTZctYaNpmDq
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126540 王克復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0ZzVyX56w-pTZctYaNpmDq
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 293451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293451&o=json
            external_identifier: CBDB:293451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ioFXfvCXGCdvN2b83UCpmb
        status: active
        display_name: 王敏
        merged_into_person_id: null
---

# 王克復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克復 | accepted |
| bio.summary | 王克復，明人物。明清進士進士，籍贯福清，身份为法律專家，入仕進士。（中国历代人物传记资料库 CBDB 126540） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_W9ZtR1XxvGkrodjCFZhZJj | 王朋 | accepted |
| spouses | p_6gGUL9TPP8WPBGWDKQDXir | 高氏 | accepted |
| ancestors | p_H62w62NygJ1818ULHj5N3C | 王貴 | accepted |
| ancestors | p_cmh993UcaH1fhoZJBKNKT7 | 王仲 | accepted |
| other | p_7YZKZBichdHTL36MeU67jC | 王徽 | accepted |
| other | p_PwftqoUXRDwthFpERn2N5X | 王敦 | accepted |
| other | p_ioFXfvCXGCdvN2b83UCpmb | 王敏 | accepted |

## 外部来源

- [中国历代人物传记资料库：高氏(王克復妻)（CBDB 293440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293440&o=json)
- [中国历代人物传记资料库：王敦（CBDB 293462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293462&o=json)
- [中国历代人物传记资料库：王徽（CBDB 293473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293473&o=json)
- [中国历代人物传记资料库：王克復（CBDB 126540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126540&o=json)
- [中国历代人物传记资料库：王敏（CBDB 293451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293451&o=json)
