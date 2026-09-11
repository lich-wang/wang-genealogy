---
schema: wang-person/v1
id: p_afTnRwUEYED3cMNesoGzx1
status: active
merged_into: null
display_name: 王顓齡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M44eH948XbVstMMu4m2k9j
        subject_person_id: p_afTnRwUEYED3cMNesoGzx1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顓齡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vdJVism1ua9PFKroxaMLZj
          claim_id: c_M44eH948XbVstMMu4m2k9j
          source_id: s_pDz5tfX5KGvLCwJzcaTHWg
          stance: supports
          locator: CBDB:640869
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640869）
          source: &a1
            id: s_pDz5tfX5KGvLCwJzcaTHWg
            source_type: api_record
            title: 中国历代人物传记资料库：王顓齡（CBDB 640869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640869&o=json
            external_identifier: CBDB:640869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.397Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3iKcEeN6S8sHzYHEKUwReq
        subject_person_id: p_afTnRwUEYED3cMNesoGzx1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顓齡，清人物。籍贯廣寧，曾任訓導。（中国历代人物传记资料库 CBDB 640869）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_h2O2x5Ggspj1BL4-Nanshp
          claim_id: c_3iKcEeN6S8sHzYHEKUwReq
          source_id: s_pDz5tfX5KGvLCwJzcaTHWg
          stance: supports
          locator: CBDB:640869
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

# 王顓齡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顓齡 | accepted |
| bio.summary | 王顓齡，清人物。籍贯廣寧，曾任訓導。（中国历代人物传记资料库 CBDB 640869） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顓齡（CBDB 640869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640869&o=json)
