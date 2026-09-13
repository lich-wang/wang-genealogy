---
schema: wang-person/v1
id: p_d6C2oucF85fCi8g8BcAKPN
status: active
merged_into: null
display_name: 王愛之
cbdb_id: 213570
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VfZNfNDma2ZA4dYSbmo7TJ
        subject_person_id: p_d6C2oucF85fCi8g8BcAKPN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愛之，明人物。天順八年進士，籍贯大名府。（中国历代人物传记资料库 CBDB 213570）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_6TVa67Iu5SIfZin1VhwWql
          claim_id: c_VfZNfNDma2ZA4dYSbmo7TJ
          source_id: s_jETaZSE1gR7iTA22Jb9XMz
          stance: supports
          locator: CBDB:213570
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jETaZSE1gR7iTA22Jb9XMz
            source_type: api_record
            title: 中国历代人物传记资料库：王愛之（CBDB 213570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213570&o=json
            external_identifier: CBDB:213570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_91MBZGkXDjnLSe1jNpSt91
        subject_person_id: p_d6C2oucF85fCi8g8BcAKPN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愛之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZDcDu7SxUyHP14Q3NPnMqP
          claim_id: c_91MBZGkXDjnLSe1jNpSt91
          source_id: s_jETaZSE1gR7iTA22Jb9XMz
          stance: supports
          locator: CBDB:213570
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
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

# 王愛之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王愛之，明人物。天順八年進士，籍贯大名府。（中国历代人物传记资料库 CBDB 213570） | accepted |
| name.primary | 王愛之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王愛之（CBDB 213570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213570&o=json)
