---
schema: wang-person/v1
id: p_iMaeGBttksVavqroPoetRm
status: active
merged_into: null
display_name: 王弼
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CcH12GLTQztkGSuc22BrcY
        subject_person_id: p_iMaeGBttksVavqroPoetRm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8yCqvfNHEjSCu2gSrcK9Y5
          claim_id: c_CcH12GLTQztkGSuc22BrcY
          source_id: s_RZKpE3mkCWm7PEa4i7vfjW
          stance: supports
          locator: CBDB:164872
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（164872）
          source: &a1
            id: s_RZKpE3mkCWm7PEa4i7vfjW
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 164872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164872&o=json
            external_identifier: CBDB:164872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.970Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TSquP3SYZG8BjpZqw9vp67
        subject_person_id: p_iMaeGBttksVavqroPoetRm
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
        - id: cs_vfBbGSMSD6i8hndkRWF1XB
          claim_id: c_TSquP3SYZG8BjpZqw9vp67
          source_id: s_RZKpE3mkCWm7PEa4i7vfjW
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
        id: c_mcMFrum4Om-q0SYD3AWm-a
        subject_person_id: p_iMaeGBttksVavqroPoetRm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bupKiVr68PqXVERhZYa1QZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ksMbKn-nCQi5BEl4B3j-vY
          claim_id: c_mcMFrum4Om-q0SYD3AWm-a
          source_id: s_gfZEmcr86oR2Ky8uJseHuw
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Tianbao87：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gfZEmcr86oR2Ky8uJseHuw
            source_type: api_record
            title: 中国历代人物传记资料库：王守節（CBDB 143031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143031&o=json
            external_identifier: CBDB:143031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.605Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bupKiVr68PqXVERhZYa1QZ
        status: active
        display_name: 王守節
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弼 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_bupKiVr68PqXVERhZYa1QZ | 王守節 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 164872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164872&o=json)
- [中国历代人物传记资料库：王守節（CBDB 143031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143031&o=json)
