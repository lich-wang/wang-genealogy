---
schema: wang-person/v1
id: p_yUA3BVGs83tbisQyeJji8U
status: active
merged_into: null
display_name: 王承煦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pC9K1YLYoRpvCv51AcDkRQ
        subject_person_id: p_yUA3BVGs83tbisQyeJji8U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承煦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QHXegNsbLAgi95xvyCo1N6
          claim_id: c_pC9K1YLYoRpvCv51AcDkRQ
          source_id: s_uZkWyp5Zso6mRXm8GA5pc7
          stance: supports
          locator: CBDB:342051
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342051）
          source: &a1
            id: s_uZkWyp5Zso6mRXm8GA5pc7
            source_type: api_record
            title: 中国历代人物传记资料库：王承煦（CBDB 342051）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342051&o=json
            external_identifier: CBDB:342051
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.825Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Re8592dxDdwpfnzmcrYQcZ
        subject_person_id: p_yUA3BVGs83tbisQyeJji8U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承煦，清人物。明清進士進士，籍贯舒城，入仕進士。（中国历代人物传记资料库 CBDB 342051）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-zJ56OLzTwyO4nFau3yaeu
          claim_id: c_Re8592dxDdwpfnzmcrYQcZ
          source_id: s_uZkWyp5Zso6mRXm8GA5pc7
          stance: supports
          locator: CBDB:342051
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

# 王承煦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承煦 | accepted |
| bio.summary | 王承煦，清人物。明清進士進士，籍贯舒城，入仕進士。（中国历代人物传记资料库 CBDB 342051） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承煦（CBDB 342051）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342051&o=json)
