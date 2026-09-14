---
schema: wang-person/v1
id: p_BSxSS54pFn3GDXcZ2KRg4W
status: active
merged_into: null
display_name: 王臺
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3YF5pkB4EgBg26xV4CwA5z
        subject_person_id: p_BSxSS54pFn3GDXcZ2KRg4W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MKG7r6uwC1YN282tbFdFqf
          claim_id: c_3YF5pkB4EgBg26xV4CwA5z
          source_id: s_WJaSewKZAmwqF2xCKG8xuC
          stance: supports
          locator: CBDB:273957
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273957）
          source: &a1
            id: s_WJaSewKZAmwqF2xCKG8xuC
            source_type: api_record
            title: 中国历代人物传记资料库：王臺（CBDB 273957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273957&o=json
            external_identifier: CBDB:273957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fzYP6pyzJJ5SCiUQKQhp3Y
        subject_person_id: p_BSxSS54pFn3GDXcZ2KRg4W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臺，明人物。弘治十八年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 273957）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q5PmKEyM_JCEhfVkUioLgg
          claim_id: c_fzYP6pyzJJ5SCiUQKQhp3Y
          source_id: s_WJaSewKZAmwqF2xCKG8xuC
          stance: supports
          locator: CBDB:273957
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UybgQ7WLq0XXcM4JuW3Lmu
        subject_person_id: p_w5pNEVYCVJAEuFuR4sLpcJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BSxSS54pFn3GDXcZ2KRg4W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wApnfdCVkXlnteQMWmFOLc
          claim_id: c_UybgQ7WLq0XXcM4JuW3Lmu
          source_id: s_g1L9QJtDAy1RbUe_RQoJF9
          stance: supports
          locator: CBDB：兄弟 王坊（201535）之父／母 王弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王臺 与 王坊 为同胞（CBDB 记「兄」），王坊 之父／母即 王臺 之父／母。
          source:
            id: s_g1L9QJtDAy1RbUe_RQoJF9
            source_type: api_record
            title: 中国历代人物传记资料库：王臺（CBDB 273957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273957&o=json
            external_identifier: CBDB:273957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w5pNEVYCVJAEuFuR4sLpcJ
        status: active
        display_name: 王弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0qFN699x3MjcdbdDKegODl
        subject_person_id: p_BSxSS54pFn3GDXcZ2KRg4W
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mXq9uxGc8pg1wHpdoUPQx2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JceSETzTFkwR2vu9jzX-aT
          claim_id: c_0qFN699x3MjcdbdDKegODl
          source_id: s_g1L9QJtDAy1RbUe_RQoJF9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201535 王坊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_g1L9QJtDAy1RbUe_RQoJF9
            source_type: api_record
            title: 中国历代人物传记资料库：王臺（CBDB 273957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273957&o=json
            external_identifier: CBDB:273957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mXq9uxGc8pg1wHpdoUPQx2
        status: active
        display_name: 王坊
        merged_into_person_id: null
---

# 王臺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臺 | accepted |
| bio.summary | 王臺，明人物。弘治十八年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 273957） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_w5pNEVYCVJAEuFuR4sLpcJ | 王弼 | accepted |
| other | p_mXq9uxGc8pg1wHpdoUPQx2 | 王坊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王臺（CBDB 273957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273957&o=json)
