---
schema: wang-person/v1
id: p_QcyE2kVTYfXqZATPNPBHVr
status: active
merged_into: null
display_name: 王之翰
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xBGcrwYSCQWDwc7D8XLUeu
        subject_person_id: p_QcyE2kVTYfXqZATPNPBHVr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c2Y13iyBKSbK3Fk4V2E65t
          claim_id: c_xBGcrwYSCQWDwc7D8XLUeu
          source_id: s_BcRL6g68wsVN6W56q3NjWZ
          stance: supports
          locator: CBDB:328693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328693）
          source: &a1
            id: s_BcRL6g68wsVN6W56q3NjWZ
            source_type: api_record
            title: 中国历代人物传记资料库：王之翰（CBDB 328693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328693&o=json
            external_identifier: CBDB:328693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.310Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_23LwVAtGKaEdmNzc6x8n3X
        subject_person_id: p_QcyE2kVTYfXqZATPNPBHVr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之翰，明人物。嘉靖四十一年進士，籍贯新城，入仕監生。（中国历代人物传记资料库 CBDB 328693）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u1S7jcp08NBrzJtkCs4xC4
          claim_id: c_23LwVAtGKaEdmNzc6x8n3X
          source_id: s_BcRL6g68wsVN6W56q3NjWZ
          stance: supports
          locator: CBDB:328693
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_74Ox5BIFbPQcgoH1inBSel
        subject_person_id: p_2XaF6KrMwGSDeaU76DAGrz
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_QcyE2kVTYfXqZATPNPBHVr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gwd4gp6bEYrJ8980iuNgPI
          claim_id: c_74Ox5BIFbPQcgoH1inBSel
          source_id: s_xNDMuZplUeB5j2JspHkHm5
          stance: supports
          locator: CBDB：兄弟 王之垣（126464）之父／母 王重光
          quotation: null
          interpretation_note: 由兄弟关系推断：王之翰 与 王之垣 为同胞（CBDB 记「弟」），王之垣 之父／母即 王之翰 之父／母。
          source:
            id: s_xNDMuZplUeB5j2JspHkHm5
            source_type: api_record
            title: 中国历代人物传记资料库：王之翰（CBDB 328693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328693&o=json
            external_identifier: CBDB:328693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2XaF6KrMwGSDeaU76DAGrz
        status: active
        display_name: 王重光
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_I-CvXFok3ExvWwqY0YJpWE
        subject_person_id: p_5yFg7DjLcFzFQKDBRDnwdx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QcyE2kVTYfXqZATPNPBHVr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p_Ia49jFsRbN2pVhBIi4qz
          claim_id: c_I-CvXFok3ExvWwqY0YJpWE
          source_id: s_xNDMuZplUeB5j2JspHkHm5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126464 王之垣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xNDMuZplUeB5j2JspHkHm5
            source_type: api_record
            title: 中国历代人物传记资料库：王之翰（CBDB 328693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328693&o=json
            external_identifier: CBDB:328693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5yFg7DjLcFzFQKDBRDnwdx
        status: active
        display_name: 王之垣
        merged_into_person_id: null
---

# 王之翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之翰 | accepted |
| bio.summary | 王之翰，明人物。嘉靖四十一年進士，籍贯新城，入仕監生。（中国历代人物传记资料库 CBDB 328693） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2XaF6KrMwGSDeaU76DAGrz | 王重光 | accepted |
| other | p_5yFg7DjLcFzFQKDBRDnwdx | 王之垣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之翰（CBDB 328693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328693&o=json)
