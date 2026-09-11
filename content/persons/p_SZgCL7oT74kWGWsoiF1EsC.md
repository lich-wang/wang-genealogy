---
schema: wang-person/v1
id: p_SZgCL7oT74kWGWsoiF1EsC
status: active
merged_into: null
display_name: 胡氏
revision: 1
cbdb_id: 38718
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GqutQEECHpvocI_9g9SKMx
        subject_person_id: p_SZgCL7oT74kWGWsoiF1EsC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 胡氏，宋人物。曾任郡夫人。（中国历代人物传记资料库 CBDB 38718）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S4x6KUax4oXDsxNty97ke1
          claim_id: c_GqutQEECHpvocI_9g9SKMx
          source_id: s_Zs674kxNKRACaOEjV3iDe4
          stance: supports
          locator: CBDB:38718
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Zs674kxNKRACaOEjV3iDe4
            source_type: api_record
            title: 中国历代人物传记资料库：胡氏(王存妻)（CBDB 38718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38718&o=json
            external_identifier: CBDB:38718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XY4OvOd3njg9naUF7QM_xM
        subject_person_id: p_SZgCL7oT74kWGWsoiF1EsC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 胡氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_35VV2RBahjYJGwp0jze1ig
          claim_id: c_XY4OvOd3njg9naUF7QM_xM
          source_id: s_Zs674kxNKRACaOEjV3iDe4
          stance: supports
          locator: CBDB:38718
          quotation: null
          interpretation_note: CBDB 明确记录的王存配偶
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
        id: c_xlLvbtTdcfxG4W0wJZVUK1
        subject_person_id: p_fAKCeM7BDQhgJG14kfc4mW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_SZgCL7oT74kWGWsoiF1EsC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TrUSUf3dkwCL1DzwBfbbCZ
          claim_id: c_xlLvbtTdcfxG4W0wJZVUK1
          source_id: s_Zs674kxNKRACaOEjV3iDe4
          stance: supports
          locator: 宋人傳記資料索引(電子版)，616;617：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fAKCeM7BDQhgJG14kfc4mW
        status: active
        display_name: 王存
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 胡氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 胡氏，宋人物。曾任郡夫人。（中国历代人物传记资料库 CBDB 38718） | accepted |
| name.primary | 胡氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_fAKCeM7BDQhgJG14kfc4mW | 王存 | accepted |

## 外部来源

- [中国历代人物传记资料库：胡氏(王存妻)（CBDB 38718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38718&o=json)
