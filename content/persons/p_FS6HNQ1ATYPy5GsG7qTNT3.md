---
schema: wang-person/v1
id: p_FS6HNQ1ATYPy5GsG7qTNT3
status: active
merged_into: null
display_name: 王彝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MZw5uhetpwkxSfCooA1DvE
        subject_person_id: p_FS6HNQ1ATYPy5GsG7qTNT3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7YK2ckdPYv8bTuZTBWKiic
          claim_id: c_MZw5uhetpwkxSfCooA1DvE
          source_id: s_9bHpnbBbbxkZhMPAnNwXZ7
          stance: supports
          locator: CBDB:243169
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（243169）
          source: &a1
            id: s_9bHpnbBbbxkZhMPAnNwXZ7
            source_type: api_record
            title: 中国历代人物传记资料库：王彝（CBDB 243169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243169&o=json
            external_identifier: CBDB:243169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.990Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_THUw2c899EBxLPr1Q2B85M
        subject_person_id: p_FS6HNQ1ATYPy5GsG7qTNT3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彝，明人物。成化五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 243169）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__7xhr9MjsTjoQCoa3hNrum
          claim_id: c_THUw2c899EBxLPr1Q2B85M
          source_id: s_9bHpnbBbbxkZhMPAnNwXZ7
          stance: supports
          locator: CBDB:243169
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

# 王彝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彝 | accepted |
| bio.summary | 王彝，明人物。成化五年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 243169） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彝（CBDB 243169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243169&o=json)
