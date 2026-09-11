---
schema: wang-person/v1
id: p_R67LM6GhXbtovqt8R1bDDv
status: active
merged_into: null
display_name: 王賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b52GfyjFfFfTfa8vMQwi4R
        subject_person_id: p_R67LM6GhXbtovqt8R1bDDv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PGREXbKzsJHjzUQfSY4Cyq
          claim_id: c_b52GfyjFfFfTfa8vMQwi4R
          source_id: s_PzkeZkbUvYeUxNyLfiRhMM
          stance: supports
          locator: CBDB:126807
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126807）
          source: &a1
            id: s_PzkeZkbUvYeUxNyLfiRhMM
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 126807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126807&o=json
            external_identifier: CBDB:126807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.218Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Di9no7vch8mFHpH8jU1vkd
        subject_person_id: p_R67LM6GhXbtovqt8R1bDDv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1385年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bRWcodTCXnnWd6CqmBVW4C
          claim_id: c_Di9no7vch8mFHpH8jU1vkd
          source_id: s_PzkeZkbUvYeUxNyLfiRhMM
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
        id: c_887Dk6eCAyHP4yR8ZqGhYn
        subject_person_id: p_R67LM6GhXbtovqt8R1bDDv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1467年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r6XFSRTqy25UyvxD2pnrGq
          claim_id: c_887Dk6eCAyHP4yR8ZqGhYn
          source_id: s_PzkeZkbUvYeUxNyLfiRhMM
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
        id: c_A8gJW2p5fhJ6Tj777NMca2
        subject_person_id: p_R67LM6GhXbtovqt8R1bDDv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢（1385年—1467年），明人物。籍贯寧陽，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 126807）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w9gbP2Q2hbmRarukKss886
          claim_id: c_A8gJW2p5fhJ6Tj777NMca2
          source_id: s_PzkeZkbUvYeUxNyLfiRhMM
          stance: supports
          locator: CBDB:126807
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賢 | accepted |
| birth.date | 1385年 | accepted |
| death.date | 1467年 | accepted |
| bio.summary | 王賢（1385年—1467年），明人物。籍贯寧陽，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 126807） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賢（CBDB 126807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126807&o=json)
