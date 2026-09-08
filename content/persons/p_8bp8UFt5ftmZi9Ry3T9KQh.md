---
schema: wang-person/v1
id: p_8bp8UFt5ftmZi9Ry3T9KQh
status: active
merged_into: null
display_name: 王士𫘧
cbdb_id: 136069
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vmTQgKEAXG8xKBjBpKTqK5
        subject_person_id: p_8bp8UFt5ftmZi9Ry3T9KQh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士𫘧，明人物。CBDB 记录其籍贯记录为崑山。中国历代人物传记资料库（CBDB）以人物编号 136069 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FySkj9WB586L9P1Nn2vTJR
          claim_id: c_vmTQgKEAXG8xKBjBpKTqK5
          source_id: s_CG9JLAFR23CPF2NrcRJ2ee
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_CG9JLAFR23CPF2NrcRJ2ee
            source_type: api_record
            title: 维基数据：王士𫘧（Q45484190）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45484190
            external_identifier: Q45484190
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:13.176Z
            metadata_json: null
        - id: cs_ImkaymXY_oyPdz2OE0_YAC
          claim_id: c_vmTQgKEAXG8xKBjBpKTqK5
          source_id: s_qMZWpBXR5YcUKAEKNWbsik
          stance: supports
          locator: CBDB:136069
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qMZWpBXR5YcUKAEKNWbsik
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士騄（136069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136069&o=json
            external_identifier: CBDB:136069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:13.360Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_orF221NBmUscc6MfFe7cx1
        subject_person_id: p_8bp8UFt5ftmZi9Ry3T9KQh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士𫘧
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_V8MMU3wgsE4Hrjy6YiMkuq
          claim_id: c_orF221NBmUscc6MfFe7cx1
          source_id: s_qMZWpBXR5YcUKAEKNWbsik
          stance: supports
          locator: Q45484190
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_ai4GUWqrbTqis7YNoZ1C17
          claim_id: c_orF221NBmUscc6MfFe7cx1
          source_id: s_CG9JLAFR23CPF2NrcRJ2ee
          stance: supports
          locator: Q45484190
          quotation: null
          interpretation_note: null
          source:
            id: s_CG9JLAFR23CPF2NrcRJ2ee
            source_type: api_record
            title: 维基数据：王士𫘧（Q45484190）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45484190
            external_identifier: Q45484190
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:13.176Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HmnN8tacBRXDDDpEiNz9qJ
        subject_person_id: p_38CvMQkfBCMzR3DNrBhBQJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8bp8UFt5ftmZi9Ry3T9KQh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_eRuQ4kDGxh2UQ5doaR6kYb
          claim_id: c_HmnN8tacBRXDDDpEiNz9qJ
          source_id: s_5imTSkJydYpo2DeA4oi3Sq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_5imTSkJydYpo2DeA4oi3Sq
            source_type: api_record
            title: 维基数据：王世懋（Q16260750）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260750
            external_identifier: Q16260750
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:53.740Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E6%87%8B
        - id: cs_y9JoN7Fd7Bjc7xbgZT4sEu
          claim_id: c_HmnN8tacBRXDDDpEiNz9qJ
          source_id: s_iAg6G2jfpHXsfxxTQq8PBT
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：吳江沈氏家譜
          source:
            id: s_iAg6G2jfpHXsfxxTQq8PBT
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王世懋（34719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34719&o=json
            external_identifier: CBDB:34719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:53.874Z
            metadata_json: null
        - id: cs_cvDty1iRFBvMpVrZBKKhxj
          claim_id: c_HmnN8tacBRXDDDpEiNz9qJ
          source_id: s_CG9JLAFR23CPF2NrcRJ2ee
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CG9JLAFR23CPF2NrcRJ2ee
            source_type: api_record
            title: 维基数据：王士𫘧（Q45484190）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45484190
            external_identifier: Q45484190
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:13.176Z
            metadata_json: null
        - id: cs_7zbJJ7ipXhjV7XhgESWEiP
          claim_id: c_HmnN8tacBRXDDDpEiNz9qJ
          source_id: s_qMZWpBXR5YcUKAEKNWbsik
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：吳江沈氏家譜
          source:
            id: s_qMZWpBXR5YcUKAEKNWbsik
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士騄（136069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136069&o=json
            external_identifier: CBDB:136069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:13.360Z
            metadata_json: null
      object_person:
        id: p_38CvMQkfBCMzR3DNrBhBQJ
        status: active
        display_name: 王世懋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_zkFCNcZNxd7xCZsf9dGJgS
        subject_person_id: p_8bp8UFt5ftmZi9Ry3T9KQh
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_TRrMFTNNuUK45RpnkNjXf9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_u16AFnGN1VdE8H7W8kB6WK
          claim_id: c_zkFCNcZNxd7xCZsf9dGJgS
          source_id: s_qMZWpBXR5YcUKAEKNWbsik
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：吳江沈氏家譜
          source:
            id: s_qMZWpBXR5YcUKAEKNWbsik
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士騄（136069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136069&o=json
            external_identifier: CBDB:136069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:13.360Z
            metadata_json: null
        - id: cs_whQvTVVZfwxQk5siueAibD
          claim_id: c_zkFCNcZNxd7xCZsf9dGJgS
          source_id: s_CG9JLAFR23CPF2NrcRJ2ee
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_CG9JLAFR23CPF2NrcRJ2ee
            source_type: api_record
            title: 维基数据：王士𫘧（Q45484190）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45484190
            external_identifier: Q45484190
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:13.176Z
            metadata_json: null
        - id: cs_a4geZLD2AesMAKaVAaSN9e
          claim_id: c_zkFCNcZNxd7xCZsf9dGJgS
          source_id: s_7wUHAqaE8r5JFjZaBz2kP5
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_7wUHAqaE8r5JFjZaBz2kP5
            source_type: api_record
            title: 维基数据：沈大荣（Q45510360）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45510360
            external_identifier: Q45510360
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:46.649Z
            metadata_json: null
        - id: cs_9yNPF27qA9cQUbK17YJj6W
          claim_id: c_zkFCNcZNxd7xCZsf9dGJgS
          source_id: s_v91SBnfSCT61WFMJkDe42K
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：吳江沈氏家譜
          source:
            id: s_v91SBnfSCT61WFMJkDe42K
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：沈大榮（56146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56146&o=json
            external_identifier: CBDB:56146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:46.788Z
            metadata_json: null
      object_person:
        id: p_TRrMFTNNuUK45RpnkNjXf9
        status: active
        display_name: 沈大荣
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王士𫘧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士𫘧，明人物。CBDB 记录其籍贯记录为崑山。中国历代人物传记资料库（CBDB）以人物编号 136069 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王士𫘧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_38CvMQkfBCMzR3DNrBhBQJ | 王世懋 | accepted |
| spouses | p_TRrMFTNNuUK45RpnkNjXf9 | 沈大荣 | accepted |

## 外部来源

- [维基数据：沈大荣（Q45510360）](https://www.wikidata.org/wiki/Q45510360)
- [维基数据：王士𫘧（Q45484190）](https://www.wikidata.org/wiki/Q45484190)
- [维基数据：王世懋（Q16260750）](https://www.wikidata.org/wiki/Q16260750)
- [CBDB 中国历代人物传记资料库：沈大榮（56146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56146&o=json)
- [CBDB 中国历代人物传记资料库：王士騄（136069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136069&o=json)
- [CBDB 中国历代人物传记资料库：王世懋（34719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34719&o=json)
