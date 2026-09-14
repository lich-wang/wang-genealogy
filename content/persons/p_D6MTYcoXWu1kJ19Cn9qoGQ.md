---
schema: wang-person/v1
id: p_D6MTYcoXWu1kJ19Cn9qoGQ
status: active
merged_into: null
display_name: 王泰
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iUL4GpPXRySaqT8CmQYUtk
        subject_person_id: p_D6MTYcoXWu1kJ19Cn9qoGQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vdqT8ptEksNKL6MjTsZkm1
          claim_id: c_iUL4GpPXRySaqT8CmQYUtk
          source_id: s_sesbowPNr7Fa4CXFK5Ubrm
          stance: supports
          locator: CBDB:261344
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261344）
          source: &a1
            id: s_sesbowPNr7Fa4CXFK5Ubrm
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 261344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261344&o=json
            external_identifier: CBDB:261344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.542Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sMiF4psnKWev9ujcVoH4jG
        subject_person_id: p_D6MTYcoXWu1kJ19Cn9qoGQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰，明人物。弘治三年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 261344）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tK8ttFOP3Wffvsc-bazZ4b
          claim_id: c_sMiF4psnKWev9ujcVoH4jG
          source_id: s_sesbowPNr7Fa4CXFK5Ubrm
          stance: supports
          locator: CBDB:261344
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GIELVKvO6Qs4B0Tb_qWP7u
        subject_person_id: p_xJckw5M7s3953PwfjKtPgj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D6MTYcoXWu1kJ19Cn9qoGQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_81yiK155nI-D7ZFvENItvb
          claim_id: c_GIELVKvO6Qs4B0Tb_qWP7u
          source_id: s_QeUgpLNte31DquBaapQY8v
          stance: supports
          locator: CBDB：兄弟 王惠（200679）之父／母 王東溪
          quotation: null
          interpretation_note: 由兄弟关系推断：王泰 与 王惠 为同胞（CBDB 记「弟」），王惠 之父／母即 王泰 之父／母。
          source:
            id: s_QeUgpLNte31DquBaapQY8v
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 261344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261344&o=json
            external_identifier: CBDB:261344
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
        id: c_bZKgBaztmX4ZSrJMlrQnGQ
        subject_person_id: p_D6MTYcoXWu1kJ19Cn9qoGQ
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
        - id: cs_dhWdNeIVrq9mh3KnT-sq8S
          claim_id: c_bZKgBaztmX4ZSrJMlrQnGQ
          source_id: s_QeUgpLNte31DquBaapQY8v
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200679 王惠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QeUgpLNte31DquBaapQY8v
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 261344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261344&o=json
            external_identifier: CBDB:261344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Z5nYxV4Tqg6P2c2jCvDNPx
        status: active
        display_name: 王惠
        merged_into_person_id: null
---

# 王泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泰 | accepted |
| bio.summary | 王泰，明人物。弘治三年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 261344） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xJckw5M7s3953PwfjKtPgj | 王東溪 | accepted |
| other | p_Z5nYxV4Tqg6P2c2jCvDNPx | 王惠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王泰（CBDB 261344）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261344&o=json)
