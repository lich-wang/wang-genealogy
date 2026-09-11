---
schema: wang-person/v1
id: p_HnsY26Mycy5f3XSQ8gYJfk
status: active
merged_into: null
display_name: 謝氏
revision: 1
cbdb_id: 38270
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H3H75JUhiECaQwyL7fFuFX
        subject_person_id: p_HnsY26Mycy5f3XSQ8gYJfk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 謝氏，史料所见人物。本项目依据《中国历代人物传记资料库：謝氏(王允初妻)（CBDB 38270）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hXxXKcLtpzEnmDbmIDVPSb
          claim_id: c_H3H75JUhiECaQwyL7fFuFX
          source_id: s_FVw6CYqbdOc84FS8pyXSLl
          stance: supports
          locator: CBDB:38270
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_FVw6CYqbdOc84FS8pyXSLl
            source_type: api_record
            title: 中国历代人物传记资料库：謝氏(王允初妻)（CBDB 38270）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38270&o=json
            external_identifier: CBDB:38270
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WLh-2paVpMGYfaV_UX5Dkm
        subject_person_id: p_HnsY26Mycy5f3XSQ8gYJfk
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
        - id: cs_xTPtcwhadUCzplBuEZ-x4h
          claim_id: c_WLh-2paVpMGYfaV_UX5Dkm
          source_id: s_FVw6CYqbdOc84FS8pyXSLl
          stance: supports
          locator: CBDB:38270
          quotation: null
          interpretation_note: CBDB 明确记录的王允初配偶
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
        id: c_Yy9fFX9Mop8jSOjcPgvxDR
        subject_person_id: p_EpF9g41LdnDgRy6vzi3Sev
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HnsY26Mycy5f3XSQ8gYJfk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PexdbOmfQsJn2cbrjzy_hd
          claim_id: c_Yy9fFX9Mop8jSOjcPgvxDR
          source_id: s_FVw6CYqbdOc84FS8pyXSLl
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1452;1453：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EpF9g41LdnDgRy6vzi3Sev
        status: active
        display_name: 王允初
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
| bio.summary | 謝氏，史料所见人物。本项目依据《中国历代人物传记资料库：謝氏(王允初妻)（CBDB 38270）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 謝氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_EpF9g41LdnDgRy6vzi3Sev | 王允初 | accepted |

## 外部来源

- [中国历代人物传记资料库：謝氏(王允初妻)（CBDB 38270）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38270&o=json)
