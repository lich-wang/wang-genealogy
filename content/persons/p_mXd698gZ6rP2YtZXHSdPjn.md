---
schema: wang-person/v1
id: p_mXd698gZ6rP2YtZXHSdPjn
status: active
merged_into: null
display_name: 王應試
cbdb_id: 297739
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8XJqT2o9F3RuFXKg9P9Pz4
        subject_person_id: p_mXd698gZ6rP2YtZXHSdPjn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王應試，明人物。嘉靖十四年進士，籍贯蒲州，入仕貢生: 歲貢、常貢、挨貢，曾任典史、主簿。（中国历代人物传记资料库 CBDB 297739）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Xl5oi1HUz2muhRwFW_VkPh
          claim_id: c_8XJqT2o9F3RuFXKg9P9Pz4
          source_id: s_quTyS2L7MKGzpa7dqhBVsL
          stance: supports
          locator: CBDB:297739
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_quTyS2L7MKGzpa7dqhBVsL
            source_type: api_record
            title: 中国历代人物传记资料库：王應試（CBDB 297739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297739&o=json
            external_identifier: CBDB:297739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vC6bQB4xEaSnX5FmwFh4dw
        subject_person_id: p_mXd698gZ6rP2YtZXHSdPjn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應試
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_n7AD6Ei3ngJR69KgrqKrLt
          claim_id: c_vC6bQB4xEaSnX5FmwFh4dw
          source_id: s_quTyS2L7MKGzpa7dqhBVsL
          stance: supports
          locator: CBDB:297739
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NNXtIxgImUPPity1SUVHJx
        subject_person_id: p_BePMtcQN2evcZUVaYKvcA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mXd698gZ6rP2YtZXHSdPjn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C4c7WcI7X0QmHIwuSy77dR
          claim_id: c_NNXtIxgImUPPity1SUVHJx
          source_id: s_3-wf0XcXedPrByssMjWQaP
          stance: supports
          locator: CBDB：兄弟 王應期（202976）之父／母 王政
          quotation: null
          interpretation_note: 由兄弟关系推断：王應試 与 王應期 为同胞（CBDB 记「兄」），王應期 之父／母即 王應試 之父／母。
          source:
            id: s_3-wf0XcXedPrByssMjWQaP
            source_type: api_record
            title: 中国历代人物传记资料库：王應試（CBDB 297739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297739&o=json
            external_identifier: CBDB:297739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BePMtcQN2evcZUVaYKvcA9
        status: active
        display_name: 王政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_3mSr_WQWFJJ6bY_B09ropV
        subject_person_id: p_7wzTGA3qgQYcchPFctGbYw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mXd698gZ6rP2YtZXHSdPjn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XrwXKcR7G9RuUmMmstEbbG
          claim_id: c_3mSr_WQWFJJ6bY_B09ropV
          source_id: s_3-wf0XcXedPrByssMjWQaP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202976 王應期）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3-wf0XcXedPrByssMjWQaP
            source_type: api_record
            title: 中国历代人物传记资料库：王應試（CBDB 297739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297739&o=json
            external_identifier: CBDB:297739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7wzTGA3qgQYcchPFctGbYw
        status: active
        display_name: 王應期
        merged_into_person_id: null
---

# 王應試

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王應試，明人物。嘉靖十四年進士，籍贯蒲州，入仕貢生: 歲貢、常貢、挨貢，曾任典史、主簿。（中国历代人物传记资料库 CBDB 297739） | accepted |
| name.primary | 王應試 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BePMtcQN2evcZUVaYKvcA9 | 王政 | accepted |
| other | p_7wzTGA3qgQYcchPFctGbYw | 王應期 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應試（CBDB 297739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297739&o=json)
