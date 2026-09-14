---
schema: wang-person/v1
id: p_NHWKFSJwMQa18gB2fHSFSP
status: active
merged_into: null
display_name: 王國器
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QMQr2ptYpGPL7bJsEa8JSy
        subject_person_id: p_NHWKFSJwMQa18gB2fHSFSP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國器
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pcgjWmLBGLXjy5wW1cWR5Y
          claim_id: c_QMQr2ptYpGPL7bJsEa8JSy
          source_id: s_NqNq5nyQrYPq4ovN1iXFYF
          stance: supports
          locator: CBDB:300448
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（300448）
          source: &a1
            id: s_NqNq5nyQrYPq4ovN1iXFYF
            source_type: api_record
            title: 中国历代人物传记资料库：王國器（CBDB 300448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300448&o=json
            external_identifier: CBDB:300448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.634Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7Cu5QgETBy2He185WzeEde
        subject_person_id: p_NHWKFSJwMQa18gB2fHSFSP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國器，明人物。嘉靖十七年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 300448）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4j6yZfAEi0Y9i01Psfz0gw
          claim_id: c_7Cu5QgETBy2He185WzeEde
          source_id: s_NqNq5nyQrYPq4ovN1iXFYF
          stance: supports
          locator: CBDB:300448
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hlXkl8ByftC8zJ0dO03cue
        subject_person_id: p_nfDQpFcmyR41HhRtmj92PA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NHWKFSJwMQa18gB2fHSFSP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d07dWT8H7pEpMK6FnnIGsv
          claim_id: c_hlXkl8ByftC8zJ0dO03cue
          source_id: s_y2VrrXeX9L4bjUW0fyhzoC
          stance: supports
          locator: CBDB：兄弟 王國禎（126691）之父／母 王愷
          quotation: null
          interpretation_note: 由兄弟关系推断：王國器 与 王國禎 为同胞（CBDB 记「兄」），王國禎 之父／母即 王國器 之父／母。
          source:
            id: s_y2VrrXeX9L4bjUW0fyhzoC
            source_type: api_record
            title: 中国历代人物传记资料库：王國器（CBDB 300448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300448&o=json
            external_identifier: CBDB:300448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nfDQpFcmyR41HhRtmj92PA
        status: active
        display_name: 王愷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Btzov2tnhuupT5EJY4ku_E
        subject_person_id: p_NHWKFSJwMQa18gB2fHSFSP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VsUEBsvkAXXbA9FWfTN5pA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eAu6tGtfZ6A8Y9aAYWlrxf
          claim_id: c_Btzov2tnhuupT5EJY4ku_E
          source_id: s_y2VrrXeX9L4bjUW0fyhzoC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126691 王國禎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_y2VrrXeX9L4bjUW0fyhzoC
            source_type: api_record
            title: 中国历代人物传记资料库：王國器（CBDB 300448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300448&o=json
            external_identifier: CBDB:300448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VsUEBsvkAXXbA9FWfTN5pA
        status: active
        display_name: 王國禎
        merged_into_person_id: null
---

# 王國器

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國器 | accepted |
| bio.summary | 王國器，明人物。嘉靖十七年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 300448） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nfDQpFcmyR41HhRtmj92PA | 王愷 | accepted |
| other | p_VsUEBsvkAXXbA9FWfTN5pA | 王國禎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國器（CBDB 300448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300448&o=json)
