---
schema: wang-person/v1
id: p_8M1jTHPpMjrLQ4UVRJ6rD5
status: active
merged_into: null
display_name: 王柟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pcpvDpQ56TYFvGdEVTN6bg
        subject_person_id: p_8M1jTHPpMjrLQ4UVRJ6rD5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2Up1zXL3X4MBnnzVyi5K27
          claim_id: c_pcpvDpQ56TYFvGdEVTN6bg
          source_id: s_66T3Xf4GiTziGCxFWg29Zn
          stance: supports
          locator: CBDB:17888
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17888）
          source: &a1
            id: s_66T3Xf4GiTziGCxFWg29Zn
            source_type: api_record
            title: 中国历代人物传记资料库：王柟（CBDB 17888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17888&o=json
            external_identifier: CBDB:17888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.696Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MfkTCEHb1F5NhMVqBRHmG1
        subject_person_id: p_8M1jTHPpMjrLQ4UVRJ6rD5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UqE83FKTBBD4sT4jFtpL2S
          claim_id: c_MfkTCEHb1F5NhMVqBRHmG1
          source_id: s_66T3Xf4GiTziGCxFWg29Zn
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
  ancestors:
    - claim:
        id: c_7-9o3aWkJV4cA6AFDqzz--
        subject_person_id: p_KvaDyJMUHzeGStoEsTh4se
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8M1jTHPpMjrLQ4UVRJ6rD5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g69-tVPB7R9oArM0NCF3Rz
          claim_id: c_7-9o3aWkJV4cA6AFDqzz--
          source_id: s_66T3Xf4GiTziGCxFWg29Zn
          stance: supports
          locator: 宋人傳記資料索引(電子版)：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KvaDyJMUHzeGStoEsTh4se
        status: active
        display_name: 王倫
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王柟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王柟 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_KvaDyJMUHzeGStoEsTh4se | 王倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王柟（CBDB 17888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17888&o=json)
