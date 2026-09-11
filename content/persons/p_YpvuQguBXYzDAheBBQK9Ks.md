---
schema: wang-person/v1
id: p_YpvuQguBXYzDAheBBQK9Ks
status: active
merged_into: null
display_name: 王無黨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KqscrEgxeQUB38W3FU9Xpc
        subject_person_id: p_YpvuQguBXYzDAheBBQK9Ks
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王無黨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eWA76UrRENf6AohM1QM9xu
          claim_id: c_KqscrEgxeQUB38W3FU9Xpc
          source_id: s_S1aB8pAq7CKLYuQf96HCgd
          stance: supports
          locator: CBDB:57187
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57187）
          source: &a1
            id: s_S1aB8pAq7CKLYuQf96HCgd
            source_type: api_record
            title: 中国历代人物传记资料库：王無黨（CBDB 57187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57187&o=json
            external_identifier: CBDB:57187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.089Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Hrwpx7XkvserVYqx22PVtj
        subject_person_id: p_YpvuQguBXYzDAheBBQK9Ks
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1763年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qeqs3ihgi6DjaCmQGAXwBt
          claim_id: c_Hrwpx7XkvserVYqx22PVtj
          source_id: s_S1aB8pAq7CKLYuQf96HCgd
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
        id: c_rK2TAHgofSUvuL124mxo3P
        subject_person_id: p_YpvuQguBXYzDAheBBQK9Ks
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王無黨（卒于1763年），清人物。籍贯萬全，入仕武舉進士，曾任藍翎侍衛、鑾儀衛鑾儀使、提督。（中国历代人物传记资料库 CBDB 57187）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XTIl7D17vQSEZhF-HfqGC7
          claim_id: c_rK2TAHgofSUvuL124mxo3P
          source_id: s_S1aB8pAq7CKLYuQf96HCgd
          stance: supports
          locator: CBDB:57187
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

# 王無黨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王無黨 | accepted |
| death.date | 1763年 | accepted |
| bio.summary | 王無黨（卒于1763年），清人物。籍贯萬全，入仕武舉進士，曾任藍翎侍衛、鑾儀衛鑾儀使、提督。（中国历代人物传记资料库 CBDB 57187） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王無黨（CBDB 57187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57187&o=json)
