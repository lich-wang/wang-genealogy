---
schema: wang-person/v1
id: p_EtbHU8CmPReNDL4TWc1UKi
status: active
merged_into: null
display_name: 王漪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8EEsFAZPffHfz3nrSgGoeP
        subject_person_id: p_EtbHU8CmPReNDL4TWc1UKi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qvJ13jh3qaegJW1HGStNjz
          claim_id: c_8EEsFAZPffHfz3nrSgGoeP
          source_id: s_MtGDhf7z79YQN7gkm9RPZ1
          stance: supports
          locator: CBDB:71267
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71267）
          source: &a1
            id: s_MtGDhf7z79YQN7gkm9RPZ1
            source_type: api_record
            title: 中国历代人物传记资料库：王漪（CBDB 71267）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71267&o=json
            external_identifier: CBDB:71267
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.541Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_7Lp6LmP4DfBJfYvc6QDJ1B
        subject_person_id: p_EtbHU8CmPReNDL4TWc1UKi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1824年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eshpmN1kCqZDyh2gVUcoLB
          claim_id: c_7Lp6LmP4DfBJfYvc6QDJ1B
          source_id: s_MtGDhf7z79YQN7gkm9RPZ1
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
        id: c_D7xmC3gQ3X3StVLFAp6JL3
        subject_person_id: p_EtbHU8CmPReNDL4TWc1UKi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漪（卒于1824年），清人物。籍贯江都。（中国历代人物传记资料库 CBDB 71267）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5YC7Fkg5yv1h_tPUXfX_OT
          claim_id: c_D7xmC3gQ3X3StVLFAp6JL3
          source_id: s_MtGDhf7z79YQN7gkm9RPZ1
          stance: supports
          locator: CBDB:71267
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

# 王漪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漪 | accepted |
| death.date | 1824年 | accepted |
| bio.summary | 王漪（卒于1824年），清人物。籍贯江都。（中国历代人物传记资料库 CBDB 71267） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王漪（CBDB 71267）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71267&o=json)
