---
schema: wang-person/v1
id: p_KxonNTZx8tT6qN5hztkL3V
status: active
merged_into: null
display_name: 王守紀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9En3s87cGn3vbKcuPuphZu
        subject_person_id: p_KxonNTZx8tT6qN5hztkL3V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守紀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6xREKYmcX6ghq5j3hXcS9z
          claim_id: c_9En3s87cGn3vbKcuPuphZu
          source_id: s_eWRXuUegd4BgShffvdQ1io
          stance: supports
          locator: CBDB:551517
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551517）
          source: &a1
            id: s_eWRXuUegd4BgShffvdQ1io
            source_type: api_record
            title: 中国历代人物传记资料库：王守紀（CBDB 551517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551517&o=json
            external_identifier: CBDB:551517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.511Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_apH4upNrkMhm5s27jp5z2H
        subject_person_id: p_KxonNTZx8tT6qN5hztkL3V
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
        - id: cs_A4Z48MeP2HMWCd3Gdg4Q2y
          claim_id: c_apH4upNrkMhm5s27jp5z2H
          source_id: s_eWRXuUegd4BgShffvdQ1io
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
        id: c_VfTWgLbGXAC8h_hIIaFEjS
        subject_person_id: p_KxonNTZx8tT6qN5hztkL3V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K9GwsemFFnmLMhsXtBN7vk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b5iupT83TDW_hkQNQGegUK
          claim_id: c_VfTWgLbGXAC8h_hIIaFEjS
          source_id: s_5jK9MeKHEEWFyucULssQQ8
          stance: supports
          locator: 南陽府志，lgid=878672：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5jK9MeKHEEWFyucULssQQ8
            source_type: api_record
            title: 中国历代人物传记资料库：王可起（CBDB 551519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551519&o=json
            external_identifier: CBDB:551519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.512Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_K9GwsemFFnmLMhsXtBN7vk
        status: active
        display_name: 王可起
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王守紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守紀 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_K9GwsemFFnmLMhsXtBN7vk | 王可起 | accepted |

## 外部来源

- [中国历代人物传记资料库：王可起（CBDB 551519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551519&o=json)
- [中国历代人物传记资料库：王守紀（CBDB 551517）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551517&o=json)
