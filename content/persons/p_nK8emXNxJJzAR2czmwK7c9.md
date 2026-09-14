---
schema: wang-person/v1
id: p_nK8emXNxJJzAR2czmwK7c9
status: active
merged_into: null
display_name: 王三策
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zRbEWX8V7BQspaoWLTKhLz
        subject_person_id: p_nK8emXNxJJzAR2czmwK7c9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三策
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4KBJiS1uPKPKfmjRpgHKra
          claim_id: c_zRbEWX8V7BQspaoWLTKhLz
          source_id: s_yGmokb7efNx3gFNcFUJtPR
          stance: supports
          locator: CBDB:327864
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327864）
          source: &a1
            id: s_yGmokb7efNx3gFNcFUJtPR
            source_type: api_record
            title: 中国历代人物传记资料库：王三策（CBDB 327864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327864&o=json
            external_identifier: CBDB:327864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.267Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LSxz4ziBRqWJn2JXP3uEoF
        subject_person_id: p_nK8emXNxJJzAR2czmwK7c9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三策，明人物。嘉靖四十一年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 327864）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RgBCGER-pZj0t_zR9B8RwE
          claim_id: c_LSxz4ziBRqWJn2JXP3uEoF
          source_id: s_yGmokb7efNx3gFNcFUJtPR
          stance: supports
          locator: CBDB:327864
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Occ1veNojpWNilzobQG5Ml
        subject_person_id: p_qo5VK1CeeyLVbmsSuofcsc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nK8emXNxJJzAR2czmwK7c9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1TodxAUKsJgIoR0GXeekBn
          claim_id: c_Occ1veNojpWNilzobQG5Ml
          source_id: s_dkFenWhsFyYNaIzDwox8vM
          stance: supports
          locator: CBDB：兄弟 王嘉言（126780）之父／母 王魯
          quotation: null
          interpretation_note: 由兄弟关系推断：王三策 与 王嘉言 为同胞（CBDB 记「兄」），王嘉言 之父／母即 王三策 之父／母。
          source:
            id: s_dkFenWhsFyYNaIzDwox8vM
            source_type: api_record
            title: 中国历代人物传记资料库：王三策（CBDB 327864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327864&o=json
            external_identifier: CBDB:327864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qo5VK1CeeyLVbmsSuofcsc
        status: active
        display_name: 王魯
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Z5skuLnf0pvasrXAjRUMMp
        subject_person_id: p_nK8emXNxJJzAR2czmwK7c9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rnGMv5wiQ8owdX8n1Qtwbm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4b6vbbBCV1fTVBPCNVezod
          claim_id: c_Z5skuLnf0pvasrXAjRUMMp
          source_id: s_dkFenWhsFyYNaIzDwox8vM
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126780 王嘉言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dkFenWhsFyYNaIzDwox8vM
            source_type: api_record
            title: 中国历代人物传记资料库：王三策（CBDB 327864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327864&o=json
            external_identifier: CBDB:327864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rnGMv5wiQ8owdX8n1Qtwbm
        status: active
        display_name: 王嘉言
        merged_into_person_id: null
---

# 王三策

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三策 | accepted |
| bio.summary | 王三策，明人物。嘉靖四十一年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 327864） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qo5VK1CeeyLVbmsSuofcsc | 王魯 | accepted |
| other | p_rnGMv5wiQ8owdX8n1Qtwbm | 王嘉言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三策（CBDB 327864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327864&o=json)
