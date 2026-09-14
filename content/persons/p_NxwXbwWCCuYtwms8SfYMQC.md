---
schema: wang-person/v1
id: p_NxwXbwWCCuYtwms8SfYMQC
status: active
merged_into: null
display_name: 王昞
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t1HMrww5LEWtCq83HD8vVh
        subject_person_id: p_NxwXbwWCCuYtwms8SfYMQC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pSTS9N7qt6aUe1my3S6nc1
          claim_id: c_t1HMrww5LEWtCq83HD8vVh
          source_id: s_w1CuX8cpFecCQFBYXQ51Sv
          stance: supports
          locator: CBDB:280918
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280918）
          source: &a1
            id: s_w1CuX8cpFecCQFBYXQ51Sv
            source_type: api_record
            title: 中国历代人物传记资料库：王昞（CBDB 280918）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280918&o=json
            external_identifier: CBDB:280918
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tkXsq7LA18hSBt2pQpbL5S
        subject_person_id: p_NxwXbwWCCuYtwms8SfYMQC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昞，明人物。正德十二年進士，籍贯句容。（中国历代人物传记资料库 CBDB 280918）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vqCW7RrRleU9FosW6SWxk_
          claim_id: c_tkXsq7LA18hSBt2pQpbL5S
          source_id: s_w1CuX8cpFecCQFBYXQ51Sv
          stance: supports
          locator: CBDB:280918
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ts6WhJn_SEhHUS93KvcQjX
        subject_person_id: p_qGQsVR5gzeQy8Y9aNmPG9C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NxwXbwWCCuYtwms8SfYMQC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bo9lKxQ8Ej5m6uoUIu_gtC
          claim_id: c_ts6WhJn_SEhHUS93KvcQjX
          source_id: s_fG5ewSTwZd6IYb129vSRip
          stance: supports
          locator: CBDB：兄弟 王暐（68343）之父／母 王槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王昞 与 王暐 为同胞（CBDB 记「弟」），王暐 之父／母即 王昞 之父／母。
          source:
            id: s_fG5ewSTwZd6IYb129vSRip
            source_type: api_record
            title: 中国历代人物传记资料库：王昞（CBDB 280918）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280918&o=json
            external_identifier: CBDB:280918
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qGQsVR5gzeQy8Y9aNmPG9C
        status: active
        display_name: 王槐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c__-kIlmRLos23zYBQEnID_P
        subject_person_id: p_NxwXbwWCCuYtwms8SfYMQC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qC31C42hD4UK4m3NDzMPZB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LpBpVLZQ_Hf68JXK71TT2_
          claim_id: c__-kIlmRLos23zYBQEnID_P
          source_id: s_fG5ewSTwZd6IYb129vSRip
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68343 王暐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fG5ewSTwZd6IYb129vSRip
            source_type: api_record
            title: 中国历代人物传记资料库：王昞（CBDB 280918）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280918&o=json
            external_identifier: CBDB:280918
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qC31C42hD4UK4m3NDzMPZB
        status: active
        display_name: 王暐
        merged_into_person_id: null
---

# 王昞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昞 | accepted |
| bio.summary | 王昞，明人物。正德十二年進士，籍贯句容。（中国历代人物传记资料库 CBDB 280918） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qGQsVR5gzeQy8Y9aNmPG9C | 王槐 | accepted |
| other | p_qC31C42hD4UK4m3NDzMPZB | 王暐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昞（CBDB 280918）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280918&o=json)
