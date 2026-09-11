---
schema: wang-person/v1
id: p_uNtnqiRX76F5XwNB2c6dmD
status: active
merged_into: null
display_name: 王逵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ATEp5PpLagDwjELHfd5Fzk
        subject_person_id: p_uNtnqiRX76F5XwNB2c6dmD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nm3WLUp2qfKG3FVyp22coq
          claim_id: c_ATEp5PpLagDwjELHfd5Fzk
          source_id: s_74JDUCh5hFpaEfbACqUSrr
          stance: supports
          locator: CBDB:445566
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445566）
          source: &a1
            id: s_74JDUCh5hFpaEfbACqUSrr
            source_type: api_record
            title: 中国历代人物传记资料库：王逵（CBDB 445566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445566&o=json
            external_identifier: CBDB:445566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.177Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ls3wnUT4c8CssC2i6Mj7c9
        subject_person_id: p_uNtnqiRX76F5XwNB2c6dmD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逵，史料所见人物。本项目依据《中国历代人物传记资料库：王逵（CBDB 445566）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pbjQFeQdgIwji5wTubj8zC
          claim_id: c_Ls3wnUT4c8CssC2i6Mj7c9
          source_id: s_74JDUCh5hFpaEfbACqUSrr
          stance: supports
          locator: CBDB:445566
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王逵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逵 | accepted |
| bio.summary | 王逵，史料所见人物。本项目依据《中国历代人物传记资料库：王逵（CBDB 445566）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王逵（CBDB 445566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445566&o=json)
