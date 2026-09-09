---
schema: wang-person/v1
id: p_FZh9Q6PKHgo5SbAnJ5FTrh
status: active
merged_into: null
display_name: 王見賡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ime34pVjiNiymreJQWKfje
        subject_person_id: p_FZh9Q6PKHgo5SbAnJ5FTrh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王見賡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pnE27MDSMK4dPRd9g6ok3M
          claim_id: c_ime34pVjiNiymreJQWKfje
          source_id: s_im3m3BN23CuLN36e6L9b6K
          stance: supports
          locator: CBDB:640231
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640231）
          source: &a1
            id: s_im3m3BN23CuLN36e6L9b6K
            source_type: api_record
            title: 中国历代人物传记资料库：王見賡（CBDB 640231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640231&o=json
            external_identifier: CBDB:640231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.193Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XLgmrgJdcZv7e4XGewZA8w
        subject_person_id: p_FZh9Q6PKHgo5SbAnJ5FTrh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8E96T5Bk3jw74syWWo1y1w
          claim_id: c_XLgmrgJdcZv7e4XGewZA8w
          source_id: s_im3m3BN23CuLN36e6L9b6K
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王見賡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王見賡 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王見賡（CBDB 640231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640231&o=json)
