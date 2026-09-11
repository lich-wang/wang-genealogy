---
schema: wang-person/v1
id: p_eN6A3NGkxZkShqYMDyYDXF
status: active
merged_into: null
display_name: 王在
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GvZu4K4MEm3JXnpuaupGpQ
        subject_person_id: p_eN6A3NGkxZkShqYMDyYDXF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王在
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_44WGT7A4US1zGNKkp2VDVe
          claim_id: c_GvZu4K4MEm3JXnpuaupGpQ
          source_id: s_GQCEnG9mwevBGoN1e1gZs5
          stance: supports
          locator: CBDB:472940
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（472940）
          source: &a1
            id: s_GQCEnG9mwevBGoN1e1gZs5
            source_type: api_record
            title: 中国历代人物传记资料库：王在（CBDB 472940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472940&o=json
            external_identifier: CBDB:472940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.280Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DBm8cdEE3hTzDzVHF8KMXa
        subject_person_id: p_eN6A3NGkxZkShqYMDyYDXF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王在，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 472940）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UMr0VtgZasDlTiHk1dkZG3
          claim_id: c_DBm8cdEE3hTzDzVHF8KMXa
          source_id: s_GQCEnG9mwevBGoN1e1gZs5
          stance: supports
          locator: CBDB:472940
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
  other: []
---

# 王在

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王在 | accepted |
| bio.summary | 王在，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 472940） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王在（CBDB 472940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472940&o=json)
