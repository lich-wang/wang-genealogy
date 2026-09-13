---
schema: wang-person/v1
id: p_fi4ETRtQqaJdFv91rEKU32
status: active
merged_into: null
display_name: 王永紹
cbdb_id: 250010
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aKaewDE8kWSdGyfMrSrwUD
        subject_person_id: p_fi4ETRtQqaJdFv91rEKU32
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永紹，明人物。成化十一年進士。（中国历代人物传记资料库 CBDB 250010）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_dUp3lL3soV571jGjc7MzxF
          claim_id: c_aKaewDE8kWSdGyfMrSrwUD
          source_id: s_BKwHMzKgz5Jwd1yocFEfHa
          stance: supports
          locator: CBDB:250010
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BKwHMzKgz5Jwd1yocFEfHa
            source_type: api_record
            title: 中国历代人物传记资料库：王永紹（CBDB 250010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250010&o=json
            external_identifier: CBDB:250010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_f8hc4y5T66gGso3w6nPeZi
        subject_person_id: p_fi4ETRtQqaJdFv91rEKU32
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永紹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZScWGVXv1XmUrLNABZc9Mn
          claim_id: c_f8hc4y5T66gGso3w6nPeZi
          source_id: s_BKwHMzKgz5Jwd1yocFEfHa
          stance: supports
          locator: CBDB:250010
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
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
        id: c_8N5V5YCWcSPOaJ74a-7dS0
        subject_person_id: p_fi4ETRtQqaJdFv91rEKU32
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XU2HBZFhmiBGAyoKHD4B6w
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jh8HPuInNhD4GCxM6A68wZ
          claim_id: c_8N5V5YCWcSPOaJ74a-7dS0
          source_id: s_BKwHMzKgz5Jwd1yocFEfHa
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百三十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BKwHMzKgz5Jwd1yocFEfHa
            source_type: api_record
            title: 中国历代人物传记资料库：王永紹（CBDB 250010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250010&o=json
            external_identifier: CBDB:250010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_XU2HBZFhmiBGAyoKHD4B6w
        status: active
        display_name: 王宬
        merged_into_person_id: null
  other: []
---

# 王永紹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王永紹，明人物。成化十一年進士。（中国历代人物传记资料库 CBDB 250010） | accepted |
| name.primary | 王永紹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_XU2HBZFhmiBGAyoKHD4B6w | 王宬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王永紹（CBDB 250010）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250010&o=json)
