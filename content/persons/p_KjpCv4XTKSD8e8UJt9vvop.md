---
schema: wang-person/v1
id: p_KjpCv4XTKSD8e8UJt9vvop
status: active
merged_into: null
display_name: 王宗瓘
cbdb_id: 30555
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nAvMKQ2GQ2a5siJNBWZC5P
        subject_person_id: p_KjpCv4XTKSD8e8UJt9vvop
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗瓘，宋人物。籍贯洛陽，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 30555）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_YrFEaWaEYqU-SyD7ginNDi
          claim_id: c_nAvMKQ2GQ2a5siJNBWZC5P
          source_id: s_jPfEkve9cKjKrjQVtCE3py
          stance: supports
          locator: CBDB:30555
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jPfEkve9cKjKrjQVtCE3py
            source_type: api_record
            title: 中国历代人物传记资料库：王宗瓘（CBDB 30555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30555&o=json
            external_identifier: CBDB:30555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UPLDZxboARrYbGz9vYToJr
        subject_person_id: p_KjpCv4XTKSD8e8UJt9vvop
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗瓘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EKASLupvqQtPXDNDLNF8Mk
          claim_id: c_UPLDZxboARrYbGz9vYToJr
          source_id: s_jPfEkve9cKjKrjQVtCE3py
          stance: supports
          locator: CBDB:30555
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7U_yQqT2zWvg7lCqgp5Ijk
        subject_person_id: p_j7iPUKCmtFNavh7UEFUMUs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KjpCv4XTKSD8e8UJt9vvop
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LXmwdgG1TnV_3CXGdGpV4j
          claim_id: c_7U_yQqT2zWvg7lCqgp5Ijk
          source_id: s_38boZDntWojT3_9GVkmIwB
          stance: supports
          locator: CBDB 亲属：父（KinPerson 7078）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_38boZDntWojT3_9GVkmIwB
            source_type: api_record
            title: 中国历代人物传记资料库：王宗瓘（CBDB 30555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30555&o=json
            external_identifier: CBDB:30555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j7iPUKCmtFNavh7UEFUMUs
        status: active
        display_name: 王正中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗瓘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗瓘，宋人物。籍贯洛陽，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 30555） | accepted |
| name.primary | 王宗瓘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_j7iPUKCmtFNavh7UEFUMUs | 王正中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗瓘（CBDB 30555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30555&o=json)
