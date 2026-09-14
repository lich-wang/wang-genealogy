---
schema: wang-person/v1
id: p_aAw8QRKUDP46mUEr1nQMJg
status: active
merged_into: null
display_name: 王耳
cbdb_id: 221465
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hx3SsmVeKcvqVgJmKoAtNJ
        subject_person_id: p_aAw8QRKUDP46mUEr1nQMJg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耳，明人物。萬曆八年進士，籍贯解州。（中国历代人物传记资料库 CBDB 221465）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Y4GeMPt8v65PSelYQM9ncE
          claim_id: c_hx3SsmVeKcvqVgJmKoAtNJ
          source_id: s_GHAHnUJqvMhotNFUAfLf3P
          stance: supports
          locator: CBDB:221465
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GHAHnUJqvMhotNFUAfLf3P
            source_type: api_record
            title: 中国历代人物传记资料库：王耳（CBDB 221465）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221465&o=json
            external_identifier: CBDB:221465
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xNcrrC75yyGHCNqykCejZy
        subject_person_id: p_aAw8QRKUDP46mUEr1nQMJg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7uy1H4zLeEwn6rYkKbwtvM
          claim_id: c_xNcrrC75yyGHCNqykCejZy
          source_id: s_GHAHnUJqvMhotNFUAfLf3P
          stance: supports
          locator: CBDB:221465
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TD8Qm9Hnk7RJbIBo_2lvhR
        subject_person_id: p_dr5THMYZGs7zW675Bw8A4u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aAw8QRKUDP46mUEr1nQMJg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uB4OvF7NQtonp4g0fiIpmp
          claim_id: c_TD8Qm9Hnk7RJbIBo_2lvhR
          source_id: s_jakG0aob2reRYpGLXZxVNZ
          stance: supports
          locator: CBDB：兄弟 王明（126580）之父／母 王玉圭
          quotation: null
          interpretation_note: 由兄弟关系推断：王耳 与 王明 为同胞（CBDB 记「弟」），王明 之父／母即 王耳 之父／母。
          source:
            id: s_jakG0aob2reRYpGLXZxVNZ
            source_type: api_record
            title: 中国历代人物传记资料库：王耳（CBDB 221465）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221465&o=json
            external_identifier: CBDB:221465
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dr5THMYZGs7zW675Bw8A4u
        status: active
        display_name: 王玉圭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_DeHBzyCeNTBbsY2Kkj_4c9
        subject_person_id: p_aAw8QRKUDP46mUEr1nQMJg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cdvLWdUT8xwQ2GV4vwbiSj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0q2CJ78QC4CyJD2Mne9L72
          claim_id: c_DeHBzyCeNTBbsY2Kkj_4c9
          source_id: s_jakG0aob2reRYpGLXZxVNZ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126580 王明）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jakG0aob2reRYpGLXZxVNZ
            source_type: api_record
            title: 中国历代人物传记资料库：王耳（CBDB 221465）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221465&o=json
            external_identifier: CBDB:221465
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cdvLWdUT8xwQ2GV4vwbiSj
        status: active
        display_name: 王明
        merged_into_person_id: null
---

# 王耳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王耳，明人物。萬曆八年進士，籍贯解州。（中国历代人物传记资料库 CBDB 221465） | accepted |
| name.primary | 王耳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dr5THMYZGs7zW675Bw8A4u | 王玉圭 | accepted |
| other | p_cdvLWdUT8xwQ2GV4vwbiSj | 王明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王耳（CBDB 221465）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221465&o=json)
