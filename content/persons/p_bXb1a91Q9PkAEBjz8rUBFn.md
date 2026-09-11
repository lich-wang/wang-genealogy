---
schema: wang-person/v1
id: p_bXb1a91Q9PkAEBjz8rUBFn
status: active
merged_into: null
display_name: 王國棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hbZ1Xzmr9X7v85hvwXYG3X
        subject_person_id: p_bXb1a91Q9PkAEBjz8rUBFn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HS2zaAf8eE4oM4uH2JyTFF
          claim_id: c_hbZ1Xzmr9X7v85hvwXYG3X
          source_id: s_66QV89VPW5C5LpwNSWAkuv
          stance: supports
          locator: CBDB:69332
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69332）
          source: &a1
            id: s_66QV89VPW5C5LpwNSWAkuv
            source_type: api_record
            title: 中国历代人物传记资料库：王國棟（CBDB 69332）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69332&o=json
            external_identifier: CBDB:69332
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.212Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_t94X56HETGD1N8F94M8mSM
        subject_person_id: p_bXb1a91Q9PkAEBjz8rUBFn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1798年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gu6fRwMGkkDso6TetbyGTz
          claim_id: c_t94X56HETGD1N8F94M8mSM
          source_id: s_66QV89VPW5C5LpwNSWAkuv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vqMn91hqaFLS4765vP311p
        subject_person_id: p_bXb1a91Q9PkAEBjz8rUBFn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國棟（卒于1798年），清人物。籍贯萬全，入仕募入軍伍，曾任堡把總、堡千總、協中軍都司。（中国历代人物传记资料库 CBDB 69332）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0jEzKAOsQxmA-qwqcFV6BY
          claim_id: c_vqMn91hqaFLS4765vP311p
          source_id: s_66QV89VPW5C5LpwNSWAkuv
          stance: supports
          locator: CBDB:69332
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

# 王國棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國棟 | accepted |
| death.date | 1798年 | accepted |
| bio.summary | 王國棟（卒于1798年），清人物。籍贯萬全，入仕募入軍伍，曾任堡把總、堡千總、協中軍都司。（中国历代人物传记资料库 CBDB 69332） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國棟（CBDB 69332）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69332&o=json)
