---
schema: wang-person/v1
id: p_zHYAkVdX4y5cAjrC4iFBG8
status: active
merged_into: null
display_name: 王重喜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cqoLspSobn3JWgLBqBrbka
        subject_person_id: p_zHYAkVdX4y5cAjrC4iFBG8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重喜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9ETkvQ6QcxzXViet2BV2nx
          claim_id: c_cqoLspSobn3JWgLBqBrbka
          source_id: s_cpnsB8C2U4D5BpxZJ7iQAP
          stance: supports
          locator: CBDB:699447
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699447）
          source: &a1
            id: s_cpnsB8C2U4D5BpxZJ7iQAP
            source_type: api_record
            title: 中国历代人物传记资料库：王重喜（CBDB 699447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699447&o=json
            external_identifier: CBDB:699447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.762Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jbSmxtJvNnV2YQCczhScmu
        subject_person_id: p_zHYAkVdX4y5cAjrC4iFBG8
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
        - id: cs_MdTTLjzHV64EoNWsAQF43a
          claim_id: c_jbSmxtJvNnV2YQCczhScmu
          source_id: s_cpnsB8C2U4D5BpxZJ7iQAP
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
        id: c_1XrF0rS-QBRXjJy97WaIjK
        subject_person_id: p_P9pk3GX9ak89DEB5HLBBuW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zHYAkVdX4y5cAjrC4iFBG8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pn-iP6-GKKHKi2azm7jLHc
          claim_id: c_1XrF0rS-QBRXjJy97WaIjK
          source_id: s_cpnsB8C2U4D5BpxZJ7iQAP
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，48：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P9pk3GX9ak89DEB5HLBBuW
        status: active
        display_name: 王用
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王重喜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王重喜 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_P9pk3GX9ak89DEB5HLBBuW | 王用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王重喜（CBDB 699447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699447&o=json)
