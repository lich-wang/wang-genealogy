---
schema: wang-person/v1
id: p_r8xah7hmitHQQuok4KQCFv
status: active
merged_into: null
display_name: 王晉康
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3v3eZ1Zj3WyMTR25gje6DK
        subject_person_id: p_r8xah7hmitHQQuok4KQCFv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉康
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oPuLfeSMK1h8Lw6NgTRRpq
          claim_id: c_3v3eZ1Zj3WyMTR25gje6DK
          source_id: s_UbxFkytrgNggne7FhswarT
          stance: supports
          locator: CBDB:638463
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638463）
          source: &a1
            id: s_UbxFkytrgNggne7FhswarT
            source_type: api_record
            title: 中国历代人物传记资料库：王晉康（CBDB 638463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638463&o=json
            external_identifier: CBDB:638463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.689Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BK5KR7ReA2tCU2AoRcGe83
        subject_person_id: p_r8xah7hmitHQQuok4KQCFv
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
        - id: cs_uRBENPPRx62FwmrkEyYPMF
          claim_id: c_BK5KR7ReA2tCU2AoRcGe83
          source_id: s_UbxFkytrgNggne7FhswarT
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

# 王晉康

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晉康 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晉康（CBDB 638463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638463&o=json)
