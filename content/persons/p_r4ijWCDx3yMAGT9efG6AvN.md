---
schema: wang-person/v1
id: p_r4ijWCDx3yMAGT9efG6AvN
status: active
merged_into: null
display_name: 王世延
cbdb_id: 243244
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q8y8NuYV6MTb22Pgizrwsv
        subject_person_id: p_r4ijWCDx3yMAGT9efG6AvN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世延，明人物。成化五年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 243244）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_eoA6xoB6KT4fdq4MEYMYTt
          claim_id: c_Q8y8NuYV6MTb22Pgizrwsv
          source_id: s_dywaH5SGbhWJhyUH23Zb8Z
          stance: supports
          locator: CBDB:243244
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_dywaH5SGbhWJhyUH23Zb8Z
            source_type: api_record
            title: 中国历代人物传记资料库：王世延（CBDB 243244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243244&o=json
            external_identifier: CBDB:243244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EA6r9GuEL7oq4LLvcrjfCA
        subject_person_id: p_r4ijWCDx3yMAGT9efG6AvN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世延
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6Z9i7qB2H9LUQQAskvjv6i
          claim_id: c_EA6r9GuEL7oq4LLvcrjfCA
          source_id: s_dywaH5SGbhWJhyUH23Zb8Z
          stance: supports
          locator: CBDB:243244
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7FSNEsiZ5MsGPLxal5-2W_
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r4ijWCDx3yMAGT9efG6AvN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_clUHAVuIIgU2ThdG_7rW9n
          claim_id: c_7FSNEsiZ5MsGPLxal5-2W_
          source_id: s_7OZSjczXGmGlvF_qVo2vl-
          stance: supports
          locator: CBDB：兄弟 王臣（199309）之父／母 王槩
          quotation: null
          interpretation_note: 由兄弟关系推断：王世延 与 王臣 为同胞（CBDB 记「兄」），王臣 之父／母即 王世延 之父／母。
          source:
            id: s_7OZSjczXGmGlvF_qVo2vl-
            source_type: api_record
            title: 中国历代人物传记资料库：王世延（CBDB 243244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243244&o=json
            external_identifier: CBDB:243244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2N77V679N67chKYe7DivHB
        status: active
        display_name: 王槩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0mnkmPEg2jx4LDq7tMaCE7
        subject_person_id: p_eeT9SQ93RGpf2B6Bihu6TP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_r4ijWCDx3yMAGT9efG6AvN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yzSkexHBgf3aMJR4ekPnao
          claim_id: c_0mnkmPEg2jx4LDq7tMaCE7
          source_id: s_7OZSjczXGmGlvF_qVo2vl-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199309 王臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7OZSjczXGmGlvF_qVo2vl-
            source_type: api_record
            title: 中国历代人物传记资料库：王世延（CBDB 243244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243244&o=json
            external_identifier: CBDB:243244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eeT9SQ93RGpf2B6Bihu6TP
        status: active
        display_name: 王臣
        merged_into_person_id: null
---

# 王世延

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世延，明人物。成化五年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 243244） | accepted |
| name.primary | 王世延 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2N77V679N67chKYe7DivHB | 王槩 | accepted |
| other | p_eeT9SQ93RGpf2B6Bihu6TP | 王臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世延（CBDB 243244）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243244&o=json)
