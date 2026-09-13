---
schema: wang-person/v1
id: p_ZJx55htsCzvqQx9NKbdtiR
status: merged
merged_into: p_ULdAz8jQLPmu4CmVF34TM1
display_name: 郭氏
revision: 2
cbdb_id: 163700
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f0t9TqAhlhQuUxLP0QdXJ4
        subject_person_id: p_ZJx55htsCzvqQx9NKbdtiR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 郭氏，史料所见人物。本项目依据《中国历代人物传记资料库：郭氏(王胡妻)（CBDB 163700）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kCqVAhvAgCh6bJSP-fiW2r
          claim_id: c_f0t9TqAhlhQuUxLP0QdXJ4
          source_id: s_GFw5cd_ATfUq0-2ddxyqns
          stance: supports
          locator: CBDB:163700
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_GFw5cd_ATfUq0-2ddxyqns
            source_type: api_record
            title: 中国历代人物传记资料库：郭氏(王胡妻)（CBDB 163700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163700&o=json
            external_identifier: CBDB:163700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZIgtKzBKP1GQxGEyZ6OQcR
        subject_person_id: p_ZJx55htsCzvqQx9NKbdtiR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 郭氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o3xVOROLcE04jPVAIiW88V
          claim_id: c_ZIgtKzBKP1GQxGEyZ6OQcR
          source_id: s_GFw5cd_ATfUq0-2ddxyqns
          stance: supports
          locator: CBDB:163700
          quotation: null
          interpretation_note: CBDB 明确记录的王胡配偶
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

# 郭氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 郭氏，史料所见人物。本项目依据《中国历代人物传记资料库：郭氏(王胡妻)（CBDB 163700）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 郭氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：郭氏(王胡妻)（CBDB 163700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163700&o=json)
