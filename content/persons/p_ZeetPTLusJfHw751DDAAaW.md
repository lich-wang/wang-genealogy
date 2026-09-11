---
schema: wang-person/v1
id: p_ZeetPTLusJfHw751DDAAaW
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 259343
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aIxOdO3O2TX9FFC3-rO2fN
        subject_person_id: p_ZeetPTLusJfHw751DDAAaW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 259343）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YDrxo-acje5ybr8IQDIjB8
          claim_id: c_aIxOdO3O2TX9FFC3-rO2fN
          source_id: s_2BbzFTAal2pyxRfsh6lto9
          stance: supports
          locator: CBDB:259343
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2BbzFTAal2pyxRfsh6lto9
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王濟妻)（CBDB 259343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259343&o=json
            external_identifier: CBDB:259343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZIOnKBI-ZP3QhnUUraeb6A
        subject_person_id: p_ZeetPTLusJfHw751DDAAaW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z4OuD2fnT1qLS85OYyaBW9
          claim_id: c_ZIOnKBI-ZP3QhnUUraeb6A
          source_id: s_2BbzFTAal2pyxRfsh6lto9
          stance: supports
          locator: CBDB:259343
          quotation: null
          interpretation_note: CBDB 明确记录的王濟配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_KQdgrCNIngNdj3P-NEu1Gu
        subject_person_id: p_GXh7yMNfU8L5d25yyNJsVi
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ZeetPTLusJfHw751DDAAaW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cpOyMyzcbn4-jFr7zFLayP
          claim_id: c_KQdgrCNIngNdj3P-NEu1Gu
          source_id: s_2BbzFTAal2pyxRfsh6lto9
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第七十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GXh7yMNfU8L5d25yyNJsVi
        status: active
        display_name: 王濟
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李氏，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 259343） | accepted |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_GXh7yMNfU8L5d25yyNJsVi | 王濟 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王濟妻)（CBDB 259343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259343&o=json)
