---
schema: wang-person/v1
id: p_sMLavYdiyQMuQNN6oGpHaE
status: active
merged_into: null
display_name: 王三槐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4nVBYnZojY4rNQzK5rmZMd
        subject_person_id: p_sMLavYdiyQMuQNN6oGpHaE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NgVqswvMruB2a3MTXCD7Gi
          claim_id: c_4nVBYnZojY4rNQzK5rmZMd
          source_id: s_kPoCVe1jeRmXh31CstQixY
          stance: supports
          locator: CBDB:298287
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298287）
          source: &a1
            id: s_kPoCVe1jeRmXh31CstQixY
            source_type: api_record
            title: 中国历代人物传记资料库：王三槐（CBDB 298287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298287&o=json
            external_identifier: CBDB:298287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.587Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BoJEf8Qc71wt6yjAyiXAgj
        subject_person_id: p_sMLavYdiyQMuQNN6oGpHaE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三槐，明人物。嘉靖十四年進士，籍贯盩厔。（中国历代人物传记资料库 CBDB 298287）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vUvw9oLZYeM3Zk9k0z43a9
          claim_id: c_BoJEf8Qc71wt6yjAyiXAgj
          source_id: s_kPoCVe1jeRmXh31CstQixY
          stance: supports
          locator: CBDB:298287
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

# 王三槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三槐 | accepted |
| bio.summary | 王三槐，明人物。嘉靖十四年進士，籍贯盩厔。（中国历代人物传记资料库 CBDB 298287） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三槐（CBDB 298287）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298287&o=json)
