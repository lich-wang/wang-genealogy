---
schema: wang-person/v1
id: p_LkaDUsbCgaauki65chQewo
status: active
merged_into: null
display_name: 王繼勛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_roJcuMMAN2Dmob1CS89sXL
        subject_person_id: p_LkaDUsbCgaauki65chQewo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼勛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zrRMLJJrSXZ9mzwz1USJ6k
          claim_id: c_roJcuMMAN2Dmob1CS89sXL
          source_id: s_DG6FYppSkLHVpDNS5kN2gJ
          stance: supports
          locator: CBDB:489691
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（489691）
          source: &a1
            id: s_DG6FYppSkLHVpDNS5kN2gJ
            source_type: api_record
            title: 中国历代人物传记资料库：王繼勛（CBDB 489691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489691&o=json
            external_identifier: CBDB:489691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.070Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TM4wiiKVrVKqBkqWQUfL1c
        subject_person_id: p_LkaDUsbCgaauki65chQewo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王繼勛，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任縣丞。（中国历代人物传记资料库 CBDB 489691）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R9asp6sMIe-fIz9bPnjc-R
          claim_id: c_TM4wiiKVrVKqBkqWQUfL1c
          source_id: s_DG6FYppSkLHVpDNS5kN2gJ
          stance: supports
          locator: CBDB:489691
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

# 王繼勛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼勛 | accepted |
| bio.summary | 王繼勛，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任縣丞。（中国历代人物传记资料库 CBDB 489691） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼勛（CBDB 489691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489691&o=json)
