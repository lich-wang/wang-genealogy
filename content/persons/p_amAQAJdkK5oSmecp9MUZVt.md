---
schema: wang-person/v1
id: p_amAQAJdkK5oSmecp9MUZVt
status: active
merged_into: null
display_name: 王啟遵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MESrSzsG5gbkLn4igyBsbo
        subject_person_id: p_amAQAJdkK5oSmecp9MUZVt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟遵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f9MbpsqgNN7DB1nheaHcrY
          claim_id: c_MESrSzsG5gbkLn4igyBsbo
          source_id: s_5uLiAf9KQVDrHtFqE5QjRT
          stance: supports
          locator: CBDB:575021
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（575021）
          source: &a1
            id: s_5uLiAf9KQVDrHtFqE5QjRT
            source_type: api_record
            title: 中国历代人物传记资料库：王啟遵（CBDB 575021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575021&o=json
            external_identifier: CBDB:575021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.690Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gyE3brsLvuZQjgDrAr9MHw
        subject_person_id: p_amAQAJdkK5oSmecp9MUZVt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟遵，明人物。籍贯石首，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 575021）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rfwItfosqI7v4vQLM5_pGG
          claim_id: c_gyE3brsLvuZQjgDrAr9MHw
          source_id: s_5uLiAf9KQVDrHtFqE5QjRT
          stance: supports
          locator: CBDB:575021
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

# 王啟遵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟遵 | accepted |
| bio.summary | 王啟遵，明人物。籍贯石首，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 575021） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟遵（CBDB 575021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575021&o=json)
