---
schema: wang-person/v1
id: p_K8N3JYXyV4KQhFBG5Yeqz6
status: active
merged_into: null
display_name: 王推化
cbdb_id: 336306
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ftwuwBGF6KQXJbLE4a2Psb
        subject_person_id: p_K8N3JYXyV4KQhFBG5Yeqz6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王推化，明人物。隆慶二年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 336306）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_s5dJFzLiv8nnBAHRMWeMXp
          claim_id: c_ftwuwBGF6KQXJbLE4a2Psb
          source_id: s_iZQtVmadF4uKn4dq28LRN3
          stance: supports
          locator: CBDB:336306
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_iZQtVmadF4uKn4dq28LRN3
            source_type: api_record
            title: 中国历代人物传记资料库：王推化（CBDB 336306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336306&o=json
            external_identifier: CBDB:336306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uTqZTF3EavDRrg6TqFvqWJ
        subject_person_id: p_K8N3JYXyV4KQhFBG5Yeqz6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王推化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_a4JhbP9Bcqe4m9As23P67D
          claim_id: c_uTqZTF3EavDRrg6TqFvqWJ
          source_id: s_iZQtVmadF4uKn4dq28LRN3
          stance: supports
          locator: CBDB:336306
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__nUssxAk-JvuthWwTe34oH
        subject_person_id: p_3NLrzrSSHKzjmRv78pJAPK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K8N3JYXyV4KQhFBG5Yeqz6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_12Mxi4n1yUDmSMD_vBnIZR
          claim_id: c__nUssxAk-JvuthWwTe34oH
          source_id: s_lYSmb8PdXpTOf95CgFTBEH
          stance: supports
          locator: CBDB：兄弟 王宣化（205636）之父／母 王士逵
          quotation: null
          interpretation_note: 由兄弟关系推断：王推化 与 王宣化 为同胞（CBDB 记「弟」），王宣化 之父／母即 王推化 之父／母。
          source:
            id: s_lYSmb8PdXpTOf95CgFTBEH
            source_type: api_record
            title: 中国历代人物传记资料库：王推化（CBDB 336306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336306&o=json
            external_identifier: CBDB:336306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3NLrzrSSHKzjmRv78pJAPK
        status: active
        display_name: 王士逵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_3quC6gnJ3EBFClFcGEyodR
        subject_person_id: p_K8N3JYXyV4KQhFBG5Yeqz6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_viaM6m196hS8EVYS6L8gg8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DpE2VEkKmRTnIG8v0hosOR
          claim_id: c_3quC6gnJ3EBFClFcGEyodR
          source_id: s_lYSmb8PdXpTOf95CgFTBEH
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205636 王宣化）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lYSmb8PdXpTOf95CgFTBEH
            source_type: api_record
            title: 中国历代人物传记资料库：王推化（CBDB 336306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336306&o=json
            external_identifier: CBDB:336306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_viaM6m196hS8EVYS6L8gg8
        status: active
        display_name: 王宣化
        merged_into_person_id: null
---

# 王推化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王推化，明人物。隆慶二年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 336306） | accepted |
| name.primary | 王推化 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3NLrzrSSHKzjmRv78pJAPK | 王士逵 | accepted |
| other | p_viaM6m196hS8EVYS6L8gg8 | 王宣化 | accepted |

## 外部来源

- [中国历代人物传记资料库：王推化（CBDB 336306）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336306&o=json)
