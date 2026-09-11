---
schema: wang-person/v1
id: p_aVPJzcH6BjhkC1ipUpk2X8
status: active
merged_into: null
display_name: 王世昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z7ZVfHTu8LArHHd8XqJ6ZP
        subject_person_id: p_aVPJzcH6BjhkC1ipUpk2X8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PSojDjcNS48UzUG4tStD3U
          claim_id: c_z7ZVfHTu8LArHHd8XqJ6ZP
          source_id: s_GYyb8yMQS5Du4FFyEa5T8A
          stance: supports
          locator: CBDB:27073
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（27073）
          source: &a1
            id: s_GYyb8yMQS5Du4FFyEa5T8A
            source_type: api_record
            title: 中国历代人物传记资料库：王世昌（CBDB 27073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27073&o=json
            external_identifier: CBDB:27073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.951Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5qQWLJds13dsXAV8h55y3X
        subject_person_id: p_aVPJzcH6BjhkC1ipUpk2X8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 955年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kRTAeFeX7LBAqidWtXipLk
          claim_id: c_5qQWLJds13dsXAV8h55y3X
          source_id: s_GYyb8yMQS5Du4FFyEa5T8A
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
        id: c_st8fSpphLeBRCn81VchjZe
        subject_person_id: p_aVPJzcH6BjhkC1ipUpk2X8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1032年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y4TpSaSj5iiBjZivSyyz1J
          claim_id: c_st8fSpphLeBRCn81VchjZe
          source_id: s_GYyb8yMQS5Du4FFyEa5T8A
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
        id: c_L5QSvpfeeMSKsH9UbJ3L6f
        subject_person_id: p_aVPJzcH6BjhkC1ipUpk2X8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世昌（955年—1032年），宋人物。籍贯長社，入仕進士，曾任縣主簿、尚書省刑部都官司郎中、尚書省刑部都官司員外郎。（中国历代人物传记资料库 CBDB 27073）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y0ed23FKrb9S2A75Rwbsmz
          claim_id: c_L5QSvpfeeMSKsH9UbJ3L6f
          source_id: s_GYyb8yMQS5Du4FFyEa5T8A
          stance: supports
          locator: CBDB:27073
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

# 王世昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世昌 | accepted |
| birth.date | 955年 | accepted |
| death.date | 1032年 | accepted |
| bio.summary | 王世昌（955年—1032年），宋人物。籍贯長社，入仕進士，曾任縣主簿、尚書省刑部都官司郎中、尚書省刑部都官司員外郎。（中国历代人物传记资料库 CBDB 27073） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世昌（CBDB 27073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27073&o=json)
