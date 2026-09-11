---
schema: wang-person/v1
id: p_1NRJDMaRvyp9yNoVJiZmjE
status: active
merged_into: null
display_name: 王慎德
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Crwr7XiFWjWFrLBZhjMJuR
        subject_person_id: p_1NRJDMaRvyp9yNoVJiZmjE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ynt2s5R76uj23Ga7WZv9JM
          claim_id: c_Crwr7XiFWjWFrLBZhjMJuR
          source_id: s_dZiEcnZ4AKZh3HXJzDUpCr
          stance: supports
          locator: CBDB:206584
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206584）
          source: &a1
            id: s_dZiEcnZ4AKZh3HXJzDUpCr
            source_type: api_record
            title: 中国历代人物传记资料库：王慎德（CBDB 206584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206584&o=json
            external_identifier: CBDB:206584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.897Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aGTZjmR9YU7U6S9VrrdcCQ
        subject_person_id: p_1NRJDMaRvyp9yNoVJiZmjE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1552年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4aqF9PppENJ9CqHVGQ5M5R
          claim_id: c_aGTZjmR9YU7U6S9VrrdcCQ
          source_id: s_dZiEcnZ4AKZh3HXJzDUpCr
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
        id: c_RV3NpBnB4pXLkEYZeshKPi
        subject_person_id: p_1NRJDMaRvyp9yNoVJiZmjE
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
        - id: cs_bAtEAzYkKJfEvFA57g2HWZ
          claim_id: c_RV3NpBnB4pXLkEYZeshKPi
          source_id: s_dZiEcnZ4AKZh3HXJzDUpCr
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
        id: c_fxsiWkDxW6X4a0z0LU51J5
        subject_person_id: p_EoXnHjFHxPjhcD8KsqKTGz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1NRJDMaRvyp9yNoVJiZmjE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Usaqbo1FpKAkP23JyihSCR
          claim_id: c_fxsiWkDxW6X4a0z0LU51J5
          source_id: s_dZiEcnZ4AKZh3HXJzDUpCr
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第七十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EoXnHjFHxPjhcD8KsqKTGz
        status: active
        display_name: 王訪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_n5jbj2Rw53DXcyXoY5ajgY
        subject_person_id: p_MvdGFnhj1EQnLBNV2b5DR9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1NRJDMaRvyp9yNoVJiZmjE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ImgGncqHbF7vp9XuRHd_kc
          claim_id: c_n5jbj2Rw53DXcyXoY5ajgY
          source_id: s_Ru35Z2PyYiCCFegVKc97x5
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第七十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ru35Z2PyYiCCFegVKc97x5
            source_type: api_record
            title: 中国历代人物传记资料库：王宥（CBDB 220115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220115&o=json
            external_identifier: CBDB:220115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MvdGFnhj1EQnLBNV2b5DR9
        status: active
        display_name: 王宥
        merged_into_person_id: null
    - claim:
        id: c_5LTIkITBPxGcugHuOZCF2t
        subject_person_id: p_W1u9oKcXenmwqBgULRmE5G
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1NRJDMaRvyp9yNoVJiZmjE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TGFEZHCLioqEquwqMoo6ww
          claim_id: c_5LTIkITBPxGcugHuOZCF2t
          source_id: s_ce7Tt8NwmsP3FRaVrdtSpH
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第七十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ce7Tt8NwmsP3FRaVrdtSpH
            source_type: api_record
            title: 中国历代人物传记资料库：王孟璿（CBDB 220114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220114&o=json
            external_identifier: CBDB:220114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_W1u9oKcXenmwqBgULRmE5G
        status: active
        display_name: 王孟璿
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王慎德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慎德 | accepted |
| birth.date | 1552年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EoXnHjFHxPjhcD8KsqKTGz | 王訪 | accepted |
| ancestors | p_MvdGFnhj1EQnLBNV2b5DR9 | 王宥 | accepted |
| ancestors | p_W1u9oKcXenmwqBgULRmE5G | 王孟璿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孟璿（CBDB 220114）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220114&o=json)
- [中国历代人物传记资料库：王慎德（CBDB 206584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206584&o=json)
- [中国历代人物传记资料库：王宥（CBDB 220115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220115&o=json)
