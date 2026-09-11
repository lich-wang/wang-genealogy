---
schema: wang-person/v1
id: p_3vv94kaBWa8sUxdLF8B6cN
status: active
merged_into: null
display_name: 王偉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SrcmGHiJr4GXT1Nr7AJ391
        subject_person_id: p_3vv94kaBWa8sUxdLF8B6cN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VQN5pFuRAUCmHiXCkVTNpJ
          claim_id: c_SrcmGHiJr4GXT1Nr7AJ391
          source_id: s_pYNPwMic5enMTAbLgLaDrN
          stance: supports
          locator: CBDB:67398
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67398）
          source: &a1
            id: s_pYNPwMic5enMTAbLgLaDrN
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 67398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67398&o=json
            external_identifier: CBDB:67398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8EcLoJ7JzvR4pEYW6H1GjV
        subject_person_id: p_3vv94kaBWa8sUxdLF8B6cN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1417年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hbmhH81cayneAFGnc9J5TQ
          claim_id: c_8EcLoJ7JzvR4pEYW6H1GjV
          source_id: s_pYNPwMic5enMTAbLgLaDrN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2ZxW71QrqgJmw9uNxa8hVy
        subject_person_id: p_3vv94kaBWa8sUxdLF8B6cN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1469年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TnDB3riwFLbHu3HNA29fVo
          claim_id: c_2ZxW71QrqgJmw9uNxa8hVy
          source_id: s_pYNPwMic5enMTAbLgLaDrN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ix5QJh54pQPFxYMpFNUeXg
        subject_person_id: p_3vv94kaBWa8sUxdLF8B6cN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偉（1417年—1469年），明人物。明清進士進士，籍贯攸縣，入仕進士，曾任兵部右侍郎、兵部職方司郎中、工部右侍郎。（中国历代人物传记资料库 CBDB 67398）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Koi_eIiLgZ8Rc6yAJlYq0W
          claim_id: c_ix5QJh54pQPFxYMpFNUeXg
          source_id: s_pYNPwMic5enMTAbLgLaDrN
          stance: supports
          locator: CBDB:67398
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__3jzRE2t11pX2b1dR86peQ
        subject_person_id: p_qrB9yk468HAt4XCx39fKAA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3vv94kaBWa8sUxdLF8B6cN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G1V_IYqjix71FThVP12BQU
          claim_id: c__3jzRE2t11pX2b1dR86peQ
          source_id: s_pYNPwMic5enMTAbLgLaDrN
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11008：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qrB9yk468HAt4XCx39fKAA
        status: active
        display_name: 王伯靈
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王偉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偉 | accepted |
| birth.date | 1417年 | accepted |
| death.date | 1469年 | accepted |
| bio.summary | 王偉（1417年—1469年），明人物。明清進士進士，籍贯攸縣，入仕進士，曾任兵部右侍郎、兵部職方司郎中、工部右侍郎。（中国历代人物传记资料库 CBDB 67398） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qrB9yk468HAt4XCx39fKAA | 王伯靈 | accepted |

## 外部来源

- [中国历代人物传记资料库：王偉（CBDB 67398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67398&o=json)
