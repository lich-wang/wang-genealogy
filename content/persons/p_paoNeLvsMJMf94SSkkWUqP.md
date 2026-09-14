---
schema: wang-person/v1
id: p_paoNeLvsMJMf94SSkkWUqP
status: active
merged_into: null
display_name: 王大熙
cbdb_id: 301955
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AmZtqARnprwTVY9VvF6ecs
        subject_person_id: p_paoNeLvsMJMf94SSkkWUqP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大熙，明人物。嘉靖十七年進士，籍贯安邱。（中国历代人物传记资料库 CBDB 301955）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_xRI_1IcGCilgDJlx5_INVY
          claim_id: c_AmZtqARnprwTVY9VvF6ecs
          source_id: s_UKi79aNw1M5nBpk1xXgbEE
          stance: supports
          locator: CBDB:301955
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_UKi79aNw1M5nBpk1xXgbEE
            source_type: api_record
            title: 中国历代人物传记资料库：王大熙（CBDB 301955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301955&o=json
            external_identifier: CBDB:301955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8kp6XVigysT6voAftvn3w4
        subject_person_id: p_paoNeLvsMJMf94SSkkWUqP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SMfhen2vXqtacn2ozt8B1x
          claim_id: c_8kp6XVigysT6voAftvn3w4
          source_id: s_UKi79aNw1M5nBpk1xXgbEE
          stance: supports
          locator: CBDB:301955
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QC0ZSjWDo0bi9ccmZQ4yjb
        subject_person_id: p_1qFNNFzs4996RToNKGEdK3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_paoNeLvsMJMf94SSkkWUqP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cPp68joPLYMfjQsqkLgJMw
          claim_id: c_QC0ZSjWDo0bi9ccmZQ4yjb
          source_id: s_fdxAwHGhU0vniB0uK1Cviw
          stance: supports
          locator: CBDB：兄弟 王大平（203248）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王大熙 与 王大平 为同胞（CBDB 记「兄」），王大平 之父／母即 王大熙 之父／母。
          source:
            id: s_fdxAwHGhU0vniB0uK1Cviw
            source_type: api_record
            title: 中国历代人物传记资料库：王大熙（CBDB 301955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301955&o=json
            external_identifier: CBDB:301955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1qFNNFzs4996RToNKGEdK3
        status: active
        display_name: 王玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ZoD_UYfCRuY7px8Civu9VE
        subject_person_id: p_h6Qqwu6rcGKuAFwWWFGZPB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_paoNeLvsMJMf94SSkkWUqP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-6e9NFv3XORxa45Bwb7cZ8
          claim_id: c_ZoD_UYfCRuY7px8Civu9VE
          source_id: s_fdxAwHGhU0vniB0uK1Cviw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203248 王大平）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fdxAwHGhU0vniB0uK1Cviw
            source_type: api_record
            title: 中国历代人物传记资料库：王大熙（CBDB 301955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301955&o=json
            external_identifier: CBDB:301955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h6Qqwu6rcGKuAFwWWFGZPB
        status: active
        display_name: 王大平
        merged_into_person_id: null
---

# 王大熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王大熙，明人物。嘉靖十七年進士，籍贯安邱。（中国历代人物传记资料库 CBDB 301955） | accepted |
| name.primary | 王大熙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1qFNNFzs4996RToNKGEdK3 | 王玉 | accepted |
| other | p_h6Qqwu6rcGKuAFwWWFGZPB | 王大平 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大熙（CBDB 301955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301955&o=json)
