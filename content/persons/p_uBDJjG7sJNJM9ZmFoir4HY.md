---
schema: wang-person/v1
id: p_uBDJjG7sJNJM9ZmFoir4HY
status: active
merged_into: null
display_name: 王貫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w2Mo9faLE95Uvh6PaPXjrG
        subject_person_id: p_uBDJjG7sJNJM9ZmFoir4HY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xSvNCY1qxatty5Z8bD9tgH
          claim_id: c_w2Mo9faLE95Uvh6PaPXjrG
          source_id: s_e5TB1Q9HXx9r7KkuqYVPmC
          stance: supports
          locator: CBDB:200606
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200606）
          source: &a1
            id: s_e5TB1Q9HXx9r7KkuqYVPmC
            source_type: api_record
            title: 中国历代人物传记资料库：王貫（CBDB 200606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200606&o=json
            external_identifier: CBDB:200606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.622Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_B1FzhVQBXPBbyo748T7mwD
        subject_person_id: p_uBDJjG7sJNJM9ZmFoir4HY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1455年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5GCL3ziYJM3NubAf7dQUna
          claim_id: c_B1FzhVQBXPBbyo748T7mwD
          source_id: s_e5TB1Q9HXx9r7KkuqYVPmC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vhcLZ9FpMGqv7NeieNXdcm
        subject_person_id: p_uBDJjG7sJNJM9ZmFoir4HY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BZgWME91oxn1uii4TrmTH2
          claim_id: c_vhcLZ9FpMGqv7NeieNXdcm
          source_id: s_e5TB1Q9HXx9r7KkuqYVPmC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_6jTyp-ZlSthh2LZSP56Jiu
        subject_person_id: p_CeCa7jWt9YpcLn1ipWZEJ7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uBDJjG7sJNJM9ZmFoir4HY
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WUVXlgydu5wAuoHMhYd81u
          claim_id: c_6jTyp-ZlSthh2LZSP56Jiu
          source_id: s_b6MVwdMcYPr7kNf1EfXWnc
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百八十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_b6MVwdMcYPr7kNf1EfXWnc
            source_type: api_record
            title: 中国历代人物传记资料库：王用（CBDB 260340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260340&o=json
            external_identifier: CBDB:260340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.496Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CeCa7jWt9YpcLn1ipWZEJ7
        status: active
        display_name: 王用
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王貫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貫 | accepted |
| birth.date | 1455年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_CeCa7jWt9YpcLn1ipWZEJ7 | 王用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貫（CBDB 200606）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200606&o=json)
- [中国历代人物传记资料库：王用（CBDB 260340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260340&o=json)
