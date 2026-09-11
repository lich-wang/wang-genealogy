---
schema: wang-person/v1
id: p_x4bp5Ci45FMuKz82qKbkW6
status: active
merged_into: null
display_name: 王忠彥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SgYPLMYgmHxf1EQiQDHw1B
        subject_person_id: p_x4bp5Ci45FMuKz82qKbkW6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_puZSgMTpbrFD7G7Kfi3TQM
          claim_id: c_SgYPLMYgmHxf1EQiQDHw1B
          source_id: s_Apcwo8RAL86V3m8R9ck6ja
          stance: supports
          locator: CBDB:22884
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22884）
          source: &a1
            id: s_Apcwo8RAL86V3m8R9ck6ja
            source_type: api_record
            title: 中国历代人物传记资料库：王忠彥（CBDB 22884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22884&o=json
            external_identifier: CBDB:22884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.864Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_XN7sUiMBk6MuXPM6jjXvnQ
        subject_person_id: p_x4bp5Ci45FMuKz82qKbkW6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1107年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WM5Ef5Xm1mrEvJu7Di7sP7
          claim_id: c_XN7sUiMBk6MuXPM6jjXvnQ
          source_id: s_Apcwo8RAL86V3m8R9ck6ja
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
        id: c_La92Qm6aYNU7R6SzvBFbjo
        subject_person_id: p_x4bp5Ci45FMuKz82qKbkW6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1149年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dgqh6V1kwG8NPojja1Zo8D
          claim_id: c_La92Qm6aYNU7R6SzvBFbjo
          source_id: s_Apcwo8RAL86V3m8R9ck6ja
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
        id: c_r6BnF3ceQWPoAeFDUJg2JC
        subject_person_id: p_x4bp5Ci45FMuKz82qKbkW6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yLiSsCkMdMBk8Lq1deFF65
          claim_id: c_r6BnF3ceQWPoAeFDUJg2JC
          source_id: s_Apcwo8RAL86V3m8R9ck6ja
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2knRjYuYhOi6_tbyQJzRSb
        subject_person_id: p_enjEd3QTh2MFQkVQhR4jLX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x4bp5Ci45FMuKz82qKbkW6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oNVq-ChRHOXPQZ6ke3EHD3
          claim_id: c_2knRjYuYhOi6_tbyQJzRSb
          source_id: s_utoZKafPNXzJUJeK6AaMMW
          stance: supports
          locator: CBDB 双向互证（子 王忠彥 ⇄ 父 王襄）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_utoZKafPNXzJUJeK6AaMMW
            source_type: api_record
            title: 中国历代人物传记资料库：王襄（CBDB 22883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22883&o=json
            external_identifier: CBDB:22883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.864Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_enjEd3QTh2MFQkVQhR4jLX
        status: active
        display_name: 王襄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王忠彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠彥 | accepted |
| birth.date | 1107年 | accepted |
| death.date | 1149年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_enjEd3QTh2MFQkVQhR4jLX | 王襄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王襄（CBDB 22883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22883&o=json)
- [中国历代人物传记资料库：王忠彥（CBDB 22884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22884&o=json)
