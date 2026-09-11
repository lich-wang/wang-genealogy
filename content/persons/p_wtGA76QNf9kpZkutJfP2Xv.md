---
schema: wang-person/v1
id: p_wtGA76QNf9kpZkutJfP2Xv
status: active
merged_into: null
display_name: 王柱峯
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aEgEL61sEvp7eoazrF9r98
        subject_person_id: p_wtGA76QNf9kpZkutJfP2Xv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王柱峯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bogp62QK9myyvK8cesVWu1
          claim_id: c_aEgEL61sEvp7eoazrF9r98
          source_id: s_PY7GBvEqoStoicuZnPkUTM
          stance: supports
          locator: CBDB:699107
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699107）
          source: &a1
            id: s_PY7GBvEqoStoicuZnPkUTM
            source_type: api_record
            title: 中国历代人物传记资料库：王柱峯（CBDB 699107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699107&o=json
            external_identifier: CBDB:699107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.576Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_otc6MrKFn5yE71jS9tarDw
        subject_person_id: p_wtGA76QNf9kpZkutJfP2Xv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MM3KhdWjjW3L9wtZbGU2ne
          claim_id: c_otc6MrKFn5yE71jS9tarDw
          source_id: s_PY7GBvEqoStoicuZnPkUTM
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
        id: c_Adky2HsOmpZO6cS-B1Oirb
        subject_person_id: p_jbW2GEnx22CuvNGBdKkmRd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wtGA76QNf9kpZkutJfP2Xv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SYHQOF-JtMTKvl4O28VouD
          claim_id: c_Adky2HsOmpZO6cS-B1Oirb
          source_id: s_pMXsUfJY2Vi9Ky3jL1u8Fi
          stance: supports
          locator: 新修菏澤縣志，lgid=725118：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pMXsUfJY2Vi9Ky3jL1u8Fi
            source_type: api_record
            title: 中国历代人物传记资料库：王竒（CBDB 699010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699010&o=json
            external_identifier: CBDB:699010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.574Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jbW2GEnx22CuvNGBdKkmRd
        status: active
        display_name: 王竒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王柱峯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王柱峯 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jbW2GEnx22CuvNGBdKkmRd | 王竒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王竒（CBDB 699010）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699010&o=json)
- [中国历代人物传记资料库：王柱峯（CBDB 699107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699107&o=json)
