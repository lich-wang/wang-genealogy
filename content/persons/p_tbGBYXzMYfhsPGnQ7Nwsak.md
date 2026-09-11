---
schema: wang-person/v1
id: p_tbGBYXzMYfhsPGnQ7Nwsak
status: active
merged_into: null
display_name: 王秀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W6y4QA1P569gphTjrhiJpP
        subject_person_id: p_tbGBYXzMYfhsPGnQ7Nwsak
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uaDDYi6qdbBMiNvQYKPQv6
          claim_id: c_W6y4QA1P569gphTjrhiJpP
          source_id: s_xZ49FMyobwstJVMd3Utp8N
          stance: supports
          locator: CBDB:148780
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（148780）
          source: &a1
            id: s_xZ49FMyobwstJVMd3Utp8N
            source_type: api_record
            title: 中国历代人物传记资料库：王秀（CBDB 148780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148780&o=json
            external_identifier: CBDB:148780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.769Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jL2Ucwt4iAEuhyAG6gsjiZ
        subject_person_id: p_tbGBYXzMYfhsPGnQ7Nwsak
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
        - id: cs_NrupmBf9Z8NhSPMiaNxgm4
          claim_id: c_jL2Ucwt4iAEuhyAG6gsjiZ
          source_id: s_xZ49FMyobwstJVMd3Utp8N
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
        id: c_cI1Z3O47Zz7DniDJpwfSkW
        subject_person_id: p_tbGBYXzMYfhsPGnQ7Nwsak
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JWBQhCTmKCJJLPu2N4paD1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vHfgy84Mxi2cQcxpMr74x2
          claim_id: c_cI1Z3O47Zz7DniDJpwfSkW
          source_id: s_CmFTvNs7aDZ2LVEcvzwrko
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yifeng 1：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CmFTvNs7aDZ2LVEcvzwrko
            source_type: api_record
            title: 中国历代人物传记资料库：王愛（CBDB 139691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139691&o=json
            external_identifier: CBDB:139691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.441Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JWBQhCTmKCJJLPu2N4paD1
        status: active
        display_name: 王愛
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秀 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_JWBQhCTmKCJJLPu2N4paD1 | 王愛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王愛（CBDB 139691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139691&o=json)
- [中国历代人物传记资料库：王秀（CBDB 148780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148780&o=json)
