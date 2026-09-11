---
schema: wang-person/v1
id: p_N8w3pCF94fJYfx57LRqtKF
status: active
merged_into: null
display_name: 王朗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Rh5jXjYLb3d2LomUN47FdC
        subject_person_id: p_N8w3pCF94fJYfx57LRqtKF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p9qbaCdWXZsxWVwb9HBemh
          claim_id: c_Rh5jXjYLb3d2LomUN47FdC
          source_id: s_AiBUe5PLgjqYntrAD14NCL
          stance: supports
          locator: CBDB:149682
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（149682）
          source: &a1
            id: s_AiBUe5PLgjqYntrAD14NCL
            source_type: api_record
            title: 中国历代人物传记资料库：王朗（CBDB 149682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149682&o=json
            external_identifier: CBDB:149682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.792Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rdLDcWJgrSEQGkomTAVpiQ
        subject_person_id: p_N8w3pCF94fJYfx57LRqtKF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朗，唐人物。籍贯平樂，曾任縣令。（中国历代人物传记资料库 CBDB 149682）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O6ZwMbL3cRT4iHMbqOFK7n
          claim_id: c_rdLDcWJgrSEQGkomTAVpiQ
          source_id: s_AiBUe5PLgjqYntrAD14NCL
          stance: supports
          locator: CBDB:149682
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_9lpmqmbJQ_WaFh3JoOycTm
        subject_person_id: p_N8w3pCF94fJYfx57LRqtKF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ewVR3hFtZjvum2Uhn4Nxtd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mS6ifmGwY3zMXlQGsNpUyJ
          claim_id: c_9lpmqmbJQ_WaFh3JoOycTm
          source_id: s_Pt6SYpJncc4NRFCN1pq5rP
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changshou 20：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Pt6SYpJncc4NRFCN1pq5rP
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 139896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139896&o=json
            external_identifier: CBDB:139896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.458Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ewVR3hFtZjvum2Uhn4Nxtd
        status: active
        display_name: 王義
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朗 | accepted |
| bio.summary | 王朗，唐人物。籍贯平樂，曾任縣令。（中国历代人物传记资料库 CBDB 149682） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ewVR3hFtZjvum2Uhn4Nxtd | 王義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朗（CBDB 149682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149682&o=json)
- [中国历代人物传记资料库：王義（CBDB 139896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139896&o=json)
