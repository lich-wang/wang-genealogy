---
schema: wang-person/v1
id: p_NB2GKmy9cgJWUP7EjKEDV3
status: active
merged_into: null
display_name: 王忱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NP2ok5z4YojJwsoCoo9VxM
        subject_person_id: p_NB2GKmy9cgJWUP7EjKEDV3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F5Tq3t5H7hMNCkz4qLKeaE
          claim_id: c_NP2ok5z4YojJwsoCoo9VxM
          source_id: s_Qpv3e4RnQXbJp7Zd1Q63eU
          stance: supports
          locator: CBDB:698096
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698096）
          source: &a1
            id: s_Qpv3e4RnQXbJp7Zd1Q63eU
            source_type: api_record
            title: 中国历代人物传记资料库：王忱（CBDB 698096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698096&o=json
            external_identifier: CBDB:698096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.737Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nPoVwAkziG231MNL8x7F3D
        subject_person_id: p_NB2GKmy9cgJWUP7EjKEDV3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忱，明人物。籍贯武進，身份为收徒講學、史學家，入仕鄉賓。（中国历代人物传记资料库 CBDB 698096）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oe1ZjgEgvk0n815OGMt_Do
          claim_id: c_nPoVwAkziG231MNL8x7F3D
          source_id: s_Qpv3e4RnQXbJp7Zd1Q63eU
          stance: supports
          locator: CBDB:698096
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  descendants: []
  other: []
---

# 王忱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忱 | accepted |
| bio.summary | 王忱，明人物。籍贯武進，身份为收徒講學、史學家，入仕鄉賓。（中国历代人物传记资料库 CBDB 698096） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王忱（CBDB 698096）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698096&o=json)
