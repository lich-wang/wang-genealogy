---
schema: wang-person/v1
id: p_D558A5JT8xDPgzpmhHXD7G
status: active
merged_into: null
display_name: 王友迪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8Ri5k2DmNy35YKUPfMx4H9
        subject_person_id: p_D558A5JT8xDPgzpmhHXD7G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友迪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nU4zG7q7YJTDahdkRHT5gh
          claim_id: c_8Ri5k2DmNy35YKUPfMx4H9
          source_id: s_oxsZuAVFMp7q3BwVBpPjo7
          stance: supports
          locator: CBDB:101078
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101078）
          source: &a1
            id: s_oxsZuAVFMp7q3BwVBpPjo7
            source_type: api_record
            title: 中国历代人物传记资料库：王友迪（CBDB 101078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101078&o=json
            external_identifier: CBDB:101078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.162Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pWNDFLAqEny11Rks5vqVLi
        subject_person_id: p_D558A5JT8xDPgzpmhHXD7G
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1222年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HZeAwD84X5z4ECQpS6PnWe
          claim_id: c_pWNDFLAqEny11Rks5vqVLi
          source_id: s_oxsZuAVFMp7q3BwVBpPjo7
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
        id: c_2q1Y1bCZxY1VSsuqBtX4f6
        subject_person_id: p_D558A5JT8xDPgzpmhHXD7G
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1276年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9zn5LHhxdwdCACRgfTRm3d
          claim_id: c_2q1Y1bCZxY1VSsuqBtX4f6
          source_id: s_oxsZuAVFMp7q3BwVBpPjo7
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
        id: c_TRLFYXzjxUZbYojiSkWw3g
        subject_person_id: p_D558A5JT8xDPgzpmhHXD7G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友迪（1222年—1276年），元人物。籍贯固始，曾任縣令。（中国历代人物传记资料库 CBDB 101078）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TGeIepGtyyqrSeBxcNU_Xp
          claim_id: c_TRLFYXzjxUZbYojiSkWw3g
          source_id: s_oxsZuAVFMp7q3BwVBpPjo7
          stance: supports
          locator: CBDB:101078
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

# 王友迪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友迪 | accepted |
| birth.date | 1222年 | accepted |
| death.date | 1276年 | accepted |
| bio.summary | 王友迪（1222年—1276年），元人物。籍贯固始，曾任縣令。（中国历代人物传记资料库 CBDB 101078） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王友迪（CBDB 101078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101078&o=json)
