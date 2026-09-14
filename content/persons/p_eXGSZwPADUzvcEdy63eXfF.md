---
schema: wang-person/v1
id: p_eXGSZwPADUzvcEdy63eXfF
status: active
merged_into: null
display_name: 王錡
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DvF3u9DJpRuEZzmEUkN8cN
        subject_person_id: p_eXGSZwPADUzvcEdy63eXfF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6vw6haBYamc2DKTNvDvTYx
          claim_id: c_DvF3u9DJpRuEZzmEUkN8cN
          source_id: s_3L9qpDZYBLrpHdE9ZVgziq
          stance: supports
          locator: CBDB:297199
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297199）
          source: &a1
            id: s_3L9qpDZYBLrpHdE9ZVgziq
            source_type: api_record
            title: 中国历代人物传记资料库：王錡（CBDB 297199）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297199&o=json
            external_identifier: CBDB:297199
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rCxRQJKXWRZ5Xt3ygr7Z1m
        subject_person_id: p_eXGSZwPADUzvcEdy63eXfF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錡，明人物。嘉靖十四年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 297199）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OHbkvgCLfJON6G0d9USjho
          claim_id: c_rCxRQJKXWRZ5Xt3ygr7Z1m
          source_id: s_3L9qpDZYBLrpHdE9ZVgziq
          stance: supports
          locator: CBDB:297199
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_C58rq78_zjlNc86wC8dE99
        subject_person_id: p_EENMQg8ZujQT1unQPpMBb1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eXGSZwPADUzvcEdy63eXfF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dl8Xr4WWT7p8WRLwaw7px1
          claim_id: c_C58rq78_zjlNc86wC8dE99
          source_id: s_a4VULUqWzpyXJdZ1eHimkk
          stance: supports
          locator: CBDB：兄弟 王鏜（202946）之父／母 王介
          quotation: null
          interpretation_note: 由兄弟关系推断：王錡 与 王鏜 为同胞（CBDB 记「弟」），王鏜 之父／母即 王錡 之父／母。
          source:
            id: s_a4VULUqWzpyXJdZ1eHimkk
            source_type: api_record
            title: 中国历代人物传记资料库：王錡（CBDB 297199）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297199&o=json
            external_identifier: CBDB:297199
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EENMQg8ZujQT1unQPpMBb1
        status: active
        display_name: 王介
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_IO2DPWj5n6xPXiMPotN3lH
        subject_person_id: p_eXGSZwPADUzvcEdy63eXfF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ejkhqRyi6zguVhFhs63Ax7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EWebb3qekFAPVJ_RK-xGVT
          claim_id: c_IO2DPWj5n6xPXiMPotN3lH
          source_id: s_a4VULUqWzpyXJdZ1eHimkk
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202946 王鏜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_a4VULUqWzpyXJdZ1eHimkk
            source_type: api_record
            title: 中国历代人物传记资料库：王錡（CBDB 297199）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297199&o=json
            external_identifier: CBDB:297199
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ejkhqRyi6zguVhFhs63Ax7
        status: active
        display_name: 王鏜
        merged_into_person_id: null
---

# 王錡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錡 | accepted |
| bio.summary | 王錡，明人物。嘉靖十四年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 297199） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EENMQg8ZujQT1unQPpMBb1 | 王介 | accepted |
| other | p_ejkhqRyi6zguVhFhs63Ax7 | 王鏜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王錡（CBDB 297199）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297199&o=json)
