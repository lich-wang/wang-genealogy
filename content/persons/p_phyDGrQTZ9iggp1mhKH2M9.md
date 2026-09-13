---
schema: wang-person/v1
id: p_phyDGrQTZ9iggp1mhKH2M9
status: active
merged_into: null
display_name: 王宗民
cbdb_id: 273946
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_juWJPoGFFq2Eae1yyNs2r7
        subject_person_id: p_phyDGrQTZ9iggp1mhKH2M9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗民，明人物。弘治十八年進士。（中国历代人物传记资料库 CBDB 273946）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_gKodxjDSaPNns9FK6EkBrY
          claim_id: c_juWJPoGFFq2Eae1yyNs2r7
          source_id: s_1BdB4mLCsC7PQ6JtWNWMPb
          stance: supports
          locator: CBDB:273946
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1BdB4mLCsC7PQ6JtWNWMPb
            source_type: api_record
            title: 中国历代人物传记资料库：王宗民（CBDB 273946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273946&o=json
            external_identifier: CBDB:273946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9ezW6w8F2UKWp5oueoudZs
        subject_person_id: p_phyDGrQTZ9iggp1mhKH2M9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_duRxEsP2Pm37HeLaKRyXL9
          claim_id: c_9ezW6w8F2UKWp5oueoudZs
          source_id: s_1BdB4mLCsC7PQ6JtWNWMPb
          stance: supports
          locator: CBDB:273946
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
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
        id: c_Srrb79qIb_6RxS8IQ8E77C
        subject_person_id: p_phyDGrQTZ9iggp1mhKH2M9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mXq9uxGc8pg1wHpdoUPQx2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZNUHHbuYXbYJUNxeIJ3ZOS
          claim_id: c_Srrb79qIb_6RxS8IQ8E77C
          source_id: s_4SkWq6uYYWjkowxuTzuZDA
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第三十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4SkWq6uYYWjkowxuTzuZDA
            source_type: api_record
            title: 中国历代人物传记资料库：王坊（CBDB 201535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201535&o=json
            external_identifier: CBDB:201535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.683Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mXq9uxGc8pg1wHpdoUPQx2
        status: active
        display_name: 王坊
        merged_into_person_id: null
  other: []
---

# 王宗民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗民，明人物。弘治十八年進士。（中国历代人物传记资料库 CBDB 273946） | accepted |
| name.primary | 王宗民 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_mXq9uxGc8pg1wHpdoUPQx2 | 王坊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王坊（CBDB 201535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201535&o=json)
- [中国历代人物传记资料库：王宗民（CBDB 273946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273946&o=json)
