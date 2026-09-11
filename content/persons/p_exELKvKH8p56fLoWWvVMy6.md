---
schema: wang-person/v1
id: p_exELKvKH8p56fLoWWvVMy6
status: active
merged_into: null
display_name: 袁氏
revision: 2
cbdb_id: 37840
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QlctFjWOjDwETTJ3N2vMP6
        subject_person_id: p_exELKvKH8p56fLoWWvVMy6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 袁氏，史料所见人物。本项目依据《中国历代人物传记资料库：袁氏(王九成妻)（CBDB 37840）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lRysLfdkfjvHAFgQ0uhX1S
          claim_id: c_QlctFjWOjDwETTJ3N2vMP6
          source_id: s_mgAp6PAuzh6BunRxkWXnIH
          stance: supports
          locator: CBDB:37840
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_mgAp6PAuzh6BunRxkWXnIH
            source_type: api_record
            title: 中国历代人物传记资料库：袁氏(王九成妻)（CBDB 37840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37840&o=json
            external_identifier: CBDB:37840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_o-0XcNgpK6mkKX0Aemeqs3
        subject_person_id: p_exELKvKH8p56fLoWWvVMy6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 袁氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wlbwXEfm4HsL0LUqGWRIEr
          claim_id: c_o-0XcNgpK6mkKX0Aemeqs3
          source_id: s_mgAp6PAuzh6BunRxkWXnIH
          stance: supports
          locator: CBDB:37840
          quotation: null
          interpretation_note: CBDB 明确记录的王九成配偶
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
        id: c_v2orzmj4ggPxCMXNYtqwhU
        subject_person_id: p_BKANLuwSJNAYYzpRy3WTWd
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_exELKvKH8p56fLoWWvVMy6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jhmS0Zg7xhGAWPPCguW_9m
          claim_id: c_v2orzmj4ggPxCMXNYtqwhU
          source_id: s_mgAp6PAuzh6BunRxkWXnIH
          stance: supports
          locator: 宋人傳記資料索引(電子版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BKANLuwSJNAYYzpRy3WTWd
        status: active
        display_name: 王九成
        merged_into_person_id: null
    - claim:
        id: c_6PUpfKvM0C2EvtMpSBf5bj
        subject_person_id: p_JR5BeKFHjyY5p6yqfVc1XZ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_exELKvKH8p56fLoWWvVMy6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c0XOzEEODR-ZMJJxWy13no
          claim_id: c_6PUpfKvM0C2EvtMpSBf5bj
          source_id: s_b5B9XYMhfGcR7dPxXHSZk1
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1187;1188：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_b5B9XYMhfGcR7dPxXHSZk1
            source_type: api_record
            title: 中国历代人物传记资料库：王衜（CBDB 19419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19419&o=json
            external_identifier: CBDB:19419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_JR5BeKFHjyY5p6yqfVc1XZ
        status: active
        display_name: 王衜
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 袁氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 袁氏，史料所见人物。本项目依据《中国历代人物传记资料库：袁氏(王九成妻)（CBDB 37840）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 袁氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_BKANLuwSJNAYYzpRy3WTWd | 王九成 | accepted |
| spouses | p_JR5BeKFHjyY5p6yqfVc1XZ | 王衜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王衜（CBDB 19419）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19419&o=json)
- [中国历代人物传记资料库：袁氏(王九成妻)（CBDB 37840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37840&o=json)
