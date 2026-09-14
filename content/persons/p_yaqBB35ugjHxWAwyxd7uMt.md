---
schema: wang-person/v1
id: p_yaqBB35ugjHxWAwyxd7uMt
status: active
merged_into: null
display_name: 王世英
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LdYcJaaviRDXGTPaKXVAnz
        subject_person_id: p_yaqBB35ugjHxWAwyxd7uMt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dnEXtMhdgmEDK4Dtej7M2L
          claim_id: c_LdYcJaaviRDXGTPaKXVAnz
          source_id: s_nfxMQcNTbfq2yvZHp6j5kc
          stance: supports
          locator: CBDB:208606
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208606）
          source: &a1
            id: s_nfxMQcNTbfq2yvZHp6j5kc
            source_type: api_record
            title: 中国历代人物传记资料库：王世英（CBDB 208606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208606&o=json
            external_identifier: CBDB:208606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.951Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TctiCQCUoHZFBk3smjcPyp
        subject_person_id: p_yaqBB35ugjHxWAwyxd7uMt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世英，明人物。隆慶五年進士，籍贯宣城。（中国历代人物传记资料库 CBDB 208606）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hFRC8euGBilRGYSZXwk2mz
          claim_id: c_TctiCQCUoHZFBk3smjcPyp
          source_id: s_nfxMQcNTbfq2yvZHp6j5kc
          stance: supports
          locator: CBDB:208606
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Uh-pvpkEo4ediECIfHrgLe
        subject_person_id: p_6YHrJS4jFqeu69kXpdiobj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yaqBB35ugjHxWAwyxd7uMt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iUEiCbOYUT5zNGiXE5dS0G
          claim_id: c_Uh-pvpkEo4ediECIfHrgLe
          source_id: s__DD6yd8VkPtm2-kuN-0EGm
          stance: supports
          locator: CBDB：兄弟 王世能（205793）之父／母 王大祥
          quotation: null
          interpretation_note: 由兄弟关系推断：王世英 与 王世能 为同胞（CBDB 记「兄」），王世能 之父／母即 王世英 之父／母。
          source:
            id: s__DD6yd8VkPtm2-kuN-0EGm
            source_type: api_record
            title: 中国历代人物传记资料库：王世英（CBDB 208606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208606&o=json
            external_identifier: CBDB:208606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6YHrJS4jFqeu69kXpdiobj
        status: active
        display_name: 王大祥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_dbIh43zF64tDOuz9K6hWrI
        subject_person_id: p_CgzpCKBF2Cnch1g1qwE9Ao
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yaqBB35ugjHxWAwyxd7uMt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_odCvfoBUKdlkejHMEgYHIZ
          claim_id: c_dbIh43zF64tDOuz9K6hWrI
          source_id: s__DD6yd8VkPtm2-kuN-0EGm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205793 王世能）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__DD6yd8VkPtm2-kuN-0EGm
            source_type: api_record
            title: 中国历代人物传记资料库：王世英（CBDB 208606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208606&o=json
            external_identifier: CBDB:208606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CgzpCKBF2Cnch1g1qwE9Ao
        status: active
        display_name: 王世能
        merged_into_person_id: null
---

# 王世英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世英 | accepted |
| bio.summary | 王世英，明人物。隆慶五年進士，籍贯宣城。（中国历代人物传记资料库 CBDB 208606） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6YHrJS4jFqeu69kXpdiobj | 王大祥 | accepted |
| other | p_CgzpCKBF2Cnch1g1qwE9Ao | 王世能 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世英（CBDB 208606）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208606&o=json)
