---
schema: wang-person/v1
id: p_Akvhk7vb2JMfzgR2hpBTHy
status: active
merged_into: null
display_name: 王浦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X767NtFFv11YtevqXpv6kU
        subject_person_id: p_Akvhk7vb2JMfzgR2hpBTHy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LoN3y3epMn6fkn4Sry3czv
          claim_id: c_X767NtFFv11YtevqXpv6kU
          source_id: s_FfvRYCEMRU5qP63TuKR5SZ
          stance: supports
          locator: CBDB:294329
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294329）
          source: &a1
            id: s_FfvRYCEMRU5qP63TuKR5SZ
            source_type: api_record
            title: 中国历代人物传记资料库：王浦（CBDB 294329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294329&o=json
            external_identifier: CBDB:294329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.447Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bs2GA4npAtMPQZeQNH2Jok
        subject_person_id: p_Akvhk7vb2JMfzgR2hpBTHy
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
        - id: cs_QLnRdDDDYwaDAujU6pYoqc
          claim_id: c_bs2GA4npAtMPQZeQNH2Jok
          source_id: s_FfvRYCEMRU5qP63TuKR5SZ
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
        id: c_mctpZa3yPN1TrvVoZFT0AX
        subject_person_id: p_Akvhk7vb2JMfzgR2hpBTHy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T7mpuOtST0OGY7cGTeSiCo
          claim_id: c_mctpZa3yPN1TrvVoZFT0AX
          source_id: s_GWdGKWBoQ5Yau2CR5qC4YT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GWdGKWBoQ5Yau2CR5qC4YT
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 126750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126750&o=json
            external_identifier: CBDB:126750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.175Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AKiZ73AHqEtzATAkDq6m9S
        status: active
        display_name: 王瑛
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王浦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浦 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AKiZ73AHqEtzATAkDq6m9S | 王瑛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王浦（CBDB 294329）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294329&o=json)
- [中国历代人物传记资料库：王瑛（CBDB 126750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126750&o=json)
