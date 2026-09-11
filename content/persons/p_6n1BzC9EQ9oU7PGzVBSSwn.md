---
schema: wang-person/v1
id: p_6n1BzC9EQ9oU7PGzVBSSwn
status: active
merged_into: null
display_name: 王丙归
cbdb_id: 517402
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ooDEusdXBoyFzwLhZyCEXV
        subject_person_id: p_6n1BzC9EQ9oU7PGzVBSSwn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丙归，清人物。中国历代人物传记资料库（CBDB）以人物编号 517402 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_hRZ17q7i96vuKoDx5BIkVY
          claim_id: c_ooDEusdXBoyFzwLhZyCEXV
          source_id: s_sQCM4YYaqQctjt1xr3aZc1
          stance: supports
          locator: CBDB:517402
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_sQCM4YYaqQctjt1xr3aZc1
            source_type: api_record
            title: 中国历代人物传记资料库：王丙归（CBDB 517402）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517402&o=json
            external_identifier: CBDB:517402
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qs3mZ1EwCbrwa9yhFvRGM1
        subject_person_id: p_6n1BzC9EQ9oU7PGzVBSSwn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丙归
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2obtp3eYEsrNEN1mZA4HQF
          claim_id: c_qs3mZ1EwCbrwa9yhFvRGM1
          source_id: s_sQCM4YYaqQctjt1xr3aZc1
          stance: supports
          locator: CBDB:517402
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_sQCM4YYaqQctjt1xr3aZc1
            source_type: api_record
            title: 中国历代人物传记资料库：王丙归（CBDB 517402）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517402&o=json
            external_identifier: CBDB:517402
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_N69PJI6e0JrPQop6d4kPjU
        subject_person_id: p_a4Z1SS7vUfao8RBemz7Fq9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6n1BzC9EQ9oU7PGzVBSSwn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oWmM56HNJjvr9n8PBABl3K
          claim_id: c_N69PJI6e0JrPQop6d4kPjU
          source_id: s_brKMi5GwnBcw3HCt4kiPWS
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1869：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_brKMi5GwnBcw3HCt4kiPWS
            source_type: api_record
            title: 中国历代人物传记资料库：王兆琛（CBDB 58608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58608&o=json
            external_identifier: CBDB:58608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_a4Z1SS7vUfao8RBemz7Fq9
        status: active
        display_name: 王兆琛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王丙归

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王丙归，清人物。中国历代人物传记资料库（CBDB）以人物编号 517402 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王丙归 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_a4Z1SS7vUfao8RBemz7Fq9 | 王兆琛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王丙归（CBDB 517402）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517402&o=json)
- [中国历代人物传记资料库：王兆琛（CBDB 58608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58608&o=json)
