---
schema: wang-person/v1
id: p_9LSFQN2Ue5grcfePxzwh6f
status: active
merged_into: null
display_name: 王承勳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iJ3Gzo8bhBbBEqfEpBjPw2
        subject_person_id: p_9LSFQN2Ue5grcfePxzwh6f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承勳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rts7MnB9o5ACuuCY18bDYF
          claim_id: c_iJ3Gzo8bhBbBEqfEpBjPw2
          source_id: s_P54A5UgS2hZWgMewuAWhPP
          stance: supports
          locator: CBDB:232018
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（232018）
          source: &a1
            id: s_P54A5UgS2hZWgMewuAWhPP
            source_type: api_record
            title: 中国历代人物传记资料库：王承勳（CBDB 232018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232018&o=json
            external_identifier: CBDB:232018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.685Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_skN8Ebo1Z3a5Z6JDh9JeCj
        subject_person_id: p_9LSFQN2Ue5grcfePxzwh6f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承勳，明人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 232018）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5Olxa4ZhpVkZjq2S9H8wvP
          claim_id: c_skN8Ebo1Z3a5Z6JDh9JeCj
          source_id: s_P54A5UgS2hZWgMewuAWhPP
          stance: supports
          locator: CBDB:232018
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_4LV_XKjBGaySm1sBNChjJO
        subject_person_id: p_9LSFQN2Ue5grcfePxzwh6f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iRFm6e1TaQGqodt29a3YWr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qmp5JooxfNzniP-CYp5tUz
          claim_id: c_4LV_XKjBGaySm1sBNChjJO
          source_id: s_P54A5UgS2hZWgMewuAWhPP
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第八十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iRFm6e1TaQGqodt29a3YWr
        status: active
        display_name: 王廷錫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承勳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承勳 | accepted |
| bio.summary | 王承勳，明人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 232018） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_iRFm6e1TaQGqodt29a3YWr | 王廷錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承勳（CBDB 232018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232018&o=json)
