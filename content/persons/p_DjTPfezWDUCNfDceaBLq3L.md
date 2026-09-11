---
schema: wang-person/v1
id: p_DjTPfezWDUCNfDceaBLq3L
status: active
merged_into: null
display_name: 王聰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YJ4VHVANQvahdYK3NaGF1b
        subject_person_id: p_DjTPfezWDUCNfDceaBLq3L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uvX4eJ3RTZdcJ32REJGTSB
          claim_id: c_YJ4VHVANQvahdYK3NaGF1b
          source_id: s_14CU4as6MUX69ezfHYbEkM
          stance: supports
          locator: CBDB:66690
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（66690）
          source: &a1
            id: s_14CU4as6MUX69ezfHYbEkM
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 66690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66690&o=json
            external_identifier: CBDB:66690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.961Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6dyrjustGiNSmsbdfV5hKN
        subject_person_id: p_DjTPfezWDUCNfDceaBLq3L
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1357年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qTtnM96f2wkk2MFtkpae8Q
          claim_id: c_6dyrjustGiNSmsbdfV5hKN
          source_id: s_14CU4as6MUX69ezfHYbEkM
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
        id: c_8sCPaKjiuNN8hA9dmH1aB9
        subject_person_id: p_DjTPfezWDUCNfDceaBLq3L
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1409年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7rPPLnoY6RFsB4nB6KyAPm
          claim_id: c_8sCPaKjiuNN8hA9dmH1aB9
          source_id: s_14CU4as6MUX69ezfHYbEkM
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
        id: c_HFeYBedP94f4XhWEsLoNwP
        subject_person_id: p_DjTPfezWDUCNfDceaBLq3L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聰（1357年—1409年），明人物。籍贯蘄水，身份为武將，曾任都指揮使、衛百戶、中軍都督府都督僉事。（中国历代人物传记资料库 CBDB 66690）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qOZxiSguXlX9ILAGfL-oT9
          claim_id: c_HFeYBedP94f4XhWEsLoNwP
          source_id: s_14CU4as6MUX69ezfHYbEkM
          stance: supports
          locator: CBDB:66690
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

# 王聰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聰 | accepted |
| birth.date | 1357年 | accepted |
| death.date | 1409年 | accepted |
| bio.summary | 王聰（1357年—1409年），明人物。籍贯蘄水，身份为武將，曾任都指揮使、衛百戶、中軍都督府都督僉事。（中国历代人物传记资料库 CBDB 66690） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 66690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66690&o=json)
