---
schema: wang-person/v1
id: p_u458xMHFN5Z27VY2fzxC4e
status: active
merged_into: null
display_name: 王養賢
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_48V41AUA87ytWQ98nZRuwH
        subject_person_id: p_u458xMHFN5Z27VY2fzxC4e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王養賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_42wPB8WC46Mcm6DEc3xTCm
          claim_id: c_48V41AUA87ytWQ98nZRuwH
          source_id: s_71JF4tE7qzQ4HDEs55snBu
          stance: supports
          locator: CBDB:287963
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287963）
          source: &a1
            id: s_71JF4tE7qzQ4HDEs55snBu
            source_type: api_record
            title: 中国历代人物传记资料库：王養賢（CBDB 287963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287963&o=json
            external_identifier: CBDB:287963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.279Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g3UMJzTD8MB7jtAWH6UxCZ
        subject_person_id: p_u458xMHFN5Z27VY2fzxC4e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王養賢，明人物。嘉靖八年進士，籍贯南充。（中国历代人物传记资料库 CBDB 287963）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uanITARXpXzxI8VNjqWrp_
          claim_id: c_g3UMJzTD8MB7jtAWH6UxCZ
          source_id: s_71JF4tE7qzQ4HDEs55snBu
          stance: supports
          locator: CBDB:287963
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QtXPdsbFM9Y_iNah27kCR2
        subject_person_id: p_L25AA1dbPLFD1pLw6NiMqz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_u458xMHFN5Z27VY2fzxC4e
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rmmcB3eicGSuYCgnaGIi6D
          claim_id: c_QtXPdsbFM9Y_iNah27kCR2
          source_id: s_VfHDru5s9GGnrB_-KF0RkC
          stance: supports
          locator: CBDB：兄弟 王養正（202427）之父／母 王璠
          quotation: null
          interpretation_note: 由兄弟关系推断：王養賢 与 王養正 为同胞（CBDB 记「兄」），王養正 之父／母即 王養賢 之父／母。
          source:
            id: s_VfHDru5s9GGnrB_-KF0RkC
            source_type: api_record
            title: 中国历代人物传记资料库：王養賢（CBDB 287963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287963&o=json
            external_identifier: CBDB:287963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L25AA1dbPLFD1pLw6NiMqz
        status: active
        display_name: 王璠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Fz-9J36PFDeWN2YLG8_45Q
        subject_person_id: p_91mfo9pBnGu6yNqPS5SH4s
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_u458xMHFN5Z27VY2fzxC4e
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IVVVlMmpnRloa_5OitgyeM
          claim_id: c_Fz-9J36PFDeWN2YLG8_45Q
          source_id: s_VfHDru5s9GGnrB_-KF0RkC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202427 王養正）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VfHDru5s9GGnrB_-KF0RkC
            source_type: api_record
            title: 中国历代人物传记资料库：王養賢（CBDB 287963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287963&o=json
            external_identifier: CBDB:287963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_91mfo9pBnGu6yNqPS5SH4s
        status: active
        display_name: 王養正
        merged_into_person_id: null
    - claim:
        id: c_X_zyYhqopwEQksQjS4T7Uq
        subject_person_id: p_JFCMn29RFWw99L547unXBG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_u458xMHFN5Z27VY2fzxC4e
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nn_00qDcKZnalG2eCST8Rg
          claim_id: c_X_zyYhqopwEQksQjS4T7Uq
          source_id: s_VfHDru5s9GGnrB_-KF0RkC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203320 王養浩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VfHDru5s9GGnrB_-KF0RkC
            source_type: api_record
            title: 中国历代人物传记资料库：王養賢（CBDB 287963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287963&o=json
            external_identifier: CBDB:287963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JFCMn29RFWw99L547unXBG
        status: active
        display_name: 王養浩
        merged_into_person_id: null
---

# 王養賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王養賢 | accepted |
| bio.summary | 王養賢，明人物。嘉靖八年進士，籍贯南充。（中国历代人物传记资料库 CBDB 287963） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_L25AA1dbPLFD1pLw6NiMqz | 王璠 | accepted |
| other | p_91mfo9pBnGu6yNqPS5SH4s | 王養正 | accepted |
| other | p_JFCMn29RFWw99L547unXBG | 王養浩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王養賢（CBDB 287963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287963&o=json)
