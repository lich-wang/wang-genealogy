---
schema: wang-person/v1
id: p_n2oTZTtv7eB89Qsr3D1F47
status: active
merged_into: null
display_name: 王价
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dmETyDKraSjA3fLP1oBATe
        subject_person_id: p_n2oTZTtv7eB89Qsr3D1F47
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王价
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YUjBtqg12PBsUfJ9Xev4vX
          claim_id: c_dmETyDKraSjA3fLP1oBATe
          source_id: s_a5MFWQJxgZwiBkxkoyyDtm
          stance: supports
          locator: CBDB:294961
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294961）
          source: &a1
            id: s_a5MFWQJxgZwiBkxkoyyDtm
            source_type: api_record
            title: 中国历代人物传记资料库：王价（CBDB 294961）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294961&o=json
            external_identifier: CBDB:294961
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mn8JVMCMANDCD68uVWHQm5
        subject_person_id: p_n2oTZTtv7eB89Qsr3D1F47
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王价，明人物。嘉靖十一年進士，籍贯文安。（中国历代人物传记资料库 CBDB 294961）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Kh2UNxKwqj5qWyVniaZfr4
          claim_id: c_Mn8JVMCMANDCD68uVWHQm5
          source_id: s_a5MFWQJxgZwiBkxkoyyDtm
          stance: supports
          locator: CBDB:294961
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

# 王价

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王价 | accepted |
| bio.summary | 王价，明人物。嘉靖十一年進士，籍贯文安。（中国历代人物传记资料库 CBDB 294961） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王价（CBDB 294961）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294961&o=json)
