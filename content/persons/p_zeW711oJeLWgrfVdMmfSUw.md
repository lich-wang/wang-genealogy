---
schema: wang-person/v1
id: p_zeW711oJeLWgrfVdMmfSUw
status: active
merged_into: null
display_name: 王澗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gD3JAygKYy5gyARzvvMRCc
        subject_person_id: p_zeW711oJeLWgrfVdMmfSUw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZY3gRfApJV2vgDqrpPp7UA
          claim_id: c_gD3JAygKYy5gyARzvvMRCc
          source_id: s_JbB8a7q84yBu1EH2hu5usH
          stance: supports
          locator: CBDB:265676
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265676）
          source: &a1
            id: s_JbB8a7q84yBu1EH2hu5usH
            source_type: api_record
            title: 中国历代人物传记资料库：王澗（CBDB 265676）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265676&o=json
            external_identifier: CBDB:265676
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.700Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zt3uQ39pxQdLw8iTiMWfHj
        subject_person_id: p_zeW711oJeLWgrfVdMmfSUw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澗，明人物。弘治六年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 265676）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DZTuAWWlHbYku6-VKRITRi
          claim_id: c_zt3uQ39pxQdLw8iTiMWfHj
          source_id: s_JbB8a7q84yBu1EH2hu5usH
          stance: supports
          locator: CBDB:265676
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

# 王澗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澗 | accepted |
| bio.summary | 王澗，明人物。弘治六年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 265676） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澗（CBDB 265676）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265676&o=json)
