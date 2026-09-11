---
schema: wang-person/v1
id: p_7wW1HszyZJVtcha7euKGLM
status: active
merged_into: null
display_name: 王士璋
cbdb_id: 228291
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q324k5MEcUe2xs92rK6Cfw
        subject_person_id: p_7wW1HszyZJVtcha7euKGLM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士璋，明人物。中国历代人物传记资料库（CBDB）以人物编号 228291 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_dwEYiJNNRXU8Moe6-UbamH
          claim_id: c_q324k5MEcUe2xs92rK6Cfw
          source_id: s_o6NPbqL9xWXrj7Q9QW1Pu6
          stance: supports
          locator: CBDB:228291
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_o6NPbqL9xWXrj7Q9QW1Pu6
            source_type: api_record
            title: 中国历代人物传记资料库：王士璋（CBDB 228291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228291&o=json
            external_identifier: CBDB:228291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BAxgpBEnSZPx3xSbJQheBH
        subject_person_id: p_7wW1HszyZJVtcha7euKGLM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士璋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nHqxPr3QsPEf4Y295ks8HC
          claim_id: c_BAxgpBEnSZPx3xSbJQheBH
          source_id: s_o6NPbqL9xWXrj7Q9QW1Pu6
          stance: supports
          locator: CBDB:228291
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_o6NPbqL9xWXrj7Q9QW1Pu6
            source_type: api_record
            title: 中国历代人物传记资料库：王士璋（CBDB 228291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228291&o=json
            external_identifier: CBDB:228291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_t2AXiLBQKQaYm37msCBJEg
        subject_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7wW1HszyZJVtcha7euKGLM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_45YnZWOz9UQX-zTNS_tnCP
          claim_id: c_t2AXiLBQKQaYm37msCBJEg
          source_id: s_o6NPbqL9xWXrj7Q9QW1Pu6
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MWFGy9uHg9NsSwK8c42QRv
        status: active
        display_name: 王同休
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士璋，明人物。中国历代人物传记资料库（CBDB）以人物编号 228291 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王士璋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MWFGy9uHg9NsSwK8c42QRv | 王同休 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士璋（CBDB 228291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228291&o=json)
