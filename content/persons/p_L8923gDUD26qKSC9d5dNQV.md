---
schema: wang-person/v1
id: p_L8923gDUD26qKSC9d5dNQV
status: active
merged_into: null
display_name: 王君錫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KbBMmRpWiVZvmMGYBARyNH
        subject_person_id: p_L8923gDUD26qKSC9d5dNQV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5q7rUHfBwup5c1T16QsowY
          claim_id: c_KbBMmRpWiVZvmMGYBARyNH
          source_id: s_LewXoGGxcd5pfoDM756L5V
          stance: supports
          locator: CBDB:636523
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636523）
          source: &a1
            id: s_LewXoGGxcd5pfoDM756L5V
            source_type: api_record
            title: 中国历代人物传记资料库：王君錫（CBDB 636523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636523&o=json
            external_identifier: CBDB:636523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.191Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VRFQrAXr2BhDVWsLG36TDs
        subject_person_id: p_L8923gDUD26qKSC9d5dNQV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君錫，清人物。籍贯蕭山，曾任典史。（中国历代人物传记资料库 CBDB 636523）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eXRcWNTn7dtFqlbPE25M5a
          claim_id: c_VRFQrAXr2BhDVWsLG36TDs
          source_id: s_LewXoGGxcd5pfoDM756L5V
          stance: supports
          locator: CBDB:636523
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

# 王君錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王君錫 | accepted |
| bio.summary | 王君錫，清人物。籍贯蕭山，曾任典史。（中国历代人物传记资料库 CBDB 636523） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王君錫（CBDB 636523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636523&o=json)
