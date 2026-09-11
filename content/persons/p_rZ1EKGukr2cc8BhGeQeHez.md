---
schema: wang-person/v1
id: p_rZ1EKGukr2cc8BhGeQeHez
status: active
merged_into: null
display_name: 謝氏
revision: 1
cbdb_id: 159084
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FcEPXcvnV9MzLyl2xdXHkb
        subject_person_id: p_rZ1EKGukr2cc8BhGeQeHez
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 謝氏，史料所见人物。本项目依据《中国历代人物传记资料库：謝氏(王守琦妻)（CBDB 159084）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jzHtkbf9LY2FxioVc0CK22
          claim_id: c_FcEPXcvnV9MzLyl2xdXHkb
          source_id: s_BZm0tEcMGEoutlqQ6BZrkM
          stance: supports
          locator: CBDB:159084
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_BZm0tEcMGEoutlqQ6BZrkM
            source_type: api_record
            title: 中国历代人物传记资料库：謝氏(王守琦妻)（CBDB 159084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159084&o=json
            external_identifier: CBDB:159084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SymoB0b_Zdvhoc26IVURDR
        subject_person_id: p_rZ1EKGukr2cc8BhGeQeHez
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 謝氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0S46aynKamyXfNZLv7ro_6
          claim_id: c_SymoB0b_Zdvhoc26IVURDR
          source_id: s_BZm0tEcMGEoutlqQ6BZrkM
          stance: supports
          locator: CBDB:159084
          quotation: null
          interpretation_note: CBDB 明确记录的王守琦配偶
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
        id: c_hzulg6VoxE_KhDAIXQTyyC
        subject_person_id: p_TSiXhGd4sf6hYFPw8EvWsp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_rZ1EKGukr2cc8BhGeQeHez
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JfIqdeIDNiugJjyJaeG6aq
          claim_id: c_hzulg6VoxE_KhDAIXQTyyC
          source_id: s_BZm0tEcMGEoutlqQ6BZrkM
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dazhong 32：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TSiXhGd4sf6hYFPw8EvWsp
        status: active
        display_name: 王守琦
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 謝氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 謝氏，史料所见人物。本项目依据《中国历代人物传记资料库：謝氏(王守琦妻)（CBDB 159084）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 謝氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_TSiXhGd4sf6hYFPw8EvWsp | 王守琦 | accepted |

## 外部来源

- [中国历代人物传记资料库：謝氏(王守琦妻)（CBDB 159084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159084&o=json)
