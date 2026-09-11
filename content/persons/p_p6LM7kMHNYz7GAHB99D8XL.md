---
schema: wang-person/v1
id: p_p6LM7kMHNYz7GAHB99D8XL
status: active
merged_into: null
display_name: 王顯道
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GiyV8wV4Mt8G7GP1iUBFbg
        subject_person_id: p_p6LM7kMHNYz7GAHB99D8XL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_srCfLpWGpCRPXn7EiBL3FL
          claim_id: c_GiyV8wV4Mt8G7GP1iUBFbg
          source_id: s_1ZQ5a7ijrWSvL1zqCVdn2j
          stance: supports
          locator: CBDB:201310
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201310）
          source: &a1
            id: s_1ZQ5a7ijrWSvL1zqCVdn2j
            source_type: api_record
            title: 中国历代人物传记资料库：王顯道（CBDB 201310）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201310&o=json
            external_identifier: CBDB:201310
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.669Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UVMJh523DQAEeoGN1VLRqi
        subject_person_id: p_p6LM7kMHNYz7GAHB99D8XL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1458年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XTepCQcyTcqvm1KV84QMdu
          claim_id: c_UVMJh523DQAEeoGN1VLRqi
          source_id: s_1ZQ5a7ijrWSvL1zqCVdn2j
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fHNvSbpdgop9TG4EMjKeHJ
        subject_person_id: p_p6LM7kMHNYz7GAHB99D8XL
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
        - id: cs_QZX6ZYVno4iMhGQ9By3Ygf
          claim_id: c_fHNvSbpdgop9TG4EMjKeHJ
          source_id: s_1ZQ5a7ijrWSvL1zqCVdn2j
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
        id: c_8pd2pIebWMoisAJaK2n00X
        subject_person_id: p_EjHbdW3cwgQuNaYfk7ph2H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_p6LM7kMHNYz7GAHB99D8XL
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z69pUbFX5e1Fn8rTbCMnP1
          claim_id: c_8pd2pIebWMoisAJaK2n00X
          source_id: s_SR5qejf98kER5C4yvGAdn8
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第六十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SR5qejf98kER5C4yvGAdn8
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 270426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270426&o=json
            external_identifier: CBDB:270426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EjHbdW3cwgQuNaYfk7ph2H
        status: active
        display_name: 王聰
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王顯道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯道 | accepted |
| birth.date | 1458年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_EjHbdW3cwgQuNaYfk7ph2H | 王聰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 270426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270426&o=json)
- [中国历代人物传记资料库：王顯道（CBDB 201310）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201310&o=json)
