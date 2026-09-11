---
schema: wang-person/v1
id: p_inmB5VNLTEBnSTc53EQQ8A
status: active
merged_into: null
display_name: 王兼善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U4f3S5GmbfeaM5N9kDA8A1
        subject_person_id: p_inmB5VNLTEBnSTc53EQQ8A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兼善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3WeBdR3o9yuGR1SNaeXFD9
          claim_id: c_U4f3S5GmbfeaM5N9kDA8A1
          source_id: s_wcFu9sN4UyGa3M1WTmjDTL
          stance: supports
          locator: CBDB:636343
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636343）
          source: &a1
            id: s_wcFu9sN4UyGa3M1WTmjDTL
            source_type: api_record
            title: 中国历代人物传记资料库：王兼善（CBDB 636343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636343&o=json
            external_identifier: CBDB:636343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.158Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KktpMMHB3KvFgGTjZHxaZY
        subject_person_id: p_inmB5VNLTEBnSTc53EQQ8A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兼善，清人物。籍贯江蘇省，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 636343）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3Q_o62v4WjlL9hJu_vzR0s
          claim_id: c_KktpMMHB3KvFgGTjZHxaZY
          source_id: s_wcFu9sN4UyGa3M1WTmjDTL
          stance: supports
          locator: CBDB:636343
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

# 王兼善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兼善 | accepted |
| bio.summary | 王兼善，清人物。籍贯江蘇省，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 636343） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兼善（CBDB 636343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636343&o=json)
