---
schema: wang-person/v1
id: p_GuMVVJrYyjeKWA3Y94GdUk
status: active
merged_into: null
display_name: 王承祜
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yTM7UvPt6NeJTWC3G9JQQN
        subject_person_id: p_GuMVVJrYyjeKWA3Y94GdUk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承祜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B5AtWn2itEhUXCsZuw9aCM
          claim_id: c_yTM7UvPt6NeJTWC3G9JQQN
          source_id: s_J8HoMgcp9P8ypb7EYki5M5
          stance: supports
          locator: CBDB:264044
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264044）
          source: &a1
            id: s_J8HoMgcp9P8ypb7EYki5M5
            source_type: api_record
            title: 中国历代人物传记资料库：王承祜（CBDB 264044）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264044&o=json
            external_identifier: CBDB:264044
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.631Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_58hcCHVr79DVuJHYiu8gjS
        subject_person_id: p_GuMVVJrYyjeKWA3Y94GdUk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承祜，明人物。弘治六年進士，籍贯三原，曾任都督府經歷。（中国历代人物传记资料库 CBDB 264044）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X5ce8J9pvLw0r1XwP_RKS0
          claim_id: c_58hcCHVr79DVuJHYiu8gjS
          source_id: s_J8HoMgcp9P8ypb7EYki5M5
          stance: supports
          locator: CBDB:264044
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MG5ECdH-GoztBwC8j60Rq8
        subject_person_id: p_e622FY31yMzCRE9JqUsUSG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GuMVVJrYyjeKWA3Y94GdUk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_61XBo51JUiX-ImladJep2X
          claim_id: c_MG5ECdH-GoztBwC8j60Rq8
          source_id: s_J8HoMgcp9P8ypb7EYki5M5
          stance: supports
          locator: 王文恪公集:三十六卷，29.5a：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_e622FY31yMzCRE9JqUsUSG
        status: active
        display_name: 王恕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承祜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承祜 | accepted |
| bio.summary | 王承祜，明人物。弘治六年進士，籍贯三原，曾任都督府經歷。（中国历代人物传记资料库 CBDB 264044） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_e622FY31yMzCRE9JqUsUSG | 王恕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承祜（CBDB 264044）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264044&o=json)
