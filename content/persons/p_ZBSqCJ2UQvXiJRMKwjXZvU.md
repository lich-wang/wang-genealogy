---
schema: wang-person/v1
id: p_ZBSqCJ2UQvXiJRMKwjXZvU
status: active
merged_into: null
display_name: 王師順
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fEGcqchDKSwqDsXiZk5xDo
        subject_person_id: p_ZBSqCJ2UQvXiJRMKwjXZvU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師順
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DwKoai3LXYbWZFgvEgrDxL
          claim_id: c_fEGcqchDKSwqDsXiZk5xDo
          source_id: s_kfAHFwHFpvz8CHUshKCxfQ
          stance: supports
          locator: CBDB:150827
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（150827）
          source: &a1
            id: s_kfAHFwHFpvz8CHUshKCxfQ
            source_type: api_record
            title: 中国历代人物传记资料库：王師順（CBDB 150827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150827&o=json
            external_identifier: CBDB:150827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.828Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3LEHpeUyXF3dTQH8wNVpWo
        subject_person_id: p_ZBSqCJ2UQvXiJRMKwjXZvU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9KUgyRBm5W46rh9aNVYGt2
          claim_id: c_3LEHpeUyXF3dTQH8wNVpWo
          source_id: s_kfAHFwHFpvz8CHUshKCxfQ
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
        id: c_-XeV-xFjpJMcwgSjtCsnac
        subject_person_id: p_ZBSqCJ2UQvXiJRMKwjXZvU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6RXDLLM6sg158etGji2Ajt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FI8cEmaI9xXUbbGwLrPLML
          claim_id: c_-XeV-xFjpJMcwgSjtCsnac
          source_id: s_aQPEiFDKhXewR97dFD4wYj
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jinglong 32：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aQPEiFDKhXewR97dFD4wYj
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 140259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140259&o=json
            external_identifier: CBDB:140259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.488Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6RXDLLM6sg158etGji2Ajt
        status: active
        display_name: 王震
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王師順

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師順 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6RXDLLM6sg158etGji2Ajt | 王震 | accepted |

## 外部来源

- [中国历代人物传记资料库：王師順（CBDB 150827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150827&o=json)
- [中国历代人物传记资料库：王震（CBDB 140259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140259&o=json)
