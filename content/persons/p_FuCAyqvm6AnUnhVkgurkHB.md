---
schema: wang-person/v1
id: p_FuCAyqvm6AnUnhVkgurkHB
status: active
merged_into: null
display_name: 王榮綬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cw3P7DrCZ4E9mSBQ5NWaVu
        subject_person_id: p_FuCAyqvm6AnUnhVkgurkHB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮綬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RJh8Rrak27PQHHL3S8woXJ
          claim_id: c_cw3P7DrCZ4E9mSBQ5NWaVu
          source_id: s_jkKMaFLQutJTN78h2vN7o3
          stance: supports
          locator: CBDB:69412
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69412）
          source: &a1
            id: s_jkKMaFLQutJTN78h2vN7o3
            source_type: api_record
            title: 中国历代人物传记资料库：王榮綬（CBDB 69412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69412&o=json
            external_identifier: CBDB:69412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ngM7ZxYYZyFrxexM1cDgg1
        subject_person_id: p_FuCAyqvm6AnUnhVkgurkHB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1911年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HEPuKJZnMEXHKj6JHrnEES
          claim_id: c_ngM7ZxYYZyFrxexM1cDgg1
          source_id: s_jkKMaFLQutJTN78h2vN7o3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PxDRh6WGpQaasmD17wPRX8
        subject_person_id: p_FuCAyqvm6AnUnhVkgurkHB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮綬（卒于1911年），中華民國人物。籍贯善化，入仕監生，曾任縣知縣。（中国历代人物传记资料库 CBDB 69412）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a6AxdrxxOtnunQl1_XT_qq
          claim_id: c_PxDRh6WGpQaasmD17wPRX8
          source_id: s_jkKMaFLQutJTN78h2vN7o3
          stance: supports
          locator: CBDB:69412
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

# 王榮綬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮綬 | accepted |
| death.date | 1911年 | accepted |
| bio.summary | 王榮綬（卒于1911年），中華民國人物。籍贯善化，入仕監生，曾任縣知縣。（中国历代人物传记资料库 CBDB 69412） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王榮綬（CBDB 69412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69412&o=json)
