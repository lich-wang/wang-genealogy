---
schema: wang-person/v1
id: p_rfDScpjpktkzFSX1X2TGw7
status: active
merged_into: null
display_name: 王脩
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UNKj6YBYsCNfa6dGZJxJaW
        subject_person_id: p_rfDScpjpktkzFSX1X2TGw7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王脩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MXYN2ucD12HE9B6DfcW9No
          claim_id: c_UNKj6YBYsCNfa6dGZJxJaW
          source_id: s_1LKLizw4C4NkxUDK79NzGJ
          stance: supports
          locator: CBDB:236838
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236838）
          source: &a1
            id: s_1LKLizw4C4NkxUDK79NzGJ
            source_type: api_record
            title: 中国历代人物传记资料库：王脩（CBDB 236838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236838&o=json
            external_identifier: CBDB:236838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.813Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3fBngX9vJNn6eN2UeRNjxB
        subject_person_id: p_rfDScpjpktkzFSX1X2TGw7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王脩，明人物。正統四年進士，籍贯銅梁。（中国历代人物传记资料库 CBDB 236838）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wbM55SLmHVvyL3xJbs5quK
          claim_id: c_3fBngX9vJNn6eN2UeRNjxB
          source_id: s_1LKLizw4C4NkxUDK79NzGJ
          stance: supports
          locator: CBDB:236838
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_khhjNVKqNlWl-2g4ntUZVs
        subject_person_id: p_4C5VKRVzuAvr67X2BV8fCM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rfDScpjpktkzFSX1X2TGw7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_of92M8S5TFYtHAPPE24L3m
          claim_id: c_khhjNVKqNlWl-2g4ntUZVs
          source_id: s_z-sSBPydWxELvDGPwMRRFI
          stance: supports
          locator: CBDB：兄弟 王儉（207835）之父／母 王仲亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王脩 与 王儉 为同胞（CBDB 记「兄」），王儉 之父／母即 王脩 之父／母。
          source:
            id: s_z-sSBPydWxELvDGPwMRRFI
            source_type: api_record
            title: 中国历代人物传记资料库：王脩（CBDB 236838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236838&o=json
            external_identifier: CBDB:236838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4C5VKRVzuAvr67X2BV8fCM
        status: active
        display_name: 王仲亨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_w737SNUmP-5AdosdPNX9yR
        subject_person_id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rfDScpjpktkzFSX1X2TGw7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Es9i77R79cIUNd07fc3T1g
          claim_id: c_w737SNUmP-5AdosdPNX9yR
          source_id: s_z-sSBPydWxELvDGPwMRRFI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207835 王儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_z-sSBPydWxELvDGPwMRRFI
            source_type: api_record
            title: 中国历代人物传记资料库：王脩（CBDB 236838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236838&o=json
            external_identifier: CBDB:236838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gVNWQ2fsh1sB6kRPqwK7Rn
        status: active
        display_name: 王儉
        merged_into_person_id: null
---

# 王脩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王脩 | accepted |
| bio.summary | 王脩，明人物。正統四年進士，籍贯銅梁。（中国历代人物传记资料库 CBDB 236838） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4C5VKRVzuAvr67X2BV8fCM | 王仲亨 | accepted |
| other | p_gVNWQ2fsh1sB6kRPqwK7Rn | 王儉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王脩（CBDB 236838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236838&o=json)
