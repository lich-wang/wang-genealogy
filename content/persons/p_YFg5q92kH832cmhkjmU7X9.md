---
schema: wang-person/v1
id: p_YFg5q92kH832cmhkjmU7X9
status: active
merged_into: null
display_name: 路氏
revision: 1
cbdb_id: 146551
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ONQYBBG5SA3ZQP-xGWCgnB
        subject_person_id: p_YFg5q92kH832cmhkjmU7X9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 路氏，史料所见人物。本项目依据《中国历代人物传记资料库：路氏(王護妻)（CBDB 146551）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F_NoNUNxVyOPm05NgIAg1e
          claim_id: c_ONQYBBG5SA3ZQP-xGWCgnB
          source_id: s_Ja1WiGJinwu-2_5oD6sf0y
          stance: supports
          locator: CBDB:146551
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Ja1WiGJinwu-2_5oD6sf0y
            source_type: api_record
            title: 中国历代人物传记资料库：路氏(王護妻)（CBDB 146551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146551&o=json
            external_identifier: CBDB:146551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cu0DUS_rbH8nMuprFdGkVw
        subject_person_id: p_YFg5q92kH832cmhkjmU7X9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 路氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TLaTjIOyCn-HBLz66ziekz
          claim_id: c_cu0DUS_rbH8nMuprFdGkVw
          source_id: s_Ja1WiGJinwu-2_5oD6sf0y
          stance: supports
          locator: CBDB:146551
          quotation: null
          interpretation_note: CBDB 明确记录的王護配偶
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
        id: c_rk9MDjkdSJeE7jcL7uoxaI
        subject_person_id: p_6yKTewNViSQGLc37XFPx1S
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YFg5q92kH832cmhkjmU7X9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ja7X0fhURhpzA-73a05ExE
          claim_id: c_rk9MDjkdSJeE7jcL7uoxaI
          source_id: s_Ja1WiGJinwu-2_5oD6sf0y
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenguan 56：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6yKTewNViSQGLc37XFPx1S
        status: active
        display_name: 王護
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 路氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 路氏，史料所见人物。本项目依据《中国历代人物传记资料库：路氏(王護妻)（CBDB 146551）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 路氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_6yKTewNViSQGLc37XFPx1S | 王護 | accepted |

## 外部来源

- [中国历代人物传记资料库：路氏(王護妻)（CBDB 146551）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146551&o=json)
