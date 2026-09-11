---
schema: wang-person/v1
id: p_r7UvWenhP43z4nowVRc2BP
status: active
merged_into: null
display_name: 王希仙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ga562nJsZheoPH7CPJ2EkD
        subject_person_id: p_r7UvWenhP43z4nowVRc2BP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希仙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EcgTdoiEDUPAeyfDynjmvx
          claim_id: c_Ga562nJsZheoPH7CPJ2EkD
          source_id: s_L6xZiK78HFM936BTAdqguQ
          stance: supports
          locator: CBDB:267967
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267967）
          source: &a1
            id: s_L6xZiK78HFM936BTAdqguQ
            source_type: api_record
            title: 中国历代人物传记资料库：王希仙（CBDB 267967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267967&o=json
            external_identifier: CBDB:267967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yx4dJ6HQpRwngPDzGoo9cr
        subject_person_id: p_r7UvWenhP43z4nowVRc2BP
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
        - id: cs_ifVV65qnSwYLqjaFmATaCj
          claim_id: c_yx4dJ6HQpRwngPDzGoo9cr
          source_id: s_L6xZiK78HFM936BTAdqguQ
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
        id: c_G_EALxAHzKFY-c8V_3aFi5
        subject_person_id: p_r7UvWenhP43z4nowVRc2BP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YmdsA8EmYfF27LWV9ms1VW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ClHGl4_LDpVHmfDzvvwESg
          claim_id: c_G_EALxAHzKFY-c8V_3aFi5
          source_id: s_L6xZiK78HFM936BTAdqguQ
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YmdsA8EmYfF27LWV9ms1VW
        status: active
        display_name: 王孝忠
        merged_into_person_id: null
  other: []
---

# 王希仙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希仙 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_YmdsA8EmYfF27LWV9ms1VW | 王孝忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希仙（CBDB 267967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267967&o=json)
