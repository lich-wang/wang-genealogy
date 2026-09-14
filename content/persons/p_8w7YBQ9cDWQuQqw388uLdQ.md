---
schema: wang-person/v1
id: p_8w7YBQ9cDWQuQqw388uLdQ
status: active
merged_into: null
display_name: 王厚
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CH4JBMD2pNd9KmHXfMz9Gn
        subject_person_id: p_8w7YBQ9cDWQuQqw388uLdQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王厚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TN2HTHo8WnRntMdmGr7gWp
          claim_id: c_CH4JBMD2pNd9KmHXfMz9Gn
          source_id: s_SVEeMBMPQ8EnCR3hasJF6R
          stance: supports
          locator: CBDB:248396
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（248396）
          source: &a1
            id: s_SVEeMBMPQ8EnCR3hasJF6R
            source_type: api_record
            title: 中国历代人物传记资料库：王厚（CBDB 248396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248396&o=json
            external_identifier: CBDB:248396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.153Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N64nufuQjhn31NLzyZWqif
        subject_person_id: p_8w7YBQ9cDWQuQqw388uLdQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王厚，明人物。成化十一年進士，籍贯韓城。（中国历代人物传记资料库 CBDB 248396）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IS95oYjTPd-lc68O9I0y8l
          claim_id: c_N64nufuQjhn31NLzyZWqif
          source_id: s_SVEeMBMPQ8EnCR3hasJF6R
          stance: supports
          locator: CBDB:248396
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EzU-v4ndVsEBDWlYI0LRdK
        subject_person_id: p_EanU2yYn4vz2RKu9z2UR1n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8w7YBQ9cDWQuQqw388uLdQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OL6QAu7nIgd-Gqo0oJ0ttD
          claim_id: c_EzU-v4ndVsEBDWlYI0LRdK
          source_id: s_2QPprWkczTvArgBWDuCH9J
          stance: supports
          locator: CBDB：兄弟 王盛（126711）之父／母 王惠
          quotation: null
          interpretation_note: 由兄弟关系推断：王厚 与 王盛 为同胞（CBDB 记「兄」），王盛 之父／母即 王厚 之父／母。
          source:
            id: s_2QPprWkczTvArgBWDuCH9J
            source_type: api_record
            title: 中国历代人物传记资料库：王厚（CBDB 248396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248396&o=json
            external_identifier: CBDB:248396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EanU2yYn4vz2RKu9z2UR1n
        status: active
        display_name: 王惠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FdemNXuMgE9h68jjgQumPj
        subject_person_id: p_2XRBAyxJK1NzbNZAjugN5q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_8w7YBQ9cDWQuQqw388uLdQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ORzCkpm_2SQVCf2-xW95VN
          claim_id: c_FdemNXuMgE9h68jjgQumPj
          source_id: s_2QPprWkczTvArgBWDuCH9J
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126711 王盛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2QPprWkczTvArgBWDuCH9J
            source_type: api_record
            title: 中国历代人物传记资料库：王厚（CBDB 248396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248396&o=json
            external_identifier: CBDB:248396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2XRBAyxJK1NzbNZAjugN5q
        status: active
        display_name: 王盛
        merged_into_person_id: null
---

# 王厚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王厚 | accepted |
| bio.summary | 王厚，明人物。成化十一年進士，籍贯韓城。（中国历代人物传记资料库 CBDB 248396） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EanU2yYn4vz2RKu9z2UR1n | 王惠 | accepted |
| other | p_2XRBAyxJK1NzbNZAjugN5q | 王盛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王厚（CBDB 248396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248396&o=json)
