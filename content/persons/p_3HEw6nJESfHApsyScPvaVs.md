---
schema: wang-person/v1
id: p_3HEw6nJESfHApsyScPvaVs
status: active
merged_into: null
display_name: 王埰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FXV3Ms94XeixsgLx9whpqK
        subject_person_id: p_3HEw6nJESfHApsyScPvaVs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王埰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tBPNhdWHe2h2V8m9erXVt8
          claim_id: c_FXV3Ms94XeixsgLx9whpqK
          source_id: s_y6KU2261skYgL5kkCwaZYC
          stance: supports
          locator: CBDB:343059
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343059）
          source: &a1
            id: s_y6KU2261skYgL5kkCwaZYC
            source_type: api_record
            title: 中国历代人物传记资料库：王埰（CBDB 343059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343059&o=json
            external_identifier: CBDB:343059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.191Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HsJQHFqagEF1rRw3r16YHL
        subject_person_id: p_3HEw6nJESfHApsyScPvaVs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王埰，清人物。明清進士進士，籍贯山東省，入仕進士。（中国历代人物传记资料库 CBDB 343059）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L8m79Fc8_axYMaO0HTeLdX
          claim_id: c_HsJQHFqagEF1rRw3r16YHL
          source_id: s_y6KU2261skYgL5kkCwaZYC
          stance: supports
          locator: CBDB:343059
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

# 王埰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王埰 | accepted |
| bio.summary | 王埰，清人物。明清進士進士，籍贯山東省，入仕進士。（中国历代人物传记资料库 CBDB 343059） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王埰（CBDB 343059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343059&o=json)
