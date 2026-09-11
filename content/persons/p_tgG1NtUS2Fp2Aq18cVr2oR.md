---
schema: wang-person/v1
id: p_tgG1NtUS2Fp2Aq18cVr2oR
status: active
merged_into: null
display_name: 王寅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QCgpoa1MnzD4JTVQe5Nbmn
        subject_person_id: p_tgG1NtUS2Fp2Aq18cVr2oR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9uQfLAPCVXJEEBHDLG2Xv3
          claim_id: c_QCgpoa1MnzD4JTVQe5Nbmn
          source_id: s_BPAofXKJjj5q3b958jF3Ji
          stance: supports
          locator: CBDB:123757
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（123757）
          source: &a1
            id: s_BPAofXKJjj5q3b958jF3Ji
            source_type: api_record
            title: 中国历代人物传记资料库：王寅（CBDB 123757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123757&o=json
            external_identifier: CBDB:123757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.939Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J3UEXRtBuCiQUi4EvuDrNU
        subject_person_id: p_tgG1NtUS2Fp2Aq18cVr2oR
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
        - id: cs_HXJYZD89E2Q6aTkKLexp2b
          claim_id: c_J3UEXRtBuCiQUi4EvuDrNU
          source_id: s_BPAofXKJjj5q3b958jF3Ji
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pOqiDtWMUfCXfEZEwByNKg
        subject_person_id: p_411WC3hHGXMMgnhafe1NQu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tgG1NtUS2Fp2Aq18cVr2oR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3xWDZdczWbGzkrYaz8pzY5
          claim_id: c_pOqiDtWMUfCXfEZEwByNKg
          source_id: s_GoVCV5M5JrDWQ64cdGY3hw
          stance: supports
          locator: 紹興府志:八十卷，Igid=316430：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GoVCV5M5JrDWQ64cdGY3hw
            source_type: api_record
            title: 中国历代人物传记资料库：王大經（CBDB 561489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561489&o=json
            external_identifier: CBDB:561489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.745Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_411WC3hHGXMMgnhafe1NQu
        status: active
        display_name: 王大經
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寅 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_411WC3hHGXMMgnhafe1NQu | 王大經 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大經（CBDB 561489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561489&o=json)
- [中国历代人物传记资料库：王寅（CBDB 123757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123757&o=json)
