---
schema: wang-person/v1
id: p_KhPtoLMjKMsJVBuf79up8Y
status: active
merged_into: null
display_name: 王无咎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4NJ2Mo9VHUMUPQSeJovFuE
        subject_person_id: p_KhPtoLMjKMsJVBuf79up8Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王无咎
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EgszXLKBepCY8AgLQHsisi
          claim_id: c_4NJ2Mo9VHUMUPQSeJovFuE
          source_id: s_XcGhYJEk87f6bmX1Z5oSei
          stance: supports
          locator: CBDB:536792
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（536792）
          source: &a1
            id: s_XcGhYJEk87f6bmX1Z5oSei
            source_type: api_record
            title: 中国历代人物传记资料库：王无咎（CBDB 536792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=536792&o=json
            external_identifier: CBDB:536792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.406Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iExkSpwEF2asyYbjBps8HE
        subject_person_id: p_KhPtoLMjKMsJVBuf79up8Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王无咎，宋人物。籍贯南城，入仕進士。（中国历代人物传记资料库 CBDB 536792）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Fw67Qm6DuxIsTTBdtzGsmh
          claim_id: c_iExkSpwEF2asyYbjBps8HE
          source_id: s_XcGhYJEk87f6bmX1Z5oSei
          stance: supports
          locator: CBDB:536792
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

# 王无咎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王无咎 | accepted |
| bio.summary | 王无咎，宋人物。籍贯南城，入仕進士。（中国历代人物传记资料库 CBDB 536792） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王无咎（CBDB 536792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=536792&o=json)
