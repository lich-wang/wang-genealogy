---
schema: wang-person/v1
id: p_HW7RJziVqW97Ey4Mxx7Uku
status: active
merged_into: null
display_name: 王希旦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H1QBZNtrcpC7jZ7AePhH93
        subject_person_id: p_HW7RJziVqW97Ey4Mxx7Uku
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希旦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ChjdhCKR5MwBFBeKpEBF4H
          claim_id: c_H1QBZNtrcpC7jZ7AePhH93
          source_id: s_TC2iuVs491hMqZN2ufVFqN
          stance: supports
          locator: CBDB:71684
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71684）
          source: &a1
            id: s_TC2iuVs491hMqZN2ufVFqN
            source_type: api_record
            title: 中国历代人物传记资料库：王希旦（CBDB 71684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71684&o=json
            external_identifier: CBDB:71684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.828Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Dd4F7hPq6Kr583CrFY3jFf
        subject_person_id: p_HW7RJziVqW97Ey4Mxx7Uku
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1804年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PX9G24HUtSLf5KP3kvi6W9
          claim_id: c_Dd4F7hPq6Kr583CrFY3jFf
          source_id: s_TC2iuVs491hMqZN2ufVFqN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UFKH9Jv9jgpeDufz6K58NE
        subject_person_id: p_HW7RJziVqW97Ey4Mxx7Uku
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希旦（生于1804年），清人物。明清進士進士，籍贯吳縣，入仕進士。（中国历代人物传记资料库 CBDB 71684）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HnPKT5_ItgSVe2uKEePI9s
          claim_id: c_UFKH9Jv9jgpeDufz6K58NE
          source_id: s_TC2iuVs491hMqZN2ufVFqN
          stance: supports
          locator: CBDB:71684
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

# 王希旦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希旦 | accepted |
| birth.date | 1804年 | accepted |
| bio.summary | 王希旦（生于1804年），清人物。明清進士進士，籍贯吳縣，入仕進士。（中国历代人物传记资料库 CBDB 71684） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希旦（CBDB 71684）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71684&o=json)
