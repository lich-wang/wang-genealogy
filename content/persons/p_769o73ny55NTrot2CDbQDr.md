---
schema: wang-person/v1
id: p_769o73ny55NTrot2CDbQDr
status: active
merged_into: null
display_name: 淳于氏
revision: 1
cbdb_id: 146412
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xG-JEDAW8Bn25ePrfWSq0t
        subject_person_id: p_769o73ny55NTrot2CDbQDr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 淳于氏，史料所见人物。本项目依据《中国历代人物传记资料库：淳于氏(王仲妻)（CBDB 146412）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PnYW_v2vOUK15eyT5SncVR
          claim_id: c_xG-JEDAW8Bn25ePrfWSq0t
          source_id: s_xQRzar5cU94ilG_gPV6uJ1
          stance: supports
          locator: CBDB:146412
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_xQRzar5cU94ilG_gPV6uJ1
            source_type: api_record
            title: 中国历代人物传记资料库：淳于氏(王仲妻)（CBDB 146412）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146412&o=json
            external_identifier: CBDB:146412
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aQBNLqoCwPvsgeaF3KQxCc
        subject_person_id: p_769o73ny55NTrot2CDbQDr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 淳于氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UtzDrwCJTKwkT35TkCH3a2
          claim_id: c_aQBNLqoCwPvsgeaF3KQxCc
          source_id: s_xQRzar5cU94ilG_gPV6uJ1
          stance: supports
          locator: CBDB:146412
          quotation: null
          interpretation_note: CBDB 明确记录的王仲配偶
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
        id: c_-0dm9MXRggofDSHuhnjBMp
        subject_person_id: p_DpQiwc8xYXUruWevnbjJPo
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_769o73ny55NTrot2CDbQDr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P1tBNKODvfcLokkk_EptxX
          claim_id: c_-0dm9MXRggofDSHuhnjBMp
          source_id: s_xQRzar5cU94ilG_gPV6uJ1
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiming 4：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DpQiwc8xYXUruWevnbjJPo
        status: active
        display_name: 王仲
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 淳于氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 淳于氏，史料所见人物。本项目依据《中国历代人物传记资料库：淳于氏(王仲妻)（CBDB 146412）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 淳于氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_DpQiwc8xYXUruWevnbjJPo | 王仲 | accepted |

## 外部来源

- [中国历代人物传记资料库：淳于氏(王仲妻)（CBDB 146412）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146412&o=json)
