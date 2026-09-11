---
schema: wang-person/v1
id: p_Zu7XzGmLgUGzFW8xgsypGK
status: active
merged_into: null
display_name: 王永和
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9Vj92c1E8hr4aMBedFq6bc
        subject_person_id: p_Zu7XzGmLgUGzFW8xgsypGK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8WR78MM7Cs4NSJMo8bbD4B
          claim_id: c_9Vj92c1E8hr4aMBedFq6bc
          source_id: s_PyxdQ2Pssg2kMAZVJGVSWJ
          stance: supports
          locator: CBDB:67308
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67308）
          source: &a1
            id: s_PyxdQ2Pssg2kMAZVJGVSWJ
            source_type: api_record
            title: 中国历代人物传记资料库：王永和（CBDB 67308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67308&o=json
            external_identifier: CBDB:67308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TRbcDGMkiRtJmoNAwKb1DD
        subject_person_id: p_Zu7XzGmLgUGzFW8xgsypGK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1391年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AvsfM8MNCAnMSVvPf2B393
          claim_id: c_TRbcDGMkiRtJmoNAwKb1DD
          source_id: s_PyxdQ2Pssg2kMAZVJGVSWJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8ZgBdX4QwcxFxnZDk282R2
        subject_person_id: p_Zu7XzGmLgUGzFW8xgsypGK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1449年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vaJp13HLWZ6knmXG25GkK4
          claim_id: c_8ZgBdX4QwcxFxnZDk282R2
          source_id: s_PyxdQ2Pssg2kMAZVJGVSWJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UPBA3NKQFy4JQSoa2G2YaC
        subject_person_id: p_Zu7XzGmLgUGzFW8xgsypGK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永和（1391年—1449年），明人物。籍贯崑山，入仕鄉貢舉人，曾任副使、工部尚書、工部右侍郎。（中国历代人物传记资料库 CBDB 67308）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2HWByS0xs82uHfgpwaFQe-
          claim_id: c_UPBA3NKQFy4JQSoa2G2YaC
          source_id: s_PyxdQ2Pssg2kMAZVJGVSWJ
          stance: supports
          locator: CBDB:67308
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nBDUCIOPOwFqKZn_Y9_eMV
        subject_person_id: p_NSvH9onWTVZ6YSBW9FZSci
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Zu7XzGmLgUGzFW8xgsypGK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7-oQfNxwZSsIotjtpj940P
          claim_id: c_nBDUCIOPOwFqKZn_Y9_eMV
          source_id: s_PyxdQ2Pssg2kMAZVJGVSWJ
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），10916：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NSvH9onWTVZ6YSBW9FZSci
        status: active
        display_name: 王子禎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王永和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永和 | accepted |
| birth.date | 1391年 | accepted |
| death.date | 1449年 | accepted |
| bio.summary | 王永和（1391年—1449年），明人物。籍贯崑山，入仕鄉貢舉人，曾任副使、工部尚書、工部右侍郎。（中国历代人物传记资料库 CBDB 67308） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NSvH9onWTVZ6YSBW9FZSci | 王子禎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王永和（CBDB 67308）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67308&o=json)
