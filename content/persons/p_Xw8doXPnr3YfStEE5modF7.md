---
schema: wang-person/v1
id: p_Xw8doXPnr3YfStEE5modF7
status: active
merged_into: null
display_name: 成氏
revision: 1
cbdb_id: 150401
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oiFOtLGL3E-9vR1tEHBnZ9
        subject_person_id: p_Xw8doXPnr3YfStEE5modF7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 成氏，史料所见人物。本项目依据《中国历代人物传记资料库：成氏(王養妻)（CBDB 150401）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x2JDx6a_tnu7OwGz6RXcau
          claim_id: c_oiFOtLGL3E-9vR1tEHBnZ9
          source_id: s_a2AnYuyeV-LBhaIuWHSXGD
          stance: supports
          locator: CBDB:150401
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_a2AnYuyeV-LBhaIuWHSXGD
            source_type: api_record
            title: 中国历代人物传记资料库：成氏(王養妻)（CBDB 150401）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150401&o=json
            external_identifier: CBDB:150401
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6oXiPn8t2N3vnNvyYrWmvo
        subject_person_id: p_Xw8doXPnr3YfStEE5modF7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 成氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_co65W4PcchvfPtcFPs9mAZ
          claim_id: c_6oXiPn8t2N3vnNvyYrWmvo
          source_id: s_a2AnYuyeV-LBhaIuWHSXGD
          stance: supports
          locator: CBDB:150401
          quotation: null
          interpretation_note: CBDB 明确记录的王養配偶
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
        id: c_IXuHTXn6fny8VURjPFI1Gq
        subject_person_id: p_NYf4fXj4n829cEBYm96jNc
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Xw8doXPnr3YfStEE5modF7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-0RByTlzutJf4dugnr3oUs
          claim_id: c_IXuHTXn6fny8VURjPFI1Gq
          source_id: s_a2AnYuyeV-LBhaIuWHSXGD
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 28：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NYf4fXj4n829cEBYm96jNc
        status: active
        display_name: 王養
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 成氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 成氏，史料所见人物。本项目依据《中国历代人物传记资料库：成氏(王養妻)（CBDB 150401）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 成氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_NYf4fXj4n829cEBYm96jNc | 王養 | accepted |

## 外部来源

- [中国历代人物传记资料库：成氏(王養妻)（CBDB 150401）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150401&o=json)
