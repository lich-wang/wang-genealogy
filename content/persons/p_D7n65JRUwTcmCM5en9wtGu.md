---
schema: wang-person/v1
id: p_D7n65JRUwTcmCM5en9wtGu
status: active
merged_into: null
display_name: 王福啟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ojTEZsfEqg5DEw7gY3KASm
        subject_person_id: p_D7n65JRUwTcmCM5en9wtGu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福啟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_48HwMRaQch3LY1Abjn9Gbi
          claim_id: c_ojTEZsfEqg5DEw7gY3KASm
          source_id: s_ixCqAhoZdam9guTayaA725
          stance: supports
          locator: CBDB:693724
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（693724）
          source: &a1
            id: s_ixCqAhoZdam9guTayaA725
            source_type: api_record
            title: 中国历代人物传记资料库：王福啟（CBDB 693724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693724&o=json
            external_identifier: CBDB:693724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.510Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9d4FBCWFzfpdoLbdvDC2vb
        subject_person_id: p_D7n65JRUwTcmCM5en9wtGu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福啟，清人物。籍贯黟縣，身份为為善鄉里、商人。（中国历代人物传记资料库 CBDB 693724）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s27A-gJbmDAUSfVU7LpbwD
          claim_id: c_9d4FBCWFzfpdoLbdvDC2vb
          source_id: s_ixCqAhoZdam9guTayaA725
          stance: supports
          locator: CBDB:693724
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

# 王福啟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福啟 | accepted |
| bio.summary | 王福啟，清人物。籍贯黟縣，身份为為善鄉里、商人。（中国历代人物传记资料库 CBDB 693724） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福啟（CBDB 693724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693724&o=json)
