---
schema: wang-person/v1
id: p_7PCyUHEB7pUTPT7oxrjg3q
status: active
merged_into: null
display_name: 王瑄
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m1fMdSGKB1iALT63b4i5gu
        subject_person_id: p_7PCyUHEB7pUTPT7oxrjg3q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XH9fDij7Et5AJxS4FKuTvG
          claim_id: c_m1fMdSGKB1iALT63b4i5gu
          source_id: s_kh7Rwn6J5EGRaN9pmgY6hD
          stance: supports
          locator: CBDB:325688
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（325688）
          source: &a1
            id: s_kh7Rwn6J5EGRaN9pmgY6hD
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 325688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325688&o=json
            external_identifier: CBDB:325688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.201Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WbiWtyT12JNZ7dYv66Z6Mj
        subject_person_id: p_7PCyUHEB7pUTPT7oxrjg3q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄，明人物。嘉靖三十八年進士，曾任百戶。（中国历代人物传记资料库 CBDB 325688）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wYEfB7XNJcRB9wFJNUV2IB
          claim_id: c_WbiWtyT12JNZ7dYv66Z6Mj
          source_id: s_kh7Rwn6J5EGRaN9pmgY6hD
          stance: supports
          locator: CBDB:325688
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_7QpTO054UdoHMa_zJiDWHx
        subject_person_id: p_7PCyUHEB7pUTPT7oxrjg3q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zZwvDUs3YgX6S9BozMt7RC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_keIhghaM2s87FWHaHHSyXH
          claim_id: c_7QpTO054UdoHMa_zJiDWHx
          source_id: s_kh7Rwn6J5EGRaN9pmgY6hD
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第一百七十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zZwvDUs3YgX6S9BozMt7RC
        status: active
        display_name: 王楫
        merged_into_person_id: null
  other: []
---

# 王瑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑄 | accepted |
| bio.summary | 王瑄，明人物。嘉靖三十八年進士，曾任百戶。（中国历代人物传记资料库 CBDB 325688） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_zZwvDUs3YgX6S9BozMt7RC | 王楫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑄（CBDB 325688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325688&o=json)
