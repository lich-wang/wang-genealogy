---
schema: wang-person/v1
id: p_hUJ2rNUVSK6M3zXQTGM2dt
status: active
merged_into: null
display_name: 王廷機
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V6ru6y7gUnxjA3HQkf76Vg
        subject_person_id: p_hUJ2rNUVSK6M3zXQTGM2dt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷機
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P2QytRKzDA126tELF5WGkB
          claim_id: c_V6ru6y7gUnxjA3HQkf76Vg
          source_id: s_fDjcQM2WFQ4E7h63e5mpEZ
          stance: supports
          locator: CBDB:341929
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341929）
          source: &a1
            id: s_fDjcQM2WFQ4E7h63e5mpEZ
            source_type: api_record
            title: 中国历代人物传记资料库：王廷機（CBDB 341929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341929&o=json
            external_identifier: CBDB:341929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.778Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RUpFaYzBMUuq4iAjiEjeRF
        subject_person_id: p_hUJ2rNUVSK6M3zXQTGM2dt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷機，清人物。明清進士進士，籍贯岐山，入仕進士，曾任知縣、知州。（中国历代人物传记资料库 CBDB 341929）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wh1KPR_Q1XZovk3ie3Zjol
          claim_id: c_RUpFaYzBMUuq4iAjiEjeRF
          source_id: s_fDjcQM2WFQ4E7h63e5mpEZ
          stance: supports
          locator: CBDB:341929
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

# 王廷機

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷機 | accepted |
| bio.summary | 王廷機，清人物。明清進士進士，籍贯岐山，入仕進士，曾任知縣、知州。（中国历代人物传记资料库 CBDB 341929） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷機（CBDB 341929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341929&o=json)
