---
schema: wang-person/v1
id: p_F23fYphen2FH6jcDL7wNMK
status: active
merged_into: null
display_name: 王勤學
cbdb_id: 306923
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RkZfJRDpn1mqUhMvS2vfPH
        subject_person_id: p_F23fYphen2FH6jcDL7wNMK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勤學，明人物。嘉靖二十三年進士，籍贯陽朔。（中国历代人物传记资料库 CBDB 306923）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_FFPoSJbnmReP1B5a_T7qNH
          claim_id: c_RkZfJRDpn1mqUhMvS2vfPH
          source_id: s_GWRKEqoJBcv2LnmmQL47Y8
          stance: supports
          locator: CBDB:306923
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GWRKEqoJBcv2LnmmQL47Y8
            source_type: api_record
            title: 中国历代人物传记资料库：王勤學（CBDB 306923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306923&o=json
            external_identifier: CBDB:306923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uoAfB9qq4YKTiTPz5fPnZu
        subject_person_id: p_F23fYphen2FH6jcDL7wNMK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勤學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_uVjRZ6wUBMjawdQXvRVtUW
          claim_id: c_uoAfB9qq4YKTiTPz5fPnZu
          source_id: s_GWRKEqoJBcv2LnmmQL47Y8
          stance: supports
          locator: CBDB:306923
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vzMGyNPFNv8mCa2EWO-ES9
        subject_person_id: p_XWoQFU6m26umasN1nUqzCk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F23fYphen2FH6jcDL7wNMK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OYYUiwtOh7wBjcZqxZy0qv
          claim_id: c_vzMGyNPFNv8mCa2EWO-ES9
          source_id: s_bkKt9Xgu9tDcOsj4JHdMqz
          stance: supports
          locator: CBDB：兄弟 王學（203587）之父／母 王珵
          quotation: null
          interpretation_note: 由兄弟关系推断：王勤學 与 王學 为同胞（CBDB 记「弟」），王學 之父／母即 王勤學 之父／母。
          source:
            id: s_bkKt9Xgu9tDcOsj4JHdMqz
            source_type: api_record
            title: 中国历代人物传记资料库：王勤學（CBDB 306923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306923&o=json
            external_identifier: CBDB:306923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XWoQFU6m26umasN1nUqzCk
        status: active
        display_name: 王珵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_E_ubgB2ei9NizvJsTloy1H
        subject_person_id: p_F23fYphen2FH6jcDL7wNMK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mj43p62dQVDfJdFrwRMJq5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hJwL54QpSwPYe6bwuL-YzO
          claim_id: c_E_ubgB2ei9NizvJsTloy1H
          source_id: s_bkKt9Xgu9tDcOsj4JHdMqz
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203587 王學）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bkKt9Xgu9tDcOsj4JHdMqz
            source_type: api_record
            title: 中国历代人物传记资料库：王勤學（CBDB 306923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306923&o=json
            external_identifier: CBDB:306923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mj43p62dQVDfJdFrwRMJq5
        status: active
        display_name: 王學
        merged_into_person_id: null
---

# 王勤學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王勤學，明人物。嘉靖二十三年進士，籍贯陽朔。（中国历代人物传记资料库 CBDB 306923） | accepted |
| name.primary | 王勤學 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XWoQFU6m26umasN1nUqzCk | 王珵 | accepted |
| other | p_mj43p62dQVDfJdFrwRMJq5 | 王學 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勤學（CBDB 306923）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306923&o=json)
