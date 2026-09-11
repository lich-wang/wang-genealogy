---
schema: wang-person/v1
id: p_JFSyR8NJmhCLHZk6LZi9Pp
status: active
merged_into: null
display_name: 王叔祥
cbdb_id: 126284
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6XjdAgc14TXJXDV1i2pGi1
        subject_person_id: p_JFSyR8NJmhCLHZk6LZi9Pp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔祥，宋人物。中国历代人物传记资料库（CBDB）以人物编号 126284 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Dz3T5axhtwjo5h5UdozZVp
          claim_id: c_6XjdAgc14TXJXDV1i2pGi1
          source_id: s_r1RYuAG7MZoCvHyV42t93D
          stance: supports
          locator: CBDB:126284
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_r1RYuAG7MZoCvHyV42t93D
            source_type: api_record
            title: 中国历代人物传记资料库：王叔祥（CBDB 126284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126284&o=json
            external_identifier: CBDB:126284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_p3EAztKAxXQND5szWHNxvt
        subject_person_id: p_JFSyR8NJmhCLHZk6LZi9Pp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WMuNyQpeu2KRK1U1gHQY7r
          claim_id: c_p3EAztKAxXQND5szWHNxvt
          source_id: s_r1RYuAG7MZoCvHyV42t93D
          stance: supports
          locator: CBDB:126284
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_r1RYuAG7MZoCvHyV42t93D
            source_type: api_record
            title: 中国历代人物传记资料库：王叔祥（CBDB 126284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126284&o=json
            external_identifier: CBDB:126284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_TU1HiSB-W0H_P6E1qghPuw
        subject_person_id: p_JFSyR8NJmhCLHZk6LZi9Pp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_o5iCKboKod63KLGnA3UGdF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q-7CdCOzyo4EOgMvR6lGtL
          claim_id: c_TU1HiSB-W0H_P6E1qghPuw
          source_id: s_FMHjch1AxZimYXE1NLHFCo
          stance: supports
          locator: 宋濂全集，423-245：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FMHjch1AxZimYXE1NLHFCo
            source_type: api_record
            title: 中国历代人物传记资料库：王璵（CBDB 100989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100989&o=json
            external_identifier: CBDB:100989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.620Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_o5iCKboKod63KLGnA3UGdF
        status: active
        display_name: 王璵
        merged_into_person_id: null
  other: []
---

# 王叔祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王叔祥，宋人物。中国历代人物传记资料库（CBDB）以人物编号 126284 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王叔祥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_o5iCKboKod63KLGnA3UGdF | 王璵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王叔祥（CBDB 126284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126284&o=json)
- [中国历代人物传记资料库：王璵（CBDB 100989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100989&o=json)
