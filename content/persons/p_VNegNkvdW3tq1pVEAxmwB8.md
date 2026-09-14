---
schema: wang-person/v1
id: p_VNegNkvdW3tq1pVEAxmwB8
status: active
merged_into: null
display_name: 王鎰
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fC2FESCmeBrrf72RRSSPVp
        subject_person_id: p_VNegNkvdW3tq1pVEAxmwB8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W6yGMPhSievfKXs6sjJHU8
          claim_id: c_fC2FESCmeBrrf72RRSSPVp
          source_id: s_f4MdJwBpAt7jX8Y82cxKrv
          stance: supports
          locator: CBDB:261341
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261341）
          source: &a1
            id: s_f4MdJwBpAt7jX8Y82cxKrv
            source_type: api_record
            title: 中国历代人物传记资料库：王鎰（CBDB 261341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261341&o=json
            external_identifier: CBDB:261341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.537Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GC2e3aMPh8qNxf1KsbE6AN
        subject_person_id: p_VNegNkvdW3tq1pVEAxmwB8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎰，明人物。弘治三年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 261341）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q6HNX311I0uedZeAhpBWrk
          claim_id: c_GC2e3aMPh8qNxf1KsbE6AN
          source_id: s_f4MdJwBpAt7jX8Y82cxKrv
          stance: supports
          locator: CBDB:261341
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OsRi0aYyrAZz7hGhHq4CVu
        subject_person_id: p_xJckw5M7s3953PwfjKtPgj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VNegNkvdW3tq1pVEAxmwB8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OWoFthat9y-nyJtxFy7XPJ
          claim_id: c_OsRi0aYyrAZz7hGhHq4CVu
          source_id: s_dQfIQC5WqUQPPXuMQqt2mE
          stance: supports
          locator: CBDB：兄弟 王惠（200679）之父／母 王東溪
          quotation: null
          interpretation_note: 由兄弟关系推断：王鎰 与 王惠 为同胞（CBDB 记「弟」），王惠 之父／母即 王鎰 之父／母。
          source:
            id: s_dQfIQC5WqUQPPXuMQqt2mE
            source_type: api_record
            title: 中国历代人物传记资料库：王鎰（CBDB 261341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261341&o=json
            external_identifier: CBDB:261341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xJckw5M7s3953PwfjKtPgj
        status: active
        display_name: 王東溪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_tOrhBAcAEcQGd1WEKEPO0f
        subject_person_id: p_VNegNkvdW3tq1pVEAxmwB8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y2dDT0qDuX_AqU6cX4exHa
          claim_id: c_tOrhBAcAEcQGd1WEKEPO0f
          source_id: s_dQfIQC5WqUQPPXuMQqt2mE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200679 王惠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dQfIQC5WqUQPPXuMQqt2mE
            source_type: api_record
            title: 中国历代人物传记资料库：王鎰（CBDB 261341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261341&o=json
            external_identifier: CBDB:261341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        status: active
        display_name: 王惠
        merged_into_person_id: null
---

# 王鎰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎰 | accepted |
| bio.summary | 王鎰，明人物。弘治三年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 261341） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xJckw5M7s3953PwfjKtPgj | 王東溪 | accepted |
| other | p_Z5nYxV4Tqg6P2c2jCvDNPx | 王惠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎰（CBDB 261341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261341&o=json)
