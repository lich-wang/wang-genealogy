---
schema: wang-person/v1
id: p_6P49iir1mVmmRNwpaPLZdm
status: active
merged_into: null
display_name: 王應鈺
cbdb_id: 312623
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4gWnuY66eQB794pUdRcexS
        subject_person_id: p_6P49iir1mVmmRNwpaPLZdm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應鈺，明人物。嘉靖二十九年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 312623）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_A_7rOutzzOxlzNUTpPqUKI
          claim_id: c_4gWnuY66eQB794pUdRcexS
          source_id: s_SPxHLVEce9JZp3of6TSiNp
          stance: supports
          locator: CBDB:312623
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_SPxHLVEce9JZp3of6TSiNp
            source_type: api_record
            title: 中国历代人物传记资料库：王應鈺（CBDB 312623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312623&o=json
            external_identifier: CBDB:312623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iGfkF2vgYobRYA1Pva1JR5
        subject_person_id: p_6P49iir1mVmmRNwpaPLZdm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應鈺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JAZKdLivvPFkyr4eUrnjDa
          claim_id: c_iGfkF2vgYobRYA1Pva1JR5
          source_id: s_SPxHLVEce9JZp3of6TSiNp
          stance: supports
          locator: CBDB:312623
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bAUatLYsmrNj_QQNqFXIgO
        subject_person_id: p_sMKHNsqNCt9mBLSW4zbVG6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6P49iir1mVmmRNwpaPLZdm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mvzFl1bLTk6LwjTJTfT5-g
          claim_id: c_bAUatLYsmrNj_QQNqFXIgO
          source_id: s_8LlQb13l0JG49VnUPutJj5
          stance: supports
          locator: CBDB：兄弟 王應時（203967）之父／母 王容
          quotation: null
          interpretation_note: 由兄弟关系推断：王應鈺 与 王應時 为同胞（CBDB 记「兄」），王應時 之父／母即 王應鈺 之父／母。
          source:
            id: s_8LlQb13l0JG49VnUPutJj5
            source_type: api_record
            title: 中国历代人物传记资料库：王應鈺（CBDB 312623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312623&o=json
            external_identifier: CBDB:312623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sMKHNsqNCt9mBLSW4zbVG6
        status: active
        display_name: 王容
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_7g58pH3HaMQ7VZtudrurTB
        subject_person_id: p_6P49iir1mVmmRNwpaPLZdm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rJtRxxSC69LmdREGcBhbeB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nFHxNCZ1jmNIKZhge0N5h7
          claim_id: c_7g58pH3HaMQ7VZtudrurTB
          source_id: s_8LlQb13l0JG49VnUPutJj5
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203967 王應時）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8LlQb13l0JG49VnUPutJj5
            source_type: api_record
            title: 中国历代人物传记资料库：王應鈺（CBDB 312623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312623&o=json
            external_identifier: CBDB:312623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rJtRxxSC69LmdREGcBhbeB
        status: active
        display_name: 王應時
        merged_into_person_id: null
---

# 王應鈺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王應鈺，明人物。嘉靖二十九年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 312623） | accepted |
| name.primary | 王應鈺 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sMKHNsqNCt9mBLSW4zbVG6 | 王容 | accepted |
| other | p_rJtRxxSC69LmdREGcBhbeB | 王應時 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應鈺（CBDB 312623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312623&o=json)
