---
schema: wang-person/v1
id: p_1VC2J2c5wjwX6JszMN275Z
status: active
merged_into: null
display_name: 王山
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o2yAB6czJkVBtCeCX4GVyD
        subject_person_id: p_1VC2J2c5wjwX6JszMN275Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王山
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3fQFAv5hn88sfZxtMvPar9
          claim_id: c_o2yAB6czJkVBtCeCX4GVyD
          source_id: s_ikZeQJrfozkHFuinZB1WR7
          stance: supports
          locator: CBDB:473495
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（473495）
          source: &a1
            id: s_ikZeQJrfozkHFuinZB1WR7
            source_type: api_record
            title: 中国历代人物传记资料库：王山（CBDB 473495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473495&o=json
            external_identifier: CBDB:473495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.312Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_npw4PncEHbMzd1GGzxqAL2
        subject_person_id: p_1VC2J2c5wjwX6JszMN275Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王山，明人物。曾任副千戶。（中国历代人物传记资料库 CBDB 473495）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3p-_6u1ZwcKbF47RBQ6Nq2
          claim_id: c_npw4PncEHbMzd1GGzxqAL2
          source_id: s_ikZeQJrfozkHFuinZB1WR7
          stance: supports
          locator: CBDB:473495
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

# 王山

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王山 | accepted |
| bio.summary | 王山，明人物。曾任副千戶。（中国历代人物传记资料库 CBDB 473495） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王山（CBDB 473495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473495&o=json)
