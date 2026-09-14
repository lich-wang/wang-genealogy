---
schema: wang-person/v1
id: p_29EmADKKSo6ecWRXrZCGVy
status: active
merged_into: null
display_name: 王璣
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CjqFyTEH4zupAJW9evvaDb
        subject_person_id: p_29EmADKKSo6ecWRXrZCGVy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o6t1GXUKwM19MBWNABfvH8
          claim_id: c_CjqFyTEH4zupAJW9evvaDb
          source_id: s_7pZ7j9FH6pdQ7LWQYP7sNc
          stance: supports
          locator: CBDB:255536
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255536）
          source: &a1
            id: s_7pZ7j9FH6pdQ7LWQYP7sNc
            source_type: api_record
            title: 中国历代人物传记资料库：王璣（CBDB 255536）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255536&o=json
            external_identifier: CBDB:255536
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o7v781Bzit7Fv5J91G8cVF
        subject_person_id: p_29EmADKKSo6ecWRXrZCGVy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璣，明人物。景泰五年進士，籍贯閩縣。（中国历代人物传记资料库 CBDB 255536）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZsbjGFSsuv2nFvQ1o1m8wR
          claim_id: c_o7v781Bzit7Fv5J91G8cVF
          source_id: s_7pZ7j9FH6pdQ7LWQYP7sNc
          stance: supports
          locator: CBDB:255536
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_20CfuRTFrVYcEEXdkrJBTf
        subject_person_id: p_xVTypDWdUQ3wcoicLvKHN5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_29EmADKKSo6ecWRXrZCGVy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_11dFNHm9p3XPMk3Ovythcx
          claim_id: c_20CfuRTFrVYcEEXdkrJBTf
          source_id: s_iDuycNZhNTrazR866fjg7A
          stance: supports
          locator: CBDB：兄弟 王衡（126831）之父／母 王穆
          quotation: null
          interpretation_note: 由兄弟关系推断：王璣 与 王衡 为同胞（CBDB 记「兄」），王衡 之父／母即 王璣 之父／母。
          source:
            id: s_iDuycNZhNTrazR866fjg7A
            source_type: api_record
            title: 中国历代人物传记资料库：王璣（CBDB 255536）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255536&o=json
            external_identifier: CBDB:255536
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xVTypDWdUQ3wcoicLvKHN5
        status: active
        display_name: 王穆
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_dzcmjkRHEF3jTuqnOZyKiv
        subject_person_id: p_29EmADKKSo6ecWRXrZCGVy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_KL6pD2p9SR6r7j4F89boFc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b4adAr1fa7wBr1vLJM5bNL
          claim_id: c_dzcmjkRHEF3jTuqnOZyKiv
          source_id: s_iDuycNZhNTrazR866fjg7A
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126831 王衡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iDuycNZhNTrazR866fjg7A
            source_type: api_record
            title: 中国历代人物传记资料库：王璣（CBDB 255536）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255536&o=json
            external_identifier: CBDB:255536
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KL6pD2p9SR6r7j4F89boFc
        status: active
        display_name: 王衡
        merged_into_person_id: null
---

# 王璣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璣 | accepted |
| bio.summary | 王璣，明人物。景泰五年進士，籍贯閩縣。（中国历代人物传记资料库 CBDB 255536） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xVTypDWdUQ3wcoicLvKHN5 | 王穆 | accepted |
| other | p_KL6pD2p9SR6r7j4F89boFc | 王衡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璣（CBDB 255536）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255536&o=json)
