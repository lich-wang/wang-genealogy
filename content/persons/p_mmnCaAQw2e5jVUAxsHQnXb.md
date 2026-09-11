---
schema: wang-person/v1
id: p_mmnCaAQw2e5jVUAxsHQnXb
status: active
merged_into: null
display_name: 王奇榜
cbdb_id: 229383
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jn2AyfuG5DMQM7p5GLkCMc
        subject_person_id: p_mmnCaAQw2e5jVUAxsHQnXb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奇榜，明人物。中国历代人物传记资料库（CBDB）以人物编号 229383 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_IBQevYoO_AfLCkZyLksuOs
          claim_id: c_Jn2AyfuG5DMQM7p5GLkCMc
          source_id: s_ssYN7hQJ7Sji4g47jHvBkm
          stance: supports
          locator: CBDB:229383
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ssYN7hQJ7Sji4g47jHvBkm
            source_type: api_record
            title: 中国历代人物传记资料库：王奇榜（CBDB 229383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229383&o=json
            external_identifier: CBDB:229383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ffuqdm65gHiWqazy1QGAf3
        subject_person_id: p_mmnCaAQw2e5jVUAxsHQnXb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奇榜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_p1dt6wgEbPKD5hCKRpZuWP
          claim_id: c_Ffuqdm65gHiWqazy1QGAf3
          source_id: s_ssYN7hQJ7Sji4g47jHvBkm
          stance: supports
          locator: CBDB:229383
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_ssYN7hQJ7Sji4g47jHvBkm
            source_type: api_record
            title: 中国历代人物传记资料库：王奇榜（CBDB 229383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229383&o=json
            external_identifier: CBDB:229383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_s08h5P_w3FzJpcY0jKcMsE
        subject_person_id: p_p7XKo89NhBCAZto4tXob1s
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mmnCaAQw2e5jVUAxsHQnXb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GOl6JYVgMR8FmhWb1wxbFg
          claim_id: c_s08h5P_w3FzJpcY0jKcMsE
          source_id: s_ssYN7hQJ7Sji4g47jHvBkm
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第二百五十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_p7XKo89NhBCAZto4tXob1s
        status: active
        display_name: 王希夔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王奇榜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王奇榜，明人物。中国历代人物传记资料库（CBDB）以人物编号 229383 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王奇榜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_p7XKo89NhBCAZto4tXob1s | 王希夔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王奇榜（CBDB 229383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229383&o=json)
