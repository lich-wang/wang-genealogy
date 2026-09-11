---
schema: wang-person/v1
id: p_X8Tu3oin2x4QXSXSkj4NZR
status: active
merged_into: null
display_name: 王翔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YjEwHTHuv4jUo8Dv2ozBso
        subject_person_id: p_X8Tu3oin2x4QXSXSkj4NZR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9eaKakY3e3f3ThsC9Ma45c
          claim_id: c_YjEwHTHuv4jUo8Dv2ozBso
          source_id: s_PSMJragtMN2wSCugct829W
          stance: supports
          locator: CBDB:463264
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（463264）
          source: &a1
            id: s_PSMJragtMN2wSCugct829W
            source_type: api_record
            title: 中国历代人物传记资料库：王翔（CBDB 463264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=463264&o=json
            external_identifier: CBDB:463264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.875Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NtzQW6sTa6HTYY5PbVJL1X
        subject_person_id: p_X8Tu3oin2x4QXSXSkj4NZR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翔，唐人物。曾任節度留後。（中国历代人物传记资料库 CBDB 463264）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oXjDvPW_Y7flEfj3YwjjTF
          claim_id: c_NtzQW6sTa6HTYY5PbVJL1X
          source_id: s_PSMJragtMN2wSCugct829W
          stance: supports
          locator: CBDB:463264
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

# 王翔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翔 | accepted |
| bio.summary | 王翔，唐人物。曾任節度留後。（中国历代人物传记资料库 CBDB 463264） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翔（CBDB 463264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=463264&o=json)
