---
schema: wang-person/v1
id: p_v3b97W1yi7J7kSEqJr8m4E
status: active
merged_into: null
display_name: 王玹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z654PbvknDj2gec923APAB
        subject_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E7Lsb7TPmcKZ1B3CX34JTc
          claim_id: c_Z654PbvknDj2gec923APAB
          source_id: s_AL1nEWC9FLDBJct1qpiZDf
          stance: supports
          locator: CBDB:200596
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200596）
          source: &a1
            id: s_AL1nEWC9FLDBJct1qpiZDf
            source_type: api_record
            title: 中国历代人物传记资料库：王玹（CBDB 200596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200596&o=json
            external_identifier: CBDB:200596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.621Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MgMP44KBvbWGztZLxRnQGs
        subject_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1462年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rdgPm3vZ4KJhYAxgqo4d1V
          claim_id: c_MgMP44KBvbWGztZLxRnQGs
          source_id: s_AL1nEWC9FLDBJct1qpiZDf
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
        id: c_144kG2C8VY6KG7f1deHTDU
        subject_person_id: p_v3b97W1yi7J7kSEqJr8m4E
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
        - id: cs_vHpNXE1g14JPFxEXcHCw4t
          claim_id: c_144kG2C8VY6KG7f1deHTDU
          source_id: s_AL1nEWC9FLDBJct1qpiZDf
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
        id: c__h5DXIb7AZQnZ5ud3-t1Tk
        subject_person_id: p_BbCkLEm6dMxpYfs2i2AZTe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xyMc5Ls9CqjjXZ2qY3-MlR
          claim_id: c__h5DXIb7AZQnZ5ud3-t1Tk
          source_id: s_hnnNXWtr3fLs6Lwb2TY7ea
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百六十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hnnNXWtr3fLs6Lwb2TY7ea
            source_type: api_record
            title: 中国历代人物传记资料库：王樸（CBDB 260232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260232&o=json
            external_identifier: CBDB:260232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BbCkLEm6dMxpYfs2i2AZTe
        status: active
        display_name: 王樸
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王玹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玹 | accepted |
| birth.date | 1462年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_BbCkLEm6dMxpYfs2i2AZTe | 王樸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王樸（CBDB 260232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260232&o=json)
- [中国历代人物传记资料库：王玹（CBDB 200596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200596&o=json)
