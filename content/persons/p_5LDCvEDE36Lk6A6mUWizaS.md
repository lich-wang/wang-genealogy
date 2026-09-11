---
schema: wang-person/v1
id: p_5LDCvEDE36Lk6A6mUWizaS
status: active
merged_into: null
display_name: 王相
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LtiyhKPnx1ggbGgJgDEV6U
        subject_person_id: p_5LDCvEDE36Lk6A6mUWizaS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1MFv3vHAZrBznKyU3KPAxj
          claim_id: c_LtiyhKPnx1ggbGgJgDEV6U
          source_id: s_766wa8gzF1oTSoqdQyNeJF
          stance: supports
          locator: CBDB:301176
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（301176）
          source: &a1
            id: s_766wa8gzF1oTSoqdQyNeJF
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 301176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301176&o=json
            external_identifier: CBDB:301176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.635Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QgM6kqA1gDsGmA3kMf4fcR
        subject_person_id: p_5LDCvEDE36Lk6A6mUWizaS
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
        - id: cs_vQfKUbhi7sfsZ2862mZQgG
          claim_id: c_QgM6kqA1gDsGmA3kMf4fcR
          source_id: s_766wa8gzF1oTSoqdQyNeJF
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
        id: c_Pf5gas0NkYKApcsrXwfw59
        subject_person_id: p_5LDCvEDE36Lk6A6mUWizaS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4Zy974Lzqz8TpZW2QVpmsw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_itggDFYfPRvb2txtfGM0z5
          claim_id: c_Pf5gas0NkYKApcsrXwfw59
          source_id: s_n2Bush7TsNx4ZZ5zuJLHqz
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第一百四十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n2Bush7TsNx4ZZ5zuJLHqz
            source_type: api_record
            title: 中国历代人物传记资料库：王尚學（CBDB 126576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126576&o=json
            external_identifier: CBDB:126576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.036Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4Zy974Lzqz8TpZW2QVpmsw
        status: active
        display_name: 王尚學
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4Zy974Lzqz8TpZW2QVpmsw | 王尚學 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尚學（CBDB 126576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126576&o=json)
- [中国历代人物传记资料库：王相（CBDB 301176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301176&o=json)
