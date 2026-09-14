---
schema: wang-person/v1
id: p_aoFJQBdMFvi8Y8zFmY4FTx
status: active
merged_into: null
display_name: 王敏
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_82rnSCJS4oihDjLUPfaCoy
        subject_person_id: p_aoFJQBdMFvi8Y8zFmY4FTx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J8zR2Zuwq1APP6tA7jxbY8
          claim_id: c_82rnSCJS4oihDjLUPfaCoy
          source_id: s_PvnrQ3HvBhbGUCdHxStbbv
          stance: supports
          locator: CBDB:262886
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262886）
          source: &a1
            id: s_PvnrQ3HvBhbGUCdHxStbbv
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 262886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262886&o=json
            external_identifier: CBDB:262886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.615Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_98JoNzH1HBL27fiGfqcdne
        subject_person_id: p_aoFJQBdMFvi8Y8zFmY4FTx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏，明人物。弘治三年進士，籍贯吳江。（中国历代人物传记资料库 CBDB 262886）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sc1HVkL5m_tj3r3zXVhidV
          claim_id: c_98JoNzH1HBL27fiGfqcdne
          source_id: s_PvnrQ3HvBhbGUCdHxStbbv
          stance: supports
          locator: CBDB:262886
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9hdQxV9cUPy0yDT76FFCSj
        subject_person_id: p_qH965HRtNLEtPyefHwgvpn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aoFJQBdMFvi8Y8zFmY4FTx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Eu4qg1M14MR2cXXJ_XrBMF
          claim_id: c_9hdQxV9cUPy0yDT76FFCSj
          source_id: s_VsYNxuYrzWzc0hMS9Pz-8F
          stance: supports
          locator: CBDB：兄弟 王哲（126636）之父／母 王宗吉
          quotation: null
          interpretation_note: 由兄弟关系推断：王敏 与 王哲 为同胞（CBDB 记「兄」），王哲 之父／母即 王敏 之父／母。
          source:
            id: s_VsYNxuYrzWzc0hMS9Pz-8F
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 262886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262886&o=json
            external_identifier: CBDB:262886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qH965HRtNLEtPyefHwgvpn
        status: active
        display_name: 王宗吉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_-oDmFz3Prh4ZxIjRBcfRY_
        subject_person_id: p_8Z1UQ2GEaLW3fJdsaEnJcd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aoFJQBdMFvi8Y8zFmY4FTx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aI3diVQyWN7JU1_u9QPpZU
          claim_id: c_-oDmFz3Prh4ZxIjRBcfRY_
          source_id: s_VsYNxuYrzWzc0hMS9Pz-8F
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126636 王哲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VsYNxuYrzWzc0hMS9Pz-8F
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 262886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262886&o=json
            external_identifier: CBDB:262886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8Z1UQ2GEaLW3fJdsaEnJcd
        status: active
        display_name: 王哲
        merged_into_person_id: null
---

# 王敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敏 | accepted |
| bio.summary | 王敏，明人物。弘治三年進士，籍贯吳江。（中国历代人物传记资料库 CBDB 262886） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qH965HRtNLEtPyefHwgvpn | 王宗吉 | accepted |
| other | p_8Z1UQ2GEaLW3fJdsaEnJcd | 王哲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敏（CBDB 262886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262886&o=json)
