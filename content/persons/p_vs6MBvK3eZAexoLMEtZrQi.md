---
schema: wang-person/v1
id: p_vs6MBvK3eZAexoLMEtZrQi
status: active
merged_into: null
display_name: 王應嘏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GrjeD922G3E2DHJyhE6bMV
        subject_person_id: p_vs6MBvK3eZAexoLMEtZrQi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應嘏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vySKMFFw44BodFhLeYkGmd
          claim_id: c_GrjeD922G3E2DHJyhE6bMV
          source_id: s_j5ZvJdaoz2Y65aJEGDVfH6
          stance: supports
          locator: CBDB:637979
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637979）
          source: &a1
            id: s_j5ZvJdaoz2Y65aJEGDVfH6
            source_type: api_record
            title: 中国历代人物传记资料库：王應嘏（CBDB 637979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637979&o=json
            external_identifier: CBDB:637979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.475Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DJcbSHZjRrQPCeZwttwoxi
        subject_person_id: p_vs6MBvK3eZAexoLMEtZrQi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應嘏，清人物。籍贯商州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 637979）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CJwwS6YWp3vPMerBX0o7eZ
          claim_id: c_DJcbSHZjRrQPCeZwttwoxi
          source_id: s_j5ZvJdaoz2Y65aJEGDVfH6
          stance: supports
          locator: CBDB:637979
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

# 王應嘏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應嘏 | accepted |
| bio.summary | 王應嘏，清人物。籍贯商州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 637979） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應嘏（CBDB 637979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637979&o=json)
