---
schema: wang-person/v1
id: p_YoVgtAqqhohknoyg7MCgA2
status: active
merged_into: null
display_name: 王三宥
cbdb_id: 287532
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ugmhUQqjBerHtX3LL5k7CR
        subject_person_id: p_YoVgtAqqhohknoyg7MCgA2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三宥，明人物。嘉靖八年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 287532）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_XH8AQbsuVLAdaUVMg42f1Z
          claim_id: c_ugmhUQqjBerHtX3LL5k7CR
          source_id: s_5MYrBRmEyJrs8QjPewE3vj
          stance: supports
          locator: CBDB:287532
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5MYrBRmEyJrs8QjPewE3vj
            source_type: api_record
            title: 中国历代人物传记资料库：王三宥（CBDB 287532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287532&o=json
            external_identifier: CBDB:287532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wdDa7246cH3feG77oap2Ae
        subject_person_id: p_YoVgtAqqhohknoyg7MCgA2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三宥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9HvfQ9yeEk4RxjDxpn1S5e
          claim_id: c_wdDa7246cH3feG77oap2Ae
          source_id: s_5MYrBRmEyJrs8QjPewE3vj
          stance: supports
          locator: CBDB:287532
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kZY90bG5uDqjZ8RLlPXuGt
        subject_person_id: p_VmxMBQPfyxUr32ATQz1Ta9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YoVgtAqqhohknoyg7MCgA2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x8xBleolWheQr8te5cC4ve
          claim_id: c_kZY90bG5uDqjZ8RLlPXuGt
          source_id: s_e9NVEQdV12nRlSgvqwyvoQ
          stance: supports
          locator: CBDB：兄弟 王三錫（202405）之父／母 王時暘
          quotation: null
          interpretation_note: 由兄弟关系推断：王三宥 与 王三錫 为同胞（CBDB 记「兄」），王三錫 之父／母即 王三宥 之父／母。
          source:
            id: s_e9NVEQdV12nRlSgvqwyvoQ
            source_type: api_record
            title: 中国历代人物传记资料库：王三宥（CBDB 287532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287532&o=json
            external_identifier: CBDB:287532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VmxMBQPfyxUr32ATQz1Ta9
        status: active
        display_name: 王時暘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_z5Qyfzr9fXBA4d3AXl_a22
        subject_person_id: p_Tx5e1nr85Ax8xBvbkFoMbF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YoVgtAqqhohknoyg7MCgA2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7iTo-cZhJsc9quw1NZnXg2
          claim_id: c_z5Qyfzr9fXBA4d3AXl_a22
          source_id: s_e9NVEQdV12nRlSgvqwyvoQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202405 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_e9NVEQdV12nRlSgvqwyvoQ
            source_type: api_record
            title: 中国历代人物传记资料库：王三宥（CBDB 287532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287532&o=json
            external_identifier: CBDB:287532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Tx5e1nr85Ax8xBvbkFoMbF
        status: active
        display_name: 王三錫
        merged_into_person_id: null
---

# 王三宥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王三宥，明人物。嘉靖八年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 287532） | accepted |
| name.primary | 王三宥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VmxMBQPfyxUr32ATQz1Ta9 | 王時暘 | accepted |
| other | p_Tx5e1nr85Ax8xBvbkFoMbF | 王三錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三宥（CBDB 287532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287532&o=json)
