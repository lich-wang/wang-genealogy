---
schema: wang-person/v1
id: p_oMyD8GQ5uc9GQ3KM4kCBFG
status: active
merged_into: null
display_name: 王伯深
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CgxApZGCQL374TejAnCGLc
        subject_person_id: p_oMyD8GQ5uc9GQ3KM4kCBFG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯深
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NV4SHKPHL8goVpF2DaYLLa
          claim_id: c_CgxApZGCQL374TejAnCGLc
          source_id: s_Zjnahwba51MNsFAQx8ovFo
          stance: supports
          locator: CBDB:545727
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（545727）
          source: &a1
            id: s_Zjnahwba51MNsFAQx8ovFo
            source_type: api_record
            title: 中国历代人物传记资料库：王伯深（CBDB 545727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545727&o=json
            external_identifier: CBDB:545727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TFQV7WJQuMgS3do4jEUWMb
        subject_person_id: p_oMyD8GQ5uc9GQ3KM4kCBFG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2MWSf7zyuFR3SBmjk6WJ1g
          claim_id: c_TFQV7WJQuMgS3do4jEUWMb
          source_id: s_Zjnahwba51MNsFAQx8ovFo
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

# 王伯深

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯深 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伯深（CBDB 545727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545727&o=json)
