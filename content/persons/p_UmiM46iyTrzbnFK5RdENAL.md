---
schema: wang-person/v1
id: p_UmiM46iyTrzbnFK5RdENAL
status: active
merged_into: null
display_name: 王能
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_krLuTtKKN4PW3q8EDkDABc
        subject_person_id: p_UmiM46iyTrzbnFK5RdENAL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王能
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nt2r6Wf4Luyhr45txG9fW2
          claim_id: c_krLuTtKKN4PW3q8EDkDABc
          source_id: s_W1PLgCZnn54C4ed3tob6zM
          stance: supports
          locator: CBDB:327943
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327943）
          source: &a1
            id: s_W1PLgCZnn54C4ed3tob6zM
            source_type: api_record
            title: 中国历代人物传记资料库：王能（CBDB 327943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327943&o=json
            external_identifier: CBDB:327943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.271Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X8PTUj5njZavS3NY4C3Dh5
        subject_person_id: p_UmiM46iyTrzbnFK5RdENAL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王能，明人物。嘉靖四十一年進士，曾任主簿。（中国历代人物传记资料库 CBDB 327943）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DZXENzL2IyYif_6ohwbuM0
          claim_id: c_X8PTUj5njZavS3NY4C3Dh5
          source_id: s_W1PLgCZnn54C4ed3tob6zM
          stance: supports
          locator: CBDB:327943
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_Ef9s1miXQLEf-PKYDiiINm
        subject_person_id: p_UmiM46iyTrzbnFK5RdENAL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LOcWJdNotoaKqPqBYn02-v
          claim_id: c_Ef9s1miXQLEf-PKYDiiINm
          source_id: s_NxyvnQDn1eZ9nvxr3JFUPK
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第七十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NxyvnQDn1eZ9nvxr3JFUPK
            source_type: api_record
            title: 中国历代人物传记资料库：王以纁（CBDB 205075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205075&o=json
            external_identifier: CBDB:205075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.850Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DYviEpoQ7QNEe7UQdPVSd4
        status: active
        display_name: 王以纁
        merged_into_person_id: null
  other: []
---

# 王能

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王能 | accepted |
| bio.summary | 王能，明人物。嘉靖四十一年進士，曾任主簿。（中国历代人物传记资料库 CBDB 327943） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DYviEpoQ7QNEe7UQdPVSd4 | 王以纁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王能（CBDB 327943）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327943&o=json)
- [中国历代人物传记资料库：王以纁（CBDB 205075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205075&o=json)
