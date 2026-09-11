---
schema: wang-person/v1
id: p_4mY2XDf8S6hjs2GcrTL9z4
status: active
merged_into: null
display_name: 王炳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4uh3TpFykCW4gEnxJpEaPq
        subject_person_id: p_4mY2XDf8S6hjs2GcrTL9z4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q4X4nZpPrc4fAyn9gSv7vo
          claim_id: c_4uh3TpFykCW4gEnxJpEaPq
          source_id: s_YJZz5yDFbeXKoQCUbV74KD
          stance: supports
          locator: CBDB:496249
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（496249）
          source: &a1
            id: s_YJZz5yDFbeXKoQCUbV74KD
            source_type: api_record
            title: 中国历代人物传记资料库：王炳（CBDB 496249）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=496249&o=json
            external_identifier: CBDB:496249
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.544Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1Ejs8L5uM6so37Q1TRPn7s
        subject_person_id: p_4mY2XDf8S6hjs2GcrTL9z4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 496249）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CbyL-YSU8W7TseMHSAETX8
          claim_id: c_1Ejs8L5uM6so37Q1TRPn7s
          source_id: s_YJZz5yDFbeXKoQCUbV74KD
          stance: supports
          locator: CBDB:496249
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

# 王炳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炳 | accepted |
| bio.summary | 王炳，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 496249） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炳（CBDB 496249）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=496249&o=json)
