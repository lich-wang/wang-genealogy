---
schema: wang-person/v1
id: p_j4i9tZd4rBCbNz6pcMktw7
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 555110
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UsQ2uBxf3KRxxfEJ-aJeYQ
        subject_person_id: p_j4i9tZd4rBCbNz6pcMktw7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏，史料所见人物。本项目依据《中国历代人物传记资料库：張氏(王乾明妻)（CBDB 555110）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0DIT-QT8gWgTK5aVz1y_wF
          claim_id: c_UsQ2uBxf3KRxxfEJ-aJeYQ
          source_id: s_WdeQMhI1-FougPO94ElgHm
          stance: supports
          locator: CBDB:555110
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_WdeQMhI1-FougPO94ElgHm
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王乾明妻)（CBDB 555110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555110&o=json
            external_identifier: CBDB:555110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GfM1aDsjgpqA9Yk1bBJDC9
        subject_person_id: p_j4i9tZd4rBCbNz6pcMktw7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_klKF9krDY8tT1BcDLiRjD3
          claim_id: c_GfM1aDsjgpqA9Yk1bBJDC9
          source_id: s_WdeQMhI1-FougPO94ElgHm
          stance: supports
          locator: CBDB:555110
          quotation: null
          interpretation_note: CBDB 明确记录的王乾明配偶
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
        id: c_Dwj2bLSLZXQfi7Bha25ysI
        subject_person_id: p_fUrkW6ozGrAosrVsTorpqL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_j4i9tZd4rBCbNz6pcMktw7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3uXlMhfGi-AyhDvySzqxkW
          claim_id: c_Dwj2bLSLZXQfi7Bha25ysI
          source_id: s_WdeQMhI1-FougPO94ElgHm
          stance: supports
          locator: (康熙)武功縣續志，lgid=1045709：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fUrkW6ozGrAosrVsTorpqL
        status: active
        display_name: 王乾明
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 張氏，史料所见人物。本项目依据《中国历代人物传记资料库：張氏(王乾明妻)（CBDB 555110）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_fUrkW6ozGrAosrVsTorpqL | 王乾明 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王乾明妻)（CBDB 555110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555110&o=json)
