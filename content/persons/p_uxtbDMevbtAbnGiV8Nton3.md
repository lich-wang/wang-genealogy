---
schema: wang-person/v1
id: p_uxtbDMevbtAbnGiV8Nton3
status: active
merged_into: null
display_name: 王光有
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hFRhN7wTbTZeDGSzdt9rCb
        subject_person_id: p_uxtbDMevbtAbnGiV8Nton3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光有
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DW6cdcWQYPpLVtMVRE6AyQ
          claim_id: c_hFRhN7wTbTZeDGSzdt9rCb
          source_id: s_JgbnDCE7L4H8roDBQN6tD4
          stance: supports
          locator: CBDB:636253
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636253）
          source: &a1
            id: s_JgbnDCE7L4H8roDBQN6tD4
            source_type: api_record
            title: 中国历代人物传记资料库：王光有（CBDB 636253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636253&o=json
            external_identifier: CBDB:636253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.932Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_keLyFkoVGZZp3HcBan8kpk
        subject_person_id: p_uxtbDMevbtAbnGiV8Nton3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光有，清人物。籍贯晉江，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 636253）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hcEa-qLGHwsa0mrNkTftZV
          claim_id: c_keLyFkoVGZZp3HcBan8kpk
          source_id: s_JgbnDCE7L4H8roDBQN6tD4
          stance: supports
          locator: CBDB:636253
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

# 王光有

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光有 | accepted |
| bio.summary | 王光有，清人物。籍贯晉江，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 636253） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光有（CBDB 636253）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636253&o=json)
