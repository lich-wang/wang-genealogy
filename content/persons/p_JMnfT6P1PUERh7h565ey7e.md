---
schema: wang-person/v1
id: p_JMnfT6P1PUERh7h565ey7e
status: active
merged_into: null
display_name: 王三錫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_48SDS1boGJH6ATf8NEJFi9
        subject_person_id: p_JMnfT6P1PUERh7h565ey7e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3pd9Nq1aaE7Nkni2p7oJ4Q
          claim_id: c_48SDS1boGJH6ATf8NEJFi9
          source_id: s_xjLfAvfJZMeNSGg8Gskuxj
          stance: supports
          locator: CBDB:688369
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688369）
          source: &a1
            id: s_xjLfAvfJZMeNSGg8Gskuxj
            source_type: api_record
            title: 中国历代人物传记资料库：王三錫（CBDB 688369）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688369&o=json
            external_identifier: CBDB:688369
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.516Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YNB1YuAFN35U2EisY1U1um
        subject_person_id: p_JMnfT6P1PUERh7h565ey7e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三錫，宋人物。籍贯長溪，入仕進士。（中国历代人物传记资料库 CBDB 688369）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8IlgG03BTHRar0kJpNKgoP
          claim_id: c_YNB1YuAFN35U2EisY1U1um
          source_id: s_xjLfAvfJZMeNSGg8Gskuxj
          stance: supports
          locator: CBDB:688369
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

# 王三錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三錫 | accepted |
| bio.summary | 王三錫，宋人物。籍贯長溪，入仕進士。（中国历代人物传记资料库 CBDB 688369） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三錫（CBDB 688369）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688369&o=json)
