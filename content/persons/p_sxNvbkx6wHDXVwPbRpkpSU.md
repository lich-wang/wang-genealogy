---
schema: wang-person/v1
id: p_sxNvbkx6wHDXVwPbRpkpSU
status: active
merged_into: null
display_name: 王春芳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ALaiHFGWv7gccpPCWJv8Cu
        subject_person_id: p_sxNvbkx6wHDXVwPbRpkpSU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EHwZvhkeSNmxQPBXpPMWXK
          claim_id: c_ALaiHFGWv7gccpPCWJv8Cu
          source_id: s_UmELKCZPBEo2e4bfspHKJQ
          stance: supports
          locator: CBDB:638423
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638423）
          source: &a1
            id: s_UmELKCZPBEo2e4bfspHKJQ
            source_type: api_record
            title: 中国历代人物传记资料库：王春芳（CBDB 638423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638423&o=json
            external_identifier: CBDB:638423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.682Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AjgKTaTJfzDBXZQNGY6Zq9
        subject_person_id: p_sxNvbkx6wHDXVwPbRpkpSU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春芳，清人物。籍贯四川省，入仕行伍，曾任左營守備。（中国历代人物传记资料库 CBDB 638423）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yu_BX_wGJewcLQgvYP2Hst
          claim_id: c_AjgKTaTJfzDBXZQNGY6Zq9
          source_id: s_UmELKCZPBEo2e4bfspHKJQ
          stance: supports
          locator: CBDB:638423
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

# 王春芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春芳 | accepted |
| bio.summary | 王春芳，清人物。籍贯四川省，入仕行伍，曾任左營守備。（中国历代人物传记资料库 CBDB 638423） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王春芳（CBDB 638423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638423&o=json)
