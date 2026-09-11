---
schema: wang-person/v1
id: p_dJSjDNjDHVG2RbXzuMWW8y
status: active
merged_into: null
display_name: 王豫
revision: 3
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
  other: []
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

## 外部来源

- [中国历代人物传记资料库：王豫（CBDB 206279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206279&o=json)
- [中国历代人物传记资料库：周氏(王豫妻)（CBDB 215742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215742&o=json)
