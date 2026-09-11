---
schema: wang-person/v1
id: p_aM3zz3P28yf2mHcXFUwCeh
status: active
merged_into: null
display_name: 王國珽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bs8TSKQsCVNoS86wA61Fxc
        subject_person_id: p_aM3zz3P28yf2mHcXFUwCeh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國珽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4v7Tmfrmf64XNg1mLpGQek
          claim_id: c_Bs8TSKQsCVNoS86wA61Fxc
          source_id: s_Le4VSKVh7UVeG1wMrE42ME
          stance: supports
          locator: CBDB:563268
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（563268）
          source: &a1
            id: s_Le4VSKVh7UVeG1wMrE42ME
            source_type: api_record
            title: 中国历代人物传记资料库：王國珽（CBDB 563268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563268&o=json
            external_identifier: CBDB:563268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.568Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jj8aURte47yeu7Xt7eJR9a
        subject_person_id: p_aM3zz3P28yf2mHcXFUwCeh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國珽，明人物。籍贯武寧，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 563268）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LjiIO_SdSCEJuWJWHhvWPG
          claim_id: c_Jj8aURte47yeu7Xt7eJR9a
          source_id: s_Le4VSKVh7UVeG1wMrE42ME
          stance: supports
          locator: CBDB:563268
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

# 王國珽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國珽 | accepted |
| bio.summary | 王國珽，明人物。籍贯武寧，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 563268） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國珽（CBDB 563268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563268&o=json)
