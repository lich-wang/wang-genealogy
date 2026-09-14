---
schema: wang-person/v1
id: p_8BwY1SjEdt5pff19FsyCCg
status: active
merged_into: null
display_name: 王惟祗
cbdb_id: 336617
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uKQqN9mxBusaNEEMBBMER6
        subject_person_id: p_8BwY1SjEdt5pff19FsyCCg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟祗，明人物。隆慶二年進士，籍贯文安，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 336617）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_K6MfJmN3cio-BPzOmNlpDf
          claim_id: c_uKQqN9mxBusaNEEMBBMER6
          source_id: s_Z5DiyzQvVQ4FyYtba13AaV
          stance: supports
          locator: CBDB:336617
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Z5DiyzQvVQ4FyYtba13AaV
            source_type: api_record
            title: 中国历代人物传记资料库：王惟祗（CBDB 336617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336617&o=json
            external_identifier: CBDB:336617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DaDUdpPLJqmkkPS8UfRNjf
        subject_person_id: p_8BwY1SjEdt5pff19FsyCCg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟祗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9e4wH7yoDc3VGgNyQ4vcBN
          claim_id: c_DaDUdpPLJqmkkPS8UfRNjf
          source_id: s_Z5DiyzQvVQ4FyYtba13AaV
          stance: supports
          locator: CBDB:336617
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Sc6pK9QYIq40LaJlyeSMu2
        subject_person_id: p_ftDTX1CGK9535aJ5ssi8pm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8BwY1SjEdt5pff19FsyCCg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6iot2Q85piDmdKWWkRJsvB
          claim_id: c_Sc6pK9QYIq40LaJlyeSMu2
          source_id: s_RZ3rnJ5vIJEB64XfVRLCIE
          stance: supports
          locator: CBDB：兄弟 王惟幾（205658）之父／母 王佩
          quotation: null
          interpretation_note: 由兄弟关系推断：王惟祗 与 王惟幾 为同胞（CBDB 记「兄」），王惟幾 之父／母即 王惟祗 之父／母。
          source:
            id: s_RZ3rnJ5vIJEB64XfVRLCIE
            source_type: api_record
            title: 中国历代人物传记资料库：王惟祗（CBDB 336617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336617&o=json
            external_identifier: CBDB:336617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ftDTX1CGK9535aJ5ssi8pm
        status: active
        display_name: 王佩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bfdR4mm5bqFCU5FZcT9fJv
        subject_person_id: p_8BwY1SjEdt5pff19FsyCCg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kUCuDeuG8a7t95vC5CL3P3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_10aI6ECO6Dh1I9CjoUadvk
          claim_id: c_bfdR4mm5bqFCU5FZcT9fJv
          source_id: s_RZ3rnJ5vIJEB64XfVRLCIE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205658 王惟幾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RZ3rnJ5vIJEB64XfVRLCIE
            source_type: api_record
            title: 中国历代人物传记资料库：王惟祗（CBDB 336617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336617&o=json
            external_identifier: CBDB:336617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kUCuDeuG8a7t95vC5CL3P3
        status: active
        display_name: 王惟幾
        merged_into_person_id: null
---

# 王惟祗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王惟祗，明人物。隆慶二年進士，籍贯文安，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 336617） | accepted |
| name.primary | 王惟祗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ftDTX1CGK9535aJ5ssi8pm | 王佩 | accepted |
| other | p_kUCuDeuG8a7t95vC5CL3P3 | 王惟幾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惟祗（CBDB 336617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336617&o=json)
