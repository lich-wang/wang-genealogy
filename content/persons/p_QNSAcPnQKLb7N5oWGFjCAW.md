---
schema: wang-person/v1
id: p_QNSAcPnQKLb7N5oWGFjCAW
status: active
merged_into: null
display_name: 王枚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rr4owkf7vdSjyL4YRNpSEx
        subject_person_id: p_QNSAcPnQKLb7N5oWGFjCAW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王枚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nWi9R4uSaCXbNCqL2gaGNi
          claim_id: c_rr4owkf7vdSjyL4YRNpSEx
          source_id: s_CayDa7PbN2n8RHEuENEH3E
          stance: supports
          locator: CBDB:71092
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71092）
          source: &a1
            id: s_CayDa7PbN2n8RHEuENEH3E
            source_type: api_record
            title: 中国历代人物传记资料库：王枚（CBDB 71092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71092&o=json
            external_identifier: CBDB:71092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.361Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1PYZYsq74A27YoZKTLPizf
        subject_person_id: p_QNSAcPnQKLb7N5oWGFjCAW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1620年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SL8Rtq33gB7Q1KAxrFw5rZ
          claim_id: c_1PYZYsq74A27YoZKTLPizf
          source_id: s_CayDa7PbN2n8RHEuENEH3E
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
        id: c_aLVeKLRSCoxRsCazetiwPZ
        subject_person_id: p_QNSAcPnQKLb7N5oWGFjCAW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1691年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n8jHLMo9qUKPt3U8XnLyMJ
          claim_id: c_aLVeKLRSCoxRsCazetiwPZ
          source_id: s_CayDa7PbN2n8RHEuENEH3E
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
        id: c_hAn8mn4fb9g8JwFj1AKQ2u
        subject_person_id: p_QNSAcPnQKLb7N5oWGFjCAW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王枚（1620年—1691年），清人物。籍贯慈溪。（中国历代人物传记资料库 CBDB 71092）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2-_nSQnA5sfB-bSl31fvds
          claim_id: c_hAn8mn4fb9g8JwFj1AKQ2u
          source_id: s_CayDa7PbN2n8RHEuENEH3E
          stance: supports
          locator: CBDB:71092
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

# 王枚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王枚 | accepted |
| birth.date | 1620年 | accepted |
| death.date | 1691年 | accepted |
| bio.summary | 王枚（1620年—1691年），清人物。籍贯慈溪。（中国历代人物传记资料库 CBDB 71092） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王枚（CBDB 71092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71092&o=json)
