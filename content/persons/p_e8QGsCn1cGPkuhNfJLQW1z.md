---
schema: wang-person/v1
id: p_e8QGsCn1cGPkuhNfJLQW1z
status: active
merged_into: null
display_name: 王士源
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xp5rhaKzCXx3Dx6zzQXzKt
        subject_person_id: p_e8QGsCn1cGPkuhNfJLQW1z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C8yVCRi5XtHHMURuFrtEvY
          claim_id: c_xp5rhaKzCXx3Dx6zzQXzKt
          source_id: s_8yPQcD1WqZxccY9RQuXGc8
          stance: supports
          locator: CBDB:91974
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（91974）
          source: &a1
            id: s_8yPQcD1WqZxccY9RQuXGc8
            source_type: api_record
            title: 中国历代人物传记资料库：王士源（CBDB 91974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91974&o=json
            external_identifier: CBDB:91974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.060Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bPfVMvYX1wgcCsBLj8DVhF
        subject_person_id: p_e8QGsCn1cGPkuhNfJLQW1z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士源，唐人物。籍贯宜城，身份为工於文。（中国历代人物传记资料库 CBDB 91974）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nEXsixB0PPqZhuOAHdTsJT
          claim_id: c_bPfVMvYX1wgcCsBLj8DVhF
          source_id: s_8yPQcD1WqZxccY9RQuXGc8
          stance: supports
          locator: CBDB:91974
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

# 王士源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士源 | accepted |
| bio.summary | 王士源，唐人物。籍贯宜城，身份为工於文。（中国历代人物传记资料库 CBDB 91974） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士源（CBDB 91974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91974&o=json)
