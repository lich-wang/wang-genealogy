---
schema: wang-person/v1
id: p_Bo8MMr1AvoPCtWH71g8W6V
status: active
merged_into: null
display_name: 王璧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3SA2pSx5sF2257nGwocKkm
        subject_person_id: p_Bo8MMr1AvoPCtWH71g8W6V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4tppKi1NJbwg68Cu3YRNzK
          claim_id: c_3SA2pSx5sF2257nGwocKkm
          source_id: s_S5dGqjyi9roCoL2361fpSR
          stance: supports
          locator: CBDB:19083
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19083）
          source: &a1
            id: s_S5dGqjyi9roCoL2361fpSR
            source_type: api_record
            title: 中国历代人物传记资料库：王璧（CBDB 19083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19083&o=json
            external_identifier: CBDB:19083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.723Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RhGGqddZ8EqPx1U67rPQCJ
        subject_person_id: p_Bo8MMr1AvoPCtWH71g8W6V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tCZ8KpudPkzEPUcB6aaSnC
          claim_id: c_RhGGqddZ8EqPx1U67rPQCJ
          source_id: s_S5dGqjyi9roCoL2361fpSR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kaEAxL9lFu9oxoDPq3Wm04
        subject_person_id: p_8ZNRfFsK3rEkNpQdDz6act
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Bo8MMr1AvoPCtWH71g8W6V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SPk5mx1wXL8FAWGX1Nikwl
          claim_id: c_kaEAxL9lFu9oxoDPq3Wm04
          source_id: s_P9rcd9SYRqyM5Qp4JcJpmA
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1267：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P9rcd9SYRqyM5Qp4JcJpmA
            source_type: api_record
            title: 中国历代人物传记资料库：王庭秀（CBDB 19082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19082&o=json
            external_identifier: CBDB:19082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_8ZNRfFsK3rEkNpQdDz6act
        status: active
        display_name: 王庭秀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璧 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8ZNRfFsK3rEkNpQdDz6act | 王庭秀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璧（CBDB 19083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19083&o=json)
- [中国历代人物传记资料库：王庭秀（CBDB 19082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19082&o=json)
