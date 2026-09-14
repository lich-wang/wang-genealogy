---
schema: wang-person/v1
id: p_wPy8Ahw4bxM9rCrRM7rtSK
status: active
merged_into: null
display_name: 王廉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5ntnrUEyPJzxUWPNHNGcvd
        subject_person_id: p_wPy8Ahw4bxM9rCrRM7rtSK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bo2a3kE5HCPfQ7tNDA5J7y
          claim_id: c_5ntnrUEyPJzxUWPNHNGcvd
          source_id: s_6QNFYz78H6wfE9ARGUnKyP
          stance: supports
          locator: CBDB:563451
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（563451）
          source: &a1
            id: s_6QNFYz78H6wfE9ARGUnKyP
            source_type: api_record
            title: 中国历代人物传记资料库：王廉（CBDB 563451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563451&o=json
            external_identifier: CBDB:563451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6vSbHPuT3oD4qN2bETVY8S
        subject_person_id: p_wPy8Ahw4bxM9rCrRM7rtSK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廉，明人物。籍贯麗水，身份为經學家—易經、精於某種樂器，曾任工部員外郎、翰林院編修、縣丞。（中国历代人物传记资料库 CBDB 563451）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tIunkzt89xzf4iNyo9bGK5
          claim_id: c_6vSbHPuT3oD4qN2bETVY8S
          source_id: s_6QNFYz78H6wfE9ARGUnKyP
          stance: supports
          locator: CBDB:563451
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  other:
    - claim:
        id: c_GaNGcey0C3RY9-hWshEK4B
        subject_person_id: p_CL14JPDq7MiKnM4LUKo1RE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wPy8Ahw4bxM9rCrRM7rtSK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EqYiVqpaZiTmKkpZpNNSrk
          claim_id: c_GaNGcey0C3RY9-hWshEK4B
          source_id: s_L0ky5JeRBWToa5UjVYxkWQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 563451 王廉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_L0ky5JeRBWToa5UjVYxkWQ
            source_type: api_record
            title: 中国历代人物传记资料库：王霖（CBDB 563452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563452&o=json
            external_identifier: CBDB:563452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CL14JPDq7MiKnM4LUKo1RE
        status: active
        display_name: 王霖
        merged_into_person_id: null
---

# 王廉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廉 | accepted |
| bio.summary | 王廉，明人物。籍贯麗水，身份为經學家—易經、精於某種樂器，曾任工部員外郎、翰林院編修、縣丞。（中国历代人物传记资料库 CBDB 563451） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_CL14JPDq7MiKnM4LUKo1RE | 王霖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廉（CBDB 563451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563451&o=json)
- [中国历代人物传记资料库：王霖（CBDB 563452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563452&o=json)
