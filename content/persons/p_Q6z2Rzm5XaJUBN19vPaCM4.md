---
schema: wang-person/v1
id: p_Q6z2Rzm5XaJUBN19vPaCM4
status: active
merged_into: null
display_name: 王納議
cbdb_id: 314800
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sC6DaR3pK3rMocmm8MQQjN
        subject_person_id: p_Q6z2Rzm5XaJUBN19vPaCM4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納議，明人物。嘉靖二十九年進士，籍贯融縣，曾任教諭。（中国历代人物传记资料库 CBDB 314800）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_fHiqM1hiBj20t7muLladRT
          claim_id: c_sC6DaR3pK3rMocmm8MQQjN
          source_id: s_6jW6TBiqMabpgEYeLam1Gp
          stance: supports
          locator: CBDB:314800
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6jW6TBiqMabpgEYeLam1Gp
            source_type: api_record
            title: 中国历代人物传记资料库：王納議（CBDB 314800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314800&o=json
            external_identifier: CBDB:314800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gv6CM9DWW1puBsA1P7u5tG
        subject_person_id: p_Q6z2Rzm5XaJUBN19vPaCM4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納議
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XrejBm4znzcaC8k5AmnSb5
          claim_id: c_Gv6CM9DWW1puBsA1P7u5tG
          source_id: s_6jW6TBiqMabpgEYeLam1Gp
          stance: supports
          locator: CBDB:314800
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_puXY2LxZIghW-_Y8CRId2G
        subject_person_id: p_CsFdH8PxFCRt2fMScjK1Yr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q6z2Rzm5XaJUBN19vPaCM4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q4q6EVLCJPyFz6lU9T_UmJ
          claim_id: c_puXY2LxZIghW-_Y8CRId2G
          source_id: s_vK3H6VgR_M2_-f02KzKOm8
          stance: supports
          locator: CBDB：兄弟 王納講（204128）之父／母 王儒
          quotation: null
          interpretation_note: 由兄弟关系推断：王納議 与 王納講 为同胞（CBDB 记「弟」），王納講 之父／母即 王納議 之父／母。
          source:
            id: s_vK3H6VgR_M2_-f02KzKOm8
            source_type: api_record
            title: 中国历代人物传记资料库：王納議（CBDB 314800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314800&o=json
            external_identifier: CBDB:314800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CsFdH8PxFCRt2fMScjK1Yr
        status: active
        display_name: 王儒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ECX2OmDeEF0R20bEf1fEtx
        subject_person_id: p_Q6z2Rzm5XaJUBN19vPaCM4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nuBK1wsMvCBFXuA1nKxaa5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f8IJdpBk5jveB7CumlvMRT
          claim_id: c_ECX2OmDeEF0R20bEf1fEtx
          source_id: s_vK3H6VgR_M2_-f02KzKOm8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204128 王納講）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vK3H6VgR_M2_-f02KzKOm8
            source_type: api_record
            title: 中国历代人物传记资料库：王納議（CBDB 314800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314800&o=json
            external_identifier: CBDB:314800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nuBK1wsMvCBFXuA1nKxaa5
        status: active
        display_name: 王納講
        merged_into_person_id: null
---

# 王納議

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王納議，明人物。嘉靖二十九年進士，籍贯融縣，曾任教諭。（中国历代人物传记资料库 CBDB 314800） | accepted |
| name.primary | 王納議 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CsFdH8PxFCRt2fMScjK1Yr | 王儒 | accepted |
| other | p_nuBK1wsMvCBFXuA1nKxaa5 | 王納講 | accepted |

## 外部来源

- [中国历代人物传记资料库：王納議（CBDB 314800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314800&o=json)
