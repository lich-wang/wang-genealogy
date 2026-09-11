---
schema: wang-person/v1
id: p_Zh27C4RYJ7iKyaBrUGWzhq
status: active
merged_into: null
display_name: 王希旦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pN38ijCPtSt2BegkqBf7Ed
        subject_person_id: p_Zh27C4RYJ7iKyaBrUGWzhq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希旦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KnR13QxAv4GCStAepeZw4F
          claim_id: c_pN38ijCPtSt2BegkqBf7Ed
          source_id: s_a6C3hrCM9vAF2sQXWsC5Lm
          stance: supports
          locator: CBDB:342981
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342981）
          source: &a1
            id: s_a6C3hrCM9vAF2sQXWsC5Lm
            source_type: api_record
            title: 中国历代人物传记资料库：王希旦（CBDB 342981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342981&o=json
            external_identifier: CBDB:342981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.149Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EBS3hJwAyuy2QThgaecgZL
        subject_person_id: p_Zh27C4RYJ7iKyaBrUGWzhq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希旦，清人物。明清進士進士，籍贯福山，入仕進士。（中国历代人物传记资料库 CBDB 342981）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rv5y4qsEhHcLNuhtKti19Z
          claim_id: c_EBS3hJwAyuy2QThgaecgZL
          source_id: s_a6C3hrCM9vAF2sQXWsC5Lm
          stance: supports
          locator: CBDB:342981
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

# 王希旦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希旦 | accepted |
| bio.summary | 王希旦，清人物。明清進士進士，籍贯福山，入仕進士。（中国历代人物传记资料库 CBDB 342981） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希旦（CBDB 342981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342981&o=json)
