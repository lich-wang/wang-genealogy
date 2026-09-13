---
schema: wang-person/v1
id: p_F4C3RHk7ajq8Arq9LumZLd
status: active
merged_into: null
display_name: 王勝鑑
cbdb_id: 212074
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vyF9VbLfsE9u15LgWbheWh
        subject_person_id: p_F4C3RHk7ajq8Arq9LumZLd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勝鑑，明人物。隆慶五年進士。（中国历代人物传记资料库 CBDB 212074）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_V-sgdOxdkb8uED7xOJ3-nU
          claim_id: c_vyF9VbLfsE9u15LgWbheWh
          source_id: s_T9DnKBNihmD4AeJJVnAkcG
          stance: supports
          locator: CBDB:212074
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_T9DnKBNihmD4AeJJVnAkcG
            source_type: api_record
            title: 中国历代人物传记资料库：王勝鑑（CBDB 212074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212074&o=json
            external_identifier: CBDB:212074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yDzxzZ3WmPnEn9DuyqzFA4
        subject_person_id: p_F4C3RHk7ajq8Arq9LumZLd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勝鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KCiMZC8urfh9YUyoX2EmGT
          claim_id: c_yDzxzZ3WmPnEn9DuyqzFA4
          source_id: s_T9DnKBNihmD4AeJJVnAkcG
          stance: supports
          locator: CBDB:212074
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
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
  descendants:
    - claim:
        id: c_FF7_UarYgh67z2y8eu9iUR
        subject_person_id: p_F4C3RHk7ajq8Arq9LumZLd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1XLNfRiDAQG1jeNLog7rHV
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A7F7mBuMDCuUkGFl9dcCz1
          claim_id: c_FF7_UarYgh67z2y8eu9iUR
          source_id: s_45JC3rMvbrBETLdFp221Ko
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_45JC3rMvbrBETLdFp221Ko
            source_type: api_record
            title: 中国历代人物传记资料库：王煥（CBDB 206011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206011&o=json
            external_identifier: CBDB:206011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1XLNfRiDAQG1jeNLog7rHV
        status: active
        display_name: 王煥
        merged_into_person_id: null
  other: []
---

# 王勝鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王勝鑑，明人物。隆慶五年進士。（中国历代人物传记资料库 CBDB 212074） | accepted |
| name.primary | 王勝鑑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_1XLNfRiDAQG1jeNLog7rHV | 王煥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王煥（CBDB 206011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206011&o=json)
- [中国历代人物传记资料库：王勝鑑（CBDB 212074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212074&o=json)
