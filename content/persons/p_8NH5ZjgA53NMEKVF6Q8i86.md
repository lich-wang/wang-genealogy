---
schema: wang-person/v1
id: p_8NH5ZjgA53NMEKVF6Q8i86
status: active
merged_into: null
display_name: 王艮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1Ymav3NdAJzQ27QgAmULA9
        subject_person_id: p_8NH5ZjgA53NMEKVF6Q8i86
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王艮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Yw7q5Ak5tEz8M7mX374s2t
          claim_id: c_1Ymav3NdAJzQ27QgAmULA9
          source_id: s_54X1j2s7b6hCBDwGcupBNg
          stance: supports
          locator: CBDB:100660
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100660）
          source: &a1
            id: s_54X1j2s7b6hCBDwGcupBNg
            source_type: api_record
            title: 中国历代人物传记资料库：王艮（CBDB 100660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100660&o=json
            external_identifier: CBDB:100660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.342Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_K4AHQCgSyjH4qeMBKcAs4G
        subject_person_id: p_8NH5ZjgA53NMEKVF6Q8i86
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1278年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aZDQexwkrukjBbpTaN2ghJ
          claim_id: c_K4AHQCgSyjH4qeMBKcAs4G
          source_id: s_54X1j2s7b6hCBDwGcupBNg
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
        id: c_PKRcYZ4Xu2rfELLpnoU7r1
        subject_person_id: p_8NH5ZjgA53NMEKVF6Q8i86
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1348年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G2cGdgEPEjUHejC2pVSV6F
          claim_id: c_PKRcYZ4Xu2rfELLpnoU7r1
          source_id: s_54X1j2s7b6hCBDwGcupBNg
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
        id: c_3cYarhwGJy6CjYjbQGNZRV
        subject_person_id: p_8NH5ZjgA53NMEKVF6Q8i86
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王艮（1278年—1348年），元人物。籍贯諸暨州，曾任都轉運鹽使司經歷、市舶提舉司提舉、萬戶府經歷。（中国历代人物传记资料库 CBDB 100660）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6XlpBYcSJdWAI2R_KN63gZ
          claim_id: c_3cYarhwGJy6CjYjbQGNZRV
          source_id: s_54X1j2s7b6hCBDwGcupBNg
          stance: supports
          locator: CBDB:100660
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

# 王艮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王艮 | accepted |
| birth.date | 1278年 | accepted |
| death.date | 1348年 | accepted |
| bio.summary | 王艮（1278年—1348年），元人物。籍贯諸暨州，曾任都轉運鹽使司經歷、市舶提舉司提舉、萬戶府經歷。（中国历代人物传记资料库 CBDB 100660） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王艮（CBDB 100660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100660&o=json)
