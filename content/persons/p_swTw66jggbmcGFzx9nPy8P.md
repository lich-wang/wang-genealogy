---
schema: wang-person/v1
id: p_swTw66jggbmcGFzx9nPy8P
status: active
merged_into: null
display_name: 王正雅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bn3Qd18KKSLFUCznRrJSWH
        subject_person_id: p_swTw66jggbmcGFzx9nPy8P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正雅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_azsrJRoRR9z5bfiK1KuCaY
          claim_id: c_Bn3Qd18KKSLFUCznRrJSWH
          source_id: s_m1ewX934omjuUDogcSo7QT
          stance: supports
          locator: CBDB:61473
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61473）
          source: &a1
            id: s_m1ewX934omjuUDogcSo7QT
            source_type: api_record
            title: 中国历代人物传记资料库：王正雅（CBDB 61473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61473&o=json
            external_identifier: CBDB:61473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.900Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2zwDJE7YTS15xH31gvhwhU
        subject_person_id: p_swTw66jggbmcGFzx9nPy8P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正雅，清人物。籍贯石門。（中国历代人物传记资料库 CBDB 61473）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gGgYmSOgja1ROzMNO_BVxy
          claim_id: c_2zwDJE7YTS15xH31gvhwhU
          source_id: s_m1ewX934omjuUDogcSo7QT
          stance: supports
          locator: CBDB:61473
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

# 王正雅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正雅 | accepted |
| bio.summary | 王正雅，清人物。籍贯石門。（中国历代人物传记资料库 CBDB 61473） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正雅（CBDB 61473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61473&o=json)
