---
schema: wang-person/v1
id: p_sG2gH9EPKCkjpJGTpH1HRj
status: active
merged_into: null
display_name: 王炫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SrrVezLgDe1zGgU4UvtYG7
        subject_person_id: p_sG2gH9EPKCkjpJGTpH1HRj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_56XaAup78tkeoxy5KMM416
          claim_id: c_SrrVezLgDe1zGgU4UvtYG7
          source_id: s_bf1g1XKCKFZXDRrLnPQZoK
          stance: supports
          locator: CBDB:476083
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（476083）
          source: &a1
            id: s_bf1g1XKCKFZXDRrLnPQZoK
            source_type: api_record
            title: 中国历代人物传记资料库：王炫（CBDB 476083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476083&o=json
            external_identifier: CBDB:476083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.440Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3EaAwX8zLG1mW6drt94hcb
        subject_person_id: p_sG2gH9EPKCkjpJGTpH1HRj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炫，清人物。入仕考上會試/貢士，曾任學正。（中国历代人物传记资料库 CBDB 476083）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hiKmCd6msSGYO01YQHi2cm
          claim_id: c_3EaAwX8zLG1mW6drt94hcb
          source_id: s_bf1g1XKCKFZXDRrLnPQZoK
          stance: supports
          locator: CBDB:476083
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

# 王炫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炫 | accepted |
| bio.summary | 王炫，清人物。入仕考上會試/貢士，曾任學正。（中国历代人物传记资料库 CBDB 476083） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炫（CBDB 476083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476083&o=json)
