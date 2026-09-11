---
schema: wang-person/v1
id: p_e5Sidd4uLDXKV7G8RopKVW
status: active
merged_into: null
display_name: 王睿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pwZWcEKJ5ZkP7ortZhe49w
        subject_person_id: p_e5Sidd4uLDXKV7G8RopKVW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6T6VjBsuj2K4fL4VZ9Wpkn
          claim_id: c_pwZWcEKJ5ZkP7ortZhe49w
          source_id: s_bUrTKwUD7V7ND8uG43NEDQ
          stance: supports
          locator: CBDB:283872
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283872）
          source: &a1
            id: s_bUrTKwUD7V7ND8uG43NEDQ
            source_type: api_record
            title: 中国历代人物传记资料库：王睿（CBDB 283872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283872&o=json
            external_identifier: CBDB:283872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.152Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZGp5VeARw1F2ioR3yeBCDk
        subject_person_id: p_e5Sidd4uLDXKV7G8RopKVW
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
        - id: cs_UjE5AdqDoVEKbe4X14KhWJ
          claim_id: c_ZGp5VeARw1F2ioR3yeBCDk
          source_id: s_bUrTKwUD7V7ND8uG43NEDQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_u_joNMUQi4X2U0AI5aSm4t
        subject_person_id: p_e5Sidd4uLDXKV7G8RopKVW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7H3TPU2nfHoiknXCZ9JVid
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nZrXtLUyLPImFMstQ8at4D
          claim_id: c_u_joNMUQi4X2U0AI5aSm4t
          source_id: s_wCW9jRjL1KypShYP5kjEUG
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第八十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wCW9jRjL1KypShYP5kjEUG
            source_type: api_record
            title: 中国历代人物传记资料库：王大化（CBDB 202118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202118&o=json
            external_identifier: CBDB:202118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.721Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7H3TPU2nfHoiknXCZ9JVid
        status: active
        display_name: 王大化
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王睿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王睿 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7H3TPU2nfHoiknXCZ9JVid | 王大化 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大化（CBDB 202118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202118&o=json)
- [中国历代人物传记资料库：王睿（CBDB 283872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283872&o=json)
