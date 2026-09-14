---
schema: wang-person/v1
id: p_kpKZa5Rui7RBUb1WeJKFuc
status: active
merged_into: null
display_name: 王鼐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fPoRDSfd7HCLBM69tM1PjF
        subject_person_id: p_kpKZa5Rui7RBUb1WeJKFuc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4Vjg4gakKrmGFF6ydR58EV
          claim_id: c_fPoRDSfd7HCLBM69tM1PjF
          source_id: s_GXafk4sqnXREaxq4g5SGDm
          stance: supports
          locator: CBDB:263533
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（263533）
          source: &a1
            id: s_GXafk4sqnXREaxq4g5SGDm
            source_type: api_record
            title: 中国历代人物传记资料库：王鼐（CBDB 263533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263533&o=json
            external_identifier: CBDB:263533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.627Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jPMVPe35B8dzbPC2Mq7dUg
        subject_person_id: p_kpKZa5Rui7RBUb1WeJKFuc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼐，明人物。弘治三年進士，籍贯鉅鹿。（中国历代人物传记资料库 CBDB 263533）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ynuv8WBPiAAHa7bq9fh8IA
          claim_id: c_jPMVPe35B8dzbPC2Mq7dUg
          source_id: s_GXafk4sqnXREaxq4g5SGDm
          stance: supports
          locator: CBDB:263533
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JoyPbRWw2dcbRbas9fOKYs
        subject_person_id: p_DH3cdxEBekGFnLswxt2AJm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kpKZa5Rui7RBUb1WeJKFuc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ci0w0hw-JxuXsxoRhSw727
          claim_id: c_JoyPbRWw2dcbRbas9fOKYs
          source_id: s_Bzd9Vb_Jyqc9NDN05SC2oX
          stance: supports
          locator: CBDB：兄弟 王鼎（67757）之父／母 王惟
          quotation: null
          interpretation_note: 由兄弟关系推断：王鼐 与 王鼎 为同胞（CBDB 记「兄」），王鼎 之父／母即 王鼐 之父／母。
          source:
            id: s_Bzd9Vb_Jyqc9NDN05SC2oX
            source_type: api_record
            title: 中国历代人物传记资料库：王鼐（CBDB 263533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263533&o=json
            external_identifier: CBDB:263533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DH3cdxEBekGFnLswxt2AJm
        status: active
        display_name: 王惟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ZM1CREsUXXVuOPTw8XeX-g
        subject_person_id: p_3aWXbEScEDV2akyzL58TPm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kpKZa5Rui7RBUb1WeJKFuc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dZnMQ6ur12eHGu81QkNvMW
          claim_id: c_ZM1CREsUXXVuOPTw8XeX-g
          source_id: s_Bzd9Vb_Jyqc9NDN05SC2oX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67757 王鼎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Bzd9Vb_Jyqc9NDN05SC2oX
            source_type: api_record
            title: 中国历代人物传记资料库：王鼐（CBDB 263533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263533&o=json
            external_identifier: CBDB:263533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3aWXbEScEDV2akyzL58TPm
        status: active
        display_name: 王鼎
        merged_into_person_id: null
---

# 王鼐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼐 | accepted |
| bio.summary | 王鼐，明人物。弘治三年進士，籍贯鉅鹿。（中国历代人物传记资料库 CBDB 263533） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DH3cdxEBekGFnLswxt2AJm | 王惟 | accepted |
| other | p_3aWXbEScEDV2akyzL58TPm | 王鼎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼐（CBDB 263533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263533&o=json)
