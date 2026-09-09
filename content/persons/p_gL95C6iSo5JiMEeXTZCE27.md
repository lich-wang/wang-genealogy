---
schema: wang-person/v1
id: p_gL95C6iSo5JiMEeXTZCE27
status: active
merged_into: null
display_name: 王一奇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n6H9M9jQWRJ91uucyuX21B
        subject_person_id: p_gL95C6iSo5JiMEeXTZCE27
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一奇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8ANM3wLmzJise7wG3YE4DQ
          claim_id: c_n6H9M9jQWRJ91uucyuX21B
          source_id: s_Kc5F6E5doGQgJiHHc746xj
          stance: supports
          locator: CBDB:230478
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230478）
          source: &a1
            id: s_Kc5F6E5doGQgJiHHc746xj
            source_type: api_record
            title: 中国历代人物传记资料库：王一奇（CBDB 230478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230478&o=json
            external_identifier: CBDB:230478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.619Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2XbPWfMKvCzsEGApGj552R
        subject_person_id: p_gL95C6iSo5JiMEeXTZCE27
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
        - id: cs_XRW28poUgvnDZ5cwLUXtip
          claim_id: c_2XbPWfMKvCzsEGApGj552R
          source_id: s_Kc5F6E5doGQgJiHHc746xj
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

# 王一奇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一奇 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一奇（CBDB 230478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230478&o=json)
