---
schema: wang-person/v1
id: p_CnjM6tcfgVMu6RfoJz4FnX
status: active
merged_into: null
display_name: 王繼善
cbdb_id: 280178
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SFEue9bNpKA6zGm6raT5YN
        subject_person_id: p_CnjM6tcfgVMu6RfoJz4FnX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼善，明人物。正德十二年進士，籍贯襄陽衛，曾任指揮使。（中国历代人物传记资料库 CBDB 280178）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs__NeY-RYHuoY5htbwURfgYD
          claim_id: c_SFEue9bNpKA6zGm6raT5YN
          source_id: s_yuuxNSFWpoPXjZNHV4aaYp
          stance: supports
          locator: CBDB:280178
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_yuuxNSFWpoPXjZNHV4aaYp
            source_type: api_record
            title: 中国历代人物传记资料库：王繼善（CBDB 280178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280178&o=json
            external_identifier: CBDB:280178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tmhpnuS4uLobYf9mMa7rkN
        subject_person_id: p_CnjM6tcfgVMu6RfoJz4FnX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LoBk7TxG4sLvcxYNoK71a2
          claim_id: c_tmhpnuS4uLobYf9mMa7rkN
          source_id: s_yuuxNSFWpoPXjZNHV4aaYp
          stance: supports
          locator: CBDB:280178
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jm-D8znAW6CZr_xATHyvfX
        subject_person_id: p_1N7Z4wmfmL9xzTY7zGpnMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CnjM6tcfgVMu6RfoJz4FnX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P4KlbbLpWUJeytWZ5FzKdo
          claim_id: c_jm-D8znAW6CZr_xATHyvfX
          source_id: s_jpwse8YCl64zrDQ2Xc0x4D
          stance: supports
          locator: CBDB：兄弟 王至善（201900）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王繼善 与 王至善 为同胞（CBDB 记「弟」），王至善 之父／母即 王繼善 之父／母。
          source:
            id: s_jpwse8YCl64zrDQ2Xc0x4D
            source_type: api_record
            title: 中国历代人物传记资料库：王繼善（CBDB 280178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280178&o=json
            external_identifier: CBDB:280178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1N7Z4wmfmL9xzTY7zGpnMb
        status: active
        display_name: 王信
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_nqTdNmW7GFuuLaPlF4h_RM
        subject_person_id: p_691jukaqPqsQGsFHBsNzWD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CnjM6tcfgVMu6RfoJz4FnX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ATIEBza7me3g5fb-5VpLiL
          claim_id: c_nqTdNmW7GFuuLaPlF4h_RM
          source_id: s_jpwse8YCl64zrDQ2Xc0x4D
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201900 王至善）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jpwse8YCl64zrDQ2Xc0x4D
            source_type: api_record
            title: 中国历代人物传记资料库：王繼善（CBDB 280178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280178&o=json
            external_identifier: CBDB:280178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_691jukaqPqsQGsFHBsNzWD
        status: active
        display_name: 王至善
        merged_into_person_id: null
---

# 王繼善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王繼善，明人物。正德十二年進士，籍贯襄陽衛，曾任指揮使。（中国历代人物传记资料库 CBDB 280178） | accepted |
| name.primary | 王繼善 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1N7Z4wmfmL9xzTY7zGpnMb | 王信 | accepted |
| other | p_691jukaqPqsQGsFHBsNzWD | 王至善 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼善（CBDB 280178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280178&o=json)
