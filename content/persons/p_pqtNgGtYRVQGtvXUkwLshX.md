---
schema: wang-person/v1
id: p_pqtNgGtYRVQGtvXUkwLshX
status: active
merged_into: null
display_name: 王從善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y6HQMDnTPmkjPWXmaimTG9
        subject_person_id: p_pqtNgGtYRVQGtvXUkwLshX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YosadLuiYxt4SS51GmV5pi
          claim_id: c_y6HQMDnTPmkjPWXmaimTG9
          source_id: s_1HxiA7a2eR9pwdQBoU8QxA
          stance: supports
          locator: CBDB:38179
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38179）
          source: &a1
            id: s_1HxiA7a2eR9pwdQBoU8QxA
            source_type: api_record
            title: 中国历代人物传记资料库：王從善（CBDB 38179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38179&o=json
            external_identifier: CBDB:38179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.387Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7Pp5aeHWAeduUNS4VHzp9e
        subject_person_id: p_pqtNgGtYRVQGtvXUkwLshX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王從善，宋人物。籍贯青州，入仕科舉學校: 恩賜出身、特賜出身等，曾任團練使、西京左藏庫使。（中国历代人物传记资料库 CBDB 38179）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7r3k1yb1Ytk3P4G-I3JFFm
          claim_id: c_7Pp5aeHWAeduUNS4VHzp9e
          source_id: s_1HxiA7a2eR9pwdQBoU8QxA
          stance: supports
          locator: CBDB:38179
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

# 王從善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王從善 | accepted |
| bio.summary | 王從善，宋人物。籍贯青州，入仕科舉學校: 恩賜出身、特賜出身等，曾任團練使、西京左藏庫使。（中国历代人物传记资料库 CBDB 38179） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王從善（CBDB 38179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38179&o=json)
