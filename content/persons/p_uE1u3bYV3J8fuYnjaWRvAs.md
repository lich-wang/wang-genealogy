---
schema: wang-person/v1
id: p_uE1u3bYV3J8fuYnjaWRvAs
status: active
merged_into: null
display_name: 王釗
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mgyG9BLzyx3gEFwFrNWpCJ
        subject_person_id: p_uE1u3bYV3J8fuYnjaWRvAs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AhfKfudaQRj6QuQUiS4AAC
          claim_id: c_mgyG9BLzyx3gEFwFrNWpCJ
          source_id: s_8Gub5FMYjB2ymJVJoisx4K
          stance: supports
          locator: CBDB:233436
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（233436）
          source: &a1
            id: s_8Gub5FMYjB2ymJVJoisx4K
            source_type: api_record
            title: 中国历代人物传记资料库：王釗（CBDB 233436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233436&o=json
            external_identifier: CBDB:233436
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.716Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VER4pFCuxUaGac7LArRhAm
        subject_person_id: p_uE1u3bYV3J8fuYnjaWRvAs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釗，明人物。籍贯海鹽。（中国历代人物传记资料库 CBDB 233436）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fu12pHrMMmKMaHY3qXrwwX
          claim_id: c_VER4pFCuxUaGac7LArRhAm
          source_id: s_8Gub5FMYjB2ymJVJoisx4K
          stance: supports
          locator: CBDB:233436
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_afJkvdubxMvbV5KvpBwPng
        subject_person_id: p_uE1u3bYV3J8fuYnjaWRvAs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cpGBEq63QojtvoRHpvNFEb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fgrkiNHk5F3eXuyCriCmhS
          claim_id: c_afJkvdubxMvbV5KvpBwPng
          source_id: s_hQ4MNw8gYqbwTtzMu8ZNXd
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第三十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hQ4MNw8gYqbwTtzMu8ZNXd
            source_type: api_record
            title: 中国历代人物传记资料库：王家相（CBDB 207666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207666&o=json
            external_identifier: CBDB:207666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.924Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cpGBEq63QojtvoRHpvNFEb
        status: active
        display_name: 王家相
        merged_into_person_id: null
    - claim:
        id: c_1--n-H2TzQLq1LNsMXoOA8
        subject_person_id: p_uE1u3bYV3J8fuYnjaWRvAs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GCN9rhW3RQqkheM3zYiA9h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4jrXxg4CRZo-902uV1IBSc
          claim_id: c_1--n-H2TzQLq1LNsMXoOA8
          source_id: s_jZlilIrvmBBmgmt5trJjkr
          stance: supports
          locator: CBDB：兄弟 王家相（207666）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王繼曾 与 王家相 为同胞（CBDB 记「弟」），王家相 之父／母即 王繼曾 之父／母。
          source:
            id: s_jZlilIrvmBBmgmt5trJjkr
            source_type: api_record
            title: 中国历代人物传记资料库：王繼曾（CBDB 233447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233447&o=json
            external_identifier: CBDB:233447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GCN9rhW3RQqkheM3zYiA9h
        status: active
        display_name: 王繼曾
        merged_into_person_id: null
    - claim:
        id: c_HvyqBI8Nt-NhbDhG8ObtA2
        subject_person_id: p_uE1u3bYV3J8fuYnjaWRvAs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KQ43jri1TgMLLT1r2xbZb7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3_LkFfmV2ejbT8qtNzJbR1
          claim_id: c_HvyqBI8Nt-NhbDhG8ObtA2
          source_id: s_dKNCxyeUwU5e0rROYhBlk_
          stance: supports
          locator: CBDB：兄弟 王家相（207666）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王家材 与 王家相 为同胞（CBDB 记「弟」），王家相 之父／母即 王家材 之父／母。
          source:
            id: s_dKNCxyeUwU5e0rROYhBlk_
            source_type: api_record
            title: 中国历代人物传记资料库：王家材（CBDB 233440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233440&o=json
            external_identifier: CBDB:233440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KQ43jri1TgMLLT1r2xbZb7
        status: active
        display_name: 王家材
        merged_into_person_id: null
    - claim:
        id: c_L8YICULJ8QoWBB8KOAzKj2
        subject_person_id: p_uE1u3bYV3J8fuYnjaWRvAs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QXEPF5M7Z3UCSqFSmeXk3g
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Aibjez4mdJLgMoAwTsRZDH
          claim_id: c_L8YICULJ8QoWBB8KOAzKj2
          source_id: s_tk6T8HN4rQh5KL0d9lhS88
          stance: supports
          locator: CBDB：兄弟 王家相（207666）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王手謙 与 王家相 为同胞（CBDB 记「弟」），王家相 之父／母即 王手謙 之父／母。
          source:
            id: s_tk6T8HN4rQh5KL0d9lhS88
            source_type: api_record
            title: 中国历代人物传记资料库：王手謙（CBDB 233446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233446&o=json
            external_identifier: CBDB:233446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QXEPF5M7Z3UCSqFSmeXk3g
        status: active
        display_name: 王手謙
        merged_into_person_id: null
    - claim:
        id: c_fRYvIvAfm_4hxHVhfLP0OH
        subject_person_id: p_uE1u3bYV3J8fuYnjaWRvAs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_doh7n6XG4LRCKcdG4A9qGV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_--TMfuU93dLzBIA2mZhSer
          claim_id: c_fRYvIvAfm_4hxHVhfLP0OH
          source_id: s_QgxLQToudguhgsV21nkYZV
          stance: supports
          locator: CBDB：兄弟 王家相（207666）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王洪極 与 王家相 为同胞（CBDB 记「弟」），王家相 之父／母即 王洪極 之父／母。
          source:
            id: s_QgxLQToudguhgsV21nkYZV
            source_type: api_record
            title: 中国历代人物传记资料库：王洪極（CBDB 233445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233445&o=json
            external_identifier: CBDB:233445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_doh7n6XG4LRCKcdG4A9qGV
        status: active
        display_name: 王洪極
        merged_into_person_id: null
    - claim:
        id: c_wVscYfEX8DvIec9acCw9Zb
        subject_person_id: p_uE1u3bYV3J8fuYnjaWRvAs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zzbxUSbck9VSNxAFtK3Pab
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vTbJQNo5t814Ue3hiu3oOc
          claim_id: c_wVscYfEX8DvIec9acCw9Zb
          source_id: s_gG7ix5CdmLvy37HbdsmwzK
          stance: supports
          locator: CBDB：兄弟 王家相（207666）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王建中 与 王家相 为同胞（CBDB 记「弟」），王家相 之父／母即 王建中 之父／母。
          source:
            id: s_gG7ix5CdmLvy37HbdsmwzK
            source_type: api_record
            title: 中国历代人物传记资料库：王建中（CBDB 233441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233441&o=json
            external_identifier: CBDB:233441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zzbxUSbck9VSNxAFtK3Pab
        status: active
        display_name: 王建中
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王釗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王釗 | accepted |
| bio.summary | 王釗，明人物。籍贯海鹽。（中国历代人物传记资料库 CBDB 233436） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cpGBEq63QojtvoRHpvNFEb | 王家相 | accepted |
| children | p_GCN9rhW3RQqkheM3zYiA9h | 王繼曾 | accepted |
| children | p_KQ43jri1TgMLLT1r2xbZb7 | 王家材 | accepted |
| children | p_QXEPF5M7Z3UCSqFSmeXk3g | 王手謙 | accepted |
| children | p_doh7n6XG4LRCKcdG4A9qGV | 王洪極 | accepted |
| children | p_zzbxUSbck9VSNxAFtK3Pab | 王建中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洪極（CBDB 233445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233445&o=json)
- [中国历代人物传记资料库：王繼曾（CBDB 233447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233447&o=json)
- [中国历代人物传记资料库：王家材（CBDB 233440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233440&o=json)
- [中国历代人物传记资料库：王家相（CBDB 207666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207666&o=json)
- [中国历代人物传记资料库：王建中（CBDB 233441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233441&o=json)
- [中国历代人物传记资料库：王手謙（CBDB 233446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233446&o=json)
- [中国历代人物传记资料库：王釗（CBDB 233436）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233436&o=json)
