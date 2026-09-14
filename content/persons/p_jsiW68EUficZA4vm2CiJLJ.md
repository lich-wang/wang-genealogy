---
schema: wang-person/v1
id: p_jsiW68EUficZA4vm2CiJLJ
status: active
merged_into: null
display_name: 王世蕃
cbdb_id: 283507
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ar5sXG9znfRDNeF46DCMHC
        subject_person_id: p_jsiW68EUficZA4vm2CiJLJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世蕃，明人物。正德十六年進士，籍贯太倉州。（中国历代人物传记资料库 CBDB 283507）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_VLCAGcKBrqOH3gkdAEwL8G
          claim_id: c_Ar5sXG9znfRDNeF46DCMHC
          source_id: s_nS66WEUce3f1dr3VVdPcWh
          stance: supports
          locator: CBDB:283507
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_nS66WEUce3f1dr3VVdPcWh
            source_type: api_record
            title: 中国历代人物传记资料库：王世蕃（CBDB 283507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283507&o=json
            external_identifier: CBDB:283507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LxFJo4naCBLB7dfb1vQcjH
        subject_person_id: p_jsiW68EUficZA4vm2CiJLJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世蕃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3tv2VaB9YpmWY6KmL7mQ2A
          claim_id: c_LxFJo4naCBLB7dfb1vQcjH
          source_id: s_nS66WEUce3f1dr3VVdPcWh
          stance: supports
          locator: CBDB:283507
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_008p3iNkLO1RIRnmC4_P9p
        subject_person_id: p_htEFhvA1GWN2EHqSp5mSSu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jsiW68EUficZA4vm2CiJLJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xgqwBFCnnj2blGjROTSU8v
          claim_id: c_008p3iNkLO1RIRnmC4_P9p
          source_id: s_DUwPInL0u-kKSb9NoSoHGM
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202098 王世芳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DUwPInL0u-kKSb9NoSoHGM
            source_type: api_record
            title: 中国历代人物传记资料库：王世蕃（CBDB 283507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283507&o=json
            external_identifier: CBDB:283507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_htEFhvA1GWN2EHqSp5mSSu
        status: active
        display_name: 王世芳
        merged_into_person_id: null
---

# 王世蕃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世蕃，明人物。正德十六年進士，籍贯太倉州。（中国历代人物传记资料库 CBDB 283507） | accepted |
| name.primary | 王世蕃 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_htEFhvA1GWN2EHqSp5mSSu | 王世芳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世蕃（CBDB 283507）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283507&o=json)
