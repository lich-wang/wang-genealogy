---
schema: wang-person/v1
id: p_vV1QprU5aZgc3gQEncLX66
status: active
merged_into: null
display_name: 王保和
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FYJFWnrSQqUmbYcv498K8t
        subject_person_id: p_vV1QprU5aZgc3gQEncLX66
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王保和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YaHyKoKeoaPc5DLa4voFnJ
          claim_id: c_FYJFWnrSQqUmbYcv498K8t
          source_id: s_ThPcEXoY5qZJEE8xHTQmYL
          stance: supports
          locator: CBDB:636046
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636046）
          source: &a1
            id: s_ThPcEXoY5qZJEE8xHTQmYL
            source_type: api_record
            title: 中国历代人物传记资料库：王保和（CBDB 636046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636046&o=json
            external_identifier: CBDB:636046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.869Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MW74dB51KdNFby3r2stPNy
        subject_person_id: p_vV1QprU5aZgc3gQEncLX66
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5T9P33tN4AHWQmN53KxTkp
          claim_id: c_MW74dB51KdNFby3r2stPNy
          source_id: s_ThPcEXoY5qZJEE8xHTQmYL
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
  descendants: []
  other: []
---

# 王保和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王保和 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王保和（CBDB 636046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636046&o=json)
