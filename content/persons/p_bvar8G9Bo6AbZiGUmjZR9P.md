---
schema: wang-person/v1
id: p_bvar8G9Bo6AbZiGUmjZR9P
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 5353
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BjE7Qv8qyMiNLYh8L3q8G5
        subject_person_id: p_bvar8G9Bo6AbZiGUmjZR9P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p9q8lZXo01H9LSrRD-NQrB
          claim_id: c_BjE7Qv8qyMiNLYh8L3q8G5
          source_id: s_kWGQ1qSUbFqo6-jTGtrTX_
          stance: supports
          locator: CBDB:5353
          quotation: null
          interpretation_note: CBDB 明确记录的王利配偶
          source: &a1
            id: s_kWGQ1qSUbFqo6-jTGtrTX_
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王利妻)（CBDB 5353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5353&o=json
            external_identifier: CBDB:5353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_4hvTLA1RKjk6BC6DIbN_H2
        subject_person_id: p_zVd6FHzFDzdLE8BP6H1zrd
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_bvar8G9Bo6AbZiGUmjZR9P
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hujHAEjsX3-MXjkc_jyOX1
          claim_id: c_4hvTLA1RKjk6BC6DIbN_H2
          source_id: s_kWGQ1qSUbFqo6-jTGtrTX_
          stance: supports
          locator: 宋人傳記資料索引(電子版)，675;676：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zVd6FHzFDzdLE8BP6H1zrd
        status: active
        display_name: 王利
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_zVd6FHzFDzdLE8BP6H1zrd | 王利 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王利妻)（CBDB 5353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5353&o=json)
