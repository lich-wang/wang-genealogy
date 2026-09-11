---
schema: wang-person/v1
id: p_vJEZ9Szh9s5FpFkeZXoWPH
status: active
merged_into: null
display_name: 王維綱
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jEv3wRgCGQ4Py2gzXgZNYL
        subject_person_id: p_vJEZ9Szh9s5FpFkeZXoWPH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wiWVwJNZjt6wg1FW8S7A6p
          claim_id: c_jEv3wRgCGQ4Py2gzXgZNYL
          source_id: s_KBYerGdSi3iyaXdoCuXVm9
          stance: supports
          locator: CBDB:694313
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694313）
          source: &a1
            id: s_KBYerGdSi3iyaXdoCuXVm9
            source_type: api_record
            title: 中国历代人物传记资料库：王維綱（CBDB 694313）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694313&o=json
            external_identifier: CBDB:694313
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.521Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M4CSWDT6EoJ68N6BL7zUdY
        subject_person_id: p_vJEZ9Szh9s5FpFkeZXoWPH
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
        - id: cs_fb4jsP3jJR1voRL4YnhVrR
          claim_id: c_M4CSWDT6EoJ68N6BL7zUdY
          source_id: s_KBYerGdSi3iyaXdoCuXVm9
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
        id: c_qpyR9Kxzu2QTuXU9N8O5Ys
        subject_person_id: p_SzZzqtcWVHRpdQpET7gHaa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vJEZ9Szh9s5FpFkeZXoWPH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hSckyZGBWOxm9O_IG4fFah
          claim_id: c_qpyR9Kxzu2QTuXU9N8O5Ys
          source_id: s_Y8TJFe4gJyK2cThGYTgE2Y
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=294040：子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Y8TJFe4gJyK2cThGYTgE2Y
            source_type: api_record
            title: 中国历代人物传记资料库：王會（CBDB 694314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694314&o=json
            external_identifier: CBDB:694314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.670Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SzZzqtcWVHRpdQpET7gHaa
        status: active
        display_name: 王會
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_yJ-wquMRdljRS3HqHsaB4g
        subject_person_id: p_UnMgCiAN82PWUFatFPfQM1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vJEZ9Szh9s5FpFkeZXoWPH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QKoSIf_Kb2igkys3mjvFfU
          claim_id: c_yJ-wquMRdljRS3HqHsaB4g
          source_id: s_DZAmuJs7qzwPkeyC2QmE72
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=294040：孫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DZAmuJs7qzwPkeyC2QmE72
            source_type: api_record
            title: 中国历代人物传记资料库：王鶴齡（CBDB 694315）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694315&o=json
            external_identifier: CBDB:694315
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.671Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UnMgCiAN82PWUFatFPfQM1
        status: active
        display_name: 王鶴齡
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王維綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維綱 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SzZzqtcWVHRpdQpET7gHaa | 王會 | accepted |
| ancestors | p_UnMgCiAN82PWUFatFPfQM1 | 王鶴齡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鶴齡（CBDB 694315）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694315&o=json)
- [中国历代人物传记资料库：王會（CBDB 694314）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694314&o=json)
- [中国历代人物传记资料库：王維綱（CBDB 694313）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694313&o=json)
