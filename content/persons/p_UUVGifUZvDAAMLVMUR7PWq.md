---
schema: wang-person/v1
id: p_UUVGifUZvDAAMLVMUR7PWq
status: active
merged_into: null
display_name: 王星煥
cbdb_id: 69311
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_isN8j4WcT569HMqJLjdAvc
        subject_person_id: p_UUVGifUZvDAAMLVMUR7PWq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王星煥，清人物。中国历代人物传记资料库（CBDB）以人物编号 69311 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_eB9sBBFrgpGUy9owMfekae
          claim_id: c_isN8j4WcT569HMqJLjdAvc
          source_id: s_HzsBDzgNLk8Ki5DnoPASdE
          stance: supports
          locator: CBDB:69311
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HzsBDzgNLk8Ki5DnoPASdE
            source_type: api_record
            title: 中国历代人物传记资料库：王星煥（CBDB 69311）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69311&o=json
            external_identifier: CBDB:69311
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_88a8k6D9easkea1mts1NDv
        subject_person_id: p_UUVGifUZvDAAMLVMUR7PWq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王星煥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PDi3GMJCkX3m7rf7BMQNnK
          claim_id: c_88a8k6D9easkea1mts1NDv
          source_id: s_HzsBDzgNLk8Ki5DnoPASdE
          stance: supports
          locator: CBDB:69311
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1501-1600）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_HzsBDzgNLk8Ki5DnoPASdE
            source_type: api_record
            title: 中国历代人物传记资料库：王星煥（CBDB 69311）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69311&o=json
            external_identifier: CBDB:69311
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_8A8zGR91QhKZwZ7nU1XngU
        subject_person_id: p_UUVGifUZvDAAMLVMUR7PWq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YAuqhDCG8jhbuRWRDK5RgG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f8qPbGx61_YJV1_V6emnhZ
          claim_id: c_8A8zGR91QhKZwZ7nU1XngU
          source_id: s_HzsBDzgNLk8Ki5DnoPASdE
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13014：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YAuqhDCG8jhbuRWRDK5RgG
        status: active
        display_name: 王蔭堂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王星煥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王星煥，清人物。中国历代人物传记资料库（CBDB）以人物编号 69311 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王星煥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_YAuqhDCG8jhbuRWRDK5RgG | 王蔭堂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王星煥（CBDB 69311）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69311&o=json)
