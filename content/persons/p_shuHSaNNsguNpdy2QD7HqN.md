---
schema: wang-person/v1
id: p_shuHSaNNsguNpdy2QD7HqN
status: active
merged_into: null
display_name: 王偉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rDzss9JtvEe7Yfqo3op1Rj
        subject_person_id: p_shuHSaNNsguNpdy2QD7HqN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hXsuJi1AhP4amKaBrsbpxp
          claim_id: c_rDzss9JtvEe7Yfqo3op1Rj
          source_id: s_KbsoSfsUpYM4Ud55RqbxhU
          stance: supports
          locator: CBDB:326389
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326389）
          source: &a1
            id: s_KbsoSfsUpYM4Ud55RqbxhU
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 326389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326389&o=json
            external_identifier: CBDB:326389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.216Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ziz8DymS6bHFJq9S4Pw9KQ
        subject_person_id: p_shuHSaNNsguNpdy2QD7HqN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偉，明人物。嘉靖四十一年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 326389）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2MZHch-06Y7SKUe2oE0q1g
          claim_id: c_Ziz8DymS6bHFJq9S4Pw9KQ
          source_id: s_KbsoSfsUpYM4Ud55RqbxhU
          stance: supports
          locator: CBDB:326389
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

# 王偉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偉 | accepted |
| bio.summary | 王偉，明人物。嘉靖四十一年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 326389） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王偉（CBDB 326389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326389&o=json)
