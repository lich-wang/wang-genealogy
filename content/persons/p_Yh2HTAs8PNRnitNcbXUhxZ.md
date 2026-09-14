---
schema: wang-person/v1
id: p_Yh2HTAs8PNRnitNcbXUhxZ
status: active
merged_into: null
display_name: 王之槙
cbdb_id: 333328
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_24RG63n3cU5jKevVSG3teB
        subject_person_id: p_Yh2HTAs8PNRnitNcbXUhxZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之槙，明人物。嘉靖四十四年進士，籍贯穎州。（中国历代人物传记资料库 CBDB 333328）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_KWpx-bAz7ZERr-3uBNWPXM
          claim_id: c_24RG63n3cU5jKevVSG3teB
          source_id: s_rMPd3zLKjM2RpJkZZeKHU7
          stance: supports
          locator: CBDB:333328
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_rMPd3zLKjM2RpJkZZeKHU7
            source_type: api_record
            title: 中国历代人物传记资料库：王之槙（CBDB 333328）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333328&o=json
            external_identifier: CBDB:333328
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9uMXMQN4CC5KzK5BJA3i2j
        subject_person_id: p_Yh2HTAs8PNRnitNcbXUhxZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之槙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EXppaKpxwjEd4L6MzyTfuJ
          claim_id: c_9uMXMQN4CC5KzK5BJA3i2j
          source_id: s_rMPd3zLKjM2RpJkZZeKHU7
          stance: supports
          locator: CBDB:333328
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_o4xXDSmdpAWhQ6MXM-E5D0
        subject_person_id: p_L1K6UGcPzEpvk1UMcnFzF5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Yh2HTAs8PNRnitNcbXUhxZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cNVGWoszMAgPcxr32Y9ZWE
          claim_id: c_o4xXDSmdpAWhQ6MXM-E5D0
          source_id: s_2yc-IBjo1VRjOs2pUVpFej
          stance: supports
          locator: CBDB：兄弟 王之屏（205448）之父／母 王崇儒
          quotation: null
          interpretation_note: 由兄弟关系推断：王之槙 与 王之屏 为同胞（CBDB 记「兄」），王之屏 之父／母即 王之槙 之父／母。
          source:
            id: s_2yc-IBjo1VRjOs2pUVpFej
            source_type: api_record
            title: 中国历代人物传记资料库：王之槙（CBDB 333328）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333328&o=json
            external_identifier: CBDB:333328
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L1K6UGcPzEpvk1UMcnFzF5
        status: active
        display_name: 王崇儒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_rcoYHJP0GIIkcOkMy8fQEh
        subject_person_id: p_1rXUfnsmYtKV6HvQmcZEx1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Yh2HTAs8PNRnitNcbXUhxZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4Nr987GyjfeXMxhjmUGyWg
          claim_id: c_rcoYHJP0GIIkcOkMy8fQEh
          source_id: s_2yc-IBjo1VRjOs2pUVpFej
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205448 王之屏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2yc-IBjo1VRjOs2pUVpFej
            source_type: api_record
            title: 中国历代人物传记资料库：王之槙（CBDB 333328）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333328&o=json
            external_identifier: CBDB:333328
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1rXUfnsmYtKV6HvQmcZEx1
        status: active
        display_name: 王之屏
        merged_into_person_id: null
---

# 王之槙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之槙，明人物。嘉靖四十四年進士，籍贯穎州。（中国历代人物传记资料库 CBDB 333328） | accepted |
| name.primary | 王之槙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_L1K6UGcPzEpvk1UMcnFzF5 | 王崇儒 | accepted |
| other | p_1rXUfnsmYtKV6HvQmcZEx1 | 王之屏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之槙（CBDB 333328）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333328&o=json)
