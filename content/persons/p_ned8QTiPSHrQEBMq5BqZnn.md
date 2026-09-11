---
schema: wang-person/v1
id: p_ned8QTiPSHrQEBMq5BqZnn
status: active
merged_into: null
display_name: 王檟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xRziHd9PpciuTdDuHRGDur
        subject_person_id: p_ned8QTiPSHrQEBMq5BqZnn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王檟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KZDxducs6RMYyqAT7PWfeT
          claim_id: c_xRziHd9PpciuTdDuHRGDur
          source_id: s_5YL3tQNfmariFJLJ8RuJAZ
          stance: supports
          locator: CBDB:493299
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（493299）
          source: &a1
            id: s_5YL3tQNfmariFJLJ8RuJAZ
            source_type: api_record
            title: 中国历代人物传记资料库：王檟（CBDB 493299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=493299&o=json
            external_identifier: CBDB:493299
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c6zYUFnoZKt94fm6tfP4SJ
        subject_person_id: p_ned8QTiPSHrQEBMq5BqZnn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王檟，明人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 493299）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KrzEeb8zz-yUC_BpuxHejU
          claim_id: c_c6zYUFnoZKt94fm6tfP4SJ
          source_id: s_5YL3tQNfmariFJLJ8RuJAZ
          stance: supports
          locator: CBDB:493299
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

# 王檟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王檟 | accepted |
| bio.summary | 王檟，明人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 493299） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王檟（CBDB 493299）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=493299&o=json)
