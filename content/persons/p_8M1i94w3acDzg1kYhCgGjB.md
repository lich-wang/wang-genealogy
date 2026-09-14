---
schema: wang-person/v1
id: p_8M1i94w3acDzg1kYhCgGjB
status: active
merged_into: null
display_name: 王克基
cbdb_id: 17759
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u18MqUC6B2q52mLZ3VPeHc
        subject_person_id: p_8M1i94w3acDzg1kYhCgGjB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克基，宋人物。籍贯洛陽，曾任東上閤門使、西上閤門副使。（中国历代人物传记资料库 CBDB 17759）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_pjEfRxJH5FmzqcpUelB33L
          claim_id: c_u18MqUC6B2q52mLZ3VPeHc
          source_id: s_rDy6jCGF72F7gU5XLdFhKJ
          stance: supports
          locator: CBDB:17759
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_rDy6jCGF72F7gU5XLdFhKJ
            source_type: api_record
            title: 中国历代人物传记资料库：王克基（CBDB 17759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17759&o=json
            external_identifier: CBDB:17759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wPSf4GNBy3FYzp4KMxj7RH
        subject_person_id: p_8M1i94w3acDzg1kYhCgGjB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_eUhh3oDXqYoDyrAgcbhiwq
          claim_id: c_wPSf4GNBy3FYzp4KMxj7RH
          source_id: s_rDy6jCGF72F7gU5XLdFhKJ
          stance: supports
          locator: CBDB:17759
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_R5Vu33jopSZR9HYdO2Q9fr
        subject_person_id: p_8M1i94w3acDzg1kYhCgGjB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gEwBCxKYGoUawLa1CSN7oS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A3CtbUVCjJkvbKTQKxWdRz
          claim_id: c_R5Vu33jopSZR9HYdO2Q9fr
          source_id: s_BCMCSPT2ss9pcNU1t4pKFM
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1619;1620：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BCMCSPT2ss9pcNU1t4pKFM
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王克基妻)（CBDB 38770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38770&o=json
            external_identifier: CBDB:38770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gEwBCxKYGoUawLa1CSN7oS
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PdfiUdKvnWo1BM2nWtoQil
        subject_person_id: p_8M1i94w3acDzg1kYhCgGjB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xYin523MUijjPHQi64Mp4N
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TXTcoU5lILvDOVRK9IDmWq
          claim_id: c_PdfiUdKvnWo1BM2nWtoQil
          source_id: s_BeLePDwb6JfXjxxgyhjGOo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 17759 王克基）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BeLePDwb6JfXjxxgyhjGOo
            source_type: api_record
            title: 中国历代人物传记资料库：王克緒（CBDB 17760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17760&o=json
            external_identifier: CBDB:17760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xYin523MUijjPHQi64Mp4N
        status: active
        display_name: 王克緒
        merged_into_person_id: null
---

# 王克基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王克基，宋人物。籍贯洛陽，曾任東上閤門使、西上閤門副使。（中国历代人物传记资料库 CBDB 17759） | accepted |
| name.primary | 王克基 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_gEwBCxKYGoUawLa1CSN7oS | 張氏 | accepted |
| other | p_xYin523MUijjPHQi64Mp4N | 王克緒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王克基（CBDB 17759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17759&o=json)
- [中国历代人物传记资料库：王克緒（CBDB 17760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17760&o=json)
- [中国历代人物传记资料库：張氏(王克基妻)（CBDB 38770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38770&o=json)
