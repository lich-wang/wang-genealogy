---
schema: wang-person/v1
id: p_XWj8fEpfoRo1gCmo72D7TH
status: active
merged_into: null
display_name: 王竚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vgYswC8ySREFpJ9zsNa5rL
        subject_person_id: p_XWj8fEpfoRo1gCmo72D7TH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王竚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_go5zJB15EZ6wij2ZajZb6N
          claim_id: c_vgYswC8ySREFpJ9zsNa5rL
          source_id: s_8z6hCDAVb3T9qRXNAVuw8M
          stance: supports
          locator: CBDB:341666
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341666）
          source: &a1
            id: s_8z6hCDAVb3T9qRXNAVuw8M
            source_type: api_record
            title: 中国历代人物传记资料库：王竚（CBDB 341666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341666&o=json
            external_identifier: CBDB:341666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.635Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GZ7w6UfRg96ghnFDt9Fs3V
        subject_person_id: p_XWj8fEpfoRo1gCmo72D7TH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王竚，清人物。明清進士進士，籍贯易州直隸州，入仕進士。（中国历代人物传记资料库 CBDB 341666）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6Qfx4K-HmJF_mtcEEuDWSh
          claim_id: c_GZ7w6UfRg96ghnFDt9Fs3V
          source_id: s_8z6hCDAVb3T9qRXNAVuw8M
          stance: supports
          locator: CBDB:341666
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

# 王竚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王竚 | accepted |
| bio.summary | 王竚，清人物。明清進士進士，籍贯易州直隸州，入仕進士。（中国历代人物传记资料库 CBDB 341666） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王竚（CBDB 341666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341666&o=json)
