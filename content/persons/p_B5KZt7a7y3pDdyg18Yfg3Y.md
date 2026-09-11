---
schema: wang-person/v1
id: p_B5KZt7a7y3pDdyg18Yfg3Y
status: active
merged_into: null
display_name: 王方大
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uBXZ7LuhngjDtpHJvaRrP2
        subject_person_id: p_B5KZt7a7y3pDdyg18Yfg3Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方大
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HKUzc8QBPhmxKzApKYpDNX
          claim_id: c_uBXZ7LuhngjDtpHJvaRrP2
          source_id: s_hhLZZVAQJy3rSAS5gYjS5Y
          stance: supports
          locator: CBDB:142534
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142534）
          source: &a1
            id: s_hhLZZVAQJy3rSAS5gYjS5Y
            source_type: api_record
            title: 中国历代人物传记资料库：王方大（CBDB 142534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142534&o=json
            external_identifier: CBDB:142534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.217Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AF19LLJHCu2SSgWHrW3S9G
        subject_person_id: p_B5KZt7a7y3pDdyg18Yfg3Y
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 615年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Z9UNLrPbybeyLbA3DXfLp
          claim_id: c_AF19LLJHCu2SSgWHrW3S9G
          source_id: s_hhLZZVAQJy3rSAS5gYjS5Y
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
        id: c_UFMF6xPUmdHn5dot7xYJap
        subject_person_id: p_B5KZt7a7y3pDdyg18Yfg3Y
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 663年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ux97mp1svw77W1QhuXGhGk
          claim_id: c_UFMF6xPUmdHn5dot7xYJap
          source_id: s_hhLZZVAQJy3rSAS5gYjS5Y
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
        id: c_1bZPgqRQW5tJaNnUyFTDTv
        subject_person_id: p_B5KZt7a7y3pDdyg18Yfg3Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方大（615年—663年），唐人物。籍贯琅琊。（中国历代人物传记资料库 CBDB 142534）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rAtabTvD7MtPwgGrkkrESr
          claim_id: c_1bZPgqRQW5tJaNnUyFTDTv
          source_id: s_hhLZZVAQJy3rSAS5gYjS5Y
          stance: supports
          locator: CBDB:142534
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_34CvCS-cNy5u06xWMa7i_Z
        subject_person_id: p_5NN9787oFp3VzDZzys2LX2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B5KZt7a7y3pDdyg18Yfg3Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CC9M83t6Y7fw3yulPZ_9PN
          claim_id: c_34CvCS-cNy5u06xWMa7i_Z
          source_id: s_hhLZZVAQJy3rSAS5gYjS5Y
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Longshuo27：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5NN9787oFp3VzDZzys2LX2
        status: active
        display_name: 王子唐
        merged_into_person_id: null
  children:
    - claim:
        id: c_wTTYRRhovV6vA5WikyGkRl
        subject_person_id: p_B5KZt7a7y3pDdyg18Yfg3Y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xEHw9dCD6Nqfs9ejJPDUUE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kbNnQ8cMprVHPxbPYeASo-
          claim_id: c_wTTYRRhovV6vA5WikyGkRl
          source_id: s_hhLZZVAQJy3rSAS5gYjS5Y
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Longshuo27：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xEHw9dCD6Nqfs9ejJPDUUE
        status: active
        display_name: 王文貞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_7HQvAxlZ4DRAQbIyTHDYeg
        subject_person_id: p_B5KZt7a7y3pDdyg18Yfg3Y
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_y8YDuqcGRWTq4ZvrjkRQ3P
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__ToMiJ6D7HJE9XMdn4MFvs
          claim_id: c_7HQvAxlZ4DRAQbIyTHDYeg
          source_id: s_3B5dYt6rqi11Xi63nU9npF
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Longshuo27：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3B5dYt6rqi11Xi63nU9npF
            source_type: api_record
            title: 中国历代人物传记资料库：姬氏(王方大妻)（CBDB 162292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162292&o=json
            external_identifier: CBDB:162292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_y8YDuqcGRWTq4ZvrjkRQ3P
        status: active
        display_name: 姬氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王方大

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王方大 | accepted |
| birth.date | 615年 | accepted |
| death.date | 663年 | accepted |
| bio.summary | 王方大（615年—663年），唐人物。籍贯琅琊。（中国历代人物传记资料库 CBDB 142534） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5NN9787oFp3VzDZzys2LX2 | 王子唐 | accepted |
| children | p_xEHw9dCD6Nqfs9ejJPDUUE | 王文貞 | accepted |
| spouses | p_y8YDuqcGRWTq4ZvrjkRQ3P | 姬氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：姬氏(王方大妻)（CBDB 162292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162292&o=json)
- [中国历代人物传记资料库：王方大（CBDB 142534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142534&o=json)
