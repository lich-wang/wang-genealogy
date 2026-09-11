---
schema: wang-person/v1
id: p_z6CPA3wHm19YKR4izqKsNb
status: active
merged_into: null
display_name: 王鉞
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FTbK65onbSZU1rdT3Nqwv7
        subject_person_id: p_z6CPA3wHm19YKR4izqKsNb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jodUhJm5MBRJ5CbSL6mK55
          claim_id: c_FTbK65onbSZU1rdT3Nqwv7
          source_id: s_7YeLG5uDCvpze2W3UiSauM
          stance: supports
          locator: CBDB:69420
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69420）
          source: &a1
            id: s_7YeLG5uDCvpze2W3UiSauM
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 69420）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69420&o=json
            external_identifier: CBDB:69420
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.263Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4UyzCj24L8EC6u5v5xZdy3
        subject_person_id: p_z6CPA3wHm19YKR4izqKsNb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1623年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9zUDH2gyrBW99XQ57AoHnq
          claim_id: c_4UyzCj24L8EC6u5v5xZdy3
          source_id: s_7YeLG5uDCvpze2W3UiSauM
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
        id: c_Vu8e4F6wJwWr1dpHybuaqa
        subject_person_id: p_z6CPA3wHm19YKR4izqKsNb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1702年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ULos5TZmSUWDYjQCJyMjQU
          claim_id: c_Vu8e4F6wJwWr1dpHybuaqa
          source_id: s_7YeLG5uDCvpze2W3UiSauM
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
        id: c_uQyvz8hjUFhzJCSN69A9AD
        subject_person_id: p_z6CPA3wHm19YKR4izqKsNb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2fgExKgWiCX4nahpsoBdgM
          claim_id: c_uQyvz8hjUFhzJCSN69A9AD
          source_id: s_7YeLG5uDCvpze2W3UiSauM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Oduo3jrGrDlSFpdO4pvzco
        subject_person_id: p_yATrvbDs8MzbFhm464b9wL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z6CPA3wHm19YKR4izqKsNb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_53YYuyfLnq2Va3qGgmv49l
          claim_id: c_Oduo3jrGrDlSFpdO4pvzco
          source_id: s_Heb4rCsJ5C2LAMzVjB9RNF
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13126：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Heb4rCsJ5C2LAMzVjB9RNF
            source_type: api_record
            title: 中国历代人物传记资料库：王恢基（CBDB 526948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526948&o=json
            external_identifier: CBDB:526948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.312Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yATrvbDs8MzbFhm464b9wL
        status: active
        display_name: 王恢基
        merged_into_person_id: null
  children:
    - claim:
        id: c_KyKOQICcSyiAJ2xE3yYpCC
        subject_person_id: p_z6CPA3wHm19YKR4izqKsNb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8JBcCqJ4tWLCWYYoqMzqNi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4aJ0_IuA6rnyt-EqBCGsXY
          claim_id: c_KyKOQICcSyiAJ2xE3yYpCC
          source_id: s_UA9yUYzKwWGHbzzVbqDhkc
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13126：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UA9yUYzKwWGHbzzVbqDhkc
            source_type: api_record
            title: 中国历代人物传记资料库：王沛懏（CBDB 526947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526947&o=json
            external_identifier: CBDB:526947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.311Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8JBcCqJ4tWLCWYYoqMzqNi
        status: active
        display_name: 王沛懏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鉞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉞 | accepted |
| birth.date | 1623年 | accepted |
| death.date | 1702年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yATrvbDs8MzbFhm464b9wL | 王恢基 | accepted |
| children | p_8JBcCqJ4tWLCWYYoqMzqNi | 王沛懏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恢基（CBDB 526948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526948&o=json)
- [中国历代人物传记资料库：王沛懏（CBDB 526947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526947&o=json)
- [中国历代人物传记资料库：王鉞（CBDB 69420）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69420&o=json)
