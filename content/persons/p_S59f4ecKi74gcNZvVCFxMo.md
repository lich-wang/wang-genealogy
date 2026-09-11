---
schema: wang-person/v1
id: p_S59f4ecKi74gcNZvVCFxMo
status: active
merged_into: null
display_name: 王志長
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X6HPZujqj4n61jsD671Cku
        subject_person_id: p_S59f4ecKi74gcNZvVCFxMo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志長
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HMNeYxzrcX7VXE7daN8uho
          claim_id: c_X6HPZujqj4n61jsD671Cku
          source_id: s_y66jyhHdAXM5v5x7zvGBnc
          stance: supports
          locator: CBDB:235156
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（235156）
          source: &a1
            id: s_y66jyhHdAXM5v5x7zvGBnc
            source_type: api_record
            title: 中国历代人物传记资料库：王志長（CBDB 235156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235156&o=json
            external_identifier: CBDB:235156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.751Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j1wQgmWAGUMB6dADj9fPjm
        subject_person_id: p_S59f4ecKi74gcNZvVCFxMo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志長，明人物。籍贯崑山，入仕庠生。（中国历代人物传记资料库 CBDB 235156）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-5uWYir-5plP_f56FjYz7C
          claim_id: c_j1wQgmWAGUMB6dADj9fPjm
          source_id: s_y66jyhHdAXM5v5x7zvGBnc
          stance: supports
          locator: CBDB:235156
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5T0b0bySOcpqWHd2x2Pc0r
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S59f4ecKi74gcNZvVCFxMo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BhypxmFj2jZBcA7GC-kIpG
          claim_id: c_5T0b0bySOcpqWHd2x2Pc0r
          source_id: s_kEUVXVMNSjJdG7sCHKLhxA
          stance: supports
          locator: 江南通志，lgid=65730-65731：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kEUVXVMNSjJdG7sCHKLhxA
            source_type: api_record
            title: 中国历代人物传记资料库：王臨亨（CBDB 126852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126852&o=json
            external_identifier: CBDB:126852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.261Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cUEh25oPwuAacU7D2hTAPV
        status: active
        display_name: 王臨亨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王志長

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志長 | accepted |
| bio.summary | 王志長，明人物。籍贯崑山，入仕庠生。（中国历代人物传记资料库 CBDB 235156） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cUEh25oPwuAacU7D2hTAPV | 王臨亨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王臨亨（CBDB 126852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126852&o=json)
- [中国历代人物传记资料库：王志長（CBDB 235156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235156&o=json)
