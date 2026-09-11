---
schema: wang-person/v1
id: p_iKF3URQYd2AiG1hYtKBDpV
status: active
merged_into: null
display_name: 王京
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aaLddU2SN6x4k9Q2cLZz5i
        subject_person_id: p_iKF3URQYd2AiG1hYtKBDpV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王京
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w5QPC9q7tFn2sx16i2JCVX
          claim_id: c_aaLddU2SN6x4k9Q2cLZz5i
          source_id: s_p8SF1qnXdovPg4gXKQPEXa
          stance: supports
          locator: CBDB:205560
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205560）
          source: &a1
            id: s_p8SF1qnXdovPg4gXKQPEXa
            source_type: api_record
            title: 中国历代人物传记资料库：王京（CBDB 205560）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205560&o=json
            external_identifier: CBDB:205560
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.865Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_cBSGSv6FkrfoKGLD3NyMFp
        subject_person_id: p_iKF3URQYd2AiG1hYtKBDpV
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
        - id: cs_rzQDNNintwnFHV2qwcttTT
          claim_id: c_cBSGSv6FkrfoKGLD3NyMFp
          source_id: s_p8SF1qnXdovPg4gXKQPEXa
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
        id: c_Jz5Krut6w2mp8X4CWqQfZd
        subject_person_id: p_iKF3URQYd2AiG1hYtKBDpV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王京（生于1543年），明人物。明清進士進士，籍贯上高，入仕進士，曾任知府、知縣。（中国历代人物传记资料库 CBDB 205560）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LKdvrfyi8ADpMdFgVc3ScO
          claim_id: c_Jz5Krut6w2mp8X4CWqQfZd
          source_id: s_p8SF1qnXdovPg4gXKQPEXa
          stance: supports
          locator: CBDB:205560
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dxUrn47s_j1nFvoSMDxHla
        subject_person_id: p_xsB7dQbxgv1VM3fErdpLd2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iKF3URQYd2AiG1hYtKBDpV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0vYL0qEqNGO8q2CYVlpk4y
          claim_id: c_dxUrn47s_j1nFvoSMDxHla
          source_id: s_zUcTHWJjqJSKESpZuPQkCR
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第七十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zUcTHWJjqJSKESpZuPQkCR
            source_type: api_record
            title: 中国历代人物传记资料库：王秉忠（CBDB 335213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335213&o=json
            external_identifier: CBDB:335213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.453Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xsB7dQbxgv1VM3fErdpLd2
        status: active
        display_name: 王秉忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_z1ij9kCpiRzWiR4zVOuWxF
        subject_person_id: p_f2xxX4LHcsdW9b4Aa96PA6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_iKF3URQYd2AiG1hYtKBDpV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8kRaZRq2K_v3jwmnVYwAnw
          claim_id: c_z1ij9kCpiRzWiR4zVOuWxF
          source_id: s_8PvH38BSVv8hwrhU9L9UFD
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第七十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8PvH38BSVv8hwrhU9L9UFD
            source_type: api_record
            title: 中国历代人物传记资料库：王治（CBDB 335212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335212&o=json
            external_identifier: CBDB:335212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.448Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_f2xxX4LHcsdW9b4Aa96PA6
        status: active
        display_name: 王治
        merged_into_person_id: null
    - claim:
        id: c_iCptNp4kx-9Wy_wS3TO5xo
        subject_person_id: p_MBHRpaK8e4wuxL7rkxgYDe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_iKF3URQYd2AiG1hYtKBDpV
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2g9_VIhTuI093IKraCl93O
          claim_id: c_iCptNp4kx-9Wy_wS3TO5xo
          source_id: s_NXynGGRiAGiV3MSgMdKrZu
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第七十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NXynGGRiAGiV3MSgMdKrZu
            source_type: api_record
            title: 中国历代人物传记资料库：王奇（CBDB 335211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335211&o=json
            external_identifier: CBDB:335211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.448Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MBHRpaK8e4wuxL7rkxgYDe
        status: active
        display_name: 王奇
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王京

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王京 | accepted |
| birth.date | 1543年 | accepted |
| bio.summary | 王京（生于1543年），明人物。明清進士進士，籍贯上高，入仕進士，曾任知府、知縣。（中国历代人物传记资料库 CBDB 205560） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xsB7dQbxgv1VM3fErdpLd2 | 王秉忠 | accepted |
| ancestors | p_f2xxX4LHcsdW9b4Aa96PA6 | 王治 | accepted |
| ancestors | p_MBHRpaK8e4wuxL7rkxgYDe | 王奇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秉忠（CBDB 335213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335213&o=json)
- [中国历代人物传记资料库：王京（CBDB 205560）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205560&o=json)
- [中国历代人物传记资料库：王奇（CBDB 335211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335211&o=json)
- [中国历代人物传记资料库：王治（CBDB 335212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335212&o=json)
