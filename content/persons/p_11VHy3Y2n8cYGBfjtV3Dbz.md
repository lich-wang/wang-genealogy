---
schema: wang-person/v1
id: p_11VHy3Y2n8cYGBfjtV3Dbz
status: active
merged_into: null
display_name: 王安國
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7ZvSdJSpGSNxFDmo3yWovT
        subject_person_id: p_11VHy3Y2n8cYGBfjtV3Dbz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安國
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FLA3wc1FsDcSwwCkzQ5xkR
          claim_id: c_7ZvSdJSpGSNxFDmo3yWovT
          source_id: s_137hBXJEFC186D2c7P1EhU
          stance: supports
          locator: CBDB:101173
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101173）
          source: &a1
            id: s_137hBXJEFC186D2c7P1EhU
            source_type: api_record
            title: 中国历代人物传记资料库：王安國（CBDB 101173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101173&o=json
            external_identifier: CBDB:101173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.724Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yBe5JBANU31AJbemGXoqDP
        subject_person_id: p_11VHy3Y2n8cYGBfjtV3Dbz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9kcVjVE2ze2poqvZBHbiAt
          claim_id: c_yBe5JBANU31AJbemGXoqDP
          source_id: s_137hBXJEFC186D2c7P1EhU
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
        id: c_PBQKY_HcUWfaeTiOFa0dn5
        subject_person_id: p_hcau8j14y9obT1tKEEaVBg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_11VHy3Y2n8cYGBfjtV3Dbz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V7_ZZ6Ufa8JXF-XPbAJnS1
          claim_id: c_PBQKY_HcUWfaeTiOFa0dn5
          source_id: s_137hBXJEFC186D2c7P1EhU
          stance: supports
          locator: 宋史，王霆傳：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hcau8j14y9obT1tKEEaVBg
        status: active
        display_name: 王霆
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王安國

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安國 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_hcau8j14y9obT1tKEEaVBg | 王霆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安國（CBDB 101173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101173&o=json)
