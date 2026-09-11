---
schema: wang-person/v1
id: p_M1VL7FvQeCHeEkUja3CrW6
status: active
merged_into: null
display_name: 王業浩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YnLMLDmnE4mMAtxqrUnofo
        subject_person_id: p_M1VL7FvQeCHeEkUja3CrW6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業浩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fP2H7fqcrMoU4chJALVkmN
          claim_id: c_YnLMLDmnE4mMAtxqrUnofo
          source_id: s_JejQYJ2ZNBLdLmjU21eB9u
          stance: supports
          locator: CBDB:30382
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30382）
          source: &a1
            id: s_JejQYJ2ZNBLdLmjU21eB9u
            source_type: api_record
            title: 中国历代人物传记资料库：王業浩（CBDB 30382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30382&o=json
            external_identifier: CBDB:30382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.031Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1EhXusAiYg7aqLD9WikPtB
        subject_person_id: p_M1VL7FvQeCHeEkUja3CrW6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1643年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8svQGywXKyv3Qx5KA7AL2h
          claim_id: c_1EhXusAiYg7aqLD9WikPtB
          source_id: s_JejQYJ2ZNBLdLmjU21eB9u
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_La9MMv1LrcFKQFHqJDhgof
        subject_person_id: p_M1VL7FvQeCHeEkUja3CrW6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業浩（卒于1643年），明人物。明清進士進士，籍贯餘姚，入仕進士，曾任兵部尚書、兵部侍郎、兵部右侍郎。（中国历代人物传记资料库 CBDB 30382）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IUiYzTSBHCszFJvurlm6bu
          claim_id: c_La9MMv1LrcFKQFHqJDhgof
          source_id: s_JejQYJ2ZNBLdLmjU21eB9u
          stance: supports
          locator: CBDB:30382
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

# 王業浩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王業浩 | accepted |
| death.date | 1643年 | accepted |
| bio.summary | 王業浩（卒于1643年），明人物。明清進士進士，籍贯餘姚，入仕進士，曾任兵部尚書、兵部侍郎、兵部右侍郎。（中国历代人物传记资料库 CBDB 30382） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王業浩（CBDB 30382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30382&o=json)
