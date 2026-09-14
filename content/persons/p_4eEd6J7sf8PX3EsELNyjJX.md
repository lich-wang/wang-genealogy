---
schema: wang-person/v1
id: p_4eEd6J7sf8PX3EsELNyjJX
status: active
merged_into: null
display_name: 王嘉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qTAoKierzCMzZ2nDLQXbLj
        subject_person_id: p_4eEd6J7sf8PX3EsELNyjJX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VRy2oLRPNZmYyBG9SDL79G
          claim_id: c_qTAoKierzCMzZ2nDLQXbLj
          source_id: s_gq2vRo7cUEh9RRrSi9CXMC
          stance: supports
          locator: CBDB:324428
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324428）
          source: &a1
            id: s_gq2vRo7cUEh9RRrSi9CXMC
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉（CBDB 324428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324428&o=json
            external_identifier: CBDB:324428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.185Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fDuNQ5usYhrZkomdrwgpk6
        subject_person_id: p_4eEd6J7sf8PX3EsELNyjJX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉，明人物。嘉靖三十八年進士，籍贯涪州。（中国历代人物传记资料库 CBDB 324428）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B2b7KS-lN3P9ZPQtudeJlB
          claim_id: c_fDuNQ5usYhrZkomdrwgpk6
          source_id: s_gq2vRo7cUEh9RRrSi9CXMC
          stance: supports
          locator: CBDB:324428
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_d_TXnhPNINCAUwwGWC-qnp
        subject_person_id: p_DcTxGi4fs4wDZZw4QNf6x3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4eEd6J7sf8PX3EsELNyjJX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FsddATFMl_k4DoNzAjAotk
          claim_id: c_d_TXnhPNINCAUwwGWC-qnp
          source_id: s_DqmaCVn5ebT8fSqqloedzA
          stance: supports
          locator: CBDB：兄弟 王堂（204814）之父／母 王本雚
          quotation: null
          interpretation_note: 由兄弟关系推断：王嘉 与 王堂 为同胞（CBDB 记「弟」），王堂 之父／母即 王嘉 之父／母。
          source:
            id: s_DqmaCVn5ebT8fSqqloedzA
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉（CBDB 324428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324428&o=json
            external_identifier: CBDB:324428
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
        id: c_Nwt4hou9m6dI-Ho8wYtSQI
        subject_person_id: p_4eEd6J7sf8PX3EsELNyjJX
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
        - id: cs_3BwumdkBL4gc_yQulSxvEG
          claim_id: c_Nwt4hou9m6dI-Ho8wYtSQI
          source_id: s_DqmaCVn5ebT8fSqqloedzA
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204814 王堂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DqmaCVn5ebT8fSqqloedzA
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉（CBDB 324428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324428&o=json
            external_identifier: CBDB:324428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_R77qQWn6AaKWcHuNaQWCy2
        status: active
        display_name: 王堂
        merged_into_person_id: null
---

# 王嘉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉 | accepted |
| bio.summary | 王嘉，明人物。嘉靖三十八年進士，籍贯涪州。（中国历代人物传记资料库 CBDB 324428） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DcTxGi4fs4wDZZw4QNf6x3 | 王本雚 | accepted |
| other | p_R77qQWn6AaKWcHuNaQWCy2 | 王堂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉（CBDB 324428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324428&o=json)
