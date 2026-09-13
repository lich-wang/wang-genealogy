---
schema: wang-person/v1
id: p_EMU4pX4z4qRFz6L3iM1NYp
status: active
merged_into: null
display_name: 王左
cbdb_id: 288565
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LNpF8NRKSjSSqA3B64yrvA
        subject_person_id: p_EMU4pX4z4qRFz6L3iM1NYp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王左，明人物。嘉靖八年進士，籍贯武邑。（中国历代人物传记资料库 CBDB 288565）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Lc094fpCYash-w_MVEHXtS
          claim_id: c_LNpF8NRKSjSSqA3B64yrvA
          source_id: s_t1yDYhLffAGrQ2wxWqTofM
          stance: supports
          locator: CBDB:288565
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_t1yDYhLffAGrQ2wxWqTofM
            source_type: api_record
            title: 中国历代人物传记资料库：王左（CBDB 288565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288565&o=json
            external_identifier: CBDB:288565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FYSdNH5bRXVWcNP1woDSc2
        subject_person_id: p_EMU4pX4z4qRFz6L3iM1NYp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王左
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ossxUa42aznevjkHWkojPe
          claim_id: c_FYSdNH5bRXVWcNP1woDSc2
          source_id: s_t1yDYhLffAGrQ2wxWqTofM
          stance: supports
          locator: CBDB:288565
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
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

# 王左

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王左，明人物。嘉靖八年進士，籍贯武邑。（中国历代人物传记资料库 CBDB 288565） | accepted |
| name.primary | 王左 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王左（CBDB 288565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288565&o=json)
