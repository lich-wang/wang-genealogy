---
schema: wang-person/v1
id: p_yrrUrXecDrc2EMRo1ZAkMz
status: active
merged_into: null
display_name: 王寶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GyW6LuKWFn4FK1ts5DGV7Y
        subject_person_id: p_yrrUrXecDrc2EMRo1ZAkMz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jzxxG722CaGneBmrr4WAxK
          claim_id: c_GyW6LuKWFn4FK1ts5DGV7Y
          source_id: s_bgaGia2w31h3uAGxaScCvY
          stance: supports
          locator: CBDB:467185
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（467185）
          source: &a1
            id: s_bgaGia2w31h3uAGxaScCvY
            source_type: api_record
            title: 中国历代人物传记资料库：王寶（CBDB 467185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467185&o=json
            external_identifier: CBDB:467185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.006Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yx9xCi55br1L1LJcZydGF4
        subject_person_id: p_yrrUrXecDrc2EMRo1ZAkMz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶，明人物。曾任僉事。（中国历代人物传记资料库 CBDB 467185）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e0BceYJJ4b5MwA1oy-55lh
          claim_id: c_yx9xCi55br1L1LJcZydGF4
          source_id: s_bgaGia2w31h3uAGxaScCvY
          stance: supports
          locator: CBDB:467185
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

# 王寶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寶 | accepted |
| bio.summary | 王寶，明人物。曾任僉事。（中国历代人物传记资料库 CBDB 467185） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寶（CBDB 467185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467185&o=json)
