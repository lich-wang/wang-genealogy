---
schema: wang-person/v1
id: p_hg7FJVCk9LkRPU9H7CuSCc
status: active
merged_into: null
display_name: 王嶷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_864gqQDVhXdzpFTL3WBPKC
        subject_person_id: p_hg7FJVCk9LkRPU9H7CuSCc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8CzHoka4Nptk3to99MSN2j
          claim_id: c_864gqQDVhXdzpFTL3WBPKC
          source_id: s_cbp8hE6spGfVp31Rd6XWpJ
          stance: supports
          locator: CBDB:380482
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（380482）
          source: &a1
            id: s_cbp8hE6spGfVp31Rd6XWpJ
            source_type: api_record
            title: 中国历代人物传记资料库：王嶷（CBDB 380482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380482&o=json
            external_identifier: CBDB:380482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.726Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_twCRw1XbnpZCLabknFLm36
        subject_person_id: p_hg7FJVCk9LkRPU9H7CuSCc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嶷，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 380482）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_l0R2QB8iUJ1OeC1zAhn0k_
          claim_id: c_twCRw1XbnpZCLabknFLm36
          source_id: s_cbp8hE6spGfVp31Rd6XWpJ
          stance: supports
          locator: CBDB:380482
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

# 王嶷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嶷 | accepted |
| bio.summary | 王嶷，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 380482） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嶷（CBDB 380482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380482&o=json)
