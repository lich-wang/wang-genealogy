---
schema: wang-person/v1
id: p_c8kvY5ESoiii9c6m9JhP2A
status: active
merged_into: null
display_name: 王弼
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jSDQcrVzUmDuHCm9Y8hvYW
        subject_person_id: p_c8kvY5ESoiii9c6m9JhP2A
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
        - id: cs_EWtu49SqB5uk3Kyb1ehc9W
          claim_id: c_jSDQcrVzUmDuHCm9Y8hvYW
          source_id: s_5Ue7mBv7Q2JrQ64MSB7VHm
          stance: supports
          locator: CBDB:557758
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557758）
          source: &a1
            id: s_5Ue7mBv7Q2JrQ64MSB7VHm
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 557758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557758&o=json
            external_identifier: CBDB:557758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.685Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E3ZvCvRT3aLWxodhXu6bBa
        subject_person_id: p_c8kvY5ESoiii9c6m9JhP2A
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
        - id: cs_Lch6AbCXHZDP1nvnRMyNra
          claim_id: c_E3ZvCvRT3aLWxodhXu6bBa
          source_id: s_5Ue7mBv7Q2JrQ64MSB7VHm
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
        id: c_HuGE-ggLFEtggkmqmwLwRB
        subject_person_id: p_BVo3P1rTLnR5yWXE7paCRv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c8kvY5ESoiii9c6m9JhP2A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e58IIt1ijsqKdPNkANstTT
          claim_id: c_HuGE-ggLFEtggkmqmwLwRB
          source_id: s_218Uyqt5MhLQB3mdJxPEGa
          stance: supports
          locator: (乾隆)信陽州志，lgid=868520：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_218Uyqt5MhLQB3mdJxPEGa
            source_type: api_record
            title: 中国历代人物传记资料库：王濟民（CBDB 557757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557757&o=json
            external_identifier: CBDB:557757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.683Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BVo3P1rTLnR5yWXE7paCRv
        status: active
        display_name: 王濟民
        merged_into_person_id: null
  children: []
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
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BVo3P1rTLnR5yWXE7paCRv | 王濟民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 557758）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557758&o=json)
- [中国历代人物传记资料库：王濟民（CBDB 557757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557757&o=json)
