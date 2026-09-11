---
schema: wang-person/v1
id: p_ifmJrvRgbTeXUGYWBAdKAv
status: active
merged_into: null
display_name: 王近光
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GM7pALKPcLuQm2kTyFXwRs
        subject_person_id: p_ifmJrvRgbTeXUGYWBAdKAv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王近光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UjWH6qGiLFmC9n4pQtK3gx
          claim_id: c_GM7pALKPcLuQm2kTyFXwRs
          source_id: s_fxne1kJpLVtdcoreHgM6bS
          stance: supports
          locator: CBDB:302579
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302579）
          source: &a1
            id: s_fxne1kJpLVtdcoreHgM6bS
            source_type: api_record
            title: 中国历代人物传记资料库：王近光（CBDB 302579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302579&o=json
            external_identifier: CBDB:302579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.654Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PLX5yMY6t7ebFUCU66p1Qn
        subject_person_id: p_ifmJrvRgbTeXUGYWBAdKAv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王近光，明人物。嘉靖二十年進士，籍贯新城。（中国历代人物传记资料库 CBDB 302579）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_49suNivK65xuk5IGn3Emg4
          claim_id: c_PLX5yMY6t7ebFUCU66p1Qn
          source_id: s_fxne1kJpLVtdcoreHgM6bS
          stance: supports
          locator: CBDB:302579
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

# 王近光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王近光 | accepted |
| bio.summary | 王近光，明人物。嘉靖二十年進士，籍贯新城。（中国历代人物传记资料库 CBDB 302579） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王近光（CBDB 302579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302579&o=json)
