---
schema: wang-person/v1
id: p_Pga8eqzxQB4U35GZvjp8GV
status: active
merged_into: null
display_name: 王範
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P3Zz4Zvt3AdBA84oCQN83P
        subject_person_id: p_Pga8eqzxQB4U35GZvjp8GV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王範
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EUyjkLThi4gFiDsKejgGkb
          claim_id: c_P3Zz4Zvt3AdBA84oCQN83P
          source_id: s_BM3AR2p8rVAL6uLeRKS5XJ
          stance: supports
          locator: CBDB:92092
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92092）
          source: &a1
            id: s_BM3AR2p8rVAL6uLeRKS5XJ
            source_type: api_record
            title: 中国历代人物传记资料库：王範（CBDB 92092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92092&o=json
            external_identifier: CBDB:92092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.126Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mMYBFmhHoQ46p884rJqpiF
        subject_person_id: p_Pga8eqzxQB4U35GZvjp8GV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MpByTD5ByuMKRGTNUB7to9
          claim_id: c_mMYBFmhHoQ46p884rJqpiF
          source_id: s_BM3AR2p8rVAL6uLeRKS5XJ
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

# 王範

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王範 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王範（CBDB 92092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92092&o=json)
