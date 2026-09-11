---
schema: wang-person/v1
id: p_Z9squwh8ccNaSfqTLBhmXL
status: active
merged_into: null
display_name: 王由義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p4g2UMrLuWh4b7yhiDxNQ5
        subject_person_id: p_Z9squwh8ccNaSfqTLBhmXL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王由義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wV46vEZpC5pFe1Gk8j3M8c
          claim_id: c_p4g2UMrLuWh4b7yhiDxNQ5
          source_id: s_N39RsHvivgyBcG1kWgGpGr
          stance: supports
          locator: CBDB:687591
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（687591）
          source: &a1
            id: s_N39RsHvivgyBcG1kWgGpGr
            source_type: api_record
            title: 中国历代人物传记资料库：王由義（CBDB 687591）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687591&o=json
            external_identifier: CBDB:687591
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.451Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P726HLrcW5nxE2NqvediKs
        subject_person_id: p_Z9squwh8ccNaSfqTLBhmXL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王由義，宋人物。籍贯龍遊，入仕進士。（中国历代人物传记资料库 CBDB 687591）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mm1-ZrTeOBfs6TfrA-FWCw
          claim_id: c_P726HLrcW5nxE2NqvediKs
          source_id: s_N39RsHvivgyBcG1kWgGpGr
          stance: supports
          locator: CBDB:687591
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

# 王由義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王由義 | accepted |
| bio.summary | 王由義，宋人物。籍贯龍遊，入仕進士。（中国历代人物传记资料库 CBDB 687591） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王由義（CBDB 687591）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687591&o=json)
