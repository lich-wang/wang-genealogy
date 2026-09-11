---
schema: wang-person/v1
id: p_eLjqX3CJf8vw3E1ydYjMVQ
status: active
merged_into: null
display_name: 王亮采
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oXScAFPhB4X1JjE14PWvPW
        subject_person_id: p_eLjqX3CJf8vw3E1ydYjMVQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亮采
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pvfPPkp1YgShnEwNV6v2gg
          claim_id: c_oXScAFPhB4X1JjE14PWvPW
          source_id: s_8WccRxx9o5ymJgDjC7ubwK
          stance: supports
          locator: CBDB:489665
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（489665）
          source: &a1
            id: s_8WccRxx9o5ymJgDjC7ubwK
            source_type: api_record
            title: 中国历代人物传记资料库：王亮采（CBDB 489665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489665&o=json
            external_identifier: CBDB:489665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.066Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1tvR1MvazKa7M2Lg9d6jJA
        subject_person_id: p_eLjqX3CJf8vw3E1ydYjMVQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亮采，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 489665）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_21S_RalJAs1ddNoIVNeljW
          claim_id: c_1tvR1MvazKa7M2Lg9d6jJA
          source_id: s_8WccRxx9o5ymJgDjC7ubwK
          stance: supports
          locator: CBDB:489665
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

# 王亮采

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亮采 | accepted |
| bio.summary | 王亮采，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 489665） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王亮采（CBDB 489665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489665&o=json)
