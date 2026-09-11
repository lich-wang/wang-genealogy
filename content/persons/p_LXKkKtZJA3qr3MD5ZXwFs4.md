---
schema: wang-person/v1
id: p_LXKkKtZJA3qr3MD5ZXwFs4
status: active
merged_into: null
display_name: 王鐸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RwF6MTm2g3NK9hkQXG2sKD
        subject_person_id: p_LXKkKtZJA3qr3MD5ZXwFs4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fcD9GAynYYXHjoMcHMChDa
          claim_id: c_RwF6MTm2g3NK9hkQXG2sKD
          source_id: s_eiHXFzGMJ3fSRUCiGhxmFQ
          stance: supports
          locator: CBDB:237181
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237181）
          source: &a1
            id: s_eiHXFzGMJ3fSRUCiGhxmFQ
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 237181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237181&o=json
            external_identifier: CBDB:237181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.824Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wdD4gPQNnCCp6mQdm2jNHa
        subject_person_id: p_LXKkKtZJA3qr3MD5ZXwFs4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸，明人物。正統四年進士，籍贯遷安。（中国历代人物传记资料库 CBDB 237181）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vJo7V-XiWwia5NgBypK1QN
          claim_id: c_wdD4gPQNnCCp6mQdm2jNHa
          source_id: s_eiHXFzGMJ3fSRUCiGhxmFQ
          stance: supports
          locator: CBDB:237181
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

# 王鐸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐸 | accepted |
| bio.summary | 王鐸，明人物。正統四年進士，籍贯遷安。（中国历代人物传记资料库 CBDB 237181） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 237181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237181&o=json)
