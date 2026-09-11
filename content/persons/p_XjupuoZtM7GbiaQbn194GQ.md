---
schema: wang-person/v1
id: p_XjupuoZtM7GbiaQbn194GQ
status: active
merged_into: null
display_name: 王修文
cbdb_id: 118585
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TFCGVCQHuKKKt7CwTmTqFh
        subject_person_id: p_XjupuoZtM7GbiaQbn194GQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修文，清人物。中国历代人物传记资料库（CBDB）以人物编号 118585 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_coARs-PSv47IxyCthMGH5k
          claim_id: c_TFCGVCQHuKKKt7CwTmTqFh
          source_id: s_upw3AqoikkfqsBv6hAi351
          stance: supports
          locator: CBDB:118585
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_upw3AqoikkfqsBv6hAi351
            source_type: api_record
            title: 中国历代人物传记资料库：王修文（CBDB 118585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118585&o=json
            external_identifier: CBDB:118585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GUYezP8wwxFNnur6goA3Hi
        subject_person_id: p_XjupuoZtM7GbiaQbn194GQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qtaCdYzb3QVEijpqmPXPjE
          claim_id: c_GUYezP8wwxFNnur6goA3Hi
          source_id: s_upw3AqoikkfqsBv6hAi351
          stance: supports
          locator: CBDB:118585
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1801-1900）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_upw3AqoikkfqsBv6hAi351
            source_type: api_record
            title: 中国历代人物传记资料库：王修文（CBDB 118585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118585&o=json
            external_identifier: CBDB:118585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_5_rKpu0dpRYeLS-QENn9TA
        subject_person_id: p_XjupuoZtM7GbiaQbn194GQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_1zf7uM3w8Zewvcp6HeXLFy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-yoZ0AvvTcUM1OPQ6FEu0A
          claim_id: c_5_rKpu0dpRYeLS-QENn9TA
          source_id: s_BdvTpe82KsSCRNNyG16yfm
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2657, HuWenKai #560：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BdvTpe82KsSCRNNyG16yfm
            source_type: api_record
            title: 中国历代人物传记资料库：許季蘭（CBDB 118584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118584&o=json
            external_identifier: CBDB:118584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1zf7uM3w8Zewvcp6HeXLFy
        status: active
        display_name: 許季蘭
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王修文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王修文，清人物。中国历代人物传记资料库（CBDB）以人物编号 118585 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王修文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_1zf7uM3w8Zewvcp6HeXLFy | 許季蘭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王修文（CBDB 118585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118585&o=json)
- [中国历代人物传记资料库：許季蘭（CBDB 118584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118584&o=json)
