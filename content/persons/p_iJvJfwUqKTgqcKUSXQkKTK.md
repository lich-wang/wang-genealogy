---
schema: wang-person/v1
id: p_iJvJfwUqKTgqcKUSXQkKTK
status: active
merged_into: null
display_name: 王大任
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tjWrXABLSZJdV17ndWMX6Z
        subject_person_id: p_iJvJfwUqKTgqcKUSXQkKTK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大任
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5tvAYJyrBJ8TsL3nApQa5K
          claim_id: c_tjWrXABLSZJdV17ndWMX6Z
          source_id: s_jY4A1QnhcYJ5MVXPUoNUFg
          stance: supports
          locator: CBDB:204398
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204398）
          source: &a1
            id: s_jY4A1QnhcYJ5MVXPUoNUFg
            source_type: api_record
            title: 中国历代人物传记资料库：王大任（CBDB 204398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204398&o=json
            external_identifier: CBDB:204398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.826Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oQULzGjPC5PPDTgQ3dAdaz
        subject_person_id: p_iJvJfwUqKTgqcKUSXQkKTK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1527年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QK75BkFoDQsAy88kSMhWgf
          claim_id: c_oQULzGjPC5PPDTgQ3dAdaz
          source_id: s_jY4A1QnhcYJ5MVXPUoNUFg
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
        id: c_ayN6gUS2RN93GdiWJNQ55C
        subject_person_id: p_iJvJfwUqKTgqcKUSXQkKTK
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
        - id: cs_gJ1UXZ1KwwF5PgF36Q4jWa
          claim_id: c_ayN6gUS2RN93GdiWJNQ55C
          source_id: s_jY4A1QnhcYJ5MVXPUoNUFg
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
        id: c_-lRnvZ1KMTFSk9sIbwQbus
        subject_person_id: p_3dg1PVXVExHpSS6KGA8n5K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iJvJfwUqKTgqcKUSXQkKTK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xj1uF6lxqfULraPhl0HB-O
          claim_id: c_-lRnvZ1KMTFSk9sIbwQbus
          source_id: s_VvDkjy8KZNht3SQ24zKw63
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百五十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VvDkjy8KZNht3SQ24zKw63
            source_type: api_record
            title: 中国历代人物传记资料库：王熙（CBDB 318564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318564&o=json
            external_identifier: CBDB:318564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.003Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3dg1PVXVExHpSS6KGA8n5K
        status: active
        display_name: 王熙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_xBgkuQIsKgY22x1rbxgO2j
        subject_person_id: p_d3NCtZk3Gsavn2pC1x34da
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_iJvJfwUqKTgqcKUSXQkKTK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-HOK7l6pxyh8PFlKpeUHJU
          claim_id: c_xBgkuQIsKgY22x1rbxgO2j
          source_id: s_CHYc5rbRtNMcxZrn14nwt5
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百五十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CHYc5rbRtNMcxZrn14nwt5
            source_type: api_record
            title: 中国历代人物传记资料库：王彪（CBDB 318561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318561&o=json
            external_identifier: CBDB:318561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_d3NCtZk3Gsavn2pC1x34da
        status: active
        display_name: 王彪
        merged_into_person_id: null
    - claim:
        id: c_TUyBs6TO3rA-iImpCz97m5
        subject_person_id: p_8VyuiokV4LEJbF4q2Jtw26
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_iJvJfwUqKTgqcKUSXQkKTK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NbbY1Q0NoTMTUNaLY7G-hB
          claim_id: c_TUyBs6TO3rA-iImpCz97m5
          source_id: s_SUG5T3ehNN1dT89b75CnjP
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百五十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SUG5T3ehNN1dT89b75CnjP
            source_type: api_record
            title: 中国历代人物传记资料库：王至公（CBDB 318562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318562&o=json
            external_identifier: CBDB:318562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_8VyuiokV4LEJbF4q2Jtw26
        status: active
        display_name: 王至公
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王大任

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大任 | accepted |
| birth.date | 1527年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3dg1PVXVExHpSS6KGA8n5K | 王熙 | accepted |
| ancestors | p_d3NCtZk3Gsavn2pC1x34da | 王彪 | accepted |
| ancestors | p_8VyuiokV4LEJbF4q2Jtw26 | 王至公 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彪（CBDB 318561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318561&o=json)
- [中国历代人物传记资料库：王大任（CBDB 204398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204398&o=json)
- [中国历代人物传记资料库：王熙（CBDB 318564）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318564&o=json)
- [中国历代人物传记资料库：王至公（CBDB 318562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318562&o=json)
