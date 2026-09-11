---
schema: wang-person/v1
id: p_zctMD6CmbrwS6AmqDxisrw
status: active
merged_into: null
display_name: 王倫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KjAdoQ1eH42CmqpdEdRb6y
        subject_person_id: p_zctMD6CmbrwS6AmqDxisrw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zYW6w5L5E3ytxhcQmqruse
          claim_id: c_KjAdoQ1eH42CmqpdEdRb6y
          source_id: s_HNhHqog1DJNtvDkmL2kARD
          stance: supports
          locator: CBDB:313767
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313767）
          source: &a1
            id: s_HNhHqog1DJNtvDkmL2kARD
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 313767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313767&o=json
            external_identifier: CBDB:313767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nwxvhUd6yRN2g946n9GBhj
        subject_person_id: p_zctMD6CmbrwS6AmqDxisrw
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
        - id: cs_f73jWa9UWpzSx687bAiKL3
          claim_id: c_nwxvhUd6yRN2g946n9GBhj
          source_id: s_HNhHqog1DJNtvDkmL2kARD
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
  descendants:
    - claim:
        id: c_vjss0vvcvEgKdEsRAcE0ea
        subject_person_id: p_zctMD6CmbrwS6AmqDxisrw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LuGtcLnNAnJs1yiVnMjgcK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QAXC91JTMKMJAE1OhDDa67
          claim_id: c_vjss0vvcvEgKdEsRAcE0ea
          source_id: s_HNhHqog1DJNtvDkmL2kARD
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百零九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LuGtcLnNAnJs1yiVnMjgcK
        status: active
        display_name: 王汝安
        merged_into_person_id: null
  other: []
---

# 王倫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_LuGtcLnNAnJs1yiVnMjgcK | 王汝安 | accepted |

## 外部来源

- [中国历代人物传记资料库：王倫（CBDB 313767）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313767&o=json)
