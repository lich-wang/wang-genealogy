---
schema: wang-person/v1
id: p_PQnLk8ADd54uTvrkUkEgHP
status: active
merged_into: null
display_name: 王士鰲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hAJwF81U8ScDsW1B5u6FyC
        subject_person_id: p_PQnLk8ADd54uTvrkUkEgHP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士鰲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hr7oLjpekfTRv7CW9xD7X1
          claim_id: c_hAJwF81U8ScDsW1B5u6FyC
          source_id: s_QN5ELEzrgibPPM9s2ZfCxy
          stance: supports
          locator: CBDB:636829
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636829）
          source: &a1
            id: s_QN5ELEzrgibPPM9s2ZfCxy
            source_type: api_record
            title: 中国历代人物传记资料库：王士鰲（CBDB 636829）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636829&o=json
            external_identifier: CBDB:636829
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.263Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f282uCcAnERRjsjvkCavjM
        subject_person_id: p_PQnLk8ADd54uTvrkUkEgHP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士鰲，清人物。籍贯惠安，入仕進士，曾任教授。（中国历代人物传记资料库 CBDB 636829）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0RF6wTVYMKh4xDkPLa_q7w
          claim_id: c_f282uCcAnERRjsjvkCavjM
          source_id: s_QN5ELEzrgibPPM9s2ZfCxy
          stance: supports
          locator: CBDB:636829
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

# 王士鰲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士鰲 | accepted |
| bio.summary | 王士鰲，清人物。籍贯惠安，入仕進士，曾任教授。（中国历代人物传记资料库 CBDB 636829） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士鰲（CBDB 636829）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636829&o=json)
