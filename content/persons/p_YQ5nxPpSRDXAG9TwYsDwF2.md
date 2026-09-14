---
schema: wang-person/v1
id: p_YQ5nxPpSRDXAG9TwYsDwF2
status: active
merged_into: null
display_name: 王化
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w8EoV8toBdJwvQsN5kBLHP
        subject_person_id: p_YQ5nxPpSRDXAG9TwYsDwF2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iyeEqJyRgnsf79uTxyq4Re
          claim_id: c_w8EoV8toBdJwvQsN5kBLHP
          source_id: s_ri3HVELPUHRXgbEdMMzV5m
          stance: supports
          locator: CBDB:229903
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（229903）
          source: &a1
            id: s_ri3HVELPUHRXgbEdMMzV5m
            source_type: api_record
            title: 中国历代人物传记资料库：王化（CBDB 229903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229903&o=json
            external_identifier: CBDB:229903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.590Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HbRUR719HpCcxRsu29y9q4
        subject_person_id: p_YQ5nxPpSRDXAG9TwYsDwF2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化，明人物。萬曆丙戌科進士進士，籍贯武陵。（中国历代人物传记资料库 CBDB 229903）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EBqHm9P3eSg2Rg9xmWY5ys
          claim_id: c_HbRUR719HpCcxRsu29y9q4
          source_id: s_ri3HVELPUHRXgbEdMMzV5m
          stance: supports
          locator: CBDB:229903
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FvYncMJuRrn6_GZwB47G5d
        subject_person_id: p_HMYgDEoVuyW9xCPbxcPZ9o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YQ5nxPpSRDXAG9TwYsDwF2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cD_wdtANvc3gcYt7Z15QAz
          claim_id: c_FvYncMJuRrn6_GZwB47G5d
          source_id: s_1_afEcblhDRggphzyo3msl
          stance: supports
          locator: CBDB：兄弟 王佐（207228）之父／母 王大才
          quotation: null
          interpretation_note: 由兄弟关系推断：王化 与 王佐 为同胞（CBDB 记「兄」），王佐 之父／母即 王化 之父／母。
          source:
            id: s_1_afEcblhDRggphzyo3msl
            source_type: api_record
            title: 中国历代人物传记资料库：王化（CBDB 229903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229903&o=json
            external_identifier: CBDB:229903
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
        id: c_8CoAIo0JpYtYDbtKApgqCQ
        subject_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YQ5nxPpSRDXAG9TwYsDwF2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rTP320phuoUfWODoYRfuFI
          claim_id: c_8CoAIo0JpYtYDbtKApgqCQ
          source_id: s_1_afEcblhDRggphzyo3msl
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207228 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1_afEcblhDRggphzyo3msl
            source_type: api_record
            title: 中国历代人物传记资料库：王化（CBDB 229903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229903&o=json
            external_identifier: CBDB:229903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DJcqSVwRMjWd5tk8GAdMxa
        status: active
        display_name: 王佐
        merged_into_person_id: null
---

# 王化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化 | accepted |
| bio.summary | 王化，明人物。萬曆丙戌科進士進士，籍贯武陵。（中国历代人物传记资料库 CBDB 229903） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HMYgDEoVuyW9xCPbxcPZ9o | 王大才 | accepted |
| other | p_DJcqSVwRMjWd5tk8GAdMxa | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王化（CBDB 229903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229903&o=json)
