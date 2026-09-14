---
schema: wang-person/v1
id: p_h6Qqwu6rcGKuAFwWWFGZPB
status: active
merged_into: null
display_name: 王大平
revision: 12
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cJ1MrmK5AnFPmH6HJmW8Rb
        subject_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大平
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3iv5YzxZDQzeFJfUHMymKu
          claim_id: c_cJ1MrmK5AnFPmH6HJmW8Rb
          source_id: s_9zYcMDAcKEGNaFqJVYbRxq
          stance: supports
          locator: CBDB:203248
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203248）
          source: &a1
            id: s_9zYcMDAcKEGNaFqJVYbRxq
            source_type: api_record
            title: 中国历代人物传记资料库：王大平（CBDB 203248）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203248&o=json
            external_identifier: CBDB:203248
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.778Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BwFCeWhxFFmh24JYkTVXZv
        subject_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1511年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qvm4d3r1mAREnXRLYeHHbk
          claim_id: c_BwFCeWhxFFmh24JYkTVXZv
          source_id: s_9zYcMDAcKEGNaFqJVYbRxq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1vLaKpMF8nY19Av3zJeH6F
        subject_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大平（生于1511年），明人物。嘉靖十七年進士，籍贯安邱，入仕進士。（中国历代人物传记资料库 CBDB 203248）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D0xzOzQ85-p0grE_bK6syM
          claim_id: c_1vLaKpMF8nY19Av3zJeH6F
          source_id: s_9zYcMDAcKEGNaFqJVYbRxq
          stance: supports
          locator: CBDB:203248
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_quevHbUnY4sUjZVCegOt4P
        subject_person_id: p_1qFNNFzs4996RToNKGEdK3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3xfEhECfyvKi2T0xZL__uy
          claim_id: c_quevHbUnY4sUjZVCegOt4P
          source_id: s_LAj1ZAry8QMdax8UaGcBmn
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第二百一十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LAj1ZAry8QMdax8UaGcBmn
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 301946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301946&o=json
            external_identifier: CBDB:301946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.644Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1qFNNFzs4996RToNKGEdK3
        status: active
        display_name: 王玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_A4TuMs1x3mdnK8Ud3JDxEB
        subject_person_id: p_MqJmH3PbgPZ48RJzP22fHC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fSVHMEDwZ5ZicD4IphmSKM
          claim_id: c_A4TuMs1x3mdnK8Ud3JDxEB
          source_id: s_mHaW9QtQ8tDCKSMc2UCAUe
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第二百一十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mHaW9QtQ8tDCKSMc2UCAUe
            source_type: api_record
            title: 中国历代人物传记资料库：王振（CBDB 301944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301944&o=json
            external_identifier: CBDB:301944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.644Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MqJmH3PbgPZ48RJzP22fHC
        status: active
        display_name: 王振
        merged_into_person_id: null
    - claim:
        id: c_m60G_Y3oVwHZ0ELz6p7iVy
        subject_person_id: p_vMbYHsiptdN5i95FHcq5T6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UMM0v98gW12LbVB8RoRFli
          claim_id: c_m60G_Y3oVwHZ0ELz6p7iVy
          source_id: s_KSFxEd68AqNX1tY9YqJLFs
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第二百一十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KSFxEd68AqNX1tY9YqJLFs
            source_type: api_record
            title: 中国历代人物传记资料库：王伯成（CBDB 301945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301945&o=json
            external_identifier: CBDB:301945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.644Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vMbYHsiptdN5i95FHcq5T6
        status: active
        display_name: 王伯成
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_RmStjVFTXiuX_Kj2K6vZr3
        subject_person_id: p_5zz7gPQ34eK1HF4tNPnrfW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gbnU3IZT5l84PlVPny3cS6
          claim_id: c_RmStjVFTXiuX_Kj2K6vZr3
          source_id: s_DrhG7LZgKxorEqcqNrJen1
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203248 王大平）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DrhG7LZgKxorEqcqNrJen1
            source_type: api_record
            title: 中国历代人物传记资料库：王大化（CBDB 301950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301950&o=json
            external_identifier: CBDB:301950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5zz7gPQ34eK1HF4tNPnrfW
        status: active
        display_name: 王大化
        merged_into_person_id: null
    - claim:
        id: c_cUxCihDRT4x9Kmm1Pg1ywz
        subject_person_id: p_6ggeMHhi3E1rqHEVy843uf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ES8FlS9oJXPIgosGd8nyw3
          claim_id: c_cUxCihDRT4x9Kmm1Pg1ywz
          source_id: s_WNBX0ZDYKzZl7DMSJGuupT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203248 王大平）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WNBX0ZDYKzZl7DMSJGuupT
            source_type: api_record
            title: 中国历代人物传记资料库：王大任（CBDB 301951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301951&o=json
            external_identifier: CBDB:301951
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6ggeMHhi3E1rqHEVy843uf
        status: active
        display_name: 王大任
        merged_into_person_id: null
    - claim:
        id: c__KvGiafAz1OvFg4lcD6tHg
        subject_person_id: p_87CKmEcchyFCGh6F8m2QpB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r9PyAalzLgp5nlXuYLxOqn
          claim_id: c__KvGiafAz1OvFg4lcD6tHg
          source_id: s_Brg7znYVed_226y4OoX7cd
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203248 王大平）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Brg7znYVed_226y4OoX7cd
            source_type: api_record
            title: 中国历代人物传记资料库：王大皞（CBDB 301956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301956&o=json
            external_identifier: CBDB:301956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_87CKmEcchyFCGh6F8m2QpB
        status: active
        display_name: 王大皞
        merged_into_person_id: null
    - claim:
        id: c_ZGsXLfQQigV9EAPJ7Na3Ev
        subject_person_id: p_HuPauQCDEX91zx5oc7TGn3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y1W10mxQfVENxKXcs5Nkho
          claim_id: c_ZGsXLfQQigV9EAPJ7Na3Ev
          source_id: s_Ga-RW-3fAbm2Js_YOiXdtT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203248 王大平）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ga-RW-3fAbm2Js_YOiXdtT
            source_type: api_record
            title: 中国历代人物传记资料库：王大治（CBDB 301953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301953&o=json
            external_identifier: CBDB:301953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HuPauQCDEX91zx5oc7TGn3
        status: active
        display_name: 王大治
        merged_into_person_id: null
    - claim:
        id: c_26idmeV_nKwJQdnKd8R4VL
        subject_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_o7D2MU72mH25Jvuq1USmMP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CHLESHdJAHamhBjNgwWkMl
          claim_id: c_26idmeV_nKwJQdnKd8R4VL
          source_id: s_cGdKVzIZCYr36bUHQMR-Fp
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203248 王大平）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cGdKVzIZCYr36bUHQMR-Fp
            source_type: api_record
            title: 中国历代人物传记资料库：王大雍（CBDB 301954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301954&o=json
            external_identifier: CBDB:301954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_o7D2MU72mH25Jvuq1USmMP
        status: active
        display_name: 王大雍
        merged_into_person_id: null
    - claim:
        id: c_Cd0jnmJiJJqUpCDQV8H2ys
        subject_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oFc73oNB9gGvmoW38GJWD5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aMKVJP_A87YZkoe7YfUWad
          claim_id: c_Cd0jnmJiJJqUpCDQV8H2ys
          source_id: s_2mIWY14NVYZG3pXjscuzwZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203248 王大平）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2mIWY14NVYZG3pXjscuzwZ
            source_type: api_record
            title: 中国历代人物传记资料库：王大命（CBDB 301957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301957&o=json
            external_identifier: CBDB:301957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oFc73oNB9gGvmoW38GJWD5
        status: active
        display_name: 王大命
        merged_into_person_id: null
    - claim:
        id: c_ZoD_UYfCRuY7px8Civu9VE
        subject_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_paoNeLvsMJMf94SSkkWUqP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-6e9NFv3XORxa45Bwb7cZ8
          claim_id: c_ZoD_UYfCRuY7px8Civu9VE
          source_id: s_fdxAwHGhU0vniB0uK1Cviw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203248 王大平）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fdxAwHGhU0vniB0uK1Cviw
            source_type: api_record
            title: 中国历代人物传记资料库：王大熙（CBDB 301955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301955&o=json
            external_identifier: CBDB:301955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_paoNeLvsMJMf94SSkkWUqP
        status: active
        display_name: 王大熙
        merged_into_person_id: null
    - claim:
        id: c_TElq1VggjOrh_YjF0njZUN
        subject_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qspHsATCKb9gxp8RCUtcek
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EGDDheqbpQPKm7SGAxaDeX
          claim_id: c_TElq1VggjOrh_YjF0njZUN
          source_id: s_4PkUvKOyoxSY45C1BplzsV
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203248 王大平）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4PkUvKOyoxSY45C1BplzsV
            source_type: api_record
            title: 中国历代人物传记资料库：王大均（CBDB 301952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301952&o=json
            external_identifier: CBDB:301952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qspHsATCKb9gxp8RCUtcek
        status: active
        display_name: 王大均
        merged_into_person_id: null
---

# 王大平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大平 | accepted |
| birth.date | 1511年 | accepted |
| bio.summary | 王大平（生于1511年），明人物。嘉靖十七年進士，籍贯安邱，入仕進士。（中国历代人物传记资料库 CBDB 203248） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1qFNNFzs4996RToNKGEdK3 | 王玉 | accepted |
| ancestors | p_MqJmH3PbgPZ48RJzP22fHC | 王振 | accepted |
| ancestors | p_vMbYHsiptdN5i95FHcq5T6 | 王伯成 | accepted |
| other | p_5zz7gPQ34eK1HF4tNPnrfW | 王大化 | accepted |
| other | p_6ggeMHhi3E1rqHEVy843uf | 王大任 | accepted |
| other | p_87CKmEcchyFCGh6F8m2QpB | 王大皞 | accepted |
| other | p_HuPauQCDEX91zx5oc7TGn3 | 王大治 | accepted |
| other | p_o7D2MU72mH25Jvuq1USmMP | 王大雍 | accepted |
| other | p_oFc73oNB9gGvmoW38GJWD5 | 王大命 | accepted |
| other | p_paoNeLvsMJMf94SSkkWUqP | 王大熙 | accepted |
| other | p_qspHsATCKb9gxp8RCUtcek | 王大均 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯成（CBDB 301945）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301945&o=json)
- [中国历代人物传记资料库：王大皞（CBDB 301956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301956&o=json)
- [中国历代人物传记资料库：王大化（CBDB 301950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301950&o=json)
- [中国历代人物传记资料库：王大均（CBDB 301952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301952&o=json)
- [中国历代人物传记资料库：王大命（CBDB 301957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301957&o=json)
- [中国历代人物传记资料库：王大平（CBDB 203248）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203248&o=json)
- [中国历代人物传记资料库：王大任（CBDB 301951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301951&o=json)
- [中国历代人物传记资料库：王大熙（CBDB 301955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301955&o=json)
- [中国历代人物传记资料库：王大雍（CBDB 301954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301954&o=json)
- [中国历代人物传记资料库：王大治（CBDB 301953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301953&o=json)
- [中国历代人物传记资料库：王玉（CBDB 301946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301946&o=json)
- [中国历代人物传记资料库：王振（CBDB 301944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301944&o=json)
