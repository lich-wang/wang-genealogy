---
schema: wang-person/v1
id: p_uj5CLmvfB4euhULD7fRHEY
status: active
merged_into: null
display_name: 王寅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PrFiPx2ZKpFc84PUGc6PRy
        subject_person_id: p_uj5CLmvfB4euhULD7fRHEY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vtvfRBdzJJ3NHPhYRw4tXH
          claim_id: c_PrFiPx2ZKpFc84PUGc6PRy
          source_id: s_kiqn23QJcx2STKA6tty74J
          stance: supports
          locator: CBDB:386578
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（386578）
          source: &a1
            id: s_kiqn23QJcx2STKA6tty74J
            source_type: api_record
            title: 中国历代人物传记资料库：王寅（CBDB 386578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386578&o=json
            external_identifier: CBDB:386578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.897Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BBzzsMJMt1vgg4NmZkfJDx
        subject_person_id: p_uj5CLmvfB4euhULD7fRHEY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4dk2tDNMAazNcQS3N2pYXw
          claim_id: c_BBzzsMJMt1vgg4NmZkfJDx
          source_id: s_kiqn23QJcx2STKA6tty74J
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王寅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寅 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寅（CBDB 386578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386578&o=json)
