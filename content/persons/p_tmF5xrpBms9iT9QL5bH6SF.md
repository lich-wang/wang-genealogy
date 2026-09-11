---
schema: wang-person/v1
id: p_tmF5xrpBms9iT9QL5bH6SF
status: active
merged_into: null
display_name: 王瑄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KQRrE4qY3Ur9JQ5nMHJC9X
        subject_person_id: p_tmF5xrpBms9iT9QL5bH6SF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AoibdaryYXWw5kwJnwkdee
          claim_id: c_KQRrE4qY3Ur9JQ5nMHJC9X
          source_id: s_D55uUDfXNLFY63t6KEeJD5
          stance: supports
          locator: CBDB:260239
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260239）
          source: &a1
            id: s_D55uUDfXNLFY63t6KEeJD5
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 260239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260239&o=json
            external_identifier: CBDB:260239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.487Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DznC66VE15Lq6ksKRX5AB4
        subject_person_id: p_tmF5xrpBms9iT9QL5bH6SF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄，明人物。成化二十三年進士，籍贯海豐，曾任義官。（中国历代人物传记资料库 CBDB 260239）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RzxuENsRliT7OA7Jk1kW0M
          claim_id: c_DznC66VE15Lq6ksKRX5AB4
          source_id: s_D55uUDfXNLFY63t6KEeJD5
          stance: supports
          locator: CBDB:260239
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

# 王瑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑄 | accepted |
| bio.summary | 王瑄，明人物。成化二十三年進士，籍贯海豐，曾任義官。（中国历代人物传记资料库 CBDB 260239） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑄（CBDB 260239）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260239&o=json)
