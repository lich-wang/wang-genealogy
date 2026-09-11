---
schema: wang-person/v1
id: p_ceKjZ4gsW42gfQ53Tnqh2E
status: active
merged_into: null
display_name: 王韞輝
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UAq45G53jExz8sF3HJXmbi
        subject_person_id: p_ceKjZ4gsW42gfQ53Tnqh2E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韞輝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Sid1ZkqRrhRsRtSa4FmCMQ
          claim_id: c_UAq45G53jExz8sF3HJXmbi
          source_id: s_p2sw8tEXR7UuWq51YiBNDV
          stance: supports
          locator: CBDB:526937
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526937）
          source: &a1
            id: s_p2sw8tEXR7UuWq51YiBNDV
            source_type: api_record
            title: 中国历代人物传记资料库：王韞輝（CBDB 526937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526937&o=json
            external_identifier: CBDB:526937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BHRRjZsTPiK7eyKTizKGKQ
        subject_person_id: p_ceKjZ4gsW42gfQ53Tnqh2E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eF6xu6LeByFsJ7BLvMeMt7
          claim_id: c_BHRRjZsTPiK7eyKTizKGKQ
          source_id: s_p2sw8tEXR7UuWq51YiBNDV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Z6_lkk5CNPTVsK4KnoiUlW
        subject_person_id: p_REFyGBeMzLA3xAB5YgaYr9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ceKjZ4gsW42gfQ53Tnqh2E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hb6gBGQROEObuNuI1XAzQs
          claim_id: c_Z6_lkk5CNPTVsK4KnoiUlW
          source_id: s_p2sw8tEXR7UuWq51YiBNDV
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13104：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_REFyGBeMzLA3xAB5YgaYr9
        status: active
        display_name: 王銑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王韞輝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王韞輝 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_REFyGBeMzLA3xAB5YgaYr9 | 王銑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王韞輝（CBDB 526937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526937&o=json)
