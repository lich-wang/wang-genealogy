---
schema: wang-person/v1
id: p_L8XuaB9Bf7x5KGQmxdXQcj
status: active
merged_into: null
display_name: 王應祥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AE6iwQmB6MYLHMrXdek1G2
        subject_person_id: p_L8XuaB9Bf7x5KGQmxdXQcj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8zL1DrKDkKDL5RE329i5hN
          claim_id: c_AE6iwQmB6MYLHMrXdek1G2
          source_id: s_1B5GJS25ChxUtuqkHcLcoB
          stance: supports
          locator: CBDB:229667
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（229667）
          source: &a1
            id: s_1B5GJS25ChxUtuqkHcLcoB
            source_type: api_record
            title: 中国历代人物传记资料库：王應祥（CBDB 229667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229667&o=json
            external_identifier: CBDB:229667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.576Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QuNg3zUN2NnYBarDGi1bWD
        subject_person_id: p_L8XuaB9Bf7x5KGQmxdXQcj
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
        - id: cs_Bvrt7VrEo5z5pThCM2CzBx
          claim_id: c_QuNg3zUN2NnYBarDGi1bWD
          source_id: s_1B5GJS25ChxUtuqkHcLcoB
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
        id: c_RzLY7fh88PRKo8j2ghgPHZ
        subject_person_id: p_L8XuaB9Bf7x5KGQmxdXQcj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1wesYYym6K1XDJ5hKnvGQQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bOibbdhsYrUG269BJ1K_fl
          claim_id: c_RzLY7fh88PRKo8j2ghgPHZ
          source_id: s_PjKW2LD3C685H4gfMHYoKL
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第二百七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PjKW2LD3C685H4gfMHYoKL
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉謨（CBDB 207214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207214&o=json
            external_identifier: CBDB:207214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.913Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1wesYYym6K1XDJ5hKnvGQQ
        status: active
        display_name: 王嘉謨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王應祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應祥 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1wesYYym6K1XDJ5hKnvGQQ | 王嘉謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉謨（CBDB 207214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207214&o=json)
- [中国历代人物传记资料库：王應祥（CBDB 229667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229667&o=json)
