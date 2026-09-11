---
schema: wang-person/v1
id: p_DXynKuJYoaBATs8tkwXjSx
status: active
merged_into: null
display_name: 王遜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qFbSLmQya4sD9ucMek3kCp
        subject_person_id: p_DXynKuJYoaBATs8tkwXjSx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h5heqqjdYM27BRP65jVSx9
          claim_id: c_qFbSLmQya4sD9ucMek3kCp
          source_id: s_ECAvRrDP6gpYPDCyDudoZ4
          stance: supports
          locator: CBDB:287771
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287771）
          source: &a1
            id: s_ECAvRrDP6gpYPDCyDudoZ4
            source_type: api_record
            title: 中国历代人物传记资料库：王遜（CBDB 287771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287771&o=json
            external_identifier: CBDB:287771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.267Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Eagtzr9MvT2PtPCRkPMkcZ
        subject_person_id: p_DXynKuJYoaBATs8tkwXjSx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MDCgqh3cp4db3SXdUHNRgQ
          claim_id: c_Eagtzr9MvT2PtPCRkPMkcZ
          source_id: s_ECAvRrDP6gpYPDCyDudoZ4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
  descendants:
    - claim:
        id: c_U1NCCEq6FWNlPx2r0oIzD3
        subject_person_id: p_DXynKuJYoaBATs8tkwXjSx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bzVqsVzDtPALBqgyiMTGcs
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IUSkOVsNFylnHVkmHh96QF
          claim_id: c_U1NCCEq6FWNlPx2r0oIzD3
          source_id: s_CqGjwbz29mF71uer51qoya
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第四十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CqGjwbz29mF71uer51qoya
            source_type: api_record
            title: 中国历代人物传记资料库：王表（CBDB 126567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126567&o=json
            external_identifier: CBDB:126567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.029Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bzVqsVzDtPALBqgyiMTGcs
        status: active
        display_name: 王表
        merged_into_person_id: null
  other: []
---

# 王遜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遜 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_bzVqsVzDtPALBqgyiMTGcs | 王表 | accepted |

## 外部来源

- [中国历代人物传记资料库：王表（CBDB 126567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126567&o=json)
- [中国历代人物传记资料库：王遜（CBDB 287771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287771&o=json)
