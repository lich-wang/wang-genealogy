---
schema: wang-person/v1
id: p_XDUjr73JTZKoFCAP2MQV6T
status: active
merged_into: null
display_name: 王敬休
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_spVT94Y998pcqZce6UpFX8
        subject_person_id: p_XDUjr73JTZKoFCAP2MQV6T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬休
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C8XKvETWHnLWANtkt4rZ5W
          claim_id: c_spVT94Y998pcqZce6UpFX8
          source_id: s_P3YuonFbCCQjxCkW5T9Exy
          stance: supports
          locator: CBDB:192946
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192946）
          source: &a1
            id: s_P3YuonFbCCQjxCkW5T9Exy
            source_type: api_record
            title: 中国历代人物传记资料库：王敬休（CBDB 192946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192946&o=json
            external_identifier: CBDB:192946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.292Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_cqUbVo3uBkkVbdQU8ZuvoG
        subject_person_id: p_XDUjr73JTZKoFCAP2MQV6T
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 909年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6NNSs5VFgNEXGWYhyeEHLz
          claim_id: c_cqUbVo3uBkkVbdQU8ZuvoG
          source_id: s_P3YuonFbCCQjxCkW5T9Exy
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
        id: c_taHeGh13LgGTGMbSn7KKYE
        subject_person_id: p_XDUjr73JTZKoFCAP2MQV6T
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
        - id: cs_93tMAZrgvp2EDnjXeJiMmP
          claim_id: c_taHeGh13LgGTGMbSn7KKYE
          source_id: s_P3YuonFbCCQjxCkW5T9Exy
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
        id: c_Hmh_Y4wkBGFTdlxXg-V8gt
        subject_person_id: p_bb4uNBnkCDpyeNa35JCd9T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XDUjr73JTZKoFCAP2MQV6T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lHfMZ79V9bo9ufOUearu4P
          claim_id: c_Hmh_Y4wkBGFTdlxXg-V8gt
          source_id: s_qoTa2nNznviLxzB6AzpSw8
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qoTa2nNznviLxzB6AzpSw8
            source_type: api_record
            title: 中国历代人物传记资料库：王譚（CBDB 144955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144955&o=json
            external_identifier: CBDB:144955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.642Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bb4uNBnkCDpyeNa35JCd9T
        status: active
        display_name: 王譚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敬休

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬休 | accepted |
| death.date | 909年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bb4uNBnkCDpyeNa35JCd9T | 王譚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬休（CBDB 192946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192946&o=json)
- [中国历代人物传记资料库：王譚（CBDB 144955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144955&o=json)
