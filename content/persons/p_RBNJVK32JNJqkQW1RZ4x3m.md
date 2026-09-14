---
schema: wang-person/v1
id: p_RBNJVK32JNJqkQW1RZ4x3m
status: active
merged_into: null
display_name: 王汝洽
cbdb_id: 211410
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z2DP6YCNrkspx748BLPXJ1
        subject_person_id: p_RBNJVK32JNJqkQW1RZ4x3m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝洽，明人物。隆慶五年進士，籍贯懷仁。（中国历代人物传记资料库 CBDB 211410）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_r9tlnA679a6cKDz7Z-vehC
          claim_id: c_Z2DP6YCNrkspx748BLPXJ1
          source_id: s_g8fUMtrqACsfd8qcZuWtpN
          stance: supports
          locator: CBDB:211410
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_g8fUMtrqACsfd8qcZuWtpN
            source_type: api_record
            title: 中国历代人物传记资料库：王汝洽（CBDB 211410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211410&o=json
            external_identifier: CBDB:211410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nLGMpPHg3KDmW8zVnKBbHQ
        subject_person_id: p_RBNJVK32JNJqkQW1RZ4x3m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝洽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QEn2k1XotVTEaFMrEQXsyc
          claim_id: c_nLGMpPHg3KDmW8zVnKBbHQ
          source_id: s_g8fUMtrqACsfd8qcZuWtpN
          stance: supports
          locator: CBDB:211410
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_5NvgpfYRCbA6xFX2b2beZH
        status: active
        display_name: 王繼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bCn8ClFI3y3Y4lTtBjAWNo
        subject_person_id: p_MmVpUWztCQKaC484qaKxXc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RBNJVK32JNJqkQW1RZ4x3m
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ufl1uqU5sGv6coJnWtqLv5
          claim_id: c_bCn8ClFI3y3Y4lTtBjAWNo
          source_id: s_RtfQIQC3STwGMFXdAS1JrE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205966 王汝濂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_MmVpUWztCQKaC484qaKxXc
        status: active
        display_name: 王汝濂
        merged_into_person_id: null
---

# 王汝洽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝洽，明人物。隆慶五年進士，籍贯懷仁。（中国历代人物传记资料库 CBDB 211410） | accepted |
| name.primary | 王汝洽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5NvgpfYRCbA6xFX2b2beZH | 王繼 | accepted |
| other | p_MmVpUWztCQKaC484qaKxXc | 王汝濂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝洽（CBDB 211410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211410&o=json)
