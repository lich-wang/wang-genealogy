---
schema: wang-person/v1
id: p_Dbu8X8XkeDVBwuxr6jAJBG
status: active
merged_into: null
display_name: 王廷珪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c9ni5A8Re5N8yKvanTPNxG
        subject_person_id: p_Dbu8X8XkeDVBwuxr6jAJBG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LVwPhjqFk8H7JW6YMx4nBG
          claim_id: c_c9ni5A8Re5N8yKvanTPNxG
          source_id: s_quo97okc6g9cB1PvCjx6Cu
          stance: supports
          locator: CBDB:548168
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（548168）
          source: &a1
            id: s_quo97okc6g9cB1PvCjx6Cu
            source_type: api_record
            title: 中国历代人物传记资料库：王廷珪（CBDB 548168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=548168&o=json
            external_identifier: CBDB:548168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4KYaxTN93zdYrmPiiYgQT3
        subject_person_id: p_Dbu8X8XkeDVBwuxr6jAJBG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷珪，宋人物。籍贯遂寧，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 548168）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_f3-fE6aMym4ja6GBGrw1Qd
          claim_id: c_4KYaxTN93zdYrmPiiYgQT3
          source_id: s_quo97okc6g9cB1PvCjx6Cu
          stance: supports
          locator: CBDB:548168
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

# 王廷珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷珪 | accepted |
| bio.summary | 王廷珪，宋人物。籍贯遂寧，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 548168） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷珪（CBDB 548168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=548168&o=json)
