---
schema: wang-person/v1
id: p_N7VBnd1rLo11t3TyKqEwHJ
status: active
merged_into: null
display_name: 王朝
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QASZKgEBiuwjLTqQsXBRAA
        subject_person_id: p_N7VBnd1rLo11t3TyKqEwHJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6R9nMaMVe9eGVeDxZibho1
          claim_id: c_QASZKgEBiuwjLTqQsXBRAA
          source_id: s_TxQBE296A438H5VWAs7GhC
          stance: supports
          locator: CBDB:100831
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100831）
          source: &a1
            id: s_TxQBE296A438H5VWAs7GhC
            source_type: api_record
            title: 中国历代人物传记资料库：王朝（CBDB 100831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100831&o=json
            external_identifier: CBDB:100831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.483Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9PwVDj9dgns1sQb6iFGuiw
        subject_person_id: p_N7VBnd1rLo11t3TyKqEwHJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝，元人物。籍贯莆田，身份为落第士人、鄉先生。（中国历代人物传记资料库 CBDB 100831）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eg5vs6vD1k_GpbCtv2tS0Q
          claim_id: c_9PwVDj9dgns1sQb6iFGuiw
          source_id: s_TxQBE296A438H5VWAs7GhC
          stance: supports
          locator: CBDB:100831
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_fgmv1IK7okXTbQtcTyQBmE
        subject_person_id: p_4nxdisYFMVZT8MULy4VjHK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_N7VBnd1rLo11t3TyKqEwHJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_odbPcbhmvvrpa25GAQiUzt
          claim_id: c_fgmv1IK7okXTbQtcTyQBmE
          source_id: s_3ULWcd6MyXlA_8e4WL2SL4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 100831 王朝）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3ULWcd6MyXlA_8e4WL2SL4
            source_type: api_record
            title: 中国历代人物传记资料库：王公穀（CBDB 101072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101072&o=json
            external_identifier: CBDB:101072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4nxdisYFMVZT8MULy4VjHK
        status: active
        display_name: 王公穀
        merged_into_person_id: null
---

# 王朝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝 | accepted |
| bio.summary | 王朝，元人物。籍贯莆田，身份为落第士人、鄉先生。（中国历代人物传记资料库 CBDB 100831） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_4nxdisYFMVZT8MULy4VjHK | 王公穀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝（CBDB 100831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100831&o=json)
- [中国历代人物传记资料库：王公穀（CBDB 101072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101072&o=json)
