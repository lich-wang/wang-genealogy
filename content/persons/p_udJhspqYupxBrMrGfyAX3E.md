---
schema: wang-person/v1
id: p_udJhspqYupxBrMrGfyAX3E
status: active
merged_into: null
display_name: 王守真
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FEXHnH8U9SQ6wLDPtLmUVu
        subject_person_id: p_udJhspqYupxBrMrGfyAX3E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守真
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q8yfhwvD9DhWve3EQn54Zx
          claim_id: c_FEXHnH8U9SQ6wLDPtLmUVu
          source_id: s_QYt6qR4NntwMpVyjj2jzFK
          stance: supports
          locator: CBDB:157067
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157067）
          source: &a1
            id: s_QYt6qR4NntwMpVyjj2jzFK
            source_type: api_record
            title: 中国历代人物传记资料库：王守真（CBDB 157067）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157067&o=json
            external_identifier: CBDB:157067
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.900Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gyLCxbasEEZCN3AUPiB6PH
        subject_person_id: p_udJhspqYupxBrMrGfyAX3E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2XCLBioLBA7x2Cw2SNjjkM
          claim_id: c_gyLCxbasEEZCN3AUPiB6PH
          source_id: s_QYt6qR4NntwMpVyjj2jzFK
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
        id: c_8rQhl6ScHRCp0ltkVwgHZL
        subject_person_id: p_udJhspqYupxBrMrGfyAX3E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PtYEMqNo3Ja6CBRf3JpwLp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nvYPykEa4KIHbJhWsvjw7h
          claim_id: c_8rQhl6ScHRCp0ltkVwgHZL
          source_id: s_xrt4f93dp6af9Q6LA6B4bQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xrt4f93dp6af9Q6LA6B4bQ
            source_type: api_record
            title: 中国历代人物传记资料库：王希儁（CBDB 160576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160576&o=json
            external_identifier: CBDB:160576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PtYEMqNo3Ja6CBRf3JpwLp
        status: active
        display_name: 王希儁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王守真

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守真 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_PtYEMqNo3Ja6CBRf3JpwLp | 王希儁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守真（CBDB 157067）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157067&o=json)
- [中国历代人物传记资料库：王希儁（CBDB 160576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160576&o=json)
