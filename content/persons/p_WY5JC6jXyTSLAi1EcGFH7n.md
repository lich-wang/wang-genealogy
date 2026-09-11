---
schema: wang-person/v1
id: p_WY5JC6jXyTSLAi1EcGFH7n
status: active
merged_into: null
display_name: 王鼎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LXeE27UoKKsToVmgcrp2fG
        subject_person_id: p_WY5JC6jXyTSLAi1EcGFH7n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wayvXyQi7dQfMZZHrPBP4h
          claim_id: c_LXeE27UoKKsToVmgcrp2fG
          source_id: s_5Z7pySfD313PgDzwEG7Aw8
          stance: supports
          locator: CBDB:462150
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（462150）
          source: &a1
            id: s_5Z7pySfD313PgDzwEG7Aw8
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 462150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462150&o=json
            external_identifier: CBDB:462150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x6gnnPgo9tecQKv5btGM1w
        subject_person_id: p_WY5JC6jXyTSLAi1EcGFH7n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎，清人物。曾任番營守備、營遊擊。（中国历代人物传记资料库 CBDB 462150）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gzWhmAA-n9JTFMtGTbJNiI
          claim_id: c_x6gnnPgo9tecQKv5btGM1w
          source_id: s_5Z7pySfD313PgDzwEG7Aw8
          stance: supports
          locator: CBDB:462150
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

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| bio.summary | 王鼎，清人物。曾任番營守備、營遊擊。（中国历代人物传记资料库 CBDB 462150） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 462150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462150&o=json)
