---
schema: wang-person/v1
id: p_1yxK9F8DNq1ge3RKe9th3W
status: active
merged_into: null
display_name: 王玉芬
cbdb_id: 56489
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8WaUMvqu8wGbd2uCL3hY63
        subject_person_id: p_1yxK9F8DNq1ge3RKe9th3W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉芬，清人物。中国历代人物传记资料库（CBDB）以人物编号 56489 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_XCMgSosO_Q79DRMAw0GKQR
          claim_id: c_8WaUMvqu8wGbd2uCL3hY63
          source_id: s_i49AQNEyFrQAiq9GzTb1T6
          stance: supports
          locator: CBDB:56489
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_i49AQNEyFrQAiq9GzTb1T6
            source_type: api_record
            title: 中国历代人物传记资料库：王玉芬（CBDB 56489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56489&o=json
            external_identifier: CBDB:56489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WdsgE4aay89ANHFR6EU8zY
        subject_person_id: p_1yxK9F8DNq1ge3RKe9th3W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉芬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hXX7NSppH4wxXABcRvzL2i
          claim_id: c_WdsgE4aay89ANHFR6EU8zY
          source_id: s_i49AQNEyFrQAiq9GzTb1T6
          stance: supports
          locator: CBDB:56489
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_i49AQNEyFrQAiq9GzTb1T6
            source_type: api_record
            title: 中国历代人物传记资料库：王玉芬（CBDB 56489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56489&o=json
            external_identifier: CBDB:56489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PbpkXgPBvn3OvQ0M1wftAa
        subject_person_id: p_Q7ggBttVytDDHAgopL9CKb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1yxK9F8DNq1ge3RKe9th3W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oDGaGb7wg3Me3vpc30w-79
          claim_id: c_PbpkXgPBvn3OvQ0M1wftAa
          source_id: s_i49AQNEyFrQAiq9GzTb1T6
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #937, HuWenKai #232：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Q7ggBttVytDDHAgopL9CKb
        status: active
        display_name: 王鳳生
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玉芬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王玉芬，清人物。中国历代人物传记资料库（CBDB）以人物编号 56489 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王玉芬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Q7ggBttVytDDHAgopL9CKb | 王鳳生 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玉芬（CBDB 56489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56489&o=json)
