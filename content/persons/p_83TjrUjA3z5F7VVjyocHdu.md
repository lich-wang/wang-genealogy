---
schema: wang-person/v1
id: p_83TjrUjA3z5F7VVjyocHdu
status: active
merged_into: null
display_name: 王恕
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uq3dioxkLsWSbo3Am5o2cq
        subject_person_id: p_83TjrUjA3z5F7VVjyocHdu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uLD5cT1gx1anoB8uhT2Jq6
          claim_id: c_uq3dioxkLsWSbo3Am5o2cq
          source_id: s_4MuYDAVBszpxN53wxAGcDP
          stance: supports
          locator: CBDB:22209
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22209）
          source: &a1
            id: s_4MuYDAVBszpxN53wxAGcDP
            source_type: api_record
            title: 中国历代人物传记资料库：王恕（CBDB 22209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22209&o=json
            external_identifier: CBDB:22209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.846Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5dDgjjJz49K8Mi6zAmngQF
        subject_person_id: p_83TjrUjA3z5F7VVjyocHdu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恕，宋人物。籍贯婺源，曾任縣令。（中国历代人物传记资料库 CBDB 22209）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MNgNWGniuV38T-9B3Z3CnF
          claim_id: c_5dDgjjJz49K8Mi6zAmngQF
          source_id: s_4MuYDAVBszpxN53wxAGcDP
          stance: supports
          locator: CBDB:22209
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DrvPomLp1ZgZT2xME35Dn5
        subject_person_id: p_eTn5grdY57WP95rxAMqTrj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_83TjrUjA3z5F7VVjyocHdu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KS5QwSbvsL-Csxil74DKpW
          claim_id: c_DrvPomLp1ZgZT2xME35Dn5
          source_id: s_ayXwHa3P8JZGjiVZ55uyM9
          stance: supports
          locator: 宋人傳記資料索引(電子版)，859：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ayXwHa3P8JZGjiVZ55uyM9
            source_type: api_record
            title: 中国历代人物传记资料库：王炎（CBDB 16692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16692&o=json
            external_identifier: CBDB:16692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.652Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eTn5grdY57WP95rxAMqTrj
        status: active
        display_name: 王炎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恕 | accepted |
| bio.summary | 王恕，宋人物。籍贯婺源，曾任縣令。（中国历代人物传记资料库 CBDB 22209） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eTn5grdY57WP95rxAMqTrj | 王炎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恕（CBDB 22209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22209&o=json)
- [中国历代人物传记资料库：王炎（CBDB 16692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=16692&o=json)
