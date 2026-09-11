---
schema: wang-person/v1
id: p_AoR8GkNH17NPVQc7r3ceML
status: active
merged_into: null
display_name: 王紀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_knjJxuT8dLKHtEA4Z17LM1
        subject_person_id: p_AoR8GkNH17NPVQc7r3ceML
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9AYwrBqisVNMkp2kmC6JKV
          claim_id: c_knjJxuT8dLKHtEA4Z17LM1
          source_id: s_1R2BgWRxywAEFj1SAn7jL5
          stance: supports
          locator: CBDB:202256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202256）
          source: &a1
            id: s_1R2BgWRxywAEFj1SAn7jL5
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 202256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202256&o=json
            external_identifier: CBDB:202256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.731Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_j8ZbaDWz3Ft97X4WExG3v4
        subject_person_id: p_AoR8GkNH17NPVQc7r3ceML
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1481年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_45GBAzsWfTw3xZbG5xkaeP
          claim_id: c_j8ZbaDWz3Ft97X4WExG3v4
          source_id: s_1R2BgWRxywAEFj1SAn7jL5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x8sGbktoKBruXEZeBVcnLz
        subject_person_id: p_AoR8GkNH17NPVQc7r3ceML
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_boE3UqFJTZs63f9rTzMhhL
          claim_id: c_x8sGbktoKBruXEZeBVcnLz
          source_id: s_1R2BgWRxywAEFj1SAn7jL5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_RvMYs6C8vKJbEIHH8QsWf5
        subject_person_id: p_4VxcNhhw8r2s8xsCar24Jb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AoR8GkNH17NPVQc7r3ceML
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LZzyIPnWs6ArXOlKNUa5JT
          claim_id: c_RvMYs6C8vKJbEIHH8QsWf5
          source_id: s_PFBHL68FfXuRsKKjs9KbEu
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百四十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PFBHL68FfXuRsKKjs9KbEu
            source_type: api_record
            title: 中国历代人物传记资料库：王福榮（CBDB 285655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285655&o=json
            external_identifier: CBDB:285655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.215Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4VxcNhhw8r2s8xsCar24Jb
        status: active
        display_name: 王福榮
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紀 | accepted |
| birth.date | 1481年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_4VxcNhhw8r2s8xsCar24Jb | 王福榮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福榮（CBDB 285655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285655&o=json)
- [中国历代人物传记资料库：王紀（CBDB 202256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202256&o=json)
