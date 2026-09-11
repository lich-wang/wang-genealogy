---
schema: wang-person/v1
id: p_1xhS4gZjM4LRwh35184zsC
status: active
merged_into: null
display_name: 王宏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MxEQkCK7R19K2hpSvApP3f
        subject_person_id: p_1xhS4gZjM4LRwh35184zsC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AwqSXkLxuRYaU833jGmuMZ
          claim_id: c_MxEQkCK7R19K2hpSvApP3f
          source_id: s_ANKjb5HJB8qUaNGuez4Pke
          stance: supports
          locator: CBDB:493752
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（493752）
          source: &a1
            id: s_ANKjb5HJB8qUaNGuez4Pke
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 493752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=493752&o=json
            external_identifier: CBDB:493752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.386Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dfAxgmn717j2hq82UNGvNM
        subject_person_id: p_1xhS4gZjM4LRwh35184zsC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏，明人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 493752）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2Fr6tv71GztEFUS2j-jU6K
          claim_id: c_dfAxgmn717j2hq82UNGvNM
          source_id: s_ANKjb5HJB8qUaNGuez4Pke
          stance: supports
          locator: CBDB:493752
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

# 王宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宏 | accepted |
| bio.summary | 王宏，明人物。入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 493752） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宏（CBDB 493752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=493752&o=json)
