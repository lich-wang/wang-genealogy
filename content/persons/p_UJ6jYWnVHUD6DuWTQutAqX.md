---
schema: wang-person/v1
id: p_UJ6jYWnVHUD6DuWTQutAqX
status: active
merged_into: null
display_name: 王堂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XM7LSvbngE15bKyKJSX4Eg
        subject_person_id: p_UJ6jYWnVHUD6DuWTQutAqX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sPbSADweCzVmRQvbLXA38b
          claim_id: c_XM7LSvbngE15bKyKJSX4Eg
          source_id: s_gvpQBqm3iAoS1xSvyXQPfH
          stance: supports
          locator: CBDB:636740
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636740）
          source: &a1
            id: s_gvpQBqm3iAoS1xSvyXQPfH
            source_type: api_record
            title: 中国历代人物传记资料库：王堂（CBDB 636740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636740&o=json
            external_identifier: CBDB:636740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.238Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XmSTyghjWYMJwtLRTbfzyZ
        subject_person_id: p_UJ6jYWnVHUD6DuWTQutAqX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堂，清人物。籍贯建水，入仕鄉貢舉人，曾任縣丞。（中国历代人物传记资料库 CBDB 636740）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LB6reEWF1RPAOljr-8wlyB
          claim_id: c_XmSTyghjWYMJwtLRTbfzyZ
          source_id: s_gvpQBqm3iAoS1xSvyXQPfH
          stance: supports
          locator: CBDB:636740
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

# 王堂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堂 | accepted |
| bio.summary | 王堂，清人物。籍贯建水，入仕鄉貢舉人，曾任縣丞。（中国历代人物传记资料库 CBDB 636740） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王堂（CBDB 636740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636740&o=json)
