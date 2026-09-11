---
schema: wang-person/v1
id: p_Yi63SwvU3iiXw7LYSrnJmq
status: active
merged_into: null
display_name: 王迪
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sC3ui2SYFUaafyXE2AjSR1
        subject_person_id: p_Yi63SwvU3iiXw7LYSrnJmq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_78HgBPr1FQiAFNoghiNemR
          claim_id: c_sC3ui2SYFUaafyXE2AjSR1
          source_id: s_EmPUEdxJGV42tbxQeV1T1J
          stance: supports
          locator: CBDB:200444
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200444）
          source: &a1
            id: s_EmPUEdxJGV42tbxQeV1T1J
            source_type: api_record
            title: 中国历代人物传记资料库：王迪（CBDB 200444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200444&o=json
            external_identifier: CBDB:200444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.614Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DDm3c4YSBg5vKbjwUfmn2M
        subject_person_id: p_Yi63SwvU3iiXw7LYSrnJmq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1453年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aMa2gVpmvYUCCAEzUorXEf
          claim_id: c_DDm3c4YSBg5vKbjwUfmn2M
          source_id: s_EmPUEdxJGV42tbxQeV1T1J
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
        id: c_zczJ7zFjhXMightVoF4xk9
        subject_person_id: p_Yi63SwvU3iiXw7LYSrnJmq
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
        - id: cs_sQByH4VFr9aUp99VtrrETG
          claim_id: c_zczJ7zFjhXMightVoF4xk9
          source_id: s_EmPUEdxJGV42tbxQeV1T1J
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
        id: c_2kg1yQD7PvBf62If29pzlL
        subject_person_id: p_6viAMHrM5RymA1BEH8cpA3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Yi63SwvU3iiXw7LYSrnJmq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9ItFZGTwLL5B7Z2sf3JBSR
          claim_id: c_2kg1yQD7PvBf62If29pzlL
          source_id: s_Z7B9cuBFnU8Duuyk4FqKVb
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第五十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Z7B9cuBFnU8Duuyk4FqKVb
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 257944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257944&o=json
            external_identifier: CBDB:257944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.436Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6viAMHrM5RymA1BEH8cpA3
        status: active
        display_name: 王端
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_09foDOPhiHgbY8a7Brg5yV
        subject_person_id: p_hH6diG8nSC9Cnt9oMWDtBz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Yi63SwvU3iiXw7LYSrnJmq
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cULbUCOj0fX4FItdd7YXm7
          claim_id: c_09foDOPhiHgbY8a7Brg5yV
          source_id: s_K6pWU4T2Z6S8ykkQDqvQnL
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第五十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_K6pWU4T2Z6S8ykkQDqvQnL
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 257942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257942&o=json
            external_identifier: CBDB:257942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.435Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hH6diG8nSC9Cnt9oMWDtBz
        status: active
        display_name: 王和
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王迪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王迪 | accepted |
| birth.date | 1453年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6viAMHrM5RymA1BEH8cpA3 | 王端 | accepted |
| ancestors | p_hH6diG8nSC9Cnt9oMWDtBz | 王和 | accepted |

## 外部来源

- [中国历代人物传记资料库：王迪（CBDB 200444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200444&o=json)
- [中国历代人物传记资料库：王端（CBDB 257944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257944&o=json)
- [中国历代人物传记资料库：王和（CBDB 257942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257942&o=json)
