---
schema: wang-person/v1
id: p_kAgKpD4X8VXubGDiK7GRNB
status: active
merged_into: null
display_name: 王元衡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VQ2qtLH9uJ3ECzkCaC7PnF
        subject_person_id: p_kAgKpD4X8VXubGDiK7GRNB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元衡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hXUC2HDWzNhUu2QiF2QX8T
          claim_id: c_VQ2qtLH9uJ3ECzkCaC7PnF
          source_id: s_r6aBPsfhKW3BHR7zAE5LC4
          stance: supports
          locator: CBDB:235471
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（235471）
          source: &a1
            id: s_r6aBPsfhKW3BHR7zAE5LC4
            source_type: api_record
            title: 中国历代人物传记资料库：王元衡（CBDB 235471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235471&o=json
            external_identifier: CBDB:235471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.757Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DP9kc356FMxPT6VB5GZSFH
        subject_person_id: p_kAgKpD4X8VXubGDiK7GRNB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元衡，明人物。籍贯東光。（中国历代人物传记资料库 CBDB 235471）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YWmULFQXAqMB60HDYTQsTd
          claim_id: c_DP9kc356FMxPT6VB5GZSFH
          source_id: s_r6aBPsfhKW3BHR7zAE5LC4
          stance: supports
          locator: CBDB:235471
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

# 王元衡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元衡 | accepted |
| bio.summary | 王元衡，明人物。籍贯東光。（中国历代人物传记资料库 CBDB 235471） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元衡（CBDB 235471）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235471&o=json)
