---
schema: wang-person/v1
id: p_vs2bQpvZMdxn2V6wjvzkce
status: active
merged_into: null
display_name: 王瓚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QVVTZor831E6eDX78h2AbH
        subject_person_id: p_vs2bQpvZMdxn2V6wjvzkce
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_72tpFmN1dg7b5AhdGh9Ygq
          claim_id: c_QVVTZor831E6eDX78h2AbH
          source_id: s_5vSt3L4RhdM5MFnNS7Skf4
          stance: supports
          locator: CBDB:126891
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126891）
          source: &a1
            id: s_5vSt3L4RhdM5MFnNS7Skf4
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 126891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126891&o=json
            external_identifier: CBDB:126891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EkfwyM2QRzRiJkq242J5i4
        subject_person_id: p_vs2bQpvZMdxn2V6wjvzkce
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1448年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3BLCX1cR3XusXnZ4tji5Jb
          claim_id: c_EkfwyM2QRzRiJkq242J5i4
          source_id: s_5vSt3L4RhdM5MFnNS7Skf4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_qsnPk5EgfQr5D85PASceG5
        subject_person_id: p_vs2bQpvZMdxn2V6wjvzkce
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1504年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LRGRLFknG9UG1AioREaQmu
          claim_id: c_qsnPk5EgfQr5D85PASceG5
          source_id: s_5vSt3L4RhdM5MFnNS7Skf4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rz7nK284EF47ZGbf7JLyhv
        subject_person_id: p_vs2bQpvZMdxn2V6wjvzkce
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
        - id: cs_rsooayi91WYYCGVCunaeX1
          claim_id: c_rz7nK284EF47ZGbf7JLyhv
          source_id: s_5vSt3L4RhdM5MFnNS7Skf4
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
        id: c_29iGuSIWRcYJ3ySk5mD1YA
        subject_person_id: p_5fCfWXCbpeJ4sB1ZKzLvHs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vs2bQpvZMdxn2V6wjvzkce
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_25RRRlcB8TD36GseN7z943
          claim_id: c_29iGuSIWRcYJ3ySk5mD1YA
          source_id: s_JjzDHsQ5rtrjSNA4tXJ5i6
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第五十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JjzDHsQ5rtrjSNA4tXJ5i6
            source_type: api_record
            title: 中国历代人物传记资料库：王孝義（CBDB 255256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255256&o=json
            external_identifier: CBDB:255256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.336Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5fCfWXCbpeJ4sB1ZKzLvHs
        status: active
        display_name: 王孝義
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王瓚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓚 | accepted |
| birth.date | 1448年 | accepted |
| death.date | 1504年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_5fCfWXCbpeJ4sB1ZKzLvHs | 王孝義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孝義（CBDB 255256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255256&o=json)
- [中国历代人物传记资料库：王瓚（CBDB 126891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126891&o=json)
