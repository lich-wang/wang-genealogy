---
schema: wang-person/v1
id: p_g2dCFSh3L1jfkgQ2AnHkcm
status: active
merged_into: null
display_name: 王政
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3MkRtKHoA8LJrxyup3GJ13
        subject_person_id: p_g2dCFSh3L1jfkgQ2AnHkcm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fTk2W4M4j7zhUCz83RTV3i
          claim_id: c_3MkRtKHoA8LJrxyup3GJ13
          source_id: s_p4r5yHHG3uRUewg32Tz3N4
          stance: supports
          locator: CBDB:262528
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262528）
          source: &a1
            id: s_p4r5yHHG3uRUewg32Tz3N4
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 262528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262528&o=json
            external_identifier: CBDB:262528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jdcUfdtPS453PeiuYVN3DW
        subject_person_id: p_g2dCFSh3L1jfkgQ2AnHkcm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xzTDxaSyGowP4Qs7JBdW9t
          claim_id: c_jdcUfdtPS453PeiuYVN3DW
          source_id: s_p4r5yHHG3uRUewg32Tz3N4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_14AsN33yLvBglQGDtD9Aqt
        subject_person_id: p_g2dCFSh3L1jfkgQ2AnHkcm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7SVdDrTGrqKd7fHd7JZ1J7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2cyGiMCXOI0m5JHxvwOS2d
          claim_id: c_14AsN33yLvBglQGDtD9Aqt
          source_id: s_kN8iEAqCCxG1zVN98HVyBr
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第七十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kN8iEAqCCxG1zVN98HVyBr
            source_type: api_record
            title: 中国历代人物传记资料库：王璟（CBDB 67991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67991&o=json
            external_identifier: CBDB:67991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.040Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7SVdDrTGrqKd7fHd7JZ1J7
        status: active
        display_name: 王璟
        merged_into_person_id: null
  other: []
---

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_7SVdDrTGrqKd7fHd7JZ1J7 | 王璟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璟（CBDB 67991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67991&o=json)
- [中国历代人物传记资料库：王政（CBDB 262528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262528&o=json)
