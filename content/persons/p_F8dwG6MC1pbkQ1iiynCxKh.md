---
schema: wang-person/v1
id: p_F8dwG6MC1pbkQ1iiynCxKh
status: active
merged_into: null
display_name: 吳淂怡
revision: 1
cbdb_id: 69594
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AnPNmZzmGBZG1FH0yzoQhT
        subject_person_id: p_F8dwG6MC1pbkQ1iiynCxKh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吳淂怡，史料所见人物。本项目依据《中国历代人物传记资料库：吳淂怡（CBDB 69594）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SCKffpRp_5Ibl36EIXyt1c
          claim_id: c_AnPNmZzmGBZG1FH0yzoQhT
          source_id: s_EpJwyuZhOaVSIc5t9Ftz8v
          stance: supports
          locator: CBDB:69594
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_EpJwyuZhOaVSIc5t9Ftz8v
            source_type: api_record
            title: 中国历代人物传记资料库：吳淂怡（CBDB 69594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69594&o=json
            external_identifier: CBDB:69594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rwPuSQOfRNExfo1TeX5mTU
        subject_person_id: p_F8dwG6MC1pbkQ1iiynCxKh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吳淂怡
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gH9aK4Za5We__75aSH1vDe
          claim_id: c_rwPuSQOfRNExfo1TeX5mTU
          source_id: s_EpJwyuZhOaVSIc5t9Ftz8v
          stance: supports
          locator: CBDB:69594
          quotation: null
          interpretation_note: CBDB 明确记录的王夢蘭配偶
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
        id: c_q7yP59IXx9OmG7UIVsGAZJ
        subject_person_id: p_61HhqzU1hF9D9C1yZ2Ks56
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_F8dwG6MC1pbkQ1iiynCxKh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i-v24YuaGttDI_aYkV-toD
          claim_id: c_q7yP59IXx9OmG7UIVsGAZJ
          source_id: s_EpJwyuZhOaVSIc5t9Ftz8v
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1168, HuWenKai #250：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_61HhqzU1hF9D9C1yZ2Ks56
        status: active
        display_name: 王夢蘭
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 吳淂怡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 吳淂怡，史料所见人物。本项目依据《中国历代人物传记资料库：吳淂怡（CBDB 69594）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 吳淂怡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_61HhqzU1hF9D9C1yZ2Ks56 | 王夢蘭 | accepted |

## 外部来源

- [中国历代人物传记资料库：吳淂怡（CBDB 69594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69594&o=json)
