---
schema: wang-person/v1
id: p_hbW5gmdqcq7HA51pN5Jsnr
status: active
merged_into: null
display_name: 王縉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f29yQojLAuaM9SPJAXzovo
        subject_person_id: p_hbW5gmdqcq7HA51pN5Jsnr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z3h5RhSmCXGgir2jAarCmM
          claim_id: c_f29yQojLAuaM9SPJAXzovo
          source_id: s_fzbrnjxZ8gAjrdwBDoTTH5
          stance: supports
          locator: CBDB:247359
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247359）
          source: &a1
            id: s_fzbrnjxZ8gAjrdwBDoTTH5
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 247359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247359&o=json
            external_identifier: CBDB:247359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.113Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y6Trahn47z4oWtLYg4Acab
        subject_person_id: p_hbW5gmdqcq7HA51pN5Jsnr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縉，明人物。成化八年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 247359）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E1LqKNxu2qB6RGkAPzjbMK
          claim_id: c_Y6Trahn47z4oWtLYg4Acab
          source_id: s_fzbrnjxZ8gAjrdwBDoTTH5
          stance: supports
          locator: CBDB:247359
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4NOkeKOTSeXS4kHs4ncbOD
        subject_person_id: p_1Y9vSpLkuvgM5TzoTn8thR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hbW5gmdqcq7HA51pN5Jsnr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zsnLKPMOVBBUA7_mHL4NFs
          claim_id: c_4NOkeKOTSeXS4kHs4ncbOD
          source_id: s_V_m2hPMZJcushaiGnYDcvb
          stance: supports
          locator: CBDB：兄弟 王經（199619）之父／母 王讓
          quotation: null
          interpretation_note: 由兄弟关系推断：王縉 与 王經 为同胞（CBDB 记「兄」），王經 之父／母即 王縉 之父／母。
          source:
            id: s_V_m2hPMZJcushaiGnYDcvb
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 247359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247359&o=json
            external_identifier: CBDB:247359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1Y9vSpLkuvgM5TzoTn8thR
        status: active
        display_name: 王讓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_L_ONOyBJH3DVH7N8nMbBI5
        subject_person_id: p_9qy8VX4YhBeXV8fGKmBp1E
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hbW5gmdqcq7HA51pN5Jsnr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QW22gexOr_Shze08Vdy2dI
          claim_id: c_L_ONOyBJH3DVH7N8nMbBI5
          source_id: s_V_m2hPMZJcushaiGnYDcvb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199619 王經）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_V_m2hPMZJcushaiGnYDcvb
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 247359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247359&o=json
            external_identifier: CBDB:247359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9qy8VX4YhBeXV8fGKmBp1E
        status: active
        display_name: 王經
        merged_into_person_id: null
---

# 王縉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王縉 | accepted |
| bio.summary | 王縉，明人物。成化八年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 247359） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1Y9vSpLkuvgM5TzoTn8thR | 王讓 | accepted |
| other | p_9qy8VX4YhBeXV8fGKmBp1E | 王經 | accepted |

## 外部来源

- [中国历代人物传记资料库：王縉（CBDB 247359）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247359&o=json)
