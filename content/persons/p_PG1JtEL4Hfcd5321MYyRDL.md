---
schema: wang-person/v1
id: p_PG1JtEL4Hfcd5321MYyRDL
status: active
merged_into: null
display_name: 王鼎臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cz9msNBqyRkKQk3VAkjiMD
        subject_person_id: p_PG1JtEL4Hfcd5321MYyRDL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8hvhMSAsdBV2ZuQKqtSx3y
          claim_id: c_cz9msNBqyRkKQk3VAkjiMD
          source_id: s_zQEPK1vh7sKoXTuNxBNCjC
          stance: supports
          locator: CBDB:72060
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72060）
          source: &a1
            id: s_zQEPK1vh7sKoXTuNxBNCjC
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎臣（CBDB 72060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72060&o=json
            external_identifier: CBDB:72060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.977Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Ke41F747iofmrNLmrY1FDd
        subject_person_id: p_PG1JtEL4Hfcd5321MYyRDL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1646年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M8K2jDKRNaT9gpQLi1MA5Q
          claim_id: c_Ke41F747iofmrNLmrY1FDd
          source_id: s_zQEPK1vh7sKoXTuNxBNCjC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3232ME5w2wSdLmYsw4fer4
        subject_person_id: p_PG1JtEL4Hfcd5321MYyRDL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎臣（生于1646年），清人物。籍贯高郵州。（中国历代人物传记资料库 CBDB 72060）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C8b1oX6_WWnyWmB2e_zk3D
          claim_id: c_3232ME5w2wSdLmYsw4fer4
          source_id: s_zQEPK1vh7sKoXTuNxBNCjC
          stance: supports
          locator: CBDB:72060
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

# 王鼎臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎臣 | accepted |
| birth.date | 1646年 | accepted |
| bio.summary | 王鼎臣（生于1646年），清人物。籍贯高郵州。（中国历代人物传记资料库 CBDB 72060） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼎臣（CBDB 72060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72060&o=json)
