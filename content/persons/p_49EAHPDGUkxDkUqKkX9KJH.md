---
schema: wang-person/v1
id: p_49EAHPDGUkxDkUqKkX9KJH
status: active
merged_into: null
display_name: 王問
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vt2U9QRYz67wiA4hhHM3jp
        subject_person_id: p_49EAHPDGUkxDkUqKkX9KJH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D7rhdS7TBBUD9bGZN4UoQR
          claim_id: c_vt2U9QRYz67wiA4hhHM3jp
          source_id: s_fARM7JtUx2oHHqRa82eMDh
          stance: supports
          locator: CBDB:324431
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324431）
          source: &a1
            id: s_fARM7JtUx2oHHqRa82eMDh
            source_type: api_record
            title: 中国历代人物传记资料库：王問（CBDB 324431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324431&o=json
            external_identifier: CBDB:324431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.186Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wTBdrgMNDAVjw7Yd5Z11Qp
        subject_person_id: p_49EAHPDGUkxDkUqKkX9KJH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問，明人物。嘉靖三十八年進士，籍贯涪州。（中国历代人物传记资料库 CBDB 324431）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5ES18uaMc6yKdNA-lWpw2p
          claim_id: c_wTBdrgMNDAVjw7Yd5Z11Qp
          source_id: s_fARM7JtUx2oHHqRa82eMDh
          stance: supports
          locator: CBDB:324431
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GYHIGMKVh6JwTPzqSSovZI
        subject_person_id: p_DcTxGi4fs4wDZZw4QNf6x3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_49EAHPDGUkxDkUqKkX9KJH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gBRKE8YPxM1OgU7_SAGuhw
          claim_id: c_GYHIGMKVh6JwTPzqSSovZI
          source_id: s_ntd3if8Pv1xSAqJKZQ4mC0
          stance: supports
          locator: CBDB：兄弟 王堂（204814）之父／母 王本雚
          quotation: null
          interpretation_note: 由兄弟关系推断：王問 与 王堂 为同胞（CBDB 记「兄」），王堂 之父／母即 王問 之父／母。
          source:
            id: s_ntd3if8Pv1xSAqJKZQ4mC0
            source_type: api_record
            title: 中国历代人物传记资料库：王問（CBDB 324431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324431&o=json
            external_identifier: CBDB:324431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DcTxGi4fs4wDZZw4QNf6x3
        status: active
        display_name: 王本雚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ZRtrVwj0c6FJ8R5i_EQ3KW
        subject_person_id: p_49EAHPDGUkxDkUqKkX9KJH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_R77qQWn6AaKWcHuNaQWCy2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B7cji8DEpUUvd6WE5LtpT6
          claim_id: c_ZRtrVwj0c6FJ8R5i_EQ3KW
          source_id: s_ntd3if8Pv1xSAqJKZQ4mC0
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204814 王堂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ntd3if8Pv1xSAqJKZQ4mC0
            source_type: api_record
            title: 中国历代人物传记资料库：王問（CBDB 324431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324431&o=json
            external_identifier: CBDB:324431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_R77qQWn6AaKWcHuNaQWCy2
        status: active
        display_name: 王堂
        merged_into_person_id: null
---

# 王問

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王問 | accepted |
| bio.summary | 王問，明人物。嘉靖三十八年進士，籍贯涪州。（中国历代人物传记资料库 CBDB 324431） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DcTxGi4fs4wDZZw4QNf6x3 | 王本雚 | accepted |
| other | p_R77qQWn6AaKWcHuNaQWCy2 | 王堂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王問（CBDB 324431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324431&o=json)
