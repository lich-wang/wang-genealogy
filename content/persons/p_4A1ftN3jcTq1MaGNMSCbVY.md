---
schema: wang-person/v1
id: p_4A1ftN3jcTq1MaGNMSCbVY
status: active
merged_into: null
display_name: 王善興
cbdb_id: 237438
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6WBJAG1Ezm7ECHdh7EHJJp
        subject_person_id: p_4A1ftN3jcTq1MaGNMSCbVY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王善興，明人物。中国历代人物传记资料库（CBDB）以人物编号 237438 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_ecjoVCHpEiwlgU-kbGnjOh
          claim_id: c_6WBJAG1Ezm7ECHdh7EHJJp
          source_id: s_V2Bnu5E8FugCiayyA9Mfgp
          stance: supports
          locator: CBDB:237438
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_V2Bnu5E8FugCiayyA9Mfgp
            source_type: api_record
            title: 中国历代人物传记资料库：王善興（CBDB 237438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237438&o=json
            external_identifier: CBDB:237438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3xaSP4KsTBc37AdGhUg2MG
        subject_person_id: p_4A1ftN3jcTq1MaGNMSCbVY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王善興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WG29dNCNfBpH9AVfVmf3BQ
          claim_id: c_3xaSP4KsTBc37AdGhUg2MG
          source_id: s_V2Bnu5E8FugCiayyA9Mfgp
          stance: supports
          locator: CBDB:237438
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_V2Bnu5E8FugCiayyA9Mfgp
            source_type: api_record
            title: 中国历代人物传记资料库：王善興（CBDB 237438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237438&o=json
            external_identifier: CBDB:237438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
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
        id: c_LEEGxq-R4sL1Gr27HTStcE
        subject_person_id: p_4A1ftN3jcTq1MaGNMSCbVY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dHV6AgtpcgRLpJFycLHnbd
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iLKX51_I62Tnx8Pkhg-WHI
          claim_id: c_LEEGxq-R4sL1Gr27HTStcE
          source_id: s_BrL8FgKbWmjfM3JrsFKFu6
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第五十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BrL8FgKbWmjfM3JrsFKFu6
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 67212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67212&o=json
            external_identifier: CBDB:67212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dHV6AgtpcgRLpJFycLHnbd
        status: active
        display_name: 王信
        merged_into_person_id: null
  other: []
---

# 王善興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王善興，明人物。中国历代人物传记资料库（CBDB）以人物编号 237438 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王善興 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_dHV6AgtpcgRLpJFycLHnbd | 王信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王善興（CBDB 237438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237438&o=json)
- [中国历代人物传记资料库：王信（CBDB 67212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67212&o=json)
