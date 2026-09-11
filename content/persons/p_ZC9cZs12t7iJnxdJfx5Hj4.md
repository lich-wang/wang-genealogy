---
schema: wang-person/v1
id: p_ZC9cZs12t7iJnxdJfx5Hj4
status: active
merged_into: null
display_name: 王思義
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zaBFK33rDnRR7fTW6yk1Ga
        subject_person_id: p_ZC9cZs12t7iJnxdJfx5Hj4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yoKmtpA3bwVmDSRV6CbBpo
          claim_id: c_zaBFK33rDnRR7fTW6yk1Ga
          source_id: s_Z1UAeer9JCApwkCDbSAv77
          stance: supports
          locator: CBDB:295401
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295401）
          source: &a1
            id: s_Z1UAeer9JCApwkCDbSAv77
            source_type: api_record
            title: 中国历代人物传记资料库：王思義（CBDB 295401）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295401&o=json
            external_identifier: CBDB:295401
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.498Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GqLctBhFh59ypxn6EHtG39
        subject_person_id: p_ZC9cZs12t7iJnxdJfx5Hj4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bPAPwRH1Mrh6Zw2Pgv1hKU
          claim_id: c_GqLctBhFh59ypxn6EHtG39
          source_id: s_Z1UAeer9JCApwkCDbSAv77
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
        id: c_NoIqpx-UZbeOVJEq9r2NFJ
        subject_person_id: p_ZC9cZs12t7iJnxdJfx5Hj4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fJbtRZx7s1XqSoTR8tLmBu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jLNqDEV1TXz0X8bnszg4dv
          claim_id: c_NoIqpx-UZbeOVJEq9r2NFJ
          source_id: s_9t6MfGDZdGonHJQxFCm4qT
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9t6MfGDZdGonHJQxFCm4qT
            source_type: api_record
            title: 中国历代人物传记资料库：王珉（CBDB 202834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202834&o=json
            external_identifier: CBDB:202834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.759Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fJbtRZx7s1XqSoTR8tLmBu
        status: active
        display_name: 王珉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王思義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思義 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fJbtRZx7s1XqSoTR8tLmBu | 王珉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珉（CBDB 202834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202834&o=json)
- [中国历代人物传记资料库：王思義（CBDB 295401）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295401&o=json)
