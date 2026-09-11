---
schema: wang-person/v1
id: p_zrb243or7zaXw95dZy5vTy
status: active
merged_into: null
display_name: 王惟儉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dSBYUVhoj3j4iUKF2i2PWy
        subject_person_id: p_zrb243or7zaXw95dZy5vTy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟儉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6WYWvrxTkg4gj2uPgGK5YY
          claim_id: c_dSBYUVhoj3j4iUKF2i2PWy
          source_id: s_DAYK9Gf2Vxe1xuLZVBiNTh
          stance: supports
          locator: CBDB:343874
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343874）
          source: &a1
            id: s_DAYK9Gf2Vxe1xuLZVBiNTh
            source_type: api_record
            title: 中国历代人物传记资料库：王惟儉（CBDB 343874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343874&o=json
            external_identifier: CBDB:343874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.557Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MjzWYywDQd9kwxecxwhHhF
        subject_person_id: p_zrb243or7zaXw95dZy5vTy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟儉，明人物。明清進士進士，籍贯祥符，入仕進士。（中国历代人物传记资料库 CBDB 343874）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7AY1GLDlZOmINHawYQSYDl
          claim_id: c_MjzWYywDQd9kwxecxwhHhF
          source_id: s_DAYK9Gf2Vxe1xuLZVBiNTh
          stance: supports
          locator: CBDB:343874
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

# 王惟儉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟儉 | accepted |
| bio.summary | 王惟儉，明人物。明清進士進士，籍贯祥符，入仕進士。（中国历代人物传记资料库 CBDB 343874） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惟儉（CBDB 343874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343874&o=json)
