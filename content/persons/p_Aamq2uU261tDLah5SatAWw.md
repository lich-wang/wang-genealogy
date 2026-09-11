---
schema: wang-person/v1
id: p_Aamq2uU261tDLah5SatAWw
status: active
merged_into: null
display_name: 王伯章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AeyFQY7EixyxpfyJ2oqkNJ
        subject_person_id: p_Aamq2uU261tDLah5SatAWw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cKyqf247Jyv9dmMwrJqgxb
          claim_id: c_AeyFQY7EixyxpfyJ2oqkNJ
          source_id: s_qQw1Hzq8DommVgsumG6TSp
          stance: supports
          locator: CBDB:635977
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635977）
          source: &a1
            id: s_qQw1Hzq8DommVgsumG6TSp
            source_type: api_record
            title: 中国历代人物传记资料库：王伯章（CBDB 635977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635977&o=json
            external_identifier: CBDB:635977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.848Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Myy2y8r916GByJAW99wzn1
        subject_person_id: p_Aamq2uU261tDLah5SatAWw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯章，清人物。籍贯永平，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 635977）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gBJghDvlc7gKsuZ0KNJ9u8
          claim_id: c_Myy2y8r916GByJAW99wzn1
          source_id: s_qQw1Hzq8DommVgsumG6TSp
          stance: supports
          locator: CBDB:635977
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

# 王伯章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯章 | accepted |
| bio.summary | 王伯章，清人物。籍贯永平，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 635977） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伯章（CBDB 635977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635977&o=json)
