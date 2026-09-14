---
schema: wang-person/v1
id: p_zgCoPqxLm18aKQ5gsrpuhw
status: active
merged_into: null
display_name: 王勉哲
cbdb_id: 217226
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6i6MCDn4acCPPJiSsJ6LzU
        subject_person_id: p_zgCoPqxLm18aKQ5gsrpuhw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勉哲，明人物。天順八年進士，籍贯稷山。（中国历代人物传记资料库 CBDB 217226）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_MWkoFZ79-7amhrzw4FNpP2
          claim_id: c_6i6MCDn4acCPPJiSsJ6LzU
          source_id: s_wGBpuG71iEsBgob9Jp3ANt
          stance: supports
          locator: CBDB:217226
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_wGBpuG71iEsBgob9Jp3ANt
            source_type: api_record
            title: 中国历代人物传记资料库：王勉哲（CBDB 217226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217226&o=json
            external_identifier: CBDB:217226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_e7FDFFKr7BJypgwkXuEK31
        subject_person_id: p_zgCoPqxLm18aKQ5gsrpuhw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勉哲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1RgJ45WBt57ekTocx6qQti
          claim_id: c_e7FDFFKr7BJypgwkXuEK31
          source_id: s_wGBpuG71iEsBgob9Jp3ANt
          stance: supports
          locator: CBDB:217226
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f0ZBj9fttEtsQjyMSPwuSk
        subject_person_id: p_12DEVgMDKmXWxrfKEnUPE7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zgCoPqxLm18aKQ5gsrpuhw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8etKtLffBfahpmumitgaKT
          claim_id: c_f0ZBj9fttEtsQjyMSPwuSk
          source_id: s_dJD0utoeyNDrRZu6T8xhFo
          stance: supports
          locator: CBDB：兄弟 王衡（124006）之父／母 王琅
          quotation: null
          interpretation_note: 由兄弟关系推断：王勉哲 与 王衡 为同胞（CBDB 记「弟」），王衡 之父／母即 王勉哲 之父／母。
          source:
            id: s_dJD0utoeyNDrRZu6T8xhFo
            source_type: api_record
            title: 中国历代人物传记资料库：王勉哲（CBDB 217226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217226&o=json
            external_identifier: CBDB:217226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_12DEVgMDKmXWxrfKEnUPE7
        status: active
        display_name: 王琅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_35R5XC8FJn8pxbTGdkFQAL
        subject_person_id: p_JL51TddY85M5VjjQdk9Dbd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zgCoPqxLm18aKQ5gsrpuhw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RYOKDPQxcODnl7zEP3-VF1
          claim_id: c_35R5XC8FJn8pxbTGdkFQAL
          source_id: s_dJD0utoeyNDrRZu6T8xhFo
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 124006 王衡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dJD0utoeyNDrRZu6T8xhFo
            source_type: api_record
            title: 中国历代人物传记资料库：王勉哲（CBDB 217226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217226&o=json
            external_identifier: CBDB:217226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JL51TddY85M5VjjQdk9Dbd
        status: active
        display_name: 王衡
        merged_into_person_id: null
---

# 王勉哲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王勉哲，明人物。天順八年進士，籍贯稷山。（中国历代人物传记资料库 CBDB 217226） | accepted |
| name.primary | 王勉哲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_12DEVgMDKmXWxrfKEnUPE7 | 王琅 | accepted |
| other | p_JL51TddY85M5VjjQdk9Dbd | 王衡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勉哲（CBDB 217226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217226&o=json)
