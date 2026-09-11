---
schema: wang-person/v1
id: p_m9vU8XZTaGk7TMZXbKcd5F
status: active
merged_into: null
display_name: 王鐸
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hA3z2GQeS1KQ26hmEFqa1J
        subject_person_id: p_m9vU8XZTaGk7TMZXbKcd5F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_itKERpZeY1Vpq6HErqDooD
          claim_id: c_hA3z2GQeS1KQ26hmEFqa1J
          source_id: s_NUHjCnE9RXFLHFAf8K2v6J
          stance: supports
          locator: CBDB:262272
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262272）
          source: &a1
            id: s_NUHjCnE9RXFLHFAf8K2v6J
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 262272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262272&o=json
            external_identifier: CBDB:262272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.579Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fK7KqHNj2ymDWeAaE54YaG
        subject_person_id: p_m9vU8XZTaGk7TMZXbKcd5F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸，明人物。弘治三年進士。（中国历代人物传记资料库 CBDB 262272）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eig-_MZVEVvon1c1sFd3H7
          claim_id: c_fK7KqHNj2ymDWeAaE54YaG
          source_id: s_NUHjCnE9RXFLHFAf8K2v6J
          stance: supports
          locator: CBDB:262272
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
  descendants:
    - claim:
        id: c_EZexX4gfYrXKySdVHl_mmk
        subject_person_id: p_m9vU8XZTaGk7TMZXbKcd5F
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ygZf2AWX1K7FAsdGFUsyHt
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KZSvE6NmQvfKtJxkVwiEUy
          claim_id: c_EZexX4gfYrXKySdVHl_mmk
          source_id: s_NUHjCnE9RXFLHFAf8K2v6J
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第四十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ygZf2AWX1K7FAsdGFUsyHt
        status: active
        display_name: 王冠
        merged_into_person_id: null
  other: []
---

# 王鐸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐸 | accepted |
| bio.summary | 王鐸，明人物。弘治三年進士。（中国历代人物传记资料库 CBDB 262272） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ygZf2AWX1K7FAsdGFUsyHt | 王冠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 262272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262272&o=json)
