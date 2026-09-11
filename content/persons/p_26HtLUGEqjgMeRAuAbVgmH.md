---
schema: wang-person/v1
id: p_26HtLUGEqjgMeRAuAbVgmH
status: active
merged_into: null
display_name: 王嗣喆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zhmjHGU41sg4YPUSGAbBTp
        subject_person_id: p_26HtLUGEqjgMeRAuAbVgmH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣喆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9oCm5HQxvosKzj48kC22DY
          claim_id: c_zhmjHGU41sg4YPUSGAbBTp
          source_id: s_ECAFQUN7m6ZawQ1hnsTt1k
          stance: supports
          locator: CBDB:636596
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636596）
          source: &a1
            id: s_ECAFQUN7m6ZawQ1hnsTt1k
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣喆（CBDB 636596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636596&o=json
            external_identifier: CBDB:636596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.043Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Van52LbPwnLLRqK6ATYJQP
        subject_person_id: p_26HtLUGEqjgMeRAuAbVgmH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣喆，清人物。籍贯羅田，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636596）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hmrwqfIs-1axh9fxN81nK5
          claim_id: c_Van52LbPwnLLRqK6ATYJQP
          source_id: s_ECAFQUN7m6ZawQ1hnsTt1k
          stance: supports
          locator: CBDB:636596
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

# 王嗣喆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嗣喆 | accepted |
| bio.summary | 王嗣喆，清人物。籍贯羅田，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636596） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嗣喆（CBDB 636596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636596&o=json)
