---
schema: wang-person/v1
id: p_u7EsVBbqzhdscb4MCv8fHW
status: active
merged_into: null
display_name: 王承芳
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6ALNzAnbztsavnp6hYABb2
        subject_person_id: p_u7EsVBbqzhdscb4MCv8fHW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EHa53v9M6FpYdoZfhjPvH4
          claim_id: c_6ALNzAnbztsavnp6hYABb2
          source_id: s_LHgMBTSrtVrvKx74zVjc4S
          stance: supports
          locator: CBDB:208931
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208931）
          source: &a1
            id: s_LHgMBTSrtVrvKx74zVjc4S
            source_type: api_record
            title: 中国历代人物传记资料库：王承芳（CBDB 208931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208931&o=json
            external_identifier: CBDB:208931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gjNh6tgVtsPkUpHZi8uEjV
        subject_person_id: p_u7EsVBbqzhdscb4MCv8fHW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承芳，明人物。隆慶五年進士，籍贯蘄水。（中国历代人物传记资料库 CBDB 208931）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IA2yZeUYCRGCEmsUm3HgY4
          claim_id: c_gjNh6tgVtsPkUpHZi8uEjV
          source_id: s_LHgMBTSrtVrvKx74zVjc4S
          stance: supports
          locator: CBDB:208931
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_FS-KHpRJ0IXVOEfWGY9Kg3
        subject_person_id: p_u7EsVBbqzhdscb4MCv8fHW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Sg6kuXv7Vis1mLCj6EFgTh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B8_y4pKR3EEHrMytFsa9WJ
          claim_id: c_FS-KHpRJ0IXVOEfWGY9Kg3
          source_id: s_LHgMBTSrtVrvKx74zVjc4S
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Sg6kuXv7Vis1mLCj6EFgTh
        status: active
        display_name: 王希元
        merged_into_person_id: null
    - claim:
        id: c_yiR8QswxNxChH4Ov2c7Bza
        subject_person_id: p_u7EsVBbqzhdscb4MCv8fHW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5DVfpj6xtBAqfzjXBenRbn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3xxxRH1MjH6HVkZ0CdABSo
          claim_id: c_yiR8QswxNxChH4Ov2c7Bza
          source_id: s_MtOfumOaXCC2B-s8jr7wWw
          stance: supports
          locator: CBDB：兄弟 王希元（126544）之父／母 王承芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王希程 与 王希元 为同胞（CBDB 记「弟」），王希元 之父／母即 王希程 之父／母。
          source:
            id: s_MtOfumOaXCC2B-s8jr7wWw
            source_type: api_record
            title: 中国历代人物传记资料库：王希程（CBDB 208938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208938&o=json
            external_identifier: CBDB:208938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5DVfpj6xtBAqfzjXBenRbn
        status: active
        display_name: 王希程
        merged_into_person_id: null
    - claim:
        id: c_P9Zh4aysfpQhlTQuq8tZQF
        subject_person_id: p_u7EsVBbqzhdscb4MCv8fHW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6mhgF3YZN8dDieYnGS7213
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6qj3dky5xpGOJ0otI6DAuD
          claim_id: c_P9Zh4aysfpQhlTQuq8tZQF
          source_id: s_0hcGC9GwJArYsYrRtwlcYa
          stance: supports
          locator: CBDB：兄弟 王希元（126544）之父／母 王承芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王希孟 与 王希元 为同胞（CBDB 记「弟」），王希元 之父／母即 王希孟 之父／母。
          source:
            id: s_0hcGC9GwJArYsYrRtwlcYa
            source_type: api_record
            title: 中国历代人物传记资料库：王希孟（CBDB 208936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208936&o=json
            external_identifier: CBDB:208936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6mhgF3YZN8dDieYnGS7213
        status: active
        display_name: 王希孟
        merged_into_person_id: null
    - claim:
        id: c_yt5vAY7Tg93xHewNi1vVGv
        subject_person_id: p_u7EsVBbqzhdscb4MCv8fHW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PzQMN95GqE7HZfgDzsGUwc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hvRbwwBpb9-J3mPnliFuUG
          claim_id: c_yt5vAY7Tg93xHewNi1vVGv
          source_id: s_sbSmhV9TVtlk47M6WVjRzi
          stance: supports
          locator: CBDB：兄弟 王希元（126544）之父／母 王承芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王希雍 与 王希元 为同胞（CBDB 记「兄」），王希元 之父／母即 王希雍 之父／母。
          source:
            id: s_sbSmhV9TVtlk47M6WVjRzi
            source_type: api_record
            title: 中国历代人物传记资料库：王希雍（CBDB 208940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208940&o=json
            external_identifier: CBDB:208940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PzQMN95GqE7HZfgDzsGUwc
        status: active
        display_name: 王希雍
        merged_into_person_id: null
    - claim:
        id: c_Gv48E_x3IkxJBmidzxFGnw
        subject_person_id: p_u7EsVBbqzhdscb4MCv8fHW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S5afZnx4HUbL6UmzQFmGaa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vt0fjPRPkIU0qhy7fizBDT
          claim_id: c_Gv48E_x3IkxJBmidzxFGnw
          source_id: s_DhEVCyfhy2FKuWdrk-Y_eg
          stance: supports
          locator: CBDB：兄弟 王希元（126544）之父／母 王承芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王希朱 与 王希元 为同胞（CBDB 记「兄」），王希元 之父／母即 王希朱 之父／母。
          source:
            id: s_DhEVCyfhy2FKuWdrk-Y_eg
            source_type: api_record
            title: 中国历代人物传记资料库：王希朱（CBDB 208941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208941&o=json
            external_identifier: CBDB:208941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_S5afZnx4HUbL6UmzQFmGaa
        status: active
        display_name: 王希朱
        merged_into_person_id: null
    - claim:
        id: c__OoJwet-CKBZfwUQTP7Awn
        subject_person_id: p_u7EsVBbqzhdscb4MCv8fHW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TiEDux462hPxafQMX5eEkf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZkSWQQt3kumBfUPtDf-hqP
          claim_id: c__OoJwet-CKBZfwUQTP7Awn
          source_id: s_kkGzlVpoV334Clv5R4gpbk
          stance: supports
          locator: CBDB：兄弟 王希元（126544）之父／母 王承芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王希曾 与 王希元 为同胞（CBDB 记「弟」），王希元 之父／母即 王希曾 之父／母。
          source:
            id: s_kkGzlVpoV334Clv5R4gpbk
            source_type: api_record
            title: 中国历代人物传记资料库：王希曾（CBDB 208935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208935&o=json
            external_identifier: CBDB:208935
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TiEDux462hPxafQMX5eEkf
        status: active
        display_name: 王希曾
        merged_into_person_id: null
    - claim:
        id: c_x3EfS7D2CDtDfKF4uozeAQ
        subject_person_id: p_u7EsVBbqzhdscb4MCv8fHW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_n613FfpZSCJ7MEY987BPaM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5th0_QHj6SKaKvRJOPDlB0
          claim_id: c_x3EfS7D2CDtDfKF4uozeAQ
          source_id: s_KJRh4rsHdyao_y3C6K1NTe
          stance: supports
          locator: CBDB：兄弟 王希元（126544）之父／母 王承芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王希閔 与 王希元 为同胞（CBDB 记「弟」），王希元 之父／母即 王希閔 之父／母。
          source:
            id: s_KJRh4rsHdyao_y3C6K1NTe
            source_type: api_record
            title: 中国历代人物传记资料库：王希閔（CBDB 208939）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208939&o=json
            external_identifier: CBDB:208939
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_n613FfpZSCJ7MEY987BPaM
        status: active
        display_name: 王希閔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承芳 | accepted |
| bio.summary | 王承芳，明人物。隆慶五年進士，籍贯蘄水。（中国历代人物传记资料库 CBDB 208931） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Sg6kuXv7Vis1mLCj6EFgTh | 王希元 | accepted |
| children | p_5DVfpj6xtBAqfzjXBenRbn | 王希程 | accepted |
| children | p_6mhgF3YZN8dDieYnGS7213 | 王希孟 | accepted |
| children | p_PzQMN95GqE7HZfgDzsGUwc | 王希雍 | accepted |
| children | p_S5afZnx4HUbL6UmzQFmGaa | 王希朱 | accepted |
| children | p_TiEDux462hPxafQMX5eEkf | 王希曾 | accepted |
| children | p_n613FfpZSCJ7MEY987BPaM | 王希閔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承芳（CBDB 208931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208931&o=json)
- [中国历代人物传记资料库：王希曾（CBDB 208935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208935&o=json)
- [中国历代人物传记资料库：王希程（CBDB 208938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208938&o=json)
- [中国历代人物传记资料库：王希孟（CBDB 208936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208936&o=json)
- [中国历代人物传记资料库：王希閔（CBDB 208939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208939&o=json)
- [中国历代人物传记资料库：王希雍（CBDB 208940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208940&o=json)
- [中国历代人物传记资料库：王希朱（CBDB 208941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208941&o=json)
