---
schema: wang-person/v1
id: p_6etVcu8TPJXZaht6FmD7Pd
status: active
merged_into: null
display_name: 王窰子
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6Vjj1cur143Ue2E8Rq8QDQ
        subject_person_id: p_6etVcu8TPJXZaht6FmD7Pd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王窰子
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MW5LghDXdDG73PPU24mN57
          claim_id: c_6Vjj1cur143Ue2E8Rq8QDQ
          source_id: s_DJauz5M8b2b5WM7mmHqwCX
          stance: supports
          locator: CBDB:573444
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573444）
          source: &a1
            id: s_DJauz5M8b2b5WM7mmHqwCX
            source_type: api_record
            title: 中国历代人物传记资料库：王窰子（CBDB 573444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573444&o=json
            external_identifier: CBDB:573444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.656Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ps7fFEKLmjxoQb32S4NLHC
        subject_person_id: p_6etVcu8TPJXZaht6FmD7Pd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lm89Db9nwMx5PZG4h1nZ6e
          claim_id: c_ps7fFEKLmjxoQb32S4NLHC
          source_id: s_DJauz5M8b2b5WM7mmHqwCX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王窰子

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王窰子 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王窰子（CBDB 573444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573444&o=json)
