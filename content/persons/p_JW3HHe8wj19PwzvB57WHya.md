---
schema: wang-person/v1
id: p_JW3HHe8wj19PwzvB57WHya
status: active
merged_into: null
display_name: 王震業
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z35jWP4a4TSqecvKFBeUCu
        subject_person_id: p_JW3HHe8wj19PwzvB57WHya
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震業
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MjVoH7P8DJVaB9PTTwBN3m
          claim_id: c_z35jWP4a4TSqecvKFBeUCu
          source_id: s_E31qh3CjFBQw4YRdLJhsG6
          stance: supports
          locator: CBDB:700012
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700012）
          source: &a1
            id: s_E31qh3CjFBQw4YRdLJhsG6
            source_type: api_record
            title: 中国历代人物传记资料库：王震業（CBDB 700012）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700012&o=json
            external_identifier: CBDB:700012
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.589Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K5oVrjZm2ztCTgRNxnvRWo
        subject_person_id: p_JW3HHe8wj19PwzvB57WHya
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震業，清人物。籍贯歙縣。（中国历代人物传记资料库 CBDB 700012）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pDEo3tUGdJRJ87GtIISxfu
          claim_id: c_K5oVrjZm2ztCTgRNxnvRWo
          source_id: s_E31qh3CjFBQw4YRdLJhsG6
          stance: supports
          locator: CBDB:700012
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_qCQOGR0cqWTdEWu6WkYj9a
        subject_person_id: p_JW3HHe8wj19PwzvB57WHya
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EHHNxMEXdrxGCodii5TLHE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KEnkYY4IvFkQZBZBpE0Cke
          claim_id: c_qCQOGR0cqWTdEWu6WkYj9a
          source_id: s_E31qh3CjFBQw4YRdLJhsG6
          stance: supports
          locator: 武進陽湖縣志，lgid=152537：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EHHNxMEXdrxGCodii5TLHE
        status: active
        display_name: 王曰旦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王震業

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王震業 | accepted |
| bio.summary | 王震業，清人物。籍贯歙縣。（中国历代人物传记资料库 CBDB 700012） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EHHNxMEXdrxGCodii5TLHE | 王曰旦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王震業（CBDB 700012）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700012&o=json)
