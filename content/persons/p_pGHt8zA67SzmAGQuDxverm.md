---
schema: wang-person/v1
id: p_pGHt8zA67SzmAGQuDxverm
status: active
merged_into: null
display_name: 吳氏
revision: 1
cbdb_id: 135768
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qUc37UFi3trm4ynszL7PsM
        subject_person_id: p_pGHt8zA67SzmAGQuDxverm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吳氏，史料所见人物。本项目依据《中国历代人物传记资料库：吳氏(王汝嘉妻)（CBDB 135768）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bDoU9CtJGEpMF1s1H-4rtV
          claim_id: c_qUc37UFi3trm4ynszL7PsM
          source_id: s_6LA8BncyOLRmQu3fX7pgf8
          stance: supports
          locator: CBDB:135768
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_6LA8BncyOLRmQu3fX7pgf8
            source_type: api_record
            title: 中国历代人物传记资料库：吳氏(王汝嘉妻)（CBDB 135768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135768&o=json
            external_identifier: CBDB:135768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_saQIBnu5-drd2V-zL-Sr4p
        subject_person_id: p_pGHt8zA67SzmAGQuDxverm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NjUrGXa9_SGrF6WqNQ0rQ_
          claim_id: c_saQIBnu5-drd2V-zL-Sr4p
          source_id: s_6LA8BncyOLRmQu3fX7pgf8
          stance: supports
          locator: CBDB:135768
          quotation: null
          interpretation_note: CBDB 明确记录的王汝嘉配偶
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
        id: c_CM6cr8m8DFnDV5VDDFAjov
        subject_person_id: p_91Pcfe43SKLM3QhSvGK4Ky
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_pGHt8zA67SzmAGQuDxverm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yz7wQ98wwGvXspOu3IJxiU
          claim_id: c_CM6cr8m8DFnDV5VDDFAjov
          source_id: s_6LA8BncyOLRmQu3fX7pgf8
          stance: supports
          locator: 紹興十八年同年小錄，211：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_91Pcfe43SKLM3QhSvGK4Ky
        status: active
        display_name: 王汝嘉
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 吳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 吳氏，史料所见人物。本项目依据《中国历代人物传记资料库：吳氏(王汝嘉妻)（CBDB 135768）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 吳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_91Pcfe43SKLM3QhSvGK4Ky | 王汝嘉 | accepted |

## 外部来源

- [中国历代人物传记资料库：吳氏(王汝嘉妻)（CBDB 135768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135768&o=json)
