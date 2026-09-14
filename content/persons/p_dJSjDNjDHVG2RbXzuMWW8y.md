---
schema: wang-person/v1
id: p_dJSjDNjDHVG2RbXzuMWW8y
status: active
merged_into: null
display_name: 王豫
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_brVUKfdZ1LtEr2EcG5zMdD
        subject_person_id: p_dJSjDNjDHVG2RbXzuMWW8y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HEqvEnhdqA5gAbz7ohH5Fi
          claim_id: c_brVUKfdZ1LtEr2EcG5zMdD
          source_id: s_srhDtd6DbjLfh4nqE5bLrk
          stance: supports
          locator: CBDB:206279
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206279）
          source: &a1
            id: s_srhDtd6DbjLfh4nqE5bLrk
            source_type: api_record
            title: 中国历代人物传记资料库：王豫（CBDB 206279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206279&o=json
            external_identifier: CBDB:206279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_961QrEmTCKswdKbsPN8hy4
        subject_person_id: p_dJSjDNjDHVG2RbXzuMWW8y
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1543年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s2vngwr7983S1uUJ8V1DTM
          claim_id: c_961QrEmTCKswdKbsPN8hy4
          source_id: s_srhDtd6DbjLfh4nqE5bLrk
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
        id: c_3wHuqo7h76CsFYh6f7ewsc
        subject_person_id: p_dJSjDNjDHVG2RbXzuMWW8y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豫（生于1543年），明人物。明清進士進士，籍贯烏程，入仕進士。（中国历代人物传记资料库 CBDB 206279）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Yv6nSRQqjAqUeZDx_si1et
          claim_id: c_3wHuqo7h76CsFYh6f7ewsc
          source_id: s_srhDtd6DbjLfh4nqE5bLrk
          stance: supports
          locator: CBDB:206279
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_n8Ph9EwZdil0txNw_ZgQrI
        subject_person_id: p_X44YhNxEhhrLSWmgtLLBJw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dJSjDNjDHVG2RbXzuMWW8y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0HDHLLH2_qJ0D3Xf0ofbLZ
          claim_id: c_n8Ph9EwZdil0txNw_ZgQrI
          source_id: s_srhDtd6DbjLfh4nqE5bLrk
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第二十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_X44YhNxEhhrLSWmgtLLBJw
        status: active
        display_name: 王來聘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_hmVAAtgzKs4OomX1bMieHr
        subject_person_id: p_dJSjDNjDHVG2RbXzuMWW8y
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_yqDBwhtRj2QC7FSeA16KyU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RYtpUl31lWNNwZ1PIaqDlc
          claim_id: c_hmVAAtgzKs4OomX1bMieHr
          source_id: s_QdMc--RVD8j2YT2Y_KYttI
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第二十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QdMc--RVD8j2YT2Y_KYttI
            source_type: api_record
            title: 中国历代人物传记资料库：周氏(王豫妻)（CBDB 215742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215742&o=json
            external_identifier: CBDB:215742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yqDBwhtRj2QC7FSeA16KyU
        status: active
        display_name: 周氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_oi-CGLEArm1xntadbCL5NA
        subject_person_id: p_sjYABtEktUvEYijkD5kBC4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dJSjDNjDHVG2RbXzuMWW8y
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zIbHm6dZl5RLe9MgBUvj_u
          claim_id: c_oi-CGLEArm1xntadbCL5NA
          source_id: s_srhDtd6DbjLfh4nqE5bLrk
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第二十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sjYABtEktUvEYijkD5kBC4
        status: active
        display_name: 王完
        merged_into_person_id: null
    - claim:
        id: c_I2EBwZl0oZ7AocxLQPtoD7
        subject_person_id: p_w4dVLVEfUChx53dJrfmEEQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dJSjDNjDHVG2RbXzuMWW8y
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bbig2f-iGYuYfzOUcZYHaX
          claim_id: c_I2EBwZl0oZ7AocxLQPtoD7
          source_id: s_srhDtd6DbjLfh4nqE5bLrk
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第二十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_w4dVLVEfUChx53dJrfmEEQ
        status: active
        display_name: 王松
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_Y4S5IE6RS4LhriW08irXtw
        subject_person_id: p_6Jq7APJLyRSkVbB5jo8KSU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dJSjDNjDHVG2RbXzuMWW8y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TN3KSNhPncfykOgVFrycQx
          claim_id: c_Y4S5IE6RS4LhriW08irXtw
          source_id: s_czrUcKnvOBXR49BUe-aU61
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206279 王豫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_czrUcKnvOBXR49BUe-aU61
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 215743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215743&o=json
            external_identifier: CBDB:215743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6Jq7APJLyRSkVbB5jo8KSU
        status: active
        display_name: 王復
        merged_into_person_id: null
    - claim:
        id: c_VNfaPS9hvSXxhjiOh2ZaPC
        subject_person_id: p_DsXwYBz5HvWgcJfPSnT3i5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dJSjDNjDHVG2RbXzuMWW8y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rOVffZotKo1BX9DJ2__sCa
          claim_id: c_VNfaPS9hvSXxhjiOh2ZaPC
          source_id: s_hRC-ZEr9I6ecBImPHaSvMH
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206279 王豫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hRC-ZEr9I6ecBImPHaSvMH
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 215745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215745&o=json
            external_identifier: CBDB:215745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DsXwYBz5HvWgcJfPSnT3i5
        status: active
        display_name: 王謙
        merged_into_person_id: null
    - claim:
        id: c_3ITRyUXfH2hecIkvbaf_Kg
        subject_person_id: p_Ge2jLJb12F2R29PPiZDSzr
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dJSjDNjDHVG2RbXzuMWW8y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X4BKOiJkcqpr4QhjXD62Kz
          claim_id: c_3ITRyUXfH2hecIkvbaf_Kg
          source_id: s_OviynzzLYzpXrnTouZOHMC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206279 王豫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OviynzzLYzpXrnTouZOHMC
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 215748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215748&o=json
            external_identifier: CBDB:215748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ge2jLJb12F2R29PPiZDSzr
        status: active
        display_name: 王鼎
        merged_into_person_id: null
    - claim:
        id: c_kxxByOD2ttaK3FEmrgEnc1
        subject_person_id: p_JjoQAGTzHNCyvCTMEUaPR1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dJSjDNjDHVG2RbXzuMWW8y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2KESsoLoHY-w77Wllqfx7C
          claim_id: c_kxxByOD2ttaK3FEmrgEnc1
          source_id: s_5ikqz-IUGQSNhLteNyWiJg
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206279 王豫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5ikqz-IUGQSNhLteNyWiJg
            source_type: api_record
            title: 中国历代人物传记资料库：王渙（CBDB 215750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215750&o=json
            external_identifier: CBDB:215750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JjoQAGTzHNCyvCTMEUaPR1
        status: active
        display_name: 王渙
        merged_into_person_id: null
    - claim:
        id: c_scjpdUPdws-Xlu-H_E5NJG
        subject_person_id: p_UHWBWX4Z5omFgARChps5w5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dJSjDNjDHVG2RbXzuMWW8y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dpf1xcMZkvkM-5o7alRIsJ
          claim_id: c_scjpdUPdws-Xlu-H_E5NJG
          source_id: s_IybXQgWjrp65nb-SpuFM58
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206279 王豫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IybXQgWjrp65nb-SpuFM58
            source_type: api_record
            title: 中国历代人物传记资料库：王隨（CBDB 215746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215746&o=json
            external_identifier: CBDB:215746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UHWBWX4Z5omFgARChps5w5
        status: active
        display_name: 王隨
        merged_into_person_id: null
    - claim:
        id: c_-85l-1-kFefgRAmbVZRyoX
        subject_person_id: p_dJSjDNjDHVG2RbXzuMWW8y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fQ2iDLrvXCodytRj3Fv8EE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nt2ikCYJWcMQnX1PmqwBox
          claim_id: c_-85l-1-kFefgRAmbVZRyoX
          source_id: s_2fNJEm6mtrwFHN4H8xoMNd
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206279 王豫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2fNJEm6mtrwFHN4H8xoMNd
            source_type: api_record
            title: 中国历代人物传记资料库：王師（CBDB 215744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215744&o=json
            external_identifier: CBDB:215744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fQ2iDLrvXCodytRj3Fv8EE
        status: active
        display_name: 王師
        merged_into_person_id: null
    - claim:
        id: c__zc4wau0QWMx3QRdqFLcum
        subject_person_id: p_dJSjDNjDHVG2RbXzuMWW8y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gEzAcLHQACLTrFmkBxH4MR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8AmWvLq3Q_LIegbgGzg7OR
          claim_id: c__zc4wau0QWMx3QRdqFLcum
          source_id: s_832HLBAS8RadzSoAlijXzH
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206279 王豫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_832HLBAS8RadzSoAlijXzH
            source_type: api_record
            title: 中国历代人物传记资料库：王晉（CBDB 215749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215749&o=json
            external_identifier: CBDB:215749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gEzAcLHQACLTrFmkBxH4MR
        status: active
        display_name: 王晉
        merged_into_person_id: null
    - claim:
        id: c_aCK8bL3vmaJ-eMNg9Lrx9q
        subject_person_id: p_dJSjDNjDHVG2RbXzuMWW8y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sszQgtJbvH2fNQJN3Kq15V
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wkl6VGaYy09FZirx5jfH23
          claim_id: c_aCK8bL3vmaJ-eMNg9Lrx9q
          source_id: s_no9ta3BPmtd_JbMD1yOl4X
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206279 王豫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_no9ta3BPmtd_JbMD1yOl4X
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 215751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215751&o=json
            external_identifier: CBDB:215751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sszQgtJbvH2fNQJN3Kq15V
        status: active
        display_name: 王震
        merged_into_person_id: null
---

# 王豫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王豫 | accepted |
| birth.date | 1543年 | accepted |
| bio.summary | 王豫（生于1543年），明人物。明清進士進士，籍贯烏程，入仕進士。（中国历代人物传记资料库 CBDB 206279） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_X44YhNxEhhrLSWmgtLLBJw | 王來聘 | accepted |
| spouses | p_yqDBwhtRj2QC7FSeA16KyU | 周氏 | accepted |
| ancestors | p_sjYABtEktUvEYijkD5kBC4 | 王完 | accepted |
| ancestors | p_w4dVLVEfUChx53dJrfmEEQ | 王松 | accepted |
| other | p_6Jq7APJLyRSkVbB5jo8KSU | 王復 | accepted |
| other | p_DsXwYBz5HvWgcJfPSnT3i5 | 王謙 | accepted |
| other | p_Ge2jLJb12F2R29PPiZDSzr | 王鼎 | accepted |
| other | p_JjoQAGTzHNCyvCTMEUaPR1 | 王渙 | accepted |
| other | p_UHWBWX4Z5omFgARChps5w5 | 王隨 | accepted |
| other | p_fQ2iDLrvXCodytRj3Fv8EE | 王師 | accepted |
| other | p_gEzAcLHQACLTrFmkBxH4MR | 王晉 | accepted |
| other | p_sszQgtJbvH2fNQJN3Kq15V | 王震 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 215748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215748&o=json)
- [中国历代人物传记资料库：王復（CBDB 215743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215743&o=json)
- [中国历代人物传记资料库：王渙（CBDB 215750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215750&o=json)
- [中国历代人物传记资料库：王晉（CBDB 215749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215749&o=json)
- [中国历代人物传记资料库：王謙（CBDB 215745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215745&o=json)
- [中国历代人物传记资料库：王師（CBDB 215744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215744&o=json)
- [中国历代人物传记资料库：王隨（CBDB 215746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215746&o=json)
- [中国历代人物传记资料库：王豫（CBDB 206279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206279&o=json)
- [中国历代人物传记资料库：王震（CBDB 215751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215751&o=json)
- [中国历代人物传记资料库：周氏(王豫妻)（CBDB 215742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215742&o=json)
