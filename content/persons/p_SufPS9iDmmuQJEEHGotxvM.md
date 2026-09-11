---
schema: wang-person/v1
id: p_SufPS9iDmmuQJEEHGotxvM
status: active
merged_into: null
display_name: 王玟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HJMsVLgMvtcuGQV732V1Yc
        subject_person_id: p_SufPS9iDmmuQJEEHGotxvM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EfKeCotYhuv1KLgDAAJjFf
          claim_id: c_HJMsVLgMvtcuGQV732V1Yc
          source_id: s_Wc1YVFtjqoXcXJ8uCAk6vA
          stance: supports
          locator: CBDB:497440
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（497440）
          source: &a1
            id: s_Wc1YVFtjqoXcXJ8uCAk6vA
            source_type: api_record
            title: 中国历代人物传记资料库：王玟（CBDB 497440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497440&o=json
            external_identifier: CBDB:497440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.645Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g1FnwbnLKSfmNQ8ticL9hJ
        subject_person_id: p_SufPS9iDmmuQJEEHGotxvM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玟，明人物。入仕鄉貢舉人，曾任分巡道。（中国历代人物传记资料库 CBDB 497440）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0IcjdPhoYvUPAkNp-u1Uqp
          claim_id: c_g1FnwbnLKSfmNQ8ticL9hJ
          source_id: s_Wc1YVFtjqoXcXJ8uCAk6vA
          stance: supports
          locator: CBDB:497440
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

# 王玟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玟 | accepted |
| bio.summary | 王玟，明人物。入仕鄉貢舉人，曾任分巡道。（中国历代人物传记资料库 CBDB 497440） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玟（CBDB 497440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497440&o=json)
