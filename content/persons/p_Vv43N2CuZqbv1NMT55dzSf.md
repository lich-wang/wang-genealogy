---
schema: wang-person/v1
id: p_Vv43N2CuZqbv1NMT55dzSf
status: active
merged_into: null
display_name: 王琴
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pgy9zPbpUnvfUcgCCKiaDF
        subject_person_id: p_Vv43N2CuZqbv1NMT55dzSf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kisBaVL7F326G7nLNaAbBh
          claim_id: c_Pgy9zPbpUnvfUcgCCKiaDF
          source_id: s_bFs428awY9FqQXkbBctHpr
          stance: supports
          locator: CBDB:317052
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317052）
          source: &a1
            id: s_bFs428awY9FqQXkbBctHpr
            source_type: api_record
            title: 中国历代人物传记资料库：王琴（CBDB 317052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317052&o=json
            external_identifier: CBDB:317052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.967Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y11TxFMSpS1qexPGnrbu16
        subject_person_id: p_Vv43N2CuZqbv1NMT55dzSf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琴，明人物。天順四年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 317052）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dm-KDJ-39YzcFy1Uq2p_Zd
          claim_id: c_Y11TxFMSpS1qexPGnrbu16
          source_id: s_bFs428awY9FqQXkbBctHpr
          stance: supports
          locator: CBDB:317052
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_8w8x6k8zuNUBAha1eShPIK
        subject_person_id: p_Vv43N2CuZqbv1NMT55dzSf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F4TvNBX2MG96q5zMnLQmVQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qVZ9wjgG1zX0-H9qzdN5zD
          claim_id: c_8w8x6k8zuNUBAha1eShPIK
          source_id: s_rpD9Xzyu7fDvD4yopAp4vQ
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第二十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rpD9Xzyu7fDvD4yopAp4vQ
            source_type: api_record
            title: 中国历代人物传记资料库：王應奎（CBDB 198790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198790&o=json
            external_identifier: CBDB:198790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.509Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_F4TvNBX2MG96q5zMnLQmVQ
        status: active
        display_name: 王應奎
        merged_into_person_id: null
    - claim:
        id: c_ecwXCmVh7fsoNCFz8Ybi8V
        subject_person_id: p_Vv43N2CuZqbv1NMT55dzSf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4KBLPdpwaAyQ1o3o67oTLB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AnC4Nj18VqEB91Nx4tnHdP
          claim_id: c_ecwXCmVh7fsoNCFz8Ybi8V
          source_id: s_UooVwaK_T-6eSUvrsI26yI
          stance: supports
          locator: CBDB：兄弟 王應奎（198790）之父／母 王琴
          quotation: null
          interpretation_note: 由兄弟关系推断：王永 与 王應奎 为同胞（CBDB 记「兄」），王應奎 之父／母即 王永 之父／母。
          source:
            id: s_UooVwaK_T-6eSUvrsI26yI
            source_type: api_record
            title: 中国历代人物传记资料库：王永（CBDB 317130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317130&o=json
            external_identifier: CBDB:317130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4KBLPdpwaAyQ1o3o67oTLB
        status: active
        display_name: 王永
        merged_into_person_id: null
    - claim:
        id: c_BdVuj_5FhoRuR8QH8dU7kr
        subject_person_id: p_Vv43N2CuZqbv1NMT55dzSf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XedJnKJk2RGeVWFwqE4yLN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d6Q2aDmPthR9SyPg1Olcrk
          claim_id: c_BdVuj_5FhoRuR8QH8dU7kr
          source_id: s_rh-PahDpmqXzRTuqtqsoGp
          stance: supports
          locator: CBDB：兄弟 王應奎（198790）之父／母 王琴
          quotation: null
          interpretation_note: 由兄弟关系推断：王鍾 与 王應奎 为同胞（CBDB 记「兄」），王應奎 之父／母即 王鍾 之父／母。
          source:
            id: s_rh-PahDpmqXzRTuqtqsoGp
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾（CBDB 317108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317108&o=json
            external_identifier: CBDB:317108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XedJnKJk2RGeVWFwqE4yLN
        status: active
        display_name: 王鍾
        merged_into_person_id: null
    - claim:
        id: c_706OX04TKmx_axUymWjqOh
        subject_person_id: p_Vv43N2CuZqbv1NMT55dzSf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bLj13qjFdTAK8aLLhZB8U1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9PXoZYebHzszAov63MHWcG
          claim_id: c_706OX04TKmx_axUymWjqOh
          source_id: s_pSD5Z58eDbpWHZr25H6wBf
          stance: supports
          locator: CBDB：兄弟 王應奎（198790）之父／母 王琴
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑑 与 王應奎 为同胞（CBDB 记「兄」），王應奎 之父／母即 王鑑 之父／母。
          source:
            id: s_pSD5Z58eDbpWHZr25H6wBf
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 317096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317096&o=json
            external_identifier: CBDB:317096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bLj13qjFdTAK8aLLhZB8U1
        status: active
        display_name: 王鑑
        merged_into_person_id: null
    - claim:
        id: c_PzbX92grJI3HF2WaCIhUJT
        subject_person_id: p_Vv43N2CuZqbv1NMT55dzSf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gBC6XPRMAndtaDdxk88s6H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ADmNWLpcCLcYZJ3rUOlt8s
          claim_id: c_PzbX92grJI3HF2WaCIhUJT
          source_id: s_l-oHxyR0gynK8V5FYCH7a3
          stance: supports
          locator: CBDB：兄弟 王應奎（198790）之父／母 王琴
          quotation: null
          interpretation_note: 由兄弟关系推断：王命 与 王應奎 为同胞（CBDB 记「兄」），王應奎 之父／母即 王命 之父／母。
          source:
            id: s_l-oHxyR0gynK8V5FYCH7a3
            source_type: api_record
            title: 中国历代人物传记资料库：王命（CBDB 317119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317119&o=json
            external_identifier: CBDB:317119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gBC6XPRMAndtaDdxk88s6H
        status: active
        display_name: 王命
        merged_into_person_id: null
    - claim:
        id: c_0WL3dYooF476iCYZ4Qm3ia
        subject_person_id: p_Vv43N2CuZqbv1NMT55dzSf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oa39NuZE1nyVRBptY6w8ss
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zrxTL07G-I_wsh0aROXdX0
          claim_id: c_0WL3dYooF476iCYZ4Qm3ia
          source_id: s_g6WTPcmK2bv_jlcOMhUe6z
          stance: supports
          locator: CBDB：兄弟 王應奎（198790）之父／母 王琴
          quotation: null
          interpretation_note: 由兄弟关系推断：王新 与 王應奎 为同胞（CBDB 记「弟」），王應奎 之父／母即 王新 之父／母。
          source:
            id: s_g6WTPcmK2bv_jlcOMhUe6z
            source_type: api_record
            title: 中国历代人物传记资料库：王新（CBDB 317085）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317085&o=json
            external_identifier: CBDB:317085
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oa39NuZE1nyVRBptY6w8ss
        status: active
        display_name: 王新
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琴 | accepted |
| bio.summary | 王琴，明人物。天順四年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 317052） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_F4TvNBX2MG96q5zMnLQmVQ | 王應奎 | accepted |
| children | p_4KBLPdpwaAyQ1o3o67oTLB | 王永 | accepted |
| children | p_XedJnKJk2RGeVWFwqE4yLN | 王鍾 | accepted |
| children | p_bLj13qjFdTAK8aLLhZB8U1 | 王鑑 | accepted |
| children | p_gBC6XPRMAndtaDdxk88s6H | 王命 | accepted |
| children | p_oa39NuZE1nyVRBptY6w8ss | 王新 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 317096）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317096&o=json)
- [中国历代人物传记资料库：王命（CBDB 317119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317119&o=json)
- [中国历代人物传记资料库：王琴（CBDB 317052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317052&o=json)
- [中国历代人物传记资料库：王新（CBDB 317085）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317085&o=json)
- [中国历代人物传记资料库：王應奎（CBDB 198790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198790&o=json)
- [中国历代人物传记资料库：王永（CBDB 317130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317130&o=json)
- [中国历代人物传记资料库：王鍾（CBDB 317108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317108&o=json)
