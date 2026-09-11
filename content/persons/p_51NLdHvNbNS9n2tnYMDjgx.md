---
schema: wang-person/v1
id: p_51NLdHvNbNS9n2tnYMDjgx
status: active
merged_into: null
display_name: 王錫晉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BoaBc6u8YPDwuXEABGmvfp
        subject_person_id: p_51NLdHvNbNS9n2tnYMDjgx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫晉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KaLREtXKMoq46wnM8yN3he
          claim_id: c_BoaBc6u8YPDwuXEABGmvfp
          source_id: s_mSJxiQmpB7vyHEnjtPsBKe
          stance: supports
          locator: CBDB:640608
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640608）
          source: &a1
            id: s_mSJxiQmpB7vyHEnjtPsBKe
            source_type: api_record
            title: 中国历代人物传记资料库：王錫晉（CBDB 640608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640608&o=json
            external_identifier: CBDB:640608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.153Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1GKeD49XH3gFs79xeGd3J6
        subject_person_id: p_51NLdHvNbNS9n2tnYMDjgx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫晉，清人物。籍贯商城，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640608）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t79F3aCHlDIaTbMWT5aJzB
          claim_id: c_1GKeD49XH3gFs79xeGd3J6
          source_id: s_mSJxiQmpB7vyHEnjtPsBKe
          stance: supports
          locator: CBDB:640608
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

# 王錫晉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫晉 | accepted |
| bio.summary | 王錫晉，清人物。籍贯商城，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640608） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫晉（CBDB 640608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640608&o=json)
