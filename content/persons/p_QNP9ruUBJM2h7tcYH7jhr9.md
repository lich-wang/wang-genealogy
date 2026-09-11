---
schema: wang-person/v1
id: p_QNP9ruUBJM2h7tcYH7jhr9
status: active
merged_into: null
display_name: 王珏
revision: 2
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

## 外部来源

- [中国历代人物传记资料库：王珏（CBDB 208722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208722&o=json)
