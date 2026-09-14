---
schema: wang-person/v1
id: p_Yap43sMPPgQeMHyWeaNJ3S
status: active
merged_into: null
display_name: 王嶸
cbdb_id: 332922
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_91CKNbcDetcef4crKnf5tP
        subject_person_id: p_Yap43sMPPgQeMHyWeaNJ3S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶸，明人物。天順八年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 332922）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_LjtV2Eal7dKLCk1th0Tx7H
          claim_id: c_91CKNbcDetcef4crKnf5tP
          source_id: s_xTGJ28DvL7RwhweQfUb13V
          stance: supports
          locator: CBDB:332922
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_xTGJ28DvL7RwhweQfUb13V
            source_type: api_record
            title: 中国历代人物传记资料库：王嶸（CBDB 332922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332922&o=json
            external_identifier: CBDB:332922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3PEMJin9wH1J87xq2jvSdz
        subject_person_id: p_Yap43sMPPgQeMHyWeaNJ3S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FQQwLLg6reHeoEoKg1LcJZ
          claim_id: c_3PEMJin9wH1J87xq2jvSdz
          source_id: s_xTGJ28DvL7RwhweQfUb13V
          stance: supports
          locator: CBDB:332922
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_w9fAbN_GkiKZRm4RmWcCAo
        subject_person_id: p_1bhXJAXaVpf689XsatKT86
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Yap43sMPPgQeMHyWeaNJ3S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pHZyG6MTFiLjXOwk7RsOMI
          claim_id: c_w9fAbN_GkiKZRm4RmWcCAo
          source_id: s_prXpst5PaW0FWrVUk_leZQ
          stance: supports
          locator: CBDB：兄弟 王崇（198899）之父／母 王公冕
          quotation: null
          interpretation_note: 由兄弟关系推断：王嶸 与 王崇 为同胞（CBDB 记「兄」），王崇 之父／母即 王嶸 之父／母。
          source:
            id: s_prXpst5PaW0FWrVUk_leZQ
            source_type: api_record
            title: 中国历代人物传记资料库：王嶸（CBDB 332922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332922&o=json
            external_identifier: CBDB:332922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1bhXJAXaVpf689XsatKT86
        status: active
        display_name: 王公冕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_SHvLLWiYHG__-IUB2EAvIf
        subject_person_id: p_3mAauYa8M61LZB5CiRWcsN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Yap43sMPPgQeMHyWeaNJ3S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9pMEFWIpR6BoexlJWt8Xkt
          claim_id: c_SHvLLWiYHG__-IUB2EAvIf
          source_id: s_prXpst5PaW0FWrVUk_leZQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198899 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_prXpst5PaW0FWrVUk_leZQ
            source_type: api_record
            title: 中国历代人物传记资料库：王嶸（CBDB 332922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332922&o=json
            external_identifier: CBDB:332922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3mAauYa8M61LZB5CiRWcsN
        status: active
        display_name: 王崇
        merged_into_person_id: null
---

# 王嶸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王嶸，明人物。天順八年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 332922） | accepted |
| name.primary | 王嶸 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1bhXJAXaVpf689XsatKT86 | 王公冕 | accepted |
| other | p_3mAauYa8M61LZB5CiRWcsN | 王崇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嶸（CBDB 332922）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332922&o=json)
