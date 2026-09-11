---
schema: wang-person/v1
id: p_5wLaAJMF2tTzM5yCYZ1FuF
status: active
merged_into: null
display_name: 王銓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tbP3vQBZMJbGyf7w4q8Q3j
        subject_person_id: p_5wLaAJMF2tTzM5yCYZ1FuF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D74n15MWmD5Xria9dye2SA
          claim_id: c_tbP3vQBZMJbGyf7w4q8Q3j
          source_id: s_xZmAEbC712bztq7oCyHBEX
          stance: supports
          locator: CBDB:71190
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71190）
          source: &a1
            id: s_xZmAEbC712bztq7oCyHBEX
            source_type: api_record
            title: 中国历代人物传记资料库：王銓（CBDB 71190）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71190&o=json
            external_identifier: CBDB:71190
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.468Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_P9ypJeN2kT8zBxSt68SAzF
        subject_person_id: p_5wLaAJMF2tTzM5yCYZ1FuF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1831年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sF564Ks6ZttXE9nTjEkinw
          claim_id: c_P9ypJeN2kT8zBxSt68SAzF
          source_id: s_xZmAEbC712bztq7oCyHBEX
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
        id: c_jtSzWynBrmckEVwqGT639g
        subject_person_id: p_5wLaAJMF2tTzM5yCYZ1FuF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1877年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m6LvhTjTyQyA6DkvwqfMMB
          claim_id: c_jtSzWynBrmckEVwqGT639g
          source_id: s_xZmAEbC712bztq7oCyHBEX
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
        id: c_cG2QPSt97CTjYQBX8Ef1pu
        subject_person_id: p_5wLaAJMF2tTzM5yCYZ1FuF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銓（1831年—1877年），清人物。籍贯新城。（中国历代人物传记资料库 CBDB 71190）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HApYnwqmKq1VJlgVW6Ygho
          claim_id: c_cG2QPSt97CTjYQBX8Ef1pu
          source_id: s_xZmAEbC712bztq7oCyHBEX
          stance: supports
          locator: CBDB:71190
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

# 王銓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銓 | accepted |
| birth.date | 1831年 | accepted |
| death.date | 1877年 | accepted |
| bio.summary | 王銓（1831年—1877年），清人物。籍贯新城。（中国历代人物传记资料库 CBDB 71190） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銓（CBDB 71190）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71190&o=json)
