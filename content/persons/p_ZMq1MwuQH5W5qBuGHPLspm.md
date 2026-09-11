---
schema: wang-person/v1
id: p_ZMq1MwuQH5W5qBuGHPLspm
status: active
merged_into: null
display_name: 王鼎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CbvuQNHGy9FdP4yBx3X35F
        subject_person_id: p_ZMq1MwuQH5W5qBuGHPLspm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NjDeBQ28L7u9KYdLMhQyxL
          claim_id: c_CbvuQNHGy9FdP4yBx3X35F
          source_id: s_EAz8QJy4CZ5R2eaD66CsUT
          stance: supports
          locator: CBDB:100891
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100891）
          source: &a1
            id: s_EAz8QJy4CZ5R2eaD66CsUT
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 100891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100891&o=json
            external_identifier: CBDB:100891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.549Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JHz1VChkcomdG8XdmsNsGE
        subject_person_id: p_ZMq1MwuQH5W5qBuGHPLspm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1242年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vMtBvTY9TBavxNeCmeeWax
          claim_id: c_JHz1VChkcomdG8XdmsNsGE
          source_id: s_EAz8QJy4CZ5R2eaD66CsUT
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
        id: c_cTNmtDnPLaPhwLE4me48X8
        subject_person_id: p_ZMq1MwuQH5W5qBuGHPLspm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1320年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eyJtSa56NX7UDEL5DTyJRZ
          claim_id: c_cTNmtDnPLaPhwLE4me48X8
          source_id: s_EAz8QJy4CZ5R2eaD66CsUT
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
        id: c_vst1wHWGqF9kgvDD91NP47
        subject_person_id: p_ZMq1MwuQH5W5qBuGHPLspm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎（1242年—1320年），元人物。籍贯蔚州，身份为孝子/孝女，曾任縣尉、縣尹、縣主簿。（中国历代人物传记资料库 CBDB 100891）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__jAGXTeRZs1_6OiKqrTcbJ
          claim_id: c_vst1wHWGqF9kgvDD91NP47
          source_id: s_EAz8QJy4CZ5R2eaD66CsUT
          stance: supports
          locator: CBDB:100891
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_HP3gs_AIp7qVBeYFJ_Af8A
        subject_person_id: p_ZMq1MwuQH5W5qBuGHPLspm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_44Kmse4y3QwxuZ24pwLEpe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fjyAjv7Jg_ZNMKGb6skjQr
          claim_id: c_HP3gs_AIp7qVBeYFJ_Af8A
          source_id: s_EAz8QJy4CZ5R2eaD66CsUT
          stance: supports
          locator: 元人傳記資料索引，713：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_44Kmse4y3QwxuZ24pwLEpe
        status: active
        display_name: 王弘鈞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| birth.date | 1242年 | accepted |
| death.date | 1320年 | accepted |
| bio.summary | 王鼎（1242年—1320年），元人物。籍贯蔚州，身份为孝子/孝女，曾任縣尉、縣尹、縣主簿。（中国历代人物传记资料库 CBDB 100891） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_44Kmse4y3QwxuZ24pwLEpe | 王弘鈞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 100891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100891&o=json)
