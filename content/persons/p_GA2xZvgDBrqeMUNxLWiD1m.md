---
schema: wang-person/v1
id: p_GA2xZvgDBrqeMUNxLWiD1m
status: active
merged_into: null
display_name: 王大信
cbdb_id: 264453
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KvFHP1pG3ZQ5wPPhqPHdAm
        subject_person_id: p_GA2xZvgDBrqeMUNxLWiD1m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大信，明人物。弘治六年進士，籍贯上海。（中国历代人物传记资料库 CBDB 264453）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_AzoA4OjVCQAhukfeXNvVyL
          claim_id: c_KvFHP1pG3ZQ5wPPhqPHdAm
          source_id: s_8BbHATLFnc9R9gQznD9M8C
          stance: supports
          locator: CBDB:264453
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8BbHATLFnc9R9gQznD9M8C
            source_type: api_record
            title: 中国历代人物传记资料库：王大信（CBDB 264453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264453&o=json
            external_identifier: CBDB:264453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AMJ4FeCPCmtBNjjz8obheG
        subject_person_id: p_GA2xZvgDBrqeMUNxLWiD1m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZMEaFxvPRcE6ioEu1ojhoa
          claim_id: c_AMJ4FeCPCmtBNjjz8obheG
          source_id: s_8BbHATLFnc9R9gQznD9M8C
          stance: supports
          locator: CBDB:264453
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WAJPYbEeuqXY0Z8t19YueJ
        subject_person_id: p_2hYFczFXSMMXJ25M18ZPJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GA2xZvgDBrqeMUNxLWiD1m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c40kFvz4QQxST251ebC5Ug
          claim_id: c_WAJPYbEeuqXY0Z8t19YueJ
          source_id: s_a09GoAl402wFBeh6GJR7MV
          stance: supports
          locator: CBDB：兄弟 王大用（200906）之父／母 王乂衡
          quotation: null
          interpretation_note: 由兄弟关系推断：王大信 与 王大用 为同胞（CBDB 记「弟」），王大用 之父／母即 王大信 之父／母。
          source:
            id: s_a09GoAl402wFBeh6GJR7MV
            source_type: api_record
            title: 中国历代人物传记资料库：王大信（CBDB 264453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264453&o=json
            external_identifier: CBDB:264453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2hYFczFXSMMXJ25M18ZPJD
        status: active
        display_name: 王乂衡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_eiTRpJ-Qex2ZBFdmOxrjaq
        subject_person_id: p_GA2xZvgDBrqeMUNxLWiD1m
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tcnRstaNUF5RMY944rGoMz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e4jh3W1leZT1IZQSSlf8Rw
          claim_id: c_eiTRpJ-Qex2ZBFdmOxrjaq
          source_id: s_a09GoAl402wFBeh6GJR7MV
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200906 王大用）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_a09GoAl402wFBeh6GJR7MV
            source_type: api_record
            title: 中国历代人物传记资料库：王大信（CBDB 264453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264453&o=json
            external_identifier: CBDB:264453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tcnRstaNUF5RMY944rGoMz
        status: active
        display_name: 王大用
        merged_into_person_id: null
---

# 王大信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王大信，明人物。弘治六年進士，籍贯上海。（中国历代人物传记资料库 CBDB 264453） | accepted |
| name.primary | 王大信 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2hYFczFXSMMXJ25M18ZPJD | 王乂衡 | accepted |
| other | p_tcnRstaNUF5RMY944rGoMz | 王大用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大信（CBDB 264453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264453&o=json)
