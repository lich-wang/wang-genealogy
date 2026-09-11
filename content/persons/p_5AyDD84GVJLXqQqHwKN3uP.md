---
schema: wang-person/v1
id: p_5AyDD84GVJLXqQqHwKN3uP
status: active
merged_into: null
display_name: 王抑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WwmxK3JZV4ruSL7UqfuJYz
        subject_person_id: p_5AyDD84GVJLXqQqHwKN3uP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王抑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kjph4gPEURiE2oG5GC7coB
          claim_id: c_WwmxK3JZV4ruSL7UqfuJYz
          source_id: s_NguEEtBkm1oC7ZMGGadNdC
          stance: supports
          locator: CBDB:44670
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（44670）
          source: &a1
            id: s_NguEEtBkm1oC7ZMGGadNdC
            source_type: api_record
            title: 中国历代人物传记资料库：王抑（CBDB 44670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=44670&o=json
            external_identifier: CBDB:44670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.653Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Wg4Nuaac7LooBkxpxcLNuv
        subject_person_id: p_5AyDD84GVJLXqQqHwKN3uP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1181年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nmu4iwWkNzFZjzesdPEV1o
          claim_id: c_Wg4Nuaac7LooBkxpxcLNuv
          source_id: s_NguEEtBkm1oC7ZMGGadNdC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_45wCvfQBZ421GQfL3EupfX
        subject_person_id: p_5AyDD84GVJLXqQqHwKN3uP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王抑（卒于1181年），史料所见人物。本项目依据《中国历代人物传记资料库：王抑（CBDB 44670）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1HAb3qymB9OwpwJpGA4Flj
          claim_id: c_45wCvfQBZ421GQfL3EupfX
          source_id: s_NguEEtBkm1oC7ZMGGadNdC
          stance: supports
          locator: CBDB:44670
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王抑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王抑 | accepted |
| death.date | 1181年 | accepted |
| bio.summary | 王抑（卒于1181年），史料所见人物。本项目依据《中国历代人物传记资料库：王抑（CBDB 44670）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王抑（CBDB 44670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=44670&o=json)
