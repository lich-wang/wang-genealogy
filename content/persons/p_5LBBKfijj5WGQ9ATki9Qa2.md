---
schema: wang-person/v1
id: p_5LBBKfijj5WGQ9ATki9Qa2
status: active
merged_into: null
display_name: 王遐年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Dai5EWjAMpF54218ATwi5B
        subject_person_id: p_5LBBKfijj5WGQ9ATki9Qa2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遐年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uPTUAUEJ17UfGxA98gvBLo
          claim_id: c_Dai5EWjAMpF54218ATwi5B
          source_id: s_H1zSA17S7exZdsHdcWUJYF
          stance: supports
          locator: CBDB:541113
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（541113）
          source: &a1
            id: s_H1zSA17S7exZdsHdcWUJYF
            source_type: api_record
            title: 中国历代人物传记资料库：王遐年（CBDB 541113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=541113&o=json
            external_identifier: CBDB:541113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.431Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XTkqaSvJV81DgaFWQy7Fu8
        subject_person_id: p_5LBBKfijj5WGQ9ATki9Qa2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遐年，宋人物。籍贯太和，入仕進士。（中国历代人物传记资料库 CBDB 541113）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__R4b_LDVW22GUMHJ2xerWf
          claim_id: c_XTkqaSvJV81DgaFWQy7Fu8
          source_id: s_H1zSA17S7exZdsHdcWUJYF
          stance: supports
          locator: CBDB:541113
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

# 王遐年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遐年 | accepted |
| bio.summary | 王遐年，宋人物。籍贯太和，入仕進士。（中国历代人物传记资料库 CBDB 541113） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遐年（CBDB 541113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=541113&o=json)
