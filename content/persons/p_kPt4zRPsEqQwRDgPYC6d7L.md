---
schema: wang-person/v1
id: p_kPt4zRPsEqQwRDgPYC6d7L
status: active
merged_into: null
display_name: 王存義
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7ZR467Q59yjrX2y3YBq6A5
        subject_person_id: p_kPt4zRPsEqQwRDgPYC6d7L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PZn8Dym9Ny2LRG3zoPxr5p
          claim_id: c_7ZR467Q59yjrX2y3YBq6A5
          source_id: s_1dmebyhpX46pLH1CydpTFt
          stance: supports
          locator: CBDB:253214
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253214）
          source: &a1
            id: s_1dmebyhpX46pLH1CydpTFt
            source_type: api_record
            title: 中国历代人物传记资料库：王存義（CBDB 253214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253214&o=json
            external_identifier: CBDB:253214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.300Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hrB4V9Zm5PN7b6d3acssum
        subject_person_id: p_kPt4zRPsEqQwRDgPYC6d7L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存義，明人物。成化十四年進士，籍贯秦州衛。（中国历代人物传记资料库 CBDB 253214）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XcuMbvc6rZBQ5RBmxOeubE
          claim_id: c_hrB4V9Zm5PN7b6d3acssum
          source_id: s_1dmebyhpX46pLH1CydpTFt
          stance: supports
          locator: CBDB:253214
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_u8XdWcW8iFltVbvxR8UuV3
        subject_person_id: p_V8KeHN8gfC9iMhtNZgxJtQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kPt4zRPsEqQwRDgPYC6d7L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FoR0M0OfwvhGSsnYZhktPB
          claim_id: c_u8XdWcW8iFltVbvxR8UuV3
          source_id: s_4567qT2RUPw5NwvuamQb73
          stance: supports
          locator: CBDB：兄弟 王存禮（200053）之父／母 王裕
          quotation: null
          interpretation_note: 由兄弟关系推断：王存義 与 王存禮 为同胞（CBDB 记「弟」），王存禮 之父／母即 王存義 之父／母。
          source:
            id: s_4567qT2RUPw5NwvuamQb73
            source_type: api_record
            title: 中国历代人物传记资料库：王存義（CBDB 253214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253214&o=json
            external_identifier: CBDB:253214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V8KeHN8gfC9iMhtNZgxJtQ
        status: active
        display_name: 王裕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_jAI_cSZ0nykyFwXnu3IU5x
        subject_person_id: p_C2E2SSj6sXsm1th4M87rCJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kPt4zRPsEqQwRDgPYC6d7L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0oyNJsIDQnkjOXaKrHHSza
          claim_id: c_jAI_cSZ0nykyFwXnu3IU5x
          source_id: s_4567qT2RUPw5NwvuamQb73
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200053 王存禮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4567qT2RUPw5NwvuamQb73
            source_type: api_record
            title: 中国历代人物传记资料库：王存義（CBDB 253214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253214&o=json
            external_identifier: CBDB:253214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C2E2SSj6sXsm1th4M87rCJ
        status: active
        display_name: 王存禮
        merged_into_person_id: null
---

# 王存義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王存義 | accepted |
| bio.summary | 王存義，明人物。成化十四年進士，籍贯秦州衛。（中国历代人物传记资料库 CBDB 253214） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_V8KeHN8gfC9iMhtNZgxJtQ | 王裕 | accepted |
| other | p_C2E2SSj6sXsm1th4M87rCJ | 王存禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王存義（CBDB 253214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253214&o=json)
