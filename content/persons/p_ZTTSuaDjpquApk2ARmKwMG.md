---
schema: wang-person/v1
id: p_ZTTSuaDjpquApk2ARmKwMG
status: active
merged_into: null
display_name: 王察
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ADwaWoKuzsFrB7Ek4KKcGC
        subject_person_id: p_ZTTSuaDjpquApk2ARmKwMG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王察
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Dfj66aJff3UpVUhg3N3C1o
          claim_id: c_ADwaWoKuzsFrB7Ek4KKcGC
          source_id: s_JxhF6JzvaH57o9Fz5tcXAc
          stance: supports
          locator: CBDB:97867
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97867）
          source: &a1
            id: s_JxhF6JzvaH57o9Fz5tcXAc
            source_type: api_record
            title: 中国历代人物传记资料库：王察（CBDB 97867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97867&o=json
            external_identifier: CBDB:97867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.211Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_seZ2diQe1icPEsb48Y3UBc
        subject_person_id: p_ZTTSuaDjpquApk2ARmKwMG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王察，宋人物。曾任右朝奉大夫、右朝奉郎。（中国历代人物传记资料库 CBDB 97867）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7xAz2K5-XTt-VBPXiVxLqf
          claim_id: c_seZ2diQe1icPEsb48Y3UBc
          source_id: s_JxhF6JzvaH57o9Fz5tcXAc
          stance: supports
          locator: CBDB:97867
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

# 王察

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王察 | accepted |
| bio.summary | 王察，宋人物。曾任右朝奉大夫、右朝奉郎。（中国历代人物传记资料库 CBDB 97867） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王察（CBDB 97867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97867&o=json)
