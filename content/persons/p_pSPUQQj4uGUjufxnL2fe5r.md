---
schema: wang-person/v1
id: p_pSPUQQj4uGUjufxnL2fe5r
status: active
merged_into: null
display_name: 王齊旦
cbdb_id: 148835
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9Ltf5Wa55VTGic9CdDFcHG
        subject_person_id: p_pSPUQQj4uGUjufxnL2fe5r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齊旦，唐人物。中国历代人物传记资料库（CBDB）以人物编号 148835 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_J1_kaL2Ar4bz4Mkuqpm8p-
          claim_id: c_9Ltf5Wa55VTGic9CdDFcHG
          source_id: s_Bx5GxRWckmy2xA2FbmQDHY
          stance: supports
          locator: CBDB:148835
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_Bx5GxRWckmy2xA2FbmQDHY
            source_type: api_record
            title: 中国历代人物传记资料库：王齊旦（CBDB 148835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148835&o=json
            external_identifier: CBDB:148835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dcAEzmaR1e6BwYvwEU98kx
        subject_person_id: p_pSPUQQj4uGUjufxnL2fe5r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齊旦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_td9KTzhym3Hbn3KVrK5LUm
          claim_id: c_dcAEzmaR1e6BwYvwEU98kx
          source_id: s_Bx5GxRWckmy2xA2FbmQDHY
          stance: supports
          locator: CBDB:148835
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_Bx5GxRWckmy2xA2FbmQDHY
            source_type: api_record
            title: 中国历代人物传记资料库：王齊旦（CBDB 148835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148835&o=json
            external_identifier: CBDB:148835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ApUL3lSmu9tQ5Z5YY0L0FD
        subject_person_id: p_ChwVo4Bn3TwGaT9qN5VSo6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pSPUQQj4uGUjufxnL2fe5r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1ilnUhJ5g6mBjLi2YK5-PF
          claim_id: c_ApUL3lSmu9tQ5Z5YY0L0FD
          source_id: s_tCfD8QjcvmuW2fCStLZSoK
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yifeng 18：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tCfD8QjcvmuW2fCStLZSoK
            source_type: api_record
            title: 中国历代人物传记资料库：王烈（CBDB 139708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139708&o=json
            external_identifier: CBDB:139708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.444Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ChwVo4Bn3TwGaT9qN5VSo6
        status: active
        display_name: 王烈
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王齊旦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王齊旦，唐人物。中国历代人物传记资料库（CBDB）以人物编号 148835 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王齊旦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ChwVo4Bn3TwGaT9qN5VSo6 | 王烈 | accepted |

## 外部来源

- [中国历代人物传记资料库：王烈（CBDB 139708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139708&o=json)
- [中国历代人物传记资料库：王齊旦（CBDB 148835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148835&o=json)
