---
schema: wang-person/v1
id: p_DVTGgRJqEDqDZDaHD9P74N
status: active
merged_into: null
display_name: 王昛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3EFPuhKicrNoAsuU9R7kkD
        subject_person_id: p_DVTGgRJqEDqDZDaHD9P74N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GnpC5i759zsEkZBkD32p3d
          claim_id: c_3EFPuhKicrNoAsuU9R7kkD
          source_id: s_2xFMFcNom5ahUZ4t8ACTRo
          stance: supports
          locator: CBDB:100725
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100725）
          source: &a1
            id: s_2xFMFcNom5ahUZ4t8ACTRo
            source_type: api_record
            title: 中国历代人物传记资料库：王昛（CBDB 100725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100725&o=json
            external_identifier: CBDB:100725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.395Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Sp9CqGciLGp3JoptVfuuu6
        subject_person_id: p_DVTGgRJqEDqDZDaHD9P74N
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1236年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DZod5w1QnHhUQGUqCqQAJi
          claim_id: c_Sp9CqGciLGp3JoptVfuuu6
          source_id: s_2xFMFcNom5ahUZ4t8ACTRo
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_JFXsB5SvKZD1JJL9NGpqu4
        subject_person_id: p_DVTGgRJqEDqDZDaHD9P74N
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1308年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QcTtZ94h3KPzCmhT5niGdp
          claim_id: c_JFXsB5SvKZD1JJL9NGpqu4
          source_id: s_2xFMFcNom5ahUZ4t8ACTRo
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
        id: c_8KbE9S8CJDHj281Y5FBDfu
        subject_person_id: p_DVTGgRJqEDqDZDaHD9P74N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昛（1236年—1308年），史料所见人物。本项目依据《中国历代人物传记资料库：王昛（CBDB 100725）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r4XZ_YmJ3QIjmPo50XMaXK
          claim_id: c_8KbE9S8CJDHj281Y5FBDfu
          source_id: s_2xFMFcNom5ahUZ4t8ACTRo
          stance: supports
          locator: CBDB:100725
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

# 王昛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昛 | accepted |
| birth.date | 1236年 | accepted |
| death.date | 1308年 | accepted |
| bio.summary | 王昛（1236年—1308年），史料所见人物。本项目依据《中国历代人物传记资料库：王昛（CBDB 100725）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昛（CBDB 100725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100725&o=json)
