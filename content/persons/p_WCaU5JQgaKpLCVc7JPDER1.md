---
schema: wang-person/v1
id: p_WCaU5JQgaKpLCVc7JPDER1
status: active
merged_into: null
display_name: 王滌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NDm9NKXS5S7DiX723w765s
        subject_person_id: p_WCaU5JQgaKpLCVc7JPDER1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V8KhCJAni8v1r93MzkoHjH
          claim_id: c_NDm9NKXS5S7DiX723w765s
          source_id: s_bzZt6W2e9B6YHjN3MCdqy8
          stance: supports
          locator: CBDB:39080
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39080）
          source: &a1
            id: s_bzZt6W2e9B6YHjN3MCdqy8
            source_type: api_record
            title: 中国历代人物传记资料库：王滌（CBDB 39080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39080&o=json
            external_identifier: CBDB:39080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.590Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_REdU8azsFCiPH9BTJ5Ep7G
        subject_person_id: p_WCaU5JQgaKpLCVc7JPDER1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滌，宋人物。籍贯萊州。（中国历代人物传记资料库 CBDB 39080）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hR6A-T1PR7P1P9fF3r-kGp
          claim_id: c_REdU8azsFCiPH9BTJ5Ep7G
          source_id: s_bzZt6W2e9B6YHjN3MCdqy8
          stance: supports
          locator: CBDB:39080
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

# 王滌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王滌 | accepted |
| bio.summary | 王滌，宋人物。籍贯萊州。（中国历代人物传记资料库 CBDB 39080） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王滌（CBDB 39080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39080&o=json)
