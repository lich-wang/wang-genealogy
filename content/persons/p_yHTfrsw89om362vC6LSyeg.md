---
schema: wang-person/v1
id: p_yHTfrsw89om362vC6LSyeg
status: active
merged_into: null
display_name: 裴溥
revision: 1
cbdb_id: 153272
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YKgNKsqmaW5N9fED9DwuI5
        subject_person_id: p_yHTfrsw89om362vC6LSyeg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 裴溥，史料所见人物。本项目依据《中国历代人物传记资料库：裴溥（CBDB 153272）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__rZvJ_TMcQ8mSC6U2leLmf
          claim_id: c_YKgNKsqmaW5N9fED9DwuI5
          source_id: s_HzofgJTyo6_VrqEQgz8ilT
          stance: supports
          locator: CBDB:153272
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_HzofgJTyo6_VrqEQgz8ilT
            source_type: api_record
            title: 中国历代人物传记资料库：裴溥（CBDB 153272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153272&o=json
            external_identifier: CBDB:153272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6v9yPJLq_khQB7nGVeY_AJ
        subject_person_id: p_yHTfrsw89om362vC6LSyeg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 裴溥
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aHjXZNzNDVpH3lC6I7D2cN
          claim_id: c_6v9yPJLq_khQB7nGVeY_AJ
          source_id: s_HzofgJTyo6_VrqEQgz8ilT
          stance: supports
          locator: CBDB:153272
          quotation: null
          interpretation_note: CBDB 明确记录的王冷然配偶
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
        id: c_s311O_6M3l5KSdxEH-xuVo
        subject_person_id: p_dushLD8QJLJynRyKBeici3
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_yHTfrsw89om362vC6LSyeg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xX799DiFYNRgqduFp-vN0e
          claim_id: c_s311O_6M3l5KSdxEH-xuVo
          source_id: s_HzofgJTyo6_VrqEQgz8ilT
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 2：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dushLD8QJLJynRyKBeici3
        status: active
        display_name: 王冷然
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 裴溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 裴溥，史料所见人物。本项目依据《中国历代人物传记资料库：裴溥（CBDB 153272）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 裴溥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_dushLD8QJLJynRyKBeici3 | 王冷然 | accepted |

## 外部来源

- [中国历代人物传记资料库：裴溥（CBDB 153272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153272&o=json)
