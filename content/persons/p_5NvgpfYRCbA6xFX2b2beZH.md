---
schema: wang-person/v1
id: p_5NvgpfYRCbA6xFX2b2beZH
status: active
merged_into: null
display_name: 王繼
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5swSyB3BHcwTvbWkawALHH
        subject_person_id: p_5NvgpfYRCbA6xFX2b2beZH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8jCLVSJCcTLhkyPbdLGFJ4
          claim_id: c_5swSyB3BHcwTvbWkawALHH
          source_id: s_6Qxigr21Es5GTqyWWcgpWX
          stance: supports
          locator: CBDB:211406
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（211406）
          source: &a1
            id: s_6Qxigr21Es5GTqyWWcgpWX
            source_type: api_record
            title: 中国历代人物传记资料库：王繼（CBDB 211406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211406&o=json
            external_identifier: CBDB:211406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.037Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EsmCUEcNv1hPFQidpueCq1
        subject_person_id: p_5NvgpfYRCbA6xFX2b2beZH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼，明人物。隆慶五年進士，籍贯懷仁，曾任義官。（中国历代人物传记资料库 CBDB 211406）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Bbob3Sv5W-30b06ASz7oE5
          claim_id: c_EsmCUEcNv1hPFQidpueCq1
          source_id: s_6Qxigr21Es5GTqyWWcgpWX
          stance: supports
          locator: CBDB:211406
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_M5ZgXEBVRbTG49918D5hKE
        subject_person_id: p_5NvgpfYRCbA6xFX2b2beZH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MmVpUWztCQKaC484qaKxXc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g0vmr-PKXdcEtcJJgAj1-i
          claim_id: c_M5ZgXEBVRbTG49918D5hKE
          source_id: s_6Qxigr21Es5GTqyWWcgpWX
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百三十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MmVpUWztCQKaC484qaKxXc
        status: active
        display_name: 王汝濂
        merged_into_person_id: null
    - claim:
        id: c_OnFtaE9BXrI92IdoLC6KJJ
        subject_person_id: p_5NvgpfYRCbA6xFX2b2beZH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DK1eBMbHVfxDanwn7xNzmC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ikBZoEx_SnlJn6kY-1sX5U
          claim_id: c_OnFtaE9BXrI92IdoLC6KJJ
          source_id: s_smwMzzKRylT882ZrNxP8hx
          stance: supports
          locator: CBDB：兄弟 王汝濂（205966）之父／母 王繼
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝汲 与 王汝濂 为同胞（CBDB 记「兄」），王汝濂 之父／母即 王汝汲 之父／母。
          source:
            id: s_smwMzzKRylT882ZrNxP8hx
            source_type: api_record
            title: 中国历代人物传记资料库：王汝汲（CBDB 211413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211413&o=json
            external_identifier: CBDB:211413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DK1eBMbHVfxDanwn7xNzmC
        status: active
        display_name: 王汝汲
        merged_into_person_id: null
    - claim:
        id: c_6eM8095gOABGNVznMiR8Ms
        subject_person_id: p_5NvgpfYRCbA6xFX2b2beZH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RBNJVK32JNJqkQW1RZ4x3m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3HodOvdk_7SUEKBVte0g9K
          claim_id: c_6eM8095gOABGNVznMiR8Ms
          source_id: s_RtfQIQC3STwGMFXdAS1JrE
          stance: supports
          locator: CBDB：兄弟 王汝濂（205966）之父／母 王繼
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝洽 与 王汝濂 为同胞（CBDB 记「弟」），王汝濂 之父／母即 王汝洽 之父／母。
          source:
            id: s_RtfQIQC3STwGMFXdAS1JrE
            source_type: api_record
            title: 中国历代人物传记资料库：王汝洽（CBDB 211410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211410&o=json
            external_identifier: CBDB:211410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RBNJVK32JNJqkQW1RZ4x3m
        status: active
        display_name: 王汝洽
        merged_into_person_id: null
    - claim:
        id: c_PLPVqp2ZUL_71-gtuM8mna
        subject_person_id: p_5NvgpfYRCbA6xFX2b2beZH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SB6NxrCz8PK82o2uBChmi4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_17dhFatG1eSJuH9hqm5nfy
          claim_id: c_PLPVqp2ZUL_71-gtuM8mna
          source_id: s_WXrLBXNCd6XnltltodPQib
          stance: supports
          locator: CBDB：兄弟 王汝濂（205966）之父／母 王繼
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝浹 与 王汝濂 为同胞（CBDB 记「兄」），王汝濂 之父／母即 王汝浹 之父／母。
          source:
            id: s_WXrLBXNCd6XnltltodPQib
            source_type: api_record
            title: 中国历代人物传记资料库：王汝浹（CBDB 211416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211416&o=json
            external_identifier: CBDB:211416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SB6NxrCz8PK82o2uBChmi4
        status: active
        display_name: 王汝浹
        merged_into_person_id: null
    - claim:
        id: c_qtST7neldDOIArxNEqNYnY
        subject_person_id: p_5NvgpfYRCbA6xFX2b2beZH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VKs3zJCUbWxWdVGecS8kFY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t86Ggd1pjK7NwfLiUrPFRe
          claim_id: c_qtST7neldDOIArxNEqNYnY
          source_id: s_j55oimwKYN9feYTaQRcMVH
          stance: supports
          locator: CBDB：兄弟 王汝濂（205966）之父／母 王繼
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝淓 与 王汝濂 为同胞（CBDB 记「兄」），王汝濂 之父／母即 王汝淓 之父／母。
          source:
            id: s_j55oimwKYN9feYTaQRcMVH
            source_type: api_record
            title: 中国历代人物传记资料库：王汝淓（CBDB 211415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211415&o=json
            external_identifier: CBDB:211415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VKs3zJCUbWxWdVGecS8kFY
        status: active
        display_name: 王汝淓
        merged_into_person_id: null
    - claim:
        id: c_1BjcuC7xqcu_QrEeylvDy8
        subject_person_id: p_5NvgpfYRCbA6xFX2b2beZH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WGHmo7NBqH3etfk4iAcoJ7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EFxqYwdmaucnZ4g8NfRklf
          claim_id: c_1BjcuC7xqcu_QrEeylvDy8
          source_id: s_NUoyG9EuDQxuYrVeNATTHO
          stance: supports
          locator: CBDB：兄弟 王汝濂（205966）之父／母 王繼
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝湞 与 王汝濂 为同胞（CBDB 记「兄」），王汝濂 之父／母即 王汝湞 之父／母。
          source:
            id: s_NUoyG9EuDQxuYrVeNATTHO
            source_type: api_record
            title: 中国历代人物传记资料库：王汝湞（CBDB 211412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211412&o=json
            external_identifier: CBDB:211412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WGHmo7NBqH3etfk4iAcoJ7
        status: active
        display_name: 王汝湞
        merged_into_person_id: null
    - claim:
        id: c_fTZXRW7rzkDWR6Fze5Sal5
        subject_person_id: p_5NvgpfYRCbA6xFX2b2beZH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hmLDYN1bVWXedTQ3iy22EJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u6StuDLbtM-yGmJHuKSXF1
          claim_id: c_fTZXRW7rzkDWR6Fze5Sal5
          source_id: s_mxVjYn2n4rfmLk1YNjmX2l
          stance: supports
          locator: CBDB：兄弟 王汝濂（205966）之父／母 王繼
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝蒞 与 王汝濂 为同胞（CBDB 记「兄」），王汝濂 之父／母即 王汝蒞 之父／母。
          source:
            id: s_mxVjYn2n4rfmLk1YNjmX2l
            source_type: api_record
            title: 中国历代人物传记资料库：王汝蒞（CBDB 211418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211418&o=json
            external_identifier: CBDB:211418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hmLDYN1bVWXedTQ3iy22EJ
        status: active
        display_name: 王汝蒞
        merged_into_person_id: null
    - claim:
        id: c_z8Bt9-fjU9ZeYbA7PdBdUK
        subject_person_id: p_5NvgpfYRCbA6xFX2b2beZH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qMVBXrXHRKvQfbSVAM8wUy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LjyoQC_90bOSah0kLxjN5-
          claim_id: c_z8Bt9-fjU9ZeYbA7PdBdUK
          source_id: s_YbzPc9iBsQ23a7kn3Jmz4w
          stance: supports
          locator: CBDB：兄弟 王汝濂（205966）之父／母 王繼
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝湘 与 王汝濂 为同胞（CBDB 记「弟」），王汝濂 之父／母即 王汝湘 之父／母。
          source:
            id: s_YbzPc9iBsQ23a7kn3Jmz4w
            source_type: api_record
            title: 中国历代人物传记资料库：王汝湘（CBDB 211409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211409&o=json
            external_identifier: CBDB:211409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qMVBXrXHRKvQfbSVAM8wUy
        status: active
        display_name: 王汝湘
        merged_into_person_id: null
    - claim:
        id: c_7Gls9ORxwTU1ISspvhDcwL
        subject_person_id: p_5NvgpfYRCbA6xFX2b2beZH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s3HVN1grcfFzbn44w8tFqy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_azsbsUtlhpbDBpPWqEemX-
          claim_id: c_7Gls9ORxwTU1ISspvhDcwL
          source_id: s_-wn02ab0U-H8iZwYHOm1mz
          stance: supports
          locator: CBDB：兄弟 王汝濂（205966）之父／母 王繼
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇涑 与 王汝濂 为同胞（CBDB 记「兄」），王汝濂 之父／母即 王崇涑 之父／母。
          source:
            id: s_-wn02ab0U-H8iZwYHOm1mz
            source_type: api_record
            title: 中国历代人物传记资料库：王崇涑（CBDB 211417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211417&o=json
            external_identifier: CBDB:211417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s3HVN1grcfFzbn44w8tFqy
        status: active
        display_name: 王崇涑
        merged_into_person_id: null
    - claim:
        id: c_vyPmLpWR1Drg_QQDEoXJUj
        subject_person_id: p_5NvgpfYRCbA6xFX2b2beZH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w8CP1WN1DoH2uadPLEGj1c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xDnHmAhCleE8fnW1IhkszG
          claim_id: c_vyPmLpWR1Drg_QQDEoXJUj
          source_id: s_gL0N9ZUC9qTnci9A2pR_HD
          stance: supports
          locator: CBDB：兄弟 王汝濂（205966）之父／母 王繼
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇瀾 与 王汝濂 为同胞（CBDB 记「弟」），王汝濂 之父／母即 王崇瀾 之父／母。
          source:
            id: s_gL0N9ZUC9qTnci9A2pR_HD
            source_type: api_record
            title: 中国历代人物传记资料库：王崇瀾（CBDB 211411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211411&o=json
            external_identifier: CBDB:211411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w8CP1WN1DoH2uadPLEGj1c
        status: active
        display_name: 王崇瀾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王繼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼 | accepted |
| bio.summary | 王繼，明人物。隆慶五年進士，籍贯懷仁，曾任義官。（中国历代人物传记资料库 CBDB 211406） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_MmVpUWztCQKaC484qaKxXc | 王汝濂 | accepted |
| children | p_DK1eBMbHVfxDanwn7xNzmC | 王汝汲 | accepted |
| children | p_RBNJVK32JNJqkQW1RZ4x3m | 王汝洽 | accepted |
| children | p_SB6NxrCz8PK82o2uBChmi4 | 王汝浹 | accepted |
| children | p_VKs3zJCUbWxWdVGecS8kFY | 王汝淓 | accepted |
| children | p_WGHmo7NBqH3etfk4iAcoJ7 | 王汝湞 | accepted |
| children | p_hmLDYN1bVWXedTQ3iy22EJ | 王汝蒞 | accepted |
| children | p_qMVBXrXHRKvQfbSVAM8wUy | 王汝湘 | accepted |
| children | p_s3HVN1grcfFzbn44w8tFqy | 王崇涑 | accepted |
| children | p_w8CP1WN1DoH2uadPLEGj1c | 王崇瀾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇瀾（CBDB 211411）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211411&o=json)
- [中国历代人物传记资料库：王崇涑（CBDB 211417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211417&o=json)
- [中国历代人物传记资料库：王繼（CBDB 211406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211406&o=json)
- [中国历代人物传记资料库：王汝湞（CBDB 211412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211412&o=json)
- [中国历代人物传记资料库：王汝淓（CBDB 211415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211415&o=json)
- [中国历代人物传记资料库：王汝汲（CBDB 211413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211413&o=json)
- [中国历代人物传记资料库：王汝浹（CBDB 211416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211416&o=json)
- [中国历代人物传记资料库：王汝蒞（CBDB 211418）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211418&o=json)
- [中国历代人物传记资料库：王汝洽（CBDB 211410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211410&o=json)
- [中国历代人物传记资料库：王汝湘（CBDB 211409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211409&o=json)
