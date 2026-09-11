---
schema: wang-person/v1
id: p_MWMJXpzyEeq5R13wNCrRf3
status: active
merged_into: null
display_name: 王穆
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XjbWCkYfGZzGezDMHmsCkn
        subject_person_id: p_MWMJXpzyEeq5R13wNCrRf3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CTyguB6BLQoDVEW8cpkscG
          claim_id: c_XjbWCkYfGZzGezDMHmsCkn
          source_id: s_sLoQmvGHmA89g8frjMXADA
          stance: supports
          locator: CBDB:148097
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（148097）
          source: &a1
            id: s_sLoQmvGHmA89g8frjMXADA
            source_type: api_record
            title: 中国历代人物传记资料库：王穆（CBDB 148097）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148097&o=json
            external_identifier: CBDB:148097
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.752Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QcYCNYhsCRLxDQNtkwwsfV
        subject_person_id: p_MWMJXpzyEeq5R13wNCrRf3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南北朝人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DHnxDyxrWCF7LgWH6Y4Hd5
          claim_id: c_QcYCNYhsCRLxDQNtkwwsfV
          source_id: s_sLoQmvGHmA89g8frjMXADA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_orTEU72YoQvcqPjUkK188g
        subject_person_id: p_MWMJXpzyEeq5R13wNCrRf3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_32HaAuTnPzTfj2DWDnSPK8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oMR3TnO6oad3By4O88I3lH
          claim_id: c_orTEU72YoQvcqPjUkK188g
          source_id: s_BjJN7NVQgmcfXMSrwk8heN
          stance: supports
          locator: 唐代墓誌匯編:二卷，Linde 64：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BjJN7NVQgmcfXMSrwk8heN
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 139473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139473&o=json
            external_identifier: CBDB:139473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.418Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_32HaAuTnPzTfj2DWDnSPK8
        status: active
        display_name: 王宣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王穆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王穆 | accepted |
| bio.summary | CBDB 记载为南北朝人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_32HaAuTnPzTfj2DWDnSPK8 | 王宣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王穆（CBDB 148097）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148097&o=json)
- [中国历代人物传记资料库：王宣（CBDB 139473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139473&o=json)
