---
schema: wang-person/v1
id: p_22ryfTxVwfapb1ZMHUyk43
status: active
merged_into: null
display_name: 王象益
cbdb_id: 235538
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v4vBXXhQ6YFLSeQtCQvpEd
        subject_person_id: p_22ryfTxVwfapb1ZMHUyk43
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象益，明人物。籍贯新城，入仕庠生。（中国历代人物传记资料库 CBDB 235538）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_KNhyjDnxvPQ5tiPa6Wj9U1
          claim_id: c_v4vBXXhQ6YFLSeQtCQvpEd
          source_id: s_E8xAhFBUEt6N42cFu8zJSu
          stance: supports
          locator: CBDB:235538
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_E8xAhFBUEt6N42cFu8zJSu
            source_type: api_record
            title: 中国历代人物传记资料库：王象益（CBDB 235538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235538&o=json
            external_identifier: CBDB:235538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CQv3eEscp5P1PQQkgUuEv3
        subject_person_id: p_22ryfTxVwfapb1ZMHUyk43
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象益
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_i3j5L2HHVX3CeM48cKPfVo
          claim_id: c_CQv3eEscp5P1PQQkgUuEv3
          source_id: s_E8xAhFBUEt6N42cFu8zJSu
          stance: supports
          locator: CBDB:235538
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UdG-chKh6MpFckaedZnEbr
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_22ryfTxVwfapb1ZMHUyk43
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rapkrEfZdBG5bxbNuGaC_p
          claim_id: c_UdG-chKh6MpFckaedZnEbr
          source_id: s_XMOQ0kE35rHvK5SaAD3Ph5
          stance: supports
          locator: CBDB：兄弟 王象春（126731）之父／母 王之猷
          quotation: null
          interpretation_note: 由兄弟关系推断：王象益 与 王象春 为同胞（CBDB 记「弟」），王象春 之父／母即 王象益 之父／母。
          source:
            id: s_XMOQ0kE35rHvK5SaAD3Ph5
            source_type: api_record
            title: 中国历代人物传记资料库：王象益（CBDB 235538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235538&o=json
            external_identifier: CBDB:235538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5r1wESpKqnWgbhR5AChbjE
        status: active
        display_name: 王之猷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_f1lOpm8ubRKfUUSgjp0ACv
        subject_person_id: p_1vwHH8EjSEP1q2oifpwF8P
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_22ryfTxVwfapb1ZMHUyk43
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__ZnFRXweumtEaLDf3RA3qV
          claim_id: c_f1lOpm8ubRKfUUSgjp0ACv
          source_id: s_XMOQ0kE35rHvK5SaAD3Ph5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126731 王象春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XMOQ0kE35rHvK5SaAD3Ph5
            source_type: api_record
            title: 中国历代人物传记资料库：王象益（CBDB 235538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235538&o=json
            external_identifier: CBDB:235538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1vwHH8EjSEP1q2oifpwF8P
        status: active
        display_name: 王象春
        merged_into_person_id: null
---

# 王象益

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王象益，明人物。籍贯新城，入仕庠生。（中国历代人物传记资料库 CBDB 235538） | accepted |
| name.primary | 王象益 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5r1wESpKqnWgbhR5AChbjE | 王之猷 | accepted |
| other | p_1vwHH8EjSEP1q2oifpwF8P | 王象春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王象益（CBDB 235538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235538&o=json)
