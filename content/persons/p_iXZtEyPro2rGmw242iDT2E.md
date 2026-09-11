---
schema: wang-person/v1
id: p_iXZtEyPro2rGmw242iDT2E
status: active
merged_into: null
display_name: 王元輔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZQo4oD8RRTwu5JWvH5M4AK
        subject_person_id: p_iXZtEyPro2rGmw242iDT2E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yXCoVEaWJ6RQuJFNSinBqH
          claim_id: c_ZQo4oD8RRTwu5JWvH5M4AK
          source_id: s_GdXJqeJLBcsiMuQUajQ7pP
          stance: supports
          locator: CBDB:572118
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（572118）
          source: &a1
            id: s_GdXJqeJLBcsiMuQUajQ7pP
            source_type: api_record
            title: 中国历代人物传记资料库：王元輔（CBDB 572118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572118&o=json
            external_identifier: CBDB:572118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.885Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ueQMrJy6N6bCcGFPCz5YtC
        subject_person_id: p_iXZtEyPro2rGmw242iDT2E
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
        - id: cs_zSmkPTBVDJ95aCasgddWsg
          claim_id: c_ueQMrJy6N6bCcGFPCz5YtC
          source_id: s_GdXJqeJLBcsiMuQUajQ7pP
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
        id: c_g75cEmOoynrVUm6OAp_mwD
        subject_person_id: p_iXZtEyPro2rGmw242iDT2E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xW26cXrnDrfjVmPooK3pJN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S2HfmsNsIXSs_CIc-ZaQNG
          claim_id: c_g75cEmOoynrVUm6OAp_mwD
          source_id: s_oMYGjRarJMUx3FKLsdwj7P
          stance: supports
          locator: 紹興府志:八十卷，lgid=317109：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oMYGjRarJMUx3FKLsdwj7P
            source_type: api_record
            title: 中国历代人物传记资料库：王之俊（CBDB 572120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572120&o=json
            external_identifier: CBDB:572120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.885Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xW26cXrnDrfjVmPooK3pJN
        status: active
        display_name: 王之俊
        merged_into_person_id: null
    - claim:
        id: c_rWXvCKNqZNeSWLo2Wuo6fh
        subject_person_id: p_iXZtEyPro2rGmw242iDT2E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yBsYCH8S8WAkxxJc931rVw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r8VeAEpcwlvaN8SUuAPTlf
          claim_id: c_rWXvCKNqZNeSWLo2Wuo6fh
          source_id: s_WnSUE1vxF3Y8LtPRDc8eie
          stance: supports
          locator: 紹興府志:八十卷，lgid=317109：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WnSUE1vxF3Y8LtPRDc8eie
            source_type: api_record
            title: 中国历代人物传记资料库：王之翰（CBDB 572119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572119&o=json
            external_identifier: CBDB:572119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.885Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yBsYCH8S8WAkxxJc931rVw
        status: active
        display_name: 王之翰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元輔 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_xW26cXrnDrfjVmPooK3pJN | 王之俊 | accepted |
| children | p_yBsYCH8S8WAkxxJc931rVw | 王之翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元輔（CBDB 572118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572118&o=json)
- [中国历代人物传记资料库：王之翰（CBDB 572119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572119&o=json)
- [中国历代人物传记资料库：王之俊（CBDB 572120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572120&o=json)
