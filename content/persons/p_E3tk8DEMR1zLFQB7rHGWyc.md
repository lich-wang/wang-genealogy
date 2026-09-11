---
schema: wang-person/v1
id: p_E3tk8DEMR1zLFQB7rHGWyc
status: active
merged_into: null
display_name: 王鈞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uUUp1Ceg2GjMvW1puUPLUi
        subject_person_id: p_E3tk8DEMR1zLFQB7rHGWyc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B15iVfxSAVSzU2EAtELoGa
          claim_id: c_uUUp1Ceg2GjMvW1puUPLUi
          source_id: s_ZGBNtY6jVBS4UyN1BjxRKi
          stance: supports
          locator: CBDB:212642
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212642）
          source: &a1
            id: s_ZGBNtY6jVBS4UyN1BjxRKi
            source_type: api_record
            title: 中国历代人物传记资料库：王鈞（CBDB 212642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212642&o=json
            external_identifier: CBDB:212642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.092Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rU1bBNYKuLjKWjWWDnyzQA
        subject_person_id: p_E3tk8DEMR1zLFQB7rHGWyc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈞，明人物。萬曆二年進士，籍贯壽張，入仕監生。（中国历代人物传记资料库 CBDB 212642）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kfWNU9i3-I3reUsa8PGpJQ
          claim_id: c_rU1bBNYKuLjKWjWWDnyzQA
          source_id: s_ZGBNtY6jVBS4UyN1BjxRKi
          stance: supports
          locator: CBDB:212642
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

# 王鈞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鈞 | accepted |
| bio.summary | 王鈞，明人物。萬曆二年進士，籍贯壽張，入仕監生。（中国历代人物传记资料库 CBDB 212642） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鈞（CBDB 212642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212642&o=json)
