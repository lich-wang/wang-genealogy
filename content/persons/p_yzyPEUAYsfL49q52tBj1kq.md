---
schema: wang-person/v1
id: p_yzyPEUAYsfL49q52tBj1kq
status: active
merged_into: null
display_name: 王用中
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dL92FyLqkTEE7KEWPuZXJb
        subject_person_id: p_yzyPEUAYsfL49q52tBj1kq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G9L1HsB1ze7knEc55C4xja
          claim_id: c_dL92FyLqkTEE7KEWPuZXJb
          source_id: s_1SGhdNvrpL4cDvNZ7h9REZ
          stance: supports
          locator: CBDB:221766
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221766）
          source: &a1
            id: s_1SGhdNvrpL4cDvNZ7h9REZ
            source_type: api_record
            title: 中国历代人物传记资料库：王用中（CBDB 221766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221766&o=json
            external_identifier: CBDB:221766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.338Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iLv6b3H16Zm2fTtEU3MGTq
        subject_person_id: p_yzyPEUAYsfL49q52tBj1kq
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
        - id: cs_mz6x1hNBPFmXMK29wGSqwR
          claim_id: c_iLv6b3H16Zm2fTtEU3MGTq
          source_id: s_1SGhdNvrpL4cDvNZ7h9REZ
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
        id: c_Sxb76yu8h8oW7scHZ_lnie
        subject_person_id: p_yzyPEUAYsfL49q52tBj1kq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_88N8F7QC67BDANQ41w4EaZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZQ5zGod9E3ojBXLlOC954U
          claim_id: c_Sxb76yu8h8oW7scHZ_lnie
          source_id: s_1SGhdNvrpL4cDvNZ7h9REZ
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百一十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_88N8F7QC67BDANQ41w4EaZ
        status: active
        display_name: 王顯仁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王用中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用中 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_88N8F7QC67BDANQ41w4EaZ | 王顯仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用中（CBDB 221766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221766&o=json)
