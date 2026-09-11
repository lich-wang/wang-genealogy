---
schema: wang-person/v1
id: p_6txg6ZLYthq2n2oYYfNbqL
status: active
merged_into: null
display_name: 王亨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_21AtbyyooAWTZd2zP94WyU
        subject_person_id: p_6txg6ZLYthq2n2oYYfNbqL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e9LZ78t9wCe7v8UA23Lrxa
          claim_id: c_21AtbyyooAWTZd2zP94WyU
          source_id: s_fd2UFTUpNsXFcJPpx9vTWR
          stance: supports
          locator: CBDB:35387
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35387）
          source: &a1
            id: s_fd2UFTUpNsXFcJPpx9vTWR
            source_type: api_record
            title: 中国历代人物传记资料库：王亨（CBDB 35387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35387&o=json
            external_identifier: CBDB:35387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4C64pujWq34BCvNrcsxJTb
        subject_person_id: p_6txg6ZLYthq2n2oYYfNbqL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亨，元人物。籍贯華陰。（中国历代人物传记资料库 CBDB 35387）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VEuTiZFAOVyXRIXhgWe5To
          claim_id: c_4C64pujWq34BCvNrcsxJTb
          source_id: s_fd2UFTUpNsXFcJPpx9vTWR
          stance: supports
          locator: CBDB:35387
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

# 王亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亨 | accepted |
| bio.summary | 王亨，元人物。籍贯華陰。（中国历代人物传记资料库 CBDB 35387） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王亨（CBDB 35387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35387&o=json)
