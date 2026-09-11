---
schema: wang-person/v1
id: p_D5kp65EprxQAiQrLEv5aW1
status: active
merged_into: null
display_name: 王浡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DNm6fr1y2W3TMQnq7jDnPt
        subject_person_id: p_D5kp65EprxQAiQrLEv5aW1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LCBHNhsbXM3kkizcnuv5bb
          claim_id: c_DNm6fr1y2W3TMQnq7jDnPt
          source_id: s_Lkw6BGWEc6jTmmtwEu1K7K
          stance: supports
          locator: CBDB:639098
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639098）
          source: &a1
            id: s_Lkw6BGWEc6jTmmtwEu1K7K
            source_type: api_record
            title: 中国历代人物传记资料库：王浡（CBDB 639098）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639098&o=json
            external_identifier: CBDB:639098
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.836Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ez45ZiSAVq2cfLDppBwaFU
        subject_person_id: p_D5kp65EprxQAiQrLEv5aW1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浡，清人物。籍贯盱眙，入仕文童/儒童，曾任知縣。（中国历代人物传记资料库 CBDB 639098）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FtGDpagr5InjdQebASl4cu
          claim_id: c_Ez45ZiSAVq2cfLDppBwaFU
          source_id: s_Lkw6BGWEc6jTmmtwEu1K7K
          stance: supports
          locator: CBDB:639098
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

# 王浡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浡 | accepted |
| bio.summary | 王浡，清人物。籍贯盱眙，入仕文童/儒童，曾任知縣。（中国历代人物传记资料库 CBDB 639098） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王浡（CBDB 639098）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639098&o=json)
