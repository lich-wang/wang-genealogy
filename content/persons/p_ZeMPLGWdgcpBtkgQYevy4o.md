---
schema: wang-person/v1
id: p_ZeMPLGWdgcpBtkgQYevy4o
status: active
merged_into: null
display_name: 王銘鎮
cbdb_id: 517410
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8Mx24779aKmZ79TUBQY5WB
        subject_person_id: p_ZeMPLGWdgcpBtkgQYevy4o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘鎮，清人物。中国历代人物传记资料库（CBDB）以人物编号 517410 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_HMJwpxGEEy4faDT-RBdW7m
          claim_id: c_8Mx24779aKmZ79TUBQY5WB
          source_id: s_QiTr6azGsJ7fJUMbvZuRRT
          stance: supports
          locator: CBDB:517410
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_QiTr6azGsJ7fJUMbvZuRRT
            source_type: api_record
            title: 中国历代人物传记资料库：王銘鎮（CBDB 517410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517410&o=json
            external_identifier: CBDB:517410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kcJFtNp65HR6WUGb7Ba3tq
        subject_person_id: p_ZeMPLGWdgcpBtkgQYevy4o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銘鎮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kmThmBdC1ZHwvnWekPQfNU
          claim_id: c_kcJFtNp65HR6WUGb7Ba3tq
          source_id: s_QiTr6azGsJ7fJUMbvZuRRT
          stance: supports
          locator: CBDB:517410
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_QiTr6azGsJ7fJUMbvZuRRT
            source_type: api_record
            title: 中国历代人物传记资料库：王銘鎮（CBDB 517410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517410&o=json
            external_identifier: CBDB:517410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Jj1hWI7ZZGFGGJ_jy0FRSh
        subject_person_id: p_6yEQbCpPbZgLz7LGDngBr9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZeMPLGWdgcpBtkgQYevy4o
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LKx8mMrdtPPaHpucr1Z_aw
          claim_id: c_Jj1hWI7ZZGFGGJ_jy0FRSh
          source_id: s_FU1VmgaFchy2vPp6w3C66B
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1870：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FU1VmgaFchy2vPp6w3C66B
            source_type: api_record
            title: 中国历代人物传记资料库：王茂蔭（CBDB 58609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58609&o=json
            external_identifier: CBDB:58609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.824Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6yEQbCpPbZgLz7LGDngBr9
        status: active
        display_name: 王茂蔭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王銘鎮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王銘鎮，清人物。中国历代人物传记资料库（CBDB）以人物编号 517410 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王銘鎮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6yEQbCpPbZgLz7LGDngBr9 | 王茂蔭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王茂蔭（CBDB 58609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58609&o=json)
- [中国历代人物传记资料库：王銘鎮（CBDB 517410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517410&o=json)
