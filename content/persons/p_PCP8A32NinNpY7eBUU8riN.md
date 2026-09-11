---
schema: wang-person/v1
id: p_PCP8A32NinNpY7eBUU8riN
status: active
merged_into: null
display_name: 王長齢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RMriLyAschax4TqwRV93AA
        subject_person_id: p_PCP8A32NinNpY7eBUU8riN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長齢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7pRHDTfTfN9baDFV88sfGM
          claim_id: c_RMriLyAschax4TqwRV93AA
          source_id: s_dYs2xUUicb9SoWzEct6xJv
          stance: supports
          locator: CBDB:640743
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640743）
          source: &a1
            id: s_dYs2xUUicb9SoWzEct6xJv
            source_type: api_record
            title: 中国历代人物传记资料库：王長齢（CBDB 640743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640743&o=json
            external_identifier: CBDB:640743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.354Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bAdh3bFR9U4zMMfLj6LJYx
        subject_person_id: p_PCP8A32NinNpY7eBUU8riN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王長齢，清人物。籍贯陳州府，入仕貢生: 拔貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 640743）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J67YSXFuSAR24rTQkAfemP
          claim_id: c_bAdh3bFR9U4zMMfLj6LJYx
          source_id: s_dYs2xUUicb9SoWzEct6xJv
          stance: supports
          locator: CBDB:640743
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

# 王長齢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王長齢 | accepted |
| bio.summary | 王長齢，清人物。籍贯陳州府，入仕貢生: 拔貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 640743） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王長齢（CBDB 640743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640743&o=json)
