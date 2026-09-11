---
schema: wang-person/v1
id: p_KTPsGrhjm7w5bEMynZgUPV
status: active
merged_into: null
display_name: 王譽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FTPpkMFCW3rEFUv3AQP8Ke
        subject_person_id: p_KTPsGrhjm7w5bEMynZgUPV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王譽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wbHB4wFZ2o6qf3sAk3QP47
          claim_id: c_FTPpkMFCW3rEFUv3AQP8Ke
          source_id: s_yS95CYVi5BRJYnfEJLAtCu
          stance: supports
          locator: CBDB:493078
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（493078）
          source: &a1
            id: s_yS95CYVi5BRJYnfEJLAtCu
            source_type: api_record
            title: 中国历代人物传记资料库：王譽（CBDB 493078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=493078&o=json
            external_identifier: CBDB:493078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.343Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qt5cEpbv3t2aRSW9LkEfCu
        subject_person_id: p_KTPsGrhjm7w5bEMynZgUPV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王譽，明人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任教諭。（中国历代人物传记资料库 CBDB 493078）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pdw3PS3K-F2_PT5IxxUuIg
          claim_id: c_Qt5cEpbv3t2aRSW9LkEfCu
          source_id: s_yS95CYVi5BRJYnfEJLAtCu
          stance: supports
          locator: CBDB:493078
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

# 王譽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王譽 | accepted |
| bio.summary | 王譽，明人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任教諭。（中国历代人物传记资料库 CBDB 493078） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王譽（CBDB 493078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=493078&o=json)
