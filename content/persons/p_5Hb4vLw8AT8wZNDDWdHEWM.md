---
schema: wang-person/v1
id: p_5Hb4vLw8AT8wZNDDWdHEWM
status: active
merged_into: null
display_name: 王席民
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AQE6hQbLAFKW3oZdWbZhEG
        subject_person_id: p_5Hb4vLw8AT8wZNDDWdHEWM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王席民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bcMpPNqwa23UMpgZt9HiZk
          claim_id: c_AQE6hQbLAFKW3oZdWbZhEG
          source_id: s_AtgLV44KqffAgdEh5nP8kZ
          stance: supports
          locator: CBDB:575105
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（575105）
          source: &a1
            id: s_AtgLV44KqffAgdEh5nP8kZ
            source_type: api_record
            title: 中国历代人物传记资料库：王席民（CBDB 575105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575105&o=json
            external_identifier: CBDB:575105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.691Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f46TEdY4PxUsFDsM2zEZWd
        subject_person_id: p_5Hb4vLw8AT8wZNDDWdHEWM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王席民，明人物。籍贯東湖。（中国历代人物传记资料库 CBDB 575105）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qm68Q9Yr3hnRPsFOeW14ts
          claim_id: c_f46TEdY4PxUsFDsM2zEZWd
          source_id: s_AtgLV44KqffAgdEh5nP8kZ
          stance: supports
          locator: CBDB:575105
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

# 王席民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王席民 | accepted |
| bio.summary | 王席民，明人物。籍贯東湖。（中国历代人物传记资料库 CBDB 575105） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王席民（CBDB 575105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575105&o=json)
