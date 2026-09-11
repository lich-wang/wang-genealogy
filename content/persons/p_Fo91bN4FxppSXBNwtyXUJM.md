---
schema: wang-person/v1
id: p_Fo91bN4FxppSXBNwtyXUJM
status: active
merged_into: null
display_name: 王敏學
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_umKkHjMkFpkX6yTeqBvYLT
        subject_person_id: p_Fo91bN4FxppSXBNwtyXUJM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NZ5s3E5dhaFsHouJidD4cn
          claim_id: c_umKkHjMkFpkX6yTeqBvYLT
          source_id: s_WVjSm868Gv18q4z1Aq7E9c
          stance: supports
          locator: CBDB:33393
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（33393）
          source: &a1
            id: s_WVjSm868Gv18q4z1Aq7E9c
            source_type: api_record
            title: 中国历代人物传记资料库：王敏學（CBDB 33393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33393&o=json
            external_identifier: CBDB:33393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.067Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8RGmqGU2j6mkSHbvHhXeLF
        subject_person_id: p_Fo91bN4FxppSXBNwtyXUJM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏學，宋人物。籍贯崑山，入仕恩蔭、蔭補。（中国历代人物传记资料库 CBDB 33393）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_foOAxb_aqiHmpp82tpvpik
          claim_id: c_8RGmqGU2j6mkSHbvHhXeLF
          source_id: s_WVjSm868Gv18q4z1Aq7E9c
          stance: supports
          locator: CBDB:33393
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

# 王敏學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敏學 | accepted |
| bio.summary | 王敏學，宋人物。籍贯崑山，入仕恩蔭、蔭補。（中国历代人物传记资料库 CBDB 33393） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敏學（CBDB 33393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33393&o=json)
