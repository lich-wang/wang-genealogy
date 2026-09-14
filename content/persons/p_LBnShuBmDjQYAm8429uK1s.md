---
schema: wang-person/v1
id: p_LBnShuBmDjQYAm8429uK1s
status: active
merged_into: null
display_name: 王慎
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dousQo5iEfab8U7AkE7UeB
        subject_person_id: p_LBnShuBmDjQYAm8429uK1s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2s6pFgRaiWFV5EwqQ6MJ1M
          claim_id: c_dousQo5iEfab8U7AkE7UeB
          source_id: s_KFved7r7zDRvKcGgPJcPLc
          stance: supports
          locator: CBDB:244965
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244965）
          source: &a1
            id: s_KFved7r7zDRvKcGgPJcPLc
            source_type: api_record
            title: 中国历代人物传记资料库：王慎（CBDB 244965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244965&o=json
            external_identifier: CBDB:244965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.046Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dvBNBz4mGtdnzWxtVe7wSA
        subject_person_id: p_LBnShuBmDjQYAm8429uK1s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎，明人物。成化五年進士，籍贯武城。（中国历代人物传记资料库 CBDB 244965）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KaaQmMJBWLKN_DfOKZ2lNA
          claim_id: c_dvBNBz4mGtdnzWxtVe7wSA
          source_id: s_KFved7r7zDRvKcGgPJcPLc
          stance: supports
          locator: CBDB:244965
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hjvYhc4x5hqML5VwZPTi6O
        subject_person_id: p_GcBvHSffABPszyHqYWBM3f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LBnShuBmDjQYAm8429uK1s
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lD3bUP6JrGU3PJ7U9sUzC2
          claim_id: c_hjvYhc4x5hqML5VwZPTi6O
          source_id: s_m9wHiwOEFsrUsLjlscen6-
          stance: supports
          locator: CBDB：兄弟 王問（199435）之父／母 王循
          quotation: null
          interpretation_note: 由兄弟关系推断：王慎 与 王問 为同胞（CBDB 记「兄」），王問 之父／母即 王慎 之父／母。
          source:
            id: s_m9wHiwOEFsrUsLjlscen6-
            source_type: api_record
            title: 中国历代人物传记资料库：王慎（CBDB 244965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244965&o=json
            external_identifier: CBDB:244965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GcBvHSffABPszyHqYWBM3f
        status: active
        display_name: 王循
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_w1iSi8IghZcVsJw6mbDvqp
        subject_person_id: p_LBnShuBmDjQYAm8429uK1s
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_V4FwK3zU4QEPhCKRyGhfXG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YCk-ratzYjmknbh-Ieb-TQ
          claim_id: c_w1iSi8IghZcVsJw6mbDvqp
          source_id: s_m9wHiwOEFsrUsLjlscen6-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199435 王問）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_m9wHiwOEFsrUsLjlscen6-
            source_type: api_record
            title: 中国历代人物传记资料库：王慎（CBDB 244965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244965&o=json
            external_identifier: CBDB:244965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V4FwK3zU4QEPhCKRyGhfXG
        status: active
        display_name: 王問
        merged_into_person_id: null
---

# 王慎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慎 | accepted |
| bio.summary | 王慎，明人物。成化五年進士，籍贯武城。（中国历代人物传记资料库 CBDB 244965） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GcBvHSffABPszyHqYWBM3f | 王循 | accepted |
| other | p_V4FwK3zU4QEPhCKRyGhfXG | 王問 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慎（CBDB 244965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244965&o=json)
