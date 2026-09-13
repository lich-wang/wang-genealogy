---
schema: wang-person/v1
id: p_W36C1qhCsF3P97e2Xtj95b
status: active
merged_into: null
display_name: 王曰晉
cbdb_id: 517416
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tsnZ7Jwqd9PWc1xxPT1tcZ
        subject_person_id: p_W36C1qhCsF3P97e2Xtj95b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰晉，史料所见人物。本项目依据《中国历代人物传记资料库：王曰晉（CBDB 517416）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_m0NZOnhVkbejSSBZ0q831M
          claim_id: c_tsnZ7Jwqd9PWc1xxPT1tcZ
          source_id: s_4kkM7DmNVGSJ2usverz8PE
          stance: supports
          locator: CBDB:517416
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_4kkM7DmNVGSJ2usverz8PE
            source_type: api_record
            title: 中国历代人物传记资料库：王曰晉（CBDB 517416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517416&o=json
            external_identifier: CBDB:517416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vGa9LffCGkdY1GvAroLyT4
        subject_person_id: p_W36C1qhCsF3P97e2Xtj95b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰晉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7hgtNEDN17NvUKEdczKXkP
          claim_id: c_vGa9LffCGkdY1GvAroLyT4
          source_id: s_4kkM7DmNVGSJ2usverz8PE
          stance: supports
          locator: CBDB:517416
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source: *a1
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
        id: c_KO2-TgM8ClTCtzJV6KCXnX
        subject_person_id: p_W36C1qhCsF3P97e2Xtj95b
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rmasThSZQpK58DvK4DhFJc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rrx3c5j57ucqEG4Ha5TdUV
          claim_id: c_KO2-TgM8ClTCtzJV6KCXnX
          source_id: s_32jPKE9WJo13pjP5TD4N2Q
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1877：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_32jPKE9WJo13pjP5TD4N2Q
            source_type: api_record
            title: 中国历代人物传记资料库：王凱泰（CBDB 58615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58615&o=json
            external_identifier: CBDB:58615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.826Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rmasThSZQpK58DvK4DhFJc
        status: active
        display_name: 王凱泰
        merged_into_person_id: null
  other: []
---

# 王曰晉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王曰晉，史料所见人物。本项目依据《中国历代人物传记资料库：王曰晉（CBDB 517416）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王曰晉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_rmasThSZQpK58DvK4DhFJc | 王凱泰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王凱泰（CBDB 58615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58615&o=json)
- [中国历代人物传记资料库：王曰晉（CBDB 517416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517416&o=json)
