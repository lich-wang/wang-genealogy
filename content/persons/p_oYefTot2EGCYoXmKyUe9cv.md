---
schema: wang-person/v1
id: p_oYefTot2EGCYoXmKyUe9cv
status: active
merged_into: null
display_name: 王孟瓛
cbdb_id: 250011
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uLkFkqm6kRH6oB6xDSX841
        subject_person_id: p_oYefTot2EGCYoXmKyUe9cv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟瓛，明人物。成化十一年進士，籍贯海陽，曾任陰陽訓術。（中国历代人物传记资料库 CBDB 250011）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Qyh7hTkoLlgcP2yRR0b23_
          claim_id: c_uLkFkqm6kRH6oB6xDSX841
          source_id: s_Azh3eCr8gLTBDEiAV2xWej
          stance: supports
          locator: CBDB:250011
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Azh3eCr8gLTBDEiAV2xWej
            source_type: api_record
            title: 中国历代人物传记资料库：王孟瓛（CBDB 250011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250011&o=json
            external_identifier: CBDB:250011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_G8XP2koHHPLU7esok6TPcj
        subject_person_id: p_oYefTot2EGCYoXmKyUe9cv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟瓛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qd6tG6G6MLHY9qGcN2Eo2Q
          claim_id: c_G8XP2koHHPLU7esok6TPcj
          source_id: s_Azh3eCr8gLTBDEiAV2xWej
          stance: supports
          locator: CBDB:250011
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_7NtKxrAY7J3bERyYOR0dko
        subject_person_id: p_oYefTot2EGCYoXmKyUe9cv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XU2HBZFhmiBGAyoKHD4B6w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3psoZzj_r7ZVfxtC19Onux
          claim_id: c_7NtKxrAY7J3bERyYOR0dko
          source_id: s_Azh3eCr8gLTBDEiAV2xWej
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Azh3eCr8gLTBDEiAV2xWej
            source_type: api_record
            title: 中国历代人物传记资料库：王孟瓛（CBDB 250011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250011&o=json
            external_identifier: CBDB:250011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_XU2HBZFhmiBGAyoKHD4B6w
        status: active
        display_name: 王宬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王孟瓛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孟瓛，明人物。成化十一年進士，籍贯海陽，曾任陰陽訓術。（中国历代人物传记资料库 CBDB 250011） | accepted |
| name.primary | 王孟瓛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_XU2HBZFhmiBGAyoKHD4B6w | 王宬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孟瓛（CBDB 250011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250011&o=json)
