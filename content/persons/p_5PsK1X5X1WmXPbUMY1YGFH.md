---
schema: wang-person/v1
id: p_5PsK1X5X1WmXPbUMY1YGFH
status: active
merged_into: null
display_name: 王臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_om5p5MZxEwDaKpnDGdxmMB
        subject_person_id: p_5PsK1X5X1WmXPbUMY1YGFH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d6ETbP4qsAwRdtK9VqVyiY
          claim_id: c_om5p5MZxEwDaKpnDGdxmMB
          source_id: s_9o4RcU3QfB6w4NAUB2su1n
          stance: supports
          locator: CBDB:503960
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（503960）
          source: &a1
            id: s_9o4RcU3QfB6w4NAUB2su1n
            source_type: api_record
            title: 中国历代人物传记资料库：王臣（CBDB 503960）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503960&o=json
            external_identifier: CBDB:503960
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z729FDt145iqGdM6rG5Gm8
        subject_person_id: p_5PsK1X5X1WmXPbUMY1YGFH
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
        - id: cs_2pkGUthxsrpJeVsJGAk2DW
          claim_id: c_Z729FDt145iqGdM6rG5Gm8
          source_id: s_9o4RcU3QfB6w4NAUB2su1n
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

# 王臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臣 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王臣（CBDB 503960）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503960&o=json)
