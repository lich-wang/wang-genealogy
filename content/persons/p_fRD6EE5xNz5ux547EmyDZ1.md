---
schema: wang-person/v1
id: p_fRD6EE5xNz5ux547EmyDZ1
status: active
merged_into: null
display_name: 王世臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yPBND57VFJpsoxjP5BKfjE
        subject_person_id: p_fRD6EE5xNz5ux547EmyDZ1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oCq4zcHTnNjcL9HzG2o2DK
          claim_id: c_yPBND57VFJpsoxjP5BKfjE
          source_id: s_q7a9mTxkMHe84MbqpfceEj
          stance: supports
          locator: CBDB:59951
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（59951）
          source: &a1
            id: s_q7a9mTxkMHe84MbqpfceEj
            source_type: api_record
            title: 中国历代人物传记资料库：王世臣（CBDB 59951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59951&o=json
            external_identifier: CBDB:59951
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NhLYhKbJy93ppeeGBB7px2
        subject_person_id: p_fRD6EE5xNz5ux547EmyDZ1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1716年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KJQiuKMJgXKBwBPYEmoYKi
          claim_id: c_NhLYhKbJy93ppeeGBB7px2
          source_id: s_q7a9mTxkMHe84MbqpfceEj
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
        id: c_UQKzHMaimaempYZ4FcFttH
        subject_person_id: p_fRD6EE5xNz5ux547EmyDZ1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世臣（卒于1716年），清人物。籍贯浙江省，曾任營遊擊、駐防、總兵官。（中国历代人物传记资料库 CBDB 59951）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D9YuX0P4czx8CRo2xgYwo9
          claim_id: c_UQKzHMaimaempYZ4FcFttH
          source_id: s_q7a9mTxkMHe84MbqpfceEj
          stance: supports
          locator: CBDB:59951
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

# 王世臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世臣 | accepted |
| death.date | 1716年 | accepted |
| bio.summary | 王世臣（卒于1716年），清人物。籍贯浙江省，曾任營遊擊、駐防、總兵官。（中国历代人物传记资料库 CBDB 59951） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世臣（CBDB 59951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=59951&o=json)
