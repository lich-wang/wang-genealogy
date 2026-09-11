---
schema: wang-person/v1
id: p_hMqJFCXEHXDTPbh4yzS2wD
status: active
merged_into: null
display_name: 王志剛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SY1Wc2GYx9BDmZfGCeh52N
        subject_person_id: p_hMqJFCXEHXDTPbh4yzS2wD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志剛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9tLdXywQTJa4HweURWFdA9
          claim_id: c_SY1Wc2GYx9BDmZfGCeh52N
          source_id: s_b4agzCPNUJ21EsEzD9Sh8y
          stance: supports
          locator: CBDB:249595
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249595）
          source: &a1
            id: s_b4agzCPNUJ21EsEzD9Sh8y
            source_type: api_record
            title: 中国历代人物传记资料库：王志剛（CBDB 249595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249595&o=json
            external_identifier: CBDB:249595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.181Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U9z65yJy6oGXZfBgPEDMF5
        subject_person_id: p_hMqJFCXEHXDTPbh4yzS2wD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志剛，明人物。成化十一年進士。（中国历代人物传记资料库 CBDB 249595）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0nJGtyGb21nAhfojACKw5A
          claim_id: c_U9z65yJy6oGXZfBgPEDMF5
          source_id: s_b4agzCPNUJ21EsEzD9Sh8y
          stance: supports
          locator: CBDB:249595
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
  descendants:
    - claim:
        id: c_g51xDr4MHoMOD0aVR4QFV2
        subject_person_id: p_hMqJFCXEHXDTPbh4yzS2wD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JEUpyam7C1Pm8JC9r4xGZ3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tEWabGJys0V3-WKOdZnsMr
          claim_id: c_g51xDr4MHoMOD0aVR4QFV2
          source_id: s_b4agzCPNUJ21EsEzD9Sh8y
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第九十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JEUpyam7C1Pm8JC9r4xGZ3
        status: active
        display_name: 王舉
        merged_into_person_id: null
  other: []
---

# 王志剛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志剛 | accepted |
| bio.summary | 王志剛，明人物。成化十一年進士。（中国历代人物传记资料库 CBDB 249595） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_JEUpyam7C1Pm8JC9r4xGZ3 | 王舉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王志剛（CBDB 249595）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249595&o=json)
