---
schema: wang-person/v1
id: p_hJoEAYPFFprqrri2zWwHQx
status: active
merged_into: null
display_name: 王大本
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_26hhVs1bsKd2FSP4gW5qUC
        subject_person_id: p_hJoEAYPFFprqrri2zWwHQx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大本
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JvFb5W2f66vRDyv8HBCNy8
          claim_id: c_26hhVs1bsKd2FSP4gW5qUC
          source_id: s_j6L6Mcaiw9p71feYBQXFKH
          stance: supports
          locator: CBDB:264451
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264451）
          source: &a1
            id: s_j6L6Mcaiw9p71feYBQXFKH
            source_type: api_record
            title: 中国历代人物传记资料库：王大本（CBDB 264451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264451&o=json
            external_identifier: CBDB:264451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.641Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_htNWDGmGPDE4QQt6KU9y4z
        subject_person_id: p_hJoEAYPFFprqrri2zWwHQx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大本，明人物。弘治六年進士，籍贯上海，曾任百戶、縣丞。（中国历代人物传记资料库 CBDB 264451）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ews2hPxvXnhREVFFSMUE8n
          claim_id: c_htNWDGmGPDE4QQt6KU9y4z
          source_id: s_j6L6Mcaiw9p71feYBQXFKH
          stance: supports
          locator: CBDB:264451
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QKLyp1gdLK5ouO8bFiAVMg
        subject_person_id: p_2hYFczFXSMMXJ25M18ZPJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hJoEAYPFFprqrri2zWwHQx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xj-uyw1l6YQDFUXwNNTMff
          claim_id: c_QKLyp1gdLK5ouO8bFiAVMg
          source_id: s_kn8h0dhcm-KGWOw2cQjnyl
          stance: supports
          locator: CBDB：兄弟 王大用（200906）之父／母 王乂衡
          quotation: null
          interpretation_note: 由兄弟关系推断：王大本 与 王大用 为同胞（CBDB 记「弟」），王大用 之父／母即 王大本 之父／母。
          source:
            id: s_kn8h0dhcm-KGWOw2cQjnyl
            source_type: api_record
            title: 中国历代人物传记资料库：王大本（CBDB 264451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264451&o=json
            external_identifier: CBDB:264451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2hYFczFXSMMXJ25M18ZPJD
        status: active
        display_name: 王乂衡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_BTN_4dYYTL7lQ8GVAxN7K8
        subject_person_id: p_hJoEAYPFFprqrri2zWwHQx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tcnRstaNUF5RMY944rGoMz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X38NzdEBFiTBVj5YzS76v_
          claim_id: c_BTN_4dYYTL7lQ8GVAxN7K8
          source_id: s_kn8h0dhcm-KGWOw2cQjnyl
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200906 王大用）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kn8h0dhcm-KGWOw2cQjnyl
            source_type: api_record
            title: 中国历代人物传记资料库：王大本（CBDB 264451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264451&o=json
            external_identifier: CBDB:264451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tcnRstaNUF5RMY944rGoMz
        status: active
        display_name: 王大用
        merged_into_person_id: null
---

# 王大本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大本 | accepted |
| bio.summary | 王大本，明人物。弘治六年進士，籍贯上海，曾任百戶、縣丞。（中国历代人物传记资料库 CBDB 264451） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2hYFczFXSMMXJ25M18ZPJD | 王乂衡 | accepted |
| other | p_tcnRstaNUF5RMY944rGoMz | 王大用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大本（CBDB 264451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264451&o=json)
