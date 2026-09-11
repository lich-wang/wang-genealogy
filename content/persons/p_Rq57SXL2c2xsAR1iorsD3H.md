---
schema: wang-person/v1
id: p_Rq57SXL2c2xsAR1iorsD3H
status: active
merged_into: null
display_name: 王秬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vAJ1w7emQzoVubs3b6KKEt
        subject_person_id: p_Rq57SXL2c2xsAR1iorsD3H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Serhd7BnRNGAn33UHJNtGt
          claim_id: c_vAJ1w7emQzoVubs3b6KKEt
          source_id: s_hhwWAqM6FGt7bRhjM4LZPd
          stance: supports
          locator: CBDB:273947
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273947）
          source: &a1
            id: s_hhwWAqM6FGt7bRhjM4LZPd
            source_type: api_record
            title: 中国历代人物传记资料库：王秬（CBDB 273947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273947&o=json
            external_identifier: CBDB:273947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.910Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZkYRUYY98Nh93JdM5omLMx
        subject_person_id: p_Rq57SXL2c2xsAR1iorsD3H
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
        - id: cs_DM7R6rdbbf3HZCPP2fL35Z
          claim_id: c_ZkYRUYY98Nh93JdM5omLMx
          source_id: s_hhwWAqM6FGt7bRhjM4LZPd
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
        id: c_xuuSRfvNu3LXnxfbxM__SJ
        subject_person_id: p_Rq57SXL2c2xsAR1iorsD3H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mXq9uxGc8pg1wHpdoUPQx2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_maNippd4sf0G4w6p6KrUwX
          claim_id: c_xuuSRfvNu3LXnxfbxM__SJ
          source_id: s_4SkWq6uYYWjkowxuTzuZDA
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第三十一名：祖父
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

# 王秬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秬 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_mXq9uxGc8pg1wHpdoUPQx2 | 王坊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王坊（CBDB 201535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201535&o=json)
- [中国历代人物传记资料库：王秬（CBDB 273947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273947&o=json)
