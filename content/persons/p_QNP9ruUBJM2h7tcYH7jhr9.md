---
schema: wang-person/v1
id: p_QNP9ruUBJM2h7tcYH7jhr9
status: active
merged_into: null
display_name: 王珏
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_paCmcrgwdfGiAyEifRH5mD
        subject_person_id: p_QNP9ruUBJM2h7tcYH7jhr9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9FdsQ4bYTu48EQPGH1nDu4
          claim_id: c_paCmcrgwdfGiAyEifRH5mD
          source_id: s_Y5ptC4D9TXF96Eu4GsujwZ
          stance: supports
          locator: CBDB:208722
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208722）
          source: &a1
            id: s_Y5ptC4D9TXF96Eu4GsujwZ
            source_type: api_record
            title: 中国历代人物传记资料库：王珏（CBDB 208722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208722&o=json
            external_identifier: CBDB:208722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.956Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UD2zs3wM6JVN4zSUH7Anj3
        subject_person_id: p_QNP9ruUBJM2h7tcYH7jhr9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珏，明人物。隆慶五年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 208722）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XMs3Jc6jlfl9tkj8HTLNIH
          claim_id: c_UD2zs3wM6JVN4zSUH7Anj3
          source_id: s_Y5ptC4D9TXF96Eu4GsujwZ
          stance: supports
          locator: CBDB:208722
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_T9LznVGksfopKc858l1_DU
        subject_person_id: p_QNP9ruUBJM2h7tcYH7jhr9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HKCnizxAApK3fsPh2jp46Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I6iIsLecN59ko1Vtd3wra7
          claim_id: c_T9LznVGksfopKc858l1_DU
          source_id: s_Y5ptC4D9TXF96Eu4GsujwZ
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第二甲第七十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HKCnizxAApK3fsPh2jp46Q
        status: active
        display_name: 王敎
        merged_into_person_id: null
    - claim:
        id: c_ZLzsXQ6C78kqTCD_aoi-LK
        subject_person_id: p_QNP9ruUBJM2h7tcYH7jhr9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pEHuM9m2MNywCFnHps1kVN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NmMv_kM7GDzPShZmSSJh3E
          claim_id: c_ZLzsXQ6C78kqTCD_aoi-LK
          source_id: s_VdQpO_NL-x2c85R9XNd8-K
          stance: supports
          locator: CBDB：兄弟 王敎（126675）之父／母 王珏
          quotation: null
          interpretation_note: 由兄弟关系推断：王敬 与 王敎 为同胞（CBDB 记「弟」），王敎 之父／母即 王敬 之父／母。
          source:
            id: s_VdQpO_NL-x2c85R9XNd8-K
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 208727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208727&o=json
            external_identifier: CBDB:208727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pEHuM9m2MNywCFnHps1kVN
        status: active
        display_name: 王敬
        merged_into_person_id: null
    - claim:
        id: c_UW1kPUDmtUC7zYH3hUaKTK
        subject_person_id: p_QNP9ruUBJM2h7tcYH7jhr9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sh3n735gZ5aRvCNgDjoZJa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VsxD2lUs5cPvQ01MNSySpK
          claim_id: c_UW1kPUDmtUC7zYH3hUaKTK
          source_id: s_8YHCZOQd1tqG0PhCYQnRwD
          stance: supports
          locator: CBDB：兄弟 王敎（126675）之父／母 王珏
          quotation: null
          interpretation_note: 由兄弟关系推断：王政 与 王敎 为同胞（CBDB 记「弟」），王敎 之父／母即 王政 之父／母。
          source:
            id: s_8YHCZOQd1tqG0PhCYQnRwD
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 208725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208725&o=json
            external_identifier: CBDB:208725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sh3n735gZ5aRvCNgDjoZJa
        status: active
        display_name: 王政
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珏 | accepted |
| bio.summary | 王珏，明人物。隆慶五年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 208722） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HKCnizxAApK3fsPh2jp46Q | 王敎 | accepted |
| children | p_pEHuM9m2MNywCFnHps1kVN | 王敬 | accepted |
| children | p_sh3n735gZ5aRvCNgDjoZJa | 王政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬（CBDB 208727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208727&o=json)
- [中国历代人物传记资料库：王珏（CBDB 208722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208722&o=json)
- [中国历代人物传记资料库：王政（CBDB 208725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208725&o=json)
