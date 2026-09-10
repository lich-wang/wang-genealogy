---
schema: wang-person/v1
id: p_EoXnHjFHxPjhcD8KsqKTGz
status: active
merged_into: null
display_name: 王訪
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6HtM89vd9R2cZzNn8nNR4m
        subject_person_id: p_EoXnHjFHxPjhcD8KsqKTGz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_632zv8nbA8FT7tU1KP7yrB
          claim_id: c_6HtM89vd9R2cZzNn8nNR4m
          source_id: s_LzuNStv43QZqPKydnn9oqJ
          stance: supports
          locator: CBDB:220117
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（220117）
          source: &a1
            id: s_LzuNStv43QZqPKydnn9oqJ
            source_type: api_record
            title: 中国历代人物传记资料库：王訪（CBDB 220117）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220117&o=json
            external_identifier: CBDB:220117
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.295Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n3npXKr9KpjzhhXF7F5bb6
        subject_person_id: p_EoXnHjFHxPjhcD8KsqKTGz
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
        - id: cs_TsXoWVYPDeHn3Rkb8sXS2K
          claim_id: c_n3npXKr9KpjzhhXF7F5bb6
          source_id: s_LzuNStv43QZqPKydnn9oqJ
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
        id: c_U42WbGqMBWhLZIirIMVRid
        subject_person_id: p_MvdGFnhj1EQnLBNV2b5DR9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EoXnHjFHxPjhcD8KsqKTGz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FWGw7VY6GGpTLcQaNsbvZA
          claim_id: c_U42WbGqMBWhLZIirIMVRid
          source_id: s_dZiEcnZ4AKZh3HXJzDUpCr
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第七十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: &a2
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
      object_person:
        id: p_MvdGFnhj1EQnLBNV2b5DR9
        status: active
        display_name: 王宥
        merged_into_person_id: null
  children:
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
          source: *a2
      object_person:
        id: p_1NRJDMaRvyp9yNoVJiZmjE
        status: active
        display_name: 王慎德
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王訪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訪 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MvdGFnhj1EQnLBNV2b5DR9 | 王宥 | accepted |
| children | p_1NRJDMaRvyp9yNoVJiZmjE | 王慎德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王訪（CBDB 220117）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220117&o=json)
- [中国历代人物传记资料库：王慎德（CBDB 206584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206584&o=json)
