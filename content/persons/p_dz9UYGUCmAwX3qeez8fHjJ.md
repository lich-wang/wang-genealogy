---
schema: wang-person/v1
id: p_dz9UYGUCmAwX3qeez8fHjJ
status: active
merged_into: null
display_name: 王俸
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uNZb8bQDA41LzCQUseuUSJ
        subject_person_id: p_dz9UYGUCmAwX3qeez8fHjJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rijFaWL8JwLh56GBSHiNKM
          claim_id: c_uNZb8bQDA41LzCQUseuUSJ
          source_id: s_oo6ub3W8xdQgnYNasq7HiJ
          stance: supports
          locator: CBDB:201386
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201386）
          source: &a1
            id: s_oo6ub3W8xdQgnYNasq7HiJ
            source_type: api_record
            title: 中国历代人物传记资料库：王俸（CBDB 201386）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201386&o=json
            external_identifier: CBDB:201386
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.675Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2XM2h9FWPT1GSbwnHgcNDw
        subject_person_id: p_dz9UYGUCmAwX3qeez8fHjJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1467年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wDZ411Cw14VB888tDZMiKq
          claim_id: c_2XM2h9FWPT1GSbwnHgcNDw
          source_id: s_oo6ub3W8xdQgnYNasq7HiJ
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
        id: c_iVz2XgiqBLgAhd3GyibNP7
        subject_person_id: p_dz9UYGUCmAwX3qeez8fHjJ
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
        - id: cs_9HJ4jvf4eWgNV73W5QXeo1
          claim_id: c_iVz2XgiqBLgAhd3GyibNP7
          source_id: s_oo6ub3W8xdQgnYNasq7HiJ
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
        id: c_I4xlr5wW82AvFxeQvUl74_
        subject_person_id: p_zTj1eNcAG3BPvbBjiJxYtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dz9UYGUCmAwX3qeez8fHjJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ys_55hmnhOxoTKtAbBEtKZ
          claim_id: c_I4xlr5wW82AvFxeQvUl74_
          source_id: s_L7dy28x2pLVjMVBVHWsN34
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第七十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_L7dy28x2pLVjMVBVHWsN34
            source_type: api_record
            title: 中国历代人物传记资料库：王文琮（CBDB 271492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271492&o=json
            external_identifier: CBDB:271492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_zTj1eNcAG3BPvbBjiJxYtN
        status: active
        display_name: 王文琮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_88swZHcB-mBLuM1wdvIaeg
        subject_person_id: p_97newzyhq7uCYabtQtfnFW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dz9UYGUCmAwX3qeez8fHjJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iVSKP5goOtzfi4LMAzkYwf
          claim_id: c_88swZHcB-mBLuM1wdvIaeg
          source_id: s_rchjDGUEbp3vQgcurWNEjv
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第七十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rchjDGUEbp3vQgcurWNEjv
            source_type: api_record
            title: 中国历代人物传记资料库：王祥（CBDB 271491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271491&o=json
            external_identifier: CBDB:271491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.874Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_97newzyhq7uCYabtQtfnFW
        status: active
        display_name: 王祥
        merged_into_person_id: null
    - claim:
        id: c_8wXgiQQie0lG2CaoMwKg8b
        subject_person_id: p_KMpfjZPiJGQHC5a6Q1PYVp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dz9UYGUCmAwX3qeez8fHjJ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x4GN-ATpptCyrlHy0aKeDU
          claim_id: c_8wXgiQQie0lG2CaoMwKg8b
          source_id: s_1oaKuud9fgezFzDZQB28Lf
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第七十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1oaKuud9fgezFzDZQB28Lf
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 271490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271490&o=json
            external_identifier: CBDB:271490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.874Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KMpfjZPiJGQHC5a6Q1PYVp
        status: active
        display_name: 王敬
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王俸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俸 | accepted |
| birth.date | 1467年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zTj1eNcAG3BPvbBjiJxYtN | 王文琮 | accepted |
| ancestors | p_97newzyhq7uCYabtQtfnFW | 王祥 | accepted |
| ancestors | p_KMpfjZPiJGQHC5a6Q1PYVp | 王敬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俸（CBDB 201386）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201386&o=json)
- [中国历代人物传记资料库：王敬（CBDB 271490）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271490&o=json)
- [中国历代人物传记资料库：王文琮（CBDB 271492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271492&o=json)
- [中国历代人物传记资料库：王祥（CBDB 271491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271491&o=json)
