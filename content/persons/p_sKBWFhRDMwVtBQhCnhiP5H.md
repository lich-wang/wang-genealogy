---
schema: wang-person/v1
id: p_sKBWFhRDMwVtBQhCnhiP5H
status: active
merged_into: null
display_name: 王績燦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XEGuQt9D3ZbXYA943rrXrh
        subject_person_id: p_sKBWFhRDMwVtBQhCnhiP5H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王績燦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sBAKRewxKxsWAqa5J9yW7L
          claim_id: c_XEGuQt9D3ZbXYA943rrXrh
          source_id: s_7FhrAXbKnoB42gNH3QWw1v
          stance: supports
          locator: CBDB:126856
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126856）
          source: &a1
            id: s_7FhrAXbKnoB42gNH3QWw1v
            source_type: api_record
            title: 中国历代人物传记资料库：王績燦（CBDB 126856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126856&o=json
            external_identifier: CBDB:126856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.262Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_564eNNyaL8CZAq5YxXoMhd
        subject_person_id: p_sKBWFhRDMwVtBQhCnhiP5H
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
        - id: cs_Ss8a5pthCkYS7s6aDKymFk
          claim_id: c_564eNNyaL8CZAq5YxXoMhd
          source_id: s_7FhrAXbKnoB42gNH3QWw1v
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_f2K4gZ6mbYz_VWU8ZFYI9M
        subject_person_id: p_sKBWFhRDMwVtBQhCnhiP5H
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kWSA4pVK578quoZM6ya5Ji
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZT3uJ-ZISrpobRG_tZ6eBB
          claim_id: c_f2K4gZ6mbYz_VWU8ZFYI9M
          source_id: s_VJxwAXaGGds626GHJYT2EA
          stance: supports
          locator: 江西通志，Igid=1197629：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VJxwAXaGGds626GHJYT2EA
            source_type: api_record
            title: 中国历代人物传记资料库：王其宖（CBDB 556806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556806&o=json
            external_identifier: CBDB:556806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.531Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kWSA4pVK578quoZM6ya5Ji
        status: active
        display_name: 王其宖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王績燦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王績燦 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kWSA4pVK578quoZM6ya5Ji | 王其宖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王績燦（CBDB 126856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126856&o=json)
- [中国历代人物传记资料库：王其宖（CBDB 556806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556806&o=json)
