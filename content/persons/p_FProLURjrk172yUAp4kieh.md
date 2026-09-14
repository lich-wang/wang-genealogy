---
schema: wang-person/v1
id: p_FProLURjrk172yUAp4kieh
status: active
merged_into: null
display_name: 王以寧
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YySR6C8DRDWsbMU7YBV8ER
        subject_person_id: p_FProLURjrk172yUAp4kieh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_93t2JnEQaKPZEFSUVWaHJZ
          claim_id: c_YySR6C8DRDWsbMU7YBV8ER
          source_id: s_PvS6FVUZ4CktVzFCTYH3CV
          stance: supports
          locator: CBDB:331774
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331774）
          source: &a1
            id: s_PvS6FVUZ4CktVzFCTYH3CV
            source_type: api_record
            title: 中国历代人物传记资料库：王以寧（CBDB 331774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331774&o=json
            external_identifier: CBDB:331774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.372Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aDyrZTUo74MkAPeNpmGDdU
        subject_person_id: p_FProLURjrk172yUAp4kieh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以寧，明人物。嘉靖四十四年進士，籍贯達州。（中国历代人物传记资料库 CBDB 331774）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_N7aXmi2_o7EwhHDFtk1SvN
          claim_id: c_aDyrZTUo74MkAPeNpmGDdU
          source_id: s_PvS6FVUZ4CktVzFCTYH3CV
          stance: supports
          locator: CBDB:331774
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GRDf4C5eDY5_fbBozWTjbX
        subject_person_id: p_iHMh7eWrNMdmn3tpjzgVvy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FProLURjrk172yUAp4kieh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z5zrZ36GC54VLSsOjof4MS
          claim_id: c_GRDf4C5eDY5_fbBozWTjbX
          source_id: s_mMKobAdDZ9-jz8wReo81O3
          stance: supports
          locator: CBDB：兄弟 王以修（126492）之父／母 王言中
          quotation: null
          interpretation_note: 由兄弟关系推断：王以寧 与 王以修 为同胞（CBDB 记「兄」），王以修 之父／母即 王以寧 之父／母。
          source:
            id: s_mMKobAdDZ9-jz8wReo81O3
            source_type: api_record
            title: 中国历代人物传记资料库：王以寧（CBDB 331774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331774&o=json
            external_identifier: CBDB:331774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iHMh7eWrNMdmn3tpjzgVvy
        status: active
        display_name: 王言中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_488lrhjCu9bN-UVMsO1ffh
        subject_person_id: p_5joJqoMyociS4kycpuaY9i
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FProLURjrk172yUAp4kieh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DNzj_6O1kwutiZXKj4yCGA
          claim_id: c_488lrhjCu9bN-UVMsO1ffh
          source_id: s_mMKobAdDZ9-jz8wReo81O3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126492 王以修）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mMKobAdDZ9-jz8wReo81O3
            source_type: api_record
            title: 中国历代人物传记资料库：王以寧（CBDB 331774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331774&o=json
            external_identifier: CBDB:331774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5joJqoMyociS4kycpuaY9i
        status: active
        display_name: 王以修
        merged_into_person_id: null
---

# 王以寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以寧 | accepted |
| bio.summary | 王以寧，明人物。嘉靖四十四年進士，籍贯達州。（中国历代人物传记资料库 CBDB 331774） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iHMh7eWrNMdmn3tpjzgVvy | 王言中 | accepted |
| other | p_5joJqoMyociS4kycpuaY9i | 王以修 | accepted |

## 外部来源

- [中国历代人物传记资料库：王以寧（CBDB 331774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331774&o=json)
