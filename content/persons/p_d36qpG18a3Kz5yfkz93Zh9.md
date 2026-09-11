---
schema: wang-person/v1
id: p_d36qpG18a3Kz5yfkz93Zh9
status: active
merged_into: null
display_name: 王良士
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r2Am4jUnt6W57Ejd6Gb1iV
        subject_person_id: p_d36qpG18a3Kz5yfkz93Zh9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良士
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g1d7d2hzxTCr4G4pS2tP2w
          claim_id: c_r2Am4jUnt6W57Ejd6Gb1iV
          source_id: s_n2PPadRJg1rJA8qftABKUU
          stance: supports
          locator: CBDB:266084
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266084）
          source: &a1
            id: s_n2PPadRJg1rJA8qftABKUU
            source_type: api_record
            title: 中国历代人物传记资料库：王良士（CBDB 266084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266084&o=json
            external_identifier: CBDB:266084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.712Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W6azrgPQrQ5XEnEgA9wLHS
        subject_person_id: p_d36qpG18a3Kz5yfkz93Zh9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良士，明人物。弘治六年進士，籍贯陳州。（中国历代人物传记资料库 CBDB 266084）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g89pI790i8jZ7lsvTvj_MV
          claim_id: c_W6azrgPQrQ5XEnEgA9wLHS
          source_id: s_n2PPadRJg1rJA8qftABKUU
          stance: supports
          locator: CBDB:266084
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

# 王良士

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良士 | accepted |
| bio.summary | 王良士，明人物。弘治六年進士，籍贯陳州。（中国历代人物传记资料库 CBDB 266084） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王良士（CBDB 266084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266084&o=json)
