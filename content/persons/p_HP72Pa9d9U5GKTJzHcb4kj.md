---
schema: wang-person/v1
id: p_HP72Pa9d9U5GKTJzHcb4kj
status: active
merged_into: null
display_name: 王銘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GZgZ3QzpAtq6WPoD425ZBL
        subject_person_id: p_HP72Pa9d9U5GKTJzHcb4kj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nFkP6kxAe3DpWaAjcDMoKo
          claim_id: c_GZgZ3QzpAtq6WPoD425ZBL
          source_id: s_NiU7yi4HKTrv8H4NTffmpF
          stance: supports
          locator: CBDB:262435
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262435）
          source: &a1
            id: s_NiU7yi4HKTrv8H4NTffmpF
            source_type: api_record
            title: 中国历代人物传记资料库：王銘（CBDB 262435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262435&o=json
            external_identifier: CBDB:262435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.587Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_97hh41qFyywRRryr3dsNog
        subject_person_id: p_HP72Pa9d9U5GKTJzHcb4kj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘，明人物。弘治三年進士，籍贯開州。（中国历代人物传记资料库 CBDB 262435）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8Y198MVEtxUA8Fig3Ra73s
          claim_id: c_97hh41qFyywRRryr3dsNog
          source_id: s_NiU7yi4HKTrv8H4NTffmpF
          stance: supports
          locator: CBDB:262435
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dCKFiKrs4aGPFvkJYcsyJA
        subject_person_id: p_wqJCDPhDuiWCbHqgtTnEn4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HP72Pa9d9U5GKTJzHcb4kj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RgEPOzEFTMZEQhB7YqYoky
          claim_id: c_dCKFiKrs4aGPFvkJYcsyJA
          source_id: s_2LrLnNLPwHOiyLi7rnxdZP
          stance: supports
          locator: CBDB：兄弟 王綸（126788）之父／母 王琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王銘 与 王綸 为同胞（CBDB 记「弟」），王綸 之父／母即 王銘 之父／母。
          source:
            id: s_2LrLnNLPwHOiyLi7rnxdZP
            source_type: api_record
            title: 中国历代人物传记资料库：王銘（CBDB 262435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262435&o=json
            external_identifier: CBDB:262435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wqJCDPhDuiWCbHqgtTnEn4
        status: active
        display_name: 王琮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_7i28uaJ52JmU-TL0jyGseI
        subject_person_id: p_4rX1RM4YkpctdzscWgdRsh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HP72Pa9d9U5GKTJzHcb4kj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aVvO4XLzNtLs-240gor3Hp
          claim_id: c_7i28uaJ52JmU-TL0jyGseI
          source_id: s_2LrLnNLPwHOiyLi7rnxdZP
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126788 王綸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2LrLnNLPwHOiyLi7rnxdZP
            source_type: api_record
            title: 中国历代人物传记资料库：王銘（CBDB 262435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262435&o=json
            external_identifier: CBDB:262435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4rX1RM4YkpctdzscWgdRsh
        status: active
        display_name: 王綸
        merged_into_person_id: null
---

# 王銘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銘 | accepted |
| bio.summary | 王銘，明人物。弘治三年進士，籍贯開州。（中国历代人物传记资料库 CBDB 262435） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wqJCDPhDuiWCbHqgtTnEn4 | 王琮 | accepted |
| other | p_4rX1RM4YkpctdzscWgdRsh | 王綸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銘（CBDB 262435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262435&o=json)
