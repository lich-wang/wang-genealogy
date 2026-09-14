---
schema: wang-person/v1
id: p_ovu25tB4PWCdpNaQy1TznJ
status: active
merged_into: null
display_name: 王壃
cbdb_id: 292176
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4AjkkJHD2j818bZPqDEaku
        subject_person_id: p_ovu25tB4PWCdpNaQy1TznJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壃，明人物。嘉靖十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 292176）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_vtaX7wr1W_OWglP7tMYWkN
          claim_id: c_4AjkkJHD2j818bZPqDEaku
          source_id: s_LNNp2FoGG4DirFiyocvQ34
          stance: supports
          locator: CBDB:292176
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LNNp2FoGG4DirFiyocvQ34
            source_type: api_record
            title: 中国历代人物传记资料库：王壃（CBDB 292176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292176&o=json
            external_identifier: CBDB:292176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q1tqatTiRCYf93CrkxCqVz
        subject_person_id: p_ovu25tB4PWCdpNaQy1TznJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pXCie1mYEP9y34WACAB45Q
          claim_id: c_Q1tqatTiRCYf93CrkxCqVz
          source_id: s_LNNp2FoGG4DirFiyocvQ34
          stance: supports
          locator: CBDB:292176
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XOJlfSVWHjDOTLZYEyeCMd
        subject_person_id: p_AjJ9D9hYYBcRjzGCjrMcoe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ovu25tB4PWCdpNaQy1TznJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kNy8Sg9jveGD8jGJ2X0pyr
          claim_id: c_XOJlfSVWHjDOTLZYEyeCMd
          source_id: s_ze2kOCczYAX41NiKiTj-FD
          stance: supports
          locator: CBDB：兄弟 王繼宗（126879）之父／母 王汾
          quotation: null
          interpretation_note: 由兄弟关系推断：王壃 与 王繼宗 为同胞（CBDB 记「兄」），王繼宗 之父／母即 王壃 之父／母。
          source:
            id: s_ze2kOCczYAX41NiKiTj-FD
            source_type: api_record
            title: 中国历代人物传记资料库：王壃（CBDB 292176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292176&o=json
            external_identifier: CBDB:292176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AjJ9D9hYYBcRjzGCjrMcoe
        status: active
        display_name: 王汾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_WnlN5RrMj2lq55Q4QMsNoj
        subject_person_id: p_ovu25tB4PWCdpNaQy1TznJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oOID4bvuLRpuBn0SskLGnp
          claim_id: c_WnlN5RrMj2lq55Q4QMsNoj
          source_id: s_ze2kOCczYAX41NiKiTj-FD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126879 王繼宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ze2kOCczYAX41NiKiTj-FD
            source_type: api_record
            title: 中国历代人物传记资料库：王壃（CBDB 292176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292176&o=json
            external_identifier: CBDB:292176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        status: active
        display_name: 王繼宗
        merged_into_person_id: null
---

# 王壃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王壃，明人物。嘉靖十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 292176） | accepted |
| name.primary | 王壃 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AjJ9D9hYYBcRjzGCjrMcoe | 王汾 | accepted |
| other | p_tJDfPMXaXoCJ7dnxXR4ZsL | 王繼宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王壃（CBDB 292176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292176&o=json)
