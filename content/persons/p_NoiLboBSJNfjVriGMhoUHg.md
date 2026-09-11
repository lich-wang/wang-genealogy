---
schema: wang-person/v1
id: p_NoiLboBSJNfjVriGMhoUHg
status: active
merged_into: null
display_name: 王民皥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jo1JRGM9bw5RwTf1TCmxn8
        subject_person_id: p_NoiLboBSJNfjVriGMhoUHg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民皥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1kcfGiVE6ZMCBm79pdkqa3
          claim_id: c_Jo1JRGM9bw5RwTf1TCmxn8
          source_id: s_2L3zDQLEiquEiMBT4kUoG8
          stance: supports
          locator: CBDB:506374
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（506374）
          source: &a1
            id: s_2L3zDQLEiquEiMBT4kUoG8
            source_type: api_record
            title: 中国历代人物传记资料库：王民皥（CBDB 506374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506374&o=json
            external_identifier: CBDB:506374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.994Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T7oQSM5F9kEFqRnF9UjCef
        subject_person_id: p_NoiLboBSJNfjVriGMhoUHg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王民皥，明人物。入仕貢生: 拔貢，曾任知州。（中国历代人物传记资料库 CBDB 506374）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2gzaxcIYCyzTN0Tj5j8xxh
          claim_id: c_T7oQSM5F9kEFqRnF9UjCef
          source_id: s_2L3zDQLEiquEiMBT4kUoG8
          stance: supports
          locator: CBDB:506374
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

# 王民皥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王民皥 | accepted |
| bio.summary | 王民皥，明人物。入仕貢生: 拔貢，曾任知州。（中国历代人物传记资料库 CBDB 506374） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王民皥（CBDB 506374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506374&o=json)
