---
schema: wang-person/v1
id: p_5ohMdMNTUoj3iiWggdSGx9
status: active
merged_into: null
display_name: 王起潛
cbdb_id: 303658
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_75MpGMhgssrCK7Aierrc3a
        subject_person_id: p_5ohMdMNTUoj3iiWggdSGx9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起潛，明人物。中国历代人物传记资料库（CBDB）以人物编号 303658 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs__gVZHESdXkvlDmi0ay1Yzi
          claim_id: c_75MpGMhgssrCK7Aierrc3a
          source_id: s_kx5A1UAb2axcQNp34iek1Q
          stance: supports
          locator: CBDB:303658
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_kx5A1UAb2axcQNp34iek1Q
            source_type: api_record
            title: 中国历代人物传记资料库：王起潛（CBDB 303658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303658&o=json
            external_identifier: CBDB:303658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SQJFSdMaMBgMQiPMxrU95k
        subject_person_id: p_5ohMdMNTUoj3iiWggdSGx9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起潛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xmPB9P6K8MM515iKSrQHUw
          claim_id: c_SQJFSdMaMBgMQiPMxrU95k
          source_id: s_kx5A1UAb2axcQNp34iek1Q
          stance: supports
          locator: CBDB:303658
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_kx5A1UAb2axcQNp34iek1Q
            source_type: api_record
            title: 中国历代人物传记资料库：王起潛（CBDB 303658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303658&o=json
            external_identifier: CBDB:303658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_7wRLTFw95VXJsTzcNmmMFZ
        subject_person_id: p_5ohMdMNTUoj3iiWggdSGx9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xeCtF6YtnZ7oFJ3LJ48uKd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FXcbhebxp0GUoURH7vdLqF
          claim_id: c_7wRLTFw95VXJsTzcNmmMFZ
          source_id: s_kx5A1UAb2axcQNp34iek1Q
          stance: supports
          locator: 洪武四年進士登科錄:一卷，第二甲第十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xeCtF6YtnZ7oFJ3LJ48uKd
        status: active
        display_name: 王諫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王起潛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王起潛，明人物。中国历代人物传记资料库（CBDB）以人物编号 303658 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王起潛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_xeCtF6YtnZ7oFJ3LJ48uKd | 王諫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王起潛（CBDB 303658）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303658&o=json)
