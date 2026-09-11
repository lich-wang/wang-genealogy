---
schema: wang-person/v1
id: p_15Nh8Xnsw6Q2WxxXdtixbY
status: active
merged_into: null
display_name: 王宥
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5WqNnF3Zf3WByKPjDgxb9F
        subject_person_id: p_15Nh8Xnsw6Q2WxxXdtixbY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kfdckzkCVw6fJGge2xoHnB
          claim_id: c_5WqNnF3Zf3WByKPjDgxb9F
          source_id: s_qEvCQcQFP2htwCq8xnWiJs
          stance: supports
          locator: CBDB:200225
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200225）
          source: &a1
            id: s_qEvCQcQFP2htwCq8xnWiJs
            source_type: api_record
            title: 中国历代人物传记资料库：王宥（CBDB 200225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200225&o=json
            external_identifier: CBDB:200225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.596Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UReP9KKgoUG2JUZpcEjPkM
        subject_person_id: p_15Nh8Xnsw6Q2WxxXdtixbY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1451年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4qdEBUJkNF31bKDhBviB3p
          claim_id: c_UReP9KKgoUG2JUZpcEjPkM
          source_id: s_qEvCQcQFP2htwCq8xnWiJs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uURwbeE9pnVQw5UzuMkNip
        subject_person_id: p_15Nh8Xnsw6Q2WxxXdtixbY
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
        - id: cs_DAcJBdKoyhYZhVnELjVAEJ
          claim_id: c_uURwbeE9pnVQw5UzuMkNip
          source_id: s_qEvCQcQFP2htwCq8xnWiJs
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
        id: c_UwekIoBvZwrBowb64NstAp
        subject_person_id: p_Y1LJt1fbRrve98s4v1UUF2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_15Nh8Xnsw6Q2WxxXdtixbY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eIldKuAqE41s5UE3I6d1fu
          claim_id: c_UwekIoBvZwrBowb64NstAp
          source_id: s_qEvCQcQFP2htwCq8xnWiJs
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第四十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Y1LJt1fbRrve98s4v1UUF2
        status: active
        display_name: 王志積
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Jrj-VJ01J5eqNojB8Tw_5e
        subject_person_id: p_ZiM4N5Gs41SCGQ3WKw5622
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_15Nh8Xnsw6Q2WxxXdtixbY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HFW0XKWif2TXk6C7C0nt3C
          claim_id: c_Jrj-VJ01J5eqNojB8Tw_5e
          source_id: s_0Q1g4m1HimdpRhpab3Atrh
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第四十二名：丈夫
          quotation: null
          interpretation_note: null
          source:
            id: s_0Q1g4m1HimdpRhpab3Atrh
            source_type: api_record
            title: 中国历代人物传记资料库：徐氏(王宥妻)（CBDB 255124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255124&o=json
            external_identifier: CBDB:255124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-10T13:33:56.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZiM4N5Gs41SCGQ3WKw5622
        status: active
        display_name: 徐氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_poRyF76zIymKvbtUi_Szmb
        subject_person_id: p_fYwp6rZCTtFvp8J8toSZti
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_15Nh8Xnsw6Q2WxxXdtixbY
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zDVU8tGu3KTX_zjLaDYwRl
          claim_id: c_poRyF76zIymKvbtUi_Szmb
          source_id: s_sRsmJ7bPvUXWYtxeg4DEt2
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第四十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sRsmJ7bPvUXWYtxeg4DEt2
            source_type: api_record
            title: 中国历代人物传记资料库：王本宗（CBDB 255121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255121&o=json
            external_identifier: CBDB:255121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.331Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fYwp6rZCTtFvp8J8toSZti
        status: active
        display_name: 王本宗
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王宥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宥 | accepted |
| birth.date | 1451年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Y1LJt1fbRrve98s4v1UUF2 | 王志積 | accepted |
| spouses | p_ZiM4N5Gs41SCGQ3WKw5622 | 徐氏 | accepted |
| ancestors | p_fYwp6rZCTtFvp8J8toSZti | 王本宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王本宗（CBDB 255121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255121&o=json)
- [中国历代人物传记资料库：王宥（CBDB 200225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200225&o=json)
- [中国历代人物传记资料库：徐氏(王宥妻)（CBDB 255124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255124&o=json)
