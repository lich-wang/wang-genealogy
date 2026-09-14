---
schema: wang-person/v1
id: p_6f2awS8QXv4DJJP2NuuHNP
status: active
merged_into: null
display_name: 王汝詔
cbdb_id: 320261
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FH1wRCkcnNQjjBkPgnHC4B
        subject_person_id: p_6f2awS8QXv4DJJP2NuuHNP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝詔，明人物。嘉靖三十五年進士，籍贯代州。（中国历代人物传记资料库 CBDB 320261）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_tP-_2xsdruxnXBDDeLMa6f
          claim_id: c_FH1wRCkcnNQjjBkPgnHC4B
          source_id: s_WbS9J2nov6wUtFRuHs9CZL
          stance: supports
          locator: CBDB:320261
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_WbS9J2nov6wUtFRuHs9CZL
            source_type: api_record
            title: 中国历代人物传记资料库：王汝詔（CBDB 320261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320261&o=json
            external_identifier: CBDB:320261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ckYK9wrFjfn2HyJ8NMSKbB
        subject_person_id: p_6f2awS8QXv4DJJP2NuuHNP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WeiGudQphG8e3g175R1yFi
          claim_id: c_ckYK9wrFjfn2HyJ8NMSKbB
          source_id: s_WbS9J2nov6wUtFRuHs9CZL
          stance: supports
          locator: CBDB:320261
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1y7CpXp5MJHkR1o5t7246P
        subject_person_id: p_W3hKLsZCb7JWaB6eMRG8um
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6f2awS8QXv4DJJP2NuuHNP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-PNDwRS2DI5POmyjTSN_B1
          claim_id: c_1y7CpXp5MJHkR1o5t7246P
          source_id: s_H8jWfCCnfEe9nmiKkY_Kp4
          stance: supports
          locator: CBDB：兄弟 王三聘（204520）之父／母 王沄
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝詔 与 王三聘 为同胞（CBDB 记「弟」），王三聘 之父／母即 王汝詔 之父／母。
          source:
            id: s_H8jWfCCnfEe9nmiKkY_Kp4
            source_type: api_record
            title: 中国历代人物传记资料库：王汝詔（CBDB 320261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320261&o=json
            external_identifier: CBDB:320261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_W3hKLsZCb7JWaB6eMRG8um
        status: active
        display_name: 王沄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_NCL-p1Rj6034gc8_h8INx0
        subject_person_id: p_6f2awS8QXv4DJJP2NuuHNP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ACc1xBws7mA2Ao333iSn1t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zbcmcfKuKclzUIQdhEC_DG
          claim_id: c_NCL-p1Rj6034gc8_h8INx0
          source_id: s_H8jWfCCnfEe9nmiKkY_Kp4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204520 王三聘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_H8jWfCCnfEe9nmiKkY_Kp4
            source_type: api_record
            title: 中国历代人物传记资料库：王汝詔（CBDB 320261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320261&o=json
            external_identifier: CBDB:320261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ACc1xBws7mA2Ao333iSn1t
        status: active
        display_name: 王三聘
        merged_into_person_id: null
---

# 王汝詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝詔，明人物。嘉靖三十五年進士，籍贯代州。（中国历代人物传记资料库 CBDB 320261） | accepted |
| name.primary | 王汝詔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_W3hKLsZCb7JWaB6eMRG8um | 王沄 | accepted |
| other | p_ACc1xBws7mA2Ao333iSn1t | 王三聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝詔（CBDB 320261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320261&o=json)
