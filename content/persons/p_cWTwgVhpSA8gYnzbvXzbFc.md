---
schema: wang-person/v1
id: p_cWTwgVhpSA8gYnzbvXzbFc
status: active
merged_into: null
display_name: 王定安
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bkyj8GYb2Ak2Mo48SKu3e3
        subject_person_id: p_cWTwgVhpSA8gYnzbvXzbFc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SeJLD89FPhuaSCFmtE27J7
          claim_id: c_bkyj8GYb2Ak2Mo48SKu3e3
          source_id: s_NTQUXc1yBx4CswFi9JSoHZ
          stance: supports
          locator: CBDB:200285
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200285）
          source: &a1
            id: s_NTQUXc1yBx4CswFi9JSoHZ
            source_type: api_record
            title: 中国历代人物传记资料库：王定安（CBDB 200285）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200285&o=json
            external_identifier: CBDB:200285
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.601Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uDhWNGPS6y36n5dDa3E5zg
        subject_person_id: p_cWTwgVhpSA8gYnzbvXzbFc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1445年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WYyd9j3wu7m51jQLdaCqov
          claim_id: c_uDhWNGPS6y36n5dDa3E5zg
          source_id: s_NTQUXc1yBx4CswFi9JSoHZ
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
        id: c_PEwbRZy7xhnhoNS7NgSKSs
        subject_person_id: p_cWTwgVhpSA8gYnzbvXzbFc
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
        - id: cs_QvHMV73rfDMV3XfYT88L4o
          claim_id: c_PEwbRZy7xhnhoNS7NgSKSs
          source_id: s_NTQUXc1yBx4CswFi9JSoHZ
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
        id: c_xL423APGZyuuW-hGgu5dtd
        subject_person_id: p_8oBKd9ZtsRcyQgVCR1bekN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cWTwgVhpSA8gYnzbvXzbFc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0ZGNTQ8CSL-7_PYesNz2Z0
          claim_id: c_xL423APGZyuuW-hGgu5dtd
          source_id: s_5RdHAuAGTnHQ8r8vnqdzvD
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第二十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5RdHAuAGTnHQ8r8vnqdzvD
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 255873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255873&o=json
            external_identifier: CBDB:255873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.357Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8oBKd9ZtsRcyQgVCR1bekN
        status: active
        display_name: 王宣
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王定安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定安 | accepted |
| birth.date | 1445年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_8oBKd9ZtsRcyQgVCR1bekN | 王宣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王定安（CBDB 200285）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200285&o=json)
- [中国历代人物传记资料库：王宣（CBDB 255873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255873&o=json)
