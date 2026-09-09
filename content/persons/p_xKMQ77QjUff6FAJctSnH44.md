---
schema: wang-person/v1
id: p_xKMQ77QjUff6FAJctSnH44
status: active
merged_into: null
display_name: 王希紱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SoTnp67PRJuy75sRQdRPcn
        subject_person_id: p_xKMQ77QjUff6FAJctSnH44
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希紱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_msLJv391FrVW3ytqK4Ff2s
          claim_id: c_SoTnp67PRJuy75sRQdRPcn
          source_id: s_4wEuYTdyLyZ58jEwPthnaa
          stance: supports
          locator: CBDB:637393
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637393）
          source: &a1
            id: s_4wEuYTdyLyZ58jEwPthnaa
            source_type: api_record
            title: 中国历代人物传记资料库：王希紱（CBDB 637393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637393&o=json
            external_identifier: CBDB:637393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.304Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V3zckQfHFVu2QKEiHnnpqu
        subject_person_id: p_xKMQ77QjUff6FAJctSnH44
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DRuUV7r2pCs74yRPWvnQ28
          claim_id: c_V3zckQfHFVu2QKEiHnnpqu
          source_id: s_4wEuYTdyLyZ58jEwPthnaa
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
  descendants: []
  other: []
---

# 王希紱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希紱 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希紱（CBDB 637393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637393&o=json)
