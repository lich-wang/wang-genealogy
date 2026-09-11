---
schema: wang-person/v1
id: p_iidpD8ETbAWzbret3vw3zh
status: active
merged_into: null
display_name: 王其觀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QmbaasfJaroPDB8JNfQsGr
        subject_person_id: p_iidpD8ETbAWzbret3vw3zh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其觀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p9BG6teouJr2cYNoVJFs98
          claim_id: c_QmbaasfJaroPDB8JNfQsGr
          source_id: s_sv6kVKWsZKGLS74tok3CRP
          stance: supports
          locator: CBDB:636338
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636338）
          source: &a1
            id: s_sv6kVKWsZKGLS74tok3CRP
            source_type: api_record
            title: 中国历代人物传记资料库：王其觀（CBDB 636338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636338&o=json
            external_identifier: CBDB:636338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F5Na9J6HYdqiEDTJBJTyAX
        subject_person_id: p_iidpD8ETbAWzbret3vw3zh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其觀，清人物。籍贯歸德土司，入仕鄉貢舉人，曾任教授、復設訓導。（中国历代人物传记资料库 CBDB 636338）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PHcCvEHoeFe2SVA5mPu_9Y
          claim_id: c_F5Na9J6HYdqiEDTJBJTyAX
          source_id: s_sv6kVKWsZKGLS74tok3CRP
          stance: supports
          locator: CBDB:636338
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

# 王其觀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王其觀 | accepted |
| bio.summary | 王其觀，清人物。籍贯歸德土司，入仕鄉貢舉人，曾任教授、復設訓導。（中国历代人物传记资料库 CBDB 636338） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王其觀（CBDB 636338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636338&o=json)
