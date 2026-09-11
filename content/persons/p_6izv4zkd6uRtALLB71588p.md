---
schema: wang-person/v1
id: p_6izv4zkd6uRtALLB71588p
status: active
merged_into: null
display_name: 歐陽氏
revision: 1
cbdb_id: 39366
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p8Nk-DXIHo0utjBszJ-otE
        subject_person_id: p_6izv4zkd6uRtALLB71588p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 歐陽氏（1127—1176），宋人物。籍贯廬陵。（中国历代人物传记资料库 CBDB 39366）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1cnqjOzpljY3lvyCQ5OTSw
          claim_id: c_p8Nk-DXIHo0utjBszJ-otE
          source_id: s_8teu6Qz59zQKcw5t8yNmnp
          stance: supports
          locator: CBDB:39366
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8teu6Qz59zQKcw5t8yNmnp
            source_type: api_record
            title: 中国历代人物传记资料库：歐陽氏(王邦乂妻)（CBDB 39366）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39366&o=json
            external_identifier: CBDB:39366
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_OcJ6Wv_WLroPQB855QiVEh
        subject_person_id: p_6izv4zkd6uRtALLB71588p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 歐陽氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fcspLipPTRPO9GXWSqUYfi
          claim_id: c_OcJ6Wv_WLroPQB855QiVEh
          source_id: s_8teu6Qz59zQKcw5t8yNmnp
          stance: supports
          locator: CBDB:39366
          quotation: null
          interpretation_note: CBDB 明确记录的王邦乂配偶
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
        id: c_tpKA94hVovONMEyA6aLFZX
        subject_person_id: p_67rWeKsiUBFaSDE7KsmxXj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_6izv4zkd6uRtALLB71588p
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9JKDLODfe5_cPL0sR-DQd_
          claim_id: c_tpKA94hVovONMEyA6aLFZX
          source_id: s_8teu6Qz59zQKcw5t8yNmnp
          stance: supports
          locator: 宋人傳記資料索引(電子版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_67rWeKsiUBFaSDE7KsmxXj
        status: active
        display_name: 王邦乂
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 歐陽氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 歐陽氏（1127—1176），宋人物。籍贯廬陵。（中国历代人物传记资料库 CBDB 39366） | accepted |
| name.primary | 歐陽氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_67rWeKsiUBFaSDE7KsmxXj | 王邦乂 | accepted |

## 外部来源

- [中国历代人物传记资料库：歐陽氏(王邦乂妻)（CBDB 39366）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39366&o=json)
