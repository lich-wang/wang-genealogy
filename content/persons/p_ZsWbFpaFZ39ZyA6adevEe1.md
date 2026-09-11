---
schema: wang-person/v1
id: p_ZsWbFpaFZ39ZyA6adevEe1
status: active
merged_into: null
display_name: 王嗣祖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mvwpxFVPg85kibdhBrZd4j
        subject_person_id: p_ZsWbFpaFZ39ZyA6adevEe1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZUwvcLcQQZUCnQRDa8YAXW
          claim_id: c_mvwpxFVPg85kibdhBrZd4j
          source_id: s_MjsivJZ7wFMCp4psJHUSQY
          stance: supports
          locator: CBDB:249258
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249258）
          source: &a1
            id: s_MjsivJZ7wFMCp4psJHUSQY
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣祖（CBDB 249258）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249258&o=json
            external_identifier: CBDB:249258
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.167Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MEJx8o8shW1hDHvTaKVWxD
        subject_person_id: p_ZsWbFpaFZ39ZyA6adevEe1
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
        - id: cs_edF2fvWt5pjGe7cg3QkpWL
          claim_id: c_MEJx8o8shW1hDHvTaKVWxD
          source_id: s_MjsivJZ7wFMCp4psJHUSQY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_PQ8tZPbJeKMdQEJOotMrQx
        subject_person_id: p_ZsWbFpaFZ39ZyA6adevEe1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2Gx8pH6sHztKEtkLMN7u1C
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TeR_L00-rqQ-o8mNedfyCK
          claim_id: c_PQ8tZPbJeKMdQEJOotMrQx
          source_id: s_vXt7EfqfhFLQRHs9zkrC1p
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第五十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vXt7EfqfhFLQRHs9zkrC1p
            source_type: api_record
            title: 中国历代人物传记资料库：王瑭（CBDB 199751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199751&o=json
            external_identifier: CBDB:199751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.577Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2Gx8pH6sHztKEtkLMN7u1C
        status: active
        display_name: 王瑭
        merged_into_person_id: null
  other: []
---

# 王嗣祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嗣祖 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2Gx8pH6sHztKEtkLMN7u1C | 王瑭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嗣祖（CBDB 249258）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249258&o=json)
- [中国历代人物传记资料库：王瑭（CBDB 199751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199751&o=json)
