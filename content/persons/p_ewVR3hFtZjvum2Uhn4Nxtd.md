---
schema: wang-person/v1
id: p_ewVR3hFtZjvum2Uhn4Nxtd
status: active
merged_into: null
display_name: 王義
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CjRQL4Dg359CftCM5U6bcz
        subject_person_id: p_ewVR3hFtZjvum2Uhn4Nxtd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qd8k45jP665CxhTbBm9sJV
          claim_id: c_CjRQL4Dg359CftCM5U6bcz
          source_id: s_Pt6SYpJncc4NRFCN1pq5rP
          stance: supports
          locator: CBDB:139896
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139896）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kExdAGaA5RcJYDG62oFiTF
        subject_person_id: p_ewVR3hFtZjvum2Uhn4Nxtd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 621年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mGmhXRr9Xiw9jSYRL6X9Gb
          claim_id: c_kExdAGaA5RcJYDG62oFiTF
          source_id: s_Pt6SYpJncc4NRFCN1pq5rP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_JJ3JMDTq3bJeHprHQCMWg4
        subject_person_id: p_ewVR3hFtZjvum2Uhn4Nxtd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 693年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_agEEvZhv9nBe1uvvy2LGwU
          claim_id: c_JJ3JMDTq3bJeHprHQCMWg4
          source_id: s_Pt6SYpJncc4NRFCN1pq5rP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BGmviPbvQcPJoYvS5eaHGA
        subject_person_id: p_ewVR3hFtZjvum2Uhn4Nxtd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MJ4ayax17npZNP18SHH2tw
          claim_id: c_BGmviPbvQcPJoYvS5eaHGA
          source_id: s_Pt6SYpJncc4NRFCN1pq5rP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: *a1
      object_person:
        id: p_N8w3pCF94fJYfx57LRqtKF
        status: active
        display_name: 王朗
        merged_into_person_id: null
  children:
    - claim:
        id: c_vb1yfuumjWzamjJqSunLL6
        subject_person_id: p_ewVR3hFtZjvum2Uhn4Nxtd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2ANLW3U2dwXrGoPY1xKNCD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OlPApBdyYRkji6Q7ubVFC5
          claim_id: c_vb1yfuumjWzamjJqSunLL6
          source_id: s_eb3N71z7xLxKvF71rrpT39
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changshou 20：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eb3N71z7xLxKvF71rrpT39
            source_type: api_record
            title: 中国历代人物传记资料库：王玄應（CBDB 149683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149683&o=json
            external_identifier: CBDB:149683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2ANLW3U2dwXrGoPY1xKNCD
        status: active
        display_name: 王玄應
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義 | accepted |
| birth.date | 621年 | accepted |
| death.date | 693年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N8w3pCF94fJYfx57LRqtKF | 王朗 | accepted |
| children | p_2ANLW3U2dwXrGoPY1xKNCD | 王玄應 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玄應（CBDB 149683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149683&o=json)
- [中国历代人物传记资料库：王義（CBDB 139896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139896&o=json)
