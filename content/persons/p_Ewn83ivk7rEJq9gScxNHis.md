---
schema: wang-person/v1
id: p_Ewn83ivk7rEJq9gScxNHis
status: active
merged_into: null
display_name: 王宇
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z3twuT73pBk2jibpGPEZ4q
        subject_person_id: p_Ewn83ivk7rEJq9gScxNHis
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KGqv17gH7dizPAEg8TAjTM
          claim_id: c_z3twuT73pBk2jibpGPEZ4q
          source_id: s_xuzVtfT36pv13ToywMQywR
          stance: supports
          locator: CBDB:270457
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270457）
          source: &a1
            id: s_xuzVtfT36pv13ToywMQywR
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 270457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270457&o=json
            external_identifier: CBDB:270457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.837Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5tF64W8v9Jcn99usGubNXQ
        subject_person_id: p_Ewn83ivk7rEJq9gScxNHis
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宇，明人物。弘治十五年進士，籍贯猗氏。（中国历代人物传记资料库 CBDB 270457）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t1Slm2JwfRkAkJ6vV_Nuj-
          claim_id: c_5tF64W8v9Jcn99usGubNXQ
          source_id: s_xuzVtfT36pv13ToywMQywR
          stance: supports
          locator: CBDB:270457
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Yly22f-M1z0plWCTdzU97d
        subject_person_id: p_QKGAAeSaSvqwLmATQQdkV2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ewn83ivk7rEJq9gScxNHis
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9u7dH_3EoF2R-bLrgRDLOq
          claim_id: c_Yly22f-M1z0plWCTdzU97d
          source_id: s_z4O1JTRu7JtIIr3nMKh0WC
          stance: supports
          locator: CBDB：兄弟 王宗（201312）之父／母 王臣
          quotation: null
          interpretation_note: 由兄弟关系推断：王宇 与 王宗 为同胞（CBDB 记「弟」），王宗 之父／母即 王宇 之父／母。
          source:
            id: s_z4O1JTRu7JtIIr3nMKh0WC
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 270457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270457&o=json
            external_identifier: CBDB:270457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QKGAAeSaSvqwLmATQQdkV2
        status: active
        display_name: 王臣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_--3r6kiyh5Pbqn-K3pBYTz
        subject_person_id: p_Ewn83ivk7rEJq9gScxNHis
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TTq2erMoECd9k33QFqPJKB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qX_d7lia2yawU_1hMclo2x
          claim_id: c_--3r6kiyh5Pbqn-K3pBYTz
          source_id: s_z4O1JTRu7JtIIr3nMKh0WC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201312 王宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_z4O1JTRu7JtIIr3nMKh0WC
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 270457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270457&o=json
            external_identifier: CBDB:270457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TTq2erMoECd9k33QFqPJKB
        status: active
        display_name: 王宗
        merged_into_person_id: null
---

# 王宇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宇 | accepted |
| bio.summary | 王宇，明人物。弘治十五年進士，籍贯猗氏。（中国历代人物传记资料库 CBDB 270457） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QKGAAeSaSvqwLmATQQdkV2 | 王臣 | accepted |
| other | p_TTq2erMoECd9k33QFqPJKB | 王宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宇（CBDB 270457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270457&o=json)
