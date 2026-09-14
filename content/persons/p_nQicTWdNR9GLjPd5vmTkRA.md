---
schema: wang-person/v1
id: p_nQicTWdNR9GLjPd5vmTkRA
status: active
merged_into: null
display_name: 王一貞
cbdb_id: 306160
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2PHCuMbh36fQugE1m23QrP
        subject_person_id: p_nQicTWdNR9GLjPd5vmTkRA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一貞，明人物。嘉靖二十三年進士，籍贯江都。（中国历代人物传记资料库 CBDB 306160）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_e8VLklbBa_UIw-wHwZcvw2
          claim_id: c_2PHCuMbh36fQugE1m23QrP
          source_id: s_ppKPH37u5X6L5Lo5zachD2
          stance: supports
          locator: CBDB:306160
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ppKPH37u5X6L5Lo5zachD2
            source_type: api_record
            title: 中国历代人物传记资料库：王一貞（CBDB 306160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306160&o=json
            external_identifier: CBDB:306160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_w6P8Li4NDKz8XYpAkefAQi
        subject_person_id: p_nQicTWdNR9GLjPd5vmTkRA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4S3grFF8b5vYQ4vhaga14t
          claim_id: c_w6P8Li4NDKz8XYpAkefAQi
          source_id: s_ppKPH37u5X6L5Lo5zachD2
          stance: supports
          locator: CBDB:306160
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_D7wGv8veto26rMqhla4zpj
        subject_person_id: p_toP613bi74YEw4TLd3hMCu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nQicTWdNR9GLjPd5vmTkRA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s3_hxJk3OZJKO8hD9LILiq
          claim_id: c_D7wGv8veto26rMqhla4zpj
          source_id: s_nwwsWLyzCfE7QSJ3U99Q_V
          stance: supports
          locator: CBDB：兄弟 王一陽（203535）之父／母 王遷
          quotation: null
          interpretation_note: 由兄弟关系推断：王一貞 与 王一陽 为同胞（CBDB 记「兄」），王一陽 之父／母即 王一貞 之父／母。
          source:
            id: s_nwwsWLyzCfE7QSJ3U99Q_V
            source_type: api_record
            title: 中国历代人物传记资料库：王一貞（CBDB 306160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306160&o=json
            external_identifier: CBDB:306160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_toP613bi74YEw4TLd3hMCu
        status: active
        display_name: 王遷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_WuOwU9W_uVf5E662NndvAl
        subject_person_id: p_4epX45r9bJPqQLoodeDXss
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nQicTWdNR9GLjPd5vmTkRA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0luElnPM6k4TF6eCUDZw2T
          claim_id: c_WuOwU9W_uVf5E662NndvAl
          source_id: s_nwwsWLyzCfE7QSJ3U99Q_V
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203535 王一陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_nwwsWLyzCfE7QSJ3U99Q_V
            source_type: api_record
            title: 中国历代人物传记资料库：王一貞（CBDB 306160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306160&o=json
            external_identifier: CBDB:306160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4epX45r9bJPqQLoodeDXss
        status: active
        display_name: 王一陽
        merged_into_person_id: null
---

# 王一貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王一貞，明人物。嘉靖二十三年進士，籍贯江都。（中国历代人物传记资料库 CBDB 306160） | accepted |
| name.primary | 王一貞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_toP613bi74YEw4TLd3hMCu | 王遷 | accepted |
| other | p_4epX45r9bJPqQLoodeDXss | 王一陽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一貞（CBDB 306160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306160&o=json)
