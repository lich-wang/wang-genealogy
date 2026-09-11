---
schema: wang-person/v1
id: p_Dk6M3yXTfK5DDUsvx3oDoK
status: active
merged_into: null
display_name: 王道行
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HNVnDhC7G3j7x8rp8qnBzr
        subject_person_id: p_Dk6M3yXTfK5DDUsvx3oDoK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道行
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_95Tz4G1C8c1wZrmC2DK1LK
          claim_id: c_HNVnDhC7G3j7x8rp8qnBzr
          source_id: s_mb39MXHdYHgxbX76QnNeJs
          stance: supports
          locator: CBDB:118890
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（118890）
          source: &a1
            id: s_mb39MXHdYHgxbX76QnNeJs
            source_type: api_record
            title: 中国历代人物传记资料库：王道行（CBDB 118890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118890&o=json
            external_identifier: CBDB:118890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.883Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QQeU29a8cz2H5ZEuDCtYPK
        subject_person_id: p_Dk6M3yXTfK5DDUsvx3oDoK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道行，史料所见人物。本项目依据《中国历代人物传记资料库：王道行（CBDB 118890）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iowv5nsg2Z4CyAKvkdxOQd
          claim_id: c_QQeU29a8cz2H5ZEuDCtYPK
          source_id: s_mb39MXHdYHgxbX76QnNeJs
          stance: supports
          locator: CBDB:118890
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
        id: c_E3F8EXUpu3gkBDqfRa6roa
        subject_person_id: p_Dk6M3yXTfK5DDUsvx3oDoK
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3eAQrJoXrsbqjE9J87mhpv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DFzwQ47RUI58W2126QKOSe
          claim_id: c_E3F8EXUpu3gkBDqfRa6roa
          source_id: s_sUf3XmR_mkSny76zTBsL04
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2977：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sUf3XmR_mkSny76zTBsL04
            source_type: api_record
            title: 中国历代人物传记资料库：錢氏(王道行妻)（CBDB 118888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118888&o=json
            external_identifier: CBDB:118888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3eAQrJoXrsbqjE9J87mhpv
        status: active
        display_name: 錢氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王道行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道行 | accepted |
| bio.summary | 王道行，史料所见人物。本项目依据《中国历代人物传记资料库：王道行（CBDB 118890）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_3eAQrJoXrsbqjE9J87mhpv | 錢氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：錢氏(王道行妻)（CBDB 118888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118888&o=json)
- [中国历代人物传记资料库：王道行（CBDB 118890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118890&o=json)
