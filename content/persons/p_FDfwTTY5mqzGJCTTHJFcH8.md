---
schema: wang-person/v1
id: p_FDfwTTY5mqzGJCTTHJFcH8
status: active
merged_into: null
display_name: 王一夔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EuvKGKUEw84iwtM53M7L6p
        subject_person_id: p_FDfwTTY5mqzGJCTTHJFcH8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一夔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NVFjFD6Y4nwF5EBqmJ8BdC
          claim_id: c_EuvKGKUEw84iwtM53M7L6p
          source_id: s_FWZMwmJbk9GLCAj3uDeMnR
          stance: supports
          locator: CBDB:203700
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203700）
          source: &a1
            id: s_FWZMwmJbk9GLCAj3uDeMnR
            source_type: api_record
            title: 中国历代人物传记资料库：王一夔（CBDB 203700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203700&o=json
            external_identifier: CBDB:203700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.797Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LAVLxwch2HFaymLcr4kuNL
        subject_person_id: p_FDfwTTY5mqzGJCTTHJFcH8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1517年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AAYaWsCU4gKH1sXLaqZX1t
          claim_id: c_LAVLxwch2HFaymLcr4kuNL
          source_id: s_FWZMwmJbk9GLCAj3uDeMnR
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
        id: c_GAFSKoLKbW55DNEnKL6r2P
        subject_person_id: p_FDfwTTY5mqzGJCTTHJFcH8
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
        - id: cs_DcVNPc4wRb4VQDWXqaSXjP
          claim_id: c_GAFSKoLKbW55DNEnKL6r2P
          source_id: s_FWZMwmJbk9GLCAj3uDeMnR
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
        id: c_6sP7WwL8Rc918im4MmuJxL
        subject_person_id: p_4P232SRs9q3PwKhwXTXK8X
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FDfwTTY5mqzGJCTTHJFcH8
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C0XdsZ4f9qc3hhMqzsFy9k
          claim_id: c_6sP7WwL8Rc918im4MmuJxL
          source_id: s_ocPZqKbfRNLEB3waqRGVLL
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第二十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ocPZqKbfRNLEB3waqRGVLL
            source_type: api_record
            title: 中国历代人物传记资料库：王理（CBDB 308776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308776&o=json
            external_identifier: CBDB:308776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4P232SRs9q3PwKhwXTXK8X
        status: active
        display_name: 王理
        merged_into_person_id: null
    - claim:
        id: c_TtCQid02pOyLN5eC6rFKEI
        subject_person_id: p_4xVHszHged8ZkuPtDKcT7D
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FDfwTTY5mqzGJCTTHJFcH8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n2ZIuJ-s2KVNRSVuutk9Gg
          claim_id: c_TtCQid02pOyLN5eC6rFKEI
          source_id: s_SB86Da77TfNw1HCW44jRqp
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第二十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SB86Da77TfNw1HCW44jRqp
            source_type: api_record
            title: 中国历代人物传记资料库：王鏜（CBDB 308777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308777&o=json
            external_identifier: CBDB:308777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.799Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4xVHszHged8ZkuPtDKcT7D
        status: active
        display_name: 王鏜
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王一夔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一夔 | accepted |
| birth.date | 1517年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_4P232SRs9q3PwKhwXTXK8X | 王理 | accepted |
| ancestors | p_4xVHszHged8ZkuPtDKcT7D | 王鏜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王理（CBDB 308776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308776&o=json)
- [中国历代人物传记资料库：王鏜（CBDB 308777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308777&o=json)
- [中国历代人物传记资料库：王一夔（CBDB 203700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203700&o=json)
