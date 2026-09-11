---
schema: wang-person/v1
id: p_e8GwzBVysey3Kb4uNTABDK
status: active
merged_into: null
display_name: 王敬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XNppWVM6Eiic1HrBstXfex
        subject_person_id: p_e8GwzBVysey3Kb4uNTABDK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zS55UE6D24KmehxNcP7h2N
          claim_id: c_XNppWVM6Eiic1HrBstXfex
          source_id: s_HwM5bMkoywC5wSHBTt5VnK
          stance: supports
          locator: CBDB:296945
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（296945）
          source: &a1
            id: s_HwM5bMkoywC5wSHBTt5VnK
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 296945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296945&o=json
            external_identifier: CBDB:296945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.536Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qJ7qfzQL7rBBap2A22eiuU
        subject_person_id: p_e8GwzBVysey3Kb4uNTABDK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬，明人物。天順元年進士，籍贯盧龍，曾任知事。（中国历代人物传记资料库 CBDB 296945）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Wnoytp-FiEyP4z9zJRxAZv
          claim_id: c_qJ7qfzQL7rBBap2A22eiuU
          source_id: s_HwM5bMkoywC5wSHBTt5VnK
          stance: supports
          locator: CBDB:296945
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_8n9uh0LHj6kH1tlFbUHbIb
        subject_person_id: p_e8GwzBVysey3Kb4uNTABDK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1vXY7qFFYMcnZjgBc9EDs8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wGQw8gHHlTbYM2qWCZ95RT
          claim_id: c_8n9uh0LHj6kH1tlFbUHbIb
          source_id: s_57kZAzZH2t6g4w3F4mdEPS
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第六十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_57kZAzZH2t6g4w3F4mdEPS
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 198633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198633&o=json
            external_identifier: CBDB:198633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.505Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1vXY7qFFYMcnZjgBc9EDs8
        status: active
        display_name: 王佐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬 | accepted |
| bio.summary | 王敬，明人物。天順元年進士，籍贯盧龍，曾任知事。（中国历代人物传记资料库 CBDB 296945） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1vXY7qFFYMcnZjgBc9EDs8 | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬（CBDB 296945）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296945&o=json)
- [中国历代人物传记资料库：王佐（CBDB 198633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198633&o=json)
