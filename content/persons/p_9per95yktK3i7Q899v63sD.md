---
schema: wang-person/v1
id: p_9per95yktK3i7Q899v63sD
status: active
merged_into: null
display_name: 王士龍
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_exFndWBCBHNbUT11sSnkW1
        subject_person_id: p_9per95yktK3i7Q899v63sD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MVaGcZmZWFMRB2JBYs2FBU
          claim_id: c_exFndWBCBHNbUT11sSnkW1
          source_id: s_4wxdhmSEzFA3XfgE9zZGJM
          stance: supports
          locator: CBDB:702863
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（702863）
          source: &a1
            id: s_4wxdhmSEzFA3XfgE9zZGJM
            source_type: api_record
            title: 中国历代人物传记资料库：王士龍（CBDB 702863）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702863&o=json
            external_identifier: CBDB:702863
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.815Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jhWYuseoURgGRUmFPWPFhD
        subject_person_id: p_9per95yktK3i7Q899v63sD
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
        - id: cs_vzu7RGuJY1nY8UEh9SDcm7
          claim_id: c_jhWYuseoURgGRUmFPWPFhD
          source_id: s_4wxdhmSEzFA3XfgE9zZGJM
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
        id: c_8hr4hrYq_PgERbeps3bU4-
        subject_person_id: p_74Qzh7hdC512soxk6XYfNt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9per95yktK3i7Q899v63sD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NJnMc5Tk4Ok7eDuoLzDNyu
          claim_id: c_8hr4hrYq_PgERbeps3bU4-
          source_id: s_UsVrp5n2y8sTGy2FoXs3bM
          stance: supports
          locator: "元和唯亭志: 二十卷，lgid=179030：子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UsVrp5n2y8sTGy2FoXs3bM
            source_type: api_record
            title: 中国历代人物传记资料库：王治（CBDB 702862）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702862&o=json
            external_identifier: CBDB:702862
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.814Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_74Qzh7hdC512soxk6XYfNt
        status: active
        display_name: 王治
        merged_into_person_id: null
  children:
    - claim:
        id: c_lK0ZVu_GiLrPFu4XeR32hi
        subject_person_id: p_9per95yktK3i7Q899v63sD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6BLmMzExpHB3EP6zKJh8SE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-XIG-BRD97zFLhT8VroIYM
          claim_id: c_lK0ZVu_GiLrPFu4XeR32hi
          source_id: s_gaztM4GMiEKreNCSo69iEP
          stance: supports
          locator: "元和唯亭志: 二十卷，lgid=179032：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gaztM4GMiEKreNCSo69iEP
            source_type: api_record
            title: 中国历代人物传记资料库：王時亨（CBDB 702873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702873&o=json
            external_identifier: CBDB:702873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.816Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6BLmMzExpHB3EP6zKJh8SE
        status: active
        display_name: 王時亨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士龍 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_74Qzh7hdC512soxk6XYfNt | 王治 | accepted |
| children | p_6BLmMzExpHB3EP6zKJh8SE | 王時亨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時亨（CBDB 702873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702873&o=json)
- [中国历代人物传记资料库：王士龍（CBDB 702863）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702863&o=json)
- [中国历代人物传记资料库：王治（CBDB 702862）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702862&o=json)
