---
schema: wang-person/v1
id: p_LPRKvc2LdqY4PoLZM4Vzsv
status: active
merged_into: null
display_name: 王晉卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qz7cTFZvjwZQwumKrEzhkz
        subject_person_id: p_LPRKvc2LdqY4PoLZM4Vzsv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_22wUYQG1B7VPEtaezdQiF1
          claim_id: c_Qz7cTFZvjwZQwumKrEzhkz
          source_id: s_1J8P3kWDpfRSCTHYspAviP
          stance: supports
          locator: CBDB:37950
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37950）
          source: &a1
            id: s_1J8P3kWDpfRSCTHYspAviP
            source_type: api_record
            title: 中国历代人物传记资料库：王晉卿（CBDB 37950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37950&o=json
            external_identifier: CBDB:37950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.299Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PKpEbv9etmwiUfc2jUVPqN
        subject_person_id: p_LPRKvc2LdqY4PoLZM4Vzsv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 907年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_myzrDvG4DccqrMBNgtHN56
          claim_id: c_PKpEbv9etmwiUfc2jUVPqN
          source_id: s_1J8P3kWDpfRSCTHYspAviP
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
        id: c_L8p1eG47Rj7Y6nzGaH5bDx
        subject_person_id: p_LPRKvc2LdqY4PoLZM4Vzsv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 973年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tuXz68dZEtq8nF52SCcGYt
          claim_id: c_L8p1eG47Rj7Y6nzGaH5bDx
          source_id: s_1J8P3kWDpfRSCTHYspAviP
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
        id: c_JVN8PVhHdWrM742bDCXfR2
        subject_person_id: p_LPRKvc2LdqY4PoLZM4Vzsv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉卿（907年—973年），宋人物。籍贯河北西路，身份为熟諳兵法韜略、軍事家，曾任刺史。（中国历代人物传记资料库 CBDB 37950）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_l2RHKvZEPiK50_Z1jeJG0C
          claim_id: c_JVN8PVhHdWrM742bDCXfR2
          source_id: s_1J8P3kWDpfRSCTHYspAviP
          stance: supports
          locator: CBDB:37950
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

# 王晉卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晉卿 | accepted |
| birth.date | 907年 | accepted |
| death.date | 973年 | accepted |
| bio.summary | 王晉卿（907年—973年），宋人物。籍贯河北西路，身份为熟諳兵法韜略、軍事家，曾任刺史。（中国历代人物传记资料库 CBDB 37950） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晉卿（CBDB 37950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37950&o=json)
