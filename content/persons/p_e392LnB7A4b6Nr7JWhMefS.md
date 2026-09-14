---
schema: wang-person/v1
id: p_e392LnB7A4b6Nr7JWhMefS
status: active
merged_into: null
display_name: 王憲
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_56ZWd6qdQvrNNAtCMQr2Wz
        subject_person_id: p_e392LnB7A4b6Nr7JWhMefS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BTgzpJtV8mTx9EuN1G1EoT
          claim_id: c_56ZWd6qdQvrNNAtCMQr2Wz
          source_id: s_c7HSczuJP46kGJrTDQyHZe
          stance: supports
          locator: CBDB:247173
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247173）
          source: &a1
            id: s_c7HSczuJP46kGJrTDQyHZe
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 247173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247173&o=json
            external_identifier: CBDB:247173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.093Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9paM3R1pnF1NrQmKKiwucG
        subject_person_id: p_e392LnB7A4b6Nr7JWhMefS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲，明人物。成化八年進士，籍贯宛平。（中国历代人物传记资料库 CBDB 247173）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J3Tvz783xm2JPtwUIp_9Ut
          claim_id: c_9paM3R1pnF1NrQmKKiwucG
          source_id: s_c7HSczuJP46kGJrTDQyHZe
          stance: supports
          locator: CBDB:247173
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_J4F8yI21tEqbm4fyJDLbHH
        subject_person_id: p_V5dXzxdRKFGtbUxcAc642k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e392LnB7A4b6Nr7JWhMefS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vF1ZQOencVoEHPjuEwaUHv
          claim_id: c_J4F8yI21tEqbm4fyJDLbHH
          source_id: s_PHJ5xeXf6pI0oSBRQsHsx1
          stance: supports
          locator: CBDB：兄弟 王勉（199604）之父／母 王貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲 与 王勉 为同胞（CBDB 记「兄」），王勉 之父／母即 王憲 之父／母。
          source:
            id: s_PHJ5xeXf6pI0oSBRQsHsx1
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 247173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247173&o=json
            external_identifier: CBDB:247173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V5dXzxdRKFGtbUxcAc642k
        status: active
        display_name: 王貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_fQTAimEuh3Gh99NgWeIaYN
        subject_person_id: p_e392LnB7A4b6Nr7JWhMefS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eonrrfCkN2hA5o48Aafwfz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CmKr8cY0L-dG_y0CpxHhAT
          claim_id: c_fQTAimEuh3Gh99NgWeIaYN
          source_id: s_PHJ5xeXf6pI0oSBRQsHsx1
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199604 王勉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PHJ5xeXf6pI0oSBRQsHsx1
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 247173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247173&o=json
            external_identifier: CBDB:247173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eonrrfCkN2hA5o48Aafwfz
        status: active
        display_name: 王勉
        merged_into_person_id: null
---

# 王憲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王憲 | accepted |
| bio.summary | 王憲，明人物。成化八年進士，籍贯宛平。（中国历代人物传记资料库 CBDB 247173） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_V5dXzxdRKFGtbUxcAc642k | 王貴 | accepted |
| other | p_eonrrfCkN2hA5o48Aafwfz | 王勉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王憲（CBDB 247173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247173&o=json)
