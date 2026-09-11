---
schema: wang-person/v1
id: p_SW2vBS5Q2Gs57G32UxYrWC
status: active
merged_into: null
display_name: 王倫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zUVZyquE7W38dABDYczDM7
        subject_person_id: p_SW2vBS5Q2Gs57G32UxYrWC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HRV4ZkP2paJDVsDC44PDkn
          claim_id: c_zUVZyquE7W38dABDYczDM7
          source_id: s_FFpWizEZBYbtmqkDEztZ51
          stance: supports
          locator: CBDB:224054
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（224054）
          source: &a1
            id: s_FFpWizEZBYbtmqkDEztZ51
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 224054）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224054&o=json
            external_identifier: CBDB:224054
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.422Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oMUNWwAiXLq1PNEqtsMeWm
        subject_person_id: p_SW2vBS5Q2Gs57G32UxYrWC
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
        - id: cs_G9d1NPBRxZoEUaCLDrhZXe
          claim_id: c_oMUNWwAiXLq1PNEqtsMeWm
          source_id: s_FFpWizEZBYbtmqkDEztZ51
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
        id: c_6jnZDkw8jYcpDKBYN5TYZ2
        subject_person_id: p_SW2vBS5Q2Gs57G32UxYrWC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DyAEKNuW84v9PAan2XrKHV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zUlUyPrpbMYdZE19ShfJ24
          claim_id: c_6jnZDkw8jYcpDKBYN5TYZ2
          source_id: s_WRsNJN9orzVPHqFQwefU8e
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第一百一十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WRsNJN9orzVPHqFQwefU8e
            source_type: api_record
            title: 中国历代人物传记资料库：王遵訓（CBDB 206844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206844&o=json
            external_identifier: CBDB:206844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.907Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DyAEKNuW84v9PAan2XrKHV
        status: active
        display_name: 王遵訓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王倫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DyAEKNuW84v9PAan2XrKHV | 王遵訓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王倫（CBDB 224054）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224054&o=json)
- [中国历代人物传记资料库：王遵訓（CBDB 206844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206844&o=json)
