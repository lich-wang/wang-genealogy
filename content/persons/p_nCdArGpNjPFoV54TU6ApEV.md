---
schema: wang-person/v1
id: p_nCdArGpNjPFoV54TU6ApEV
status: active
merged_into: null
display_name: 王熠
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YdtdqNsvN11Hhi8XfaMZDx
        subject_person_id: p_nCdArGpNjPFoV54TU6ApEV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y9PdaJZG4qLk3AADMv1aqg
          claim_id: c_YdtdqNsvN11Hhi8XfaMZDx
          source_id: s_GKW9Sp7YX8BDEHTwV22EZT
          stance: supports
          locator: CBDB:328404
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328404）
          source: &a1
            id: s_GKW9Sp7YX8BDEHTwV22EZT
            source_type: api_record
            title: 中国历代人物传记资料库：王熠（CBDB 328404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328404&o=json
            external_identifier: CBDB:328404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.300Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7csUsf7HVtYmDN6PFXFKSU
        subject_person_id: p_nCdArGpNjPFoV54TU6ApEV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熠，明人物。嘉靖四十一年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 328404）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vVyAPh1iIVbSDabrYaj7W6
          claim_id: c_7csUsf7HVtYmDN6PFXFKSU
          source_id: s_GKW9Sp7YX8BDEHTwV22EZT
          stance: supports
          locator: CBDB:328404
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lwcsMtrxZvZShoGu7yooJ2
        subject_person_id: p_H8E9DJ6cL51HbCtFQ3ZmfS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nCdArGpNjPFoV54TU6ApEV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZI6QGm9lzhyfJXguZN72Xg
          claim_id: c_lwcsMtrxZvZShoGu7yooJ2
          source_id: s_zceJawZFwLYUKKBBVtBOLZ
          stance: supports
          locator: CBDB：兄弟 王爕（205106）之父／母 王楩
          quotation: null
          interpretation_note: 由兄弟关系推断：王熠 与 王爕 为同胞（CBDB 记「弟」），王爕 之父／母即 王熠 之父／母。
          source:
            id: s_zceJawZFwLYUKKBBVtBOLZ
            source_type: api_record
            title: 中国历代人物传记资料库：王熠（CBDB 328404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328404&o=json
            external_identifier: CBDB:328404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H8E9DJ6cL51HbCtFQ3ZmfS
        status: active
        display_name: 王楩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ikljnC9Sp99O0nRcHYSQdo
        subject_person_id: p_2X56zUa2MYrGErZu5r54un
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nCdArGpNjPFoV54TU6ApEV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z3ZH5AzXtjAFebIWN-5sjt
          claim_id: c_ikljnC9Sp99O0nRcHYSQdo
          source_id: s_zceJawZFwLYUKKBBVtBOLZ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205106 王爕）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zceJawZFwLYUKKBBVtBOLZ
            source_type: api_record
            title: 中国历代人物传记资料库：王熠（CBDB 328404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328404&o=json
            external_identifier: CBDB:328404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2X56zUa2MYrGErZu5r54un
        status: active
        display_name: 王爕
        merged_into_person_id: null
---

# 王熠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王熠 | accepted |
| bio.summary | 王熠，明人物。嘉靖四十一年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 328404） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_H8E9DJ6cL51HbCtFQ3ZmfS | 王楩 | accepted |
| other | p_2X56zUa2MYrGErZu5r54un | 王爕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王熠（CBDB 328404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328404&o=json)
