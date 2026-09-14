---
schema: wang-person/v1
id: p_ARfUyaPkiWPDdKQtBaMiRZ
status: active
merged_into: null
display_name: 王梓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NTgG8VW7KAbyaJQng86Htm
        subject_person_id: p_ARfUyaPkiWPDdKQtBaMiRZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QG7V6z2cUFEzy5A9P1QC3h
          claim_id: c_NTgG8VW7KAbyaJQng86Htm
          source_id: s_qer7wSc7u55dRT8VWBx6GP
          stance: supports
          locator: CBDB:283937
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283937）
          source: &a1
            id: s_qer7wSc7u55dRT8VWBx6GP
            source_type: api_record
            title: 中国历代人物传记资料库：王梓（CBDB 283937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283937&o=json
            external_identifier: CBDB:283937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.169Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5148a9nKwUVf9YNTFnsD1B
        subject_person_id: p_ARfUyaPkiWPDdKQtBaMiRZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梓，明人物。正德十六年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 283937）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5KPcCJwiWqP-7TRulRNzrr
          claim_id: c_5148a9nKwUVf9YNTFnsD1B
          source_id: s_qer7wSc7u55dRT8VWBx6GP
          stance: supports
          locator: CBDB:283937
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EnT530sIUD9Pan2qmA9f0X
        subject_person_id: p_XDFGKptw1EWAKBbTEUcvCN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ARfUyaPkiWPDdKQtBaMiRZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hxzG8a5WHV2bqDizZ3ydtF
          claim_id: c_EnT530sIUD9Pan2qmA9f0X
          source_id: s_Agi8l7ZbAKkPcHffxQY2lj
          stance: supports
          locator: CBDB：兄弟 王同祖（126516）之父／母 王銀
          quotation: null
          interpretation_note: 由兄弟关系推断：王梓 与 王同祖 为同胞（CBDB 记「兄」），王同祖 之父／母即 王梓 之父／母。
          source:
            id: s_Agi8l7ZbAKkPcHffxQY2lj
            source_type: api_record
            title: 中国历代人物传记资料库：王梓（CBDB 283937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283937&o=json
            external_identifier: CBDB:283937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XDFGKptw1EWAKBbTEUcvCN
        status: active
        display_name: 王銀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_GErikKBzK7TsM7g_g63USf
        subject_person_id: p_ARfUyaPkiWPDdKQtBaMiRZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uQx6CsD653L6hRpaz3mPf9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TB8A0g0FsxMOptY4V4xNeP
          claim_id: c_GErikKBzK7TsM7g_g63USf
          source_id: s_Agi8l7ZbAKkPcHffxQY2lj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126516 王同祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Agi8l7ZbAKkPcHffxQY2lj
            source_type: api_record
            title: 中国历代人物传记资料库：王梓（CBDB 283937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283937&o=json
            external_identifier: CBDB:283937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uQx6CsD653L6hRpaz3mPf9
        status: active
        display_name: 王同祖
        merged_into_person_id: null
---

# 王梓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王梓 | accepted |
| bio.summary | 王梓，明人物。正德十六年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 283937） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XDFGKptw1EWAKBbTEUcvCN | 王銀 | accepted |
| other | p_uQx6CsD653L6hRpaz3mPf9 | 王同祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王梓（CBDB 283937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283937&o=json)
