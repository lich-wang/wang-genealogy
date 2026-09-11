---
schema: wang-person/v1
id: p_93CRGobRwgzYb8t77wWh2W
status: active
merged_into: null
display_name: 王頤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JfJDcopPFQVf3hB556Hm2Y
        subject_person_id: p_93CRGobRwgzYb8t77wWh2W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yA68beU7bY3EJGnb4SyNDL
          claim_id: c_JfJDcopPFQVf3hB556Hm2Y
          source_id: s_9tWuU8akrraGhBvupC2yCw
          stance: supports
          locator: CBDB:685261
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（685261）
          source: &a1
            id: s_9tWuU8akrraGhBvupC2yCw
            source_type: api_record
            title: 中国历代人物传记资料库：王頤（CBDB 685261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685261&o=json
            external_identifier: CBDB:685261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.325Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AHBaVu6UAjFSs5VzFaq7jY
        subject_person_id: p_93CRGobRwgzYb8t77wWh2W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頤，宋人物。籍贯長興，入仕進士。（中国历代人物传记资料库 CBDB 685261）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GGbdAATYKHm-Cr8Bp9ZR3D
          claim_id: c_AHBaVu6UAjFSs5VzFaq7jY
          source_id: s_9tWuU8akrraGhBvupC2yCw
          stance: supports
          locator: CBDB:685261
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

# 王頤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王頤 | accepted |
| bio.summary | 王頤，宋人物。籍贯長興，入仕進士。（中国历代人物传记资料库 CBDB 685261） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王頤（CBDB 685261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685261&o=json)
