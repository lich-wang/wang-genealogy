---
schema: wang-person/v1
id: p_Zppn462BPbELVFrEbxoebn
status: active
merged_into: null
display_name: 王寧
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VjMZtRFE3YjxmxmsigXAa8
        subject_person_id: p_Zppn462BPbELVFrEbxoebn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E5HVmXRznK1PQ2D7oBqEjD
          claim_id: c_VjMZtRFE3YjxmxmsigXAa8
          source_id: s_ssgHDezP3MRaWzioC4coie
          stance: supports
          locator: CBDB:273484
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273484）
          source: &a1
            id: s_ssgHDezP3MRaWzioC4coie
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 273484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273484&o=json
            external_identifier: CBDB:273484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bo87SHfyf8Gnht8kpMbUC3
        subject_person_id: p_Zppn462BPbELVFrEbxoebn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧，明人物。弘治十八年進士，籍贯瀘州。（中国历代人物传记资料库 CBDB 273484）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-wpTBZxWWivf1p2QEsPM6-
          claim_id: c_Bo87SHfyf8Gnht8kpMbUC3
          source_id: s_ssgHDezP3MRaWzioC4coie
          stance: supports
          locator: CBDB:273484
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cHFUt2qLsaLCePjNEBzl1H
        subject_person_id: p_ujsEdeJcxM64Nah2LiaMGR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Zppn462BPbELVFrEbxoebn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D64eGkyRBUomH4Ieeop754
          claim_id: c_cHFUt2qLsaLCePjNEBzl1H
          source_id: s_GDXN29tpj6hZrhrWetujsY
          stance: supports
          locator: CBDB：兄弟 王忠（201503）之父／母 王廷賓
          quotation: null
          interpretation_note: 由兄弟关系推断：王寧 与 王忠 为同胞（CBDB 记「兄」），王忠 之父／母即 王寧 之父／母。
          source:
            id: s_GDXN29tpj6hZrhrWetujsY
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 273484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273484&o=json
            external_identifier: CBDB:273484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ujsEdeJcxM64Nah2LiaMGR
        status: active
        display_name: 王廷賓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Jq1dkVf1lOlqpF_ql9lcbo
        subject_person_id: p_2Fu5oCqGVWkUyo9rZxcW5L
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Zppn462BPbELVFrEbxoebn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hh094Cp7vQka4nM1mXSZ6N
          claim_id: c_Jq1dkVf1lOlqpF_ql9lcbo
          source_id: s_GDXN29tpj6hZrhrWetujsY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201503 王忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GDXN29tpj6hZrhrWetujsY
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 273484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273484&o=json
            external_identifier: CBDB:273484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2Fu5oCqGVWkUyo9rZxcW5L
        status: active
        display_name: 王忠
        merged_into_person_id: null
---

# 王寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寧 | accepted |
| bio.summary | 王寧，明人物。弘治十八年進士，籍贯瀘州。（中国历代人物传记资料库 CBDB 273484） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ujsEdeJcxM64Nah2LiaMGR | 王廷賓 | accepted |
| other | p_2Fu5oCqGVWkUyo9rZxcW5L | 王忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寧（CBDB 273484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273484&o=json)
