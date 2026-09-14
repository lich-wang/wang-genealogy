---
schema: wang-person/v1
id: p_XJtMz83Kx9v1KmJBhcX33i
status: active
merged_into: null
display_name: 王黑廝
cbdb_id: 35389
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k5Tvhp9RoPnjWqaZGqMsmz
        subject_person_id: p_XJtMz83Kx9v1KmJBhcX33i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王黑廝，元人物。籍贯華陰，身份为未婚而卒。（中国历代人物传记资料库 CBDB 35389）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_mUrwG9SNnsTfoed1e4dl_P
          claim_id: c_k5Tvhp9RoPnjWqaZGqMsmz
          source_id: s_zCpcsEndN3LTDHD95ABk6w
          stance: supports
          locator: CBDB:35389
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_zCpcsEndN3LTDHD95ABk6w
            source_type: api_record
            title: 中国历代人物传记资料库：王黑廝（CBDB 35389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35389&o=json
            external_identifier: CBDB:35389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_e5BtkqLSLwykC1k3zcrZTa
        subject_person_id: p_XJtMz83Kx9v1KmJBhcX33i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王黑廝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_shXW4yx5xQoxU9GPxNLpGK
          claim_id: c_e5BtkqLSLwykC1k3zcrZTa
          source_id: s_zCpcsEndN3LTDHD95ABk6w
          stance: supports
          locator: CBDB:35389
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 元
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_J50ePFViBFeZnoIbi8gw8r
        subject_person_id: p_6txg6ZLYthq2n2oYYfNbqL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XJtMz83Kx9v1KmJBhcX33i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u_NGz8SDvdWnHV0i5If6ZX
          claim_id: c_J50ePFViBFeZnoIbi8gw8r
          source_id: s_0QgtHc90JfdGPpuyzEIDn3
          stance: supports
          locator: CBDB 亲属：父（KinPerson 35387）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_0QgtHc90JfdGPpuyzEIDn3
            source_type: api_record
            title: 中国历代人物传记资料库：王黑廝（CBDB 35389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35389&o=json
            external_identifier: CBDB:35389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6txg6ZLYthq2n2oYYfNbqL
        status: active
        display_name: 王亨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王黑廝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王黑廝，元人物。籍贯華陰，身份为未婚而卒。（中国历代人物传记资料库 CBDB 35389） | accepted |
| name.primary | 王黑廝 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6txg6ZLYthq2n2oYYfNbqL | 王亨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王黑廝（CBDB 35389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35389&o=json)
