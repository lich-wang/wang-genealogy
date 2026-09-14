---
schema: wang-person/v1
id: p_29D3zZKvWQiHCfh1mCPcjC
status: active
merged_into: null
display_name: 王适
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DF7R7tCJBgcRZ1CHsRioBa
        subject_person_id: p_29D3zZKvWQiHCfh1mCPcjC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王适
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HKuVdy5j5SFcCWK8K9nFxS
          claim_id: c_DF7R7tCJBgcRZ1CHsRioBa
          source_id: s_vMQMZeP1Yi1JJ1gchSSAfj
          stance: supports
          locator: CBDB:276425
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276425）
          source: &a1
            id: s_vMQMZeP1Yi1JJ1gchSSAfj
            source_type: api_record
            title: 中国历代人物传记资料库：王适（CBDB 276425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276425&o=json
            external_identifier: CBDB:276425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TreeX6DL2NPJASAN3xa5Ps
        subject_person_id: p_29D3zZKvWQiHCfh1mCPcjC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王适，明人物。正德六年進士，籍贯武城。（中国历代人物传记资料库 CBDB 276425）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kYjbsljFuB6D4p_B_dXDRr
          claim_id: c_TreeX6DL2NPJASAN3xa5Ps
          source_id: s_vMQMZeP1Yi1JJ1gchSSAfj
          stance: supports
          locator: CBDB:276425
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YvCqCMdbjqyIr83mxXTheX
        subject_person_id: p_BGL1HFsgeWYQ3VFWBGSemb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_29D3zZKvWQiHCfh1mCPcjC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9lffW8KOV8wNz9V3qZsRsW
          claim_id: c_YvCqCMdbjqyIr83mxXTheX
          source_id: s_PjmKovt-VMpFCYLQbpPY2q
          stance: supports
          locator: CBDB：兄弟 王道（126743）之父／母 王琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王适 与 王道 为同胞（CBDB 记「兄」），王道 之父／母即 王适 之父／母。
          source:
            id: s_PjmKovt-VMpFCYLQbpPY2q
            source_type: api_record
            title: 中国历代人物传记资料库：王适（CBDB 276425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276425&o=json
            external_identifier: CBDB:276425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BGL1HFsgeWYQ3VFWBGSemb
        status: active
        display_name: 王琮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_zPLK_-Roy4yMrI-hz-pmEo
        subject_person_id: p_29D3zZKvWQiHCfh1mCPcjC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eQSeau4TnN2P1YHAKu1a3t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xS9TODSWCqVCmcDNWNQ1SV
          claim_id: c_zPLK_-Roy4yMrI-hz-pmEo
          source_id: s_PjmKovt-VMpFCYLQbpPY2q
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126743 王道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PjmKovt-VMpFCYLQbpPY2q
            source_type: api_record
            title: 中国历代人物传记资料库：王适（CBDB 276425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276425&o=json
            external_identifier: CBDB:276425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eQSeau4TnN2P1YHAKu1a3t
        status: active
        display_name: 王道
        merged_into_person_id: null
---

# 王适

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王适 | accepted |
| bio.summary | 王适，明人物。正德六年進士，籍贯武城。（中国历代人物传记资料库 CBDB 276425） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BGL1HFsgeWYQ3VFWBGSemb | 王琮 | accepted |
| other | p_eQSeau4TnN2P1YHAKu1a3t | 王道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王适（CBDB 276425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276425&o=json)
