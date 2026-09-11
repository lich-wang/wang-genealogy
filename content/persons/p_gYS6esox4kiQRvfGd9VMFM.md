---
schema: wang-person/v1
id: p_gYS6esox4kiQRvfGd9VMFM
status: active
merged_into: null
display_name: 馬煒
revision: 1
cbdb_id: 151254
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3AnaEaNC07Uc2FaUWuYjUA
        subject_person_id: p_gYS6esox4kiQRvfGd9VMFM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 馬煒，史料所见人物。本项目依据《中国历代人物传记资料库：馬煒（CBDB 151254）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uJfR9FO1Cb0u8XHlYIkz5S
          claim_id: c_3AnaEaNC07Uc2FaUWuYjUA
          source_id: s_R0iXDWk7pHcrcqIZQiVSzj
          stance: supports
          locator: CBDB:151254
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_R0iXDWk7pHcrcqIZQiVSzj
            source_type: api_record
            title: 中国历代人物传记资料库：馬煒（CBDB 151254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151254&o=json
            external_identifier: CBDB:151254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Xk_ALH__7DNXQtg2XP4BqY
        subject_person_id: p_gYS6esox4kiQRvfGd9VMFM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 馬煒
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EYEaH0GaeuO6uzu9oVPEOC
          claim_id: c_Xk_ALH__7DNXQtg2XP4BqY
          source_id: s_R0iXDWk7pHcrcqIZQiVSzj
          stance: supports
          locator: CBDB:151254
          quotation: null
          interpretation_note: CBDB 明确记录的李氏配偶
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
        id: c_ZBTdmljsVFfjJpDCuKXH6v
        subject_person_id: p_YJUfQmozBnpgzDZHV6jrGh
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gYS6esox4kiQRvfGd9VMFM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o56zDpILC5p0LOB5Oo1myI
          claim_id: c_ZBTdmljsVFfjJpDCuKXH6v
          source_id: s_R0iXDWk7pHcrcqIZQiVSzj
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 47：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YJUfQmozBnpgzDZHV6jrGh
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 馬煒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 馬煒，史料所见人物。本项目依据《中国历代人物传记资料库：馬煒（CBDB 151254）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 馬煒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_YJUfQmozBnpgzDZHV6jrGh | 李氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：馬煒（CBDB 151254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151254&o=json)
