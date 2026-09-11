---
schema: wang-person/v1
id: p_fah2imJKNyW4FPG4He3MU5
status: active
merged_into: null
display_name: 王佺
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dJcLUvNZboUML8JWQ3iAXG
        subject_person_id: p_fah2imJKNyW4FPG4He3MU5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5JtPdACUjT1C4DJCX6S19P
          claim_id: c_dJcLUvNZboUML8JWQ3iAXG
          source_id: s_Z4ENrkJQj54ECkgY6cmXT7
          stance: supports
          locator: CBDB:140250
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140250）
          source: &a1
            id: s_Z4ENrkJQj54ECkgY6cmXT7
            source_type: api_record
            title: 中国历代人物传记资料库：王佺（CBDB 140250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140250&o=json
            external_identifier: CBDB:140250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fbFNtCN2YFhnRo6G1QUzM1
        subject_person_id: p_fah2imJKNyW4FPG4He3MU5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 652年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EixFV3FxNL34K82457D16x
          claim_id: c_fbFNtCN2YFhnRo6G1QUzM1
          source_id: s_Z4ENrkJQj54ECkgY6cmXT7
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
        id: c_o7rNwXRUmr23cnQgwjB3PP
        subject_person_id: p_fah2imJKNyW4FPG4He3MU5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 707年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uo55d4w1fFmFA43vK7yg6b
          claim_id: c_o7rNwXRUmr23cnQgwjB3PP
          source_id: s_Z4ENrkJQj54ECkgY6cmXT7
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
        id: c_N64PhKPkMvqJJEH3YFQKsJ
        subject_person_id: p_fah2imJKNyW4FPG4He3MU5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佺（652年—707年），唐人物。籍贯陸渾。（中国历代人物传记资料库 CBDB 140250）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZZ-Yac9mdQxjNc2KvpqmFh
          claim_id: c_N64PhKPkMvqJJEH3YFQKsJ
          source_id: s_Z4ENrkJQj54ECkgY6cmXT7
          stance: supports
          locator: CBDB:140250
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XnRt-ILqjnWdgWtBNggI3Z
        subject_person_id: p_VWmQNobTTP6cMTPBfTt5Ur
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fah2imJKNyW4FPG4He3MU5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KFHvfm4ua2IwapIMtxmRuD
          claim_id: c_XnRt-ILqjnWdgWtBNggI3Z
          source_id: s_Z4ENrkJQj54ECkgY6cmXT7
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jinglong 23：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VWmQNobTTP6cMTPBfTt5Ur
        status: active
        display_name: 王惠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ocrFZcjAZFF8jKQoZB6PGJ
        subject_person_id: p_fah2imJKNyW4FPG4He3MU5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_agrYuSM2ANDTfepV6EjDiL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wkLX7iAJ8Hm_2ZTBsnbzh2
          claim_id: c_ocrFZcjAZFF8jKQoZB6PGJ
          source_id: s_-PdadDbhTnVFw4dFNL51Nn
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jinglong 23：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_-PdadDbhTnVFw4dFNL51Nn
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王佺妻)（CBDB 150787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150787&o=json
            external_identifier: CBDB:150787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_agrYuSM2ANDTfepV6EjDiL
        status: active
        display_name: 陳氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王佺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佺 | accepted |
| birth.date | 652年 | accepted |
| death.date | 707年 | accepted |
| bio.summary | 王佺（652年—707年），唐人物。籍贯陸渾。（中国历代人物传记资料库 CBDB 140250） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VWmQNobTTP6cMTPBfTt5Ur | 王惠 | accepted |
| spouses | p_agrYuSM2ANDTfepV6EjDiL | 陳氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王佺妻)（CBDB 150787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150787&o=json)
- [中国历代人物传记资料库：王佺（CBDB 140250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140250&o=json)
