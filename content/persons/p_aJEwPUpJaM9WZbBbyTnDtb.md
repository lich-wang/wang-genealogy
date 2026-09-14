---
schema: wang-person/v1
id: p_aJEwPUpJaM9WZbBbyTnDtb
status: active
merged_into: null
display_name: 王演
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iKRNcbqBtGnMYn34ZXhFoB
        subject_person_id: p_aJEwPUpJaM9WZbBbyTnDtb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王演
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QZEzws9EuW2RyhZSqhwLsT
          claim_id: c_iKRNcbqBtGnMYn34ZXhFoB
          source_id: s_GKSk44qLRV3P2DBL7rZucm
          stance: supports
          locator: CBDB:269147
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（269147）
          source: &a1
            id: s_GKSk44qLRV3P2DBL7rZucm
            source_type: api_record
            title: 中国历代人物传记资料库：王演（CBDB 269147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269147&o=json
            external_identifier: CBDB:269147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.806Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yCAQhUKyd6eaLifhRUrm6G
        subject_person_id: p_aJEwPUpJaM9WZbBbyTnDtb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王演，明人物。弘治九年進士，籍贯象山。（中国历代人物传记资料库 CBDB 269147）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q-t-v7SuySfnXUW1rpZnyI
          claim_id: c_yCAQhUKyd6eaLifhRUrm6G
          source_id: s_GKSk44qLRV3P2DBL7rZucm
          stance: supports
          locator: CBDB:269147
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ndK0kORWfU9077v988G3jh
        subject_person_id: p_PbcMSPmGuF3fVvYFwz57Eb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aJEwPUpJaM9WZbBbyTnDtb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Z0abDFvF-qlduW0taNkCC
          claim_id: c_ndK0kORWfU9077v988G3jh
          source_id: s_UJVFaJ4QiNDYvLMalgqYWt
          stance: supports
          locator: CBDB：兄弟 王渙（67928）之父／母 王京
          quotation: null
          interpretation_note: 由兄弟关系推断：王演 与 王渙 为同胞（CBDB 记「弟」），王渙 之父／母即 王演 之父／母。
          source:
            id: s_UJVFaJ4QiNDYvLMalgqYWt
            source_type: api_record
            title: 中国历代人物传记资料库：王演（CBDB 269147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269147&o=json
            external_identifier: CBDB:269147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PbcMSPmGuF3fVvYFwz57Eb
        status: active
        display_name: 王京
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_v1yy6_htVsy6Fd0wEl6miD
        subject_person_id: p_aJEwPUpJaM9WZbBbyTnDtb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_w2z816UY6mM4xzeNHAgB83
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vSs2SZ2g18P60z_IiXxMiC
          claim_id: c_v1yy6_htVsy6Fd0wEl6miD
          source_id: s_UJVFaJ4QiNDYvLMalgqYWt
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67928 王渙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UJVFaJ4QiNDYvLMalgqYWt
            source_type: api_record
            title: 中国历代人物传记资料库：王演（CBDB 269147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269147&o=json
            external_identifier: CBDB:269147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w2z816UY6mM4xzeNHAgB83
        status: active
        display_name: 王渙
        merged_into_person_id: null
---

# 王演

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王演 | accepted |
| bio.summary | 王演，明人物。弘治九年進士，籍贯象山。（中国历代人物传记资料库 CBDB 269147） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PbcMSPmGuF3fVvYFwz57Eb | 王京 | accepted |
| other | p_w2z816UY6mM4xzeNHAgB83 | 王渙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王演（CBDB 269147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269147&o=json)
