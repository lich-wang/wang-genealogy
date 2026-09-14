---
schema: wang-person/v1
id: p_sh3n735gZ5aRvCNgDjoZJa
status: active
merged_into: null
display_name: 王政
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vc2eXN6bDgoCt8XdogjFAi
        subject_person_id: p_sh3n735gZ5aRvCNgDjoZJa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ktkqPJfBjotAQn1UMvJRoJ
          claim_id: c_Vc2eXN6bDgoCt8XdogjFAi
          source_id: s_FC82sBpFtnmBJ3er8RiiHM
          stance: supports
          locator: CBDB:208725
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208725）
          source: &a1
            id: s_FC82sBpFtnmBJ3er8RiiHM
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 208725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208725&o=json
            external_identifier: CBDB:208725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4dTimbfezTxePqbAmsrvrA
        subject_person_id: p_sh3n735gZ5aRvCNgDjoZJa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政，明人物。隆慶五年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 208725）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AuwglV7IEf-9C8WB4FpvOZ
          claim_id: c_4dTimbfezTxePqbAmsrvrA
          source_id: s_FC82sBpFtnmBJ3er8RiiHM
          stance: supports
          locator: CBDB:208725
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UW1kPUDmtUC7zYH3hUaKTK
        subject_person_id: p_QNP9ruUBJM2h7tcYH7jhr9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sh3n735gZ5aRvCNgDjoZJa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VsxD2lUs5cPvQ01MNSySpK
          claim_id: c_UW1kPUDmtUC7zYH3hUaKTK
          source_id: s_8YHCZOQd1tqG0PhCYQnRwD
          stance: supports
          locator: CBDB：兄弟 王敎（126675）之父／母 王珏
          quotation: null
          interpretation_note: 由兄弟关系推断：王政 与 王敎 为同胞（CBDB 记「弟」），王敎 之父／母即 王政 之父／母。
          source:
            id: s_8YHCZOQd1tqG0PhCYQnRwD
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 208725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208725&o=json
            external_identifier: CBDB:208725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QNP9ruUBJM2h7tcYH7jhr9
        status: active
        display_name: 王珏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_uFsU_bcyYBD4ODBTQum7c4
        subject_person_id: p_HKCnizxAApK3fsPh2jp46Q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sh3n735gZ5aRvCNgDjoZJa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KKi3U4kaDATIg-TeewHkxQ
          claim_id: c_uFsU_bcyYBD4ODBTQum7c4
          source_id: s_8YHCZOQd1tqG0PhCYQnRwD
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126675 王敎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8YHCZOQd1tqG0PhCYQnRwD
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 208725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208725&o=json
            external_identifier: CBDB:208725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HKCnizxAApK3fsPh2jp46Q
        status: active
        display_name: 王敎
        merged_into_person_id: null
---

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| bio.summary | 王政，明人物。隆慶五年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 208725） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QNP9ruUBJM2h7tcYH7jhr9 | 王珏 | accepted |
| other | p_HKCnizxAApK3fsPh2jp46Q | 王敎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王政（CBDB 208725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208725&o=json)
