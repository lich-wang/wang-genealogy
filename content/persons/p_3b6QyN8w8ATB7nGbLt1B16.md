---
schema: wang-person/v1
id: p_3b6QyN8w8ATB7nGbLt1B16
status: active
merged_into: null
display_name: 王樹霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S8QeytqLibtp5ghikoevHo
        subject_person_id: p_3b6QyN8w8ATB7nGbLt1B16
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jAzdmbv2ZhkvNtFRAAT3th
          claim_id: c_S8QeytqLibtp5ghikoevHo
          source_id: s_r1L364Z1Aeh9qknwTVx21M
          stance: supports
          locator: CBDB:638871
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638871）
          source: &a1
            id: s_r1L364Z1Aeh9qknwTVx21M
            source_type: api_record
            title: 中国历代人物传记资料库：王樹霖（CBDB 638871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638871&o=json
            external_identifier: CBDB:638871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.795Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6qmixsRjNgYDyVTBM58mh7
        subject_person_id: p_3b6QyN8w8ATB7nGbLt1B16
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王樹霖，清人物。籍贯皋蘭，入仕貢生: 副貢，曾任知縣。（中国历代人物传记资料库 CBDB 638871）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cMDxrXausMmA0xZxpuMGcH
          claim_id: c_6qmixsRjNgYDyVTBM58mh7
          source_id: s_r1L364Z1Aeh9qknwTVx21M
          stance: supports
          locator: CBDB:638871
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

# 王樹霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樹霖 | accepted |
| bio.summary | 王樹霖，清人物。籍贯皋蘭，入仕貢生: 副貢，曾任知縣。（中国历代人物传记资料库 CBDB 638871） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樹霖（CBDB 638871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638871&o=json)
