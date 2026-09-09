---
schema: wang-person/v1
id: p_XRXd9hMSdFK15YGvfDApdF
status: active
merged_into: null
display_name: 王乾剛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ERPtjtYzG5MKaKpBar7wRC
        subject_person_id: p_XRXd9hMSdFK15YGvfDApdF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乾剛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_31yyyqCa1fcP4YCizQk7f4
          claim_id: c_ERPtjtYzG5MKaKpBar7wRC
          source_id: s_ZxB9oWtDHDR86G9hF63RvL
          stance: supports
          locator: CBDB:635837
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635837）
          source: &a1
            id: s_ZxB9oWtDHDR86G9hF63RvL
            source_type: api_record
            title: 中国历代人物传记资料库：王乾剛（CBDB 635837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635837&o=json
            external_identifier: CBDB:635837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.806Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iCKM3RqWUs6u92VM7pHM4W
        subject_person_id: p_XRXd9hMSdFK15YGvfDApdF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TbxHEnxkdC6TQQj7KFp23z
          claim_id: c_iCKM3RqWUs6u92VM7pHM4W
          source_id: s_ZxB9oWtDHDR86G9hF63RvL
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
  ancestors: []
  descendants: []
  other: []
---

# 王乾剛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王乾剛 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王乾剛（CBDB 635837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635837&o=json)
