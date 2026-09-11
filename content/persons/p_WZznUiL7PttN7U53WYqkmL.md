---
schema: wang-person/v1
id: p_WZznUiL7PttN7U53WYqkmL
status: active
merged_into: null
display_name: 王晟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6HuBX22Q3qqtj7LxL3x3f5
        subject_person_id: p_WZznUiL7PttN7U53WYqkmL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jh3z9JGk1bcvWDKh5PusEG
          claim_id: c_6HuBX22Q3qqtj7LxL3x3f5
          source_id: s_hnQ61Yf8qGkMMtboyVPCBk
          stance: supports
          locator: CBDB:343454
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343454）
          source: &a1
            id: s_hnQ61Yf8qGkMMtboyVPCBk
            source_type: api_record
            title: 中国历代人物传记资料库：王晟（CBDB 343454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343454&o=json
            external_identifier: CBDB:343454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.356Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E9sS15iDBDuLJrvCNnhcH6
        subject_person_id: p_WZznUiL7PttN7U53WYqkmL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晟，清人物。明清進士進士，籍贯靈州，入仕進士。（中国历代人物传记资料库 CBDB 343454）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZqX4Nkus6aZ_G0Om6W9MY7
          claim_id: c_E9sS15iDBDuLJrvCNnhcH6
          source_id: s_hnQ61Yf8qGkMMtboyVPCBk
          stance: supports
          locator: CBDB:343454
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

# 王晟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晟 | accepted |
| bio.summary | 王晟，清人物。明清進士進士，籍贯靈州，入仕進士。（中国历代人物传记资料库 CBDB 343454） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晟（CBDB 343454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343454&o=json)
