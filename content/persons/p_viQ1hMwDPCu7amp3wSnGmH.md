---
schema: wang-person/v1
id: p_viQ1hMwDPCu7amp3wSnGmH
status: active
merged_into: null
display_name: 王紹先
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V5W8qBQti6J4W4zu77k6p9
        subject_person_id: p_viQ1hMwDPCu7amp3wSnGmH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹先
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qCsLfecie9WH5Mx9YP2t2K
          claim_id: c_V5W8qBQti6J4W4zu77k6p9
          source_id: s_dkMRT47ofXjo6B3EjDWKwG
          stance: supports
          locator: CBDB:164878
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（164878）
          source: &a1
            id: s_dkMRT47ofXjo6B3EjDWKwG
            source_type: api_record
            title: 中国历代人物传记资料库：王紹先（CBDB 164878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164878&o=json
            external_identifier: CBDB:164878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.970Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yv58Zyj9911VZMH3sr4YUw
        subject_person_id: p_viQ1hMwDPCu7amp3wSnGmH
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
        - id: cs_zcj1EHo1xv2MZM3iWee7Fq
          claim_id: c_yv58Zyj9911VZMH3sr4YUw
          source_id: s_dkMRT47ofXjo6B3EjDWKwG
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
        id: c_BP_UvQZopmuUORP6qPS5va
        subject_person_id: p_bupKiVr68PqXVERhZYa1QZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_viQ1hMwDPCu7amp3wSnGmH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ukMuu0Wggn39TQ8qh5XaUS
          claim_id: c_BP_UvQZopmuUORP6qPS5va
          source_id: s_gfZEmcr86oR2Ky8uJseHuw
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Tianbao87：子
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
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王紹先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹先 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bupKiVr68PqXVERhZYa1QZ | 王守節 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紹先（CBDB 164878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164878&o=json)
- [中国历代人物传记资料库：王守節（CBDB 143031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143031&o=json)
