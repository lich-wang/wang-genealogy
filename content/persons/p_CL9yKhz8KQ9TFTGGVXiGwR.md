---
schema: wang-person/v1
id: p_CL9yKhz8KQ9TFTGGVXiGwR
status: active
merged_into: null
display_name: 王大任
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VKL5zjMfhBDroxMwf2UXT7
        subject_person_id: p_CL9yKhz8KQ9TFTGGVXiGwR
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
        - id: cs_VCiEM23VXY6Vq5MY8c4T2Q
          claim_id: c_VKL5zjMfhBDroxMwf2UXT7
          source_id: s_7tXg4c1VwsrrJNjtfjj8YW
          stance: supports
          locator: CBDB:692034
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（692034）
          source: &a1
            id: s_7tXg4c1VwsrrJNjtfjj8YW
            source_type: api_record
            title: 中国历代人物传记资料库：王大任（CBDB 692034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692034&o=json
            external_identifier: CBDB:692034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.629Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Px9KNLEUJCU29t9DhQL94o
        subject_person_id: p_CL9yKhz8KQ9TFTGGVXiGwR
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
        - id: cs_aLGA3bPvqv71UUcJD2Fqbq
          claim_id: c_Px9KNLEUJCU29t9DhQL94o
          source_id: s_7tXg4c1VwsrrJNjtfjj8YW
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
        id: c_gQVMHr6Bx0lANjc3HF3u94
        subject_person_id: p_7Ar5PzC26XbEgUcnAsMSDe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CL9yKhz8KQ9TFTGGVXiGwR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DKH4_XPGTMxsrf7PiC6nhq
          claim_id: c_gQVMHr6Bx0lANjc3HF3u94
          source_id: s_Cj7m495sNc4oJbqopqAB9f
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=293849：子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Cj7m495sNc4oJbqopqAB9f
            source_type: api_record
            title: 中国历代人物传记资料库：王廷傑（CBDB 692033）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692033&o=json
            external_identifier: CBDB:692033
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.628Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7Ar5PzC26XbEgUcnAsMSDe
        status: active
        display_name: 王廷傑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大任

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大任 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7Ar5PzC26XbEgUcnAsMSDe | 王廷傑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大任（CBDB 692034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692034&o=json)
- [中国历代人物传记资料库：王廷傑（CBDB 692033）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692033&o=json)
