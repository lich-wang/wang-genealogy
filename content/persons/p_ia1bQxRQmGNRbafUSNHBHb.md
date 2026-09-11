---
schema: wang-person/v1
id: p_ia1bQxRQmGNRbafUSNHBHb
status: active
merged_into: null
display_name: 王漢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xoB7F2gsCvZdDfdG4GSwFQ
        subject_person_id: p_ia1bQxRQmGNRbafUSNHBHb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TJTKpRjwmUhCVPvB9GGCva
          claim_id: c_xoB7F2gsCvZdDfdG4GSwFQ
          source_id: s_qF5eoHT1JS2MTFj5n3ShFR
          stance: supports
          locator: CBDB:142761
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142761）
          source: &a1
            id: s_qF5eoHT1JS2MTFj5n3ShFR
            source_type: api_record
            title: 中国历代人物传记资料库：王漢（CBDB 142761）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142761&o=json
            external_identifier: CBDB:142761
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.594Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_m7JpbFeTbwqgGoCh4LHzgK
        subject_person_id: p_ia1bQxRQmGNRbafUSNHBHb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 624年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1ZF9zLFTpvBzp9v2Lh7zjY
          claim_id: c_m7JpbFeTbwqgGoCh4LHzgK
          source_id: s_qF5eoHT1JS2MTFj5n3ShFR
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
        id: c_USPhqmpXdQJxf7af63FdGr
        subject_person_id: p_ia1bQxRQmGNRbafUSNHBHb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 675年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E3Nw1iga14uk7t9DXP3hPc
          claim_id: c_USPhqmpXdQJxf7af63FdGr
          source_id: s_qF5eoHT1JS2MTFj5n3ShFR
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
        id: c_GNy19eoqbC5VkndNVnYDC8
        subject_person_id: p_ia1bQxRQmGNRbafUSNHBHb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F7kKnvGbMop9au22gkXFie
          claim_id: c_GNy19eoqbC5VkndNVnYDC8
          source_id: s_qF5eoHT1JS2MTFj5n3ShFR
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
  spouses:
    - claim:
        id: c_LqYWl7UH9yQ2LTtLbBMjiL
        subject_person_id: p_ia1bQxRQmGNRbafUSNHBHb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8MFNz3KMUsLCvCAuPMdu3L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uc-sRUWK8QovRCnMg8L6CW
          claim_id: c_LqYWl7UH9yQ2LTtLbBMjiL
          source_id: s_TNWz_8krJqEYGUWNblsFng
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Tianshou11：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TNWz_8krJqEYGUWNblsFng
            source_type: api_record
            title: 中国历代人物传记资料库：閻氏(王漢妻)（CBDB 163029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163029&o=json
            external_identifier: CBDB:163029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8MFNz3KMUsLCvCAuPMdu3L
        status: active
        display_name: 閻氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王漢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漢 | accepted |
| birth.date | 624年 | accepted |
| death.date | 675年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_8MFNz3KMUsLCvCAuPMdu3L | 閻氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王漢（CBDB 142761）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142761&o=json)
- [中国历代人物传记资料库：閻氏(王漢妻)（CBDB 163029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163029&o=json)
