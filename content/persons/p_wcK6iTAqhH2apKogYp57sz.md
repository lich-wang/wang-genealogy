---
schema: wang-person/v1
id: p_wcK6iTAqhH2apKogYp57sz
status: active
merged_into: null
display_name: 王諶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LLeWvWwGnKPAoFMqW8h6vU
        subject_person_id: p_wcK6iTAqhH2apKogYp57sz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hyQeMa9mqZ7Psr5NYbgDoy
          claim_id: c_LLeWvWwGnKPAoFMqW8h6vU
          source_id: s_2J5RpcnQFN6exniqJTDa7v
          stance: supports
          locator: CBDB:37420
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37420）
          source: &a1
            id: s_2J5RpcnQFN6exniqJTDa7v
            source_type: api_record
            title: 中国历代人物传记资料库：王諶（CBDB 37420）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37420&o=json
            external_identifier: CBDB:37420
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.202Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LLNYoB5w1i4NTUdBJ9MCeM
        subject_person_id: p_wcK6iTAqhH2apKogYp57sz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諶，宋人物。曾任軍事推官。（中国历代人物传记资料库 CBDB 37420）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_l7j1TLwxYXVIHbuhIGx3o_
          claim_id: c_LLNYoB5w1i4NTUdBJ9MCeM
          source_id: s_2J5RpcnQFN6exniqJTDa7v
          stance: supports
          locator: CBDB:37420
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

# 王諶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諶 | accepted |
| bio.summary | 王諶，宋人物。曾任軍事推官。（中国历代人物传记资料库 CBDB 37420） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王諶（CBDB 37420）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37420&o=json)
