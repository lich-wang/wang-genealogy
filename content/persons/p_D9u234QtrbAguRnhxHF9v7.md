---
schema: wang-person/v1
id: p_D9u234QtrbAguRnhxHF9v7
status: active
merged_into: null
display_name: 王錡
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Lp9DBVytJX62xz2MRqJvbm
        subject_person_id: p_D9u234QtrbAguRnhxHF9v7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KJVUiY7Sk4yMHx29JjXi3A
          claim_id: c_Lp9DBVytJX62xz2MRqJvbm
          source_id: s_BKChrG8578iPMsuc3qFqt2
          stance: supports
          locator: CBDB:271841
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271841）
          source: &a1
            id: s_BKChrG8578iPMsuc3qFqt2
            source_type: api_record
            title: 中国历代人物传记资料库：王錡（CBDB 271841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271841&o=json
            external_identifier: CBDB:271841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.882Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hak1AKhPE4Z5DzGhUm1vL6
        subject_person_id: p_D9u234QtrbAguRnhxHF9v7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錡，明人物。弘治十五年進士，籍贯定遼左衛，曾任義官。（中国历代人物传记资料库 CBDB 271841）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CFwDUitXE8EAKurAM34-Ce
          claim_id: c_Hak1AKhPE4Z5DzGhUm1vL6
          source_id: s_BKChrG8578iPMsuc3qFqt2
          stance: supports
          locator: CBDB:271841
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5FixF-vUIQ3Q5OrtGWKh6x
        subject_person_id: p_qffH2F3mHv5bCaTkpqius6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D9u234QtrbAguRnhxHF9v7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2N4CKLbp9RT8nHuOZUBE4p
          claim_id: c_5FixF-vUIQ3Q5OrtGWKh6x
          source_id: s_YIKQjTPa56M08pcWfIa22v
          stance: supports
          locator: CBDB：兄弟 王鉉（201409）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王錡 与 王鉉 为同胞（CBDB 记「弟」），王鉉 之父／母即 王錡 之父／母。
          source:
            id: s_YIKQjTPa56M08pcWfIa22v
            source_type: api_record
            title: 中国历代人物传记资料库：王錡（CBDB 271841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271841&o=json
            external_identifier: CBDB:271841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qffH2F3mHv5bCaTkpqius6
        status: active
        display_name: 王寧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_pZvu1aEJ6udyWdjR3BW6PZ
        subject_person_id: p_D9u234QtrbAguRnhxHF9v7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DF9QV6BkQyQ4o3h3Yhn8e4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SgOdfJe9cvjX7MVqOCbx2a
          claim_id: c_pZvu1aEJ6udyWdjR3BW6PZ
          source_id: s_YIKQjTPa56M08pcWfIa22v
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201409 王鉉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YIKQjTPa56M08pcWfIa22v
            source_type: api_record
            title: 中国历代人物传记资料库：王錡（CBDB 271841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271841&o=json
            external_identifier: CBDB:271841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DF9QV6BkQyQ4o3h3Yhn8e4
        status: active
        display_name: 王鉉
        merged_into_person_id: null
---

# 王錡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錡 | accepted |
| bio.summary | 王錡，明人物。弘治十五年進士，籍贯定遼左衛，曾任義官。（中国历代人物传记资料库 CBDB 271841） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qffH2F3mHv5bCaTkpqius6 | 王寧 | accepted |
| other | p_DF9QV6BkQyQ4o3h3Yhn8e4 | 王鉉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王錡（CBDB 271841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271841&o=json)
