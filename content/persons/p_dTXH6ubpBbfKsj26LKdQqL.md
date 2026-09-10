---
schema: wang-person/v1
id: p_dTXH6ubpBbfKsj26LKdQqL
status: active
merged_into: null
display_name: 王貽正
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_su9rKy2QvGSCV9gBqAfGHy
        subject_person_id: p_dTXH6ubpBbfKsj26LKdQqL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貽正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s1ezLAJGQo7te51xMN5Zuq
          claim_id: c_su9rKy2QvGSCV9gBqAfGHy
          source_id: s_4g7wD5c5b1Az2CXZeQTrXV
          stance: supports
          locator: CBDB:3960
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3960）
          source: &a1
            id: s_4g7wD5c5b1Az2CXZeQTrXV
            source_type: api_record
            title: 中国历代人物传记资料库：王貽正（CBDB 3960）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3960&o=json
            external_identifier: CBDB:3960
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.435Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3pHekwRSYAAtNMJQP7AhZF
        subject_person_id: p_dTXH6ubpBbfKsj26LKdQqL
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
        - id: cs_zcD6p2iXpG1ACKUReCZ9vu
          claim_id: c_3pHekwRSYAAtNMJQP7AhZF
          source_id: s_4g7wD5c5b1Az2CXZeQTrXV
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
        id: c_-Nm-w0p9Tzre2GRXxkT4ER
        subject_person_id: p_KwbmAJ2D4cYa2NFwUSg9RA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dTXH6ubpBbfKsj26LKdQqL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nUH9HR9EXMwPW9m8rZKLfJ
          claim_id: c_-Nm-w0p9Tzre2GRXxkT4ER
          source_id: s_XY9srzhf4QvcQx3M7SMojE
          stance: supports
          locator: BasicInfo Notes：父王貽正、祖父王溥
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: &a2
            id: s_XY9srzhf4QvcQx3M7SMojE
            source_type: api_record
            title: 中国历代人物传记资料库：王貽永（CBDB 1829）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1829&o=json
            external_identifier: CBDB:1829
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KwbmAJ2D4cYa2NFwUSg9RA
        status: active
        display_name: 王溥
        merged_into_person_id: null
  children:
    - claim:
        id: c_LA6uSvW2gM-hWAGss3--AZ
        subject_person_id: p_dTXH6ubpBbfKsj26LKdQqL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_127UF7yvGqCLXapDi883c4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cxj_Gfpmwr3yUtb5e5BF__
          claim_id: c_LA6uSvW2gM-hWAGss3--AZ
          source_id: s_XY9srzhf4QvcQx3M7SMojE
          stance: supports
          locator: PersonKinshipInfo：父（王貽正）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_127UF7yvGqCLXapDi883c4
        status: active
        display_name: 王貽永
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王貽正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貽正 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KwbmAJ2D4cYa2NFwUSg9RA | 王溥 | accepted |
| children | p_127UF7yvGqCLXapDi883c4 | 王貽永 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貽永（CBDB 1829）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1829&o=json)
- [中国历代人物传记资料库：王貽正（CBDB 3960）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3960&o=json)
