---
schema: wang-person/v1
id: p_4zfcYJd5FkwiNeFa24NQmw
status: active
merged_into: null
display_name: 王曆新
cbdb_id: 234434
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CJgPCz5XLiytXwgac3SJUd
        subject_person_id: p_4zfcYJd5FkwiNeFa24NQmw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曆新，明人物。籍贯汶上，入仕庠生。（中国历代人物传记资料库 CBDB 234434）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_aF-G7LGC0d313BtSDT9Tc8
          claim_id: c_CJgPCz5XLiytXwgac3SJUd
          source_id: s_B23Ug1uAD7CN8roBYPxvNk
          stance: supports
          locator: CBDB:234434
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_B23Ug1uAD7CN8roBYPxvNk
            source_type: api_record
            title: 中国历代人物传记资料库：王曆新（CBDB 234434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234434&o=json
            external_identifier: CBDB:234434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gfCJPrtZfNX1jS3rJtfkTj
        subject_person_id: p_4zfcYJd5FkwiNeFa24NQmw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曆新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VK91VuFuiT3EC3xt5CpfjY
          claim_id: c_gfCJPrtZfNX1jS3rJtfkTj
          source_id: s_B23Ug1uAD7CN8roBYPxvNk
          stance: supports
          locator: CBDB:234434
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_x5655sUMgmGCW2x0G5kSQS
        subject_person_id: p_RBDo1mCVNx525KP3Mg5Mqx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4zfcYJd5FkwiNeFa24NQmw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z4vd_qBXQCBHcApTakN4pI
          claim_id: c_x5655sUMgmGCW2x0G5kSQS
          source_id: s_hyt7Xk6FvY58r8UXYI08zC
          stance: supports
          locator: CBDB：兄弟 王命新（207714）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王曆新 与 王命新 为同胞（CBDB 记「兄」），王命新 之父／母即 王曆新 之父／母。
          source:
            id: s_hyt7Xk6FvY58r8UXYI08zC
            source_type: api_record
            title: 中国历代人物传记资料库：王曆新（CBDB 234434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234434&o=json
            external_identifier: CBDB:234434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RBDo1mCVNx525KP3Mg5Mqx
        status: active
        display_name: 王鉞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_utSQjhxuWpzefeL6t-sL6B
        subject_person_id: p_4zfcYJd5FkwiNeFa24NQmw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_KesiNQLM6qJRi25qiHTy12
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CcMDfLS7XkPfLxdywjH2qW
          claim_id: c_utSQjhxuWpzefeL6t-sL6B
          source_id: s_hyt7Xk6FvY58r8UXYI08zC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207714 王命新）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hyt7Xk6FvY58r8UXYI08zC
            source_type: api_record
            title: 中国历代人物传记资料库：王曆新（CBDB 234434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234434&o=json
            external_identifier: CBDB:234434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KesiNQLM6qJRi25qiHTy12
        status: active
        display_name: 王命新
        merged_into_person_id: null
---

# 王曆新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王曆新，明人物。籍贯汶上，入仕庠生。（中国历代人物传记资料库 CBDB 234434） | accepted |
| name.primary | 王曆新 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RBDo1mCVNx525KP3Mg5Mqx | 王鉞 | accepted |
| other | p_KesiNQLM6qJRi25qiHTy12 | 王命新 | accepted |

## 外部来源

- [中国历代人物传记资料库：王曆新（CBDB 234434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234434&o=json)
