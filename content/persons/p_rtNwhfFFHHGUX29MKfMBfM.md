---
schema: wang-person/v1
id: p_rtNwhfFFHHGUX29MKfMBfM
status: active
merged_into: null
display_name: 王心朝
cbdb_id: 342684
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2zET47t66W4YP58HTW6npb
        subject_person_id: p_rtNwhfFFHHGUX29MKfMBfM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王心朝，清人物。明清進士進士，籍贯同安，入仕進士。（中国历代人物传记资料库 CBDB 342684）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_I3iY-vSdZJGxiwpzJJzi_a
          claim_id: c_2zET47t66W4YP58HTW6npb
          source_id: s_J81FVaX3rThC5rucYhUUUS
          stance: supports
          locator: CBDB:342684
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_J81FVaX3rThC5rucYhUUUS
            source_type: api_record
            title: 中国历代人物传记资料库：王心朝（CBDB 342684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342684&o=json
            external_identifier: CBDB:342684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:12.174Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UPD3kmskeEJ74iK4GjspSV
        subject_person_id: p_rtNwhfFFHHGUX29MKfMBfM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王心朝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MHH8wc3mWbUriNg33sBjhN
          claim_id: c_UPD3kmskeEJ74iK4GjspSV
          source_id: s_J81FVaX3rThC5rucYhUUUS
          stance: supports
          locator: CBDB:342684
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4301-4400）｜历史性依据：CBDB 朝代 = 清
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

# 王心朝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王心朝，清人物。明清進士進士，籍贯同安，入仕進士。（中国历代人物传记资料库 CBDB 342684） | accepted |
| name.primary | 王心朝 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王心朝（CBDB 342684）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342684&o=json)
