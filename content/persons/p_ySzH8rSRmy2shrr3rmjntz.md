---
schema: wang-person/v1
id: p_ySzH8rSRmy2shrr3rmjntz
status: active
merged_into: null
display_name: 王有年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ihZM4iq4CNXMW7cg4E9gwo
        subject_person_id: p_ySzH8rSRmy2shrr3rmjntz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c6SrixYk2UCaKHys7CXyCF
          claim_id: c_ihZM4iq4CNXMW7cg4E9gwo
          source_id: s_YauX18733JvLGzEshjLpEy
          stance: supports
          locator: CBDB:309083
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309083）
          source: &a1
            id: s_YauX18733JvLGzEshjLpEy
            source_type: api_record
            title: 中国历代人物传记资料库：王有年（CBDB 309083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309083&o=json
            external_identifier: CBDB:309083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.805Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7jx4UvTNPZBE5J1z9n2jXE
        subject_person_id: p_ySzH8rSRmy2shrr3rmjntz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有年，明人物。嘉靖二十六年進士，籍贯黔陽，曾任訓導。（中国历代人物传记资料库 CBDB 309083）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lhy7DWGu6bPJn4bL-h_Crn
          claim_id: c_7jx4UvTNPZBE5J1z9n2jXE
          source_id: s_YauX18733JvLGzEshjLpEy
          stance: supports
          locator: CBDB:309083
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

# 王有年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有年 | accepted |
| bio.summary | 王有年，明人物。嘉靖二十六年進士，籍贯黔陽，曾任訓導。（中国历代人物传记资料库 CBDB 309083） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有年（CBDB 309083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309083&o=json)
