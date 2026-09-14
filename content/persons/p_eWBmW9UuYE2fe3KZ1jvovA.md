---
schema: wang-person/v1
id: p_eWBmW9UuYE2fe3KZ1jvovA
status: active
merged_into: null
display_name: 王紌
cbdb_id: 288740
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JtpTcMVwzcgNAfY8CACmUy
        subject_person_id: p_eWBmW9UuYE2fe3KZ1jvovA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紌，明人物。嘉靖八年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 288740）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_EOV5iSDAtZfjnBidZ3V7Xm
          claim_id: c_JtpTcMVwzcgNAfY8CACmUy
          source_id: s_j3HpKyJWpw4R1rQM1N499a
          stance: supports
          locator: CBDB:288740
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_j3HpKyJWpw4R1rQM1N499a
            source_type: api_record
            title: 中国历代人物传记资料库：王紌（CBDB 288740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288740&o=json
            external_identifier: CBDB:288740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RwcQ13ao9mBY9MJyA4AXv5
        subject_person_id: p_eWBmW9UuYE2fe3KZ1jvovA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1gxviMo1KpVQSyn4angekN
          claim_id: c_RwcQ13ao9mBY9MJyA4AXv5
          source_id: s_j3HpKyJWpw4R1rQM1N499a
          stance: supports
          locator: CBDB:288740
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Csm0bKyuGn01Wkj-NZRKDi
        subject_person_id: p_KQX7wZ6kGeHGXVBXr7RepL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eWBmW9UuYE2fe3KZ1jvovA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j0lIyh8JBj0CekkC7Zz1xe
          claim_id: c_Csm0bKyuGn01Wkj-NZRKDi
          source_id: s_rG2DRVGY5y8xWx_kVCHUFj
          stance: supports
          locator: CBDB：兄弟 王紳（202472）之父／母 王國寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王紌 与 王紳 为同胞（CBDB 记「兄」），王紳 之父／母即 王紌 之父／母。
          source:
            id: s_rG2DRVGY5y8xWx_kVCHUFj
            source_type: api_record
            title: 中国历代人物传记资料库：王紌（CBDB 288740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288740&o=json
            external_identifier: CBDB:288740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KQX7wZ6kGeHGXVBXr7RepL
        status: active
        display_name: 王國寧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qTXtc5CV0z1gDn7RZlfmef
        subject_person_id: p_Hs5dTewocAZFYmsQxmyBFY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eWBmW9UuYE2fe3KZ1jvovA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6WlLs_E2dJSpVK4A-m11BG
          claim_id: c_qTXtc5CV0z1gDn7RZlfmef
          source_id: s_rG2DRVGY5y8xWx_kVCHUFj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202472 王紳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rG2DRVGY5y8xWx_kVCHUFj
            source_type: api_record
            title: 中国历代人物传记资料库：王紌（CBDB 288740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288740&o=json
            external_identifier: CBDB:288740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Hs5dTewocAZFYmsQxmyBFY
        status: active
        display_name: 王紳
        merged_into_person_id: null
---

# 王紌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王紌，明人物。嘉靖八年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 288740） | accepted |
| name.primary | 王紌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KQX7wZ6kGeHGXVBXr7RepL | 王國寧 | accepted |
| other | p_Hs5dTewocAZFYmsQxmyBFY | 王紳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紌（CBDB 288740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288740&o=json)
