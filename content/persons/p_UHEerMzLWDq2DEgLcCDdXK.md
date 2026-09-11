---
schema: wang-person/v1
id: p_UHEerMzLWDq2DEgLcCDdXK
status: active
merged_into: null
display_name: 王今遠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CkQx69RRczFktA1STHgWRA
        subject_person_id: p_UHEerMzLWDq2DEgLcCDdXK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王今遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N7vqz3GyWSkrZFcaoWuuo2
          claim_id: c_CkQx69RRczFktA1STHgWRA
          source_id: s_LVMPMAF6RUx7isoKg3sP2U
          stance: supports
          locator: CBDB:343718
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343718）
          source: &a1
            id: s_LVMPMAF6RUx7isoKg3sP2U
            source_type: api_record
            title: 中国历代人物传记资料库：王今遠（CBDB 343718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343718&o=json
            external_identifier: CBDB:343718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.473Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XNPjWGrf3T18Veexk3spTm
        subject_person_id: p_UHEerMzLWDq2DEgLcCDdXK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王今遠，清人物。明清進士進士，籍贯曲周，入仕進士。（中国历代人物传记资料库 CBDB 343718）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1zaQmfpaCe2fOwYf85E4Nx
          claim_id: c_XNPjWGrf3T18Veexk3spTm
          source_id: s_LVMPMAF6RUx7isoKg3sP2U
          stance: supports
          locator: CBDB:343718
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

# 王今遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王今遠 | accepted |
| bio.summary | 王今遠，清人物。明清進士進士，籍贯曲周，入仕進士。（中国历代人物传记资料库 CBDB 343718） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王今遠（CBDB 343718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343718&o=json)
