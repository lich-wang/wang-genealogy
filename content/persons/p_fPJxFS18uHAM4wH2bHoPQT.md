---
schema: wang-person/v1
id: p_fPJxFS18uHAM4wH2bHoPQT
status: active
merged_into: null
display_name: 王毅
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tMZQxfDjB1Q95Y3dz3QRkY
        subject_person_id: p_fPJxFS18uHAM4wH2bHoPQT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sHqsghSpFrADnK4AeFFLdu
          claim_id: c_tMZQxfDjB1Q95Y3dz3QRkY
          source_id: s_txHj7A9ZBZBniukpTmrvQL
          stance: supports
          locator: CBDB:167688
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（167688）
          source: &a1
            id: s_txHj7A9ZBZBniukpTmrvQL
            source_type: api_record
            title: 中国历代人物传记资料库：王毅（CBDB 167688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167688&o=json
            external_identifier: CBDB:167688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.993Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GkfoSSeH5dMQxoyA6Ru2iQ
        subject_person_id: p_fPJxFS18uHAM4wH2bHoPQT
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
        - id: cs_vHapjCJ7m1PuKSirNJH8Jr
          claim_id: c_GkfoSSeH5dMQxoyA6Ru2iQ
          source_id: s_txHj7A9ZBZBniukpTmrvQL
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
        id: c_3IAk_d_ZLZ_E5PwcNadXoe
        subject_person_id: p_fPJxFS18uHAM4wH2bHoPQT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7E6gPyjzh8j7LkwEcAWwmH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-rW4ZvSJ3HidS3Q0yZru1t
          claim_id: c_3IAk_d_ZLZ_E5PwcNadXoe
          source_id: s_nVLEsovCk3fqXGYbyog1XR
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nVLEsovCk3fqXGYbyog1XR
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 169430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169430&o=json
            external_identifier: CBDB:169430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7E6gPyjzh8j7LkwEcAWwmH
        status: active
        display_name: 王清
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_6S7PiF5Kwk5KeckwTY1UiE
        subject_person_id: p_fPJxFS18uHAM4wH2bHoPQT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yw8Ldi3TsRvFBDPd73FPjN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cLf1jIa-u0xRzxWTBgA_YB
          claim_id: c_6S7PiF5Kwk5KeckwTY1UiE
          source_id: s_txHj7A9ZBZBniukpTmrvQL
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dazhong75：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yw8Ldi3TsRvFBDPd73FPjN
        status: active
        display_name: 王玉
        merged_into_person_id: null
  other: []
---

# 王毅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王毅 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7E6gPyjzh8j7LkwEcAWwmH | 王清 | accepted |
| descendants | p_yw8Ldi3TsRvFBDPd73FPjN | 王玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王清（CBDB 169430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169430&o=json)
- [中国历代人物传记资料库：王毅（CBDB 167688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167688&o=json)
