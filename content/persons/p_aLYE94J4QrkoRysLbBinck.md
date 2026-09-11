---
schema: wang-person/v1
id: p_aLYE94J4QrkoRysLbBinck
status: active
merged_into: null
display_name: 王超几
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6dhNqsHdhKP1vf74dL2YTQ
        subject_person_id: p_aLYE94J4QrkoRysLbBinck
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王超几
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZC8NL5dbwt8qrN8NReGzVb
          claim_id: c_6dhNqsHdhKP1vf74dL2YTQ
          source_id: s_rus2FDP7eC9nsDZAzfJMUT
          stance: supports
          locator: CBDB:640360
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640360）
          source: &a1
            id: s_rus2FDP7eC9nsDZAzfJMUT
            source_type: api_record
            title: 中国历代人物传记资料库：王超几（CBDB 640360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640360&o=json
            external_identifier: CBDB:640360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.234Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TZ1JWMTy99V9anxLKiZnx6
        subject_person_id: p_aLYE94J4QrkoRysLbBinck
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王超几，清人物。籍贯武平，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任州判。（中国历代人物传记资料库 CBDB 640360）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LvY1WbRassN8DsQuhm8LFa
          claim_id: c_TZ1JWMTy99V9anxLKiZnx6
          source_id: s_rus2FDP7eC9nsDZAzfJMUT
          stance: supports
          locator: CBDB:640360
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

# 王超几

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王超几 | accepted |
| bio.summary | 王超几，清人物。籍贯武平，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任州判。（中国历代人物传记资料库 CBDB 640360） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王超几（CBDB 640360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640360&o=json)
