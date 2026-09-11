---
schema: wang-person/v1
id: p_NX6VAFxkqyWNm1Kdyrbmwt
status: active
merged_into: null
display_name: 王達材
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mQASmbfpJ1zH7ENQrYK735
        subject_person_id: p_NX6VAFxkqyWNm1Kdyrbmwt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達材
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WyhozgUHwcNdsFNiMqBE8c
          claim_id: c_mQASmbfpJ1zH7ENQrYK735
          source_id: s_EefgkSwkC1YyJ3nfEhHvMK
          stance: supports
          locator: CBDB:71537
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71537）
          source: &a1
            id: s_EefgkSwkC1YyJ3nfEhHvMK
            source_type: api_record
            title: 中国历代人物传记资料库：王達材（CBDB 71537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71537&o=json
            external_identifier: CBDB:71537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.740Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_SuLjix3VMq98xaEjw312AZ
        subject_person_id: p_NX6VAFxkqyWNm1Kdyrbmwt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1835年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kxc3pm5aUKeFcgKCaWJ6Mm
          claim_id: c_SuLjix3VMq98xaEjw312AZ
          source_id: s_EefgkSwkC1YyJ3nfEhHvMK
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
        id: c_JFJ6hJy9ip66CSJPH8JHmG
        subject_person_id: p_NX6VAFxkqyWNm1Kdyrbmwt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1898年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k5W675CQjTFQ6vALRnH1uh
          claim_id: c_JFJ6hJy9ip66CSJPH8JHmG
          source_id: s_EefgkSwkC1YyJ3nfEhHvMK
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
        id: c_HeEfsiU8RX9hhKDuE5p9kp
        subject_person_id: p_NX6VAFxkqyWNm1Kdyrbmwt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達材（1835年—1898年），清人物。籍贯文水。（中国历代人物传记资料库 CBDB 71537）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xDWhRles_OxxmUkVhUPnFx
          claim_id: c_HeEfsiU8RX9hhKDuE5p9kp
          source_id: s_EefgkSwkC1YyJ3nfEhHvMK
          stance: supports
          locator: CBDB:71537
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

# 王達材

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王達材 | accepted |
| birth.date | 1835年 | accepted |
| death.date | 1898年 | accepted |
| bio.summary | 王達材（1835年—1898年），清人物。籍贯文水。（中国历代人物传记资料库 CBDB 71537） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王達材（CBDB 71537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71537&o=json)
