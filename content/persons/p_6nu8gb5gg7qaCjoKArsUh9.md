---
schema: wang-person/v1
id: p_6nu8gb5gg7qaCjoKArsUh9
status: active
merged_into: null
display_name: 王銳堂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YD2CtPXGyFrn1BLCYC5weQ
        subject_person_id: p_6nu8gb5gg7qaCjoKArsUh9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳堂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C4TB4QgQcL4GWtdDQntsyW
          claim_id: c_YD2CtPXGyFrn1BLCYC5weQ
          source_id: s_kKHXdFV9TGFQNjU2kom68N
          stance: supports
          locator: CBDB:576129
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576129）
          source: &a1
            id: s_kKHXdFV9TGFQNjU2kom68N
            source_type: api_record
            title: 中国历代人物传记资料库：王銳堂（CBDB 576129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576129&o=json
            external_identifier: CBDB:576129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.707Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eonZDDHUSmnEusUSQWKbZF
        subject_person_id: p_6nu8gb5gg7qaCjoKArsUh9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳堂，清人物。籍贯武威，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576129）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pOW_IKxCixb7Xit_9Eac-n
          claim_id: c_eonZDDHUSmnEusUSQWKbZF
          source_id: s_kKHXdFV9TGFQNjU2kom68N
          stance: supports
          locator: CBDB:576129
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

# 王銳堂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銳堂 | accepted |
| bio.summary | 王銳堂，清人物。籍贯武威，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576129） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王銳堂（CBDB 576129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576129&o=json)
