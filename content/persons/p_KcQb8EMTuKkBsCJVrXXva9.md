---
schema: wang-person/v1
id: p_KcQb8EMTuKkBsCJVrXXva9
status: active
merged_into: null
display_name: 蔣氏
revision: 1
cbdb_id: 138631
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HA9t97zpQsNl9AEKOrRWlO
        subject_person_id: p_KcQb8EMTuKkBsCJVrXXva9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蔣氏，史料所见人物。本项目依据《中国历代人物传记资料库：蔣氏(王嘉言妻)（CBDB 138631）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6s7D251V9WWtieR5QNHy-O
          claim_id: c_HA9t97zpQsNl9AEKOrRWlO
          source_id: s_X45CYoLtr7WCyfDmwGlBfZ
          stance: supports
          locator: CBDB:138631
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_X45CYoLtr7WCyfDmwGlBfZ
            source_type: api_record
            title: 中国历代人物传记资料库：蔣氏(王嘉言妻)（CBDB 138631）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138631&o=json
            external_identifier: CBDB:138631
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_-Yf3fgKs55M1IZH99CgaFj
        subject_person_id: p_KcQb8EMTuKkBsCJVrXXva9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蔣氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RQ9-oPO1_5aMSTRp-oc1Ul
          claim_id: c_-Yf3fgKs55M1IZH99CgaFj
          source_id: s_X45CYoLtr7WCyfDmwGlBfZ
          stance: supports
          locator: CBDB:138631
          quotation: null
          interpretation_note: CBDB 明确记录的王嘉言配偶
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
        id: c_6Rjr5xADEVPYidsa42OCcN
        subject_person_id: p_7xFeon8XjY4faqRLzNiUEf
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KcQb8EMTuKkBsCJVrXXva9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qm62UenJsnHEuKSqIBkpyx
          claim_id: c_6Rjr5xADEVPYidsa42OCcN
          source_id: s_X45CYoLtr7WCyfDmwGlBfZ
          stance: supports
          locator: 寶祐登科錄：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7xFeon8XjY4faqRLzNiUEf
        status: active
        display_name: 王嘉言
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 蔣氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 蔣氏，史料所见人物。本项目依据《中国历代人物传记资料库：蔣氏(王嘉言妻)（CBDB 138631）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 蔣氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_7xFeon8XjY4faqRLzNiUEf | 王嘉言 | accepted |

## 外部来源

- [中国历代人物传记资料库：蔣氏(王嘉言妻)（CBDB 138631）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138631&o=json)
