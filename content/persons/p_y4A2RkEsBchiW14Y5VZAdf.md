---
schema: wang-person/v1
id: p_y4A2RkEsBchiW14Y5VZAdf
status: active
merged_into: null
display_name: 王珍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h1SKzi1XJn1s2uEcY9YBfv
        subject_person_id: p_y4A2RkEsBchiW14Y5VZAdf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TmYfF29f4Vev3yS31i7X9o
          claim_id: c_h1SKzi1XJn1s2uEcY9YBfv
          source_id: s_wVCqYq313ixtAGLECnvFXH
          stance: supports
          locator: CBDB:439503
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（439503）
          source: &a1
            id: s_wVCqYq313ixtAGLECnvFXH
            source_type: api_record
            title: 中国历代人物传记资料库：王珍（CBDB 439503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439503&o=json
            external_identifier: CBDB:439503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.097Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dnNHju5A2LDoMicT67joNP
        subject_person_id: p_y4A2RkEsBchiW14Y5VZAdf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珍，清人物。籍贯長治，入仕副榜，曾任縣知縣、知府。（中国历代人物传记资料库 CBDB 439503）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pZwsjyvxNLgHCNA8HOY4Ma
          claim_id: c_dnNHju5A2LDoMicT67joNP
          source_id: s_wVCqYq313ixtAGLECnvFXH
          stance: supports
          locator: CBDB:439503
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

# 王珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珍 | accepted |
| bio.summary | 王珍，清人物。籍贯長治，入仕副榜，曾任縣知縣、知府。（中国历代人物传记资料库 CBDB 439503） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珍（CBDB 439503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=439503&o=json)
