---
schema: wang-person/v1
id: p_gM2oQEdh7DDaKzsgp5pCKA
status: active
merged_into: null
display_name: 王正志
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xhGxCUuidTTZ8DYcvHe8WT
        subject_person_id: p_gM2oQEdh7DDaKzsgp5pCKA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nxwcjUXR1JhV8QzGEWdANB
          claim_id: c_xhGxCUuidTTZ8DYcvHe8WT
          source_id: s_ikiQdEmXETRpULxC4gCEbm
          stance: supports
          locator: CBDB:126482
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126482）
          source: &a1
            id: s_ikiQdEmXETRpULxC4gCEbm
            source_type: api_record
            title: 中国历代人物传记资料库：王正志（CBDB 126482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126482&o=json
            external_identifier: CBDB:126482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6AWHzAiHbBMPBkV322sZv7
        subject_person_id: p_gM2oQEdh7DDaKzsgp5pCKA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1560年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TuNN5K8voQiDRAxEphMjU7
          claim_id: c_6AWHzAiHbBMPBkV322sZv7
          source_id: s_ikiQdEmXETRpULxC4gCEbm
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
        id: c_wPK9n4Vm966j2APxxevUeW
        subject_person_id: p_gM2oQEdh7DDaKzsgp5pCKA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1603年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_erYZMGC4WjJLr9x1HNEvug
          claim_id: c_wPK9n4Vm966j2APxxevUeW
          source_id: s_ikiQdEmXETRpULxC4gCEbm
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
        id: c_W5Z524nN7bBuL9oGMtGukg
        subject_person_id: p_gM2oQEdh7DDaKzsgp5pCKA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正志（1560年—1603年），明人物。籍贯祥符，曾任知縣、少卿。（中国历代人物传记资料库 CBDB 126482）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OULKrppIFZ61XwOAFBamM2
          claim_id: c_W5Z524nN7bBuL9oGMtGukg
          source_id: s_ikiQdEmXETRpULxC4gCEbm
          stance: supports
          locator: CBDB:126482
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

# 王正志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正志 | accepted |
| birth.date | 1560年 | accepted |
| death.date | 1603年 | accepted |
| bio.summary | 王正志（1560年—1603年），明人物。籍贯祥符，曾任知縣、少卿。（中国历代人物传记资料库 CBDB 126482） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正志（CBDB 126482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126482&o=json)
