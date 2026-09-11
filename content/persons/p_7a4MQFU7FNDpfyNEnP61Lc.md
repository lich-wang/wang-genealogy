---
schema: wang-person/v1
id: p_7a4MQFU7FNDpfyNEnP61Lc
status: active
merged_into: null
display_name: 王敬鑄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gY3PKU6SFQ6HM93k2WXgbm
        subject_person_id: p_7a4MQFU7FNDpfyNEnP61Lc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬鑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kXRGKCETaykVzpTwdvNNCU
          claim_id: c_gY3PKU6SFQ6HM93k2WXgbm
          source_id: s_8zhYoHRFUMMN1X4FZ7ZE2S
          stance: supports
          locator: CBDB:638205
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638205）
          source: &a1
            id: s_8zhYoHRFUMMN1X4FZ7ZE2S
            source_type: api_record
            title: 中国历代人物传记资料库：王敬鑄（CBDB 638205）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638205&o=json
            external_identifier: CBDB:638205
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6Wpco3dEJUGrdPTiWPCiab
        subject_person_id: p_7a4MQFU7FNDpfyNEnP61Lc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬鑄，清人物。籍贯淄川，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 638205）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JG7ieckCzIZxSKWMxaVgO-
          claim_id: c_6Wpco3dEJUGrdPTiWPCiab
          source_id: s_8zhYoHRFUMMN1X4FZ7ZE2S
          stance: supports
          locator: CBDB:638205
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

# 王敬鑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬鑄 | accepted |
| bio.summary | 王敬鑄，清人物。籍贯淄川，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 638205） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬鑄（CBDB 638205）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638205&o=json)
