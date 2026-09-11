---
schema: wang-person/v1
id: p_Q25VNfs1ZURsB9gRQKNKP4
status: active
merged_into: null
display_name: 王盛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ds4Edu5GKaTS5K2ouRQWRX
        subject_person_id: p_Q25VNfs1ZURsB9gRQKNKP4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王盛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y1vAnMpqSKBFH1P4KxRoBM
          claim_id: c_ds4Edu5GKaTS5K2ouRQWRX
          source_id: s_b1bTNJ8JPz19r3yNpAnb2d
          stance: supports
          locator: CBDB:147246
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（147246）
          source: &a1
            id: s_b1bTNJ8JPz19r3yNpAnb2d
            source_type: api_record
            title: 中国历代人物传记资料库：王盛（CBDB 147246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147246&o=json
            external_identifier: CBDB:147246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.731Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NadufQbyHWhQnxtRtLNVKH
        subject_person_id: p_Q25VNfs1ZURsB9gRQKNKP4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王盛，南北朝人物。籍贯芒山，曾任縣令。（中国历代人物传记资料库 CBDB 147246）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oobQ9uHqdHHB8YEMzdXxnT
          claim_id: c_NadufQbyHWhQnxtRtLNVKH
          source_id: s_b1bTNJ8JPz19r3yNpAnb2d
          stance: supports
          locator: CBDB:147246
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_TZhLXbKDkMujFpSCP450K-
        subject_person_id: p_Q25VNfs1ZURsB9gRQKNKP4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SxPwcFA4vn8pYuTWJ3cKaJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kC8S4PNC-WxvDAXyAdJj76
          claim_id: c_TZhLXbKDkMujFpSCP450K-
          source_id: s_b1bTNJ8JPz19r3yNpAnb2d
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yonghui 138：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SxPwcFA4vn8pYuTWJ3cKaJ
        status: active
        display_name: 王瑗達
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王盛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王盛 | accepted |
| bio.summary | 王盛，南北朝人物。籍贯芒山，曾任縣令。（中国历代人物传记资料库 CBDB 147246） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_SxPwcFA4vn8pYuTWJ3cKaJ | 王瑗達 | accepted |

## 外部来源

- [中国历代人物传记资料库：王盛（CBDB 147246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147246&o=json)
