---
schema: wang-person/v1
id: p_p6RTY29514vD6isBsxvXYV
status: active
merged_into: null
display_name: 王鄴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K76G43WkKptw599xNXfAKP
        subject_person_id: p_p6RTY29514vD6isBsxvXYV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鄴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3buiqKcZ7E5zA8cd62zg1J
          claim_id: c_K76G43WkKptw599xNXfAKP
          source_id: s_n6FSqGToKu72xXFwsrjMiz
          stance: supports
          locator: CBDB:169146
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169146）
          source: &a1
            id: s_n6FSqGToKu72xXFwsrjMiz
            source_type: api_record
            title: 中国历代人物传记资料库：王鄴（CBDB 169146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169146&o=json
            external_identifier: CBDB:169146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.229Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_3MMHHNs4XeCaxPUTziBcAR
        subject_person_id: p_p6RTY29514vD6isBsxvXYV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 927年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k7AkF1sr1iMrVteP1bVA4C
          claim_id: c_3MMHHNs4XeCaxPUTziBcAR
          source_id: s_n6FSqGToKu72xXFwsrjMiz
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
        id: c_zGu5Ms1SXPNUmEQDQB9Lrd
        subject_person_id: p_p6RTY29514vD6isBsxvXYV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sKE1q1FSDEwS8p7TWUPxLM
          claim_id: c_zGu5Ms1SXPNUmEQDQB9Lrd
          source_id: s_n6FSqGToKu72xXFwsrjMiz
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

# 王鄴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鄴 | accepted |
| death.date | 927年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鄴（CBDB 169146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169146&o=json)
