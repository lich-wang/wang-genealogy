---
schema: wang-person/v1
id: p_uxe4h8UCwGxwDeBzPsbFdo
status: active
merged_into: null
display_name: 王福晼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SYH8nh49XAsZqffPwDRmk1
        subject_person_id: p_uxe4h8UCwGxwDeBzPsbFdo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福晼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4Sxbk14dtngEjRK8TXKRcX
          claim_id: c_SYH8nh49XAsZqffPwDRmk1
          source_id: s_Cvws2eq3bAEd6XLp5ovY7b
          stance: supports
          locator: CBDB:639610
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639610）
          source: &a1
            id: s_Cvws2eq3bAEd6XLp5ovY7b
            source_type: api_record
            title: 中国历代人物传记资料库：王福晼（CBDB 639610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639610&o=json
            external_identifier: CBDB:639610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iN6V6non4X588W8mKNTckd
        subject_person_id: p_uxe4h8UCwGxwDeBzPsbFdo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福晼，清人物。籍贯衡州府，入仕副榜，曾任訓導。（中国历代人物传记资料库 CBDB 639610）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gUlq2l6iH6d0B56mUaI6Xr
          claim_id: c_iN6V6non4X588W8mKNTckd
          source_id: s_Cvws2eq3bAEd6XLp5ovY7b
          stance: supports
          locator: CBDB:639610
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

# 王福晼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福晼 | accepted |
| bio.summary | 王福晼，清人物。籍贯衡州府，入仕副榜，曾任訓導。（中国历代人物传记资料库 CBDB 639610） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福晼（CBDB 639610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639610&o=json)
