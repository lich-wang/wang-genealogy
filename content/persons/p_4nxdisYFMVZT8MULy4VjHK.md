---
schema: wang-person/v1
id: p_4nxdisYFMVZT8MULy4VjHK
status: active
merged_into: null
display_name: 王公穀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_opkKgCMKiXjkbP4qvbaKFY
        subject_person_id: p_4nxdisYFMVZT8MULy4VjHK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公穀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5BNARh342fistANYw1AoLj
          claim_id: c_opkKgCMKiXjkbP4qvbaKFY
          source_id: s_1sP8SNUvQgH5ez5FYqo3hy
          stance: supports
          locator: CBDB:101072
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101072）
          source: &a1
            id: s_1sP8SNUvQgH5ez5FYqo3hy
            source_type: api_record
            title: 中国历代人物传记资料库：王公穀（CBDB 101072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101072&o=json
            external_identifier: CBDB:101072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.161Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Fufj4VrBcxuZEU46Hc9ZAU
        subject_person_id: p_4nxdisYFMVZT8MULy4VjHK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1318年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hEQ6HqUy7aMnTx7ND39Dea
          claim_id: c_Fufj4VrBcxuZEU46Hc9ZAU
          source_id: s_1sP8SNUvQgH5ez5FYqo3hy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8ZRumRYpM2gDuiJSDJRmNu
        subject_person_id: p_4nxdisYFMVZT8MULy4VjHK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1375年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GLtdNdpCVwyNTWWucoU11x
          claim_id: c_8ZRumRYpM2gDuiJSDJRmNu
          source_id: s_1sP8SNUvQgH5ez5FYqo3hy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mg1ctRv8TiE18CJHkPpV9L
        subject_person_id: p_4nxdisYFMVZT8MULy4VjHK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公穀（1318年—1375年），明人物。籍贯莆田，身份为不求仕。（中国历代人物传记资料库 CBDB 101072）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t_26--W4cuNS32Tz9mSFnl
          claim_id: c_mg1ctRv8TiE18CJHkPpV9L
          source_id: s_1sP8SNUvQgH5ez5FYqo3hy
          stance: supports
          locator: CBDB:101072
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

# 王公穀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公穀 | accepted |
| birth.date | 1318年 | accepted |
| death.date | 1375年 | accepted |
| bio.summary | 王公穀（1318年—1375年），明人物。籍贯莆田，身份为不求仕。（中国历代人物传记资料库 CBDB 101072） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公穀（CBDB 101072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101072&o=json)
