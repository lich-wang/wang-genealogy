---
schema: wang-person/v1
id: p_SudZ5K4WPbKgZ1BfPgxDJa
status: active
merged_into: null
display_name: 王家翰
cbdb_id: 333601
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fx7GRZRQvKkhnQvakdGEEd
        subject_person_id: p_SudZ5K4WPbKgZ1BfPgxDJa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家翰，明人物。隆慶二年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 333601）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_tyVjUGqNi51oPUbidn6p9m
          claim_id: c_fx7GRZRQvKkhnQvakdGEEd
          source_id: s_qjnC8wM73BiEw4VgSH8Wwf
          stance: supports
          locator: CBDB:333601
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qjnC8wM73BiEw4VgSH8Wwf
            source_type: api_record
            title: 中国历代人物传记资料库：王家翰（CBDB 333601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333601&o=json
            external_identifier: CBDB:333601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DcGE8E1iUbvPMuBcfAiqgA
        subject_person_id: p_SudZ5K4WPbKgZ1BfPgxDJa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_C32LJhiYBa585Xw3WQgJAR
          claim_id: c_DcGE8E1iUbvPMuBcfAiqgA
          source_id: s_qjnC8wM73BiEw4VgSH8Wwf
          stance: supports
          locator: CBDB:333601
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0AAoEW9uE5uAOdMkWe2td0
        subject_person_id: p_wJnAf1dPfK6NuX3j1aUKFG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SudZ5K4WPbKgZ1BfPgxDJa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vbd3pwvpIEUVw8BAr0r9lE
          claim_id: c_0AAoEW9uE5uAOdMkWe2td0
          source_id: s_7d80iYM2GSDZCJ8dOKZxJU
          stance: supports
          locator: CBDB：兄弟 王家屛（126627）之父／母 王宪武
          quotation: null
          interpretation_note: 由兄弟关系推断：王家翰 与 王家屛 为同胞（CBDB 记「兄」），王家屛 之父／母即 王家翰 之父／母。
          source:
            id: s_7d80iYM2GSDZCJ8dOKZxJU
            source_type: api_record
            title: 中国历代人物传记资料库：王家翰（CBDB 333601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333601&o=json
            external_identifier: CBDB:333601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wJnAf1dPfK6NuX3j1aUKFG
        status: active
        display_name: 王宪武
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_k9H_VRllRRp4wFYZZUhv9I
        subject_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SudZ5K4WPbKgZ1BfPgxDJa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UOQYh8zQ4pieYeVdttRrKR
          claim_id: c_k9H_VRllRRp4wFYZZUhv9I
          source_id: s_7d80iYM2GSDZCJ8dOKZxJU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126627 王家屛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7d80iYM2GSDZCJ8dOKZxJU
            source_type: api_record
            title: 中国历代人物传记资料库：王家翰（CBDB 333601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333601&o=json
            external_identifier: CBDB:333601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_92Q8Er9mM6EGgtSMmLeCqJ
        status: active
        display_name: 王家屛
        merged_into_person_id: null
---

# 王家翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王家翰，明人物。隆慶二年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 333601） | accepted |
| name.primary | 王家翰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wJnAf1dPfK6NuX3j1aUKFG | 王宪武 | accepted |
| other | p_92Q8Er9mM6EGgtSMmLeCqJ | 王家屛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家翰（CBDB 333601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333601&o=json)
