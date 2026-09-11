---
schema: wang-person/v1
id: p_bkZEV7s5emg2XrT2FCzbqF
status: active
merged_into: null
display_name: 王萬禩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gFeqiv2WsJZ516tevKanPB
        subject_person_id: p_bkZEV7s5emg2XrT2FCzbqF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬禩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i8cDzHuXtpHPCUMV62AVTz
          claim_id: c_gFeqiv2WsJZ516tevKanPB
          source_id: s_S2T62XQN5UMcfoY5P6RF2G
          stance: supports
          locator: CBDB:576899
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576899）
          source: &a1
            id: s_S2T62XQN5UMcfoY5P6RF2G
            source_type: api_record
            title: 中国历代人物传记资料库：王萬禩（CBDB 576899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576899&o=json
            external_identifier: CBDB:576899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.718Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qkwcGHz1y6vRJwSsm2tjkw
        subject_person_id: p_bkZEV7s5emg2XrT2FCzbqF
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
        - id: cs_n8GBog5sfX6AWat3x959p3
          claim_id: c_qkwcGHz1y6vRJwSsm2tjkw
          source_id: s_S2T62XQN5UMcfoY5P6RF2G
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
        id: c_eaejoDTgjvtoI8YYI3NAzR
        subject_person_id: p_4tfg9oHA8nXBC3KDi6Ftkj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bkZEV7s5emg2XrT2FCzbqF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ONsel2uq_peUZQ3aaVNWgf
          claim_id: c_eaejoDTgjvtoI8YYI3NAzR
          source_id: s_33RLD1aJM1kGohTTTjF6wj
          stance: supports
          locator: 江南通志，lgid=65689：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_33RLD1aJM1kGohTTTjF6wj
            source_type: api_record
            title: 中国历代人物传记资料库：王可大（CBDB 126483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126483&o=json
            external_identifier: CBDB:126483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4tfg9oHA8nXBC3KDi6Ftkj
        status: active
        display_name: 王可大
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王萬禩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬禩 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_4tfg9oHA8nXBC3KDi6Ftkj | 王可大 | accepted |

## 外部来源

- [中国历代人物传记资料库：王可大（CBDB 126483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126483&o=json)
- [中国历代人物传记资料库：王萬禩（CBDB 576899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576899&o=json)
