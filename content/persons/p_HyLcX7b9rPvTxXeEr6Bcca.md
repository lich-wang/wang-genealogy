---
schema: wang-person/v1
id: p_HyLcX7b9rPvTxXeEr6Bcca
status: active
merged_into: null
display_name: 王富來
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VBUe6FgarJu7yzRb2DncsP
        subject_person_id: p_HyLcX7b9rPvTxXeEr6Bcca
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王富來
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HPBvyLgB8aqMxvCw92FQnf
          claim_id: c_VBUe6FgarJu7yzRb2DncsP
          source_id: s_uLGhFrbBBxNFtkiYfCt8xZ
          stance: supports
          locator: CBDB:69372
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69372）
          source: &a1
            id: s_uLGhFrbBBxNFtkiYfCt8xZ
            source_type: api_record
            title: 中国历代人物传记资料库：王富來（CBDB 69372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69372&o=json
            external_identifier: CBDB:69372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.112Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GHCaTNNJf77So23K4SN9jC
        subject_person_id: p_HyLcX7b9rPvTxXeEr6Bcca
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1858年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ynxDjSNVcbkz7d6NQ8G3rH
          claim_id: c_GHCaTNNJf77So23K4SN9jC
          source_id: s_uLGhFrbBBxNFtkiYfCt8xZ
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
        id: c_4vTnKiWu97wTXGQ1SyKvFa
        subject_person_id: p_HyLcX7b9rPvTxXeEr6Bcca
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王富來（卒于1858年），清人物。籍贯直隸省，入仕募入軍伍，曾任營守備。（中国历代人物传记资料库 CBDB 69372）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fp5J5GNr66RitRXB3iN-oE
          claim_id: c_4vTnKiWu97wTXGQ1SyKvFa
          source_id: s_uLGhFrbBBxNFtkiYfCt8xZ
          stance: supports
          locator: CBDB:69372
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

# 王富來

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王富來 | accepted |
| death.date | 1858年 | accepted |
| bio.summary | 王富來（卒于1858年），清人物。籍贯直隸省，入仕募入軍伍，曾任營守備。（中国历代人物传记资料库 CBDB 69372） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王富來（CBDB 69372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69372&o=json)
