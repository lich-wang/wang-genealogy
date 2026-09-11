---
schema: wang-person/v1
id: p_nELLRpsh7qqei4e8df81cu
status: active
merged_into: null
display_name: 王莪
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CQa26wgH9uwuM1c5VZ87do
        subject_person_id: p_nELLRpsh7qqei4e8df81cu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a4soajVm1gDdAeKG6U6iBP
          claim_id: c_CQa26wgH9uwuM1c5VZ87do
          source_id: s_khGJvxNr9mdhh7JbCm6Wef
          stance: supports
          locator: CBDB:557896
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557896）
          source: &a1
            id: s_khGJvxNr9mdhh7JbCm6Wef
            source_type: api_record
            title: 中国历代人物传记资料库：王莪（CBDB 557896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557896&o=json
            external_identifier: CBDB:557896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.543Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7U1x3pi7V5YvjyVLKyLwUf
        subject_person_id: p_nELLRpsh7qqei4e8df81cu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莪，史料所见人物。本项目依据《中国历代人物传记资料库：王莪（CBDB 557896）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PgLoQNfuV5SuMS2lUyFvAj
          claim_id: c_7U1x3pi7V5YvjyVLKyLwUf
          source_id: s_khGJvxNr9mdhh7JbCm6Wef
          stance: supports
          locator: CBDB:557896
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
        id: c_KHbsZpXiZNy4-5NrrM5Qzi
        subject_person_id: p_nELLRpsh7qqei4e8df81cu
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_QT34ZU86o19ZAx425CmZ1z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ge0m4VYvBMnUv4LotHF91p
          claim_id: c_KHbsZpXiZNy4-5NrrM5Qzi
          source_id: s_LNv5lxsyZZIsD6p9rlYmd9
          stance: supports
          locator: 南陽府志，lgid=878796：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LNv5lxsyZZIsD6p9rlYmd9
            source_type: api_record
            title: 中国历代人物传记资料库：樊氏(王莪妻)（CBDB 557897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557897&o=json
            external_identifier: CBDB:557897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QT34ZU86o19ZAx425CmZ1z
        status: active
        display_name: 樊氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王莪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王莪 | accepted |
| bio.summary | 王莪，史料所见人物。本项目依据《中国历代人物传记资料库：王莪（CBDB 557896）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_QT34ZU86o19ZAx425CmZ1z | 樊氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：樊氏(王莪妻)（CBDB 557897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557897&o=json)
- [中国历代人物传记资料库：王莪（CBDB 557896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557896&o=json)
