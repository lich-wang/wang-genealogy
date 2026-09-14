---
schema: wang-person/v1
id: p_WHTWDjMywuaxpNQ8W566da
status: active
merged_into: null
display_name: 王汝浙
cbdb_id: 284227
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E7L4YmNuE3jv81iq6wMsdq
        subject_person_id: p_WHTWDjMywuaxpNQ8W566da
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝浙，明人物。正德十六年進士，籍贯德化。（中国历代人物传记资料库 CBDB 284227）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_IaNvK1vIiMOsoK718ALsg6
          claim_id: c_E7L4YmNuE3jv81iq6wMsdq
          source_id: s_E6gSeGKU5oeFAt5ELt6zqu
          stance: supports
          locator: CBDB:284227
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_E6gSeGKU5oeFAt5ELt6zqu
            source_type: api_record
            title: 中国历代人物传记资料库：王汝浙（CBDB 284227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284227&o=json
            external_identifier: CBDB:284227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VdvGoabzBTjAa4iBVTHJ8B
        subject_person_id: p_WHTWDjMywuaxpNQ8W566da
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝浙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DDej4KuhuVmHCFKSwwKpvb
          claim_id: c_VdvGoabzBTjAa4iBVTHJ8B
          source_id: s_E6gSeGKU5oeFAt5ELt6zqu
          stance: supports
          locator: CBDB:284227
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nye6mjmTQvDroiKVafoIw0
        subject_person_id: p_PNivfKUTmvFDeQrEL92ALD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WHTWDjMywuaxpNQ8W566da
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9Rh0SA-bPaP-KMj-Xh1xMy
          claim_id: c_nye6mjmTQvDroiKVafoIw0
          source_id: s_xrhfXyagBmzC-HTo4W1NnW
          stance: supports
          locator: CBDB：兄弟 王汝賓（202144）之父／母 王欽
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝浙 与 王汝賓 为同胞（CBDB 记「兄」），王汝賓 之父／母即 王汝浙 之父／母。
          source:
            id: s_xrhfXyagBmzC-HTo4W1NnW
            source_type: api_record
            title: 中国历代人物传记资料库：王汝浙（CBDB 284227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284227&o=json
            external_identifier: CBDB:284227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PNivfKUTmvFDeQrEL92ALD
        status: active
        display_name: 王欽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_pfx4f7uJk2GeMsxHiisvxS
        subject_person_id: p_WHTWDjMywuaxpNQ8W566da
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gqRqyCB9SbCQ4hrRNwLZxF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KeyHnAS4aHvVWnVx3lkNzC
          claim_id: c_pfx4f7uJk2GeMsxHiisvxS
          source_id: s_xrhfXyagBmzC-HTo4W1NnW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202144 王汝賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xrhfXyagBmzC-HTo4W1NnW
            source_type: api_record
            title: 中国历代人物传记资料库：王汝浙（CBDB 284227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284227&o=json
            external_identifier: CBDB:284227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gqRqyCB9SbCQ4hrRNwLZxF
        status: active
        display_name: 王汝賓
        merged_into_person_id: null
---

# 王汝浙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝浙，明人物。正德十六年進士，籍贯德化。（中国历代人物传记资料库 CBDB 284227） | accepted |
| name.primary | 王汝浙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PNivfKUTmvFDeQrEL92ALD | 王欽 | accepted |
| other | p_gqRqyCB9SbCQ4hrRNwLZxF | 王汝賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝浙（CBDB 284227）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284227&o=json)
