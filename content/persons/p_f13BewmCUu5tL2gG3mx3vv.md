---
schema: wang-person/v1
id: p_f13BewmCUu5tL2gG3mx3vv
status: active
merged_into: null
display_name: 王通
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KoSVQC5WP3ZxzEqK5CbVqr
        subject_person_id: p_f13BewmCUu5tL2gG3mx3vv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mhspE8NMA1trfipGZb5i6C
          claim_id: c_KoSVQC5WP3ZxzEqK5CbVqr
          source_id: s_TUG82Jaq2114V5Fex4zb4v
          stance: supports
          locator: CBDB:238053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（238053）
          source: &a1
            id: s_TUG82Jaq2114V5Fex4zb4v
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 238053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238053&o=json
            external_identifier: CBDB:238053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.869Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TkZer35jgkDv86BuZ3S5e9
        subject_person_id: p_f13BewmCUu5tL2gG3mx3vv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通，明人物。成化二年進士，籍贯威縣。（中国历代人物传记资料库 CBDB 238053）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8eBotoc0sZO9VVa8iBfoYF
          claim_id: c_TkZer35jgkDv86BuZ3S5e9
          source_id: s_TUG82Jaq2114V5Fex4zb4v
          stance: supports
          locator: CBDB:238053
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

# 王通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王通 | accepted |
| bio.summary | 王通，明人物。成化二年進士，籍贯威縣。（中国历代人物传记资料库 CBDB 238053） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王通（CBDB 238053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238053&o=json)
