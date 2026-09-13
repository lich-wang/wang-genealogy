---
schema: wang-person/v1
id: p_DoQDBLeafz9HbWNSCrxf7u
status: active
merged_into: null
display_name: 王元恪
cbdb_id: 150404
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h8tXSfbuFtk1BuqUxwUJvw
        subject_person_id: p_DoQDBLeafz9HbWNSCrxf7u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元恪，唐人物。籍贯晉陽。（中国历代人物传记资料库 CBDB 150404）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_64smekMBEvGsVdU87xjUcw
          claim_id: c_h8tXSfbuFtk1BuqUxwUJvw
          source_id: s_5Js8BBCy9K8GMBHAW8BNQ1
          stance: supports
          locator: CBDB:150404
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5Js8BBCy9K8GMBHAW8BNQ1
            source_type: api_record
            title: 中国历代人物传记资料库：王元恪（CBDB 150404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150404&o=json
            external_identifier: CBDB:150404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xHx6rJbB3BJo26jHZQ7A6R
        subject_person_id: p_DoQDBLeafz9HbWNSCrxf7u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元恪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2ScEpvbvK8LRsXHdkQLHKy
          claim_id: c_xHx6rJbB3BJo26jHZQ7A6R
          source_id: s_5Js8BBCy9K8GMBHAW8BNQ1
          stance: supports
          locator: CBDB:150404
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oQCGTprrZODjRs2iqJeJaD
        subject_person_id: p_NYf4fXj4n829cEBYm96jNc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DoQDBLeafz9HbWNSCrxf7u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PuOGGGQdJ59A7H7CVkb3mh
          claim_id: c_oQCGTprrZODjRs2iqJeJaD
          source_id: s_44DPacPNBUAQJBjuRadXdB
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 28：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_44DPacPNBUAQJBjuRadXdB
            source_type: api_record
            title: 中国历代人物传记资料库：王養（CBDB 140133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140133&o=json
            external_identifier: CBDB:140133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.471Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NYf4fXj4n829cEBYm96jNc
        status: active
        display_name: 王養
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元恪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元恪，唐人物。籍贯晉陽。（中国历代人物传记资料库 CBDB 150404） | accepted |
| name.primary | 王元恪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NYf4fXj4n829cEBYm96jNc | 王養 | accepted |

## 外部来源

- [中国历代人物传记资料库：王養（CBDB 140133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140133&o=json)
- [中国历代人物传记资料库：王元恪（CBDB 150404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150404&o=json)
