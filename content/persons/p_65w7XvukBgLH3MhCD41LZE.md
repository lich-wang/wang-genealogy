---
schema: wang-person/v1
id: p_65w7XvukBgLH3MhCD41LZE
status: active
merged_into: null
display_name: 王致廣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_13AcKtGkDX6vJAiFsNQH5u
        subject_person_id: p_65w7XvukBgLH3MhCD41LZE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致廣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F2kKmAXCe2WPgvU9Cy3eKE
          claim_id: c_13AcKtGkDX6vJAiFsNQH5u
          source_id: s_ywy2HpR3qC6PQLUSySc194
          stance: supports
          locator: CBDB:640017
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640017）
          source: &a1
            id: s_ywy2HpR3qC6PQLUSySc194
            source_type: api_record
            title: 中国历代人物传记资料库：王致廣（CBDB 640017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640017&o=json
            external_identifier: CBDB:640017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.124Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nKQjgT2EnKdiYB5NS2W4tV
        subject_person_id: p_65w7XvukBgLH3MhCD41LZE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王致廣，清人物。籍贯潼川府，入仕貢生: 拔貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 640017）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bh-d2mmY178jaZQ40XgTPt
          claim_id: c_nKQjgT2EnKdiYB5NS2W4tV
          source_id: s_ywy2HpR3qC6PQLUSySc194
          stance: supports
          locator: CBDB:640017
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

# 王致廣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王致廣 | accepted |
| bio.summary | 王致廣，清人物。籍贯潼川府，入仕貢生: 拔貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 640017） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王致廣（CBDB 640017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640017&o=json)
