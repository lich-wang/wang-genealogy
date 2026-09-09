---
schema: wang-person/v1
id: p_auY2ECw7sAiUuLHD3ZpD5P
status: active
merged_into: null
display_name: 王厚襄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4dfhNPQJ7xKqKXxL2WN42v
        subject_person_id: p_auY2ECw7sAiUuLHD3ZpD5P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王厚襄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w5Yvg4ndD2etBJbSvGNP2i
          claim_id: c_4dfhNPQJ7xKqKXxL2WN42v
          source_id: s_SCYem5ihLcR7rZFsK8MLdC
          stance: supports
          locator: CBDB:636447
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636447）
          source: &a1
            id: s_SCYem5ihLcR7rZFsK8MLdC
            source_type: api_record
            title: 中国历代人物传记资料库：王厚襄（CBDB 636447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636447&o=json
            external_identifier: CBDB:636447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qjaZp5z9EQ9wKStzMLyNf2
        subject_person_id: p_auY2ECw7sAiUuLHD3ZpD5P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_svERGuzJQufaMy5AMknXrE
          claim_id: c_qjaZp5z9EQ9wKStzMLyNf2
          source_id: s_SCYem5ihLcR7rZFsK8MLdC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王厚襄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王厚襄 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王厚襄（CBDB 636447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636447&o=json)
