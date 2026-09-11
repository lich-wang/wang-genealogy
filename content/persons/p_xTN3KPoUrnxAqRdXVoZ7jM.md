---
schema: wang-person/v1
id: p_xTN3KPoUrnxAqRdXVoZ7jM
status: active
merged_into: null
display_name: 曹氏
revision: 1
cbdb_id: 551518
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V5TeSnxoyL_QqcZ-Q2qpPM
        subject_person_id: p_xTN3KPoUrnxAqRdXVoZ7jM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 曹氏，史料所见人物。籍贯南陽，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 551518）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IqAuFntqSZkjqd3N-djrW1
          claim_id: c_V5TeSnxoyL_QqcZ-Q2qpPM
          source_id: s_GkxYp1GVu2wYHiGjOHtxaP
          stance: supports
          locator: CBDB:551518
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GkxYp1GVu2wYHiGjOHtxaP
            source_type: api_record
            title: 中国历代人物传记资料库：曹氏(王守紀妻)（CBDB 551518）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551518&o=json
            external_identifier: CBDB:551518
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_lXLhmK7WoRJZlwJEnPph3M
        subject_person_id: p_xTN3KPoUrnxAqRdXVoZ7jM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 曹氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jppF6T6ygSBi-0a7jo_y5u
          claim_id: c_lXLhmK7WoRJZlwJEnPph3M
          source_id: s_GkxYp1GVu2wYHiGjOHtxaP
          stance: supports
          locator: CBDB:551518
          quotation: null
          interpretation_note: CBDB 明确记录的王守紀配偶
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
        id: c_8RU3ggfuSJFp4zUg_dBhX_
        subject_person_id: p_KxonNTZx8tT6qN5hztkL3V
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xTN3KPoUrnxAqRdXVoZ7jM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6LaU3ENCxr8ZA1HTavAbEG
          claim_id: c_8RU3ggfuSJFp4zUg_dBhX_
          source_id: s_GkxYp1GVu2wYHiGjOHtxaP
          stance: supports
          locator: 南陽府志：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KxonNTZx8tT6qN5hztkL3V
        status: active
        display_name: 王守紀
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 曹氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 曹氏，史料所见人物。籍贯南陽，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 551518） | accepted |
| name.primary | 曹氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_KxonNTZx8tT6qN5hztkL3V | 王守紀 | accepted |

## 外部来源

- [中国历代人物传记资料库：曹氏(王守紀妻)（CBDB 551518）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551518&o=json)
