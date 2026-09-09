---
schema: wang-person/v1
id: p_DVJuaQ4fqcXMz2HJX35bCQ
status: active
merged_into: null
display_name: 王一魁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9wkrVhd7P7kweJ6cTk1oYd
        subject_person_id: p_DVJuaQ4fqcXMz2HJX35bCQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一魁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BLuy754HzGpf6ETE6b5AVf
          claim_id: c_9wkrVhd7P7kweJ6cTk1oYd
          source_id: s_4H1eGnKMCeuRiiTPgajk5D
          stance: supports
          locator: CBDB:207258
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207258）
          source: &a1
            id: s_4H1eGnKMCeuRiiTPgajk5D
            source_type: api_record
            title: 中国历代人物传记资料库：王一魁（CBDB 207258）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207258&o=json
            external_identifier: CBDB:207258
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5Wt4TD1LFpBdz1dGkgZXDj
        subject_person_id: p_DVJuaQ4fqcXMz2HJX35bCQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1563年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZaCZ8Ve82MRu9ddv9AzQFb
          claim_id: c_5Wt4TD1LFpBdz1dGkgZXDj
          source_id: s_4H1eGnKMCeuRiiTPgajk5D
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EhFqV8fsGjx25fEVVoJHtL
        subject_person_id: p_DVJuaQ4fqcXMz2HJX35bCQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BHfc3KBM3ddk2n4TAPKiLJ
          claim_id: c_EhFqV8fsGjx25fEVVoJHtL
          source_id: s_4H1eGnKMCeuRiiTPgajk5D
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王一魁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一魁 | accepted |
| birth.date | 1563年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一魁（CBDB 207258）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207258&o=json)
