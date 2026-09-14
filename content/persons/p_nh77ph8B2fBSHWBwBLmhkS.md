---
schema: wang-person/v1
id: p_nh77ph8B2fBSHWBwBLmhkS
status: active
merged_into: null
display_name: 王體益
cbdb_id: 334181
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BqG1ron2YUcvTWNpNPWaGD
        subject_person_id: p_nh77ph8B2fBSHWBwBLmhkS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王體益，明人物。隆慶二年進士，籍贯太平。（中国历代人物传记资料库 CBDB 334181）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_E0Hfk1z96L7-d46rgm0UQV
          claim_id: c_BqG1ron2YUcvTWNpNPWaGD
          source_id: s_oAEGZtqT4D5awjr2CzYNqG
          stance: supports
          locator: CBDB:334181
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_oAEGZtqT4D5awjr2CzYNqG
            source_type: api_record
            title: 中国历代人物传记资料库：王體益（CBDB 334181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334181&o=json
            external_identifier: CBDB:334181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Na9UjMjLfu6UEXRKk1GeN5
        subject_person_id: p_nh77ph8B2fBSHWBwBLmhkS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王體益
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bWRPy8s2mHU7dMgJmTH1fN
          claim_id: c_Na9UjMjLfu6UEXRKk1GeN5
          source_id: s_oAEGZtqT4D5awjr2CzYNqG
          stance: supports
          locator: CBDB:334181
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1o6F2H__ioR-JRWZCr-H_y
        subject_person_id: p_9KuNRr8o75Vr36yjwDeyAm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nh77ph8B2fBSHWBwBLmhkS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_40rGxp0PF4SKqmhfatpGhH
          claim_id: c_1o6F2H__ioR-JRWZCr-H_y
          source_id: s_gwSMXANPcbJi4gPngSorMZ
          stance: supports
          locator: CBDB：兄弟 王體復（205493）之父／母 王應時
          quotation: null
          interpretation_note: 由兄弟关系推断：王體益 与 王體復 为同胞（CBDB 记「兄」），王體復 之父／母即 王體益 之父／母。
          source:
            id: s_gwSMXANPcbJi4gPngSorMZ
            source_type: api_record
            title: 中国历代人物传记资料库：王體益（CBDB 334181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334181&o=json
            external_identifier: CBDB:334181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9KuNRr8o75Vr36yjwDeyAm
        status: active
        display_name: 王應時
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_LoAcqg8U7uFNNXmZxkC_RA
        subject_person_id: p_Que1Sc9ugp524zabUcC6Bk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nh77ph8B2fBSHWBwBLmhkS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rTNn-hwGJ9pNO5mRjSLvik
          claim_id: c_LoAcqg8U7uFNNXmZxkC_RA
          source_id: s_gwSMXANPcbJi4gPngSorMZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205493 王體復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gwSMXANPcbJi4gPngSorMZ
            source_type: api_record
            title: 中国历代人物传记资料库：王體益（CBDB 334181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334181&o=json
            external_identifier: CBDB:334181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Que1Sc9ugp524zabUcC6Bk
        status: active
        display_name: 王體復
        merged_into_person_id: null
---

# 王體益

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王體益，明人物。隆慶二年進士，籍贯太平。（中国历代人物传记资料库 CBDB 334181） | accepted |
| name.primary | 王體益 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9KuNRr8o75Vr36yjwDeyAm | 王應時 | accepted |
| other | p_Que1Sc9ugp524zabUcC6Bk | 王體復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王體益（CBDB 334181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334181&o=json)
