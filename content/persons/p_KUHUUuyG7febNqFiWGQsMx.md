---
schema: wang-person/v1
id: p_KUHUUuyG7febNqFiWGQsMx
status: active
merged_into: null
display_name: 王之純
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4XvxFrbxQSnFVH7cJmCQzr
        subject_person_id: p_KUHUUuyG7febNqFiWGQsMx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Dx6unrxfpBEeaCUgomP2iN
          claim_id: c_4XvxFrbxQSnFVH7cJmCQzr
          source_id: s_zD4HBKCDHsp3zrKHW9Ai2a
          stance: supports
          locator: CBDB:136686
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（136686）
          source: &a1
            id: s_zD4HBKCDHsp3zrKHW9Ai2a
            source_type: api_record
            title: 中国历代人物传记资料库：王之純（CBDB 136686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136686&o=json
            external_identifier: CBDB:136686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qeBryQmRERyz5vPk5gD1yp
        subject_person_id: p_KUHUUuyG7febNqFiWGQsMx
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
        - id: cs_qeYxDhSGwrUNfkZXFU5SUs
          claim_id: c_qeBryQmRERyz5vPk5gD1yp
          source_id: s_zD4HBKCDHsp3zrKHW9Ai2a
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_B1z61A9nUKl2KZ2LkdXJ-I
        subject_person_id: p_KUHUUuyG7febNqFiWGQsMx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RSyHLCzgNL6rMFbB6oghwV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_roDaj9ji1WrSmc-ppIBb5f
          claim_id: c_B1z61A9nUKl2KZ2LkdXJ-I
          source_id: s_zD4HBKCDHsp3zrKHW9Ai2a
          stance: supports
          locator: 寶祐登科錄：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RSyHLCzgNL6rMFbB6oghwV
        status: active
        display_name: 王朝佐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_1kjfKqqSeV1nlwOUIKjB1l
        subject_person_id: p_KUHUUuyG7febNqFiWGQsMx
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_9nHjy8JhU6aUZW997ksTF3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R7Z5WYe-_hPvELil_T-x_K
          claim_id: c_1kjfKqqSeV1nlwOUIKjB1l
          source_id: s_Y3wEw8dP1RYZShswidiYwv
          stance: supports
          locator: 寶祐登科錄：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Y3wEw8dP1RYZShswidiYwv
            source_type: api_record
            title: 中国历代人物传记资料库：郭氏(王之純妻)（CBDB 138660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138660&o=json
            external_identifier: CBDB:138660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9nHjy8JhU6aUZW997ksTF3
        status: active
        display_name: 郭氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_hR_K0ZDBQt5pthHBbgEVBF
        subject_person_id: p_QMrrZs1vBrMJJUatsfDMdT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KUHUUuyG7febNqFiWGQsMx
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q4YvnpUDNK1A3ZiqJOVqTQ
          claim_id: c_hR_K0ZDBQt5pthHBbgEVBF
          source_id: s_zD4HBKCDHsp3zrKHW9Ai2a
          stance: supports
          locator: 寶祐登科錄：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QMrrZs1vBrMJJUatsfDMdT
        status: active
        display_name: 王珏
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王之純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之純 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RSyHLCzgNL6rMFbB6oghwV | 王朝佐 | accepted |
| spouses | p_9nHjy8JhU6aUZW997ksTF3 | 郭氏 | accepted |
| ancestors | p_QMrrZs1vBrMJJUatsfDMdT | 王珏 | accepted |

## 外部来源

- [中国历代人物传记资料库：郭氏(王之純妻)（CBDB 138660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138660&o=json)
- [中国历代人物传记资料库：王之純（CBDB 136686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136686&o=json)
