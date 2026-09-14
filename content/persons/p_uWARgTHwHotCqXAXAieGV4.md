---
schema: wang-person/v1
id: p_uWARgTHwHotCqXAXAieGV4
status: active
merged_into: null
display_name: 王世芳
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZNqdkWSv2ZzLsSqpo5a6Pn
        subject_person_id: p_uWARgTHwHotCqXAXAieGV4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ogpM1rN1pXPVPMyf9HZjSZ
          claim_id: c_ZNqdkWSv2ZzLsSqpo5a6Pn
          source_id: s_PWDQtsgvbp39hk2uRjqnJW
          stance: supports
          locator: CBDB:337555
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（337555）
          source: &a1
            id: s_PWDQtsgvbp39hk2uRjqnJW
            source_type: api_record
            title: 中国历代人物传记资料库：王世芳（CBDB 337555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337555&o=json
            external_identifier: CBDB:337555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.516Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9WnEfuTtLmBnXze46opvae
        subject_person_id: p_uWARgTHwHotCqXAXAieGV4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世芳，明人物。隆慶二年進士，籍贯太倉州，曾任提刑按察使司提學副使。（中国历代人物传记资料库 CBDB 337555）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A1K9aJtj-55ewODpHtCIri
          claim_id: c_9WnEfuTtLmBnXze46opvae
          source_id: s_PWDQtsgvbp39hk2uRjqnJW
          stance: supports
          locator: CBDB:337555
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_tYVldj5CN8a6NJq0grvyel
        subject_person_id: p_uWARgTHwHotCqXAXAieGV4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2CCGS25AmJvxKtCikhBKeQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-PeOvEniz9I1kRrDrARp_2
          claim_id: c_tYVldj5CN8a6NJq0grvyel
          source_id: s_3huwJDws72HMTYCFK3FEtU
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第三百名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3huwJDws72HMTYCFK3FEtU
            source_type: api_record
            title: 中国历代人物传记资料库：王一誠（CBDB 205728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205728&o=json
            external_identifier: CBDB:205728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.871Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2CCGS25AmJvxKtCikhBKeQ
        status: active
        display_name: 王一誠
        merged_into_person_id: null
    - claim:
        id: c_V7ZJ49waO3LmW3_4TTDma0
        subject_person_id: p_uWARgTHwHotCqXAXAieGV4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DJUjeZKvix9DZSqNZ8E53v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lUcJWd-Wr6N6DhBqllcY_r
          claim_id: c_V7ZJ49waO3LmW3_4TTDma0
          source_id: s_0n5F5FOIzlQKtNBTP__VZ8
          stance: supports
          locator: CBDB：兄弟 王一誠（205728）之父／母 王世芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王一貫 与 王一誠 为同胞（CBDB 记「弟」），王一誠 之父／母即 王一貫 之父／母。
          source:
            id: s_0n5F5FOIzlQKtNBTP__VZ8
            source_type: api_record
            title: 中国历代人物传记资料库：王一貫（CBDB 337561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337561&o=json
            external_identifier: CBDB:337561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DJUjeZKvix9DZSqNZ8E53v
        status: active
        display_name: 王一貫
        merged_into_person_id: null
    - claim:
        id: c_h1Sg29vDNF7qoLy8yiCZx0
        subject_person_id: p_uWARgTHwHotCqXAXAieGV4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H5caZJKERBnBfasfVfcx13
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3b_cCx-OUZq4qZu099F9E0
          claim_id: c_h1Sg29vDNF7qoLy8yiCZx0
          source_id: s_dVGGlRLKkAmy_aJgfYvboF
          stance: supports
          locator: CBDB：兄弟 王一誠（205728）之父／母 王世芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王一善 与 王一誠 为同胞（CBDB 记「兄」），王一誠 之父／母即 王一善 之父／母。
          source:
            id: s_dVGGlRLKkAmy_aJgfYvboF
            source_type: api_record
            title: 中国历代人物传记资料库：王一善（CBDB 337567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337567&o=json
            external_identifier: CBDB:337567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H5caZJKERBnBfasfVfcx13
        status: active
        display_name: 王一善
        merged_into_person_id: null
    - claim:
        id: c_N7UrsnKtqr5SXYwCHagLwA
        subject_person_id: p_uWARgTHwHotCqXAXAieGV4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hnn3Qah4uCDRNgFy2Kb9jp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SrtUtUIWqvpFI3L7D3IZSi
          claim_id: c_N7UrsnKtqr5SXYwCHagLwA
          source_id: s_8h8dJafhVBHWe3OztMqOU6
          stance: supports
          locator: CBDB：兄弟 王一誠（205728）之父／母 王世芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王一恭 与 王一誠 为同胞（CBDB 记「兄」），王一誠 之父／母即 王一恭 之父／母。
          source:
            id: s_8h8dJafhVBHWe3OztMqOU6
            source_type: api_record
            title: 中国历代人物传记资料库：王一恭（CBDB 337566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337566&o=json
            external_identifier: CBDB:337566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hnn3Qah4uCDRNgFy2Kb9jp
        status: active
        display_name: 王一恭
        merged_into_person_id: null
    - claim:
        id: c_qOEDnyPmhOXg8YVNyQbdze
        subject_person_id: p_uWARgTHwHotCqXAXAieGV4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LmKFeUkuGcK4iEiowADGJo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OpCv3ZesrLZw8rWf2rKghB
          claim_id: c_qOEDnyPmhOXg8YVNyQbdze
          source_id: s_3dHkWE2nhvlnBSEsrkQN3h
          stance: supports
          locator: CBDB：兄弟 王一誠（205728）之父／母 王世芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王一中 与 王一誠 为同胞（CBDB 记「兄」），王一誠 之父／母即 王一中 之父／母。
          source:
            id: s_3dHkWE2nhvlnBSEsrkQN3h
            source_type: api_record
            title: 中国历代人物传记资料库：王一中（CBDB 337564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337564&o=json
            external_identifier: CBDB:337564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LmKFeUkuGcK4iEiowADGJo
        status: active
        display_name: 王一中
        merged_into_person_id: null
    - claim:
        id: c_LEz8YLsj7HdDOOsT7ZUacs
        subject_person_id: p_uWARgTHwHotCqXAXAieGV4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MSNZqYHYcU7EnBQzhQ6PX7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vRmRL7PsVASO0y9UpSFuz2
          claim_id: c_LEz8YLsj7HdDOOsT7ZUacs
          source_id: s_JjfjWrzp_WqQF30x63cX0d
          stance: supports
          locator: CBDB：兄弟 王一誠（205728）之父／母 王世芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王一藝 与 王一誠 为同胞（CBDB 记「兄」），王一誠 之父／母即 王一藝 之父／母。
          source:
            id: s_JjfjWrzp_WqQF30x63cX0d
            source_type: api_record
            title: 中国历代人物传记资料库：王一藝（CBDB 337568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337568&o=json
            external_identifier: CBDB:337568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MSNZqYHYcU7EnBQzhQ6PX7
        status: active
        display_name: 王一藝
        merged_into_person_id: null
    - claim:
        id: c_ad6RQZhQpAayFnWE8bGunM
        subject_person_id: p_uWARgTHwHotCqXAXAieGV4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UEDbcC98Da16FKRQBoMwdY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ic6xpjNtRfpg24llkP7A1z
          claim_id: c_ad6RQZhQpAayFnWE8bGunM
          source_id: s_uewrSBqVHj5n88LL_X4bmD
          stance: supports
          locator: CBDB：兄弟 王一誠（205728）之父／母 王世芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王一正 与 王一誠 为同胞（CBDB 记「兄」），王一誠 之父／母即 王一正 之父／母。
          source:
            id: s_uewrSBqVHj5n88LL_X4bmD
            source_type: api_record
            title: 中国历代人物传记资料库：王一正（CBDB 337563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337563&o=json
            external_identifier: CBDB:337563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UEDbcC98Da16FKRQBoMwdY
        status: active
        display_name: 王一正
        merged_into_person_id: null
    - claim:
        id: c_dhCsHW7qU6AsSDkvsLCbgE
        subject_person_id: p_uWARgTHwHotCqXAXAieGV4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nWKMQGHVTLhGRJrWnmJbcy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ovyfM0tM4SNE0bL5FhLdM_
          claim_id: c_dhCsHW7qU6AsSDkvsLCbgE
          source_id: s_Qb8SJC2AqCRdQT5wL0jR8p
          stance: supports
          locator: CBDB：兄弟 王一誠（205728）之父／母 王世芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王一元 与 王一誠 为同胞（CBDB 记「兄」），王一誠 之父／母即 王一元 之父／母。
          source:
            id: s_Qb8SJC2AqCRdQT5wL0jR8p
            source_type: api_record
            title: 中国历代人物传记资料库：王一元（CBDB 337562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337562&o=json
            external_identifier: CBDB:337562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nWKMQGHVTLhGRJrWnmJbcy
        status: active
        display_name: 王一元
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世芳 | accepted |
| bio.summary | 王世芳，明人物。隆慶二年進士，籍贯太倉州，曾任提刑按察使司提學副使。（中国历代人物传记资料库 CBDB 337555） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2CCGS25AmJvxKtCikhBKeQ | 王一誠 | accepted |
| children | p_DJUjeZKvix9DZSqNZ8E53v | 王一貫 | accepted |
| children | p_H5caZJKERBnBfasfVfcx13 | 王一善 | accepted |
| children | p_Hnn3Qah4uCDRNgFy2Kb9jp | 王一恭 | accepted |
| children | p_LmKFeUkuGcK4iEiowADGJo | 王一中 | accepted |
| children | p_MSNZqYHYcU7EnBQzhQ6PX7 | 王一藝 | accepted |
| children | p_UEDbcC98Da16FKRQBoMwdY | 王一正 | accepted |
| children | p_nWKMQGHVTLhGRJrWnmJbcy | 王一元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世芳（CBDB 337555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337555&o=json)
- [中国历代人物传记资料库：王一誠（CBDB 205728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205728&o=json)
- [中国历代人物传记资料库：王一恭（CBDB 337566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337566&o=json)
- [中国历代人物传记资料库：王一貫（CBDB 337561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337561&o=json)
- [中国历代人物传记资料库：王一善（CBDB 337567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337567&o=json)
- [中国历代人物传记资料库：王一藝（CBDB 337568）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337568&o=json)
- [中国历代人物传记资料库：王一元（CBDB 337562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337562&o=json)
- [中国历代人物传记资料库：王一正（CBDB 337563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337563&o=json)
- [中国历代人物传记资料库：王一中（CBDB 337564）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337564&o=json)
