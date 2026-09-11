---
schema: wang-person/v1
id: p_eDM7z1rzLxAaHKMQcuV8zT
status: active
merged_into: null
display_name: 王鑒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ojdBiRWU1SAASR4V2shPNk
        subject_person_id: p_eDM7z1rzLxAaHKMQcuV8zT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6kDREMqgsu9QTvWLWZPQis
          claim_id: c_ojdBiRWU1SAASR4V2shPNk
          source_id: s_1Kpga6VR6dmfEgsbMn38hJ
          stance: supports
          locator: CBDB:473484
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（473484）
          source: &a1
            id: s_1Kpga6VR6dmfEgsbMn38hJ
            source_type: api_record
            title: 中国历代人物传记资料库：王鑒（CBDB 473484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473484&o=json
            external_identifier: CBDB:473484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.309Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JFFCdeD1VdsCUD27MDNsGN
        subject_person_id: p_eDM7z1rzLxAaHKMQcuV8zT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑒，明人物。曾任副千戶。（中国历代人物传记资料库 CBDB 473484）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_k-ZbKPy_mZf2tstXJnFDfF
          claim_id: c_JFFCdeD1VdsCUD27MDNsGN
          source_id: s_1Kpga6VR6dmfEgsbMn38hJ
          stance: supports
          locator: CBDB:473484
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

# 王鑒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑒 | accepted |
| bio.summary | 王鑒，明人物。曾任副千戶。（中国历代人物传记资料库 CBDB 473484） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑒（CBDB 473484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=473484&o=json)
