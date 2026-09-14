---
schema: wang-person/v1
id: p_w9FC1F4e2g1itRnVQLmLPk
status: active
merged_into: null
display_name: 王雲鵬
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8nRXabX94fQDEA4dF7C7RE
        subject_person_id: p_w9FC1F4e2g1itRnVQLmLPk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲鵬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rADGY1F7phgDQFg7BHBVjf
          claim_id: c_8nRXabX94fQDEA4dF7C7RE
          source_id: s_xkUXXJmTQseRdf8xJ3hJQX
          stance: supports
          locator: CBDB:291948
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291948）
          source: &a1
            id: s_xkUXXJmTQseRdf8xJ3hJQX
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鵬（CBDB 291948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291948&o=json
            external_identifier: CBDB:291948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.385Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BjwvAbYnJm7gzcvftbzksY
        subject_person_id: p_w9FC1F4e2g1itRnVQLmLPk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲鵬，明人物。嘉靖十一年進士，籍贯高郵州。（中国历代人物传记资料库 CBDB 291948）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2hc9nKRfxsJIJgIGla3xnD
          claim_id: c_BjwvAbYnJm7gzcvftbzksY
          source_id: s_xkUXXJmTQseRdf8xJ3hJQX
          stance: supports
          locator: CBDB:291948
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_K562GWj0laW3LjQbpsJXjs
        subject_person_id: p_ni93rzedW8HywjRcLfPSGG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w9FC1F4e2g1itRnVQLmLPk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_os2voUiP6miPGau5EeiL1y
          claim_id: c_K562GWj0laW3LjQbpsJXjs
          source_id: s_8mgTM_yYkecl2s1vFvPvlV
          stance: supports
          locator: CBDB：兄弟 王京（202664）之父／母 王民
          quotation: null
          interpretation_note: 由兄弟关系推断：王雲鵬 与 王京 为同胞（CBDB 记「兄」），王京 之父／母即 王雲鵬 之父／母。
          source:
            id: s_8mgTM_yYkecl2s1vFvPvlV
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鵬（CBDB 291948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291948&o=json
            external_identifier: CBDB:291948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ni93rzedW8HywjRcLfPSGG
        status: active
        display_name: 王民
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_MyIyVJwgBw-L7vcaxQ0-iV
        subject_person_id: p_ufRLVRWc7tv4zcxsauhE29
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_w9FC1F4e2g1itRnVQLmLPk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B4Mdr3UfYSQJlAimXpemJL
          claim_id: c_MyIyVJwgBw-L7vcaxQ0-iV
          source_id: s_8mgTM_yYkecl2s1vFvPvlV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202664 王京）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8mgTM_yYkecl2s1vFvPvlV
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鵬（CBDB 291948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291948&o=json
            external_identifier: CBDB:291948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ufRLVRWc7tv4zcxsauhE29
        status: active
        display_name: 王京
        merged_into_person_id: null
---

# 王雲鵬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲鵬 | accepted |
| bio.summary | 王雲鵬，明人物。嘉靖十一年進士，籍贯高郵州。（中国历代人物传记资料库 CBDB 291948） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ni93rzedW8HywjRcLfPSGG | 王民 | accepted |
| other | p_ufRLVRWc7tv4zcxsauhE29 | 王京 | accepted |

## 外部来源

- [中国历代人物传记资料库：王雲鵬（CBDB 291948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291948&o=json)
