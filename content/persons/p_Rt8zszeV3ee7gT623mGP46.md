---
schema: wang-person/v1
id: p_Rt8zszeV3ee7gT623mGP46
status: active
merged_into: null
display_name: 王承祥
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ceMAn4NkgZNC1Dyk2VRvzb
        subject_person_id: p_Rt8zszeV3ee7gT623mGP46
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1bm32C5GNbmLYTXvj6sKwu
          claim_id: c_ceMAn4NkgZNC1Dyk2VRvzb
          source_id: s_LtkxDWZVxbk8hKaa71BMa1
          stance: supports
          locator: CBDB:264048
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264048）
          source: &a1
            id: s_LtkxDWZVxbk8hKaa71BMa1
            source_type: api_record
            title: 中国历代人物传记资料库：王承祥（CBDB 264048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264048&o=json
            external_identifier: CBDB:264048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.632Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BePEizPdQ3jC42kr5YdpQP
        subject_person_id: p_Rt8zszeV3ee7gT623mGP46
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承祥，明人物。弘治六年進士，籍贯三原，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 264048）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9pqANt6vS6dpN48ghs1p17
          claim_id: c_BePEizPdQ3jC42kr5YdpQP
          source_id: s_LtkxDWZVxbk8hKaa71BMa1
          stance: supports
          locator: CBDB:264048
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PlaOK-v-kwb-SP3IULbI90
        subject_person_id: p_e622FY31yMzCRE9JqUsUSG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Rt8zszeV3ee7gT623mGP46
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9dCrBEC12oiTUP5Ft9PemV
          claim_id: c_PlaOK-v-kwb-SP3IULbI90
          source_id: s_LtkxDWZVxbk8hKaa71BMa1
          stance: supports
          locator: 王文恪公集:三十六卷，29.5a：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_e622FY31yMzCRE9JqUsUSG
        status: active
        display_name: 王恕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承祥 | accepted |
| bio.summary | 王承祥，明人物。弘治六年進士，籍贯三原，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 264048） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_e622FY31yMzCRE9JqUsUSG | 王恕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承祥（CBDB 264048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264048&o=json)
