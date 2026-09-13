---
schema: wang-person/v1
id: p_BMBKfTzNtNebLzaKpjiPZS
status: active
merged_into: null
display_name: 王師吉
cbdb_id: 414417
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uUddgnYbM3L4NVdT7r5EEZ
        subject_person_id: p_BMBKfTzNtNebLzaKpjiPZS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師吉，明人物。曾任守備。（中国历代人物传记资料库 CBDB 414417）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_hV7dUJwgyBps-GXToGxW5E
          claim_id: c_uUddgnYbM3L4NVdT7r5EEZ
          source_id: s_GEeDi6H6iHpM9a435ZCx1D
          stance: supports
          locator: CBDB:414417
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GEeDi6H6iHpM9a435ZCx1D
            source_type: api_record
            title: 中国历代人物传记资料库：王師吉（CBDB 414417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414417&o=json
            external_identifier: CBDB:414417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:32.727Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5Q5DVhhEmHP8ABPer1v9VG
        subject_person_id: p_BMBKfTzNtNebLzaKpjiPZS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_sV2MbSdNHDJwQT1Jaq45QT
          claim_id: c_5Q5DVhhEmHP8ABPer1v9VG
          source_id: s_GEeDi6H6iHpM9a435ZCx1D
          stance: supports
          locator: CBDB:414417
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5401-5500）｜历史性依据：CBDB 朝代 = 明
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

# 王師吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王師吉，明人物。曾任守備。（中国历代人物传记资料库 CBDB 414417） | accepted |
| name.primary | 王師吉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師吉（CBDB 414417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414417&o=json)
