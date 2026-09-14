---
schema: wang-person/v1
id: p_6TQ9ocgexsYtdQQZaj77C1
status: active
merged_into: null
display_name: 王鐵
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GCkMDQEGKWTFH7qkepDpxG
        subject_person_id: p_6TQ9ocgexsYtdQQZaj77C1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cUj9u4HRTqCysY8twVL65z
          claim_id: c_GCkMDQEGKWTFH7qkepDpxG
          source_id: s_ihN12o4xBzD1QDvPQYDD5v
          stance: supports
          locator: CBDB:267898
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267898）
          source: &a1
            id: s_ihN12o4xBzD1QDvPQYDD5v
            source_type: api_record
            title: 中国历代人物传记资料库：王鐵（CBDB 267898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267898&o=json
            external_identifier: CBDB:267898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.792Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_78sQU4cCaE42xLiexghPa7
        subject_person_id: p_6TQ9ocgexsYtdQQZaj77C1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐵，明人物。弘治九年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 267898）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yYBT2d9Tjmz8cDU-Cfeina
          claim_id: c_78sQU4cCaE42xLiexghPa7
          source_id: s_ihN12o4xBzD1QDvPQYDD5v
          stance: supports
          locator: CBDB:267898
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NR8Eem1-XMqNmbYB_kuWP4
        subject_person_id: p_Q9zuFMKzedcz4UHwq7tKH2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6TQ9ocgexsYtdQQZaj77C1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mMaXRurv8Wm45W8aF1uEjZ
          claim_id: c_NR8Eem1-XMqNmbYB_kuWP4
          source_id: s_9DnY6olHoUxOwMtQEoWFUH
          stance: supports
          locator: CBDB：兄弟 王鍭（201147）之父／母 王啟宏
          quotation: null
          interpretation_note: 由兄弟关系推断：王鐵 与 王鍭 为同胞（CBDB 记「兄」），王鍭 之父／母即 王鐵 之父／母。
          source:
            id: s_9DnY6olHoUxOwMtQEoWFUH
            source_type: api_record
            title: 中国历代人物传记资料库：王鐵（CBDB 267898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267898&o=json
            external_identifier: CBDB:267898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q9zuFMKzedcz4UHwq7tKH2
        status: active
        display_name: 王啟宏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0gILqhNmtaKIQaYZg1xJOb
        subject_person_id: p_6TQ9ocgexsYtdQQZaj77C1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oJbh5LgRt8jeK3L7dfcGm6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__esx9gXVNNJViE3bWpY7_8
          claim_id: c_0gILqhNmtaKIQaYZg1xJOb
          source_id: s_9DnY6olHoUxOwMtQEoWFUH
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201147 王鍭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9DnY6olHoUxOwMtQEoWFUH
            source_type: api_record
            title: 中国历代人物传记资料库：王鐵（CBDB 267898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267898&o=json
            external_identifier: CBDB:267898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oJbh5LgRt8jeK3L7dfcGm6
        status: active
        display_name: 王鍭
        merged_into_person_id: null
---

# 王鐵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐵 | accepted |
| bio.summary | 王鐵，明人物。弘治九年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 267898） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Q9zuFMKzedcz4UHwq7tKH2 | 王啟宏 | accepted |
| other | p_oJbh5LgRt8jeK3L7dfcGm6 | 王鍭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鐵（CBDB 267898）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267898&o=json)
