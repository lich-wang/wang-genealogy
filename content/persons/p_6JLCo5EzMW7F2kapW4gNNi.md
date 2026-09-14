---
schema: wang-person/v1
id: p_6JLCo5EzMW7F2kapW4gNNi
status: active
merged_into: null
display_name: 王象貴
cbdb_id: 330757
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sCyXWksfkQLdHd82dmDMao
        subject_person_id: p_6JLCo5EzMW7F2kapW4gNNi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象貴，明人物。嘉靖四十四年進士，籍贯新城。（中国历代人物传记资料库 CBDB 330757）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_G4QdDFWzHPZAJhrby_FFcg
          claim_id: c_sCyXWksfkQLdHd82dmDMao
          source_id: s_xnWM7G48RyX5mHdJ1G3ANN
          stance: supports
          locator: CBDB:330757
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_xnWM7G48RyX5mHdJ1G3ANN
            source_type: api_record
            title: 中国历代人物传记资料库：王象貴（CBDB 330757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330757&o=json
            external_identifier: CBDB:330757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SA2PYiwdfGy7Tzvgyt8BCm
        subject_person_id: p_6JLCo5EzMW7F2kapW4gNNi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SLCRfnHK7FVrheobAJSSP4
          claim_id: c_SA2PYiwdfGy7Tzvgyt8BCm
          source_id: s_xnWM7G48RyX5mHdJ1G3ANN
          stance: supports
          locator: CBDB:330757
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ChYgQrxTA_HtWyifElS7aF
        subject_person_id: p_AKu7Q79dhYjH69pKrRtR5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6JLCo5EzMW7F2kapW4gNNi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AusFBNuabbCoAbOQerZPuY
          claim_id: c_ChYgQrxTA_HtWyifElS7aF
          source_id: s_TS831NuH0pNp0-rGmkRhnn
          stance: supports
          locator: CBDB：兄弟 王象坤（205267）之父／母 王之翰
          quotation: null
          interpretation_note: 由兄弟关系推断：王象貴 与 王象坤 为同胞（CBDB 记「兄」），王象坤 之父／母即 王象貴 之父／母。
          source:
            id: s_TS831NuH0pNp0-rGmkRhnn
            source_type: api_record
            title: 中国历代人物传记资料库：王象貴（CBDB 330757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330757&o=json
            external_identifier: CBDB:330757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AKu7Q79dhYjH69pKrRtR5y
        status: active
        display_name: 王之翰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_XVK-A_xuKGrHxkLAcEblCG
        subject_person_id: p_6JLCo5EzMW7F2kapW4gNNi
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hkxRnkwdABHFBvtuuQxejY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DGYkFeSul15yiSoHxbAJOh
          claim_id: c_XVK-A_xuKGrHxkLAcEblCG
          source_id: s_TS831NuH0pNp0-rGmkRhnn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205267 王象坤）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TS831NuH0pNp0-rGmkRhnn
            source_type: api_record
            title: 中国历代人物传记资料库：王象貴（CBDB 330757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330757&o=json
            external_identifier: CBDB:330757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hkxRnkwdABHFBvtuuQxejY
        status: active
        display_name: 王象坤
        merged_into_person_id: null
---

# 王象貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王象貴，明人物。嘉靖四十四年進士，籍贯新城。（中国历代人物传记资料库 CBDB 330757） | accepted |
| name.primary | 王象貴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AKu7Q79dhYjH69pKrRtR5y | 王之翰 | accepted |
| other | p_hkxRnkwdABHFBvtuuQxejY | 王象坤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王象貴（CBDB 330757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330757&o=json)
