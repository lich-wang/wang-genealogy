---
schema: wang-person/v1
id: p_VN991eQE7L12VKKQ2xUzqB
status: active
merged_into: null
display_name: 王爵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uJMD64qMX6kJS9BAqgZjnB
        subject_person_id: p_VN991eQE7L12VKKQ2xUzqB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3BVcXNWciGZECBG9MxGoeU
          claim_id: c_uJMD64qMX6kJS9BAqgZjnB
          source_id: s_w7B55fW9DgPe9AxjCTgmSx
          stance: supports
          locator: CBDB:489496
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（489496）
          source: &a1
            id: s_w7B55fW9DgPe9AxjCTgmSx
            source_type: api_record
            title: 中国历代人物传记资料库：王爵（CBDB 489496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489496&o=json
            external_identifier: CBDB:489496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.054Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H3315CP34CuRPtQnLXBneZ
        subject_person_id: p_VN991eQE7L12VKKQ2xUzqB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爵，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任教諭。（中国历代人物传记资料库 CBDB 489496）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_84d9XBXsRQWLGgtrsxdspb
          claim_id: c_H3315CP34CuRPtQnLXBneZ
          source_id: s_w7B55fW9DgPe9AxjCTgmSx
          stance: supports
          locator: CBDB:489496
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

# 王爵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爵 | accepted |
| bio.summary | 王爵，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任教諭。（中国历代人物传记资料库 CBDB 489496） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王爵（CBDB 489496）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489496&o=json)
