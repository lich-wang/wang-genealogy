---
schema: wang-person/v1
id: p_9kp1R9kMofV4byDaScDC99
status: active
merged_into: null
display_name: 王希文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pQWfTBzWvXdauHGnL67rnj
        subject_person_id: p_9kp1R9kMofV4byDaScDC99
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RLqvdYcVfsEmh4pNefNQfy
          claim_id: c_pQWfTBzWvXdauHGnL67rnj
          source_id: s_pthh45n9s6r2LCMHtgr5L5
          stance: supports
          locator: CBDB:253539
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253539）
          source: &a1
            id: s_pthh45n9s6r2LCMHtgr5L5
            source_type: api_record
            title: 中国历代人物传记资料库：王希文（CBDB 253539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253539&o=json
            external_identifier: CBDB:253539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.310Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kNAQ5wn3gLoLePDHMxfYab
        subject_person_id: p_9kp1R9kMofV4byDaScDC99
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
        - id: cs_ykF3X4CwWF93pMh1WSDpiz
          claim_id: c_kNAQ5wn3gLoLePDHMxfYab
          source_id: s_pthh45n9s6r2LCMHtgr5L5
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
        id: c_u40i-IiBM6CXM3Oaho2YyL
        subject_person_id: p_9kp1R9kMofV4byDaScDC99
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x7nHkQedNcVpQxMo4X6md9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BtYIdey3CUa6GyQ5eTCIqo
          claim_id: c_u40i-IiBM6CXM3Oaho2YyL
          source_id: s_pthh45n9s6r2LCMHtgr5L5
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百九十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x7nHkQedNcVpQxMo4X6md9
        status: active
        display_name: 王謙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王希文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希文 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_x7nHkQedNcVpQxMo4X6md9 | 王謙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希文（CBDB 253539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253539&o=json)
