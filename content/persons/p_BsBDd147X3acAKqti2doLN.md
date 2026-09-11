---
schema: wang-person/v1
id: p_BsBDd147X3acAKqti2doLN
status: active
merged_into: null
display_name: 王開俊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qPLMBEGC6CKjrjh8jLTk6J
        subject_person_id: p_BsBDd147X3acAKqti2doLN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BkB9AJbFyGTsZp4G1FP2DD
          claim_id: c_qPLMBEGC6CKjrjh8jLTk6J
          source_id: s_N9w2HYmMB3zsWaPmkYtV9b
          stance: supports
          locator: CBDB:69376
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69376）
          source: &a1
            id: s_N9w2HYmMB3zsWaPmkYtV9b
            source_type: api_record
            title: 中国历代人物传记资料库：王開俊（CBDB 69376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69376&o=json
            external_identifier: CBDB:69376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.114Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_kvPZPu5NsJv9DCdSTxdWJW
        subject_person_id: p_BsBDd147X3acAKqti2doLN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1875年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yWhGYwJP4ujGSRZWEJPdVm
          claim_id: c_kvPZPu5NsJv9DCdSTxdWJW
          source_id: s_N9w2HYmMB3zsWaPmkYtV9b
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
        id: c_JGokXsVZ4PR6e5L7ALVX1S
        subject_person_id: p_BsBDd147X3acAKqti2doLN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開俊（卒于1875年），清人物。籍贯平越直隸州，入仕募入軍伍，曾任標左營千總、陸路提標左營遊擊、營遊擊。（中国历代人物传记资料库 CBDB 69376）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SNES_quhcstVZB5SVcmBuV
          claim_id: c_JGokXsVZ4PR6e5L7ALVX1S
          source_id: s_N9w2HYmMB3zsWaPmkYtV9b
          stance: supports
          locator: CBDB:69376
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

# 王開俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王開俊 | accepted |
| death.date | 1875年 | accepted |
| bio.summary | 王開俊（卒于1875年），清人物。籍贯平越直隸州，入仕募入軍伍，曾任標左營千總、陸路提標左營遊擊、營遊擊。（中国历代人物传记资料库 CBDB 69376） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王開俊（CBDB 69376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69376&o=json)
