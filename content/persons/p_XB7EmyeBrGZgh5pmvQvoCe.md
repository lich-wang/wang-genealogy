---
schema: wang-person/v1
id: p_XB7EmyeBrGZgh5pmvQvoCe
status: active
merged_into: null
display_name: 王榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1h2xbmc5HkWkN14U5qPB4L
        subject_person_id: p_XB7EmyeBrGZgh5pmvQvoCe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DHxoVCgVCo6d1X33Bf6cr7
          claim_id: c_1h2xbmc5HkWkN14U5qPB4L
          source_id: s_St2fa1iuu1fDwYdXKVRgPD
          stance: supports
          locator: CBDB:455335
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（455335）
          source: &a1
            id: s_St2fa1iuu1fDwYdXKVRgPD
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 455335）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=455335&o=json
            external_identifier: CBDB:455335
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.515Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P8LfU8NWhP9d2agbAnCK5g
        subject_person_id: p_XB7EmyeBrGZgh5pmvQvoCe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮，清人物。曾任千總。（中国历代人物传记资料库 CBDB 455335）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ubbW7xsiIrjvnNvpGGiQG1
          claim_id: c_P8LfU8NWhP9d2agbAnCK5g
          source_id: s_St2fa1iuu1fDwYdXKVRgPD
          stance: supports
          locator: CBDB:455335
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

# 王榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮 | accepted |
| bio.summary | 王榮，清人物。曾任千總。（中国历代人物传记资料库 CBDB 455335） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王榮（CBDB 455335）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=455335&o=json)
