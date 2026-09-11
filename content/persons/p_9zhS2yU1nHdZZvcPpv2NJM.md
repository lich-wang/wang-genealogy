---
schema: wang-person/v1
id: p_9zhS2yU1nHdZZvcPpv2NJM
status: active
merged_into: null
display_name: 王渥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LX7rDL1rFrQtSp9XidU1d4
        subject_person_id: p_9zhS2yU1nHdZZvcPpv2NJM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1iqXsL5mHejkRHthMe2Vdi
          claim_id: c_LX7rDL1rFrQtSp9XidU1d4
          source_id: s_thk77d8ByQCJmegimMVSeY
          stance: supports
          locator: CBDB:697043
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（697043）
          source: &a1
            id: s_thk77d8ByQCJmegimMVSeY
            source_type: api_record
            title: 中国历代人物传记资料库：王渥（CBDB 697043）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697043&o=json
            external_identifier: CBDB:697043
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.715Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_edEofoB2aGM3J6GrQbFQV5
        subject_person_id: p_9zhS2yU1nHdZZvcPpv2NJM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RfG5avZv1oxKQLU7fhvyqv
          claim_id: c_edEofoB2aGM3J6GrQbFQV5
          source_id: s_thk77d8ByQCJmegimMVSeY
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
  ancestors:
    - claim:
        id: c_1RYjEIf8-PWtXGT3stmQUe
        subject_person_id: p_LKzDYAPDmX1Dcm3kwWWk7w
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9zhS2yU1nHdZZvcPpv2NJM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fQ26WkCLV2NgwhBv62jZjy
          claim_id: c_1RYjEIf8-PWtXGT3stmQUe
          source_id: s_thk77d8ByQCJmegimMVSeY
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，159 王九言墓志：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LKzDYAPDmX1Dcm3kwWWk7w
        status: active
        display_name: 王九言
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王渥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王渥 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_LKzDYAPDmX1Dcm3kwWWk7w | 王九言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王渥（CBDB 697043）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697043&o=json)
