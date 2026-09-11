---
schema: wang-person/v1
id: p_Cz2orfpx2Wv4N3RTzx414n
status: active
merged_into: null
display_name: 王鑄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PFFcqzEBMmnHuJpvQjY55b
        subject_person_id: p_Cz2orfpx2Wv4N3RTzx414n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2PBNuiM5JXB6V8y4a2EX28
          claim_id: c_PFFcqzEBMmnHuJpvQjY55b
          source_id: s_ACkNiC4dsPJPTJJoCL3gke
          stance: supports
          locator: CBDB:685157
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（685157）
          source: &a1
            id: s_ACkNiC4dsPJPTJJoCL3gke
            source_type: api_record
            title: 中国历代人物传记资料库：王鑄（CBDB 685157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685157&o=json
            external_identifier: CBDB:685157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.317Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RNB7KKBCLiPgbW9EyVRRzF
        subject_person_id: p_Cz2orfpx2Wv4N3RTzx414n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑄，宋人物。籍贯麗水，入仕進士。（中国历代人物传记资料库 CBDB 685157）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZFJxZwNmzjQ59Qw5j0WBMY
          claim_id: c_RNB7KKBCLiPgbW9EyVRRzF
          source_id: s_ACkNiC4dsPJPTJJoCL3gke
          stance: supports
          locator: CBDB:685157
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

# 王鑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑄 | accepted |
| bio.summary | 王鑄，宋人物。籍贯麗水，入仕進士。（中国历代人物传记资料库 CBDB 685157） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑄（CBDB 685157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685157&o=json)
