---
schema: wang-person/v1
id: p_fNZadZEQF62pN9HseFJCx8
status: active
merged_into: null
display_name: 王任
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nxqEFwYJ3TF3RFaCBQricv
        subject_person_id: p_fNZadZEQF62pN9HseFJCx8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王任
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uta7AFUhvMDFpb8R1DVoXm
          claim_id: c_nxqEFwYJ3TF3RFaCBQricv
          source_id: s_K9rkoP6SoJVbyRM3UyHSbb
          stance: supports
          locator: CBDB:229902
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（229902）
          source: &a1
            id: s_K9rkoP6SoJVbyRM3UyHSbb
            source_type: api_record
            title: 中国历代人物传记资料库：王任（CBDB 229902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229902&o=json
            external_identifier: CBDB:229902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.590Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HJJFGDYbZupMQkobHchMvk
        subject_person_id: p_fNZadZEQF62pN9HseFJCx8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王任，明人物。萬曆丙戌科進士進士，籍贯武陵。（中国历代人物传记资料库 CBDB 229902）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9niJ9W9yFLZtxpVTjvA8wC
          claim_id: c_HJJFGDYbZupMQkobHchMvk
          source_id: s_K9rkoP6SoJVbyRM3UyHSbb
          stance: supports
          locator: CBDB:229902
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6mid-CV9yidog66BC3dQqX
        subject_person_id: p_HMYgDEoVuyW9xCPbxcPZ9o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fNZadZEQF62pN9HseFJCx8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oE6RH5xBYNQdoKAgHarOCT
          claim_id: c_6mid-CV9yidog66BC3dQqX
          source_id: s_r9SYJaZFB2TiCGINi6xF-3
          stance: supports
          locator: CBDB：兄弟 王佐（207228）之父／母 王大才
          quotation: null
          interpretation_note: 由兄弟关系推断：王任 与 王佐 为同胞（CBDB 记「兄」），王佐 之父／母即 王任 之父／母。
          source:
            id: s_r9SYJaZFB2TiCGINi6xF-3
            source_type: api_record
            title: 中国历代人物传记资料库：王任（CBDB 229902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229902&o=json
            external_identifier: CBDB:229902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HMYgDEoVuyW9xCPbxcPZ9o
        status: active
        display_name: 王大才
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PZpDCYTMft1ovl86dMv23s
        subject_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fNZadZEQF62pN9HseFJCx8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UxXfoNK7hCP5utmhxznztw
          claim_id: c_PZpDCYTMft1ovl86dMv23s
          source_id: s_r9SYJaZFB2TiCGINi6xF-3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207228 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_r9SYJaZFB2TiCGINi6xF-3
            source_type: api_record
            title: 中国历代人物传记资料库：王任（CBDB 229902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229902&o=json
            external_identifier: CBDB:229902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DJcqSVwRMjWd5tk8GAdMxa
        status: active
        display_name: 王佐
        merged_into_person_id: null
---

# 王任

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王任 | accepted |
| bio.summary | 王任，明人物。萬曆丙戌科進士進士，籍贯武陵。（中国历代人物传记资料库 CBDB 229902） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HMYgDEoVuyW9xCPbxcPZ9o | 王大才 | accepted |
| other | p_DJcqSVwRMjWd5tk8GAdMxa | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王任（CBDB 229902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229902&o=json)
