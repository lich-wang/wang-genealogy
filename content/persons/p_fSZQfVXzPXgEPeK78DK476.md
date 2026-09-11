---
schema: wang-person/v1
id: p_fSZQfVXzPXgEPeK78DK476
status: active
merged_into: null
display_name: 王浩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q2c3cn1CNGq3LVFCG31G1o
        subject_person_id: p_fSZQfVXzPXgEPeK78DK476
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K6ZA7XuQYaLX1tWSfan8Pn
          claim_id: c_q2c3cn1CNGq3LVFCG31G1o
          source_id: s_dNdWc1mZabt5LJiDUpi9Hr
          stance: supports
          locator: CBDB:35384
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35384）
          source: &a1
            id: s_dNdWc1mZabt5LJiDUpi9Hr
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 35384）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35384&o=json
            external_identifier: CBDB:35384
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PN3QzNBvL3EjqW6YuybrE2
        subject_person_id: p_fSZQfVXzPXgEPeK78DK476
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为金人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BEaNT8YTS9W28javEF3LPs
          claim_id: c_PN3QzNBvL3EjqW6YuybrE2
          source_id: s_dNdWc1mZabt5LJiDUpi9Hr
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
        id: c_DpzbIr-I5r0bJ_UMsxOSXq
        subject_person_id: p_ehqJ7voc9MMuek9ZFfRrZh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fSZQfVXzPXgEPeK78DK476
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2uorlQTgVi-gVOVj72nmH_
          claim_id: c_DpzbIr-I5r0bJ_UMsxOSXq
          source_id: s_dNdWc1mZabt5LJiDUpi9Hr
          stance: supports
          locator: CBDB 双向互证（父 王橫 ⇄ 子 王浩）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_ehqJ7voc9MMuek9ZFfRrZh
        status: active
        display_name: 王橫
        merged_into_person_id: null
  children:
    - claim:
        id: c_ArKAdmUoU8eWnjbS0RrFl7
        subject_person_id: p_fSZQfVXzPXgEPeK78DK476
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3x6krzyjW88CDnt1QP9iWP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HWaivRElXya-8-j9KFy0KC
          claim_id: c_ArKAdmUoU8eWnjbS0RrFl7
          source_id: s_FKGBdA3YZXhmDDe4FzfK65
          stance: supports
          locator: CBDB 双向互证（父 王浩 ⇄ 子 王珪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_FKGBdA3YZXhmDDe4FzfK65
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 35383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35383&o=json
            external_identifier: CBDB:35383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.131Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3x6krzyjW88CDnt1QP9iWP
        status: active
        display_name: 王珪
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王浩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浩 | accepted |
| bio.summary | CBDB 记载为金人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ehqJ7voc9MMuek9ZFfRrZh | 王橫 | accepted |
| children | p_3x6krzyjW88CDnt1QP9iWP | 王珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 35383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35383&o=json)
- [中国历代人物传记资料库：王浩（CBDB 35384）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35384&o=json)
