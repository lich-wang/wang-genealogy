---
schema: wang-person/v1
id: p_sSTVjirDFXuhUA9aJL9WB8
status: active
merged_into: null
display_name: 陳岫先
revision: 1
cbdb_id: 145906
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aNm4XzglLIuospqVqQ3lLy
        subject_person_id: p_sSTVjirDFXuhUA9aJL9WB8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳岫先
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xxmLm-cFJ4AEV96DiPd0hz
          claim_id: c_aNm4XzglLIuospqVqQ3lLy
          source_id: s_11H63cQapdwrAa55s1IpZd
          stance: supports
          locator: CBDB:145906
          quotation: null
          interpretation_note: CBDB 明确记录的王希遷配偶
          source: &a1
            id: s_11H63cQapdwrAa55s1IpZd
            source_type: api_record
            title: 中国历代人物传记资料库：陳岫先（CBDB 145906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145906&o=json
            external_identifier: CBDB:145906
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
        id: c_-Z0EwIO2N9T-3ffYb9RXRX
        subject_person_id: p_GYZYeCEFAABsTQwFy7Lrmg
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_sSTVjirDFXuhUA9aJL9WB8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L04SwV1FPN41neQOnpLw0M
          claim_id: c_-Z0EwIO2N9T-3ffYb9RXRX
          source_id: s_11H63cQapdwrAa55s1IpZd
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GYZYeCEFAABsTQwFy7Lrmg
        status: active
        display_name: 王希遷
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳岫先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 陳岫先 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_GYZYeCEFAABsTQwFy7Lrmg | 王希遷 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳岫先（CBDB 145906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145906&o=json)
