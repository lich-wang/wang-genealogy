---
schema: wang-person/v1
id: p_7Q4CpSjUFp6tFRpGQNX8nF
status: active
merged_into: null
display_name: 王瓏
cbdb_id: 294338
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NQEBL6keNepAvA86vsdgZ3
        subject_person_id: p_7Q4CpSjUFp6tFRpGQNX8nF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓏，明人物。嘉靖十一年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 294338）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_q9zs-lSTaSDsGN2irFjEzD
          claim_id: c_NQEBL6keNepAvA86vsdgZ3
          source_id: s_kBWoSHMKYqLiG1nRTSqt6C
          stance: supports
          locator: CBDB:294338
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_kBWoSHMKYqLiG1nRTSqt6C
            source_type: api_record
            title: 中国历代人物传记资料库：王瓏（CBDB 294338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294338&o=json
            external_identifier: CBDB:294338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ExbNESrcN4KsAXxSUkzjWm
        subject_person_id: p_7Q4CpSjUFp6tFRpGQNX8nF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nXiNoXC7TYJMh58GKpSaoR
          claim_id: c_ExbNESrcN4KsAXxSUkzjWm
          source_id: s_kBWoSHMKYqLiG1nRTSqt6C
          stance: supports
          locator: CBDB:294338
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xyWcpeSKaQrzx0VQGXAtE5
        subject_person_id: p_Akvhk7vb2JMfzgR2hpBTHy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7Q4CpSjUFp6tFRpGQNX8nF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0G77Qg8_5vDTXj2SA44_MP
          claim_id: c_xyWcpeSKaQrzx0VQGXAtE5
          source_id: s_xnZyLGIAv6v4Xw0y-1BSA6
          stance: supports
          locator: CBDB：兄弟 王瑛（126750）之父／母 王浦
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓏 与 王瑛 为同胞（CBDB 记「兄」），王瑛 之父／母即 王瓏 之父／母。
          source:
            id: s_xnZyLGIAv6v4Xw0y-1BSA6
            source_type: api_record
            title: 中国历代人物传记资料库：王瓏（CBDB 294338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294338&o=json
            external_identifier: CBDB:294338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Akvhk7vb2JMfzgR2hpBTHy
        status: active
        display_name: 王浦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_pt2gF7jcyGp6PnR5Afacna
        subject_person_id: p_7Q4CpSjUFp6tFRpGQNX8nF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WLUK-6z6e0qCUn2Rrq84KM
          claim_id: c_pt2gF7jcyGp6PnR5Afacna
          source_id: s_xnZyLGIAv6v4Xw0y-1BSA6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126750 王瑛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xnZyLGIAv6v4Xw0y-1BSA6
            source_type: api_record
            title: 中国历代人物传记资料库：王瓏（CBDB 294338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294338&o=json
            external_identifier: CBDB:294338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AKiZ73AHqEtzATAkDq6m9S
        status: active
        display_name: 王瑛
        merged_into_person_id: null
---

# 王瓏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瓏，明人物。嘉靖十一年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 294338） | accepted |
| name.primary | 王瓏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Akvhk7vb2JMfzgR2hpBTHy | 王浦 | accepted |
| other | p_AKiZ73AHqEtzATAkDq6m9S | 王瑛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓏（CBDB 294338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294338&o=json)
