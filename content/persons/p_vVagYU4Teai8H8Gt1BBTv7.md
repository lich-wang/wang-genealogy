---
schema: wang-person/v1
id: p_vVagYU4Teai8H8Gt1BBTv7
status: active
merged_into: null
display_name: 王輯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wNZAUixX4XbeWZEHRnKVtt
        subject_person_id: p_vVagYU4Teai8H8Gt1BBTv7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sEz6BcvFN6BUcLa4FthMr3
          claim_id: c_wNZAUixX4XbeWZEHRnKVtt
          source_id: s_2xuHEsmEMk4dxbwRd2zC3n
          stance: supports
          locator: CBDB:330014
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（330014）
          source: &a1
            id: s_2xuHEsmEMk4dxbwRd2zC3n
            source_type: api_record
            title: 中国历代人物传记资料库：王輯（CBDB 330014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330014&o=json
            external_identifier: CBDB:330014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.345Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_37xzJbkD8NqVouiL92Dx7p
        subject_person_id: p_vVagYU4Teai8H8Gt1BBTv7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輯，明人物。嘉靖四十四年進士，籍贯清苑。（中国历代人物传记资料库 CBDB 330014）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qF2WK0KZpcuf4DdTTM1Jg7
          claim_id: c_37xzJbkD8NqVouiL92Dx7p
          source_id: s_2xuHEsmEMk4dxbwRd2zC3n
          stance: supports
          locator: CBDB:330014
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

# 王輯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輯 | accepted |
| bio.summary | 王輯，明人物。嘉靖四十四年進士，籍贯清苑。（中国历代人物传记资料库 CBDB 330014） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輯（CBDB 330014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330014&o=json)
