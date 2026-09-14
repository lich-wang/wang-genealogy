---
schema: wang-person/v1
id: p_2i6oN2NGkBUzWQ8mMJErSV
status: active
merged_into: null
display_name: 王業
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EzkfCVCcD5Qxk2dEwaSFKa
        subject_person_id: p_2i6oN2NGkBUzWQ8mMJErSV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JjQHEg8HcZcBoxP7BRpJMJ
          claim_id: c_EzkfCVCcD5Qxk2dEwaSFKa
          source_id: s_ksuazr12Th5pdvDVfHHPhg
          stance: supports
          locator: CBDB:287777
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287777）
          source: &a1
            id: s_ksuazr12Th5pdvDVfHHPhg
            source_type: api_record
            title: 中国历代人物传记资料库：王業（CBDB 287777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287777&o=json
            external_identifier: CBDB:287777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.270Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iA6JkAVqLKR78So2XG8kmc
        subject_person_id: p_2i6oN2NGkBUzWQ8mMJErSV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業，明人物。嘉靖八年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 287777）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pzT1mPokOzwUOf3EGNW9Vg
          claim_id: c_iA6JkAVqLKR78So2XG8kmc
          source_id: s_ksuazr12Th5pdvDVfHHPhg
          stance: supports
          locator: CBDB:287777
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_q-CRtBJT6SBH36TcZUiUog
        subject_person_id: p_cTNHybKxFsGeSXUqJF9nK2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2i6oN2NGkBUzWQ8mMJErSV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nudc0w46WtfQWTkOPkGUJS
          claim_id: c_q-CRtBJT6SBH36TcZUiUog
          source_id: s_uChsy7DQY-IrVW3vZzN6tV
          stance: supports
          locator: CBDB：兄弟 王表（126567）之父／母 王冕
          quotation: null
          interpretation_note: 由兄弟关系推断：王業 与 王表 为同胞（CBDB 记「兄」），王表 之父／母即 王業 之父／母。
          source:
            id: s_uChsy7DQY-IrVW3vZzN6tV
            source_type: api_record
            title: 中国历代人物传记资料库：王業（CBDB 287777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287777&o=json
            external_identifier: CBDB:287777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cTNHybKxFsGeSXUqJF9nK2
        status: active
        display_name: 王冕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_a1Y5GaPJOue7r-xMIc19Qa
        subject_person_id: p_2i6oN2NGkBUzWQ8mMJErSV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bzVqsVzDtPALBqgyiMTGcs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_634iwGh5UsCSZtTLVmYBrU
          claim_id: c_a1Y5GaPJOue7r-xMIc19Qa
          source_id: s_uChsy7DQY-IrVW3vZzN6tV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126567 王表）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uChsy7DQY-IrVW3vZzN6tV
            source_type: api_record
            title: 中国历代人物传记资料库：王業（CBDB 287777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287777&o=json
            external_identifier: CBDB:287777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bzVqsVzDtPALBqgyiMTGcs
        status: active
        display_name: 王表
        merged_into_person_id: null
---

# 王業

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王業 | accepted |
| bio.summary | 王業，明人物。嘉靖八年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 287777） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cTNHybKxFsGeSXUqJF9nK2 | 王冕 | accepted |
| other | p_bzVqsVzDtPALBqgyiMTGcs | 王表 | accepted |

## 外部来源

- [中国历代人物传记资料库：王業（CBDB 287777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287777&o=json)
