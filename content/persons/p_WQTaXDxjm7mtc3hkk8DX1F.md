---
schema: wang-person/v1
id: p_WQTaXDxjm7mtc3hkk8DX1F
status: active
merged_into: null
display_name: 王恕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K94FQmxSL9FL1EYuzV7Kwq
        subject_person_id: p_WQTaXDxjm7mtc3hkk8DX1F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MZMuTheE8Qzq16NoDpQanS
          claim_id: c_K94FQmxSL9FL1EYuzV7Kwq
          source_id: s_EApbRiWAEcHEhQFeYiiNXE
          stance: supports
          locator: CBDB:573433
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573433）
          source: &a1
            id: s_EApbRiWAEcHEhQFeYiiNXE
            source_type: api_record
            title: 中国历代人物传记资料库：王恕（CBDB 573433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573433&o=json
            external_identifier: CBDB:573433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6zBSS7Ys6bvdDXcjBMjwmo
        subject_person_id: p_WQTaXDxjm7mtc3hkk8DX1F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕，宋人物。入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 573433）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8G4HnfqzsdZBrV-mMEtoNS
          claim_id: c_6zBSS7Ys6bvdDXcjBMjwmo
          source_id: s_EApbRiWAEcHEhQFeYiiNXE
          stance: supports
          locator: CBDB:573433
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

# 王恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恕 | accepted |
| bio.summary | 王恕，宋人物。入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 573433） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恕（CBDB 573433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573433&o=json)
