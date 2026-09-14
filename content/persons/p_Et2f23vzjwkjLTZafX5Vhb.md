---
schema: wang-person/v1
id: p_Et2f23vzjwkjLTZafX5Vhb
status: active
merged_into: null
display_name: 王養民
cbdb_id: 336585
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7eBinF8nJttDLmUvUkxB89
        subject_person_id: p_Et2f23vzjwkjLTZafX5Vhb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王養民，明人物。隆慶二年進士，籍贯合肥。（中国历代人物传记资料库 CBDB 336585）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_UP0gOsymG3OU354Sz15yuM
          claim_id: c_7eBinF8nJttDLmUvUkxB89
          source_id: s_JKUoN8dwziL91L4oxSqoHf
          stance: supports
          locator: CBDB:336585
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JKUoN8dwziL91L4oxSqoHf
            source_type: api_record
            title: 中国历代人物传记资料库：王養民（CBDB 336585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336585&o=json
            external_identifier: CBDB:336585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_z5FDGsyQMWc6rSQ4NBuN7K
        subject_person_id: p_Et2f23vzjwkjLTZafX5Vhb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王養民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_K89TsG8Z2nQbn3C9spp2Wk
          claim_id: c_z5FDGsyQMWc6rSQ4NBuN7K
          source_id: s_JKUoN8dwziL91L4oxSqoHf
          stance: supports
          locator: CBDB:336585
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_F-57Lq-7Hf3r_T7h6LjPMl
        subject_person_id: p_rzdGCJdbAnivH2NuEMbZHX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Et2f23vzjwkjLTZafX5Vhb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0bWeBSbgrXQlB-Zi6j8I8Z
          claim_id: c_F-57Lq-7Hf3r_T7h6LjPMl
          source_id: s_1eedV7tV5O4qRGFkKsQvci
          stance: supports
          locator: CBDB：兄弟 王恩民（205656）之父／母 王世學
          quotation: null
          interpretation_note: 由兄弟关系推断：王養民 与 王恩民 为同胞（CBDB 记「弟」），王恩民 之父／母即 王養民 之父／母。
          source:
            id: s_1eedV7tV5O4qRGFkKsQvci
            source_type: api_record
            title: 中国历代人物传记资料库：王養民（CBDB 336585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336585&o=json
            external_identifier: CBDB:336585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rzdGCJdbAnivH2NuEMbZHX
        status: active
        display_name: 王世學
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_388RhocbfJBhA5xiuUSuxP
        subject_person_id: p_3iyxEBFwgRpJCsXBwB3FWC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Et2f23vzjwkjLTZafX5Vhb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MnhipR_kK_MXp7PUbq2Xfl
          claim_id: c_388RhocbfJBhA5xiuUSuxP
          source_id: s_1eedV7tV5O4qRGFkKsQvci
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205656 王恩民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1eedV7tV5O4qRGFkKsQvci
            source_type: api_record
            title: 中国历代人物传记资料库：王養民（CBDB 336585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336585&o=json
            external_identifier: CBDB:336585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3iyxEBFwgRpJCsXBwB3FWC
        status: active
        display_name: 王恩民
        merged_into_person_id: null
---

# 王養民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王養民，明人物。隆慶二年進士，籍贯合肥。（中国历代人物传记资料库 CBDB 336585） | accepted |
| name.primary | 王養民 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rzdGCJdbAnivH2NuEMbZHX | 王世學 | accepted |
| other | p_3iyxEBFwgRpJCsXBwB3FWC | 王恩民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王養民（CBDB 336585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336585&o=json)
