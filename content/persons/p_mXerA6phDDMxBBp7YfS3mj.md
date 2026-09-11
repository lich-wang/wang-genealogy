---
schema: wang-person/v1
id: p_mXerA6phDDMxBBp7YfS3mj
status: active
merged_into: null
display_name: 王之輔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zym7DGQHnnpzoE2tTFenJ1
        subject_person_id: p_mXerA6phDDMxBBp7YfS3mj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_efRmQXTxuka4ipcubECFxH
          claim_id: c_zym7DGQHnnpzoE2tTFenJ1
          source_id: s_abAtsZZxe726QTfCt7JHbH
          stance: supports
          locator: CBDB:220263
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（220263）
          source: &a1
            id: s_abAtsZZxe726QTfCt7JHbH
            source_type: api_record
            title: 中国历代人物传记资料库：王之輔（CBDB 220263）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220263&o=json
            external_identifier: CBDB:220263
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.299Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h8vwi2kqGH2V2Hb6V82v7s
        subject_person_id: p_mXerA6phDDMxBBp7YfS3mj
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
        - id: cs_i56XzUjb9X1yBmJkVwmut1
          claim_id: c_h8vwi2kqGH2V2Hb6V82v7s
          source_id: s_abAtsZZxe726QTfCt7JHbH
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
        id: c_p28v1fMHp-PUAgzFZb-BHe
        subject_person_id: p_mXerA6phDDMxBBp7YfS3mj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0W5Ne-FogkJ_coE-5oD8Hd
          claim_id: c_p28v1fMHp-PUAgzFZb-BHe
          source_id: s_abAtsZZxe726QTfCt7JHbH
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第八十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UCuWmdu88wkXMEGK9geKmL
        status: active
        display_name: 王象蒙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王之輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之輔 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_UCuWmdu88wkXMEGK9geKmL | 王象蒙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之輔（CBDB 220263）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220263&o=json)
