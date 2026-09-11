---
schema: wang-person/v1
id: p_mSAZwpMFYfgfonocjarR8i
status: active
merged_into: null
display_name: 王峴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9p8GXLHsCePo5RjrUMc4dh
        subject_person_id: p_mSAZwpMFYfgfonocjarR8i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王峴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PS1GuYm3LkbnDsLuTDHE6B
          claim_id: c_9p8GXLHsCePo5RjrUMc4dh
          source_id: s_De985rQQPuXTemofTf1ewy
          stance: supports
          locator: CBDB:687768
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（687768）
          source: &a1
            id: s_De985rQQPuXTemofTf1ewy
            source_type: api_record
            title: 中国历代人物传记资料库：王峴（CBDB 687768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687768&o=json
            external_identifier: CBDB:687768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.459Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nLp5fyZHAs5bu8AJmeUb39
        subject_person_id: p_mSAZwpMFYfgfonocjarR8i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王峴，宋人物。籍贯瑞安，入仕進士。（中国历代人物传记资料库 CBDB 687768）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__XkTdGi4AbmHopSIopOfRx
          claim_id: c_nLp5fyZHAs5bu8AJmeUb39
          source_id: s_De985rQQPuXTemofTf1ewy
          stance: supports
          locator: CBDB:687768
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

# 王峴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王峴 | accepted |
| bio.summary | 王峴，宋人物。籍贯瑞安，入仕進士。（中国历代人物传记资料库 CBDB 687768） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王峴（CBDB 687768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687768&o=json)
